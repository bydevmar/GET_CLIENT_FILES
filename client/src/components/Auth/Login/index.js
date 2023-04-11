import React from "react";
import { Input } from "reactstrap";
import "./style.css";

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Cabinet Latif</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: 1 }}
                >
                  Se connecter
                </h3>
                <div className="form-outline mb-4">
                  <Input
                    id="i_email"
                    name="i_email"
                    placeholder="Adresse e-mail"
                    type="email"
                  />
                </div>
                <div className="form-outline mb-4">
                  <Input
                    id="i_mdp"
                    name="i_mdp"
                    placeholder="Mot de passe"
                    type="password"
                  />
                </div>
                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Connexion
                  </button>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Mot de passe oublié ?
                  </a>
                </p>
                <p>
                  Vous n'avez pas de compte?{" "}
                  <a href="#!" className="link-info">
                    Obtenez-en un
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
