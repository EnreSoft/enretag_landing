import React from "react";
import { useTranslation } from "@/app/i18n";
import AppNavBar from "@/components/AppNavBar";
import DotsSvg from "@/components/docs/svg/Dots";

export default async function About1({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "translations");

  return (
      <div>
      <AppNavBar lng={lng} />
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12 self-start">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/02/71/35/08/1000_F_271350812_KPlJRhJuudJEhwGvY6G1WrTBGyve8nxI.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://focus.independent.ie/thumbor/oYgzdlp2IGQ3rV8vnJdW7HlhC54=/0x0:3238x2158/960x640/prod-mh-ireland/dd2ae54a-2a0c-4c90-af24-a81d7ec02cd5/068bb87d-69dd-4484-a911-8f08f7df3469/dd2ae54a-2a0c-4c90-af24-a81d7ec02cd5.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="/images/about_page/enretag.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <DotsSvg />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-main-bg-color">
                  {t("Enretag LLC.")}
                </span>
                <h2 className="mb-5 text-3xl font-bold text-button-bg-color dark:text-white sm:text-[40px]/[48px]">
                {t("About Us")}
                </h2>
                <p className="mb-5  text-main-bg-color text-body-color dark:text-dark-6">
                {t("about-paragraph-one")}
                </p>
                <p className="mb-8  text-main-bg-color text-body-color dark:text-dark-6">
                {t("about-paragraph-two")}
                </p>
                <p className="mb-8  text-body-color text-main-bg-color dark:text-dark-6">
                {t("about-paragraph-three")}
                </p>
                <p className="mb-8  text-body-color text-main-bg-color dark:text-dark-6">
                {t("about-paragraph-four")}
                </p>
                <p className="mb-8  text-body-color text-main-bg-color dark:text-dark-6">
                {t("about-paragraph-five")}
                </p>
                <a
                  href={`/${lng}/contact`}
                  className="inline-flex items-center justify-center py-3  font-medium text-center text-white border border-transparent rounded-md px-7 bg-button-bg-color hover:bg-amber-500"
                >
                  {t("Contact Us")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
};
