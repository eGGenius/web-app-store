import {Image, Table} from "react-bootstrap"
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {FormControl} from "react-bootstrap"
import {FaPlay} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';
import {FaPause} from 'react-icons/fa';
import {IconContext} from "react-icons";

export default function MyAppsTable({}) {
    return ( <> <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"/>
        <Button variant="outline-success">Search</Button>
    </Form> < br /> <div>
        <Table responsive>
            <thead>
                <tr>
                    <th>Link</th>
                    <th>Name</th>
                    <th>Version</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Image src="Wordpress.png" height={50}/></td>
                    <td>my-wordpress-1</td>
                    <td>latest</td>
                    <td>Paused</td>
                    <td>
                        <IconContext.Provider value={{color: 'green',size: '20px'}}>
                            <FaPlay/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'orange',size: '20px'}}>
                            <FaPause/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'red',size: '20px'}}>
                            <FaTrash/>
                        </IconContext.Provider>
                    </td>
                </tr>
                <tr>
                    <td><Image src="mqtt.png" height={50}/></td>
                    <td>my-broker-1</td>
                    <td>latest</td>
                    <td>Running</td>
                    <td>
                        <IconContext.Provider value={{color: 'green',size: '20px'}}>
                            <FaPlay/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'orange',size: '20px'}}>
                            <FaPause/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'red',size: '20px'}}>
                            <FaTrash/>
                        </IconContext.Provider>
                    </td>
                </tr>
                <tr>
                    <td><Image src="jupyter.png" height={50}/></td>
                    <td>my-jupyter-1</td>
                    <td>latest</td>
                    <td>Running</td>
                    <td>
                        <IconContext.Provider value={{color: 'green',size: '20px'}}>
                            <FaPlay/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'orange',size: '20px'}}>
                            <FaPause/>
                        </IconContext.Provider>
                    </td>
                    <td>
                        <IconContext.Provider value={{color: 'red',size: '20px'}}>
                            <FaTrash/>
                        </IconContext.Provider>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div> </>
    )
}