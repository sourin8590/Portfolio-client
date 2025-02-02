import axios from "axios";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the timeline style

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      const res = await axios.get(
        `https://portfolio-server-0rxb.onrender.com/api/v1/timeline/getall`,
        { withCredentials: true }
      );
      setTimeline(res.data.timeLine);
    };
    getMyTimeline();
  }, []);

  return (
    <div>
      <h1 className=' mb-10 text-tubeLight-effect dancing_text text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] mx-auto w-fit'>TIMELINES</h1>

      <VerticalTimeline>
        {timeline &&
          timeline.map((element) => (
            <VerticalTimelineElement
              key={element._id}
              className="vertical-timeline-element--work"
              date={`${element.timeline.from} - ${
                element.timeline.to ? element.timeline.to : "Present"
              }`}
              iconStyle={{ background: "#4e73df", color: "#fff" }} // Customize icon colors
              icon={
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              }
              contentStyle={{
                background: "transparent", // Set background to transparent
                color: "#fff", // This will ensure the text color remains white, which is suitable for dark backgrounds
                border: "3px solid white",
                borderRadius: "10px",
              }}
            >
              <h3 className="vertical-timeline-element-title text-lg font-semibold">
                {element.title}
              </h3>
              <p className="text-base font-normal text-gray-400">{element.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
