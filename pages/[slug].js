import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import StoreDetailView from "../components/StoreDetailview"

export default function StoreDetailViewPage({ }) {
  return (
    <Container style={{
        padding: '1rem'
    }}>
        <Card border="dark">
            <Card.Body>
                <StoreDetailView/>
            </Card.Body>
        </Card>
    </Container>
  )
}