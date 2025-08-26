import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "イベカゴとは" },
    { text: "使用イメージ" },
    { text: "ご利用の流れ" },
    { text: "導入例" },
    { text: "よくあるご質問" },
  ];

  return (
    <div className="w-full">
      <header className="flex items-center justify-between px-[70px] py-[21px] bg-white h-[68px]">
        <div className="relative w-[97.23px] h-[26.52px] bg-[url(/----------2025-06-17-12-22-49-1-2.png)] bg-[100%_100%]" />

        <NavigationMenu className="flex items-center gap-[35px]">
          <NavigationMenuList className="flex items-center gap-[35px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-['Noto_Sans_JP',Helvetica] font-normal text-[#232323] text-sm leading-[21px]">
                  {item.text}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <Button className="flex items-center justify-center gap-[6.6px] px-[20.43px] py-[3.72px] bg-[#d14500] rounded-[30.65px] border-2 border-solid border-white shadow-[0px_4px_4px_-1px_#0c0c0d0d,0px_4px_4px_-1px_#0c0c0d1a] h-[42px] w-[156.04px]">
              <MailIcon className="w-[14.86px] h-[14.86px]" />
              <span className="font-['Noto_Sans_JP',Helvetica] font-bold text-white text-sm leading-[21px]">
                資料請求
              </span>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
    </div>
  );
};
