import StoreOverview from "../components/StoreOverview";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import StoreFilter from "../components/StoreFilter";

export default function Home(props) {
    return (
        <Container style={{
          padding: '1rem'
      }}>
            <Row>
                <Col sm={3}>
                    <Card border="dark">
                        <Card.Body>
                            <StoreFilter/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}>
                    <Card border="dark">
                        <Card.Body>
                            <StoreOverview/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}