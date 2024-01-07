import { Container, Row, Image, Col } from "react-bootstrap";

 import Vedant from "./Image/230940320127.png";
 import Akhilesh from "./Image/230940320014.png";
 import Jay from "./Image/230940520028.jpeg";
 import Lalit from "./Image/230940320058.jpeg";
 import Prathamesh from "./Image/230940320080.jpg";

export function Contact() {
    return (
        <Container fluid className="align-items-center justify-content-center" style={{ backgroundColor: 'black', textAlign: "center" }}>
            <Row><Image src='{banner2}'></Image></Row>

            <Row className="mt-4 align-items-center justify-content-center" style={{color:'white'}}>

                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={Vedant} rounded />
                    <h3>Vedant Sahu</h3>
                    <h5>vedantsahu668@gmail.com</h5>
                    <h5>9993161044</h5>
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={Akhilesh} rounded />
                    <h3>Akhilesh Awachat</h3>
                    <h5>akhileshawachat65@gmail.com</h5>
                    <h5>9403836501</h5>
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={Jay} rounded />
                    <h3>Jay Khadu</h3>
                    <h5>jaykadu88@gmail.com</h5>
                    <h5>9370217214</h5>
                </Col>
            </Row>

            <Row className="mt-4 align-items-center justify-content-center" style={{color:'white'}}>

                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={Lalit} rounded />
                    <h3>Lalit Nanker</h3>
                    <h5>vedantsahu668@gmail.com</h5>
                    <h5>9993161044</h5>
                </Col>
                <Col xs={6} md={3}>
                    <Image style={{height:'300px'}} src={Prathamesh} rounded />
                    <h3>Prathmesh Lokare</h3>
                    <h5>prathamlokare@gmail.com</h5>
                    <h5>7447673698</h5>
                </Col>
            </Row>
        </Container>
    );
}