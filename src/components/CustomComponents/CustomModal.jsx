import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// CustomModal component to display a modal dialog
const CustomModal = ({ open, handleClose, style, children }) => {
  return (
    <div>
      {/* Modal component from Material-UI */}
      <Modal
        open={open}  // Determines whether the modal is open
        onClose={handleClose}  // Function to handle closing the modal
        aria-labelledby="modal-modal-title"  // Accessibility attributes
        aria-describedby="modal-modal-description"  // Accessibility attributes
        className="custom-modal"  // Custom class for additional styling
      >
        {/* Box component to wrap the modal content */}
        <Box sx={style}>
          {children}  // Render the children elements inside the modal
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
