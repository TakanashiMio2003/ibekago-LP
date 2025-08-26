import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Define the testimonial cards data for easier mapping
  const testimonialCards = [
    {
      id: 1,
      position: "top-0 left-[35px]",
      imageUrl:
        "/firefly---------------------------------------------------------.png",
      imageAlt: "Firefly",
      title: "アニメグッズなどの即売会や\nポップアップストア",
      bubblePosition: "top-[61px] left-0",
      bubbleWidth: "w-[252px]",
      bubbleHeight: "h-[85px]",
      bubbleBg: "bg-[url(/union-1.svg)]",
      bubbleText: "配送先住所も事前に入力するから\nまとめ買いに躊躇なし！",
    },
    {
      id: 2,
      position: "top-0 left-0",
      imageUrl: "/firefly---------------278006-1.png",
      imageAlt: "Firefly",
      title: "アーティストのライブでの\nグッズ販売",
      bubblePosition: "top-20 left-[175px]",
      bubbleWidth: "w-[218px]",
      bubbleHeight: "h-[50px]",
      bubbleBg: "bg-[url(/union-4.svg)]",
      bubbleText: "少人数のスタッフで対応できる",
    },
    {
      id: 3,
      position: "top-0 left-[35px]",
      imageUrl: "/22877436-m-1.png",
      imageAlt: "Element m",
      title: "地方自治体のイベントや\n物産展",
      bubblePosition: "top-[26px] left-0",
      bubbleWidth: "w-[242px]",
      bubbleHeight: "h-[50px]",
      bubbleBg: "bg-[url(/union-3.svg)]",
      bubbleText: "紙の管理の廃止で正確に注文管理",
    },
    {
      id: 4,
      position: "top-[350px] left-0",
      imageUrl: "/31975303-m-1.png",
      imageAlt: "Element m",
      title: "企業展示会ブースでの\n商品販売",
      bubblePosition: "top-[318px] left-[186px]",
      bubbleWidth: "w-[206px]",
      bubbleHeight: "h-[85px]",
      bubbleBg: "bg-[url(/union-2.svg)]",
      bubbleText: "注文履歴を活用した\nマーケティングもできる！",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-[171px] py-[60px] relative self-stretch w-full flex-[0_0_auto] bg-[#fde93d]">
      <header className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#d14500] text-base text-center tracking-[3.68px] leading-[25.8px] whitespace-nowrap">
          MERIT
        </h3>

        <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px] whitespace-nowrap">
          イベカゴでイベント販売を効率化
        </h2>
      </header>

      <div className="relative w-[810px] h-[674.06px]">
        {/* First row */}
        <div className="absolute w-[391px] h-[324px] top-0 left-0">
          <div className="flex flex-col w-[356px] h-[324px] items-center gap-2 absolute top-0 left-[35px]">
            <Card className="relative self-stretch w-full h-[223.59px] rounded-[20.25px] overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-[356px] h-[277px]">
                  <img
                    className="absolute w-[356px] h-56 top-0 left-0 object-cover"
                    alt={testimonialCards[0].imageAlt}
                    src={testimonialCards[0].imageUrl}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-xl text-center tracking-[0] leading-[32.2px]">
              {testimonialCards[0].title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < testimonialCards[0].title.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            className={`absolute ${testimonialCards[0].bubbleWidth} ${testimonialCards[0].bubbleHeight} ${testimonialCards[0].bubblePosition}`}
          >
            <div
              className={`relative w-[255px] h-[90px] top-[-3px] left-[-3px] ${testimonialCards[0].bubbleBg} bg-[100%_100%]`}
            >
              <div className="absolute top-4 left-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-sm text-center tracking-[0] leading-[22.5px]">
                {testimonialCards[0].bubbleText.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i <
                      testimonialCards[0].bubbleText.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="absolute w-[391px] h-[324px] top-[350px] left-0">
          <div className="flex flex-col w-[356px] h-[324px] items-center gap-2 absolute top-0 left-[35px]">
            <Card className="relative self-stretch w-full h-[223.59px] rounded-[20.25px] overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-[356px] h-56 bg-[url(/firefly-------------------------tsyatuwo--610585-1.png)] bg-cover bg-[50%_50%]">
                  <img
                    className="absolute w-[356px] h-56 top-0 left-0 object-cover"
                    alt={testimonialCards[2].imageAlt}
                    src={testimonialCards[2].imageUrl}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-xl text-center tracking-[0] leading-[32.2px]">
              {testimonialCards[2].title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < testimonialCards[2].title.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            className={`absolute ${testimonialCards[2].bubbleWidth} ${testimonialCards[2].bubbleHeight} ${testimonialCards[2].bubblePosition}`}
          >
            <div
              className={`relative w-[245px] h-[55px] top-[-3px] left-[-3px] ${testimonialCards[2].bubbleBg} bg-[100%_100%]`}
            >
              <div className="absolute top-[9px] left-[17px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-sm text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {testimonialCards[2].bubbleText}
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="absolute w-[393px] h-[674px] top-0 left-[419px]">
          <div className="flex flex-col w-[356px] h-[324px] items-center gap-2 absolute top-0 left-0">
            <Card className="relative self-stretch w-full h-[223.59px] rounded-[20.25px] overflow-hidden">
              <CardContent className="p-0">
                <img
                  className="absolute w-[356px] h-56 top-0 left-0 object-cover"
                  alt={testimonialCards[1].imageAlt}
                  src={testimonialCards[1].imageUrl}
                />
              </CardContent>
            </Card>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-xl text-center tracking-[0] leading-[32.2px]">
              {testimonialCards[1].title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < testimonialCards[1].title.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            className={`absolute ${testimonialCards[1].bubbleWidth} ${testimonialCards[1].bubbleHeight} ${testimonialCards[1].bubblePosition}`}
          >
            <div
              className={`relative w-[221px] h-[55px] top-[-3px] left-[-3px] ${testimonialCards[1].bubbleBg} bg-[100%_100%]`}
            >
              <div className="absolute top-2.5 left-[13px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-sm text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                {testimonialCards[1].bubbleText}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[356px] h-[324px] items-center gap-2 absolute top-[350px] left-0">
            <Card className="relative self-stretch w-full h-[223.59px] rounded-[20.25px] overflow-hidden">
              <CardContent className="p-0">
                <img
                  className="absolute w-[356px] h-56 top-0 left-0 object-cover"
                  alt={testimonialCards[3].imageAlt}
                  src={testimonialCards[3].imageUrl}
                />
              </CardContent>
            </Card>

            <div className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-xl text-center tracking-[0] leading-[32.2px]">
              {testimonialCards[3].title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < testimonialCards[3].title.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div
            className={`absolute ${testimonialCards[3].bubbleWidth} ${testimonialCards[3].bubbleHeight} ${testimonialCards[3].bubblePosition}`}
          >
            <div
              className={`relative w-[209px] h-[90px] top-[-3px] left-[-3px] ${testimonialCards[3].bubbleBg} bg-[100%_100%]`}
            >
              <div className="absolute top-[17px] left-[23px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-sm text-center tracking-[0] leading-[22.5px]">
                {testimonialCards[3].bubbleText.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i <
                      testimonialCards[3].bubbleText.split("\n").length - 1 && (
                      <br />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
