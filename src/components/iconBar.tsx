import { useTheme } from "../hooks/useTheme";
import { NewTabLink } from "./Markdown";
export default function IconBar() {
    const { isDark } = useTheme();
    return (
        <div className="relative flex flex-row justify-around w-48 z-10 max-md:py-5">
            <NewTabLink href="https://github.com/YCK1130">
                <img
                    className="logo size-9"
                    src={`github-mark-${isDark ? "white" : "black"}.svg`}
                    alt="github"
                />
            </NewTabLink>
            <NewTabLink href="https://www.linkedin.com/in/yang-chun-kai/">
                <img
                    className="logo size-9"
                    src={`linkedin${isDark ? "" : "-black"}.png`}
                    alt="linkedin"
                />
            </NewTabLink>
            <NewTabLink href="/assets/cv.pdf">
                <img
                    className="logo size-9"
                    src={`docs-${isDark ? "white" : "black"}.png`}
                    alt="cv"
                />
            </NewTabLink>
        </div>
    );
}
