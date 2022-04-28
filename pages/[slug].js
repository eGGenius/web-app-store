import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import { useRouter } from 'next/router'

export default function StoreDetailViewPage(props) {
    const router = useRouter()
    const data = props.data
    return (
        <Container style={{
            padding: '1rem'
        }}>
            <Card border="dark">
                <Card.Body>
                    <Image src={data.logo} height={120}/>
                    <h1>{data.title}</h1>
                    < p >{data.description}</p>
                    < Form >
                        <Form.Group className="mb-3" controlId="formBasicAppName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter Name of your Web App"/>
                        </Form.Group>
                        <Button href="/myapps">
                            Install
                        </Button>
                    </Form >
                </Card.Body>
            </Card>
        </Container>
    )
}

export async function getServerSideProps(context) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/templates/` + context.params.slug
    const res = await fetch(url)
    const data = await res.json()

    // Pass data to the page via props
    return {props: {
            data
        }}
}