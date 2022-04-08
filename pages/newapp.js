import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";

import CreateAppForm from "../components/CreateAppForm"

export default function NewAppPage({ }) {
    return (
        <Container style={{
            padding: '1rem'
        }}>
            <Card border="dark">
                <Card.Body>
                    <CreateAppForm/>
                </Card.Body>
            </Card>
        </Container>
    )
}