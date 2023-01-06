import { DataGrid } from "@mui/x-data-grid";
import { Grid, Box, Card } from "@mui/material";

const EmployeeList = ({ columns, rows }: { columns: any; rows: any }) => {
  return (
    <Card sx={{ marginTop: "35px", p: 0 }}>
      <Grid item xs={12} xl={12} lg={12}>
        <Box
          sx={{
            minWidth: "90vw",
            maxWidth: "90vw",
            margin: 0,
          }}
        >
          <DataGrid
            sx={{
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
            columns={columns}
            hideFooterPagination={true}
            hideFooter={true}
          />
        </Box>
      </Grid>
    </Card>
  );
};

export default EmployeeList;
