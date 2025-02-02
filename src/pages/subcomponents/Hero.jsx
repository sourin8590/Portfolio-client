import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const res = await axios.get(
        `https://portfolio-server-0rxb.onrender.com/api/v1/user/portfolio/me`,
        { withCredentials: true }
      );
      setUser(res.data.user);
    };
    getMyProfile();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4">
          Hey, I &apos;m {user.fullName}
        </h1>
        <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px] flex justify-center items-center">
          <Typewriter
            words={[
              "FullStack Developer",
              "MERN Developer",
              "FrontEnd Developer",
              "Backend Developer",
              "Coder",
              "Machine Learning Enthusiast",
            ]}
            loop={50}
            cursor
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={100}
          />
        </h1>
        <div className="flex w-fit px-5 py-2 bg-slate-50 rounded-[20px] gap-5 items-center mt-4 md:mt-8 lg:mt-10">
          <Link to={user.instagramURL} target="_blank">
            <Instagram className="text-red-500 w-7 h-7" />
          </Link>
          <Link to={user.facebookURL} target="_blank">
            <Facebook className="text-blue-800 w-7 h-7" />
          </Link>
          <Link to={user.linkedInURL} target="_blank">
            <Linkedin className="text-sky-500 w-7 h-7" />
          </Link>
          <Link to={user.twitterURL} target="_blank">
            <Twitter className="text-blue-600 w-7 h-7" />
          </Link>
        </div>
        <div className="mt-4 md:mt-5 lg:mt-10 flex gap-3">
          <Link to={user.githubURL} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <span>
                <Github />
              </span>
              <span>Github</span>
            </Button>
          </Link>
          <Link to={user.resume && user.resume.url} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <span>
                <ExternalLink />
              </span>
              <span>Resume</span>
            </Button>
          </Link>
        </div>
        <p className=" mt-8 text-xl tracking-[2px] text-center">{user.aboutMe}</p>
        <hr className="mr-8 md:my-10" />
      </div>
    </div>
  );
};

export default Hero;
