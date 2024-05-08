import React from "react";
import "./Contmaker.css"

function Cont_maker({tag,toCreate}) {
  const Elem = tag
  return (
    <>
      <div className="container">
        <Elem>{toCreate}</Elem>
      </div>
    </>
  );
}

export default Cont_maker;
