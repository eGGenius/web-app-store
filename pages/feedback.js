import { Card } from "primereact/card";
import { UserContext } from '../lib/context';
import { useContext } from 'react';

import { Button } from "primereact/button";

import Link from 'next/link';  

import SignInOutButton from '../components/SignInOutButton';

export default function FeedbackPage({ }) {
    const { user } = useContext(UserContext);
    return (

        <div className="p-4">
            <Card>
                {user
                    ? 
                    <>
                        <h3>Please take yourself 2 minutes to fill the Feedback Form </h3>
                        <h3>Thank you for your help :)</h3>
                        <Link href="https://form.jotform.com/222351883319357" passHref={true}>
                            <Button>Feedback Form</Button>
                        </Link>
                    </>
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