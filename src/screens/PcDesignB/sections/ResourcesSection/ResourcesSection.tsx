import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ResourcesSection = (): JSX.Element => {
  // Data for the feature points
  const features = [
    {
      number: "01.",
      titleHighlight: "会場連動型",
      titleRegular: "の販売モデル",
      description: "ネット決済非対応イベントにも最適",
    },
    {
      number: "02.",
      titleHighlight: "柔軟＆高速",
      titleRegular: "なイベント・商品管理",
      description: "手書き注文書よりも正確で効率的な在庫・売り上げ管理が可能",
    },
    {
      number: "03.",
      titleHighlight: "スマホで完結",
      titleRegular: "するマイページ体験",
      description: "購入履歴・登録情報の確認・編集がスマホで完結",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 py-[30px] pb-[60px] relative w-full bg-[#eff0e6]">
      <h2 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px]">
        イベカゴが解決します
      </h2>

      <div className="flex w-full max-w-[1280px] items-center gap-[47px] relative">
        <Card className="relative w-[605px] h-[408px] bg-[#eff0e6] rounded-[0px_40px_40px_0px] overflow-hidden border-none">
          <CardContent className="p-0">
            <img
              className="w-full h-full object-cover object-bottom"
             alt="イベカゴのソリューション"
             src="/31144213_s 1.png"
            />
          </CardContent>
        </Card>

        <div className="relative w-[520px]">
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex w-full items-start gap-[13px]">
                <div className="relative w-fit mt-[-3.00px] ml-[-2.00px] [-webkit-text-stroke:2px_#232323] [font-family:'Avenir-Black',Helvetica] font-black text-white text-[32px] text-center tracking-[2.56px] leading-[48px] whitespace-nowrap">
                  {feature.number}
                </div>

                <div className="flex flex-col gap-[5px] flex-1">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-2xl tracking-[0] leading-[38.6px]">
                    <span className="text-[#d14500]">
                      {feature.titleHighlight}
                    </span>
                    <span className="text-[#232323]">
                      {feature.titleRegular}
                    </span>
                  </h3>

                  <p className="relative self-stretch [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-base tracking-[0] leading-[25.8px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-[304px] h-[274px] top-2 left-[918px] bg-[url(/----------2025-06-17-12-22-49-1-1-1.png)] bg-[100%_100%]" />

      <Button className="inline-flex items-center gap-[25px] px-[72px] py-[18px] bg-[#d14500] rounded-[100px] border-2 border-solid border-[#232323] shadow-[0px_4px_4px_#00000014] hover:bg-[#c13e00]">
        <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[13.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
          資料を請求する
        </span>
        <img
          className="w-[9.02px] h-[11.99px]"
          alt="矢印"
          src="/Polygon 19.png"
        />
      </Button>
    </section>
  );
};
