import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Hero from "./AbouItems/Hero";


const About = () => {
  return (
    <Grid sx={{ mt: "12rem" }} container>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
        <Box
          sx={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            xs: "colunm",
            mt: "1rem",
          }}
        >
       <Hero/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
      <Box
          sx={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            xs: "colunm",
            mt: "7rem",
            padding:"2rem"
          }}
        >
        <Typography sx={{ width: "100%", backgroundColor:"#0f203b",position:"relative" }} variant="h2" color={"white"} fontSize="35px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          rem modi nemo exercitationem, cum omnis maiores animi quia qui
          eligendi sint itaque explicabo? Dolor vel beatae optio esse facere
          repellendus?
        </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
