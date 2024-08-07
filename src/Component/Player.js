import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Player=({ name, team, nationality, num, age, imageURL })=>{
    
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} alt="loading..." className="card-img-top" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text as="div">
            <div>Team: {team}</div>
            <div>Nationality: {nationality}</div>
            <div>Num: {num}</div>
            <div>Age: {age}</div>
          </Card.Text>
          <Button variant="primary">Voir plus</Button>
        </Card.Body>
      </Card>

    )

};
Player.defaultProps={
    name: "Player Name",
    team: "Team Name",
    nationality: "Nationality",
    num: "10",
    age: "25",
    imageURL: "https://via.placeholder.com/150"}
export default Player