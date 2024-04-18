import { useLottie, useLottieInteractivity } from "lottie-react";
import heatmap from "../assets/newHeat.json";



const style = {
  
  
  };

const options = {
  animationData: heatmap,
};

const Heatmap = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
   
      {
        visibility: [0.1, 0.7],
        type: "seek",
        frames: [0,420 ],
      },
    ],
  });

  return Animation;
};

export default Heatmap;
