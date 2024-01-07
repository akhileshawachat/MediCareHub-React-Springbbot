import { Col, Container, Row,Image } from "react-bootstrap";
import pic2 from "./Image/pic2.png";

export function About() {
    return (
        <Container className="mt-5">
           
            <Row><Image src=""/></Row> 
            <Row>
            <Col className="lg-4">
                <h1>Mission</h1>
                <p>Our mission is to empower individuals on their journey to optimal health. We understand that every moment counts when it comes to well-being, and we're dedicated to providing a seamless and efficient platform for scheduling doctor appointments.</p>
                <h4>Accessibility:</h4><p>We believe that healthcare should be accessible to everyone. Our platform makes it easy for you to connect with qualified healthcare professionals at your convenience.</p>
                <h4>Empowerment:</h4><p>We empower you to take control of your health. By simplifying the appointment booking process, we encourage proactive healthcare management and preventive measures.</p>
                <h4>Quality Care: </h4><p>We are committed to connecting you with experienced and compassionate healthcare providers. Your health is our priority, and we ensure that you have access to top-notch medical professionals.</p>
            </Col >
            <Col className="lg-4">
                <h1>Vision</h1>
                <p>We envision a future where healthcare is effortlessly accessible, patient-centric, and driven by technology. Our vision is to transform the healthcare landscape by revolutionizing the way individuals connect with healthcare professionals.</p>
                <h4>Seamless Access:</h4><p>We strive for a future where individuals can seamlessly access healthcare services. Our vision is a world where booking a doctor's appointment is as simple as a few clicks, making quality healthcare accessible to all.</p>
                <h4>Innovation-Driven Healthcare:</h4><p>We see a future where innovation is at the forefront of healthcare. Our platform will continue to leverage the latest technologies to enhance the user experience, ensure data security, and improve overall healthcare delivery.</p>
                <h4>Global Impact:</h4><p>Beyond borders, our vision extends to making a global impact on healthcare. We envision a world where individuals from all walks of life have access to quality healthcare services, breaking down geographical barriers.</p>
           
           </Col>
            <Col className="lg-4">
                <h1>Our History</h1>
                <p>our story is rooted in a commitment to revolutionizing healthcare accessibility. The journey began with a vision to simplify the process of booking doctor appointments and empower individuals on their path to better health.</p>
                <h4>Founding Inspiration:</h4><p>In 2020, a group of healthcare enthusiasts and tech innovators came together with a common goal — to bridge the gap between individuals and healthcare professionals. Fueled by a passion and laid the foundation for what would become MediCareHub.</p>
                <h4>Reaching Milestones:</h4><p>Over the years, MediCareHub reached significant milestones. This included the expansion of our services to medical specialties, the integration of telemedicine solutions and quality of healthcare options available on our platform.</p>
                <h4>Community Impact: 2020 to Present</h4><p>Beyond the digital realm, we actively engage with communities, organizing health awareness campaigns and collaborating with healthcare organizations. We believe in making a positive impact on individuals' lives both online and offline.</p>
           
            </Col>
            </Row>

            <Row><Image src={pic2} /></Row>
        </Container>
    );
}