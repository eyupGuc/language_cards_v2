import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, options, img }) => {
  const [showDesc, setShowDesc] = useState(false);
  console.log(showDesc)
  //   console.log(Lang);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2"
      onClick={() => setShowDesc(!showDesc)}
    >
      <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>
    </Container>
  );
};

export default Language;
