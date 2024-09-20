import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import Features from "./Features";
import ReadMoreLink from "./ReadMore";
import { useTranslation } from "@/app/i18n";
import DotsSvg from "./docs/svg/Dots";

export default async function Content({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "translations");
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-gray-50 rounded-xl px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className=" font-semibold leading-7 text-button-bg-color">
                  {t("Enretag LLC.")}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-main-bg-color sm:text-4xl">
                  {t("Services")}
                </h1>
                <p className="mt-6 text-xl leading-8 text-main-bg-color">
                  {t("Among the various services offered at our warehouse are options like")}{" "}
                  <span className="font-semibold text-amber-500">
                    {t("FBA (Fulfilled by Amazon), FBM (Fulfilled by Merchant), Dropshipping, LTL Freight Shipment and Wholesale.")}
                 </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              alt=""
              src="https://www.monks.com/data/s3fs-public/wp-content/uploads/2020/10/amazon-fba-benefits.jpg?VersionId=gitiS4dO2fG6DhWj.mkZyHs0nINMTgs_"
              className="w-[24rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            />
            <span className="absolute left-3 bottom-3 z-[-1]">
              <DotsSvg />
            </span>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl  leading-7 text-gray-700 lg:max-w-lg">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-main-bg-color"
                    />
                    <span className="text-main-bg-color">
                      <strong className="font-semibold text-amber-500">
                        {t("FBA")}
                      </strong>{" "}
                      {t("With the FBA service, customers can easily send their products to Amazon's warehouses and thanks to our advanced software, they can easily manage their inventory and orders.")}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-main-bg-color"
                    />
                    <span>
                      <strong className="font-semibold text-amber-500">
                        {t("FBM")}
                      </strong>{" "}
                      {t("FBM allows customers to keep their products in our warehouses and fulfill orders directly.")}
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-main-bg-color"
                    />
                    <span className="text-main-bg-color">
                      <strong className="font-semibold text-amber-500">
                        {t("Dropshipping")}
                      </strong>{" "}
                      {t("Dropshipping is an ideal solution for sending products directly from the supplier to the customer without the need for inventory.")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Features lng={lng} />
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-bg-color dark:text-white">
              {t("FBA")}
            </h2>
            <p className="mb-4 text-main-bg-color">
              {t("content-fba-paragraph")}
            </p>
            <ReadMoreLink pageLink={`/${lng}/services/fba`} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/landing_page/fba-2.jpg"
              alt="office content 1"
            />
            <img
              className="w-full h-full lg:mt-10 rounded-lg"
              src="/images/landing_page/fba-1.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col-reverse lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/landing_page/fbm-222.jpeg"
              alt="office content 1"
            />
            <img
              className="w-full lg:mt-10 rounded-lg"
              src="https://static.wixstatic.com/media/11062b_eb61d65a6818475eb3e09dc3ab7d210f~mv2.jpg/v1/fill/w_640,h_1048,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_eb61d65a6818475eb3e09dc3ab7d210f~mv2.jpg"
              alt="office content 2"
            />
          </div>

          <div className="font-light text-main-bg-color sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-bg-color dark:text-white">
              {t("FBM")}
            </h2>
            <p className="mb-4 text-main-bg-color">
              {t("content-fbm-paragraph")}
            </p>
            <ReadMoreLink pageLink={`/${lng}/services/fbm`} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-bg-color dark:text-white">
              {t("Wholesale")}
            </h2>
            <p className="mb-4 text-main-bg-color">
              {t("content-wholesale-paragraph")}
            </p>
            <ReadMoreLink pageLink={`/${lng}/services/wholesale`} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/landing_page/wholesale-111.jpg"
              alt="office content 1"
            />
            <img
              className="w-full lg:mt-10 rounded-lg"
              src="/images/landing_page/wholesale-222.webp"
              alt="office content 2"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col-reverse lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/landing_page/dropshipping-2.jpg"
              alt="office content 1"
            />
            <img
              className="w-full lg:mt-10 rounded-lg"
              src="/images/landing_page/dropshipping-1.png"
              alt="office content 2"
            />
          </div>

          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-bg-color dark:text-white">
              {t("Dropshipping")}
            </h2>
            <p className="mb-4 text-main-bg-color">
              {t("content-dropshipping-paragraph")}
            </p>
            <ReadMoreLink pageLink={`/${lng}/services/dropshipping`} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-main-bg-color dark:text-white">
              {t("LTL Freight Shipment")}
            </h2>
            <p className="mb-4 text-main-bg-color">
              {t("content-ltl-paragraph")}
            </p>
            <ReadMoreLink pageLink={`/${lng}/services/ltl-freight-shipment`} />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/images/landing_page/ltl-2222.jpg"
              alt="office content 1"
            />
            <img
              className="w-full lg:mt-10 rounded-lg"
              src="/images/landing_page/ltl-1111.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
