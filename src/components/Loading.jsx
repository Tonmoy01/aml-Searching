import { useState } from "react";
import CircularProgressBar from "./CircleProgressBar";

const Loading = () => {
  const [progress, setProgress] = useState(75);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-primaryColor h-[528px] w-[800px] rounded-xl">
        <CircularProgressBar progress={progress} size={150} />
        <h3 className="font-medium text-center text-white text-[24px]">we are searching information</h3>
      </div>
    </div>
  );
};
export default Loading;