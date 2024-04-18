import { useLottie, useLottieInteractivity } from "lottie-react";
import flows from "../assets/flows.json";



const style = {
  
  
  };

const options = {
  animationData: flows,
};

const Flows = () => {
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

export default Flows;