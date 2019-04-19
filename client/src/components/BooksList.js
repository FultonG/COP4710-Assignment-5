import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import building from "../building.svg"
import API from "../utils/API";
function BooksList(props) {
    const [book, setBook] = useState([]);

    useEffect(() => {
        API.getBook(props.match.params.id).then((res) => {
            setBook(res.data);
            console.log(res.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {book.map(singleBook => (
                    <Col xs={12} md={6} key={singleBook.BranchNum}>
                        <Card className="rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                            <Card.Body>
                                <Card.Title>{singleBook.Title} by {singleBook.AuthorFirst} {singleBook.AuthorLast} <Badge variant="warning">{singleBook.Type}</Badge></Card.Title>
                                <Card.Subtitle>Published by: {singleBook.PublisherName}</Card.Subtitle>
                                <Image src={building}></Image>
                                <Card.Text>
                                    <Badge variant="info">{singleBook.OnHand}</Badge> Available at {singleBook.BranchName}: {singleBook.BranchLocation}, {singleBook.City}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>${singleBook.Price} {singleBook.Paperback == "Y" ? "Available in Paperback!" : null}</Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BooksList;