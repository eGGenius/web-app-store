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
import Image from 'next/image';
import ReactMarkdown from 'react-markdown'

export default function StoreDetailViewPage(props) {
    const { username, portainerApiKey } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const data = props.data
    const router = useRouter();
    const [name, setName] = useState('');
    const createWebApp = async (e) => {
        setLoading(true);
        const webappname = name + '-' + username;
        const firestoreStackFileContent = data.stackFileContent;
        const stackFileContent = firestoreStackFileContent.replaceAll("$webappname$", webappname)
        e.preventDefault()
        const url = '/api/stacks';
        const content = {
            "stackFileContent": stackFileContent,
            "logo": data.logo,
            "webapp": data.title
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: { "xapikey": portainerApiKey, "username": username, "name": name },
            body: JSON.stringify(content)
        })
        setLoading(false);
        router.push('/myapps');
    }

    const header =
        <Image alt="Card" height="80" width="80" src={data.logo || '/images.png'}/>;


    return (
        <>
            <div className="p-4" style={{ 'textAlign': 'center' }}>
                <Card title={data.title} subTitle={data.description} header={header} style={{ paddingTop: '1rem' }}>
                    <form onSubmit={createWebApp}>
                        <div className="p-fluid grid">
                            <div className="col-2 md:col-3"></div>
                            <div className="col-8 md:col-6">
                                <span className="p-float-label">
                                    <InputText id="in" type="text"
                                        keyfilter="alphanum"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                    <label>Name</label>
                                </span>
                            </div>
                            <div className="col-2 md:col-3"></div>
                        </div>
                        <div className="p-fluid grid">
                            <div className="col-2 md:col-3"></div>
                            <div className="col-8 md:col-6">
                                <div className="field col">
                                    {username
                                        ? <Button label={data.status || "Install WebApp"} className="w-full" type="submit" loading={loading}  disabled={data.status === 'Coming Soon'} />
                                        : <SignInOutButton />}
                                </div>
                            </div>
                            <div className="col-2 md:col-3"></div>
                        </div>
                    </form>
                </Card>
            </div>
            <div className="p-4">
                {data.markdown ?
                    <Card className='undeline'>
                        <ReactMarkdown>{data.markdown.replace(/<br>/g, " \n")}</ReactMarkdown>
                    </Card>
                    :
                    <></>
                }
            </div>
        </>
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
