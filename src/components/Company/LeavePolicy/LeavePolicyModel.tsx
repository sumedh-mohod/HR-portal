import * as React from "react";
import { Box, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const LeavePolicyMode = ({
  handleOpen,
  handleClose,
  open,
}: {
  handleOpen: any;
  handleClose: any;
  open: any;
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>view mode</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default LeavePolicyMode;
