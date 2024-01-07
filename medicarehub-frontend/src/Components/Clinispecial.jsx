import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./AllCss.css";
import { useNavigate } from "react-router-dom";

export function Clinispecial() {
  const navigate = useNavigate();
  return (
    <Container className="Clinispecial">
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center">
            <h2>Clinic and Specialties</h2>
            <p className="sub-title">
              Find experienced doctors across all specialties
            </p>
            <br></br>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="specialities d-flex justify-content-around">
                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/general">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/general_physician.png"
                        className="img-fluid"
                        alt="General Physician"
                      />
                    </LinkContainer>
                  </div>
                  <p>General Physician</p>
                </a>

                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/neuro">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/specialities-02.png"
                        className="img-fluid"
                        alt="Neurology"
                      />
                    </LinkContainer>
                  </div>
                  <p>Neurology</p>
                </a>

                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/urology">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/specialities-01.png"
                        className="img-fluid"
                        alt="Urology"
                      />
                    </LinkContainer>
                  </div>
                  <p>Urology</p>
                </a>

                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/ortho">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/specialities-03.png"
                        className="img-fluid"
                        alt="Orthopedic"
                      />
                    </LinkContainer>
                  </div>
                  <p>Orthopedic</p>
                </a>
                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/cardio">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/specialities-04.png"
                        className="img-fluid"
                        alt="Cardiologist"
                      />
                    </LinkContainer>
                  </div>
                  <p>Cardiologist</p>
                </a>
                <a>
                  <div className="speicality-img">
                    <LinkContainer to="/dentist">
                      <img
                        src="https://www.quickobook.com/assets/img/specialities/specialities-05.png"
                        class="img-fluid"
                        alt="Dentist"
                      />
                    </LinkContainer>
                  </div>
                  <p>Dentist</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}