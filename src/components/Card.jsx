import React from "react";
import Language from "./Language";
import Container from "react-bootstrap/Container";
import { data } from "../helpers/data"; // export ile yapılıyor eğer default olsa id data olabilirdi.

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-4 mt-4 " style={{ background: "#F48B29" }}>
      <h1>Languages</h1>
{data.map((lang)=>{
    return(<Language Lang={lang}/>)
})}
      
    </Container>
  );
};

export default Card;
