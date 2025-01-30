import { useTheme } from "../hooks/theme";
export default function IconBar() {
    const { isDark } = useTheme();
    return (
        <div className="flex flex-row justify-around w-48 z-0">
            <a href="https://github.com/YCK1130" target="_blank" rel="noopener noreferrer">
                <img
                    className="logo size-9 github"
                    src={`github-mark-${isDark ? "white" : "black"}.svg`}
                    alt="github"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/yang-chun-kai/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img className="logo size-9 github" src={`linkedin.png`} alt="linkedin" />
            </a>
            <a href="/assets/cv.pdf" target="_blank" rel="noopener noreferrer">
                <img
                    className="logo size-9 github"
                    src={`docs-${isDark ? "white" : "black"}.png`}
                    alt="cv"
                />
            </a>
        </div>
    );
}
