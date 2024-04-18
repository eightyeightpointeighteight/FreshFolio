import { useLottie, useLottieInteractivity } from "lottie-react";
import process from "../assets/process.json";



const style = {
  
  
  };

const options = {
  animationData: process,
};

const Process = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
   
      {
        visibility: [0, 0.9],
        type: "seek",
        frames: [0,420 ],
      },
    ],
  });

  return Animation;
};

export default Process;