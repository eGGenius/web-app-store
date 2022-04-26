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
import useSWR from 'swr'

const protocol = 'http://'
const host = '192.168.178.28:9000';
const url = protocol + host + '/api/endpoints';
const url1 = 'https://pokeapi.co/api/v2/pokemon';
const bearer = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTY1MDY0OTIxOH0.c5uyrn5CyarmS9fd1P5jYclEvGMQvAKZQZZQPpeX5hk';

const fetcher = (url, options) => fetch(url, options)//.then(response => response.json())

export default function MyAppsPage(props) {
    const options = {
        method: 'GET',
        mode: 'no-cors', // no-cors, *cors, same-origin
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + bearer,
        }
    };
    
    const {data, error} = useSWR([url, options], fetcher);

    if (error) {
        console.log('ERROR: ' + error)
        return (<p>{error.message}</p>)}
    if (!data) {
        console.log('DATA: ' + {data})
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
                                .containers
                                .map((container) => (
                                    <tr key={container.Names}>
                                        <td><Image src="Wordpress.png" height={50}/></td>
                                        <td>{container.Names}</td>
                                        <td>{container.Image}</td>
                                        <td>{container.State}</td>
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
}

const uri = "https://localhost:9443/api/endpoints/2/docker/containers/json?all=true";
 export async function getServerSideProps() {
            // Default options are marked with *
            const res = await fetch(uri, {
                headers: {
                    "x-api-key": "ptr_HyM+KJc0//mIhm95HpTxHOTGXGL55wcd0Tp8xe87Kl4="
                }
            })
            const containers = await res.json()
            return {props: {
                    containers
                }}
        }