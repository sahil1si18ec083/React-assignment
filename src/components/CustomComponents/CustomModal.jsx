import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const CustomModal = ({ open, handleClose,  style, children }) => {
 
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-model"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default CustomModal;

