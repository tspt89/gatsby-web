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

    return(
        <CardColumns>
            {data.Events.edges.map((item, i) => (
            <Card>
                <Card.Img variant="top" src={item.node.data.Graphics[0].url} />
                <Card.Body>
                    <Card.Title>{item.node.data.Event_name}</Card.Title>
                    <Card.Text>
                    {item.node.data.Description}
                    </Card.Text>
                    <Button variant="outline-secondary" href="/eventos">Go</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <strong> {item.node.data.Date}</strong> 
                        <br/>
                        <Countdown date={item.node.data.Date}/>
                    </small>
                </Card.Footer>
            </Card>
        ))}
        </CardColumns> 
    );
};

export default Cards

