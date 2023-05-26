import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.tsx";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <nav className="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]">
        <a aria-current="page"
         href="/"
         className="router-link-active router-link-exact-active flex items-center pt-4 pl-5 intro-x">
          {/*<img alt="Midone Tailwind HTML Admin Template" className="w-6" src="/assets/logo.9a88cec5.svg">*/}
            <span
              className="hidden ml-3 text-lg text-white xl:block">Map Kids
            </span>
        </a>
        <div className="w-full h-px bg-white/[0.08] z-10 relative dark:bg-white/[0.07] my-6" />
        <ul className="sidebar">
            <li className="active">
                <div className="item-menu">
                    <div className="icon-block">
                        <img src="../../images/backend/dashboard/home.svg" />
                    </div>
                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium dark:text-slate-300">
                        Dashboard
                        <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></div>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-menu cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:absolute after:top-0 after:right-0 after:-mr-5 md:flex">
                    <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full ">
                        <img src="../../images/backend/dashboard/icon1.svg" width={24} height={24} />
                    </div>
                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium text-white">
                        <Link href={`/locations`}>
                            Locations
                            <span className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></span>
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-menu cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:absolute after:top-0 after:right-0 after:-mr-5 md:flex">
                    <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full ">
                        <img src="../../images/backend/dashboard/icon1.svg" width={24} height={24} />
                    </div>
                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium text-white">
                        Images
                        <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></div>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-menu cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:absolute after:top-0 after:right-0 after:-mr-5 md:flex">
                    <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full ">
                        <img src="../../images/backend/dashboard/youtube.svg" width={24} height={24} />
                    </div>
                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium text-white">
                        Videos
                        <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></div>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-menu cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:absolute after:top-0 after:right-0 after:-mr-5 md:flex">
                    <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full ">
                        <img src="../../images/backend/dashboard/icon1.svg" width={24} height={24} />
                    </div>
                    <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium text-white">
                        Articles
                        <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></div>
                    </div>
                </div>
            </li>
            {/*<li>*/}
            {/*    <div className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:absolute before:top-0 before:right-0 before:-mr-5 after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:absolute after:top-0 after:right-0 after:-mr-5 md:flex">*/}
            {/*        <div className="text-primary before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full ">*/}
            {/*            <img src="../../images/backend/dashboard/youtube.svg" width={24} height={24} />*/}
            {/*        </div>*/}
            {/*        <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium text-white">*/}
            {/*            Videos*/}
            {/*            <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block"></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</li>*/}
        </ul>
    </nav>
  );
}
