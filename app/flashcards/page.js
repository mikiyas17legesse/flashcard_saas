"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  collection,
  CollectionReference,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/router";
import { Card, CardActionArea, CardContent, Container, Typography } from "@mui/material";

export default function Flashcards() {
  const { isLoaded, isSignedin, user } = useUser();
  const [flashcards, setFlashCards] = useState([]);

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, "users"), user.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        console.log(collections)
        setFlashCards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedin) {
    return <></>;
  }

  const handleCardClick = (id) => {
    useRouter.push(`/flashcard?id=${id}`);
  };

  return (
    <Container maxWidth="100vw">
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {flashcards.map((flashcard, index) => {
          <Grid item xs={12} sm={6} md={4} keys={index}>
            <Card>
              <CardActionArea
                onClick={() => {
                  handleCardClick(id);
                }}
              ></CardActionArea>
              <CardContent>
                <Typography variant= 'h6'>
                    {flashcard.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        })}
      </Grid>
    </Container>
  );
}
