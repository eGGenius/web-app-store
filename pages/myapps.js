import React from "react";
import {Card} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Image, Table} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {FormControl} from "react-bootstrap"
import useSWR from 'swr'
import toast from 'react-hot-toast';
import Link from 'next/link'



const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MyAppsPage() {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/myapps`
    const header = {headers: {"x-api-key": "ptr_lD5Jv9Lno8tX5dxE9TxE6Y1Q3vlG8nmmuvo7rJ1dYO4="}}
    const { data, error } = useSWR([url, header], fetcher, { refreshInterval: 2000 })
    console.log(data)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  
    return ( <> <Container style={{padding: '1rem'}}>
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
                            </tr>
                        </thead>
                        <tbody>
                            {data
                                .map((myapp) => (
                                    <tr key={myapp.Names}>
                                        <td>
                                            <Button variant="primary" href={`http://${myapp.Names[0].slice(1)}.webapp-store.de`} target="_blank">Open</Button>
                                        </td>
                                        <td>{myapp.Names[0].slice(1)}</td>
                                        <td>{myapp.Image}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteContainer(myapp)}>Delete</Button>
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
async function deleteContainer(container) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/' + container.Id;
    const res = await fetch(url, {
        method: 'DELETE',
        body: 'delete Container'
    })
    console.log(res)
    toast.error(container.Names[0].slice(1) + ' deleted!')
}