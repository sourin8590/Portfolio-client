import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      const res = await axios.get(`https://portfolio-server-0rxb.onrender.com/api/v1/application/getall`, {
        withCredentials: true,
      });
      // console.log(res.data)
      setApps(res.data.softwareApplication);
    };
    getMyApps();
  }, []);
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className=" text-tubeLight-effect dancing_text text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] mx-auto w-fit">
        My Apps
      </h1>
      <div className=" grid grid-cols-2 *:grid-cols-3 md:grid-cols-4 gap-4">
        {apps &&
          apps.map((element) => (
            <Card
              className="h-fit flex flex-col p-7 justify-center items-center gap-3"
              key={element._id}
            >
              <img
                src={element.svg && element.svg.url}
                alt={element.name}
                className="h-7 sm:h-24 w-auto"
              />
              <p className="text-muted-foreground">{element.name}</p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default MyApps;
