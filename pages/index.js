import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import { Timeline } from 'primereact/timeline';

export default function Home() {
    const steps = [
        { status: 'Browse the Store and find an interesting WebApp', icon: 'pi pi-search', color: '#9E9E9E', subTitle: '', content: 'The Store offers a variety of popular open source WebApps. If you miss one, just head to the New menu and read the instructions on how to add a WebApp to the Store.'},
        { status: 'Install it with one single Click', icon: 'pi pi-plus-circle', color: '#F97316', subTitle: '', content: 'All WebApps can be installed with a single click. Just give it a name and we will take care of the rest, so you dont need to bother about all the technical details.' },
        { status: 'Share the Link with your friends', icon: 'pi pi-share-alt', color: '#22C55E', subTitle: '', content: 'After clicking Install, you will be redirected to the My WebApps page where you can see all the WebApps you have installed. Simply copy the link to your new WebApp and share it with everyone you like.' },
        { status: 'Enjoy using it', icon: 'pi pi-heart', color: '#A855F7', subTitle: '', content: 'That is all you need to get your new WebApp up and running. You can now use it for yourself, with friends and family, or within your business.' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker shadow-1" style={{ backgroundColor: item.color, width: '2rem', height:'2rem', alignItems:'center', justifyContent:'center', borderRadius:'50%', display:'flex' }}>
                <i className={item.icon} ></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} className="shadow-none">
                <p>{item.content}</p>
            </Card>
        );
    };


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
        { "id": "1", "link": "/Wiki.js", "name": "Wiki.js", "description": "Wiki", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/wikijs.png?alt=media&token=ef6e07f8-b72b-495e-99fd-46b64e175db3" },
        { "id": "2", "link": "/LibrePhotos", "name": "LibrePhotos", "description": "Photo Library", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/librephotos.png?alt=media&token=de397f2c-2816-4b81-8a29-c93b75fb3ec8" },
        { "id": "3", "link": "/Code%20Server", "name": "Code Server", "description": "VS Code", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/vscode.png?alt=media&token=2e631410-ac69-4f40-aea2-5f8a24ba06d8" },
        { "id": "4", "link": "/Plex", "name": "Plex", "description": "Personal Media Library", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/plex.png?alt=media&token=884166c2-7523-4932-839b-349f93db6cb5" },
        { "id": "5", "link": "/Rocket.Chat", "name": "Rocket.Chat", "description": "Web Chat Server", "logo": "https://firebasestorage.googleapis.com/v0/b/webappstore-4c0a1.appspot.com/o/rocketchat.png?alt=media&token=3a6a6cce-2c90-4a02-ae92-01bdd508551a" }
    ]


    return (
        <>
            <div className="p-4">
                <Card>
                    <div className="grid">
                        <div className="sm:col-12 md:col-6 align-items-center flex justify-content-center">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-6xl ">Run your Apps on the Web</div>
                                <div className="font-bold line-height-2 md:text-left text-primary text-6xl">access them from any Device</div>
                                <p className='md:text-left mt-0 mb-5 text-700 line-height-3 mt-3 h5'>run your Apps on the Web an make you independant from platform restrictions</p>
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
                        <div className="sm:col-12 md:col-6 align-items-center flex grid">
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
                                <span className="text-700 text-sm line-height-3">Every WebApp is secured by a trusted certificate</span>
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
                                <div className="text-900 mb-3 font-medium">Global Accessibilty</div>
                                <span className="text-700 text-sm line-height-3">Every WebApp is accessible from all around the world</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-users text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Collaborative</div>
                                <span className="text-700 text-sm line-height-3">WebApps can be used by multiple users at the same time</span>
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
                        <div className="sm:col-12 md:col-5 align-items-center flex md:flex-order-0 flex-order-1">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Collaboration</div>
                                <p className='md:text-left text-lg font-bold'>Use <Link href="/Nextcloud"> Nextcloud</Link> to manage Your Data</p>
                                <p className='md:text-left text-lg'>Nextcloud delivers tight integration of chat, project management, email, calendar and more. Chat messages can be turned directly into tasks, task deadlines are visible in the calendar, and files can be attached to a task via the share dialog.</p>
                            </div>
                        </div>
                        <div className="sm:col-12 md:col-5 flex">
                            <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/undraw_Collaboration.png' layout="intrinsic" />
                        </div>
                    </div>
                    <div className="justify-content-center grid">
                        <div className="flex sm:col-12 md:col-5">
                            <Image className=' pt-4 pl-1' alt="hero" height="800" width="920" src='/chat.png' layout="intrinsic" />
                        </div>
                        <div className="sm:col-12 md:col-5 align-items-center flex">
                            <div className="text-center md:text-left md:pl-4 ">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Communication</div>
                                <p className="md:text-left text-lg font-bold">Use <Link href="/Rocket.Chat"> Rocket.Chat</Link> to let every Conversation flow</p>
                                <p className="md:text-left text-lg">Rocket.Chat is the world&apos;s largest open source communcation platform and a great alternative to Slack, because it not only provides a great UI, you can also integrate it in your own App.</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-content-center grid">
                        <div className="sm:col-12 md:col-5 align-items-center flex md:flex-order-0 flex-order-1">
                            <div className="text-center md:text-left md:pl-4">
                                <div className="font-bold line-height-2 md:text-left text-4xl ">Documentation</div>
                                <p className='md:text-left text-lg font-bold'>Use <Link href="/Wiki.js">Wiki.js</Link> to make documentation a joy</p>
                                <p className='md:text-left text-lg'>Wiki.js is the most powerful and extensible open source Wiki software, that lets you write and customize your own Wiki</p>
                            </div>
                        </div>
                        <div className="sm:col-12 md:col-5 flex">
                            <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/wiki.png' layout="intrinsic" />
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
                            <span className="text-900">About </span>
                            <span className="text-primary">me</span>
                        </div>
                        <div className="justify-content-center grid">
                            <div className="sm:col-12 md:col-5 align-items-center flex md:flex-order-0 flex-order-1">
                                <div className="text-center md:text-left md:pl-4">
                                    <div className="font-bold line-height-2 md:text-left text-4xl ">Hi I&aposm Jonathan,</div>
                                    <p className='md:text-left text-xl font-bold'>I love to break IT stuff down and make it so simple that anyone can use it.</p>
                                    <p className='md:text-left text-lg'>The WebApp Store is a part of my master thesis in which I evaluate it.</p>
                                    <div className='flex justify-content-center'>
                                        <a href={`mailto:contact@webapp-store.de`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}} >
                                            <Button icon="pi pi-envelope" label="Get In Touch" type="button" className="p-button-raised" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-12 md:col-5 flex">
                                <Image className='pt-4 pl-1' alt="hero" height="800" width="920" src='/coder.png' layout="intrinsic" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">How it </span>
                            <span className="text-primary">works</span>
                        </div>
                        <div className="timeline-demo">
                            <Timeline value={steps} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} style={{alignItems: 'left' }}/>
                        </div>
                    </div>
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
