import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Card, CardColumns } from "react-bootstrap";
import Countdown from 'react-countdown';

const Cards = () => {
    const data = useStaticQuery(graphql`
        {
            Events: allAirtable(sort: {fields: data___Date, order: ASC}, limit: 6) {
                edges {
                    node {
                        data {
                            Date(formatString: "MMM DD, YYYY")
                            Description
                            Event_name
                            Graphics {
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    let a = []
    data.Events.edges.forEach(element => {
        console.log("Card eventos",typeof(element.node.data.Date),new Date(element.node.data.Date), Date.now())
        if(new Date(element.node.data.Date) > Date.now()){
            a.push(element.node.data)
        }
    });

    return(
        <CardColumns>
            {a.map((item, i) => (
            <Card key={item.Event_name}>
                <Card.Img variant="top" src={item.Graphics[0].url} />
                <Card.Body>
                    <Card.Title>{item.Event_name}</Card.Title>
                    <Card.Text>
                    {item.Description}
                    </Card.Text>
                    <Button variant="outline-secondary" href="/eventos">Go</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <strong> {item.Date}</strong> 
                        <br/>
                        <Countdown date={item.Date}/>
                    </small>
                </Card.Footer>
            </Card>
        ))}
        </CardColumns> 
    );
};

export default Cards

