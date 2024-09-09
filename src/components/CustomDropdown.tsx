import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { ArrowDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function CustomDropdownMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="font-semibold text-white" style={{cursor: 'pointer'}}>
          Services
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem>
          <Link href="/en/services/fba" legacyBehavior>
            <a className="flex items-center">
             
              FBA
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/en/services/fbm" legacyBehavior>
            <a className="flex items-center">
              
              FBM
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/en/services/wholesale" legacyBehavior>
            <a className="flex items-center">
              
              Wholesale
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/en/services/dropshipping" legacyBehavior>
            <a className="flex items-center">
              
            Dropshipping
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href="/en/services/ltl-freight-shipment" legacyBehavior>
            <a className="flex items-center">
              
              LTL Freight Shipment
            </a>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}