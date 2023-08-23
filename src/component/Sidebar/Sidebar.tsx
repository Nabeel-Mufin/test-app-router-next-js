"use client";
import Image from "next/image";
import React from "react";
import DashboardBorder from "../../../../public/assets/icons/dashboard_border_line.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
interface subMenu {
  id: number;
  href: string;
  title: string;
  icon?: any;
  color?: string;
}
interface MenuItem {
  id: number;
  href: string;
  title: string;
  icon?: any;
  color?: string;
  bgColor?: string;
  submenu?: subMenu[];
}

const SideBar: React.FC<SideBarProps> = ({ setCollapsed, collapsed }) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      href: "/dashboard",
      title: "대시보드",
      color: "#005BE2",
      bgColor: "#cee2ff",
    },
    {
      id: 2,
      href: "/dashboard/member-information-list",
      title: "회원정보 관리",
      color: "#575757",
      submenu: [
        {
          id: 1,
          title: "회원정보 리스트",
          href: "/test-route/inner",
        },
        {
          id: 2,
          title: "회원정보 휴지통",
          href: "/dashboard/member-information-recycle-bin",
        },
      ],
    },
    {
      id: 3,
      href: "/dashboard/review-list",
      title: "사용후기 관리",
      color: "#575757",
      submenu: [
        {
          id: 1,
          title: "사용후기 리스트",
          href: "/dashboard/review-list",
        },
        {
          id: 2,
          title: "사용후기 휴지통",
          href: "/dashboard/review-list-recycle-bin",
        },
      ],
    },
    {
      id: 4,
      href: "/dashboard/admin-account-management",
      title: "설정",
      color: "#575757",
      submenu: [
        {
          id: 1,
          title: "관리자 계정 관리",
          href: "/dashboard/admin-account-management",
        },
      ],
    },
  ];

  const pathname = usePathname();

  const renderItem = (item: MenuItem, index: number) => {
    return (
      <div key={item.id}>
        <Link
          href={item?.href}
          style={{ backgroundColor: `${item.bgColor}` }}
          className={`flex items-center gap-2 py-2 rounded-lg w-full  ${
            collapsed ? "justify-center" : "px-4 justify-start"
          }`}
        >
          {
            <Image
              src={DashboardBorder}
              alt="DashboardBorder"
              width={4}
              height={40}
              className={`!absolute right-0 ${
                collapsed ? "top-[100px]" : "top-[130px]"
              }`}
            />
          }
          {/* {item?.icon && (
            <Image
              src={item?.icon}
              alt="icon"
              width={18}
              height={18}
              className="inline-block"
            />
          )} */}
          <span
            style={{ fontFamily: "Pretendard" }}
            className={`${
              collapsed && item.title === "대시보드" && "hidden"
            } text-[${item.color}] font-Pretendard ${
              item.title === "대시보드"
                ? "text-[16px] leading-6 font-semibold"
                : `text-[14px] ${
                    collapsed ? "leading-[0.25rem]" : "leading-5"
                  } font-medium`
            }`}
          >
            {item.title}
          </span>
        </Link>
        {item.submenu && item.submenu.length !== 0 && (
          <div className="submenu">{item.submenu.map(renderSubItem)}</div>
        )}
      </div>
    );
  };

  const renderSubItem = (sub: MenuItem, subIndex: number) => {
    const isActive = pathname === sub.href;

    return (
      <Link
        href={sub.href}
        key={sub.id}
        className={`flex items-center ${
          collapsed ? "justify-center" : "justify-start"
        } gap-2 py-2 ${isActive && `bg-[#e1e3e4]`} rounded-lg px-4`}
      >
        <span>
          {/* <Image
            src={sub?.icon}
            alt="icon"
            width={22}
            height={22}
            className="inline-block"
          /> */}
        </span>
        <span
          className={`${
            collapsed && "hidden"
          } font-Pretendard text-[16px] leading-6 font-medium text-[#999999]`}
        >
          {sub.title}
        </span>
      </Link>
    );
  };

  return (
    <div
      className={`flex flex-col items-center h-full justify-start gap-12 py-7 ${
        collapsed ? "px-3" : "px-4"
      } relative`}
    >
      {/* <Image
        className={`absolute cursor-pointer top-9 -right-4`}
        src={collapsed ? sidebar_open : sidebar_close}
        alt="sidebar close"
        width={40}
        height={40}
        // onClick={() => setCollapsed(!collapsed)}
      /> */}
      <Link href="/dashboard">
        {/* <Image
          src={logo}
          alt="logo"
          width={collapsed ? 52 : 105}
          height={collapsed ? 54 : 27}
        /> */}
      </Link>
      <div className={`flex flex-col gap-8 w-full `}>
        {menuItems.map(renderItem)}
      </div>
    </div>
  );
};

export default SideBar;
