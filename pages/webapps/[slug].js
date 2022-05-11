import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { InputText } from 'primereact/inputtext';
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import EnterButton from '../../components/EnterButton';
import { UserContext } from '../../lib/context';
import { useContext } from 'react';

export default function StoreDetailViewPage(props) {
    const { user } = useContext(UserContext);
    const data = props.data
    const router = useRouter();
    const [name, setName] = useState('');
    const createContainer = async (e) => {
        e.preventDefault()
        const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/create/' + name;
        const content = {
            "image": data.image
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
                        <div class="col"></div>
                        <div className="col-6">
                            <span className="p-float-label">
                                <InputText id="in" type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <label>Name</label>
                            </span>
                        </div>
                        <div class="col"></div>
                    </div>
                    <div className="p-fluid grid">
                        <div class="col"></div>
                        <div className="col-6">
                            <div className="field col">      
                            {user
                                ? <Button label="Install" className="w-full" type="submit" />
                                : <EnterButton type="button" />
                            }
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export async function getServerSideProps(context) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/templates/` + context.params.slug
    const res = await fetch(url)
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            data
        }
    }
}
