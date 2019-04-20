import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import book from "../book.svg"
import API from "../utils/API";
function AuthorsList(props) {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        API.getAuthor(props.match.params.id).then((res) => {
            setAuthor(res.data);
            console.log(res.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {author.map(singleAuthor => (
                    <Col xs={12} md={6} key={singleAuthor.BookCode}>
                        <Link to={`/book/${singleAuthor.BookCode}`}>
                            <Card className="rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                                <Card.Body>
                                    <Card.Title>{singleAuthor.Title} by {singleAuthor.AuthorFirst} {singleAuthor.AuthorLast} <Badge variant="warning">{singleAuthor.Type}</Badge></Card.Title>
                                    <Card.Subtitle>Published by: {singleAuthor.PublisherCode}</Card.Subtitle>
                                    <Image src={book}></Image>
                                </Card.Body>
                                <Card.Footer>${singleAuthor.Price} {singleAuthor.Paperback == "Y" ? "Available in Paperback!" : null}</Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AuthorsList;