import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectBanner, setProjectBanner] = useState("");

  const { id } = useParams();
  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`https://portfolio-server-0rxb.onrender.com/api/v1/project/get/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setTitle(res.data.project.title);
          setDescription(res.data.project.description);
          setGitRepoLink(res.data.project.gitRepoLink);
          setProjectLink(res.data.project.projectLink);
          setTechnologies(res.data.project.technologies);
          setProjectBanner(
            res.data.project.projectBanner && res.data.project.projectBanner.url
          );
          setStack();
          setDeployed();
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    };
    getProject();
  }, [id]);
  const descriptionInListFormat = description.split(". ");
  const technologiesInListFormat = technologies.split(", ");
  return (
    <div>
      <div className=" flex justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14">
        <div className=" w-[100%] px-5 md:w-[1000px]">
          <div className="space-y-12 ">
            <div className="border-b border-gray-900 pb-12">
              <div className=" mt-10 flex flex-col gap-3">
                {/* title */}
                <div className=" w-full sm:col-span-4">
                  <h1 className="text-2xl font-bold mb-4">{title}</h1>
                  <img
                    src={projectBanner ? projectBanner : "./vite.svg"}
                    alt={title}
                    className="w-full h-auto"
                  />
                </div>
                {/* description */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Description</p>
                  <ul className="list-disc">
                    {descriptionInListFormat.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* technologies */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Technologies</p>
                  <ul className="list-disc">
                    {technologiesInListFormat.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* stack */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Stack:</p>
                  <p>{stack}</p>
                </div>
                {/* stack */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Deployed:</p>
                  <p>{deployed}</p>
                </div>
                {/* Git repo link */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Github repository link:</p>
                  <Link
                    to={gitRepoLink}
                    target="_blank"
                    className="text-sky-700"
                  >
                    {gitRepoLink}
                  </Link>
                </div>
                {/* Git repo link */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Project link:</p>
                  <Link to={projectLink ? projectLink : "/"}>
                    {projectLink ? projectLink : "Not Deployed"}
                  </Link>
                </div>
                {/* deployed */}
                <div className=" w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Deployed:</p>
                  <p>{deployed}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
