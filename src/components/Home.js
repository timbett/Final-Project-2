import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
 
  if (!isLoggedIn) return <Redirect to="/login" />;

  return <div className="imageCard">
    
  </div>;
}

export default Home;
