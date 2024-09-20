import { useTranslation } from "@/app/i18n";
import AppNavBar from "@/components/AppNavBar";
import WhatsappSvg from "@/components/docs/svg/Whatsapp";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/20/solid";

export default async function ContactUs({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng, "translations");

  return (
    <div>
      <AppNavBar lng={lng} />
      <section className="bg-white dark:bg-gray-900 mt-40">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-main-bg-color dark:text-blue-400">
              {t('Contact Us')}
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-button-bg-color md:text-3xl dark:text-white">
              {t('Contact to our firendly team.')}
            </h1>

            <p className="mt-3 text-main-bg-color dark:text-gray-400">
              {t('contact-paragraph-one')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 mb-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-white rounded-full bg-main-bg-color dark:bg-gray-800">
                  <EnvelopeIcon width={24} height={24} />
                </span>

                <h2 className="mt-4  font-medium text-main-bg-color dark:text-white">
                  {t('Email')}
                </h2>
                <p className="mt-2 text-sm text-main-bg-color dark:text-gray-400">
                  {t('contact-email')}
                </p>
                <p className="mt-2 text-sm text-button-bg-color dark:text-blue-400">
                  <a href="mailto:info@enretag.com">info@enretag.com</a>
                </p>
              </div>

              <div>
              <span className="inline-block p-3 text-white rounded-full bg-main-bg-color dark:bg-gray-800">
                  <WhatsappSvg />
                </span>
                <h2 className="mt-4  font-medium text-main-bg-color dark:text-white">
                  {t('Whatsapp')}
                </h2>
                <p className="mt-2 text-sm text-main-bg-color dark:text-gray-400">
                  {t('contact-whatsapp')}
                </p>
                <a target="_blank" href="https://wa.me/19174155816" className="mt-2 text-sm text-button-bg-color dark:text-blue-400">
                  {t("USA")} : +1 917 415 5816
                </a>
              </div>

              <div>
                <span className="inline-block p-3 text-white rounded-full bg-main-bg-color dark:bg-gray-800">
                  <MapPinIcon width={24} height={24} />
                  </span>
                <h2 className="mt-4  font-medium text-main-bg-color dark:text-white">
                  {t("Office")}
                </h2>
                <p className="mt-2 text-sm text-main-bg-color dark:text-gray-400">
                  {t('contact-office')}
                </p>
                <p className="mt-2 text-sm text-button-bg-color dark:text-blue-400">
                  727 Hylton Rd, Pennsauken Township, New Jersey USA 08110
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-white rounded-full bg-main-bg-color dark:bg-gray-800">
                  <PhoneIcon width={24} height={24} />
                </span>

                <h2 className="mt-4  font-medium text-main-bg-color dark:text-white">
                  {t("Phone")}
                </h2>
                <p className="mt-2 text-sm text-main-bg-color dark:text-gray-400">
                  {t('contact-working-hours')}
                </p>
                <p className="mt-2 text-sm  text-button-bg-color dark:text-blue-400">
                  {t('USA')} : +1 917 415 5816
                </p>
              </div>
            </div>

            <div className="p-4 py-6 rounded-lg bg-gray-100 dark:bg-gray-800 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
                      {t('Name')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('First Name')}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
                      {t('Surname')}
                    </label>
                    <input
                      type="text"
                      placeholder={t("Last Name")}
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
                    {t('Email')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('Email Address')}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
                    {t('Message')}
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder={t("We want to hear from you.")}
                  ></textarea>
                </div>

                <button className="bg-button-bg-color w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {t('Send Message')}
                </button>
              </form>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310598.6911169807!2d-75.15691529608631!3d39.980196907592386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b58e558bf757%3A0xf586ad23c5bf4cf4!2s727%20Hylton%20Rd%2C%20Pennsauken%20Township%2C%20NJ%2008110!5e0!3m2!1sen!2sus!4v1719266475941!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
            title="enretag-map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
