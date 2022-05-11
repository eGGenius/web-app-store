import React, { useState, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/router';
import { Card } from 'primereact/card';
import Link from "next/link";
import SignInOutButton from '../components/SignInOutButton';

export default function MenuBar() {
    
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

    const start = <Link href="/"><img  alt="logo" src="/logo.png" height="40" className="mr-3"></img></Link>;
    const end = <SignInOutButton/>

    return (
        <div className="p-4">
            <Card>
                <Menubar model={items} start={start} end={end}/>
            </Card>
        </div>
    );
}
