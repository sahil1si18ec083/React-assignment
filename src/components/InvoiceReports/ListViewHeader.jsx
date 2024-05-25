import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import SortingPopover from "./SortingPopover";
const ListViewHeader = ({
  aDataList,
  setaDataList,
  anchorElFilter,
  setAnchorElFilter,
}) => {
  return (
    <header className="listHeader">
      {/* <h3>{moduleMetadata?.moduleName}</h3> */}
      <div className="actionButtons">
        <SortingPopover aDataList={aDataList} setaDataList={setaDataList} />
      </div>
      <button
        id="advancedFilters"
        onClick={() => setAnchorElFilter((prev) => !prev)}
      >
        Advanced Filters
      </button>
    </header>
  );
};

export default ListViewHeader;
