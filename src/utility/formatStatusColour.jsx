import customTheme from "./customTheme";

const formatStatusColour = (status) => {
  let currentColor;
  switch (status) {
    case "Created":
      currentColor = customTheme.palette.statusColors.created;
      break;
    case "Drafted":
      currentColor = customTheme.palette.statusColors.drafted;
      break;
    case "Processing":
      currentColor = customTheme.palette.statusColors.inProgress;
      break;

    default:
      currentColor = customTheme.palette.statusColors.default;
  }
  return currentColor;
};

export default formatStatusColour;
