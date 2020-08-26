import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = ({data}) => {
    return (
        <Card className="cards">
            <Card.Img variant="top" src={data.links.mission_patch} />
            <Card.Body>
                    <strong>{data.mission_name} #{data.flight_number}</strong><br/>
                    <strong>Mission Ids</strong>
                    <ul>{data.mission_id.map(d => <li key={d}>{d}</li>)}</ul><br/>
                    <strong>Launch Year</strong>:{data.launch_year}<br/>
                    <strong>Successful Launch</strong>:{data.launch_success+''}<br/>
                    <strong>Successful Landing</strong>:{data.launch_landing}
            </Card.Body>
        </Card>
    );
}
 
export default Cards;