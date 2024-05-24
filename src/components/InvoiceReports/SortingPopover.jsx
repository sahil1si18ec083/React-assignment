import React, { useState } from "react";

import { sortingParameters } from "../../utility/config";

import { Tooltip } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { Popover } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AppContext from "../../AppContext";
import CustomModal from "../CustomComponents/CustomModal";
const SortingPopover = ({
  //   payload,
  //   setPayload,
  //   setPage,
  //   sortBy,
  //   setSortBy,
  //   sortingOrder,
  //   setSortingOrder,
  aDataList,
  setaDataList,
}) => {
  const appContext = React.useContext(AppContext);
  const [anchorElSorting, setAnchorElSorting] = useState(null);
  const currentModule = appContext.currentModule;
  const sortingFields = sortingParameters
    .filter((moduleData) => {
      return moduleData.moduleName === currentModule;
    })
    ?.at(0)?.sortingFields;
  const [sortBy, setSortBy] = useState(sortingFields[0].key);
  const [sign, setSign] = useState("asc");
  
  const style = {
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    border: "2px solid black",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.375rem",
  };

  

  const handleSortButtonPress = (oEvent) => {
    if (!anchorElSorting) {
      setAnchorElSorting(oEvent.currentTarget);
    }
  };

  const handleCloseSorting = () => {
    setAnchorElSorting(null);
  };

  const onSortByChange = (oEvent) => {
    setSortBy(oEvent.target.value);
    // const aDataListCopy=JSON.parse(JSON.stringify(aDataList));
    // aDataListCopy.sort((a,b)=>a[sortBy]-b[sortBy])
    // setaDataList(aDataListCopy)

    // const sortBy = oEvent.target.value;
    // payload = { ...payload, sortBy: sortBy, sortOrder: sortingOrder };
    // dispatch(setPayload(payload));
    // dispatch(setPage(0));
    // setSortBy(sortBy);
    // setAnchorElSorting(null);
  };

  const onSortOrderChange = (oEvent) => {
    setSign(oEvent.target.value);
    // const sortOrder = oEvent.target.value;
    // payload = { ...payload, sortOrder: sortOrder, sortBy: sortBy };
    // dispatch(setPayload(payload));
    // dispatch(setPage(0));
    // setSortingOrder(sortOrder);
    // setAnchorElSorting(null);
  };
  const onApplyCustomization = () => {
    const aDataListCopy = JSON.parse(JSON.stringify(aDataList));
    sign == "asc"
      ? aDataListCopy.sort((a, b) => a[sortBy] - b[sortBy])
      : aDataListCopy.sort((a, b) => b[sortBy] - a[sortBy]);
    setaDataList(aDataListCopy);
    setAnchorElSorting(null);
  };
  const onCancelChanges = () => {
    setAnchorElSorting(null);
  };
  return (
    <button
      onClick={handleSortButtonPress}
      title="Sort List"
      className="sort-btn"
    >
   Sort list
      <CustomModal
        open={Boolean(anchorElSorting)}
        handleClose={handleCloseSorting}
        style={style}
      >
        <div className="sortingPopover">
          <FormControl>
            <FormLabel sx={{ fontWeight: "bold" }}>Sort By</FormLabel>
            <RadioGroup
              defaultValue={sortBy}
              
              name="radio-buttons-group"
              onChange={onSortByChange}
            >
              {sortingFields?.map(function (fieldData) {
                return (
                  <FormControlLabel
                    key={fieldData.key}
                    value={fieldData.key}
                    control={<Radio size="small" />}
                    label={fieldData.fieldName}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ marginTop: "0.6rem" }}>
            <FormLabel sx={{ fontWeight: "bold" }}>Sorting Order</FormLabel>
            <RadioGroup
              defaultValue={sign}
              name="radio-buttons-group"
              onChange={onSortOrderChange}
            >
              <FormControlLabel
                value="asc"
                control={<Radio size="small" />}
                label="Ascending"
              />
              <FormControlLabel
                value="desc"
                control={<Radio size="small" />}
                label="Descending"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="Flex">
          <button className="cancel" onClick={onCancelChanges}>
            Cancel
          </button>
          <button
            className="apply-changes createButton"
            onClick={onApplyCustomization}
          >
            Apply Changes
          </button>
        </div>
      </CustomModal>
      {/* <Popover
        style={{ borderRadius: "10rem" }}
        open={Boolean(anchorElSorting)}
        anchorEl={anchorElSorting}
        onClose={handleCloseSorting}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
       
      </Popover> */}
    </button>
  );
};

export default SortingPopover;
