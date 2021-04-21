import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Badge, Card, CardColumns } from "react-bootstrap";
import Countdown from 'react-countdown';

const Events = () => {
    const data = useStaticQuery(graphql`
        {
            Events: allAirtable(sort: {fields: data___Date, order: ASC}) {
                edges {
                    node {
                        data {
                            Date(formatString: "MMM DD, YYYY")
                            Description
                            Event_name
                            Type
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
                        <br/>
                        <Badge pill variant="success">
<<<<<<< HEAD
                            {item.node.data.Type}
=======
                            {item.node.data.Primary_audience_s_[1]}
>>>>>>> 54e06fdf3810eabf9ef40d61485a9aa5641ad4c8
                        </Badge>{' '}
                    </Card.Text>
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

export default Events
