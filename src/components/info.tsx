import React, { useLayoutEffect } from "react";
import "../styles/card.css";
export default function Info() {
    const [isDark, setIsDark] = React.useState(false);
    const meImg = React.useRef<HTMLImageElement>(null);
    useLayoutEffect(() => {
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDark(dark.matches);
        dark.addEventListener("change", (e) => {
            setIsDark(e.matches);
        });
    }, []);
    return (
        <div className="flex flex-row gap-5">
            <div className="card-container">
                <img
                    ref={meImg}
                    className="rounded-card"
                    src="me-2024-crop.webp"
                    alt="me"
                    onClick={() => {
                        meImg.current?.classList.toggle("shake");
                        setTimeout(() => meImg.current?.classList.toggle("shake"), 550);
                    }}
                />
            </div>
            <div className="grid grid-cols-5 auto-rows-auto justify-items-center">
                <h1 className="col-span-5 ">{"楊竣凱"}</h1>
                <h1 className="col-span-5 ">{"Yang, Chun-Kai"}</h1>
                <p className="col-span-5">Electrical Engineering, National Taiwan University</p>
                <p className="col-span-5">
                    Email: <a href="mailto:b10901027@ntu.edu.tw">b10901027@ntu.edu.tw</a>{" "}
                </p>
                <div className="col-span-2"></div>
                <a href="https://github.com/YCK1130" target="_blank">
                    <img
                        className="logo size-9 github"
                        src={`github-mark${isDark ? "-white" : ""}.svg`}
                        alt="github"
                    />
                </a>
            </div>
        </div>
    );
}
