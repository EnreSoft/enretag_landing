import AppNavBar from '@/components/AppNavBar';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

export default function FbmComponent({ params: { lng } }: { params: { lng: string } }) {
    return (
        <div>
            <AppNavBar  lng={lng}/>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">Enretag LLC.</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">LTL Freight Shipment</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                In the modern world of commerce, the storage and distribution of products hold great importance. The efficient management of these processes directly affects the success of businesses. It is at this point that shipping with pallets has become an indispensable logistical solution for many companies.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Many warehouses and distribution centers optimize their operations by taking advantage of the benefits of pallet shipping. Shipping with pallets speeds up business processes. Additionally, it minimizes the risk of product damage and loss, thus ensuring a more reliable service to customers.
                                </p>

                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Both your domestic (within America) and international pallets are prepared by our expert teams and made ready for shipment within a short period. During the shipment process, the customs documentation for your pallets is carefully prepared, and necessary follow-ups are meticulously conducted until your pallets reach the desired destination. This situation provides significant advantages in terms of price, speed, security, and inventory management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/images/service_pages/ltl-service-1.jpeg"
                            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl  leading-7 text-main-bg-color lg:max-w-lg">
                                <ul role="list" className="mt-8 space-y-8 text-main-bg-color">
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">At Enretag,</strong> we listen to our customers' needs and do our best to provide them with the most suitable service according to their business model.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">We promptly prepare and carefully package your pallets</strong> according to your business model and volume, ensuring their shipment as quickly as possible. You can benefit from our pallet shipping service on either a seasonal or continuous basis.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">As we all know,</strong> e-commerce is a competitive platform. With our fast, efficient, and cost-effective solutions, it's now easier than ever to outperform your competitors.

                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}