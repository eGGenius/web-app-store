import React from "react";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Image, Table} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {FormControl} from "react-bootstrap"
import {FaPlay} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import {IconContext} from "react-icons";

export default function MyAppsPage(props) {
        return ( <> <Container style={{
        padding: '1rem'
    }}>
        <Card border="dark">
            <Card.Body>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
                < br/>
                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Link</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props
                                .myapps
                                .map((myapp) => (
                                    <tr key={myapp.Names}>
                                        <td><Image src="Wordpress.png" height={50}/></td>
                                        <td>{myapp.Names[0].slice(1)}</td>
                                        <td>{myapp.Image}</td>
                                        <td>{myapp.State}</td>
                                        <td>
                                            <Button variant="success" onClick={() => startContainer(myapp.Id)}>Start</Button>
                                        </td>
                                        <td>
                                            <Button variant="warning" onClick={() => stopContainer(myapp.Id)}>Stop</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteContainer(myapp.Id)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    </Container> </>
    )
}


export async function getServerSideProps() {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/myapps`
    const res = await fetch(url, {
        headers: {
            "x-api-key": "ptr_lD5Jv9Lno8tX5dxE9TxE6Y1Q3vlG8nmmuvo7rJ1dYO4="
        }
    })
    const myapps = await res.json()
    return {
        props: {
            myapps
        }
    }
}

async function startContainer(container_id) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/' + container_id + '/start';
    const res = await fetch(url, {
        method: 'POST',
        body: 'start Container'
    })
    console.log(res)
}

async function stopContainer(container_id) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/' + container_id + '/stop';
    const res = await fetch(url, {
        method: 'POST',
        body: 'stop Container'
    })
    console.log(res)
}

async function deleteContainer(container_id) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/' + container_id;
    const res = await fetch(url, {
        method: 'DELETE',
        body: 'delete Container'
    })
    console.log(res)
}