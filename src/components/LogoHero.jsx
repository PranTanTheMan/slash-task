import { motion } from "framer-motion";

const LogoHero = ({ header, subheader, button_text }) => {
  return (
    <section className="bg-white min-h-screen py-24">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-semibold">
          {header}
        </h1>
        <p className="text-center max-w-xl my-6">{subheader}</p>
        <a href="/products">
          <button className="flex items-center bg-indigo-600 text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            {button_text}
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </a>
      </div>

      <div className="flex  overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-6">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-6 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center cursor-default text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl " />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    {logos.map((logo, i) => {
      return <LogoItem Icon={logo} key={i} />;
    })}
  </>
);

const LogoItemsBottom = () => (
  <>
    {logos.reverse().map((logo, i) => {
      return <LogoItem Icon={logo} key={i} />;
    })}
  </>
);

const Framer = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Framer</title>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  </>
);

const aws = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Amazon AWS</title>
      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
    </svg>
  </>
);

const alfa = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Alfa Romeo</title>
      <path d="M13.539 5.4052a.2158.2158 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm-9.3055 1.576l-.6533 1.2987-1.3365-.7-.276.5514a.4317.4317 0 0 1 .0917-.0097c.0556 0 .1107.0105.1536.0301l1.4923.7814.8869-1.764zm15.7221.4324l.3109-.1689.509.9792.3498-.1894-.5095-.9791.2969-.1608.7336 1.4093.3494-.1896-1.0138-1.9486c-.0371.0863-.1084.1592-.1651.1888l-1.451.787 1.0071 1.9358.3497-.1897zm-7.2864-2.0084a.2158.2158 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm5.0574 1.5187l.0027.0031c1.1982 1.3498 1.9262 3.1265 1.9262 5.0732 0 3.1035-1.8496 5.7747-4.5065 6.9728-.009.0044-.0178.0093-.0271.0134l.0021-.0018.025-.0116c.4345-.2065.7352-.6488.7352-1.1619 0-.7107-.576-1.2865-1.2867-1.2865l-1.3545-.0012a.1656.1656 0 1 1 0-.3312h2.2875c1.0767 0 1.9496-.8729 1.9496-1.9497 0-1.0767-.8729-1.9497-1.9496-1.9497l-.2906.0003h-1.9184a.1656.1656 0 1 1 0-.3311l1.6868-.0019c1.7798 0 3.2227-1.4428 3.2227-3.2226a3.207 3.207 0 0 0-.5307-1.772l-.0085-.012a.023.023 0 0 1-.0046-.0135c0-.013.0106-.0235.0236-.0235.008 0 .0114.0012.0158.0074zm-3.258 12.3178a7.6339 7.6339 0 0 1-2.459.4041c-1.148 0-2.2368-.2534-3.214-.707v-6.0254h2.1652a2.4299 2.4299 0 0 1-.1227-.765c0-.4029.0986-.783.2719-1.1181H8.7957v-5.969c.9771-.4535 2.0658-.707 3.214-.707 1.3347 0 2.5898.3422 3.6818.9435h.0007c.1562.0988.26.273.26.4717a.5572.5572 0 0 1-.5573.5572l-.0122-.0004h-.1792l-.76.0009c-.2677 0-.4145.079-.5066.159-.2655.2302-.1745.5029-.7192.5029h-1.5022c.2032.4685.6696.8067.7856.8855h1.845a.1784.1784 0 0 1 .1655.112.1561.1561 0 0 1 .0102.0971.1786.1786 0 0 1-.1757.1483H12.468c-.1443.0754-.5827.3489-.785.9661h3.39a.4006.4006 0 1 1 0 .8012l-1.7171-.0002c-1.1836 0-2.1431.9595-2.1431 2.143 0 1.1837.9595 2.1432 2.143 2.1432h2.1414c.0915 0 .1656.0765.1656.168a.1638.1638 0 0 1-.1656.1634h-2.193c-.8671 0-1.5701.7028-1.5701 1.5697 0 .8671.703 1.57 1.57 1.57l.8284.0028c.4185 0 .7632.3512.7632.7667 0 .3396-.2049.5791-.427.7158zm-7.5559-8.2114H4.425c.2368-1.8715 1.1506-3.532 2.4878-4.7287zm0 6.6683c-1.3505-1.209-2.2688-2.8907-2.4943-4.7852h2.4943zm5.097-13.7579c-4.451 0-8.0594 3.6083-8.0594 8.0595 0 4.4508 3.6084 8.0594 8.0593 8.0594 4.4512 0 8.0595-3.6086 8.0595-8.0594 0-4.4512-3.6083-8.0595-8.0595-8.0595zm-.301 2.009h1.9023a.1443.1443 0 0 0 .144-.144.1445.1445 0 0 0-.144-.1442h-1.9023a.1445.1445 0 0 0-.144.1442c0 .0793.0649.144.144.144zm.072-.5445a.2159.2159 0 1 0 0-.4318.2158.2158 0 1 0 0 .4318zm.2988 2.6522l.027-.0257v-.0002l-.027-.0259c-.421-.3057-.6075-.6844-.7201-.9775-.0777-.202-.1652-.3679-.2925-.4893-.1322-.1258-.2285-.1927-.4192-.1927a.9713.9713 0 0 0-.2302.0292l-.0456.011.0283.0525c.0422.0783.1205.2238.2576.2656a.1193.1193 0 0 0 .0356.0046.386.386 0 0 0 .0332-.0019c.009-.0008.0178-.0017.0261-.0017.0093 0 .0123.0013.0124.0013.148.0856.2255.7166.2255 1.031 0 .0537-.0222.078-.0718.078-.0493 0-.1136-.027-.153-.0641-.0867-.0935-.2107-.146-.347-.146-.2223 0-.458.1499-.4673.4005v.0509c.0094.2506.245.4005.4674.4005.1362 0 .2602-.0525.3469-.146.0394-.037.1037-.0639.153-.0639.0496 0 .0718.024.0718.0778 0 .3144-.0776.9454-.2255 1.031 0 0-.003.0012-.0124.0012a.2845.2845 0 0 1-.026-.0016.386.386 0 0 0-.0333-.0019.1194.1194 0 0 0-.0356.0046c-.1371.0418-.2154.1873-.2576.2656l-.0283.0525.0456.0112a.9836.9836 0 0 0 .2302.029c.1907 0 .287-.0667.4192-.1927.1273-.1214.2148-.2873.2925-.4893.1126-.2931.299-.6718.7201-.9776zm-9.4412 2.1223l-.1222.8035-.6999-.5284zm-1.2738.6372a.2464.2464 0 0 1 .097-.0193.2522.2522 0 0 1 .1233.0318l.0028.0016 1.5266 1.1735.0775-.5098-.3103-.2336.1861-1.2242.3638-.1216.0773-.5089-2.0309.683zM12 23.52C5.6378 23.52.48 18.3622.48 12S5.6379.4803 12 .4803C18.3622.4803 23.5198 5.6378 23.5198 12c0 6.3622-5.1575 11.52-11.5198 11.52zM12 .0003C5.3727.0003 0 5.3728 0 12c0 6.6272 5.3727 11.9997 12 11.9997 6.6274 0 12-5.3725 12-11.9997C24 5.3728 18.6274.0003 12 .0003zm2.6675 2.643c.0793-.23.2747-.3568.5505-.3568.1153 0 .2378.023.364.0684.4398.1581.6498.4752.5349.8078-.0796.2313-.2755.3589-.5513.3589-.116 0-.2393-.0232-.3665-.0689-.4384-.1575-.6471-.4752-.5316-.8095zm.3924 1.2166c.195.0701.389.1057.5764.1057h.0001c.4753 0 .8395-.2332.9743-.624.0951-.276.052-.57-.1214-.828-.1655-.2464-.4383-.4475-.7682-.566-.1902-.0683-.3816-.103-.5682-.103-.4793 0-.8453.2316-.9795.6199-.1917.5552.181 1.1422.8865 1.3954zm3.0944.1594l-.1837 1.4554.023.0215 1.3938-.3266-.766 1.037.3757.3504 1.1621-1.5327-.4317-.4023-1.2158.2723.1485-1.2671-.452-.4215h-.0004l-.0554-.0512c-.0045.0915-.0427.184-.0945.234l-1.2044 1.1699.3777.3522zm3.6243 7.4815a.5396.5396 0 0 1-.0919.008c-.3011 0-.5317-.2627-.602-.6852-.0776-.4672.0937-.8074.437-.8671a.5656.5656 0 0 1 .0904-.0076c.2959 0 .5317.2678.6006.6827.078.4686-.0923.8099-.4341.8692zm.8493-.9418c-.1124-.6738-.5424-1.1443-1.0459-1.1443a.8997.8997 0 0 0-.1481.0128c-.568.0989-.8894.7165-.7643 1.4687.1143.6858.5346 1.1466 1.0457 1.1466a.883.883 0 0 0 .1512-.0132c.5663-.0983.8867-.7167.7614-1.4706zM12.4323 1.7271h.0001c.1613 0 .2707.1156.2722.288.0014.174-.104.2832-.2751.2846l-.9892.0087-.005-.5726zm-1.495 1.5232l.5109-.0045-.0045-.532.8572-.0077.3746.5292.5696-.005-.4303-.5697.053-.0254c.2187-.1048.3427-.3229.3402-.5984-.0037-.4345-.29-.7154-.7288-.7154l-1.5587.0134v.0006l-.09.0005c.0533.0645.0872.1498.0923.2213zm-3.3844.3238l-.7046.4047-.0227-.8766zm-1.1647-.4215l.0006.0034.0334 1.927.4472-.2571-.0108-.3882 1.0735-.6173.3217.209.4463-.2565-1.7995-1.1634-.64.3654a.2541.2541 0 0 1 .1276.1777zM3.748 5.5746L4.9572 6.735l.3507-.3805-.4455-.4277.744-.8074-.2887-.2772-.7443.8074-.344-.3301 1.0713-1.1627-.2887-.277-1.4859 1.6131c.0782.0052.1643.036.22.0802l.0018.0014Z" />
    </svg>
  </>
);

const airtable = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Airtable</title>
      <path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z" />
    </svg>
  </>
);

const accenture = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Accenture</title>
      <path d="M23.297 14.74L.434 24v-5.263L16.8 12.11l6.497 2.631zm.27-5.371L.433 0v5.263l23.132 9.368V9.37z" />
    </svg>
  </>
);

const adidas = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Adidas</title>
      <path d="M11.936 17.952c0-.644.517-1.16 1.162-1.16.644 0 1.16.516 1.16 1.16a1.157 1.157 0 01-1.16 1.161 1.157 1.157 0 01-1.162-1.16m4.724 0c0-.645.517-1.162 1.161-1.162s1.161.517 1.161 1.161-.517 1.161-1.16 1.161a1.157 1.157 0 01-1.162-1.16m-10.95 0c0-.645.517-1.162 1.161-1.162s1.16.517 1.16 1.161-.516 1.161-1.16 1.161a1.157 1.157 0 01-1.161-1.16m-4.724 0c0-.645.517-1.162 1.161-1.162s1.161.517 1.161 1.161a1.157 1.157 0 01-1.161 1.161 1.157 1.157 0 01-1.16-1.16m9.55-2.052h-1.01v4.063h1.01v-4.063zM3.3 19.964h1.01v-4.063H3.3v.326a2.087 2.087 0 00-1.2-.374c-1.162 0-2.1.938-2.1 2.1 0 1.168.938 2.099 2.1 2.099.445 0 .858-.135 1.2-.374v.286zm15.674 0h1.01v-4.063h-1.01v.326a2.087 2.087 0 00-1.2-.374c-1.162 0-2.1.938-2.1 2.1a2.092 2.092 0 002.1 2.099c.445 0 .858-.135 1.2-.374v.286zm1.384-1.32c.032.82.732 1.4 1.9 1.4.955 0 1.742-.414 1.742-1.328 0-.636-.358-1.01-1.185-1.17l-.644-.126c-.414-.08-.7-.16-.7-.406 0-.27.278-.39.628-.39.51 0 .716.255.732.557h1.018c-.056-.795-.692-1.328-1.718-1.328-1.057 0-1.686.58-1.686 1.336 0 .922.748 1.073 1.392 1.193l.533.095c.382.072.549.183.549.406 0 .199-.191.397-.645.397-.66 0-.874-.342-.882-.636h-1.034zM8.024 14.517v1.71a2.087 2.087 0 00-1.2-.374c-1.162 0-2.1.938-2.1 2.1 0 1.168.938 2.099 2.1 2.099.444 0 .858-.135 1.2-.374v.286h1.01v-5.447h-1.01zm6.226 0v1.71a2.087 2.087 0 00-1.2-.374c-1.161 0-2.1.938-2.1 2.1a2.092 2.092 0 002.1 2.099c.445 0 .858-.135 1.2-.374v.286h1.01v-5.447h-1.01zm-11.626-1.2l.684 1.2h4.716l-1.869-3.229-3.53 2.028zm7.913 2.21v-1.01h3.713l-3.96-6.855L6.751 9.69l2.776 4.827v1.01h1.01zm5.217-1.01h4.723L14.37 3.948l-3.531 2.036 4.915 8.533z" />
    </svg>
  </>
);

const threem = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>3M</title>
      <path d="M18.903 5.954L17.17 13.03l-1.739-7.076h-5.099v2.613C9.72 6.28 7.56 5.706 5.558 5.674 3.12 5.641.563 6.701.469 9.936h3.373c0-.977.747-1.536 1.588-1.523 1.032-.008 1.508.434 1.533 1.124-.036.597-.387 1.014-1.525 1.014H4.303V12.9h1.03c.584 0 1.399.319 1.431 1.155.04.995-.652 1.435-1.501 1.443-1.517-.053-1.763-1.225-1.763-2.23H0c.015.677-.151 5.091 5.337 5.059 2.629.025 4.464-1.085 5.003-2.613v2.342h3.455v-7.632l1.867 7.634h3.018l1.875-7.626v7.634H24V5.954h-5.097zm-8.561 7.06c-.429-.893-1.034-1.284-1.376-1.407.714-.319 1.09-.751 1.376-1.614v3.021z" />
    </svg>
  </>
);

const abbott = () => (
  <>
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Abbott</title>
      <path d="M20.812 2.4H0v3.197h19.773V5.6a1.03 1.03 0 0 1 1.032 1.031v10.742l-.004.007a1.034 1.034 0 0 1-1.034 1.025H4.23c-.569 0-1.033-.46-1.033-1.033v-4.34c0-.57.464-1.032 1.033-1.032H17.6V8.803H3.188A3.185 3.185 0 0 0 0 11.99v6.423A3.188 3.188 0 0 0 3.188 21.6h17.624A3.187 3.187 0 0 0 24 18.412V5.587A3.186 3.186 0 0 0 20.812 2.4" />
    </svg>
  </>
);

const logos = [Framer, aws, alfa, airtable, accenture, adidas, threem, abbott];
export default LogoHero;