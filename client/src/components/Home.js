import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import book from "../book.svg"
import author from "../author.svg"
import inventory from "../inventory.svg"
import publisher from "../publisher.svg"
import branch from "../branch.svg"
import reset from "../reset.svg"

class Home extends Component {
    render() {
        var menuOptions = [{ name: "Authors", link: "/authors", icon: author }, { name: "Books", link: "/books", icon: book }, { name: "Inventory", link: "#", icon: inventory }, { name: "Publishers", link: "#", icon: publisher }, { name: "Branch", link: "#", icon: branch }, { name: "Reset Database", link: "#", icon: reset }];
        return (
            <Container>
                <Row>
                    {menuOptions.map(option => (
                        <Col xs={12} md={4}>
                            <Link to={option.link} className="cardLink">
                                <Card style={{ margin: "20px" }}>
                                    <Card.Body className="rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease" }}>
                                        <Image src={option.icon} fluid />
                                        <Card.Title>{option.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Home;