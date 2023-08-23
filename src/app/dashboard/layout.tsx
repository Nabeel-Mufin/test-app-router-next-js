"use client";
import SideBar from "@/component/Sidebar/Sidebar";
import Link from "next/link";
import React, { useState } from "react";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div className="!min-h-screen flex flex-col w-full bg-[#CEDFF9]">
            <div className="gap-4 pr-6 pl-7 py-3 !bg-[#eff2f8]">
                <SideBar setCollapsed={setCollapsed} collapsed={collapsed}/>
                <Link href='/dashboard/child-route'>Some child route inside layout</Link>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}
