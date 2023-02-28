import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  return (
    <div>
      <div>
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              align: "center",
              width: "30vh",
              padding: 20,
            }}
            autoComplete="off"
          >
            <h2 align="center">SignUp</h2>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
            />
            <br />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
            />
            <br />
            <br />
            &nbsp;&nbsp;
            <Button>
              <Link to="/">SignUp</Link>
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default SignUp;
