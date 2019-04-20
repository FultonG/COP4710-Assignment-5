import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";
function NewBookForm() {
    const [code, setCode] = useState("");
    const [title, setTitle] = useState("");
    const [publisherCode, setPublisherCode] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [paperback, setPaperback] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let paperbackDb = paperback ? "Y" : "N";
        API.createBook({ BookCode: code, Title: title, PublisherCode: publisherCode, Type: type, Price: price,  PaperBack: paperbackDb})
        .then(res => {
            setSuccess(true);
        })
        .catch(err => {
            console.log(err)
            setAlert(true);
        })
    }

    function handleCodeChange(e){
        setCode(e.currentTarget.value);
    }

    function handleTitleChange(e) {
        setTitle(e.currentTarget.value);
    }

    function handlePublisherCodeChange(e) {
        setPublisherCode(e.currentTarget.value);
    }

    function handleTypeChange(e) {
        setType(e.currentTarget.value);
    }

    function handlePaperbackChange(e) {
        setPaperback(e.currentTarget.value);
    }

    function handlePriceChange(e) {
        setPrice(e.currentTarget.value);
    }

    return (
        <Container>
            {alert ? <Alert  variant="danger">There was an error creating your book</Alert>: null}
            {success ? <Alert  variant="success">Your Book was created successfully</Alert> : null}
            <Row className="justify-content-md-center">
                <Col md={8} xs={12}>
                    <Card style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Book Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Code" value={code} onChange={handleCodeChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Title" value={title} onChange={handleTitleChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Publisher Code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Publisher Code" value={publisherCode} onChange={handlePublisherCodeChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Book Type</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Type" value={type} onChange={handleTypeChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Book Price" value={price} onChange={handlePriceChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="Paperback?" value={paperback} onChange={handlePaperbackChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default NewBookForm;