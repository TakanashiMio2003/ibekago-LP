import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for mapping
  const featureCards = [
    {
      userType: "イベント主催者",
      title: ["もう、", "紙には戻れない"],
      imageSrc: "/32734147_s 1.png",
      imageAlt: "Element s",
      benefits: [
        "イベントごとに受注一元管理",
        "パスワード制限による限定販売",
        "注文履歴を活用したマーケティング",
        "従来の手書きの注文書よりも注文管理が正確に",
      ],
    },
    {
      userType: "会場スタッフ",
      title: ["読みとるだけで", "迷わない"],
      imageSrc: "/Image_fx 1.png",
      imageAlt: "Image fx",
      benefits: [
        "QRコード読み取りのみで運用",
        "レジ混雑・人的ミスを軽減",
        "紙ベース管理からの脱却",
        "スタッフのレジ業務が劇的にスピードアップ",
      ],
    },
    {
      userType: "来場者",
      title: ["スマホが注文書", "だからスムーズ"],
      imageSrc: "/32707904_s 1.png",
      imageAlt: "Element s",
      benefits: [
        "スマホ1つで簡単注文",
        "履歴の確認や再購入がスムーズ",
        "配送先登録など個人情報も来場前に入力できる",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-[171px] py-[60px] bg-[#fde93d]">
      <header className="flex flex-col items-center gap-2">
        <span className="relative w-fit mt-[-1.00px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#d14500] text-base text-center tracking-[3.68px] leading-[25.8px]">
          SERVICE
        </span>

        <h2 className="relative w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px]">
          イベカゴを使うと…
        </h2>
      </header>

      <div className="flex items-center gap-[22px]">
        {featureCards.map((card, index) => (
          <div key={index} className="relative w-[298px] h-[505px]">
            <div className="relative h-[505px]">
              <Card className="flex flex-col w-[298px] h-[488px] items-center gap-4 px-[19px] py-[30px] absolute top-[17px] left-0 bg-white rounded-3xl overflow-hidden border-[3px] border-solid border-[#232323]">
                <CardContent className="p-0">
                  <div className="relative w-64 h-[85px]">
                    <div className="absolute top-1 left-[42px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-2xl text-center tracking-[0] leading-[38.6px]">
                      {card.title[0]}
                      <br />
                      {card.title[1]}
                    </div>

                    <img
                      className="absolute w-[34px] h-[34px] -top-0.5 -left-0.5"
                      alt="Rectangle"
                      src={
                        index === 0
                          ? "/Rectangle 1797ーー1.png"
                          : "/Rectangle 1797ーー1.png"
                      }
                    />

                    <img
                      className="absolute w-[34px] h-[34px] top-[52px] left-[221px]"
                      alt="Rectangle"
                      src={
                        index === 0
                          ? "/Rectangle 1798ーー1.png"
                          : "/Rectangle 1798ーー1.png"
                      }
                    />
                  </div>

                  <div className="relative self-stretch w-full h-[137px] bg-[#eff0e6] rounded-lg overflow-hidden mt-4">
                    {card.backgroundImageSrc ? (
                      <div className="relative w-[260px] h-[137px]">
                        <img
                          className="absolute w-[259px] h-[137px] top-0 left-0 object-cover"
                          alt="Background image"
                          src={card.backgroundImageSrc}
                        />
                        <img
                          className="absolute w-[260px] h-[137px] top-0 left-0 object-cover"
                          alt={card.imageAlt}
                          src={card.imageSrc}
                        />
                      </div>
                    ) : (
                      <img
                        className="absolute w-[260px] h-[137px] top-0 left-0 object-cover"
                        alt={card.imageAlt}
                        src={card.imageSrc}
                      />
                    )}
                  </div>

                  <div className="relative w-[260px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-base tracking-[0] leading-[28.8px] mt-4">
                    {card.benefits.map((benefit, i) => (
                      <React.Fragment key={i}>
                        {benefit}
                        {i < card.benefits.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Badge className="flex w-36 items-center justify-center gap-2.5 px-4 py-1 absolute top-0 left-[77px] bg-[#fde93d] rounded-[30px] border-[3px] border-solid border-[#232323] hover:bg-[#fde93d]">
                <span className="relative w-fit mt-[-3.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-base text-center tracking-[0] leading-[25.8px]">
                  {card.userType}
                </span>
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
