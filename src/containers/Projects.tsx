import Divider from "../components/divider.tsx";
import Project from "../components/Project.tsx";
import { projects } from "../contents/projects.ts";
function Projects() {
    return (
        <div className="flex flex-col justify-center items-center pb-5 w-full">
            <h1 className="text-center">{"Projects"}</h1>
            {projects.map((pub, index) => (
                <div
                    key={`proj-container-${index}`}
                    className="flex flex-col justify-center items-center w-full"
                >
                    <Divider key={`proj-div-${index}`} />
                    <Project key={`proj-${index}`} {...pub} />
                </div>
            ))}
        </div>
    );
}

export default Projects;
