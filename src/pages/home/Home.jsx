import React, { useContext, useEffect, useState } from "react";
import styles from "./home.module.scss";
import NavBar from "../../components/navbar/NavBar";
import Body from "../../components/body/Body";
import { AuthContext } from "../../contexts/AuthContext";
import { startLocationTracking } from "../../firebase/firebase";

const Home = () => {
  const { currentUser } = useContext(AuthContext);





  useEffect(() => {
    const userId = currentUser.user.email;  
    startLocationTracking(userId);
  }, []);




  return (
    <>
      <div className={`${styles.home} `}>
       
        
      <div>
      <h1>Tracking Location...</h1>
    </div>


      </div>
    </>
  );
};

export default Home;
