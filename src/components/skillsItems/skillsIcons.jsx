import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const skillsIcons = ({ desc:desc }) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column", alignItems:"center"}}> 
      <Avatar
        variant="rounded"
        alt="unitedkingdom"
        src={desc.img}
        sx={{ width: {xs:25,sm:35,md:50}, height:{xs:25,sm:35,md:50} ,backgroundColor:"white"}}
      />
      <Typography fontSize={{xs:"12px",sm:"18px"}} textAlign={"center"} color={"white"}>{desc.text}</Typography>
    </Box>
  );
};

export default skillsIcons;
