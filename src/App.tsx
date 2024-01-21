import "./styles/App.css";
import Profile from "./containers/Profile";
import Divider from "./components/divider";
import Bio from "./containers/Bio";
import Footer from "./containers/Footer";
import { useEffect, useRef, useState } from "react";
type handleFastScrollEvent =
    | React.MouseEvent<HTMLElement>
    | React.TouchEvent<HTMLElement>
    | React.UIEvent<HTMLElement>;

function App() {
    const touchStartY = useRef<number>(0);
    const [bioButtVisible, setBioButtVisible] = useState<boolean>(true);
    const handleFastScroll = (e: handleFastScrollEvent) => {
        if (e.type === "click") {
            const mouseEvent = e as React.MouseEvent<HTMLElement>;
            if (e.detail <= 1) return;
            if (mouseEvent.screenY <= window.screen.availHeight / 2) return;
            e.preventDefault();
        } else if (e.type === "touchmove") {
            const touchEvent = e as React.TouchEvent<HTMLElement>;
            if (touchEvent.touches[0].clientY - touchStartY.current > -50) return;
        } else if (e.type === "touchstart") {
            const touchEvent = e as React.TouchEvent<HTMLElement>;
            touchStartY.current = touchEvent.touches[0].clientY;
            return;
        }
        window.scrollTo({
            top: document.getElementById("bio-bar")!.offsetTop - 50,
            behavior: "smooth",
        });
    };
    const scrollTo = (id: string) => {
        window.scrollTo({
            top: document.getElementById(id)!.offsetTop - 50,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.screen.availHeight / 2) {
                setBioButtVisible(false);
            } else {
                setBioButtVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center">
            <Profile
                id="profile"
                onClick={handleFastScroll}
                onTouch={handleFastScroll}
                onScroll={handleFastScroll}
            />
            <button
                id="bio-button"
                className={`w-40 fixed bottom-1 rounded-none rounded-t-lg bg-transparent ${
                    bioButtVisible ? "visible" : "invisible"
                }`}
                onClick={() => {
                    scrollTo("bio-bar");
                    setBioButtVisible(false);
                }}
                aria-label="go to bio"
            ></button>
            <Divider id="bio-bar" />
            <Bio id="bio" />
            <Footer />
        </div>
    );
}

export default App;
