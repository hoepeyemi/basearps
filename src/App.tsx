import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SnackbarProvider } from "notistack";

import Home from "./pages/home";
import Play from "./pages/Play";
import Game from "./pages/game";
import Leaderboard from "./pages/Leaderboard";
import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import React from "react";
// import './globals.css';
import OnchainProviders from './OnchainProviders'; 

function App() {


    // const client = createThirdwebClient({
    //   clientId: "c14e8f9ebdcdeb06a96aa80b0a07efe6",
    // })
  
    return (
      <>
            <OnchainProviders>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/play" element={<Play />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Router>
          <ToastContainer autoClose={3000} draggableDirection="x" />
        </OnchainProviders>
  
      </>
    );
  }
  
  export default App;
  



 
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }