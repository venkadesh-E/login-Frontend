import logo from "./logo.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";
//import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Signup";

// function App() {
//   let formValues = {
//     username: "",
//     email: "",
//     password: "",
//   };
//   const [formData, setFormData] = useState(formValues);
//   const [setForm, setFor] = useState([]);
//   const [setPage, setNextPage] = useState(true);
//   useEffect(() => {
//     async function getData() {
//       const response = await axios.get("http://localhost:5000/sigin");
//       setFor(response.data);
//     }
//     getData();
//   }, []);
//   const handleSubmit = async (e) => {
//     console.log("eee", e);
//     console.log("forms", formData);
//     e.preventDefault();
//     const response = await axios.post("http://localhost:5000/signup", {
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//     });

//     // setFor([...setForm, response.data]);
//     console.log(response.data);
//   };

//   return (
//     <div>
//       <Container maxWidth="sm">
//         <Box
//           component="form"
//           sx={{
//             align: "center",
//             width: "30vh",
//             padding: 20,
//             // backgroundImage: `url("https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
//             // backgroundRepeat: "no-repeat",
//           }}
//           autoComplete="off"
//           onSubmit={(e) => handleSubmit(e)}
//         >
//           <h2 align="center">Inko</h2>
//           <TextField
//             id="standard-basic"
//             label="Username"
//             variant="standard"
//             value={formData.username}
//             onChange={(e) =>
//               setFormData({ ...formData, username: e.target.value })
//             }
//           />
//           <br />
//           <TextField
//             id="standard-basic"
//             label="Email"
//             variant="standard"
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//           <br />
//           <TextField
//             id="standard-basic"
//             label="Password"
//             variant="standard"
//             type="password"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//           />
//           <br />
//           <br />
//           <Button variant="contained" type="submit">
//             SignUp
//           </Button>
//         </Box>
//       </Container>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
