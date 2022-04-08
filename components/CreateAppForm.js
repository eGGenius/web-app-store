import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"

export default function CreateAppForm({}) {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicAppName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Name of your Web App"/>
            </Form.Group>
            <Form.Group controlId="Icon Image" className="mb-3">
                <Form.Label>Upload a Image that will serve as App Icon</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Dockerfile or Compose File</Form.Label>
                <Form.Control as="textarea" rows={6}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="public">
                <Form.Check type="checkbox" label="Public Web App"/>
            </Form.Group>
            <Form.Select aria-label="Category">
                <option>Select the Category of your App</option>
                <option value="1">Programming Language</option>
                <option value="2">Database</option>
                <option value="3">CMS</option>
            </Form.Select> <br/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}