import Image from "next/image";
import getStripe from "@/utils/get_stripe";
import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import { Container,Grid, Box, Typography, Button, Toolbar, AppBar } from "@mui/material";



export default function Home() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{mt: 2}}>
          Learn More
        </Button>
      </Box>

      <Box sx={{my: 6}}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {''}
              Our AI intelligently breaks down your text into concise
              flashcards, perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Accessible Anywhere</Typography>
            <Typography>
              {''}
              Acces your flashcards from anywhere, on any device. Study
               on the go with ease
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Third Input</Typography>
            <Typography>
              {''}
              Simply input your text and let our software do the rest. Creating
              flashcards has never been easier.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" component="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3,
              border: '1ppx solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6">$5/month</Typography>
              <Typography>
                {''}
                Access to basic flashcard features and limited storage
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
            sx={{
              p: 3,
              border: '1ppx solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5">Pro</Typography>
              <Typography variant="h6">$10/month</Typography>
              <Typography>
                {''}
                Access to more flashcard features and increased amount of storage
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Pro</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
            sx={{
              p: 3,
              border: '1ppx solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
              <Typography variant="h5">Expert</Typography>
              <Typography variant="h6">$15/month</Typography>
              <Typography>
                {''}
                Access to all flashcard features and highest amount of storage
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Expert</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

