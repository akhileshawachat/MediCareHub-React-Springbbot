import general1 from './Image/general1.jpg';
import general2 from './Image/general2.jpg';
import general3 from './Image/general3.jpg';
import general4 from './Image/general4.jpg';
import general5 from './Image/general5.jpg';
import general6 from './Image/general6.jpg';

import {Image, Container,Row,Col,Card,Button} from 'react-bootstrap';
export function General (){

    return(
        <Container>
            <Row>
                <Col lg-5>
                <Card style={{ marginTop:'80px', width: '30rem',height:'30rem' }}>
                            <Card.Img variant="top" src="card3.jpeg" />
                            <Card.Body>
                            <Card.Title>General Physician</Card.Title>
                            <Card.Text>
                               Fees 200Rs
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Meet Our Doctor</Button>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg-7 >
                <Image src={general1} style={{ marginTop:'60px', width:'700px'}}></Image>
                <p>General Physicians are highly trained specialists who provide a range of non-surgical health care to adult patients. They care for difficult, serious or unusual medical problems and continue to see the patient until these problems have resolved or stabilised.</p>
                </Col>
            </Row>
            <Row className='mt-5'><h3>Roles of a General Physician Consultant</h3>
            <p>General physicians are consultants who care for patients with special or difficult problems. General physicians only see patients who are referred to them by other doctors, usually by the patient's own general practitioner.</p>
<p>Examples of subspecialties within the field of neurology include:</p>
<ul>
    <li>Global Approach: Whether the referral identifies one health problem or many, the general physician's assessment is always comprehensive. This global approach enables problems to be detected and diagnostic possibilities to be considered which might otherwise be missed.</li>
    <li>Complex Care: General physicians are especially trained to care for patients with complex illnesses, in which the diagnosis may be difficult. The general physician's broad training provides expertise in diagnosis and treatment of problems affecting different body systems in a patient. They are also trained to deal with social and psychological impact of disease.</li>
    <li>Procedures: General physicians are trained to carry out a variety of medical procedures for the diagnosis and management of patients with severe and complex illnesses.</li>
    <li>Diagnosis: General physicians have special training in the usefulness, limitations and costs of most diagnostic tests. General physicians use diagnostic tests logically, safely and effectively to investigate difficult diagnostic problems.</li>
    <li>Treatment: General physicians are trained in the critical analysis of research reports and drug industry claims about new treatments. They are knowledgeable about complex interactions of medications given simultaneously to treat multiple illnesses in a patient. The general physician has special expertise in making treatment decisions to help patients with complex and serious illnesses.</li>
    <li>Pre- and Post-operative assessment: General physicians are frequently asked to review patients before surgery. They advise surgeons of a patient's risk status and can recommend appropriate management to minimise the risk of the operation. They can also assist in postoperative care and ongoing medical problems or complications.</li>
</ul>
</Row>
<Row>
    <Col lg-4>
    <Image src={general2} style={{height:'500px', width:'600px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={general3} style={{height:'500px', width:'600px'}}></Image>
    </Col>
</Row>
<Row className='mt-5'>
<h3>What makes a General Physician special?</h3>
<p>The unique combination of knowledge, training and skills distinguishes general physicians from other medical specialists and general practitioners. Through a rigorous and comprehensive training program, general physicians are:</p>
<ul>
<li>broadly educated to deal with the entire range of the patient's medical problems.</li>
<li>thorough, logical and scientific in their approach to providing expert diagnosis.</li>
<li>able to assess and choose drugs and other medical therapies wisely to prevent and treat disease able to care for patients as whole people, not just body systems.</li>
<li>highly skilled in clinical decision making and cost effective use of dwindling health care resources.</li>
</ul>
</Row>

<Row>
<h3>What is the Qualification of a General Physician?</h3>
<p>A General Physician has an MBBS and a Post Graduation (MD) degree in general medicine or specialized in a particular field of medicine such as cardiology, urology, endocrinology, etc.</p>
</Row>


<Row>
    <Image src={general4} style={{height:'600px', width:'1500px'}}></Image>
</Row>

<Row>
    <h3>What are the Conditions that a Physician Specialist can Treat?</h3>
    <p>Usually, general physicians can treat almost all conditions. Only in more severe cases are you referred to a specialist, during which the physician will likely be present as counsel.  

These are the conditions you can address with a general physician doctor: </p>
    <ul>
    <li>Endocrinological: Conditions include pituitary disease, diabetes, and thyroid disease.</li>
    <li>Neurological: Dementia, epilepsy, and strokes</li>
    <li>Respiratory: Pneumonia, asthma, lung fibrosis, and COPD </li>
    <li>Gastrointestinal: liver disease and gastroenteritis </li>
    <li>Cardiovascular: hypertension and ischaemic heart disease</li>
    </ul>
</Row>

<Row>
    <Col lg-4>
    <Image src={general5} style={{height:'600px', width:'500px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={general6} style={{height:'600px', width:'500px'}}></Image>
    </Col>
</Row>
<Row>
    <h3>
    Conclusion
    </h3>
    <p>Understanding the role of the general physician doctor in your life is important and, when faced with a sickness, the physician is the first person you will likely go to. However, to ensure you find the ideal one, use the Bajaj Finserv Health to find the most suitable practitioner for you.  </p>
    <p>This digital provision is loaded with benefits and telemedicine features that make healthcare simple, easy, and convenient. It has smart search functionality, using which you can scout for the best general physician doctor in your locality and book appointments at his/her clinic online. You thus avoid having to make a trip to secure an appointment with the doctor.</p>
    
</Row>

</Container>
    );
}