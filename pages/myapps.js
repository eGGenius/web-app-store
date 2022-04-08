import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";

import MyAppsTable from "../components/MyAppsTable";

export default function MyAppsPage(props) {
    return (
        <Container style={{
            padding: '1rem'
        }}>
            <Card border="dark">
                <Card.Body>
                    <MyAppsTable/>
                </Card.Body>
            </Card>
        </Container>
    )
}