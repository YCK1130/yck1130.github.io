import Info from "./components/info";
import Navbar from "./components/Navbar";
import { Toggle } from "./components/Toggle";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects";
import Publications from "./containers/Publications";
import { useTheme } from "./hooks/useTheme";
import "./styles/App.css";
function App() {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className="flex flex-col justify-center items-center pt-5 bg-inherit relative">
            <Navbar className="flex">
                <Toggle isToggled={isDark} handleToggle={toggleTheme} className="ml-auto w-min" />
            </Navbar>
            <Info />
            <Publications />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
