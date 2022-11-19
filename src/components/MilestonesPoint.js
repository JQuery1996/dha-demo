import { useState } from "react";
import {
    Button,
    Card,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Pagination,
    Table,
} from "react-bootstrap";
import { MILESTONE_TYPES, POINT_MILESTONES } from "../config";
import { AddIcon, MilestoneIcon, TableIcon } from "../illustration";

export function MilestonesPoint() {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const handleCloseAddDialog = () => setShowAddDialog(false);
    const handleShowAddDialog = () => setShowAddDialog(true);

    return (
        <>
            <Container style={{ marginTop: 50, marginBottom: 50 }}>
                <Card bg="light" className="shadow-lg">
                    <Card.Header className="bg-light fw-900">
                        Latest Milestones
                    </Card.Header>
                    <Card.Body>
                        <Card.Title
                            className="text-dark fw-500 d-flex justify-content-between gap-2"
                            style={{ marginBottom: 50 }}
                        >
                            <div className="d-flex gap-2">
                                <MilestoneIcon
                                    style={{ width: 20, height: 20 }}
                                />
                                <span style={{ marginTop: 2 }}>
                                    List of Latest Milestones and their
                                    correspoding date.
                                </span>
                            </div>
                            <AddIcon
                                style={{
                                    width: 40,
                                    height: 40,
                                    cursor: "pointer",
                                }}
                                onClick={handleShowAddDialog}
                            />
                        </Card.Title>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Milestone</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {POINT_MILESTONES.map((milestone) => (
                                    <tr key={milestone.Id}>
                                        <td>{milestone.Id}</td>

                                        <td>{milestone.label}</td>
                                        <td>{milestone.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Pagination className="text-center d-flex justify-content-center">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Card.Body>
                </Card>
            </Container>

            <Modal
                show={showAddDialog}
                onHide={handleCloseAddDialog}
                size="lg"
                centered
            >
                <Modal.Header
                    closeButton
                    className="bg-primary text-white"
                    closeVariant="white"
                >
                    <Modal.Title className="text-white">
                        Add Milestone
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    <Form className="mt-2">
                        <Form.Group className="mb-3" controlId="FirstInput">
                            <FloatingLabel
                                controlId="floatingSelect"
                                label="Milestone Type"
                            >
                                <Form.Select
                                    aria-label="Floating label select Milestone"
                                    className="bg-light"
                                >
                                    <option defaultChecked>
                                        Select a milestone type.
                                    </option>
                                    {MILESTONE_TYPES.map((milestone) => (
                                        <option
                                            key={milestone}
                                            value={milestone}
                                        >
                                            {milestone}
                                        </option>
                                    ))}
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="SecondInput">
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Description"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a description here"
                                    style={{ height: "100px" }}
                                    className="bg-light"
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button
                        variant="danger"
                        onClick={handleCloseAddDialog}
                        className="text-white"
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        className="text-white"
                        onClick={handleCloseAddDialog}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
