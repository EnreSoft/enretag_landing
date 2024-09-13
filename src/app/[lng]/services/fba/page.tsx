import AppNavBar from '@/components/AppNavBar';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

export default function FbaComponent({ params: { lng } }: { params: { lng: string } }) {
    return (
        <div>
            <AppNavBar lng={lng} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">Enretag LLC.</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">Amazon FBA</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                If you're an online seller, you might be familiar with the challenges of order fulfillment - storage, packaging, shipping, customer service, and returns. Amazon FBA (Fulfillment by Amazon) is a service designed to relieve these pressures so that you can focus more on growing your business.
                                </p>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Amazon FBA is a comprehensive solution provided by Amazon that takes care of storage, packaging, and shipping of your products. When a customer places an order for your product, Amazon's fulfillment centers take over - they pick, pack, and ship the product on your behalf. This not only reduces your workload but also ensures a swift and professional delivery service.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/images/service_pages/fba-service-111.webp"
                            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[46rem]"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl  leading-7 text-main-bg-color lg:max-w-lg">
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Storage</strong> : Amazon FBA provides access to Amazon's extensive warehouse network, so you can store your inventory for Amazon to ship. This greatly reduces the spend on your own storage space and helps minimize overhead costs.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Packaging & Shipping</strong>  : Amazon handles the complete packaging and shipping process. Once an order is placed, Amazon's team packages the product and ships it to the customer. This ensures a quick and efficient delivery process, improving customer satisfaction.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Customer Service & Returns</strong> : Amazon FBA also covers customer service and the handling of returns. This means any inquiries or issues related to shipping, tracking, and returns are managed by Amazon's customer service.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Prime Eligibility</strong> : Products fulfilled by Amazon FBA are automatically eligible for Amazon Prime, thus attracting a vast customer base who prefer fast, free shipping.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Global Reach</strong> : With Amazon FBA, you can effortlessly sell your products globally by leveraging Amazon's international logistics network.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Inventory Management</strong> : Amazon provides robust tools and systems to help you manage your inventory effectively. You can track and monitor inventory levels, set up automated replenishment, and benefit from Amazon's forecasting capabilities.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Multi-Channel Fulfillment</strong> : In addition to fulfilling orders from Amazon's marketplace, you can also use Amazon FBA to fulfill orders from other sales channels, including your own website or other e-commerce platforms.
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <p>While Amazon FBA provides numerous benefits, it's important to consider the associated costs, which include storage fees, fulfillment fees, and additional service fees. These vary based on the size and weight of your products, and the time of year. It's essential to factor in these costs when determining your product pricing and profitability.</p>
                                    </li>

                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <p>In summary, Amazon FBA is an effective solution for online sellers looking to simplify their logistics. By handling storage, packaging, shipping, customer service, and inventory management, Amazon FBA allows sellers to focus on what they do best - sourcing and selling great products. With the added advantage of Prime eligibility and global reach, Amazon FBA can help you reach a wider customer base and streamline your e-commerce operations.</p>
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