import imgLogo from "../../../assets/img/logo.png";
import imgBgd from "../../../assets/img/8.jpg";

import React from "react";

import {
  Input,
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Container,
  Card,
  CardBody,
} from "reactstrap";

function Login() {
  return (
    <Container fluid className="p-3 my-4 d-flex justify-content-center">
      <Row xs="1">
        <Col >
          <img
            style={{
              borderRadius: "1rem",
              maxHeight: "610px",
              maxWidth: "610px",

            }}
            src={imgBgd}
            alt="background"
            width="500px"
          />
        </Col>

        <Col>
          <Card
            className="bg-whith mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <CardBody className="p-4 w-100 d-flex flex-column">
              <div className="justify-content-center">
                <img
                  src={imgLogo}
                  className="rounded text-center display"
                  width="100px"
                  height="100px"
                  alt="logocabinet"
                />
                <h2 className="fw-bold mb-2 text-center display">
                  Se Connecter
                </h2>
              </div>

              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <FormGroup>
                <Label for="i_email">Adresse e-mail</Label>
                <Input
                  id="i_email"
                  name="email"
                  placeholder="admin@gmail.com"
                  type="email"
                />
              </FormGroup>

              <FormGroup>
                <Label for="i_mdp">Mot de passe</Label>
                <Input
                  id="i_mdp"
                  name="mdp"
                  placeholder="admin1234"
                  type="password"
                />
              </FormGroup>

              <Row className="mt-4 mb-4">
                <Col>
                  <FormGroup check>
                    <Input
                      id="exampleCheckbox"
                      name="checkbox"
                      type="checkbox"
                    />
                    <Label check for="exampleCheckbox">
                      Souviens de moi
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <a href="!#">Mot de passe oublié?</a>
                  </FormGroup>
                </Col>
              </Row>

              <Button color="primary" size="lg">
                Connexion
              </Button>

              <Container className="mt-3">
                <Label>
                  N'avez-vous pas de compte ? <a href="#!">Obtenez-en un.</a>
                </Label>
              </Container>

              <hr className="my-1" />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
