import { serverUrl } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const res = await axios.get(
        `${serverUrl}/api/v1/user/portfolio/me`,
        { withCredentials: true }
      );
      setUser(res.data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt="avatar"
              className="bg-blue-300 rounded-md p-2 sm:p-4 w-[340px] sm:w-[400px] md:w-[350px] lg:w-[350px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              I&apos;m Sourin. I will graduate in Computer Science and
              Engineering from RKMGEC on 2025. I work as a full stack web
              developer, also learning React-Native to built beautiful apps and Machine Learning Enthusiast. My hobbies include solving DSA problems, watching series, playing
              video games, and occasionally cooking.
            </p>
            <p>
              I have interests not only in technology but also in video games, and cooking. I excel in meeting deadlines for my work.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
    </div>
  );
};

export default About;
