import React from 'react'
import { Card, Container } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
export const MyCard = (props) => {

  return (
    <div>
      <Container  >
        <Card onClick={() => console.log(props)} style={{ cursor: "pointer" }} >
          <Card.Body>
            <Card.Img height={185} width={85} src={process.env.PUBLIC_URL +'/'+ props.imgName}>

            </Card.Img>
            <ReactStars
              count={5}
              value={props.starval}
              edit = {false}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"/>
            <Card.Title>{props.productName}</Card.Title>
            <Card.Subtitle>{props.brand}</Card.Subtitle>
            <Card.Text>Price:{props.price}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default MyCard;