import React from 'react'
import { Col, Tab, Row, Nav } from 'react-bootstrap'
import Character from './Character'
import Planet from './Planet'

const Header = () => {
    return (
        <div className="container">
            <h1 className="mt-5">Spacious</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col md={12} className="my-4">
                    <Nav variant="pills">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Planets</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Characters</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col md={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Planet/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Character/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default Header
