import React from "react";
import { Card, Container, Pagination, Table } from "react-bootstrap";
import { POINT_HISTORY_TABLE } from "../config";
import { TableIcon } from "../illustration";

export function HistoryPoint() {
    return (
        <Container style={{ marginTop: 50, marginBottom: 50 }}>
            <Card bg="light" className="shadow-lg">
                <Card.Header className="bg-light fw-900">
                    Latest Actions
                </Card.Header>
                <Card.Body>
                    <Card.Title className="mb-4 text-dark fw-500 d-flex gap-2">
                        <TableIcon style={{ width: 20, height: 20 }} />
                        <span style={{ marginTop: 2 }}>
                            List of Latest Actions and their correspoding
                            points.
                        </span>
                    </Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Action</th>
                                <th>Date</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {POINT_HISTORY_TABLE.map((data) => (
                                <tr key={data.Id}>
                                    <td>{data.Id}</td>
                                    <td>{data.Action}</td>
                                    <td>{data.Date}</td>
                                    <td>{data.Points}</td>
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
    );
}
