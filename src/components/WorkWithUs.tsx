import React from "react";
import { useTranslation } from "@/app/i18n";
import DotsSvg from "./docs/svg/Dots";
import Link from "next/link";

interface IProps {
  lng: string
}

const images = {
  firstImage: 'https://t3.ftcdn.net/jpg/03/17/75/96/360_F_317759691_tOGvURIzTXP5pyHfy33I5cQazw8fxK0g.jpg',
  secondImage: '/soft.jpeg',
  thirdImage: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1Y2Nlc3NmdWwlMjBidXNpbmVzc3xlbnwwfDF8MHx8fDA%3D',
  imageClasses: 'w-full rounded-2xl'
}

const renderImage = (src: string, alt: string, classes: string) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
    />
  )
}

export  default async function WorkWithUs(props: Readonly<IProps>) {
  const { lng } = props;
  const { t } = await useTranslation(lng, "workWithUs");

  return (
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    {renderImage(images.firstImage, 'first image', images.imageClasses)}
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
      src='/images/why_choose_us/soft.jpeg'
      alt='second image'
      className={'w-full rounded-2xl'}
    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    {renderImage(images.thirdImage, 'third image', images.imageClasses)}
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <DotsSvg />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-button-bg-color dark:text-white sm:text-[40px]/[48px]">
                {t("Why Choose Us ?")}
                </h2>
                <p className="mb-5 text-main-bg-color text-body-color dark:text-dark-6">
                Enretag is your trusted partner for reliable and fast fulfillment in North America. We stand out with our proprietary software, which ensures real-time tracking, efficient inventory management, and seamless order processing.
                </p>
                <p className="mb-8 text-main-bg-color text-body-color dark:text-dark-6">
                Our technology, combined with a dedicated team, allows you to focus on growing your business while we handle the logistics. Choose Enretag for a fulfillment service that’s efficient, tech-driven, and tailored to your needs.
                </p>
                <Link href={`/${lng}/contact`} className="get-started-link bg-button-bg-color hover:bg-amber-500">
                {t("Contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};