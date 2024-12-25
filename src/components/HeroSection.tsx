import { useTranslation } from "@/app/i18n";
import AppNavBar from "./AppNavBar";

export default async function HeroSection({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "translations");
  return (
    <div className="bg-hero-pattern w-screen relative">
      <AppNavBar lng={lng} />
      <section className="bg-white sm:bg-hero-pattern relative bg-cover bg-top bg-no-repeat">
        <div className="relative xl:ml-20 mx-auto px-4 py-32 mt-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl  text-left sm:text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-5xl sm:text-3xl font-extrabold sm:text-5xl text-[#1c2655] animate-delay-300 animate-fade-right animate-once animate-ease-linear">
              {t('Fulfillment Solutions')}
              <strong className="block font-extrabold text-amber-500 text-4xl sm:text-3xl">
                {t('Focus on selling, we’ll handle the rest.')}
              </strong>
            </h1>

            <div className="flex flex-col sm:flex-row flex-wrap justify-between mt-8 text-left sm:text-start animate-fade-up animate-once animate-duration-[1000ms] animate-delay-[1000ms] animate-ease-linear">
              <div className=" mb-4 w-full sm:w-1/2">
                <h2 className="text-2xl font-bold text-button-bg-color">
                  {t('Order Fulfillment')}
                </h2>
                <p className="text-lg sm:text-medium font-light font-semibold md:text-medium text-main-bg-color">
                  {t('We ensure your orders are processed efficiently and delivered to your customers with speed and precision.')}
                </p>
              </div>
              <div className="mb-4 w-full sm:w-1/2">
                <h2 className="text-2xl font-bold text-button-bg-color">
                  {t('Seamless Integration')}
                </h2>
                <p className="text-lg sm:text-medium md:text-medium text-main-bg-color font-light font-semibold">
                  {t('We provide seamless integration with your existing systems to streamline your business operations.')}
                </p>
              </div>
              <div className="mt-4 w-full sm:w-1/2">
                <h2 className="text-2xl font-bold text-button-bg-color">
                 {t('Inventory Management')}
                </h2>
                <p className="text-lg sm:text-medium md:text-medium text-main-bg-color font-light font-semibold">
                  {t('Monitor your inventory in real-time, plan proactively, and enhance your operational efficiency.')}
                </p>
              </div>
              <div className="mt-4 w-full sm:w-1/2">
                <h2 className="text-2xl font-bold text-button-bg-color">
                  {t('Account Managers')}
                </h2>
                <p className="text-lg sm:text-medium md:text-medium text-main-bg-color font-light font-semibold">
                  {t('Dedicated account managers are here to support your business growth and promptly address your needs.')}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-once animate-duration-[1000ms] animate-delay-[1000ms] animate-ease-linear">
              <a
                href={`/${lng}/contact`}
                className="block w-full rounded bg-button-bg-color px-12 py-3 text-lg font-medium text-white shadow hover:bg-amber-500 focus:outline-none focus:ring active:bg-[#] sm:w-auto text-center"
              >
                {t('Get a Quote')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
