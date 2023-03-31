import aeimportaciones from "../assets/svg/img/4.jpg";
import sneakers from "../assets/svg/img/sneakers.jpg";
import crudMern from "../assets/svg/img/crudMern.jpg";
import portfolio from "../assets/svg/img/portfolio.jpg";
import { FormattedMessage } from "react-intl";


const DataProjects = [
  {
    id: "1",
    title: (
      <FormattedMessage
        id="project-title-aeimportaciones"
        defaultMessage="AE.IMPORTATIONS"
      />
    ),
    img: (aeimportaciones)  ,
    description: (
      <FormattedMessage
        id="project-description-aeimportaciones"
        defaultMessage="Pc peripherals and accessories store"
      />
    ),
    technologies: (
   "Reac.js, MaterialUI, Reducer, React Router, Context, Photoshop, GithubPages"
    ),
    linkToCode:
      "https://github.com/Alan-Erriu/Ecommerce-aeimportaciones-react-materialui",
    linkToDeploy:
      "https://alan-erriu.github.io/Ecommerce-aeimportaciones-react-materialui/",
  },
  {
    id: "2",
    title: (
      <FormattedMessage
        id="project-title-fontendMentor"
        defaultMessage="E-Commerce React Challenge"
      />
    ),
    img: (sneakers)  ,
    description: (
      <FormattedMessage
        id="project-description-fontendMentor"
        defaultMessage="Men's shoe store"
      />
    ),
    technologies: (
   "Reac.js, Tailwindcss, Context, GithubPages"
    ),
    linkToCode:
      "https://github.com/Alan-Erriu/E-Commerce-Tailwind-React",
    linkToDeploy:
      "https://alan-erriu.github.io/E-Commerce-Tailwind-React/",
  },
  {
    id: "3",
    title: (
      <FormattedMessage
        id="project-title-crud"
        defaultMessage="CRUD MERN STACK"
      />
    ),
    img: (crudMern)  ,
    description: (
      <FormattedMessage
        id="project-description-crud"
        defaultMessage="simple app to create products and save them in a database"
      />
    ),
    technologies: (
   "Reac.js, MaterialUI, React Router, Node.js, Express, MongoDB, RenderHost, github, netlifyHost"
    ),
    linkToCode:
      "https://github.com/Alan-Erriu/Crud-mongo-express-node-react",
    linkToDeploy:
      "https://aeimportaciones.netlify.app/",
  },
  {
    id: "4",
    title: (
      <FormattedMessage
        id="project-title-portfolio"
        defaultMessage="Personal Portfolio"
      />
    ),
    img: (portfolio)  ,
    description: (
      <FormattedMessage
        id="project-description-portfolio"
        defaultMessage="This personal portfolio site"
      />
    ),
    technologies: (
   "React.js, MaterialUI, React Router, React intl, Photoshop, netlify"
    ),
    linkToCode:
      "https://github.com/Alan-Erriu/Portfolio-react-materialUI",
   
  },
];
export default DataProjects;
