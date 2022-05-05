import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import StoreFilter from "../components/StoreFilter";

export default function Home({ data }) {

    return (
    <div className="App">
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
                                {data.map((container) => (
                                        <Col  key={container.title + container.description + container.type}>
                                            <Card>
                                                <Card.Img variant="bottom" src={container.logo} fluid="true"/>
                                                <Card.Body>
                                                    <Card.Title>{container.title}</Card.Title>
                                                    <Card.Text>{container.description}</Card.Text>
                                                    <Button href={container.title}>Install</Button>
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
    </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/templates`
    const res = await fetch(url)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }