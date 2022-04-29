import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useRouter} from 'next/router';

export default function StoreDetailViewPage(props) {

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
                    <CreateContainer/>
                </Card.Body>
            </Card>
        </Container>
    )
}

function CreateContainer() {
    const router = useRouter();
    const [name,
        setName] = useState('');
    const createContainer = async(e) => {
        e.preventDefault();
        const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/create/' + name;
        const content = {
            "image": "nginx:latest",
            "ExposedPorts": {
                "80/tcp": {}
            },
            "HostConfig": {
                "PortBindings": {
                    "80/tcp": [
                        {
                            "HostPort": "8080"
                        }
                    ]
                }
            }
        }
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(content)
        })
        console.log(res)
        toast.success('Container created!')
        router.push('/myapps');
    }
    return (
        <Form onSubmit={createContainer}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>WebApp Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"/>
                <Form.Text className="text-muted">
                    Enter the name for your app
                </Form.Text>
            </Form.Group>

            <Button type="submit">INSTALL</Button>
        </Form>
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
