import { FC } from "react";
import { type Metadata } from "next";
import "@/app/globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const Header = dynamic(() => import("@/components/header/index"),{ssr : true});

const YekanFont = localFont({
    src : [
        {
            path : "../public/fonts/BYekan+.ttf",
            style : "normal",
            weight : "400",
        },{
            path : "../public/fonts/BYekan+ Bold.ttf",
            style : "normal",
            weight : "700",
        },
    ],
    variable : "--yekan-font",
})


export const metadata : Metadata = {
    title : "Yadak-Sadra"
}

const Layout : FC<{children : React.ReactNode}> = ({ children }) => {
    return (
        <html>
            <body className={YekanFont.variable}>
                <Header />
                {children}
            </body>
        </html>
    )
};export default Layout;