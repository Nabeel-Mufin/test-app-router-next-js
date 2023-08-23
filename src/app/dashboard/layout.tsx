"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="!min-h-screen w-full bg-[#CEDFF9]">
            <div className="gap-4 pr-6 pl-7 py-3 !bg-[#eff2f8]">
                <p>I am layout</p>
                <Link href='child-route'>Some child route inside layout</Link>
            </div>
        </div>
    );
}
