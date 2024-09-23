import { useTranslation } from "@/app/i18n";

const renderStatsSection = (text: string, statistics: string) => {
  return (
    <div className="flex flex-col bg-gray-200/50 p-8">
      <dt className="text-sm font-semibold leading-6 text-main-bg-color">
        {text}
      </dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-main-bg-color">
        {statistics}
      </dd>
    </div>
  )
}

export default async function Stats({ lng }: { lng: string }) {
    const { t } = await useTranslation(lng, "translations");

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">
                {t("Empowering Businesses with")}{" "}
                <span>Enretag</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-main-bg-color">
                {t("Our fulfillment platform is trusted by our customers to optimize logistics, enhance efficiency, and improve customer satisfaction.")}
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {renderStatsSection(t("Fullfilled Orders"), "1.5M+")}
              {renderStatsSection(t("Warehouses Capacity"), "16.000 ft²+")}
              {renderStatsSection(t("Processing Time"), "~24h")}
              {renderStatsSection(t("Customer Satisfaction"), "98%")}
            </dl>
          </div>
        </div>
      </div>
    );
}