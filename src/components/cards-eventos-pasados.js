import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {  Card, CardColumns } from "react-bootstrap";


const CardsPasados = () => {
    const data = useStaticQuery(graphql`
        {
            Events: allAirtable(sort: {fields: data___Date, order: ASC}, limit: 6) {
                edges {
                    node {
                        data {
                            Date
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
    console.log("Data tyoe of node", typeof data.Events.edges)
    let a = []
    data.Events.edges.forEach(element => {
        console.log("Card eventos",typeof(element.node.data.Date),new Date(element.node.data.Date), Date.now())
        if(new Date(element.node.data.Date) < Date.now()){
            a.push(element.node.data)
        }
    });
    console.log(a)
    return(
        <CardColumns>
            {a.map((item, i) => (
            <Card>
                <Card.Img variant="top" src={item.Graphics[0].url} />
                <Card.Body>
                    <Card.Title>{item.Event_name}</Card.Title>
                    <Card.Text>
                    {item.Description}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <strong> {item.Date}</strong> 
                        <br/>
                        
                    </small>
                </Card.Footer>
            </Card>
        ))}
        </CardColumns> 
    );
};

export default CardsPasados

