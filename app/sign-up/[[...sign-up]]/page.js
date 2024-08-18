import { SignUp } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vw">
      <AppBar position="static" sx={{ backgroundColor: "#3f51bf" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard Saas
          </Typography>
          <Button color="inherit">
            <Link href="/sign-in" passHref>
              login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/sign-up" passHref>
              Sign up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant= "h4" gutterBottom> Sign Up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
