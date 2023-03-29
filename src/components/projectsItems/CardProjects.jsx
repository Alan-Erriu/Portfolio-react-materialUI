import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import aeimportaciones from "../assets/svg/4.jpg";

export const CardProjects = () => {
  return (
    <Card sx={{ width: 400, mt: "5rem", backgroundColor: "#0f203b" }}>
      <CardMedia
        className="imgProject"
        component="img"
        height="400"
        image={aeimportaciones}
        alt="project"
      />
    </Card>
  );
};
export default CardProjects;
