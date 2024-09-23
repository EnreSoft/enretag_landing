import "@aarsteinmedia/dotlottie-player";
import { useTranslation } from "@/app/i18n";

export default async function Features({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "translations");
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-center font-bold text-button-bg-color py-5 uppercase">
            {t("Revolutionary Fulfillment Solutions")}
          </h2>
          <p className="text-lg font-normal text-main-bg-color max-w-md md:max-w-2xl mx-auto">
            {t("Streamline your e-commerce with our efficient Pick, Pack, and Ship services, real-time tracking, and full system integration all designed for 100% customer satisfaction.")}
          </p>
        </div>
        <div className="flex justify-center items-start gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500">
              <dotlottie-player
                src="https://lottie.host/c4fd95e7-3cac-4a91-8155-0a413c7acdf2/Z5mp0sHzvP.json"
                background="transparent"
                speed={1}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h4 className="text-lg font-semibold text-main-bg-color mb-3 capitalize">
              {t("Pick, Pack, and Ship")}
            </h4>
            <p className="text-md font-normal text-main-bg-color">
              {t("When a product is sold, it is automatically recorded in our system. We retrieve order details directly from the system, complete the necessary preparations, and ship the orders.")}
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500">
              <dotlottie-player
                src="https://lottie.host/5a9b9f4a-cd25-4081-8164-f24d5c8186ae/bkUZGZEpew.json"
                background="transparent"
                speed={0.5}
                direction={1}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h4 className="text-lg font-semibold text-main-bg-color mb-3 capitalize">
              {t("Superior Service Quality")}
            </h4>
            <p className="text-md font-normal text-main-bg-color">
              {t("Our most important mission is to work with 100% customer satisfaction. To achieve this, we prioritize direct communication with all our customers to elevate the slow-moving communication network in the e-commerce sector to the highest levels.")}
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500">
              <dotlottie-player
                src="https://lottie.host/acf2a564-a7a3-412e-8119-dd9013cf6aa0/9yLN5eyoJn.json"
                background="transparent"
                speed={0.5}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h4 className="text-lg font-semibold text-main-bg-color mb-3 capitalize">
              {t("100% Integration")}
            </h4>
            <p className="text-md font-normal text-main-bg-color">
              {t("Our warehouse has a fully automated software for the rapid and accurate fulfillment of customer orders. You can benefit from our software without any charges.")}
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ">
              <dotlottie-player
                src="https://lottie.host/ba109e6c-2882-4692-8780-3c6caff187df/yhOxOihMOO.json"
                background="transparent"
                speed={0.5}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h4 className="text-lg font-semibold text-main-bg-color mb-3 capitalize">
              {t("Real-Time Shipment Tracking System")}
            </h4>
            <p className="text-md font-normal text-main-bg-color">
              {t("Tracking all your shipments through our system is incredibly easy. As soon as your packages leave our warehouse, tracking numbers are updated, allowing you to follow your order process in real-time.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}