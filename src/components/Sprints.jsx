import { useLottie } from "lottie-react";
import sprints from "../assets/conciseDesignSprints.json";



const style = { 
 

  
  };

  const Sprints = () => {
    const options = {
      animationData: sprints, 
      loop: false,
      autoplay: true,
      
    };
  
    const { View } = useLottie(options, style);
  
    return View;
  };
  

export default Sprints;