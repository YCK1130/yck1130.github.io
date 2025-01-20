import { useRef, useState } from "react";
import Info from "./components/info";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects";
import Publications from "./containers/Publications";
import "./styles/App.css";
type handleFastScrollEvent =
    | React.MouseEvent<HTMLElement>
    | React.TouchEvent<HTMLElement>
    | React.UIEvent<HTMLElement>;

function App() {
    const touchStartY = useRef<number>(0);
    const [bioButtVisible, setBioButtVisible] = useState<boolean>(true);
    const scrollTo = (id: string) => {
        window.scrollTo({
            top: document.getElementById(id)!.offsetTop - 50,
            behavior: "smooth",
        });
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <Info />
            {/* <Bio id="bio" /> */}
            <Publications />
            <Projects />
            {/* <Project {...exampleProject} /> */}
            <Footer />
        </div>
    );
}

export default App;
