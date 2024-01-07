import { Image, Button, Card, Col, Container, Row } from "react-bootstrap";
import denti1 from "./Image/Dentist2.jpg"
import doc from "./Image/Doctorimg.jpeg"
import denti2 from "./Image/Dentist1.jpg"
import denti3 from "./Image/Dentist3.jpg"
import denti4 from "./Image/Dentist4.jpg"
export function Dentist(){
    return(
    <Container>
    <Row>
    <Col lg-5>
    <Card style={{ marginTop:'80px', width: '20rem',height:'30rem' }}>
                <Card.Img variant="top" src={doc} />
                <Card.Body>
                <Card.Title>Dentist</Card.Title>
                <Card.Text>
                   Fees 2000Rs
                </Card.Text>
                <Button variant="primary" id="btnSV">Meet Our Doctor</Button>
                
                </Card.Body>
            </Card>
    </Col>
    <Col lg-7 >
    <Image src={denti1} style={{ height:"500px",marginTop:'60px'}}></Image>
    <p className="mt-5">A Dentist is a medical doctor specializing in diagnosing and treating the teeth, including teeth conditions and conditions affecting the teeth. If you're in need of treatment or advice, you can find Dentist by searching for doctors in your area or by visiting websites where you can learn more about their qualifications and services then you can visit our MedicalHub.</p>
    </Col>
</Row>  
<Row className='mt-5'><h3>What do Dentist specialize in?</h3>
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
    <Image src={denti2} style={{height:'400px', width:'600px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={denti3} style={{height:'400px', width:'600px'}}></Image>
    </Col>
</Row>

<Row className='mt-5'>
<h3>What conditions do Dentist treat?</h3>
<p>specialty of dentistry that deals with the advanced use of general anesthesia, sedation and pain management to facilitate dental procedures. These conditions include:</p>
<ul><li>Cavities</li>
<li>Teeth pain</li>
<li>Dry mouth</li>
<li>oral cnacer</li>
<li>Periodontitis</li>
<li></li>
<li>Poor oral hygiene can lead to dental cavities and gum disease, and has also been linked to heart disease, cancer, and diabetes.</li>
</ul>
<p> common diseases that impact our oral health include cavities (tooth decay), gum (periodontal) disease, and oral cancer.
</p>
</Row>
<Row>
    <h3>Other tests</h3>
    <p>A Dentist can use the following testsTrusted Source to help diagnose diseases:</p>
    <ul>
    <li> In-depth examination</li>
    <li> part of a checkup of your teeth and gums</li>
    <li>dental cleaning</li>
    <li>X-rays of your teeth</li>
    <li>CBCT Scan</li>
</ul>
</Row>
<Row className="d-flex justify-content-center">
    <Image src={denti4} style={{height:'500px', width:'800px'}}></Image>

</Row>
<Row>
<h3>Summary</h3>
<p>A diagnostic exam lays the foundation of all future treatments and recommendations. It involves an in-depth examination of the patient's teeth, gums, jaw and muscles. A comprehensive diagnostic exam isn't just regular teeth cleaning or evaluation, but involves an overall view of the health of your mouth and jaw.

A general practice doctor may refer a person to a Dentist if they show signs of a teeth,teeth pain or related problems, such as:</p>
<ul>
    <li>Teeth pain</li>
    <li>Jaw pain</li>
    <li>Toothache</li>
    <li>cracked tooth</li>

</ul>
<p>A dentist  a dental surgeon, is a health care professional specializes in dentistry, the branch of medicine focused on the teeth, gums, and mouth. The dentist's supporting team aids in providing oral health services. The dental team includes dental assistants, dental hygienists, dental technicians, and sometimes dental therapists. if you have query related teeth problems or need consultancy you can connect to MedicareHub.</p>
</Row> </Container>
)}