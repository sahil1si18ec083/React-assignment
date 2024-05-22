import sideNavContents from "../../utility/sideNavData";
import {renderIcon} from "../../utility/config.jsx"
import "./SideNav.css"
const SideNav = () => {
    const onSelectModule = (oEvent) => {
        var clickedModule = oEvent.currentTarget.innerText;

        // if (detailScreenView) {
        //   dispatch(
        //     setPopOverMessageObj({
        //       ...popOverMessageObjSelector,
        //       status: "Warning",
        //       module: clickedModule,
        //     })
        //   );

        //   dispatch(setPopOverVisibility(true));
        // }
        // // else if condition is when we are not in detail screen and we click on any other module
        // else if (currentModule !== clickedModule) {
        //   let clickedModuleMetaData = modules?.filter(
        //     (item) => item.moduleName === clickedModule
        //   );
        //   dispatch(
        //     setCurrentPayload({
        //       ...oCurrentPayload,
        //       documentType: clickedModuleMetaData?.at(0)?.moduleCode,
        //     })
        //   );
        //   navigate("/" + getPathNameFromModuleName(clickedModule));

        //   dispatch(setCurrentModule(clickedModule));
        //   dispatch(setGridViewFlag(false));
        //   dispatch(setSplitScreen(false));
        //   dispatch(setListStatusTabValue(0));
        //   dispatch(setTrackSoBackDropFlag(false));
        // }
    };
    return (<div className="sideNav">
        {sideNavContents.map((content) => {
            return (
                <div
                    className={
                        "currentModule === content.label"
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
    </div>)
}
export default SideNav;