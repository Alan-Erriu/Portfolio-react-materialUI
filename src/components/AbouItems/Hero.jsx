import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import logoAE from "../assets/logo.jpg"

export const Hero =() => {
  return (
    <Card sx={{ width: 345, height: 500 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="250"
          image={logoAE}
          alt="alan erriu"
        />
      </CardContent>
    </Card>
  );
}
export default Hero