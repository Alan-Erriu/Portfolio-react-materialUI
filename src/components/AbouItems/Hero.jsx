import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import alan from "../assets/svg/img/alan1.jpg";

export const Hero = () => {
  return (
    <Card
      sx={{
        width: { xs: "60%", sm: "250px", md: "280px" },
        height: { xs: 400, md: 500 },

        backgroundColor: "#0f203b",
        boxShadow: " 0 0 2px 6px",
        color: "black",
      }}
    >
      <CardMedia component="img" height="100%" image={alan} alt="alan erriu" />
    </Card>
  );
};
export default Hero;
