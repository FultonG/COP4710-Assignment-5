import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import authorImg from "../author.svg"
import API from "../utils/API";
function Authors() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        API.getAuthors().then((res) => {
            setAuthors(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <Container>
            <Row>
                {authors.map(author => (
                    <Col xs={12} md={4} key={author.AuthorNum}>
                            <Card style={{ margin: "20px" }}>
                                <Card.Body className="rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease" }}>
                                    <Image src={authorImg} fluid />
                                    <Card.Title>{author.AuthorFirst} {author.AuthorLast}</Card.Title>
                                </Card.Body>
                            </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Authors;