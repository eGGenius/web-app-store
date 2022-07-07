import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';

export default function Home() {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '900px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '800px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (data) => {
        return (
            <Link href={data.name}>
                <Card className='cursor-pointer border-1 border-100 md:m-4 text-center shadow-0 hover:shadow-7'>
                    <Image src={data.logo || '/images.png'} width='120' height='120' />
                    <h1>{data.name}</h1>
                    <h4>{data.description}</h4>
                </Card>
            </Link>
        );
    }

    const products = [
        { "id": "0", "link": "/Kanboard", "name": "Kanboard", "description": "Project Management", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/kanboard.png?alt=media&token=5de76267-1611-4b47-9cb3-febf7ad7011b" },
        { "id": "1", "link": "/Nextcloud", "name": "Nextcloud", "description": "Productivity Platform", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/Nextcloud_Logo.svg.png?alt=media&token=1b3127e5-ba27-4616-8a96-9b9db1427e53" },
        { "id": "2", "link": "/Code%20Server", "name": "Code Server", "description": "VS Code", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/vscode.png?alt=media&token=2e631410-ac69-4f40-aea2-5f8a24ba06d8" },
        { "id": "3", "link": "/Wiki.js", "name": "Wiki.js", "description": "Wiki", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/wikijs.png?alt=media&token=ef6e07f8-b72b-495e-99fd-46b64e175db3" },
        { "id": "4", "link": "/Plex", "name": "Plex", "description": "Personal Media Library", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/plex.png?alt=media&token=884166c2-7523-4932-839b-349f93db6cb5" },
        { "id": "5", "link": "/Rocket.Chat", "name": "Rocket.Chat", "description": "Web Chat Server", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/rocketchat.png?alt=media&token=3a6a6cce-2c90-4a02-ae92-01bdd508551a" }
    ]


    return (
        <>
            <div className="p-4">
                <Card>
                    <div className="grid">
                        <div className="sm:col-12 md:col-6 align-items-center flex">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-6xl ">Run your Apps on the Web</div>
                                <div className="font-bold line-height-2 md:text-left text-primary text-6xl">access them from any Device</div>
                                <p className='md:text-left mt-0 mb-4 text-700 line-height-3 mt-3'>run your Apps on the Web an make you independant from platform restrictions</p>
                                <div className="md:text-left md:pt-4">
                                    <Link href="/store">
                                        <Button icon="pi pi-shopping-cart" label="Visit the Store" type="button" className="p-button-raised mr-3 p-button-info" />
                                    </Link>
                                    <Link href="/store">
                                        <Button icon="pi pi-info-circle" label="Learn More" type="button" className="p-button-outlined p-button-info" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-12 md:col-6 align-items-center flex">
                            <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/hero.png' layout="intrinsic" />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">Benfits of the </span>
                            <span className="text-primary">WebApp Store</span>
                        </div>
                        <div className="grid">
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-lock-open text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Stop Platform Dependencies</div>
                                <span className="text-700 text-sm line-height-3">WebApps can be used from every Device that has Internet Access</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-lock text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">End-to-End Encryption</div>
                                <span className="text-700 text-sm line-height-3">Every WebApp is secured by a trusted certificate and all treffic is encrypted</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Easy to Use</div>
                                <span className="text-700 text-sm line-height-3">Installing a WebApp is as simple as installing a App on your Phone</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-globe text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Fast & Global Accessibilty</div>
                                <span className="text-700 text-sm line-height-3">Every WebApp is accessible from all around the world</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-users text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Collaborative</div>
                                <span className="text-700 text-sm line-height-3">Use one App for your team, your family or your company</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 md:mb-4 mb-0 px-3">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-shield text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Trusted Security</div>
                                <span className="text-700 text-sm line-height-3">All WebApps run in a secure datacenter in Germany</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">Common </span>
                            <span className="text-primary">UseCases</span>
                        </div>
                    </div>
                    <div className="justify-content-center grid">
                        <div className="sm:col-12 md:col-5 align-items-center text-center flex">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Collaboration</div>
                                <p className='md:text-left text-lg'>Collaborate with as many users as you like</p>
                                <p className='md:text-left text-lg'>Because everything is stored in one App everybody has the same state and you dont need to worry about syncing your changes as you go along in your project</p>
                            </div>
                        </div>
                        <div className="sm:col-12 md:col-5 flex">
                            <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/undraw_Collaboration.png' layout="intrinsic" />
                        </div>
                    </div>
                    <div className="justify-content-center grid">
                        <div className="sm:col-12 md:col-5 align-items-center flex md:flex-order-2">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Online Calendar</div>
                                <p className='md:text-left text-lg'>Collaborate with as many users as you like</p>
                                <p className='md:text-left text-lg'>Because everything is stored in one App everybody has the same state and you dont need to worry about syncing your changes as you go along in your project</p>
                            </div>
                        </div>
                        <div className="flex sm:col-12 md:col-5 md:flex-order-1">
                            <Image className=' pt-4 pl-1' alt="hero" height="800" width="920" src='/undraw_Online_calendar.png' layout="intrinsic" />
                        </div>
                    </div>
                    <div className="justify-content-center grid">
                        <div className="sm:col-12 md:col-5 align-items-center flex">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Scrum Board</div>
                                <p className='md:text-left text-lg'>Collaborate with as many users as you like</p>
                                <p className='md:text-left text-lg'>Because everything is stored in one App everybody has the same state and you dont need to worry about syncing your changes as you go along in your project</p>
                            </div>
                        </div>
                        <div className="sm:col-12 md:col-5 flex">
                            <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/undraw_Scrum_board.png' layout="intrinsic" />
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">Popular </span>
                            <span className="text-primary">WebApps</span>
                        </div>
                    </div>
                    <Carousel value={products} itemTemplate={productTemplate} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}></Carousel>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">Try it </span>
                            <span className="text-primary">for Free</span>
                        </div>
                        <div className="text-700 text-2xl mb-5">Browse the Store and install 3 WebApps for Free</div>
                        <Link href="/store">
                            <Button icon="pi pi-shopping-cart" label="Visit the Store" type="button" className="p-button-raised mr-3 p-button-info p-button-lg" />
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    );
}
