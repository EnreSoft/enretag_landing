import AppNavBar from "@/components/AppNavBar"

export default function DropshippingComponent({ params: { lng } }: { params: { lng: string } }) {
    return (
        <div>
            <AppNavBar lng={lng} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">Enretag LLC.</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">Dropshipping</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Specialized large manufacturers and small private label owners in wholesale can sell their products on Amazon and other marketplaces in the United States. Standardized requirements are established for packaging, labeling, and adherence to product delivery deadlines for such businesses. To ensure compliance and avoid rejection of deliveries or refusal of further collaboration, our professional team meticulously conducts visual inspection, branding, kit formation, and packaging of products before they are sent to e-commerce platform buyers. All processes are executed promptly to minimize the risk of delays in delivery dates.
                                </p>

                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                Dropshipping is an e-commerce business model where a store owner does not stock or hold inventory. Instead, they forward customer orders directly to the supplier or manufacturer, who then ships the products directly to the customer. The dropshipping business model provides store owners with the advantage of relieving operational burdens such as inventory management and warehouse operations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/images/service_pages/dropshipping-service-1.jpg"
                            className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}