import {
    Button,
    Card,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import { BADGES, NOMINATED_USERS, ORGANIZATIONS } from "../config";

export function GivePoints() {
    return (
        <Container style={{ marginTop: 50, marginBottom: 50 }}>
            <Card className="shadow-lg p-4" bg="light">
                <Card.Header className="bg-light fw-900">
                    Fill From To Give points to a user
                </Card.Header>
                <Card.Body>
                    <Row className="mt-4">
                        <Col
                            xs={12}
                            sm={12}
                            md={4}
                            style={{ marginBottom: 10 }}
                        >
                            <FloatingLabel
                                controlId="organization-select"
                                label="Organization"
                            >
                                <Form.Select
                                    aria-label="Floating label select organization"
                                    className="bg-light"
                                >
                                    <option defaultChecked>
                                        Select an organization
                                    </option>
                                    {ORGANIZATIONS.map((organization) => (
                                        <option
                                            key={organization}
                                            value={organization}
                                        >
                                            {organization}
                                        </option>
                                    ))}
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col
                            xs={12}
                            sm={12}
                            md={4}
                            style={{ marginBottom: 10 }}
                        >
                            <FloatingLabel controlId="user-select" label="User">
                                <Form.Select
                                    aria-label="Floating label select user"
                                    className="bg-light"
                                >
                                    <option defaultChecked>
                                        Select a user
                                    </option>
                                    {NOMINATED_USERS.map((user) => (
                                        <option key={user} value={user}>
                                            {user}
                                        </option>
                                    ))}
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                        <Col
                            xs={12}
                            sm={12}
                            md={4}
                            style={{ marginBottom: 20 }}
                        >
                            <FloatingLabel
                                controlId="floatingPoints"
                                label="Points"
                            >
                                <Form.Control
                                    type="number"
                                    placeholder="Number of giving points"
                                    className="bg-light"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col sx={12} sm={12} style={{ marginBottom: 10 }}>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Description"
                            >
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a description here"
                                    style={{
                                        minHeight: "100px",
                                        maxHeight: "100px",
                                    }}
                                    className="bg-light"
                                />
                            </FloatingLabel>
                        </Col>
                        <Col xs={12}>
                            <div className="d-grid gap-2">
                                <Button
                                    variant="success"
                                    className="text-white"
                                >
                                    Nominate
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}
