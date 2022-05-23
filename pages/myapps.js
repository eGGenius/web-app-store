import React, { useRef, useState, useEffect } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { UserContext } from '../lib/context';
import { useContext } from 'react';
import useSWR from 'swr'

import SignInOutButton from '../components/SignInOutButton';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MyAppsPage() {
    const { portainerApiKey } = useContext(UserContext);

    //if (portainerApiKey){
    const url = '/api/myapps'
    const headerData = { headers: { "xapikey": portainerApiKey } }
    const { data, error } = useSWR([url, headerData], fetcher, { refreshInterval: 2000 })
    const toast = useRef(null);
    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Deleted', detail: 'Web App was deleted', life: 3000 });
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button label="Delete" icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteStack(rowData, portainerApiKey) } />
            </React.Fragment>
        );
    }
    const useLinkBodyTemplate = (rowData) => {
        const [loadingValue, setloadingValue] = useState(0);
        const interval = useRef(null);
        useEffect(() => {
            let val = loadingValue;
            interval.current = setInterval(() => {
                val += + 5;
    
                if (val >= 100) {
                    val = 100;
                    clearInterval(interval.current);
                }
    
                setloadingValue(val);
            }, 1000);
    
            return () => {
                if (interval.current) {
                    clearInterval(interval.current);
                    interval.current = null;
                }
            }
        }, []);
        if (Math.floor(Date.now() / 1000) > rowData.CreationDate + 21) {
            return (
                <a href={`https://${rowData.Name}.webapp-store.de`} target="_blank" rel="noopener noreferrer"><img src={rowData.Env[1].value} height="40px" style={{ marginRight: '1rem' }} />{rowData.Name}.webapp-store.de</a>
            )
        }
        else {
            return <ProgressBar value={loadingValue} showValue={false}/>
        }
    }
    const nameBodyTemplate = (rowData) => {
        return `${rowData.Name}`;
    }
    const webAppBodyTemplate = (rowData) => {
        return `${rowData.Env[0].value}`;
    }
    const createdBodyTemplate = (rowData) => {
        const date = new Date(rowData.CreationDate * 1000);
        return Intl.DateTimeFormat('de', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date)
    }

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    const renderHeader = () => {
        return (
            <div className="flex justify-content-between align-items-center">
                <h5 className="m-0">My WebApps</h5>
            </div>
        )
    }
    const header = renderHeader();
    return (
        <div className=" p-4">
            <Toast ref={toast} />
            <Card>
                {portainerApiKey
                    ? <DataTable value={data} responsiveLayout="stack" breakpoint="960px" header={header}>
                        <Column field="Link" header="Link" body={useLinkBodyTemplate} sortable></Column>
                        <Column field="Name" header="Name" body={nameBodyTemplate} sortable></Column>
                        <Column field="WebApp" header="WebApp" body={webAppBodyTemplate} sortable></Column>
                        <Column field="Created" header="Created" body={createdBodyTemplate} sortable></Column>
                        <Column body={actionBodyTemplate} ></Column>
                    </DataTable>
                    : <SignInOutButton />
                }
            </Card>
        </div>
    )/*}
    else {
        return <p>Loading</p>
    }*/
}

async function deleteStack(stack, portainerApiKey) {
    const url = '/api/stacks/' + stack.Id
    const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'apiKey': portainerApiKey },
        body: 'delete Stack'
    })
}
