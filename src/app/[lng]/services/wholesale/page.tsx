import AppNavBar from '@/components/AppNavBar'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'


export default function FbmComponent({ params: { lng } }: { params: { lng: string } }) {
    return (
        <div>
            <AppNavBar lng={lng} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">Enretag LLC.</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">Wholesale</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Wholesale, a commercial business model, involves the sale of products in large quantities, typically at lower unit prices. Wholesale purchasing facilitates the procurement and stocking process, often geared towards retail sales. Wholesalers acquire products directly from manufacturers or through intermediaries, then sell them to retailers or end-users. This process enables retailers to replenish their stocks, engage in sales at competitive prices, and increase their profits. Wholesale transactions usually require a minimum order quantity or value, and wholesale buyers often benefit from special pricing and discounts.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Enretag LLC is a warehouse facility designed for wholesalers operating on e-commerce platforms such as Amazon, Walmart, Shopify, and eBay. Our warehouse offers many advantages to sellers, including centralized storage, reduced logistical costs, and services like packaging and labeling of goods. Utilizing our services allows sellers to focus on growing their businesses without the hassle of storage and logistics management. Enretag LLC serves not only sellers on the mentioned platforms but also provides services on other platforms involved in wholesale merchandise distribution, making us a versatile solution partner for your business.
                                </p>

                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Enretag LLC is an excellent choice for your business due to many advantages:
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/wholesale-service-11.jpg"
                            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl  leading-7 text-main-bg-color lg:max-w-lg">
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">The automatic warehouse management system</strong> enables efficient management of storage and delivery of goods, reducing logistics time and costs.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Integration</strong> with popular e-commerce platforms (Amazon, Walmart, Etsy, eBay, Shopify, WooCommerce) allows quick and easy access to sales and inventory data through Enretag LLC software automation, making it affordable for small and medium-sized businesses.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">With its extensive storage capacity</strong> and the privilege of fast delivery to customers, Enretag LLC becomes an ideal solution for wholesalers and online stores.

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