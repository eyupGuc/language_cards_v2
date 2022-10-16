import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, options, img }) => {
  const [showImage, setShowImage] = useState(false);
  console.log(showImage)
  //   console.log(Lang);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100"
      onClick={() => setShowImage(!showImage)}
    >
        {showImage && ( <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>)}
     
      {showImage && (<ol className="h-100 d-flex flex-column justify-container-center">
        {options.map((item)=>{
            return(<li className="h5 text-start">{item}</li>)
        })}
      </ol>)}
    </Container>
  );
};

export default Language;
