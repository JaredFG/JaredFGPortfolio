import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class ExperienceGrid extends Component {
  render() {
    let sectionName = "Courses"; // Asumimos un cambio de contexto a "Cursos"
    let coursesList = null;

    if (this.props.resumeCourses && this.props.resumeBasicInfo) {
      // Verificar si existe una propiedad específica para el nombre de la sección de cursos, si no, usar "Courses"
      sectionName =
        this.props.resumeBasicInfo.section_name.courses || "Courses";
      coursesList = this.props.resumeCourses.courses.map((course, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                {course.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ textAlign: "center" }}
              >
                {course.school}
              </Card.Subtitle>
              <Card.Text style={{ textAlign: "center" }}>
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  Course Link
                </a>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="mt-auto" style={{ textAlign: "center" }}>
              <small className="text-muted">Completed in {course.date}</small>
            </Card.Footer>
          </Card>
        </Col>
      ));
    }

    return (
      <section id="courses-grid" className="pb-5">
        <Container>
          <Row className="mb-4">
            <Col>
              <h1
                className="section-title text-center"
                style={{ color: "black" }}
              >
                {sectionName}
              </h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>{coursesList}</Row>
        </Container>
      </section>
    );
  }
}

export default ExperienceGrid;
