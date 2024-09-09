import { useTranslation } from "@/app/i18n";
import Link from "next/link";

export default async function PartnerWithUs({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng ,"partnerWithUs");

  return (
    
    <div className="bg-main-bg-color w-full">
    <div className="grid md:grid-cols-2 gap-4 items-center overflow-hidden">
      <div className="relative w-full h-full md:min-h-[470px]">
        <img src="https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-129016.jpg" className="w-full h-full object-cover shrink-0" />
        <span className="w-full h-full absolute inset-0 bg-main-bg-color opacity-20"></span>
      </div>
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="sm:text-4xl text-2xl font-bold text-white">Partner With Us, Forget the Rest!</h1>
        <div className="mt-6">
          <p className="text-lg text-white"><strong className="text-amber-500">Partner with us</strong>, and let us take care of all the logistics while you focus on growing your business.</p>
          <p className="mt-2 text-lg text-white">
          From order fulfillment to inventory management and seamless integration with top e-commerce platforms, we've got everything covered. With our dedicated support, you can rest easy knowing your operations are in expert hands. Join us, and leave the details to us—so you can concentrate on what you do best.</p>
        </div>
        <button type="button"
          className="px-6 py-3 mt-10 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-button-bg-color hover:bg-amber-500">Get started</button>
      </div>
    </div>
  </div>

  );
}
