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

const SortingPopover = ({ aDataList, setaDataList }) => {
  // Accessing context data
  const appContext = React.useContext(AppContext);
  const currentModule = appContext.currentModule;

  // State for anchor element of the sorting popover
  const [anchorElSorting, setAnchorElSorting] = useState(null);

  // Retrieving sorting fields for the current module
  const sortingFields = sortingParameters
    .filter((moduleData) => moduleData.moduleName === currentModule)
    ?.at(0)?.sortingFields;

  // State for selected sort by field and sorting order
  const [sortBy, setSortBy] = useState(sortingFields?.at(0)?.key);
  const [sign, setSign] = useState("asc");

  // Style for the sorting popover
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

  // Handle click on the sort button
  const handleSortButtonPress = (event) => {
    if (!anchorElSorting) {
      setAnchorElSorting(event.currentTarget);
    }
  };

  // Close the sorting popover
  const handleCloseSorting = () => {
    setAnchorElSorting(null);
  };

  // Handle change in sort by field
  const onSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  // Handle change in sorting order
  const onSortOrderChange = (event) => {
    setSign(event.target.value);
  };

  // Apply sorting changes
  const onApplyCustomization = () => {
    const aDataListCopy = JSON.parse(JSON.stringify(aDataList));
    sign === "asc"
      ? aDataListCopy.sort((a, b) => a[sortBy] - b[sortBy])
      : aDataListCopy.sort((a, b) => b[sortBy] - a[sortBy]);
    setaDataList(aDataListCopy);
    setAnchorElSorting(null);
  };

  // Cancel sorting changes
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
          {/* Sort By radio group */}
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

          {/* Sorting Order radio group */}
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

        {/* Apply and Cancel buttons */}
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
    </button>
  );
};

export default SortingPopover;
