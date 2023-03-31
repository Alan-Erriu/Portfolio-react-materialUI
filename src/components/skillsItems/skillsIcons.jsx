import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

const skillsIcons = ({ desc:desc }) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column", alignItems:"center"}}> 
      <Avatar
        variant="square"
        alt="unitedkingdom"
        src={desc.img}
        sx={{ width: 50, height: 50 ,backgroundColor:"white"}}
      />
      <Typography textAlign={"center"} color={"white"}>{desc.text}</Typography>
    </Box>
  );
};

export default skillsIcons;
