import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import logo from "../assets/logo.jpg";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";


export const CardProjects = () => {
  return (
    <Card sx={{ width: 400, mt: "5rem", backgroundColor:"#0f203b" }}>
      <CardMedia component="img" height="450" image={logo} alt="Paella dish" />
      <CardContent></CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:"red"}} />
        </IconButton>
        <IconButton onClick={()=>console.log("test")} aria-label="share">
          <ShareIcon   sx={{color:"red"}}/>
        </IconButton >
      </CardActions>
    </Card>
  );
};
export default CardProjects;
