import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { priceId } = await req.json();

    const priceMap = {
      price_basic: {
        name: "Basic subscription",
        amount: 500,
      },
      price_pro: {
        name: "Pro subscription",
        amount: 1000,
      },
      price_expert: {
        name: "Expert subscription",
        amount: 1500,
      },
    };

    if (!priceMap[priceId]) {
      throw new Error("Invalid price ID");
    }

    const params = {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: priceMap[priceId].name,
            },
            unit_amount: priceMap[priceId].amount,
            recurring: {
              interval: "month",
              interval_count: 1,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get(
        "Referer"
      )}result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get(
        "Referer"
      )}result?session_id={CHECKOUT_SESSION_ID}`,
    };

    const checkoutSession = await stripe.checkout.sessions.create(params);

    return NextResponse.json(checkoutSession, { status: 200 });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new NextResponse(
      JSON.stringify({ error: { message: error.message } }),
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const session_id = searchParams.get("session_id");

  try {
    if (!session_id) {
      throw new Error("Session ID is required");
    }

    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json(checkoutSession);
  } catch (error) {
    console.error("Error retrieving checkout session:", error);
    return NextResponse.json(
      { error: { message: error.message } },
      { status: 500 }
    );
  }
}
