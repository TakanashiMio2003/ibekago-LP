import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GallerySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 py-[60px] px-[142px] bg-[#eff0e6] w-full">
      <header className="flex flex-col items-center gap-2">
        <span className="relative w-fit [font-family:'Avenir-Heavy',Helvetica] font-normal text-[#d14500] text-base text-center tracking-[3.68px] leading-[25.8px]">
          VOICE
        </span>
        <h2 className="relative [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#232323] text-[32px] text-center tracking-[0] leading-[51.5px]">
          導入事例
        </h2>
      </header>

      <div className="flex items-center justify-between w-full max-w-[1000px] gap-[53px]">
        <Card className="flex-shrink-0 w-[421px] h-[493px] rounded-[24.51px] overflow-hidden border-none">
          <CardContent className="p-0 h-full">
            <img
              className="w-full h-full object-cover"
              alt="Fundom implementation case"
              src="/----------2025-07-08-11-26-03-1.png"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col items-start justify-center gap-10 w-[526px]">
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#d14500] text-2xl tracking-[0] leading-[38.6px]">
              株式会社ファンダム様にて
              <br />
              「イベカゴ」を導入いただきました
            </h3>
            <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#232323] text-base text-justify tracking-[0] leading-[25.8px]">
              イベントやファンマーケティングを軸に、熱量の高いファンと企業・クリエイターをつなぐ事業を展開する株式会社ファンダム（Fundom,
              inc）様にて、受注管理システム「イベカゴ」を導入いただきました。
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 w-full relative">
            <Card className="w-full h-[119px] rounded-2xl overflow-hidden border-none">
              <CardContent className="p-0 h-full flex">
                <div className="w-[93px] h-full bg-[#7e7e7e] rounded-[16px_0px_0px_16px] flex items-center justify-center">
                  <span className="text-lg leading-[29.0px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white tracking-[0]">
                    導入前
                  </span>
                </div>
                <div className="flex-1 flex items-center px-8">
                  <p className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#232323] text-lg text-justify tracking-[0] leading-[29.0px]">
                    イベントでの注文書の手書き対応や当日のレジ対応に多くの人的リソースが必要
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full h-[119px] rounded-2xl overflow-hidden border-none">
              <CardContent className="p-0 h-full flex">
                <div className="w-[93px] h-full bg-[#d14500] rounded-[16px_0px_0px_16px] flex items-center justify-center">
                  <span className="text-lg leading-[29.0px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-white tracking-[0]">
                    導入後
                  </span>
                </div>
                <div className="flex-1 flex items-center px-8">
                  <p className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#d14500] text-lg text-justify tracking-[0] leading-[29.0px]">
                    事前注文から現地購入確定までをスマホひとつで完結。現地の混雑緩和やスタッフ業務の効率化、ファンの購買体験の向上に成功
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};