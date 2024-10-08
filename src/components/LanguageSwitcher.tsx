import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import React from "react";
import { SpainFlag, TurkeyFlag, UsaFlag } from "./Icons";

export default function LanguageSwitcher({lng}: {lng: string}) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const [language, setLanguage] = React.useState(lng);
  const languages = [
    { key: "en", name: "English" },
    { key: "tr", name: "Türkçe" },
    { key: "sp", name: "Español" }
  ];

  return (
    <Dropdown className="bg-white" backdrop="blur">
      <DropdownTrigger>
        <Button className="bg-white mr-5 text-main-bg-color">
          {languages.find((lang) => lang.key === lng)?.name}
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="new"
          onClick={() => window.location.assign(`/en`)}
          className="text-center text-main-bg-color"
        >
          <span className="flex flex-row items-center justify-center">
            <UsaFlag />
            English
          </span>
        </DropdownItem>
        <DropdownItem
          key="edit"
          onClick={() => window.location.assign(`/sp`)}
          className="text-center text-main-bg-color"
        >
          <span className="flex flex-row items-center justify-center">
            <SpainFlag />
            Español
          </span>
        </DropdownItem>
        <DropdownItem
          key="copy"
          onClick={() => window.location.assign(`/tr`)}
          className="text-center text-main-bg-color"
        >
          <span className="flex flex-row items-center justify-center"><TurkeyFlag/> Türkçe</span>
          
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}