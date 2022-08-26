import { Card } from "primereact/card"

export default function FeedbackPage({ }) {
    return (

        <div className="p-4">
            <Card>
                <iframe 
                    src="./feedbackForm.html" 
                    width="100%"
                    allow="geolocation"
                    frameBorder="0"
                    style={{ minWidth: '100%', height: '4000px', border: 'none', backgroundColor: '#1F2D40' }}
                    scrolling="no"
                />
            </Card>
        </div >
    )
}