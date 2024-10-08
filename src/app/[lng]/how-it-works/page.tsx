import { useTranslation } from "@/app/i18n";
import AppNavBar from "@/components/AppNavBar";
import {
    ArchiveBoxArrowDownIcon,
    CheckCircleIcon,
    GiftIcon,
    InboxStackIcon,
    TagIcon,
    TruckIcon
} from "@heroicons/react/20/solid";

export default async function HowItWorks({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "translations");
  return (
    <div className="bg-white py-24 sm:py-32">
      <AppNavBar lng={lng} />
      <section>
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          {/* <h2 className=" font-semibold leading-7 text-main-bg-color">Deliver faster</h2> */}
          <p className="mt-2 text-center text-4xl lg:text-3xl font-bold tracking-tight text-button-bg-color sm:text-4xl">
            {t('How Enretag Works ?')}
          </p>
          <p className="mt-6 text-lg leading-8 text-main-bg-color hidden lg:inline-flex">
            {t('Discover how we work and experience')} &nbsp;<strong>{t('Peace of Mind')}</strong>.
          </p>
          <div>
            <ol className="hidden lg:flex items-center w-full mt-6 ml-10">
              <li className="flex w-full items-center text-main-bg-color dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <span className="flex text-main-bg-color items-center justify-center w-10 h-10 bg-transparent rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <ArchiveBoxArrowDownIcon />
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex text-main-bg-color items-center justify-center w-10 h-10 bg-transparent rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <TagIcon />
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex text-main-bg-color items-center justify-center w-10 h-10 bg-transparent rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <GiftIcon />
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                <span className="flex text-main-bg-color items-center justify-center w-10 h-10 bg-transparent rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <TruckIcon />
                </span>
              </li>
              <li className="flex w-full items-center after:inline-block dark:after:border-gray-700">
                <span className="flex text-amber-500 items-center justify-center w-10 h-10 bg-transparent rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                  <CheckCircleIcon />
                </span>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <div className="relative pl-16">
                <dt className=" font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-main-bg-color">
                    <InboxStackIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-main-bg-color text-2xl">
                    <span className="text-amber-500 font-bold text-4xl">
                      1.{" "}
                    </span>{" "}
                    {t("Receiving")}
                  </span>
                </dt>
                <dd className="mt-2  leading-7 text-main-bg-color">
                  <ul className="mt-8 space-y-8 text-main-bg-color">
                    <li className="flex flex-col gap-y-3">
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("As Fulfillment Center,")}
                        </strong>{" "}
                        {t("how-it-works-receiving-paragraph-one")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Upon arrival")}
                        </strong>{" "}
                        {t("how-it-works-receiving-paragraph-two")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t('After the receiving process')}
                        </strong>{" "}
                        {t("how-it-works-receiving-paragraph-three")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Customer satisfaction")}
                        </strong>{" "}
                        {t("how-it-works-receiving-paragraph-four")}
                      </p>
                      <div className="place-items-center grid grid-cols-1 lg:hidden">
                        <img
                          className="lg:w-full rounded-lg"
                          src="https://plus.unsplash.com/premium_photo-1682141929497-97402f35d45e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2VpdmUlMjBjYXJnb3xlbnwwfHwwfHx8MA%3D%3D"
                          alt="office content 1"
                        />
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
            <div className="place-items-center grid-cols-1 hidden lg:grid">
              <img
                className="lg:w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1682141929497-97402f35d45e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2VpdmUlMjBjYXJnb3xlbnwwfHwwfHx8MA%3D%3D"
                alt="office content 1"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid-cols-1 mt-8 place-items-center hidden lg:grid">
              <img
                className="w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1682088362401-755d9802bc07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhYmVsaW5nfGVufDB8fDB8fHww"
                alt="office content 1"
              />
            </div>

            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <div className="relative pl-16">
                <dt className=" font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-main-bg-color">
                    <TagIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-main-bg-color text-2xl">
                    <span className="text-amber-500 text-4xl">2.</span>{" "}
                    {t("Preparing")}
                  </span>
                </dt>
                <dd className="mt-2  leading-7 text-gray-600">
                  <ul className="mt-8 space-y-8 text-main-bg-color">
                    <li className="flex flex-col gap-y-3">
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("After your products' boxes are opened")}
                        </strong>{" "}
                        {t("how-it-works-preparing-paragraph-one")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Thanks to our advanced software,")}{" "}
                        </strong>
                        {t("how-it-works-preparing-paragraph-two")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Then,")}
                        </strong>{" "}
                        {t("how-it-works-preparing-paragraph-three")}
                      </p>
                      <div className="grid-cols-1 mt-8 grid place-items-center lg:hidden">
                        <img
                          className="w-full rounded-lg"
                          src="https://plus.unsplash.com/premium_photo-1682088362401-755d9802bc07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhYmVsaW5nfGVufDB8fDB8fHww"
                          alt="office content 1"
                        />
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <div className="relative pl-16">
                <dt className=" font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-main-bg-color">
                    <GiftIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-main-bg-color text-2xl">
                    <span className="text-amber-500 text-4xl">3.</span>{" "}
                    {t("Packaging & Boxing")}
                  </span>
                </dt>
                <dd className="mt-2  leading-7 text-gray-600">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex flex-col gap-y-3">
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Completed affecting products")}
                        </strong>{" "}
                        {t("how-it-works-packaging-paragraph-one")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("During this process,")}
                        </strong>{" "}
                        {t("how-it-works-packaging-paragraph-two")}
                      </p>
                      <div className="grid-cols-1 mt-8 place-items-center grid lg:hidden">
                        <img
                          className="w-full rounded-lg"
                          src="https://plus.unsplash.com/premium_photo-1681487526392-6183829c5f80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFja2FnaW5nfGVufDB8MHwwfHx8MA%3D%3D"
                          alt="office content 1"
                        />
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
            <div className="grid-cols-1 mt-8 place-items-center hidden lg:grid">
              <img
                className="w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1681487526392-6183829c5f80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFja2FnaW5nfGVufDB8MHwwfHx8MA%3D%3D"
                alt="office content 1"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid-cols-1 mt-8 hidden lg:grid">
              <img
                className="w-full rounded-lg"
                src="https://plus.unsplash.com/premium_photo-1661295649213-ed9c73204520?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fERlbGl2ZXJpbmd8ZW58MHwwfDB8fHww"
                alt="office content 1"
              />
            </div>

            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <div className="relative pl-16">
                <dt className=" font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-main-bg-color">
                    <TruckIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  <span className="text-main-bg-color text-2xl">
                    <span className="text-amber-500 text-4xl">4.</span>{" "}
                    {t("Shipment")}
                  </span>
                </dt>
                <dd className="mt-2  leading-7 text-gray-600">
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex flex-col gap-y-3">
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("After the boxing process")}
                        </strong>{" "}
                        {t("how-it-works-delivering-paragraph-one")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Once sellers acquire the required labels (e.g., FBA),")}
                        </strong>{" "}
                        {t("how-it-works-delivering-paragraph-two")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Once documents and labels are completed,")}
                        </strong>{" "}
                        {t("how-it-works-delivering-paragraph-three")}
                      </p>
                      <p>
                        <strong className="font-semibold text-main-bg-color">
                          {t("Then, our professional team")}
                        </strong>{" "}
                        {t("how-it-works-delivering-paragraph-four")}
                      </p>
                      <div className="grid-cols-1 mt-8 grid lg:hidden">
                        <img
                          className="w-full rounded-lg"
                          src="https://plus.unsplash.com/premium_photo-1661295649213-ed9c73204520?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fERlbGl2ZXJpbmd8ZW58MHwwfDB8fHww"
                          alt="office content 1"
                        />
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
        <blockquote className="max-w-screen-xl text-xl italic font-semibold text-gray-900 dark:text-white">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p>
            {t("how-it-works-quote")}
          </p>
          <div className="flex flex-row justify-end mt-4">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 self"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          </div>
          <div className="mt-4 flex flex-row justify-center">
          <a
      href={`/${lng}/contact`}
      className="text-white bg-button-bg-color hover:bg-hover-button-bg-color focus:ring-4 focus:text-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {t("Contact Us")}
    </a>
          </div>
        </blockquote>
        </div>
      </section>
    </div>
  );
}
