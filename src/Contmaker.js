import React from "react";
import "./Contmaker.css"

function Cont_maker({tag,toCreate}) {
  const Elem = tag
  return (
    <>
        <Elem>{toCreate}</Elem>
    </>
  );
}

export default Cont_maker;
