import React, { useState, useEffect } from "react";
import "./prof.css";

function Profile({params}) {
  const [enlarged, setEnlarged] = useState(false);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setEnlarged(false);
        params(false)
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [params]);

  const toggleEnlarged = () => {
    params(!enlarged)
    setEnlarged(!enlarged);
  };

  return (
    <div className= {!enlarged ? "profile": "after enprof"} onClick={toggleEnlarged}>
      <img
        className={enlarged ? "Myprof enlarged" : "Myprof"}
        src="myPhoto.png"
        alt="prof"
      />
    </div>
  );
}

export default Profile;