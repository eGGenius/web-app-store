import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { InputText } from 'primereact/inputtext';
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import SignInOutButton from '../components/SignInOutButton';
import { UserContext } from '../lib/context';
import { useContext } from 'react';
import { firestore } from '../lib/firebase';

export default function StoreDetailViewPage(props) {
    const { user } = useContext(UserContext);
    const data = props.data
    const router = useRouter();
    const [name, setName] = useState('');
    const createContainer = async (e) => {
        e.preventDefault()
        const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/create/' + name;
        const content = {
            "image": data.image,
            "logo": data.logo,
            "webapp": data.title
        }
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(content)
        })
        console.log(res)
        router.push('/myapps');
    }

    const header =
        <img alt="Card" src={data.logo} style={{ width: '10rem', margin: '1rem' }} />;


    return (
        <div className="p-4" style={{ 'text-align': 'center' }}>
            <Card title={data.title} subTitle={data.description} header={header} style={{ padding: '2rem' }} >
                <form onSubmit={createContainer}>
                    <br></br>
                    <div className="p-fluid grid">
                        <div className="col"></div>
                        <div className="col-6">
                            <span className="p-float-label">
                                <InputText id="in" type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <label>Name</label>
                            </span>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="p-fluid grid">
                        <div className="col"></div>
                        <div className="col-6">
                            <div className="field col">
                                {user
                                    ? <Button label="Install" className="w-full" type="submit" />
                                    : <SignInOutButton />
                                }
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export async function getServerSideProps(context) {
    const webappsRef = firestore.collection('webapps');
    const query = webappsRef.where('title', '==', context.params.slug).limit(1);
    const result = (await query.get());
    let data = [];

    result.forEach(doc => {
        data = doc.data();
    });
    return {
        props: {
            data
        }
    }
}
