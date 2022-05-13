import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import styles from "../styles/index.module.css";
import Link from 'next/link';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { firestore } from '../lib/firebase';
import Image from 'next/image';


export default function Home({ data }) {
    const renderGridItem = (data) => {
        return (
                <div className={"sm:col-12 md:col-6 lg:col-4 xl:col-2"}  style={{ borderColor: 'rgba(255, 0, 0, 0)'}}>
                    <div className={styles.productgriditem}>
                            <Image src={data.logo || 'images.png'} width= '80' height='80'/>
                            <div className={styles.productname}>{data.title}</div>
                            <div className={styles.productdescription}>{data.description}</div>
                            <Link href={data.title}>
                                <Button icon="pi pi-plus-circle" label="Install" ></Button>
                            </Link>
                    </div>
                </div>
        );
    }

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter">
                <div className="col-6" style={{textAlign: 'left'}}>
                    <Dropdown optionLabel="label" placeholder="Filter by Category"/>
                </div>
            </div>
        );
    }
    const header = renderHeader();

    return (
        <div className="p-4">
            <div className={styles.dataview}>
                <Card>
                    <DataView value={data} itemTemplate={renderGridItem} paginator rows={60} header={header}/>
                </Card>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    let result = await firestore.collection('webapps').get();
    let data = [];
  
    result.forEach(doc => {
        data.push(doc.data());
    });
    return { props: { data } }
}