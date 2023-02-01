import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "components/Icons/EditIcon";
import { styles } from "styles/screens/CompanyMaster";
import { globalStyles } from "styles/global";
import SaveTickIcon from "components/Icons/SaveTickIcon";
import DeleteIcon from "components/Icons/DeleteIcon";

const CompanyMaster = () => {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      designation: [
        {
          designationName: "",
          description: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log("value", values);
    },
  });

  const handleAddDesignation = () => {
    const newDesignation = [
      ...values.designation,
      {
        designationName: "",
        description: "",
      },
    ];
    setFieldValue("designation", newDesignation);
  };

  const handleChangeDesignationName = (event: any, index: number) => {
    setFieldValue(`designation.${index}.designationName`, event.target.value);
    console.log("address line1", event.target.value);
  };

  const handleChangeDescription = (event: any, index: number) => {
    setFieldValue(`designation.${index}.description`, event.target.value);
    console.log("address line1", event.target.value);
  };

  const handleRemoveDesignation = (index: number) => {
    const newDesignation = [...values.designation];
    newDesignation.splice(index, 1);
    setFieldValue("designation", newDesignation);
  };

  return (
    <Box>
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Designation
        </Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            {...styles.editBtn}
          >
            Edit
          </Button>
        </Box>
      </Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={3} rowGap={3}>
            {values.designation.map((designation: any, index: any) => (
              <>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel
                      id="designationName"
                      {...globalStyles.textFieldLabel}
                    >
                      Designation Name
                    </FormLabel>
                    <TextField
                      name="designationName"
                      variant="filled"
                      size="small"
                      value={(values.designation && values.designation[index].designationName) || ""}
                      onChange={(event) => {
                        handleChangeDesignationName(event, index);
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel
                      id="description"
                      {...globalStyles.textFieldLabel}
                    >
                      Description
                    </FormLabel>
                    <TextField
                      name="description"
                      variant="filled"
                      size="small"
                      value={(values.designation && values.designation[index].description) || ""}
                      onChange={(event) => {
                        handleChangeDescription(event, index);
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6} {...styles.gridItem}>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "5px",
                      backgroundColor: "#0FBD35",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 3,
                      cursor: "pointer",
                    }}
                  >
                    <Button
                      sx={{ width: "100%", height: "100%" }}
                      type="submit"
                    >
                      <SaveTickIcon />
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "5px",
                      backgroundColor: "#D82A2A",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleRemoveDesignation(index);
                    }}
                  >
                    <DeleteIcon fill={"white"} />
                  </Box>
                  <Box>
                    {values.designation.length - 1 === index ? (
                      <Button
                        {...styles.addButton}
                        onClick={handleAddDesignation}
                      >
                        <AddIcon fontSize="small" {...styles.addIcon} />
                        <Typography sx={{ fontSize: "small" }}>Add</Typography>
                      </Button>
                    ) : null}
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default CompanyMaster;
