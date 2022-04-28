import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function StoreDetailViewPage() {
    const {data, error} = useSWR('/api/template', fetcher)
    if (error) 
        return <div>Failed to load users</div>
    if (!data) 
        return <div>Loading...</div>
    return (
        <Container style={{
            padding: '1rem'
        }}>
            <Card border="dark">
                <Card.Body>
                    <Image src={data.Logo} height={120}/>
                    <h1>{data.Title}</h1>
                    < p >{data.Description}</p>
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