import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

    return (
        <>
            <div className="p-4">
                <Card>
                    <div className="grid">
                        <div className="sm:col-12 md:col-6 text-center md:text-left align-items-center flex">
                            <section>
                                <div className="block text-6xl font-bold mb-1">Run your Apps on the Web</div>
                                <div className="text-6xl text-primary font-bold mb-3">access them from any Device</div>
                                <Link href="/store">
                                    <Button icon="pi pi-shopping-cart" label="Visit the Store" type="button" className="p-button-raised" />
                                </Link>
                            </section>
                        </div>
                        <div className="sm:col-12 md:col-6">
                            <Image alt="hero" height="1600" width="2000" src='/hero.png' layout="intrinsic" style={{ paddingLeft: '2rem', paddingRight: '1rem', paddingTop: '2rem'}}/>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="p-4">
                <Card>
                    <div className="text-center">
                        <div className="mb-3 font-bold text-6xl">
                            <span className="text-900">Benfits of </span>
                            <span className="text-primary">WebApps</span>
                        </div>
                        <div className="grid">
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Built for Developers</div>
                                <span className="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-lock text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">End-to-End Encryption</div>
                                <span className="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Easy to Use</div>
                                <span className="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-globe text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Fast & Global Support</div>
                                <span className="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 mb-4 px-5">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-github text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Open Source</div>
                                <span className="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
                            </div>
                            <div className="sm:col-12 md:col-6 lg:col-4 md:mb-4 mb-0 px-3">
                                <span className="p-3 shadow-8 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-shield text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 mb-3 font-medium">Trusted Securitty</div>
                                <span className="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
                            </div>
                        </div>
                    </div>

                </Card>
            </div>
        </>
    );
}
