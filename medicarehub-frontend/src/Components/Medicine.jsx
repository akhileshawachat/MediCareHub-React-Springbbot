import './AllCss.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic1 from './Image/brow.jpg';
import pic2 from './Image/healthcare3.jpg';
import pic3 from './Image/healthcare.jpg';
import pic4 from './Image/medicine-bottles-pills4.jpg';
import pic5 from './Image/packings-pills-capsules-medicines_5.jpg';
import pic6 from './Image/colorful-pills8.jpg';
import Accordion from 'react-bootstrap/Accordion';
export function Medicine(){
  return(
    <div className='MedicineDiv'>
    <h1 className='Medi'>Medicine Available</h1>
        <Container className='MedicineContainer'>
    <Row className='MedicineCardRow'>
      
       <Col>
    <Card className ="mt-5" style={{ width: '18rem' }} >
    <Card.Img variant="top" src={pic2} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle' >Paracetamol</Card.Title>
      <Card.Text className="CardText">
      an analegic and antiprytic is used to temporaly relieve in pain the
        bulk of the  content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Paracetamol used in two dose</ListGroup.Item>
      <ListGroup.Item>paracetamol give relief</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic6} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle'>Dolutegravir</Card.Title>
      <Card.Text className="CardText">
        Some quick example medicine to build on the chemical and make up the
        bulk of the drug content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>drug just odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic1} />
    <Card.Body  className='CardBody'>
      <Card.Title className='CardTitle'>Mupirocin</Card.Title>
      <Card.Text className="CardText">
      Some quick relief pain in eye rashes to on the  and make up the
        of the medicine content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 
  </Row>

  <Row className='MedicineCardRow'>
       <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic4} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle' >Delamanid</Card.Title>
      <Card.Text className="CardText">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic3} />
    <Card.Body className='CardBody'>
      <Card.Title className='CardTitle'>Bedaquiline</Card.Title>
      <Card.Text className="CardText">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
  </Card>
 </Col> 

 <Col>
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic5} />
    <Card.Body  className='CardBody'>
      <Card.Title className='CardTitle'>Terbinafine</Card.Title>
      <Card.Text className="CardText">
      an analegisc and to antiprytic is used to temporaly relieve in pain the
        bulk of the  content.
      </Card.Text>
    </Card.Body>
    
     
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
   
   
  </Card>
 </Col> 
  </Row>
  <div id='accord' className='AccordMed'>
            <h2 id='faq'>Frequently Asked Questions (FAQ)</h2>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why is Medicarehub providing a free service?</Accordion.Header>
                        <Accordion.Body>
                        Medicarehub believes that the best model to help patients find the right doctors, clinics & hospitals is if the platform is completely unbiased. Practo prides itself on being an independent player and earns revenue from the products we make for doctors.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What procedures will I have in the Emergency Department?</Accordion.Header>
                        <Accordion.Body>
                        Treatments and procedures may include lab work, radiological studies, CAT scans, ultrasound, EKG for cardiac review, medication administration and physician evaluations.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Will I be allowed to have visitors during my treatment?</Accordion.Header>
                        <Accordion.Body>
                        Yes, usually, but the number of visitors in the emergency treatment area is kept to a minimum. Occasionally, visitors will be asked to remain in the ED lobby until your loved one is placed into the room and settled into their environment. Usually, two visitors per patient are allowed in most areas of the department.

This gives the emergency team sufficient space to do their job quickly and effectively. And it ensures that patients are receiving the best medical care possible while maintaining an appropriate level of privacy. Every effort is made to keep your loved ones informed of your condition and allow them to be with you when possible.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>When will I see a physician?</Accordion.Header>
                        <Accordion.Body>
                        All patients are first triaged by an ER nurse. Then patients are evaluated by a physician. Patients who have a higher acuity of illness (i.e. heart attack or stroke) may be treated before those patients with less severe conditions (laceration, sprained ankle, etc.). Your patience is always appreciated.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

  </Container>
    </div>
  
  )
}