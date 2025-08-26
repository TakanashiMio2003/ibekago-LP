import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProcessSection = (): JSX.Element => {
  // Data for the concern bubbles
  const concernBubbles = [
    {
      id: 1,
      position: "top-0 left-[68px]",
      bubbleStyle: "w-[226px] h-[191px]",
      imageContainer: "w-56 h-[191px]",
      vectorMain: "/vector-6.svg",
      vectorMainStyle: "w-56 h-[172px] top-0 left-0",
      vectorDot: "/vector.png",
      vectorDotStyle: "w-6 h-6 top-40 left-[167px]",
      vectorTail: "/vector-23.svg",
      vectorTailStyle: "w-3 h-[13px] top-[178px] left-[194px]",
      textPosition: "top-[60px] left-[19px]",
      text: "スタッフが集まらず\nイベント開催が難しい",
    },
    {
      id: 2,
      position: "top-[142px] left-0",
      bubbleStyle: "w-[270px] h-[172px]",
      imageContainer: "w-[268px] h-[172px]",
      vectorMain: "/vector-31.svg",
      vectorMainStyle: "w-[227px] h-[175px] top-0 left-0",
      vectorDot: "/vector-32.svg",
      vectorDotStyle: "w-[27px] h-[27px] top-[120px] left-[223px]",
      vectorTail: "/vector-10.svg",
      vectorTailStyle: "w-[15px] h-4 top-[117px] left-[254px]",
      textPosition: "top-[47px] left-[31px]",
      text: "せっかくの\n売り上げチャンスを\n逃している",
    },
    {
      id: 3,
      position: "top-0 left-0",
      bubbleStyle: "w-[226px] h-[191px]",
      imageContainer: "w-56 h-[191px] rotate-180",
      vectorMain: "/vector-28.svg",
      vectorMainStyle: "w-[227px] h-[175px] top-3 left-0 -rotate-180",
      vectorDot: "/vector-14.svg",
      vectorDotStyle: "w-[27px] h-[27px] top-0 left-[167px] -rotate-180",
      vectorTail: "/vector-11.svg",
      vectorTailStyle: "w-[15px] h-4 top-0 left-[194px] -rotate-180",
      textPosition: "top-[60px] left-[34px]",
      text: "手書き注文書による\n注文ミスや読み違い",
    },
    {
      id: 4,
      position: "top-[142px] left-6",
      bubbleStyle: "w-[270px] h-[172px]",
      imageContainer: "w-[268px] h-[172px] rotate-180",
      vectorMain: "/vector-29.svg",
      vectorMainStyle: "w-56 h-[172px] top-0 left-0 -rotate-180",
      vectorDot: "/vector-16.svg",
      vectorDotStyle: "w-6 h-6 top-7 left-[223px] -rotate-180",
      vectorTail: "/vector-25.svg",
      vectorTailStyle: "w-3 h-[13px] top-10 left-64 -rotate-180",
      textPosition: "top-[47px] left-[84px]",
      text: "売り上げ集計に\n時間がかかる\nミスも起きやすい",
    },
  ];

  return (
    <Card className="flex flex-col items-center gap-3 px-[186px] py-[60px] bg-white border-none rounded-none">
      <CardContent className="p-0">
        <div className="relative w-full h-[92px] flex flex-col items-center justify-center">
          <div className="[font-family:'Avenir-Heavy',Helvetica] font-normal text-[#d14500] text-base text-center tracking-[3.68px] leading-[25.8px] whitespace-nowrap">
            ABOUT
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="[-webkit-text-stroke:2px_#232323] [font-family:'Avenir-Black',Helvetica] font-black text-[#eff0e6] text-[61.2px] text-center leading-[91.8px] whitespace-nowrap">
              <span className="tracking-[0]">Q</span>
              <span className="tracking-[0]">.</span>
            </div>
            <div className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px] whitespace-nowrap">
              こんなお悩みありせんか？
            </div>
          </div>
        </div>

        <div className="relative w-[907px] h-[314.46px]">
          {/* Left side bubbles */}
          <div className="absolute w-[294px] h-[314px] top-0 left-0">
            {concernBubbles.slice(0, 2).map((bubble) => (
              <div
                key={bubble.id}
                className={`absolute ${bubble.position} ${bubble.bubbleStyle}`}
              >
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full top-0 left-0">
                    <div className="relative h-full">
                      <div className="absolute w-full h-full top-0 left-0">
                        <img
                          className={`absolute ${bubble.vectorMainStyle}`}
                          alt="Vector"
                          src={bubble.vectorMain}
                        />
                        <img
                          className={`absolute ${bubble.vectorDotStyle}`}
                          alt="Vector"
                          src={bubble.vectorDot}
                        />
                      </div>
                      <img
                        className={`absolute ${bubble.vectorTailStyle}`}
                        alt="Vector"
                        src={bubble.vectorTail}
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute ${bubble.textPosition} [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-lg text-center tracking-[0] leading-[27px] whitespace-pre-line`}
                  >
                    {bubble.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side bubbles */}
          <div className="absolute w-[294px] h-[314px] top-0 left-[615px]">
            {concernBubbles.slice(2, 4).map((bubble) => (
              <div
                key={bubble.id}
                className={`absolute ${bubble.position} ${bubble.bubbleStyle}`}
              >
                <div className="relative w-full h-full">
                  <div
                    className={`absolute w-full h-full top-0 left-0 ${bubble.imageContainer.includes("rotate") ? bubble.imageContainer : ""}`}
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute w-full h-full top-0 left-0">
                        <img
                          className={`absolute ${bubble.vectorMainStyle}`}
                          alt="Vector"
                          src={bubble.vectorMain}
                        />
                        <img
                          className={`absolute ${bubble.vectorDotStyle}`}
                          alt="Vector"
                          src={bubble.vectorDot}
                        />
                      </div>
                      <img
                        className={`absolute ${bubble.vectorTailStyle}`}
                        alt="Vector"
                        src={bubble.vectorTail}
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute ${bubble.textPosition} [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-lg text-center tracking-[0] leading-[27px] whitespace-pre-line`}
                  >
                    {bubble.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          className="w-[326px] h-[209px] mx-auto -mt-[50px]"
          alt="Group"
          src="/group-314.png"
        />
      </CardContent>
    </Card>
  );
};
