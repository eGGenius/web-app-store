import { useContext } from 'react';
import { UserContext } from '../lib/context';
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useRouter } from 'next/router';
import { Card } from 'primereact/card';
import Link from "next/link";

export default function MenuBar() {
    const { user, username } = useContext(UserContext)
    
    const router = useRouter();
    const items = [
        {
            label: 'Store',
            icon: 'pi pi-fw pi-shopping-cart',
            command:()=>{ router.push('/'); }
        },
        {
            label: 'WebApps',
            icon: 'pi pi-fw pi-th-large',
            command:()=>{ router.push('/myapps'); }
        },
        {
            label: 'New',
            icon: 'pi pi-fw pi-plus-circle',
            command:()=>{ router.push('/newapp'); }
        }
    ];

    const start = <Link href="/"><img  alt="logo" src="logo.png" height="40" className="mr-3"></img></Link>;
    const end = <Button label="" icon="pi pi-user"/>;

    return (
        <div className="p-4">
        <div >
            <Card>
                <Menubar model={items} start={start} end={end}/>
            </Card>
        </div>
        </div>
    );
}