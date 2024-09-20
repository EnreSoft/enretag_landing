"use client";
import { useTranslation } from "@/app/i18n";
import { Link, LinkIcon } from "@nextui-org/react";
import TurkeyFlagSvg from "./docs/svg/TurkeyFlag";
import UsaFlagSvg from "./docs/svg/UsaFlag";
import CustomDropdownMenu from "./CustomDropdown";
import LanguageSwitcher from "./LanguageSwitcher";

interface AppNavBarProps {
  lng: string;
}

export default async function AppNavBar(props: Readonly<AppNavBarProps>) {
  const { t } = await useTranslation(props.lng, "translations");

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="bg-main-bg-color border-gray-200 dark:bg-gray-900">
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href={`/${props.lng}`}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo-white.png" className="h-16" alt="Flowbite Logo" />
          </a>
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
           <LanguageSwitcher lng={props.lng}/>
           <Link
              href="https://app.enretag.com/en/home/login"
              target="_blank"
              type="button"
              className="text-white bg-button-bg-color hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {t("Login/Register")}
              </Link>
              
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-main-bg-color lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-main-bg-color">
              <li>
                <a
                  href={`/${props.lng}`}
                  className="block py-2 px-3 lg:p-0 text-white bg-main-bg-color rounded lg:bg-transparent hover:text-button-bg-color transition duration-400"
                  aria-current="page"
                >
                  {t("Home")}
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent lg:border-0 lg:p-0 lg:w-auto dark:text-white  dark:focus:text-white dark:hover:bg-gray-700 hover:text-button-bg-color transition duration-400"
                >
                  {t("Services")}{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href={`/${props.lng}/services/fba`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("FBA")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/${props.lng}/services/fbm`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("FBM")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/${props.lng}/services/dropshipping`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("Dropshipping")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/${props.lng}/services/wholesale`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("Wholesale")}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`/${props.lng}/services/ltl-freight-shipment`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {t("LTL Freight Shipment")}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href={`/${props.lng}/about`}
                  className="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-button-bg-color  transition duration-400"
                >
                  {t("About Us")}
                </a>
              </li>
              <li>
                <a
                  href={`/${props.lng}/how-it-works`}
                  className="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-button-bg-color  transition duration-400"
                >
                  {t("How It Works?")}
                </a>
              </li>
              <li>
                <a
                  href={`/${props.lng}/contact`}
                  className="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-button-bg-color  transition duration-400"
                >
                  {t("Contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
