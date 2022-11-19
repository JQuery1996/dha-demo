import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AmazonIcon, SheinIcon } from "../illustration";

const REWARDS = [
    {
        icon: AmazonIcon,
        title: "Reward From Amazon",

        text: (
            <p>
                <span className="fw-900">50% </span> off Amazon products using{" "}
                <span className="fw-900 text-danger"> 2.500 </span>points.
            </p>
        ),
        date: "Last updated 3 mins ago",
    },
    {
        icon: SheinIcon,
        title: "SHEIN Reward",

        text: (
            <p>
                Get <span className="fw-900"> 5.000 AED </span> by redeeming{" "}
                <span className="fw-900 text-warning"> 5.000 </span>points.
            </p>
        ),
        date: "Last updated 1 day ago",
    },
];
export function Rewards() {
    return (
        <Container style={{ marginTop: 50, marginBottom: 50 }}>
            <Row>
                {REWARDS.map((reward, index) => {
                    const Icon = reward.icon;
                    return (
                        <Col
                            key={index}
                            xs={12}
                            sm={6}
                            md={4}
                            style={{ marginBottom: 20 }}
                        >
                            <Card
                                bg="light"
                                style={{
                                    borderRadius: "10px",
                                }}
                            >
                                <Card.Header
                                    className="bg-light"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Icon
                                        style={{
                                            width: 200,
                                            height: 150,
                                            padding: 30,
                                        }}
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title className="mb-4 fw-900 font-xs">
                                        {reward.title}
                                    </Card.Title>
                                    <Card.Text
                                        style={{ marginLeft: "5px" }}
                                        as="div"
                                    >
                                        {reward.text}
                                    </Card.Text>
                                    <div
                                        className="d-grid gap-2"
                                        style={{
                                            marginTop: "40px",
                                        }}
                                    >
                                        <Button
                                            variant="primary"
                                            className="text-white"
                                        >
                                            Get it
                                        </Button>
                                    </div>
                                </Card.Body>

                                <Card.Footer className="bg-light">
                                    <small className="text-muted">
                                        {reward.date}
                                    </small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}
