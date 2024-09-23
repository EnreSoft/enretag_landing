import { useTranslation } from '@/app/i18n';
import AppNavBar from '@/components/AppNavBar'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'


export default async function FbmComponent({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, "translations");
    return (
        <div>
            <AppNavBar lng={lng} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">{t('Enretag LLC.')}</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">{t('FBM (Fulfillment by Merchant)')}</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                {t('services-page-fbm-paragraph-1')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/images/service_pages/fbm-service-11.png"
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
                                            <strong className="font-semibold text-amber-500">{t("Enretag LLC's advanced software")}</strong> : {t("Thanks to Enretag LLC's advanced software, orders from your e-commerce platform accounts are automatically received by our system.")}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">Storage</strong>  : {t("Sellers can avail sales services directly from Enretag LLC's warehouses, eliminating the need for renting storage space for their products.")}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Orders')}</strong> : {t('All products will be stored in our warehouses immediately after the purchase process and will be dispatched to customers according to your preferences. We will take care of managing your orders, allowing you to focus on your business.')}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Safety your product')}</strong> : {t('Our team is dedicated to product preparation, packaging, complying with the requirements of the e-commerce platform, and ensuring the safety of your products. You can rest assured that your products will reach the buyer on time and in good condition.')}
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