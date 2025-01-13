"use client";

import { useEffect, useState } from "react";
import SignUpPage from "../components/SignUpPage";


const App = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  },[])

  if(isClient)
  return(
    <>
      <SignUpPage />
      </>
    
  )
};

export default App;