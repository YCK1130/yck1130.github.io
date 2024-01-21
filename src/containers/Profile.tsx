import Info from "../components/info";
import "../styles/Profile.css";

interface Props {
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onTouch?: (e: React.TouchEvent<HTMLElement>) => void;
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
}

function Profile(props: Props) {
    return (
        <div
            id={props.id}
            className="min-h-dvh w-dvw relative max-w-7xl min-w-80 lagging-scroll"
            onClick={props.onClick}
            onTouchMove={props.onTouch}
            onTouchStart={props.onTouch}
            onScroll={props.onScroll}
        >
            <div className="h-max p-5 flex justify-center content-center sticky top-1/2 -translate-y-1/2 left-1/2 ">
                <Info />
            </div>
        </div>
    );
}

export default Profile;
