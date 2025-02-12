import Divider from "../components/divider.tsx";
import Paper from "../components/paper";
import { publications } from "../contents/pubs.ts";
function Publications() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center">{"Publications"}</h1>
            {publications.map((pub, index) => (
                <div
                    key={`pub-container-${index}`}
                    className="flex flex-col justify-center items-center w-full"
                >
                    <Divider key={`div-${index}`} />
                    <Paper key={`pub-${index}`} id={`pub-${index}`} {...pub} />
                </div>
            ))}
        </div>
    );
}

export default Publications;
