"use client";
import { useRouter } from "next/router";
import getStripe from "@/utils/get_stripe";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

const ResultPage = () => {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
    const session_id= searchParams.get('session_id')

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      if (!session_id) return;
      try {
        const res = await fetch(
          `/api/checkout_session?session_id=${session_id}`
        );
        const sessionData = await res.json();
        if (res.ok) {
          setSession(sessionData);
        } else {
          setError(sessionData.error);
        }
      } catch (err) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchCheckoutSession();
  }, [session_id]);

  if (loading) {
    return (
      <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
        <Typography variant="h6"> loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6"> {error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="100vw" sx={{ textAlign: "center", mt: 4 }}>
      {session.payment_status === "paid" ? (
        <>
          <Typography variant="h4"> Thank You for Purchasing</Typography>
          <Box sx={{ mt:22}}>
            <Typography variant="h6"> Session ID:{session_id}</Typography>
            <Typography variant="body1">
                we have recieved your payment, you will shortly recieve an email about your order details.
            </Typography>
          </Box>
        </>
      ) : (
        <><Typography variant="h4">Payment failed</Typography>
        <Box sx={{mt:22}}>
            <Typography variant="body1">
                your payment was not successful. Please Try again</Typography></Box></>
      )}
    </Container>
  );
};

export default ResultPage;
