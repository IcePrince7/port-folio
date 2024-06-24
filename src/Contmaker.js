import React from "react";
import "./Contmaker.css"

function Cont_maker({tag,toCreate}) {
  const Elem = tag
  return (
    <>
        <Elem className ="Contact">{toCreate}</Elem>
    </>
  );
}

export default Cont_maker;
