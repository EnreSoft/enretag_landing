import {
  AmazonSvg,
  EbaySvg,
  EtsySvg,
  FedexSvg,
  ShopifySvg,
  UpsSvg,
  UspsSvg,
  WalmartSvg,
  WayfairSvg,
  WooCommerceSvg,
} from "./partners";

function LogoList() {
  return (
    <ul
      x-ref="logos"
      className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
    >
      <li>
        <AmazonSvg />
      </li>

      <li>
        <EtsySvg />
      </li>

      <li>
        <EbaySvg />
      </li>

      <li>
        <ShopifySvg />
      </li>

      <li>
        <WalmartSvg />
      </li>

      <li>
        <WooCommerceSvg />
      </li>

      <li>
        <WayfairSvg />
      </li>

      <li>
        <FedexSvg />
      </li>

      <li>
        <UpsSvg />
      </li>
      <li>
        <UspsSvg />
      </li>
    </ul>
  );
}

export default function PartnerLogos() {
  return (
    <section>
      <main className="relative h-48 w-screen mb-10 flex flex-col justify-center bg-white overflow-hidden">
        <div className="w-full max-w-5xl mx-auto mt-20 px-4 md:px-6 py-24">
          <div className="text-center">
            <div
              x-data="{}"
              x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
              className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
              <LogoList />
              <LogoList />
              <LogoList />
              <LogoList />
              <LogoList />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
