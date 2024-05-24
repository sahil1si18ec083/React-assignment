import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import SortingPopover from "./SortingPopover";
const ListViewHeader = ({
  aDataList, setaDataList
}) => {
  
  return (
    <header className="listHeader">
      {/* <h3>{moduleMetadata?.moduleName}</h3> */}
      <div className="actionButtons">
        
      
      <SortingPopover
            // payload={oPayload}
            // setPayload={setPayload}
            // setPage={setPage}
            // sortBy={sortBy}
            // setSortBy={setSortBy}
            // sortingOrder={sortingOrder}
            // setSortingOrder={setSortingOrder}
            aDataList={aDataList}
            setaDataList={setaDataList}
          />
      </div>
      <button id="advancedFilters">
        Advanced Filters
      </button>
    </header>
  );
};

export default ListViewHeader;

