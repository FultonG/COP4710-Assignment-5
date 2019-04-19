import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import bookImg from "../book.svg"
import { Link } from 'react-router-dom';
import API from "../utils/API";
function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.getBooks().then((res) => {
            setBooks(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <Container>
            <Row>
                {books.map(book => (
                    <Col xs={12} md={4} key={book.BookCode}>
                        <Link to={`/book/${book.BookCode}`}>
                            <Card className="rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                                <Card.Body>
                                    <Image src={bookImg} fluid />
                                    <Card.Title>{book.Title} <Badge variant="warning">{book.Type}</Badge></Card.Title>
                                    <Card.Subtitle>Published by: {book.PublisherCode}</Card.Subtitle>
                                </Card.Body>
                                <Card.Footer>${book.Price} {book.Paperback == "Y" ? "Available in Paperback!" : null}</Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Books;