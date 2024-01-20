import "./styles/App.css";
import Profile from "./containers/Profile";
import Divider from "./components/divider";
import Bio from "./containers/Bio";
function App() {
    const handleClickScroll = (e: React.MouseEvent<HTMLElement>) => {
        if (e.detail == 1) return;
        window.scrollTo({
            top: document.getElementById("bio")!.offsetTop - 50,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <Profile id="profile" onClick={handleClickScroll} />
            <Divider id={crypto.randomUUID()} />
            <Bio id="bio" />
        </div>
    );
}

export default App;
