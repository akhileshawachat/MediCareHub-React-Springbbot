import { Container} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Filter from "./Filter";
import MyComponent from './GoogleMaps';


export function Hospitals(){
    return (
        <div>
            <Container>
            <Filter></Filter>
            <h1>Find the best hospital near you</h1>
            <br></br>
            <MyComponent></MyComponent>
            
            <div id='accord'>
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
    );
}