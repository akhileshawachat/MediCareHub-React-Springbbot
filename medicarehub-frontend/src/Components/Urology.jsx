import neuro from './Image/uro.jpg';
import neuro1 from './Image/uro1.jpg';
import neuro2 from './Image/uro3.jpg';
import neuro3 from './Image/uro2.avif';
import neuro4 from './Image/uro4.avif';
import neuro5 from './Image/neuro5.jpg';
import {Image, Container,Row,Col,Card,Button} from 'react-bootstrap';
export function Urology (){

    return(
        <Container>
            <Row>
                <Col lg-5>
                <Card style={{ marginTop:'80px', width: '30rem',height:'30rem' }}>
                            <Card.Img variant="top" src="card1.jpg" />
                            <Card.Body>
                            <Card.Title>Urologist</Card.Title>
                            <Card.Text>
                               Fees 1400Rs
                            </Card.Text>
                            <Button variant="primary" id="btnSV">Meet Our Doctor</Button>
                            
                            </Card.Body>
                        </Card>
                </Col>
                <Col lg-7 >
                <Image src={neuro} style={{ marginTop:'60px'}}></Image>
                <p>A urologist is a medical doctor specializing in conditions that affect the urinary tract in men, women and children, and diseases that affect the reproductive system</p>
                </Col>
            </Row>
            <Row className='mt-5'><h3>What do urologists specialize in?</h3>
            <p>In order to become a urologist, you must first get a bachelor’s degree and then pass the Medical College Admissions Test in order to get into a medical school. It usually takes about four years to earn a medical degree.

            From there, you spend five to six years in a residency program. During this time you will get training in both surgical and medical treatments of urologic diseases.</p>
<p>Examples of subspecialties within the field of urology include:</p>
<ul>
    <li>pediatric or child urology</li>
    <li>neurodevelopmental disabilities</li>
    <li>hospice and palliative care urology</li>
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
<h3>What conditions do urologists treat?</h3>
<p>urologists treat urological conditionsTrusted Source, which are problems that affect the bladder, kidneys, and Ureter. These conditions include:</p>
<ul><li>Frequent urinary tract infections.</li>
<li>Inability to control urination (urinary incontinence).</li>
<li>Kidney Stone</li>
<li>peripheral neuropathy</li>
<li>sleep disorders</li>
<li>urodegenerative diseases, such as Parkinson’s disease and Alzheimer’s disease</li>
<li>uromuscular disorders, such as muscular dystrophy, myasthenia gravis, and amyotrophic lateral sclerosis (ALS)</li>
<li>multiple sclerosis (MS), an inflammatory neurological disease</li>
<li>infections of the urine system, such as encephalitis, meningitis, and HIV</li>
</ul>
<p>Sometimes neurologists evaluate people in the hospital who have had surgery or a medical problem if they have a new problem, such as a seizure or decreased alertness.

These urological evaluations may help determine outlook or the likelihood of improving from a severe illness.</p>
</Row>

<Row>
    <h3>Other tests</h3>
    <p>A urologist can use the following testsTrusted Source to help diagnose urological disorders:</p>
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
    <h3>What does a urologist do on your first visit?</h3>
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
<p>urologists diagnose and treat medical conditions that affect the reproduction system.

A general practice doctor may refer a person to a urologist if they show signs of a urological disorder, such as:</p>
<ul>
    <li>persistent or severe headaches</li>
    <li>muscle weakness</li>
    <li>confusion</li>
    <li>dizziness</li>
    <li>loss of coordination</li>
    <li>partial or complete paralysis</li>
</ul>
<p>urologists can perform various procedures to help diagnose and treat urological conditions. However, if a person requires surgery, their urologist or doctor will refer them to a urologist.</p>
</Row>
        </Container>
    );
}