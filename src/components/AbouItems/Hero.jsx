import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import alan from "../assets/svg/alan.jpg";

export const Hero = () => {
  return (
    <Card sx={{ width: 345, height: 500 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="100%"
          
          image={alan}
          alt="alan erriu"
        />
      </CardContent>
    </Card>
  );
};
export default Hero;
