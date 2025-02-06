import aeimportaciones from "../assets/svg/img/4.jpg";
import sneakers from "../assets/svg/img/sneakers.jpg";
import portfolio from "../assets/svg/img/portfolio.jpg";
import maintenance from "../assets/svg/img/mantenimiento.jpg";
import api from "../assets/svg/img/api.jpg";
import crud from "../assets/svg/img/crud.png";
import { FormattedMessage } from "react-intl";

const DataProjects = [
  {
    id: "1",
    title: (
      <FormattedMessage
        id="project-title-API-Ecommerce-ExtradosStore"
        defaultMessage="Ecommerce API"
      />
    ),
    img: api,
    description: (
      <FormattedMessage
        id="project-description-API-Ecommerce-ExtradosStore"
        defaultMessage="Registro de usuarios, login con token JWT, Roles, ABM de usuarios, productos y ofertas con fecha de expiración, manejo de huso horario, carro de compras."
      />
    ),
    technologies: ".Net, Dapper, SQl Server,JWT ,Swagger.",
    linkToCode:
      "https://github.com/Alan-Erriu/ExtradosStore"
  },
  {
    id: "2",
    title: (
      <FormattedMessage
        id="project-title-WebForm-CRUD"
        defaultMessage="Registro de usuarios y un login simple, ABM completo de empleados."
      />
    ),
    img: crud,
    description: (
      <FormattedMessage
        id="project-description-WebForm-CRUD"
        defaultMessage="Registro de usuarios y un login simple, abm completo de empleados."
      />),
    technologies: ".Net, Web Form, Data reader, dapper, JQuery, Data Grid, Grid view.",
    linkToCode:
      "https://github.com/Alan-Erriu/WebFormEmpleadosCrud",
  }
  ,
  {
    id: "3",
    title: (
      <FormattedMessage
        id="project-title-mantenimiento"
        defaultMessage="Residential maintenance"
      />
    ),
    img: maintenance,
    description: (
      <FormattedMessage
        id="project-description-mantenimiento"
        defaultMessage="Website for home maintenance services: Painting, plumbing, etc."
      />
    ),
    technologies: "React.js, MaterialUI, EmailJS, Photoshop, Netlify.",
    linkToCode:
      "https://github.com/Alan-Erriu/react-servicio-de-mantenimiento-Damian",
    linkToDeploy: "https://mantenimiento-residencial.netlify.app/",
  },

];
export default DataProjects;
