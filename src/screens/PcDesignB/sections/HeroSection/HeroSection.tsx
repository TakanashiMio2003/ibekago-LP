import React from "react";
import { Card } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Vector images data
  const vectorImages = [
    {
      className: "absolute w-[43px] h-16 top-[200px] left-[709px]",
      alt: "Vector",
      src: "/vector-78.png",
    },
    {
      className: "absolute w-[63px] h-[84px] top-12 left-[600px]",
      alt: "Vector",
      src: "/vector-77.png",
    },
    {
      className: "absolute w-[118px] h-11 top-[236px] left-[610px]",
      alt: "Vector",
      src: "/vector-76.png",
    },
    {
      className: "absolute w-[60px] h-[200px] top-[74px] left-[529px]",
      alt: "Vector",
      src: "/vector-75.png",
    },
    {
      className: "absolute w-[192px] h-[200px] top-[116px] left-[559px]",
      alt: "Vector",
      src: "/vector-71.png",
    },
  ];

  // White bars with rotation
  const whiteBars = [
    {
      className:
        "absolute w-[238px] h-[17px] top-[283px] left-[690px] bg-white rounded-[8.5px] rotate-[-25deg]",
    },
    {
      className:
        "absolute w-[238px] h-[17px] top-[261px] left-[824px] bg-white rounded-[8.5px] rotate-[-25deg]",
    },
    {
      className:
        "absolute w-[238px] h-[17px] top-[550px] left-[142px] bg-white rounded-[8.5px] rotate-[-25deg]",
    },
  ];

  return (
    <section className="relative w-full h-[562px] bg-[#fde93d] overflow-hidden">
      <div className="relative w-[1683px] h-[1071px] mx-auto top-[-251px] left-[-241px]">
        <div className="absolute w-[1683px] h-[1071px] top-0 left-0">
          <div className="absolute w-[1282px] h-[758px] top-[313px] left-[401px]">
            {/* Vector images */}
            {vectorImages.map((image, index) => (
              <img
                key={`vector-${index}`}
                className={image.className}
                alt={image.alt}
                src={image.src}
              />
            ))}

            {/* Logo element */}
            <div className="absolute w-[231px] h-[59px] top-[285px] left-[272px]">
              <img
                className="absolute w-[65px] h-[59px] top-0 left-0"
                alt="Element"
                src="/----------2025-06-17-12-22-49-1-1.png"
              />
              <img
                className="absolute w-[161px] h-11 top-3.5 left-[71px]"
                alt="Element"
                src="/----------2025-06-17-12-22-49-1-2-1.png"
              />
            </div>

            {/* Angled product image card */}
            <Card className="absolute w-[710px] h-[270px] top-[350px] left-[548px] bg-[#ededed] rotate-[-25.00deg] border-0 -z-10">
              <img
                className="w-[573px] h-[287px] top-[-155px] left-[60px] rotate-[25.00deg] absolute object-cover"
                alt="Element s"
                src="/31144213-s-1-3.png"
              />
            </Card>

            {/* Main headline section */}
            <div className="absolute w-[506px] h-[131px] top-[115px] left-0">
              <div className="relative w-[504px] h-[131px]">
                <h1 className="absolute top-0 left-0 font-['Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[56px] tracking-[0] leading-[90.2px]">
                  イベント会場の
                  <br />
                  もたつきをゼロに。
                </h1>
              </div>
            </div>

            {/* Group images */}
            <img
              className="absolute w-[252px] h-[322px] top-0 left-[754px]"
              alt="Group"
              src="/group-310.png"
            />

            <img
              className="absolute w-[290px] h-[340px] top-[30px] left-[521px]"
              alt="Group"
              src="/group-335.png"
            />
          </div>

          {/* Subheading text */}
          <div className="absolute top-[606px] left-[406px] font-['Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            イベント販売を効率化する
          </div>

          <div className="absolute top-[641px] left-[398px] font-['Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            「EC×現地決済」連携システム
          </div>

          {/* Left side angled product image */}
          <div className="absolute w-[921px] h-[546px] top-0 left-0">
            <Card className="absolute w-[770px] h-[243px] top-[151px] left-[15px] bg-[#ededed] overflow-hidden rotate-[-25.00deg] border-0">
              <img
                className="absolute w-[560px] h-[252px] top-[141px] left-[170px] rotate-[25.00deg] object-cover"
                alt="Image fx"
                src="/image-fx--3--1.png"
              />
            </Card>
          </div>
        </div>

        {/* White accent bars */}
        {whiteBars.map((bar, index) => (
          <div key={`bar-${index}`} className={bar.className} />
        ))}
      </div>
    </section>
  );
};
