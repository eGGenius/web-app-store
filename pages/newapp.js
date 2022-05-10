import { Card } from "primereact/card"

import CreateAppForm from "../components/CreateAppForm"

export default function NewAppPage({ }) {
    return (
        
        <div className="p-4">
            <Card>
                <CreateAppForm/>
            </Card>
        </div>
    )
}