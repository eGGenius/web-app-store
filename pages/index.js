import { DataView } from 'primereact/dataview';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import styles from "../styles/index.module.css";
import Link from 'next/link';
import { Card } from 'primereact/card'


export default function Home({ data }) {
    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4" style={{height: '30rem', width: '20rem'}}>
                <div className={styles.productgriditem}>
                    <div className={styles.productgriditemcontent}>
                    <img src={data.logo || 'images.png'}/>
                        <div className={styles.productname}>{data.title}</div>
                        <div className={styles.productdescription}>{data.description}</div>   
                        <Link href={data.title}>
                            <Button icon="pi pi-plus-circle" label="Install" ></Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className={styles.dataviewdemo}>
                <Card>
                    <DataView value={data} itemTemplate={renderGridItem} paginator rows={45} />
                </Card>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const url = process.env.NEXT_PUBLIC_WEBAPP_STORE + `/api/templates`
    const res = await fetch(url)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }