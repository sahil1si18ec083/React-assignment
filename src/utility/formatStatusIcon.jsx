import CircleIcon from "@mui/icons-material/Circle";
import { BsPinAngle, BsCircleHalf } from "react-icons/bs";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";


const formatStatusIcon = (status) => {
  let currentIcon;
  switch (status) {
    case "Created":
      currentIcon = <RadioButtonUncheckedIcon color="#002D5E" size="15px" />;
      break;
    case "Drafted":
      currentIcon = <RadioButtonUncheckedIcon color="#002D5E" size="15px" />;
      break;
    case "Processing":
      currentIcon = <BsCircleHalf color="#CD722C" size="15px" />;
      break;

    default:
      currentIcon = <CircleIcon size="15px" />;
  }
  return currentIcon;
};

export default formatStatusIcon;
