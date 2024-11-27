import { useTranslation } from "@/app/i18n";
import AppNavBar from "@/components/AppNavBar";
import WhatsappSvg from "@/components/docs/svg/Whatsapp";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from "@heroicons/react/20/solid";
import ContactForm from "./ContactForm";

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
                <a
                  target="_blank"
                  href={lng === "tr" ? "https://wa.me/905421730852" : "https://wa.me/19174155816"}
                  className="mt-2 text-sm text-button-bg-color dark:text-blue-400"
                >
                  {lng === "tr" ? "Türkiye: +90 542 173 08 52" : "USA: +1 917 415 5816"}
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
                  {lng === "tr" ? "Türkiye: +90 542 173 08 52" : "USA: +1 917 415 5816"}
                </p>
              </div>
            </div>

            <ContactForm params={{
              lng: lng
            }} />
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
