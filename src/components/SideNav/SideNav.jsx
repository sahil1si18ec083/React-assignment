import sideNavContents from "../../utility/sideNavData";
import { renderIcon } from "../../utility/config.jsx";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";

const SideNav = ({ currentModule, setCurrentModule }) => {
  const navigate = useNavigate();

  // Function to handle module selection
  const onSelectModule = (event) => {
    const clickedModule = event.currentTarget.innerText;

    // Check if the clicked module is different from the current module
    if (clickedModule !== currentModule) {
      // Set the current module and navigate to the corresponding route
      setCurrentModule(clickedModule.split(" ").join(""));
      navigate(`/${clickedModule.split(" ").join("")}`);
    }
  };

  return (
    <div className="sideNav">
      {/* Mapping over sideNavContents to render navigation options */}
      {sideNavContents.map((content) => {
        return (
          <div
            className={
              // Conditionally apply selectedOption class based on currentModule
              currentModule === content.label.split(" ").join("")
                ? "sideNavOptionTile selectedOption"
                : "sideNavOptionTile"
            }
            key={content.label}
            onClick={(event) => onSelectModule(event)}
            style={{ textDecoration: "none", color: "black" }}
          >
            {/* Render icon based on content label */}
            {renderIcon(content.label)}
            <p>{content.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
