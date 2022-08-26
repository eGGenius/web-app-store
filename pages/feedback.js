import { Card } from "primereact/card";
import { UserContext } from '../lib/context';
import { useContext } from 'react';

import SignInOutButton from '../components/SignInOutButton';

export default function FeedbackPage({ }) {
    const { user } = useContext(UserContext);
    return (

        <div className="p-4">
            <Card>
                {user
                    ? 
                    <iframe 
                        src="./feedbackForm.html" 
                        width="100%"
                        allow="geolocation"
                        frameBorder="0"
                        style={{ minWidth: '100%', height: '4000px', border: 'none', backgroundColor: '#1F2D40' }}
                        scrolling="no"
                    />
                    :
                    <>
                        <h3>Sign in to give Feedback</h3>
                        <SignInOutButton />
                    </>
                }
            </Card>
        </div >
    )
}