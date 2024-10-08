import { useTranslation } from "@/app/i18n";
export default async function PartnerWithUs({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng ,"translations");

  return (
    <div className="bg-main-bg-color w-full bg-work-with-us-pattern bg-center bg-cover">
    <div className="grid md:grid-cols-1 gap-4 items-center overflow-hidden">
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="sm:text-4xl text-2xl font-bold text-main-bg-color">{t('Partner With Us, Forget the Rest!')}</h1>
        <div className="mt-6">
          <p className="text-lg font-bold text-main-bg-color"><strong className="text-amber-500">{t('Partner with us')}</strong>, {t('and let us take care of all the logistics while you focus on growing your business.')}</p>
          <p className="mt-2 text-lg font-bold text-main-bg-color">
          {t("From order fulfillment to inventory management and seamless integration with top e-commerce platforms, we've got everything covered. With our dedicated support, you can rest easy knowing your operations are in expert hands. Join us, and leave the details to us—so you can concentrate on what you do best.")}
          </p>
        </div>
        <div className="flex flex-row justify-center">
        <button type="button"
          className="px-6 py-3 mt-10 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-button-bg-color hover:bg-amber-500">{t('Get Started')}</button>
        </div>
      </div>
    </div>
  </div>
  );
}
