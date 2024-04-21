import React, { useState, useEffect } from "react";

export default function Navbar(){

    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".nav-scroll");
            const fixedNav = header.offsetTop;
            if (window.pageYOffset > fixedNav) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<>
        <nav className="fixed top-0 left-0 right-0 flex justify-center pt-5 gap-5 text-[1.3rem] font-bold">
            <div className={`${navScroll ? "navbar-fixed" : "navbar-unfixed"} nav-scroll  flex justify-center  gap-5`}>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">Home</span><span className="qmark">¿</span></a>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">Skills</span><span className="qmark">¿</span></a>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">Projects</span><span className="qmark">¿</span></a>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">About Me</span><span className="qmark">¿</span></a>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">Contact</span><span className="qmark">¿</span></a>
                <a href="yt.com" className="group"><span className="qmark">?</span><span className="px-1">Home</span><span className="qmark">¿</span></a>
            </div>
        </nav>
    </>)
}