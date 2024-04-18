import { useLottie, useLottieInteractivity } from "lottie-react";
import wireframes from "../assets/wireframes.json";



const style = {
  
  
  };

const options = {
  animationData: wireframes,
};

const Wireframes = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
   
      {
        visibility: [0.2, 0.9],
        type: "seek",
        frames: [0,420 ],
      },
    ],
  });

  return Animation;
};

export default Wireframes;