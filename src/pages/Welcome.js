// Welcome Page
import React from "react";
import selfie from '../assets/images/selfie.jpg'

const Welcome = () => {
    return (
      <main>
        <h1 className="text-center">Welcome to my portfolio.  Please take a look around and learn a little about me, what I have done, and how I work.</h1>
        <div className="selfie">
          <img src={selfie}  width="500" height="800"/>
        </div>
      </main>
    );
  };

export default Welcome;