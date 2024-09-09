
export default async function Footer({ lng }: { lng: string }) {

  return (
    <footer className="font-sans tracking-wide bg-main-bg-color px-8 py-12 w-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        <div>
          <a href={`/${lng}`}>
            <img src="/logo-white.png" alt="logo" className="h-16" />
          </a>
          <ul className="mt-10 flex space-x-5">
            <li>
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300 w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300  w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300  w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="fill-gray-300  w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Navigation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>

          <ul className="mt-6 space-y-5">
            <li>
              <a href={`/${lng}`} className="hover:text-white text-gray-300 text-sm">
                Home
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/about`}
                className="hover:text-white text-gray-300 text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/contact`}
                className="hover:text-white text-gray-300 text-sm"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/how-it-works`}
                className="hover:text-white text-gray-300 text-sm"
              >
                How it works
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6 ">
            <li>
              <a
                href={`/${lng}/services/fba`}
                className="hover:text-white text-gray-300 text-sm"
              >
                FBA
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/services/fbm`}
                className="hover:text-white text-gray-300 text-sm"
              >
                FBM
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/services/wholesale`}
                className="hover:text-white text-gray-300 text-sm"
              >
                Wholesale
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/services/dropshipping`}
                className="hover:text-white text-gray-300 text-sm"
              >
                Dropshipping
              </a>
            </li>
            <li>
              <a
                href={`/${lng}/services/ltl-freight-shipment`}
                className="hover:text-white text-gray-300 text-sm"
              >
                LTL-Freight Shipment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
            Contact
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              className=" absolute right-0 top-1 fill-[#d6d6d6]"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16"
                data-original="#000000"
              ></path>
            </svg>
          </h4>
          <ul className="space-y-5 mt-6  flex flex-col gap-5">
            <li>
              <div className="flex flex-row justify-start gap-3">
                <svg
                  fill="#fff"
                  width="36px"
                  height="36px"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z" />
                </svg>
                <address className="text-gray-300">
                  727 Hylton Rd, Pennsauken Township, New Jersey USA 08110
                </address>
              </div>
            </li>
            <li>
              <div className="flex flex-row justify-start gap-3">
                <svg
                  fill="#fff"
                  height="24px"
                  width="24px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      className="st0"
                      d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165
		c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792
		c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135
		c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142
		c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006
		c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14
		C152.159-1.117,112.6,10.159,94.811,21.696z"
                    />
                  </g>
                </svg>
                <p className="text-gray-300">USA : +1 917 415 5816</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row justify-start gap-3">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                    fill="#fff"
                  />
                </svg>
                <div><a target="_blank" href="https://wa.me/19174155816" className="mt-2 text-sm text-white dark:text-blue-400">
                  {("USA")} : +1 917 415 5816
                </a></div>
              </div>
            </li>
            <li>
              <div className="flex flex-row justify-start gap-3">
                <svg
                  fill="#fff"
                  width="24"
                  height="24"
                  viewBox="0 -2.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>email [#1573]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-300.000000, -922.000000)"
                      fill="#fff"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z"
                          id="email-[#1573]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="text-gray-300">Email : info@enretag.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-gray-400" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <p className="text-gray-300 text-sm">
          © Copyright 2023 Enretag LLC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
