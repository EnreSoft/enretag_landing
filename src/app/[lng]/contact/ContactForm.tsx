"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/app/i18n";
import AppNavBar from "@/components/AppNavBar";
import WhatsappSvg from "@/components/docs/svg/Whatsapp";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { toast } from 'react-hot-toast';

export default function ContactForm({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(
        "https://app.enretag.com/api/v1/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message. Please try again.", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="p-4 py-6 rounded-lg bg-gray-100 dark:bg-gray-800 md:p-8">
      <form onSubmit={handleSubmit}>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
              {lng === "en" ? "First Name" : lng === "tr" ? "Ad" : "Nombre"}
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder={lng === "en" ? "First Name" : lng === "tr" ? "Ad" : "Nombre"}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
              {lng === "en" ? "Last Name" : lng === "tr" ? "Soyad" : "Apellido"}
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder={lng === "en" ? "Last Name" : lng === "tr" ? "Soyad" : "Apellido"}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
            {lng === "en" ? "Email Address" : lng === "tr" ? "E-posta Adresi" : "Correo Electrónico"}
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder={lng === "en" ? "Email Address" : lng === "tr" ? "E-posta Adresi" : "Correo Electrónico"}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-main-bg-color dark:text-gray-200">
            {lng === "en" ? "Message" : lng === "tr" ? "Mesaj" : "Mensaje"}
          </label>
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={handleInputChange}
            className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={lng === "en" ? "We want to hear from you." : lng === "tr" ? "Sizden haber almak istiyoruz." : "Queremos saber de ti."}
          ></textarea>
        </div>

        <button className="bg-button-bg-color w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          {lng === "en" ? "Send Message" : lng === "tr" ? "Mesaj Gönder" : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
}
