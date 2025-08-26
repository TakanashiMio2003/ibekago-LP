import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Data for service flow steps
  const flowSteps = [
    {
      number: "01",
      title: "資料請求（無料）",
      description:
        "まずは、イベカゴの詳細資料をご請求ください。\n導入効果や機能一覧、実際の活用事例をご確認いただけます。",
    },
    {
      number: "02",
      title: "ヒアリング",
      description:
        "御社に最適な利用方法・プランをご提案いたします。\n御社が実施するイベントの規模・運用フローなどをお聞かせください。",
    },
    {
      number: "03",
      title: "ご契約",
      description:
        "ご納得いただけたら契約開始いたします。\n導入スケジュールも併せて共有いたします。",
    },
    {
      number: "04",
      title: "運用開始",
      description: "データ登録や操作説明を経て、すぐにご利用開始いただけます。",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 px-6 py-[60px] md:px-[199px] relative w-full bg-white">
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#d14500] text-base text-center tracking-[3.68px] leading-[25.8px]">
          FLOW
        </div>

        <h2 className="w-fit [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px]">
          ご利用開始までの流れ
        </h2>
      </div>

      <div className="flex flex-col w-full max-w-[900px] items-start gap-4 relative">
        {flowSteps.map((step, index) => (
          <div key={`step-${index}`} className="relative w-full">
            <Card className="bg-[#eff0e6] rounded-lg overflow-hidden border-none hidden md:block">
              <CardContent className="flex items-center gap-[41px] px-[38px] py-[27px]">
                <div className="flex flex-col items-center gap-2">
                  <div className="text-[#d14500] text-2xl leading-[38.6px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-center tracking-[0] whitespace-nowrap">
                    {step.number}
                  </div>
                  {index < 3 && (
                    <img
                      className="w-6 h-6"
                      alt="Group 30"
                      src="/Group-30.png"
                    />
                  )}
                </div>

                <div className="w-48 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-2xl tracking-[0] leading-[38.6px]">
                  {step.title}
                </div>

                <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#232323] text-base tracking-[0] leading-[25.8px]">
                  {step.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < step.description.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mobile layout with step box above description */}
            <div className="md:hidden mb-4">
              {/* Step number and title box */}
              <Card className="bg-[#d14500] rounded-lg overflow-hidden border-none mb-2">
                <CardContent className="px-4 py-2 flex items-center gap-3">
                  <div className="text-white text-lg leading-[29px] [font-family:'Avenir-Heavy',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                    {step.number}
                  </div>
                  <div className="text-white [font-family:'Noto_Sans_JP',Helvetica] font-bold text-base tracking-[0] leading-[25px]">
                    {step.title}
                  </div>
                </CardContent>
              </Card>
              
              {/* Description card */}
              <Card className="bg-[#eff0e6] rounded-lg overflow-hidden border-none">
                <CardContent className="px-4 py-3">
                  <div className="[font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#232323] text-sm tracking-[0] leading-[20px]">
                    {step.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < step.description.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {index < flowSteps.length - 1 && (
              <div className="absolute w-[18px] h-[25px] top-[93px] left-[43px] hidden md:block">
                <div className="relative w-[21px] h-7 -top-0.5 -left-0.5">
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-start">
        <Button className="flex items-center gap-[25px] pl-[72px] pr-[30px] py-[18px] bg-[#d14500] rounded-[100px] border-2 border-solid border-[#232323] shadow-[0px_4px_4px_#00000014]">
          <span className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[13.8px] tracking-[0] leading-[22.1px] whitespace-nowrap">
            資料を請求する
          </span>
          <img
            className="w-[9.02px] h-[11.99px]"
            alt="Polygon"
            src="/Polygon 19.png"
          />
        </Button>
      </div>
    </section>
  );
};
