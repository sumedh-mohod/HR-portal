import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Card } from "@mui/material";

const ProjectList = ({
    showColumns,
    rows,
}: {
    showColumns: any;
    rows: any;
}) => {
    return (
        <Card sx={{ marginTop: "35px", p: 0, }}>
            <Grid container width="1">
                <Grid item xs={12} xl={12} lg={12}>
                    <DataGrid
                        sx={{
                            width: "100%",
                            borderRadius: "0",
                            ".MuiDataGrid-columnSeparator": {
                                display: "none",
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: " #F4F5F6",
                            },
                        }}
                        getRowId={(row) => row.id}
                        autoHeight={true}
                        rows={rows}
                        columns={showColumns}
                        hideFooterPagination={true}
                        hideFooter={true}
                        disableColumnMenu={true}
                        disableColumnFilter={true}
                        disableColumnSelector={true}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default ProjectList;
