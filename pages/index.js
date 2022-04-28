import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import StoreFilter from "../components/StoreFilter";
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/templates', fetcher)
    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>
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
                    <Card border="dark" href="http://localhost:3000/test">
                        <Card.Body>
                            < Row xs={1} md={4} className="g-2">
                                {data.map((container) => (
                                        <Col  key={container.Title + container.description + container.type}>
                                            <Card>
                                                <Card.Img variant="bottom" src={container.Logo} fluid="true"/>
                                                <Card.Body>
                                                    <Card.Title>{container.Title}</Card.Title>
                                                    <Card.Text>{container.Description}</Card.Text>
                                                    <Card.Link href="/wordpress">{container.ports}</Card.Link>
                                                    <Button href={'http://localhost:3000/' + container.Title}>Install</Button>
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