import React from "react";

export const ContactSection = (): JSX.Element => {
  const footerContent = {
    companyName: "運営会社：TRUESTATE株式会社",
    address: "〒104-0031\n東京都中央区京橋2-2-1 京橋エドグラン サウス 3F",
    copyright: "TRUESTATE株式会社　All Rights Reseved.",
    logoSrc: "/LOGO1.png",
    logoAlt: "TRUESTATE Logo",
  };

  return (
    <footer className="w-full bg-[#232323] py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col space-y-4">
          <img
            className="h-[31px] w-auto"
            alt={footerContent.logoAlt}
            src={footerContent.logoSrc}
          />
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[10px] text-center md:text-left tracking-[0] leading-normal whitespace-nowrap">
            {footerContent.companyName}
          </p>
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-normal whitespace-pre-line">
            {footerContent.address}
          </p>
        </div>

        <div className="mt-4 md:mt-16">
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-white text-[10px] tracking-[0] leading-normal whitespace-nowrap">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
