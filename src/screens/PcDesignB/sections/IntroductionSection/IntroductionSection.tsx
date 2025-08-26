import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const IntroductionSection = (): JSX.Element => {
  // Data for visitor flow steps
  const visitorSteps = [
    {
      number: "1",
      image: "/group-334.png",
      title: "事前会員登録",
      description: "",
      alt: "Registration icon",
    },
    {
      number: "2",
      image: "/group.png",
      title: "商品を選択・注文",
      description: "カートに追加し注文画面へ",
      alt: "Product selection icon",
    },
    {
      number: "3",
      image: "/group-1.png",
      title: "会場で商品をピック",
      description: "注文した商品をレジへ",
      alt: "Product pickup icon",
    },
    {
      number: "4",
      image: null, // This step uses SVG vectors instead of a single image
      title: "コード提示・決済",
      description: "②で発行されたコードを提示",
      alt: "Payment icon",
    },
  ];

  // Data for staff flow steps
  const staffSteps = [
    {
      number: "1",
      hasCustomIcon: true,
      title: "コードスキャン",
      description: "注文商品とお客様がピックした商品が同じか確認",
      alt: "Code scanning icon",
    },
    {
      number: "2",
      hasCustomIcon: true,
      title: "決済処理",
      description: "イベント会場に応じた決済処理",
      alt: "Payment processing icon",
    },
    {
      number: "3",
      image: "/group-3.png",
      title: "QRコードスキャン",
      description: "購入確定のためのQRコードスキャン",
      alt: "QR code scanning icon",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 py-[60px] px-[142px] bg-[#eff0e6] w-full">
      {/* Title Section */}
      <div className="relative w-[482px] h-[101px]">
        <h2 className="absolute top-[49px] left-0 [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px] whitespace-nowrap w-full">
          イベカゴを使った商品購入の流れ
        </h2>

        <div className="absolute w-[352px] h-8 top-0 left-16">
          <div className="relative w-[350px] h-8">
            <p className="absolute top-px left-[31px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#d14500] text-base text-center tracking-[0] leading-[25.8px] whitespace-nowrap">
              来場者もスタッフも負担がぐんと減る！
            </p>

            <div className="absolute w-[350px] h-8 top-0 left-0">
              <img
                className="absolute w-[19px] h-[33px] top-0 -left-px"
                alt="Left bracket"
                src="/Vector-72.png"
              />

              <img
                className="absolute w-[19px] h-[33px] top-0 left-[332px]"
                alt="Right bracket"
                src="/vector-73.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Flow Charts Container */}
      <div className="flex flex-col items-start gap-4 w-full max-w-[900px]">
        {/* Visitor Flow Chart */}
        <div className="relative w-full h-[357.22px]">
          <div className="relative h-[362px] -top-1 w-full">
            <Card className="absolute top-[90px] left-0 w-full rounded-3xl overflow-visible">
              <CardContent className="flex flex-col items-start gap-3 pt-12 pb-8 px-8">
                {/* Steps Row */}
                <div className="flex w-full items-center">
                  {visitorSteps.map((step, index) => (
                    <React.Fragment key={`visitor-step-${index}`}>
                      <div className="flex flex-col w-[140.31px] items-center gap-[8.4px]">
                        <div className="relative self-stretch w-full h-[140.31px] bg-[#f3f3f3] rounded-[6.72px] overflow-hidden">
                          <div className="absolute w-[21px] h-[52px] top-2 left-[15px]">
                            <div className="absolute top-0 left-0 text-black text-[32px] leading-[51.5px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-center tracking-[0] whitespace-nowrap">
                              {step.number}
                            </div>
                          </div>

                          {step.image && (
                            <img
                              className="absolute w-12 h-[63px] top-11 left-[46px]"
                              alt={step.alt}
                              src={step.image}
                            />
                          )}

                          {index === 3 && (
                            <div className="absolute w-[79px] h-[62px] top-[37px] left-[42px]">
                              <div className="absolute w-[59px] h-10 top-[23px] left-0">
                                <img
                                  className="absolute w-[9px] h-[43px] -top-px -left-px"
                                  alt="Vector"
                                  src="/vector-13.svg"
                                />
                                <img
                                  className="absolute w-2 h-[43px] -top-px left-2.5"
                                  alt="Vector"
                                  src="/vector-19.svg"
                                />
                                <img
                                  className="absolute w-2 h-[43px] -top-px left-5"
                                  alt="Vector"
                                  src="/vector-19.svg"
                                />
                                <img
                                  className="absolute w-[9px] h-[43px] -top-px left-[29px]"
                                  alt="Vector"
                                  src="/vector-12.svg"
                                />
                                <img
                                  className="absolute w-[9px] h-[43px] -top-px left-[46px]"
                                  alt="Vector"
                                  src="/vector-13.svg"
                                />
                                <img
                                  className="absolute w-[3px] h-[42px] -top-px left-[41px]"
                                  alt="Vector"
                                  src="/vector-4.svg"
                                />
                                <img
                                  className="absolute w-[3px] h-[42px] -top-px left-[58px]"
                                  alt="Vector"
                                  src="/vector-4.svg"
                                />
                              </div>
                              <div className="absolute w-8 h-8 top-0 left-[47px]">
                                <div className="relative w-[34px] h-[34px] -top-px -left-px bg-[url(/vector-22.svg)] bg-[100%_100%]">
                                  <img
                                    className="absolute w-[21px] h-[21px] top-1.5 left-1.5"
                                    alt="Vector"
                                    src="/vector-21.svg"
                                  />
                                  <img
                                    className="absolute w-2.5 h-[13px] top-[11px] left-3"
                                    alt="Vector"
                                    src="/vector-30.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {index < visitorSteps.length - 1 && (
                        <div className="w-[34.45px] h-px bg-black mx-0" />
                      )}
                    </React.Fragment>
                  ))}

                  {/* Connecting line to completion */}
                  <div className="w-[34.45px] h-px bg-black mx-0" />

                  {/* Completion Step */}
                  <div className="flex flex-col w-[140.31px] items-center gap-[8.4px]">
                    <div className="relative self-stretch w-full h-[58.81px] bg-[#fde93d] rounded-[6.72px] overflow-hidden">
                      <div className="absolute top-3.5 left-[29px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#232323] text-[20.2px] text-center tracking-[0] leading-[32.5px] whitespace-nowrap">
                        購入完了
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Descriptions */}
                <div className="flex items-center gap-[33.61px] relative self-stretch w-full">
                  {visitorSteps.map((step, index) => (
                    <div
                      key={`visitor-desc-${index}`}
                      className="relative w-[140.31px] mt-[-0.84px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-transparent text-base text-center tracking-[0] leading-[25.8px]"
                    >
                      <span className="text-[#d14500]">
                        {step.title}
                        <br />
                      </span>
                      {step.description && (
                        <span className="text-[#232323] text-[10.1px] leading-[16.2px]">
                          {step.description}
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="relative w-[140.31px]"></div>
                </div>
              </CardContent>
            </Card>

            {/* Visitor Icon and Label */}
            <div className="absolute w-[218px] h-[105px] top-0 left-[341px]">
              <div className="relative w-[220px] h-[105px]">
                <div className="absolute w-[220px] h-[31px] top-[74px] left-0">
                  <div className="relative w-[221px] h-[34px] -top-0.5 -left-0.5 bg-[url(/union-5.svg)] bg-[100%_100%]">
                    <div className="absolute top-1 left-[66px] [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#232323] text-[15.1px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                      来場者の場合
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-[60px] h-[75px] top-0 left-[79px]"
                  alt="Visitor icon"
                  src="/group-2.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Staff Flow Chart */}
        <div className="relative w-full h-[384.42px]">
          <div className="relative h-96 w-full">
            <Card className="absolute top-[92px] left-0 w-full rounded-3xl overflow-visible">
              <CardContent className="flex flex-col items-start gap-3 pt-12 pb-8 px-8">
                {/* Steps Row */}
                <div className="flex items-center justify-center relative self-stretch w-full">
                  {staffSteps.map((step, index) => (
                    <React.Fragment key={`staff-step-${index}`}>
                      <div className="flex flex-col w-[140.31px] items-center gap-[8.4px]">
                        <div className="relative self-stretch w-full h-[140.31px] bg-[#f3f3f3] rounded-[6.72px] overflow-hidden">
                          <div className="absolute w-[21px] h-[52px] top-2 left-[15px]">
                            <div className="absolute top-0 left-0 text-black text-[32px] leading-[51.5px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-center tracking-[0] whitespace-nowrap">
                              {step.number}
                            </div>
                          </div>

                          {index === 0 && (
                            <>
                              <div className="absolute w-[42px] h-7 top-[53px] left-[28px]">
                                <img
                                  className="absolute w-[7px] h-[30px] -top-px -left-px"
                                  alt="Vector"
                                  src="/vector-2.svg"
                                />
                                <img
                                  className="absolute w-[5px] h-[30px] -top-px left-[7px]"
                                  alt="Vector"
                                  src="/vector-7.svg"
                                />
                                <img
                                  className="absolute w-[5px] h-[30px] -top-px left-3.5"
                                  alt="Vector"
                                  src="/vector-7.svg"
                                />
                                <img
                                  className="absolute w-1.5 h-[30px] -top-px left-[21px]"
                                  alt="Vector"
                                  src="/vector-2.svg"
                                />
                                <img
                                  className="absolute w-1.5 h-[30px] -top-px left-[33px]"
                                  alt="Vector"
                                  src="/vector-1.svg"
                                />
                                <img
                                  className="absolute w-0.5 h-[29px] -top-px left-[29px]"
                                  alt="Vector"
                                  src="/vector-3.svg"
                                />
                                <img
                                  className="absolute w-0.5 h-[29px] -top-px left-[41px]"
                                  alt="Vector"
                                  src="/vector-3.svg"
                                />
                              </div>
                              <img
                                className="absolute w-10 h-[63px] top-[45px] left-[78px]"
                                alt="Vector"
                                src="/vector-27.svg"
                              />
                            </>
                          )}

                          {index === 1 && (
                            <div className="absolute w-[50px] h-[50px] top-[50px] left-[45px]">
                              <div className="relative w-[53px] h-[53px] -top-px -left-px bg-[url(/vector-15.svg)] bg-[100%_100%]">
                                <img
                                  className="absolute w-[33px] h-[33px] top-2.5 left-2.5"
                                  alt="Vector"
                                  src="/vector-21.svg"
                                />
                                <img
                                  className="absolute w-4 h-[21px] top-[18px] left-[19px]"
                                  alt="Vector"
                                  src="/vector-5.svg"
                                />
                              </div>
                            </div>
                          )}

                          {step.image && (
                            <img
                              className="absolute w-[57px] h-[79px] top-[39px] left-[46px]"
                              alt={step.alt}
                              src={step.image}
                            />
                          )}
                        </div>
                      </div>

                      {index < staffSteps.length - 1 && (
                        <div className="w-[34.45px] h-px bg-black mx-0" />
                      )}
                    </React.Fragment>
                  ))}

                  {/* Connecting line to completion */}
                  <div className="w-[34.45px] h-px bg-black mx-0" />

                  {/* Completion Step */}
                  <div className="flex flex-col w-[140.31px] items-center gap-[8.4px]">
                    <div className="relative self-stretch w-full h-[58.81px] bg-[#fde93d] rounded-[6.72px] overflow-hidden">
                      <div className="absolute top-3.5 left-[29px] [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#232323] text-[20.2px] text-center tracking-[0] leading-[32.5px] whitespace-nowrap">
                        購入確定
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Descriptions */}
                <div className="flex items-center justify-center gap-[33.61px] relative self-stretch w-full">
                  {staffSteps.map((step, index) => (
                    <div
                      key={`staff-desc-${index}`}
                      className="relative w-[140.31px] mt-[-0.84px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-4"
                    >
                      <span className="font-bold text-[#d14500] leading-[0.1px]">
                        {step.title}
                        <br />
                      </span>
                      <span className="font-bold text-[#232323] text-[10.1px] leading-[20.2px]">
                        {step.description.includes("商品が同じか確認")
                          ? step.description.split("商品が同じか確認")[0]
                          : step.description}
                        {step.description.includes("商品が同じか確認") && (
                          <br />
                        )}
                      </span>
                      {step.description.includes("商品が同じか確認") && (
                        <span className="font-bold text-[#232323] text-[10.1px] leading-[0.1px]">
                          商品が同じか確認
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="relative w-[140.31px] [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#232323] text-[15.1px] text-center tracking-[0] leading-[24.3px]">
                    {""}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staff Icon and Label */}
            <div className="absolute w-[218px] h-[108px] top-0 left-[341px]">
              <div className="relative w-[220px] h-[108px]">
                <div className="absolute w-[220px] h-[31px] top-[77px] left-0">
                  <div className="relative w-[221px] h-[34px] -top-0.5 -left-0.5 bg-[url(/union.svg)] bg-[100%_100%]">
                    <div className="absolute top-1 left-7 [font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#232323] text-[15.1px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                      イベントスタッフの場合
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-[57px] h-[78px] top-0 left-20"
                  alt="Staff icon"
                  src="/group-4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};