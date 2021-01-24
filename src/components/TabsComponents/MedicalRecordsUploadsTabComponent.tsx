import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const MedicalRecordsUploadsTabsComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#medical-records-uploads-uploads" eventKey="first" id="tabs">Medical Records Uploads</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default MedicalRecordsUploadsTabsComponent;