import Info from "./components/info";
import Navbar from "./components/Navbar";
import { Toggle } from "./components/Toggle";
import Footer from "./containers/Footer";
import Projects from "./containers/Projects";
import Publications from "./containers/Publications";
import { useTheme } from "./hooks/theme";
import "./styles/App.css";
function App() {
    const { isDark, toggleTheme } = useTheme();
    return (
        <div className="flex flex-col justify-center items-center pt-5 bg-inherit">
            <Navbar className="flex flex-row">
                <Toggle
                    isToggled={isDark}
                    handleToggle={toggleTheme}
                    className="justify-self-end w-min"
                />
            </Navbar>
            <Info />
            <Publications />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
