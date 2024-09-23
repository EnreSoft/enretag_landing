import { useTranslation } from '@/app/i18n';
import AppNavBar from '@/components/AppNavBar';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';

export default async function FbaComponent({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await useTranslation(lng, "translations"); 
    return (
        <div>
            <AppNavBar lng={lng} />
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mt-10">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className=" font-semibold leading-7 text-main-bg-color">{t('Enretag LLC.')}</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">{t('Amazon FBA')}</h1>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                {t('services-page-fba-paragraph-1')}
                                </p>
                                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                                {t('services-page-fba-paragraph-2')}
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
                                            <strong className="font-semibold text-amber-500">{t('Storage')}</strong> : {t("services-page-fba-paragraph-3")}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Packaging & Shipping')}</strong>  : {t("services-page-fba-paragraph-4")}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Customer Service & Returns')}</strong> : {t('services-page-fba-paragraph-5')}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Prime Eligibility')}</strong> : {t('services-page-fba-paragraph-6')}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Global Reach')}</strong> : {t('services-page-fba-paragraph-7')}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Inventory Management')}</strong> : {t('services-page-fba-paragraph-8')}
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <CheckBadgeIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-main-bg-color" />
                                        <span>
                                            <strong className="font-semibold text-amber-500">{t('Multi-Channel Fulfillment')}</strong> : {t('services-page-fba-paragraph-9')}
                                        </span>
                                    </li>

                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <p>{t('services-page-fba-paragraph-10')}</p>
                                    </li>

                                    <li className="flex gap-x-3 text-main-bg-color">
                                        <p>{t('services-page-fba-paragraph-11')}</p>
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