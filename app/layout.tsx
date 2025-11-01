import { FC } from "react";
import { type Metadata } from "next";
import "@/app/globals.css";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import ReactQueryProvider from "@/app/provider";
import { ToastContainer } from "react-toastify";

const Header = dynamic(() => import("@/components/header/index"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer/index"), { ssr: true })

const YekanFont = localFont({
    src: [
        {
            path: "../public/fonts/Yekan_Bakh_Fanum_Regular.ttf",
            style: "normal",
            weight: "500",
        }, {
            path: "../public/fonts/Yekan_Bakh_Fanum_Semi_Bold.ttf",
            style: "normal",
            weight: "800",
        }, {
            path: "../public/fonts/Yekan_Bakh_Fanum_Thin.ttf",
            style: "normal",
            weight: "300"
        }
    ],
    variable: "--yekan-font",
})


export const metadata: Metadata = {
    title: "Yadak-Sadra"
}

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html>
            <body className={YekanFont.variable + " [direction:rtl]"}>
                <ReactQueryProvider>
                    <Header />
                    {children}
                    <Footer />

                    <ToastContainer
                        draggable={true}
                        position="top-left"
                    />
                </ReactQueryProvider>
            </body>
        </html>
    )
}; export default Layout;