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
                            < Row xs={1} md={4} className="g-2">
                                {props
                                    .containers
                                    .templates
                                    .map((container) => (
                                        <Col  key={container.title + container.description + container.type}>
                                            <Card>
                                                <Card.Img variant="bottom" src={container.logo} fluid="true"/>
                                                <Card.Body>
                                                    <Card.Title>{container.title}</Card.Title>
                                                    <Card.Text>{container.description}</Card.Text>
                                                    <Card.Link href="/wordpress">{container.ports}</Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

const url = "http://localhost:3000/api/templates ";
export async function getStaticProps() {
    // Default options are marked with *
    const res = await fetch(url, {
        headers: {
            "x-api-key": "ptr_HyM+KJc0//mIhm95HpTxHOTGXGL55wcd0Tp8xe87Kl4="
        }
    })
    const containers = await res.json()
    return {props: {
            containers
        }}
}
