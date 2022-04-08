import {Card} from "react-bootstrap";

export default function MyCard() {
    return (
        <Card>
            <Card.Img variant="bottom" src="jupyter.png" fluid="true"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </Card.Text>
                <Card.Link href="/wordpress">Details</Card.Link>
            </Card.Body>
        </Card>
    );
}
