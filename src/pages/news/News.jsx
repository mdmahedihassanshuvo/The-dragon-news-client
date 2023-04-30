import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const News = () => {

    const news = useLoaderData()

    const { _id, title, image_url, details, category_id } = news

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <div>
                <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={first} />
                                <Card.Body>
                                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={second} />
                                <Card.Body>
                                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={third} />
                                <Card.Body>
                                    <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </div>
        </div>
    );
};

export default News;