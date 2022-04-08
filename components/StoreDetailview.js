import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Image } from "react-bootstrap"

export default function StoreDetailView({ }) {
    return (<>
        <Image src="Jupyter.png" height={120} />
        <h1>Jupyter Notebook</h1> < p > The Jupyter Notebook is a web - based interactive computing platform.The notebook combines live code,    equations,    narrative text,    visualizations,    ...
        </p> < Form > <Form.Group className="mb-3" controlId="formBasicAppName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter Name of your Web App" />
        </Form.Group>
            <Button href="/myapps"> Install </Button>
        </Form > </>
    )
}