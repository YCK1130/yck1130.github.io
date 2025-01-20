import Divider from "../components/divider";
export default function Footer() {
    return (
        <>
            <Divider id="Footer-bar" />
            <div className="flex flex-col justify-center content-center h-full">
                <p className="text-center">{new Date().getFullYear()}©Yang, Chun-Kai (楊竣凱)</p>
            </div>
        </>
    );
}
