import React from "react";
import "./Contmaker.css"

function Cont_maker({tag,toCreate}) {
  const Elem = tag
  return (
    <>
        <Elem ClassName ="Contact">{toCreate}</Elem>
    </>
  );
}

export default Cont_maker;
