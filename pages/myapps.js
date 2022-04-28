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
                                            <IconContext.Provider
                                                value={{
                                                color: 'green',
                                                size: '20px'
                                            }}>
                                                <FaPlay/>
                                            </IconContext.Provider>
                                        </td>
                                        <td>
                                            <IconContext.Provider
                                                value={{
                                                color: 'orange',
                                                size: '20px'
                                            }}>
                                                <FaPause/>
                                            </IconContext.Provider>
                                        </td>
                                        <td>
                                            <IconContext.Provider
                                                value={{
                                                color: 'red',
                                                size: '20px'
                                            }}>
                                                <FaTrash/>
                                            </IconContext.Provider>
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