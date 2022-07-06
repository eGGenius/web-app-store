import React, { useState, useRef } from 'react';

import Image from 'next/image';

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
            command:()=>{ router.push('/store'); }
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

    const start = <Link href="/"><Image  alt="logo" src="/logo2.png" height="40" width="90"className="mr-3" ></Image></Link>;
    const end = <SignInOutButton/>

    return (
        <div className="p-4">
            <Card>
                <Menubar model={items} start={start} end={end}/>
            </Card>
        </div>
    );
}
