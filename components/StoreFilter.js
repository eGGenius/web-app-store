import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {FormControl} from "react-bootstrap"

export default function StoreFilter({}) {
    return ( <> 
    
    <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>
            <br/>
    <Form.Select aria-label="Default select example">
        <option>Category</option>
        <option value="1">Programming Language</option>
        <option value="2">Database</option>
        <option value="3">CMS</option>
    </Form.Select> < br /> <Form.Select aria-label="Default select example">
        <option>Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Star</option>
        <option value="3">3 Star</option>
        <option value="3">4 Star</option>
        <option value="3">5 Star</option>
    </Form.Select> < br /> <Form.Check type="switch" id="custom-switch" label="Certified"/> </>
    )
}