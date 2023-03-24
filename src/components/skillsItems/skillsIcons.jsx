import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography'

const skillsIcons = ({ img: img }) => {
  return (
    <Card sx={{height:"70px"}}>
      <CardMedia component="img" height="100%" image={img} alt="alan erriu" />
      <Typography variant="h6" color="initial">react</Typography>
    </Card>
  );
};

export default skillsIcons;
