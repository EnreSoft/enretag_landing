import { BriefcaseIcon, CalendarDateRangeIcon, ClipboardDocumentCheckIcon, CubeIcon, CurrencyDollarIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "@/app/i18n";

export default async function Services({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "translations");

    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="text-center mx-auto max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-button-bg-color dark:text-white uppercase mt-4">
              {t("More orders, easy management")}
            </h2>
            <p className="text-main-bg-color sm:text-xl dark:text-gray-400">
              {t("Elevate your business effortlessly. As your dedicated partner, we ensure exceptional service for both you and your customers, simplifying your operations and fostering the perfect environment for your business to flourish")}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex text-amber-500 justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-primary-900">
                <CurrencyDollarIcon />
              </div>
              <h3 className="mb-2 text-main-bg-color text-xl font-bold dark:text-white">
                {t("Save Thousands")}
              </h3>
              <p className="text-main-bg-color dark:text-gray-400">
                {t("Save thousands every month by cutting the costs and complications of fulfillment, shipping, and labor.")}
              </p>
            </div>
            <div>
              <div className="flex text-amber-500 justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 dark:bg-primary-900">
                <ClipboardDocumentCheckIcon />
              </div>
              <h3 className="mb-2 text-xl text-main-bg-color font-bold dark:text-white">
                {t("Same Day Fulfillment")}
              </h3>
              <p className="text-main-bg-color dark:text-gray-400">
                {t("Personalized, convenient, and same day in 24-hour multi-channel order fulfillment.")}
              </p>
            </div>
            <div>
              <div className="flex text-amber-500 justify-center items-center mb-4 w-10 h-10 rounded-full  lg:h-12 lg:w-12 dark:bg-primary-900">
                <RocketLaunchIcon />
              </div>
              <h3 className="mb-2 text-xl text-main-bg-color font-bold dark:text-white">
                {t("Customer Support")}
              </h3>
              <p className="text-main-bg-color dark:text-gray-400">
                {t("We proudly support our services with solution-driven customer care, available 24/7 for your convenience.")}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}