import React from "react";
import IconBar from "../components/iconBar";
import bioString from "../contents/bio.md?raw";
import { parseMarkdown } from "../hooks/utils";
import "../styles/card.css";
import Markdown from "./Markdown";
export default function Info() {
    const meImg = React.useRef<HTMLImageElement>(null);
    return (
        <div className="flex flex-row container">
            <div className="grid grid-cols-5 auto-rows-auto justify-items-center px-5">
                <div className="col-span-5 flex md:flex-row md:pt-2 flex-col p-0 justify-center items-center">
                    <h1>{"楊竣凱"}</h1>
                    <h1>{"Yang, Chun-Kai"}</h1>
                </div>
                <div className="col-span-5 relative">
                    <IconBar />
                </div>
                <div className="flex flex-col justify-center content-center col-span-5 mb-5">
                    {parseMarkdown(bioString).map((line, index) => {
                        if (line === "") return <br key={`bio-text-${index}`} />;
                        return (
                            <Markdown className="text-justify" key={`info-text-${index}`}>
                                {line}
                            </Markdown>
                        );
                    })}
                </div>
            </div>
            <div>
                <img
                    ref={meImg}
                    className="rounded-card hidden md:block"
                    src="me-2024-crop.webp"
                    alt="me"
                />
                <p className="col-span-5 text-sm mt-5 hidden md:block">b10901027 [at] ntu.edu.tw</p>
            </div>
        </div>
    );
}
