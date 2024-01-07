import neuro from './Image/neuro.png';
import neuro1 from './Image/neuro1.png';
import neuro2 from './Image/neuro2.jpg';
import neuro3 from './Image/neuro3.jpg';
import neuro4 from './Image/neuro4.jpg';
import neuro5 from './Image/neuro5.jpg';
import {Image, Container,Row,Col,Card,Button} from 'react-bootstrap';
export function Neuro (){

    return(
        <Container>
            <Row>
                <Col lg-5>
                <Card style={{ marginTop:'80px', width: '30rem',height:'30rem' }}>
                            <Card.Img variant="top" src="card1.jpg" />
                            <Card.Body>
                            <Card.Title>Neurologist</Card.Title>
                            <Card.Text>
                               Fees 1000Rs
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Meet Our Doctor</Button>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg-7 >
                <Image src={neuro} style={{ marginTop:'60px'}}></Image>
                <p>A neurologist is a medical doctor who specializes in evaluating, diagnosing, and treating diseases that affect the nervous system.</p>
                </Col>
            </Row>
            <Row className='mt-5'><h3>What do neurologists specialize in?</h3>
            <p>Due to the complex nature of the nervous system, many neurologists focus on treating certain populations of people or people with specific neurological diseases.

After completing 4 years of medical school to become a physician, neurologists must complete a 4-year residency that consists of 1 year of general internal medicine or pediatrics training, followed by 3 years of neurology training. Some neurologists complete further subspecialty training, which is usually 1–3 years.</p>
<p>Examples of subspecialties within the field of neurology include:</p>
<ul>
    <li>pediatric or child neurology</li>
    <li>neurodevelopmental disabilities</li>
    <li>hospice and palliative care neurology</li>
    <li>pain medicine</li>
    <li>headache medicine</li>
</ul>
</Row>
<Row>
    <Col lg-4>
    <Image src={neuro4} style={{height:'500px', width:'600px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={neuro5} style={{height:'500px', width:'600px'}}></Image>
    </Col>
</Row>
<Row className='mt-5'>
<h3>What conditions do neurologists treat?</h3>
<p>Neurologists treat neurological conditionsTrusted Source, which are problems that affect the brain, spinal cord, and nerves. These conditions include:</p>
<ul><li>headaches and migraine</li>
<li>brain tumors</li>
<li>brain aneurysms</li>
<li>peripheral neuropathy</li>
<li>sleep disorders</li>
<li>neurodegenerative diseases, such as Parkinson’s disease and Alzheimer’s disease</li>
<li>neuromuscular disorders, such as muscular dystrophy, myasthenia gravis, and amyotrophic lateral sclerosis (ALS)</li>
<li>multiple sclerosis (MS), an inflammatory neurological disease</li>
<li>infections of the nervous system, such as encephalitis, meningitis, and HIV</li>
</ul>
<p>Sometimes neurologists evaluate people in the hospital who have had surgery or a medical problem if they have a new problem, such as a seizure or decreased alertness.

These neurological evaluations may help determine outlook or the likelihood of improving from a severe illness.</p>
</Row>

<Row>
    <h3>Other tests</h3>
    <p>A neurologist can use the following testsTrusted Source to help diagnose neurological disorders:</p>
    <ul>
    <li>laboratory tests, such as blood and urine analyses</li>
    <li>imaging tests, such as ultrasounds and MRI, CT, and PET scans</li>
    <li>genetic testing</li>
    <li>biopsy</li>
    <li>angiography</li>
</ul>
</Row>
<Row>
    <Image src={neuro1} style={{height:'600px', width:'1500px'}}></Image>
</Row>
<Row>
    <h3>What does a neurologist do on your first visit?</h3>
    <p>A neurological examination will involve tests to check muscle strength, memory, eye health and vision, and coordination. The tests are not usually painful but may cause some mild discomfort.

People will not need to prepare anything for their first neurological visit. The appointment may involveTrusted Source the neurologist:</p>
    <ul>
    <li>asking about any symptoms and current or previous medical conditions or medications</li>
    <li>checking for any visible signs of a condition by assessing a person’s posture, walk, ease of movement, and balance</li>
    <li>performing a physical examination to measure pulse and blood pressure and listen to the lungs and heart</li>
    <li>asking about bowel movements and passing of urine, as these can indicate how well the autonomic nervous system is functioning</li>
<br></br>
<p>After this initial examination, a neurologist may then perform several assessments, such as:</p>
<li>Cranial nerve tests: These test brain nerve function, which can affect the senses. People may need to identify certain scents and identify letters or numbers in an eye test.</li>
<li>Coordination and motor skills tests: A neurologist may ask people to spin around, move their limbs in a specific way, tap fingers, or write. People may also have a reflex test, such as a tap on their knee to check the response.</li>
<li>Sensation tests: A neurologist may check how well people respond to stimuli, such as soft fabric or touching containers holding warm or cold water.</li>
<li>Cognitive ability tests: A neurologist may ask people about their job, the date, and the time of year to check people’s memory. Language and math tests can also test for concentration. Some tests of cognitive skill, such as the mini-mental state examination (MMSE) or the Montreal Cognitive Assessment (MoCA), are not standard, but a neurologist may perform them if a person is showing signs of cognitive impairment during the neurological evaluation.</li>

</ul>
</Row>
<Row>
    <Col lg-4>
    <Image src={neuro2} style={{height:'600px', width:'500px'}}></Image>
    </Col>
    <Col lg-6>
        <Image src={neuro3} style={{height:'600px', width:'500px'}}></Image>
    </Col>
</Row>
<Row>
<h3>Summary</h3>
<p>Neurologists diagnose and treat medical conditions that affect the nervous system.

A general practice doctor may refer a person to a neurologist if they show signs of a neurological disorder, such as:</p>
<ul>
    <li>persistent or severe headaches</li>
    <li>muscle weakness</li>
    <li>confusion</li>
    <li>dizziness</li>
    <li>loss of coordination</li>
    <li>partial or complete paralysis</li>
</ul>
<p>Neurologists can perform various procedures to help diagnose and treat neurological conditions. However, if a person requires surgery, their neurologist or doctor will refer them to a neurosurgeon.</p>
</Row>
        </Container>
    );
}