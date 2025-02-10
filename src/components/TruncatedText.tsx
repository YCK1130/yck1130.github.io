import { memo, ReactNode, useCallback, useLayoutEffect, useRef, useState } from "react";

interface TruncatedTextProps {
    text: string;
    className?: string;
    font?: string;
    onTruncate?: (result: { limit: number; truncated: boolean; length: number }) => void;
    margin?: number;
    controlLimit?: number;
}

const TruncatedText = memo(
    ({
        text,
        className = "",
        font,
        onTruncate,
        margin = 5,
        controlLimit = 0,
    }: TruncatedTextProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
        const [limit, setLimit] = useState(text.length);

        function truncateText(text: string, charLimit: number): ReactNode {
            if (text.length <= charLimit) {
                return text;
            }
            let truncated = text.slice(0, charLimit);
            if (text[charLimit] !== " " && /\S/.test(text[charLimit])) {
                const lastSpace = truncated.lastIndexOf(" ");
                if (lastSpace > 0) {
                    truncated = text.slice(0, lastSpace);
                }
            }
            return (
                <>
                    {truncated}
                    <span className="ellipsis">...</span>
                </>
            );
        }
        const recalcTruncation = useCallback(() => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.getBoundingClientRect().width;
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (context) {
                    const computedStyle = window.getComputedStyle(containerRef.current);
                    const usedFont = font || computedStyle.font || "16px sans-serif";
                    context.font = usedFont;
                    let width = 0;
                    let count = 0;
                    while (count < text.length && width < containerWidth - margin) {
                        width += context.measureText(text[count]).width;
                        count++;
                    }
                    if (controlLimit != 0 && controlLimit < count) {
                        count = controlLimit;
                    } else {
                        count = count < text.length ? count - 10 : count;
                    }
                    setLimit(count);
                    if (onTruncate) {
                        onTruncate({
                            limit: count,
                            truncated: count < text.length,
                            length: text.length,
                        });
                    }
                }
            }
        }, [text, font, margin, controlLimit, onTruncate]);

        useLayoutEffect(() => {
            recalcTruncation();
            window.addEventListener("resize", recalcTruncation);
            return () => {
                window.removeEventListener("resize", recalcTruncation);
            };
        }, [recalcTruncation]);

        return (
            <div
                ref={containerRef}
                className={className + " w-full"}
                // style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
                {limit < text.length ? truncateText(text, limit) : text}
            </div>
        );
    }
);

export default TruncatedText;
