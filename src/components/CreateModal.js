import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const CreateModal = ({show, handleClose}) => {
    return (
        <div>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Large Modal
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Character</h1>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                            <small>Paste the URL of a JPG or PNG of max 20 kb</small>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Friends</Form.Label>
                            <Form.Select>
                                <option>Default select</option>
                            </Form.Select>
                       </Form.Group>
                       <div className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-3">Secondary</Button>{' '}
                            <Button variant="primary">Create Character</Button>{' '}
                       </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateModal
