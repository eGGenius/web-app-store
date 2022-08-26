import { Card } from "primereact/card"
import { UserContext } from '../lib/context';
import { useContext } from 'react';

import SignInOutButton from '../components/SignInOutButton';

import CreateAppForm from "../components/CreateAppForm"

export default function NewWebAppPage({ }) {
    const { user } = useContext(UserContext);
    return (
        
        <div className="p-4">
            <Card>
                {user
                    ? <CreateAppForm/>
                    : 
                    <>
                        <h3>Sign in to create new WebApps</h3>
                        <SignInOutButton />
                    </>
                }
            </Card>
        </div>
    )
}