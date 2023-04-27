import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const SellerEditproduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([{ name: "", quantity: "" ,descriptionItem:"",minQuantity:"",maxQuantity:""}]);

  const handleClick = () => {
    setData([...data, { name: "", quantity: "" ,descriptionItem:"",minQuantity:"",maxQuantity:""}]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
    console.log(data);
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData([...deleteVal]);
  };
  console.log("after delete",data);
  return (
    <Box m="0 20px">
      <Header title="EDIT Product" subtitle="Edit Product Profile" />
      <form>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Title"
            name="title"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Location"
            name="location"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            variant="filled"
            type="file"
            label="Image"
            name="image"
            sx={{ gridColumn: "span 4" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Description"
            name="description"
            sx={{ gridColumn: "span 4" }}
            multiline
            rows={3}
          />
          <Button
          onClick={handleClick}
            sx={{
              backgroundColor: colors.blueAccent[500],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              ":hover": {
                bgcolor: colors.blueAccent[600],
              }
            }}
          >
           Add New Item
          </Button>
          {data.map((val, i) => (
            <Box key={i}>
              <TextField
                value={val.name}
                fullWidth
                variant="filled"
                type="text"
                label="name"
                name="name"
                sx={{ gridColumn: "span 2" }}
                onChange={(e) => handleChange(e, i)}
              />{" "}
              <TextField
                value={val.quantity}
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                name="quantity"
                sx={{ gridColumn: "span 2" }}
                onChange={(e) => handleChange(e, i)}
              />
              <TextField
                value={val.maxQuantity}
                fullWidth
                variant="filled"
                type="text"
                label="MaxQuantity"
                name="maxQuantity"
                sx={{ gridColumn: "span 2" }}
                onChange={(e) => handleChange(e, i)}
              />
              <TextField
                value={val.minQuantity}
                fullWidth
                variant="filled"
                type="text"
                label="MinQuantity"
                name="minQuantity"
                sx={{ gridColumn: "span 2" }}
                onChange={(e) => handleChange(e, i)}
              />
              <TextField
                value={val.descriptionItem}
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                name="descriptionItem"
                sx={{ gridColumn: "span 4" }}
                multiline
                rows={3}
                onChange={(e) => handleChange(e, i)}
              />
              <Button
                onClick={() => handleDelete(i)}
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  ":hover": {
                    bgcolor:"#ff1744",
                  }
                }}
              >
                Delete Item
              </Button>
            </Box>
          ))}
        </Box>

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Update Product
          </Button>
        </Box>

      </form>
    </Box>
  );
};

export default SellerEditproduct;
