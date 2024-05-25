import sideNavContents from "../../utility/sideNavData";
import { renderIcon } from "../../utility/config.jsx";
import "./SideNav.css";
import { useNavigate } from "react-router-dom";
const SideNav = ({ currentModule, setCurrentModule }) => {
  const navigate = useNavigate();
  const onSelectModule = (oEvent) => {
    var clickedModule = oEvent.currentTarget.innerText;

    if (clickedModule != currentModule) {
      setCurrentModule(clickedModule.split(" ").join(""));
      navigate(`/${clickedModule.split(" ").join("")}`);
    }
  };
  return (
    <div className="sideNav">
      {sideNavContents.map((content) => {
        return (
          <div
            className={
              currentModule === content.label.split(" ").join("")
                ? "sideNavOptionTile selectedOption"
                : "sideNavOptionTile"
            }
            key={content.label}
            onClick={(oEvent) => onSelectModule(oEvent)}
            style={{ textDecoration: "none", color: "black" }}
          >
            {renderIcon(content.label)}
            <p>{content.label}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SideNav;
