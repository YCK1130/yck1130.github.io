import Info from "../components/info";

function Profile(props: { id?: string }) {
    return (
        <div id={props.id} className="h-dvh w-dvw relative max-w-7xl min-w-80">
            <div className="h-max p-5 flex justify-center content-center relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <Info />
            </div>
        </div>
    );
}

export default Profile;
