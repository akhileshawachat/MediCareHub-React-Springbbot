import { Image, Button, Card, Col, Container, Row } from "react-bootstrap";
import cardio1 from "./Image/Cardioimg2.jpg"
import carddoc from "./Image/Doctorimg.jpeg"
import cardo2 from "./Image/Cardioimg1.jpg"
import cardo3 from "./Image/Cardioimg3.webp"
import cardo4 from "./Image/Cardioimg44.png"
export function Cardio(){

    return(
        <Container>
            <Row>
                <Col lg-5>
                <Card style={{ marginTop:'80px', width: '20rem',height:'30rem' }}>
                            <Card.Img variant="top" src={carddoc} />
                            <Card.Body>
                            <Card.Title>Cardiologist</Card.Title>
                            <Card.Text>
                               Fees 2000Rs
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Meet Our Doctor</Button>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg-7 >
                <Image src={cardio1} style={{width: "700px" , height: "500px", marginTop:'60px'}}></Image>
                <p className="mt-5">A cardiologist is a medical doctor specializing in diagnosing and treating cardiovascular diseases, including heart conditions and conditions affecting the blood vessels. If you're in need of treatment or advice, you can find cardiologist information online by searching for doctors in your area or by visiting websites where you can learn more about their qualifications and services then you can visit our MedicalHub.</p>
                </Col>
            </Row>
            <Row className='mt-5'><h3>What do Cardiologist specialize in?</h3>
            <p>Due to the complex nature of the nervous system, many neurologists focus on treating certain populations of people or people with specific neurological diseases.

After completing 4 years of medical school to become a physician, cardiologist must complete a 4-year residency that consists of 1 year of general internal medicine or pediatrics training, followed by 3 years of cardiology training. Some cardiologist complete further subspecialty training, which is usually 1–3 years.</p>
<p>Examples of subspecialties within the field of Cardiology include:</p>
<ul>
    <li>Cardiothoracic Surgeon</li>
    <li>General Cardiologist</li>
    <li>Interventional Cardiologist</li>
    <li>Electrophysiologist</li>
    <li>Transplant and Heart Failure Cardiologist</li>
</ul>
</Row>
<Row>
    <Col lg-4>
    <Image src={cardo2} style={{height:'400px', width:'600px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={cardo3} style={{height:'400px', width:'600px'}}></Image>
    </Col>
</Row>

<Row className='mt-5'>
<h3>What conditions do Cardiologist treat?</h3>
<p>Cardiologist treat heart related problems, which are  affect the directly to heart. These conditions include:</p>
<ul><li>Heart pain</li>
<li>High Blood pressure</li>
<li>Heart failure</li>
<li>Heart halves</li>
<li>Heart attack</li>
<li>Strong family history of premature heart disease or cardiac death.</li>
<li>Feeling pain in your chest, dizziness or shortness of breath, you may need to see a cardiologist.</li>
</ul>
<p>Sometimes general cardiologist may be involved in long-term patient care they do not perform procedures or surgeries. You might be recommended an interventional cardiologist in case of non-surgical procedures like placing coronary stents or endoscopy which is actually a catheter intervention and not a surgery.
</p>
</Row>
<Row>
    <h3>Other tests</h3>
    <p>A Cardiologist can use the following testsTrusted Source to help diagnose Cardiac diseases:</p>
    <ul>
    <li>Cardiac Catherization</li>
    <li>Chest-X-ray</li>
    <li>Cardiac CT</li>
    <li>Echocardiogram</li>
    <li>Angiography</li>
</ul>
</Row>
<Row className="d-flex justify-content-center">
    <Image src={cardo4} style={{height:'500px', width:'900px'}}></Image>

</Row>
<Row>
<h3>Summary</h3>
<p>Cardiologist diagnose and treat medical conditions that affect the heart.

A general practice doctor may refer a person to a Cardiologist if they show signs of a Heart related problems, such as:</p>
<ul>
    <li>Heart attack</li>
    <li>Heart pain</li>
    <li>nerve blockage</li>
    <li>chest pain</li>

</ul>
<p>Cardiologist can perform various procedures to help diagnose and treat cardiac related conditions. cardiologist is a physician who's an expert in the care of your heart and blood vessels. They can treat or help you prevent a number of cardiovascular problems. They can also specialize in specific areas, such as abnormal heart rhythms, heart failure or heart problems you’ve had since birth.</p>
</Row>
        </Container>
               
    );

}