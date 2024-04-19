import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import project1 from './Photos/Mi Store Copy.png'
import project2 from './Photos/Text-2-Images.png'
import './Project.css'



const Projects = () => {
    return (
        <Container>
                <Row className='my-4'>
                    <Col md={4}>
                        <img src={project1} alt={'project 1'} className='w-100 shadow bg-white p-4 m-4' />
                    </Col>
                    <Col md={8}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h3>
                                    <b>{"Mi Store Copy"}</b>
                                </h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>
                                    {"This project is completed as a part of learning HTML and CSS"}
                                </h4>
                            </ListGroup.Item>
                            <ListGroupItem>
                            <a href="https://dennyneelamkavil.github.io/Mi-Store/" target="_blank" rel="noopener noreferrer" className="project-button">Check out Project</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className='my-4'>
                    <Col md={4}>
                        <img src={project2} alt={'project 1'} className='w-100 shadow bg-white p-4 m-4' />
                    </Col>
                    <Col md={8}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h3>
                                    <b>{"Text-2-Images"}</b>
                                </h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4>
                                    {"Experience Text2Image, the tool that converts text into stunning visuals, in our trial version. Customize styles, colors, and layouts to create unique artwork. Please note, our trial version may have occasional issues. Join our community and start visualizing your words today!"}
                                </h4>
                            </ListGroup.Item>
                            <ListGroupItem>
                            <a href="https://text-2-image.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-button">Check out Project</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
        </Container>
    )
}

export default Projects