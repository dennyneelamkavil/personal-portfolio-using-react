import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import MiStore from "./Photos/Mi Store Copy.png";
import Text2Images from "./Photos/Text-2-Images.png";
import eCom from "./Photos/eCom.png";
import DigitalClock from "./Photos/Digital Clock.png";
import EcomFullstack from "./Photos/ECOM-FullStack.png";
import MoviePass from "./Photos/moviepass.png";
import "./Project.css";

const Projects = () => {
  return (
    <Container>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={MoviePass}
            alt={'Screenshot of the website "MoviePass"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
            <ListGroup.Item>
              <h3>
                <b>{"Movie Pass"}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                <p>
                  The full-stack application comprises the Admin Dashboard,
                  Theater Owner Dashboard, and User Dashboard, all integrated
                  within the same URL and differentiated by distinct login
                  credentials. You can access the different dashboards using the
                  following credentials:
                </p>
                <ul>
                  <li>
                    <b>Admin</b>
                    <br />
                    Email: admin@gmail.com
                    <br />
                    Password: 123456
                  </li>
                  <li>
                    <b>Theater Owner</b>
                    <br />
                    Email: keshu@gmail.com
                    <br />
                    Password: 123456
                  </li>
                  <li>
                    <b>Regular User</b>
                    <br />
                    Email: dennynj4748@gmail.com
                    <br />
                    Password: 123456
                  </li>
                </ul>
              </h4>
            </ListGroup.Item>
            <ListGroupItem>
              <a
                href="https://moviepass-dennynj.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={EcomFullstack}
            alt={'Screenshot of the website "Ecom Admin Dashboard"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
            <ListGroup.Item>
              <h3>
                <b>{"Ecom Admin Dashboard"}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {`A full-stack e-commerce website that integrates the front-end, back-end, and database. It features a user-friendly dashboard for adding, editing, and deleting products, with images stored on Cloudinary.`}
              </h4>
            </ListGroup.Item>
            <ListGroupItem>
              <a
                href="https://ecom-project-fullstack.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={DigitalClock}
            alt={'Screenshot of the website "Digital Clock"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
            <ListGroup.Item>
              <h3>
                <b>{"Digital Clock"}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {`This digital clock is a minimalist web application displays the current time accurately.Simple Interface,Real-Time Updates,Responsive Design are some of the key features and it is developed using HTML, CSS, and JavaScript.`}
              </h4>
            </ListGroup.Item>
            <ListGroupItem>
              <a
                href="https://digitalclockbydenny.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={Text2Images}
            alt={'Screenshot of the website "Text-2-Images"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
            <ListGroup.Item>
              <h3>
                <b>{"Text-2-Images"}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {
                  "Experience Text2Image, the tool that converts text into stunning visuals, in our trial version. Customize styles, colors, and layouts to create unique artwork. Please note, our trial version may have occasional issues. Join our community and start visualizing your words today!"
                }
              </h4>
            </ListGroup.Item>
            <ListGroupItem>
              <a
                href="https://text-2-image.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={eCom}
            alt={'Screenshot of the website "eCom"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
            <ListGroup.Item>
              <h3>
                <b>{"eCom"}</b>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>
                {`eCommerce website model 'eCom',aiming to revolutionize online shopping experiences!
                                🛒 About 'eCom': it's in the developing stage: Home page is completely built and deployed. 
                                I'll be continuously updating the repository and website to its full condition as soon as possible
                                🔍 Key Features:
                                Browse through various pages, including home, product details, individual product pages, cart, user profile, and admin profile
                                Experience 'eCom' seamlessly across devices with its responsive design and user-friendly interface.`}
              </h4>
            </ListGroup.Item>
            <ListGroupItem>
              <a
                href="https://dennynj-ecom.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={4}>
          <img
            src={MiStore}
            alt={'Screenshot of the website "Mi Store Copy"'}
            className="w-100 shadow bg-white p-4 m-4"
          />
        </Col>
        <Col md={8}>
          <ListGroup className="listgroup">
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
              <a
                href="https://dennyneelamkavil.github.io/Mi-Store/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Check out Project
              </a>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
