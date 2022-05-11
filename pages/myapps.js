import React, { useRef } from 'react';
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
    const { user } = useContext(UserContext);
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/myapps`
    const headerData = {headers: {"x-api-key": "ptr_lD5Jv9Lno8tX5dxE9TxE6Y1Q3vlG8nmmuvo7rJ1dYO4="}}
    const { data, error } = useSWR([url, headerData], fetcher, { refreshInterval: 2000 })

    const toast = useRef(null);
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Deleted', detail:'Web App was deleted', life: 3000});
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button label="Delete" icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteContainer(rowData).then(showError())} />
            </React.Fragment>
        );
    }
    const linkBodyTemplate = (rowData) => {
        return <a href={`http://${rowData.Names[0].slice(1)}.webapp-store.de`} target="_blank">http://{rowData.Names[0].slice(1)}.webapp-store.de</a>;
    }
    const nameBodyTemplate = (rowData) => {
        return `${rowData.Names[0].slice(1)}`;
    }
    const createdBodyTemplate = (rowData) => {
        const date = new Date(rowData.Created*1000);
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
                {user
                    ?<DataTable value={data} responsiveLayout="stack" breakpoint="960px" header={header}>
                        <Column field="Link" header="Link" body={linkBodyTemplate} sortable></Column>
                        <Column field="Name" header="Name" body={nameBodyTemplate} sortable></Column>
                        <Column field="Created" header="Created" body={createdBodyTemplate} sortable></Column>
                        <Column body={actionBodyTemplate} ></Column>
                    </DataTable>
                    : <SignInOutButton/>
                }
            </Card>
        </div>
    )
}

async function deleteContainer(container) {
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + '/api/endpoints/2/docker/containers/' + container.Id;
    const res = await fetch(url, {
        method: 'DELETE',
        body: 'delete Container'
    })
    console.log(res)
}