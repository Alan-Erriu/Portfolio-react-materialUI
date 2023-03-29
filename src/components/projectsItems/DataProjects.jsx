import logo from "../assets/logo.jpg";
import aeimportaciones from "../assets/svg/4jpg";

export const initialState = {
  projects: [
    {
      id: "1",
      title: "A.EIMPORTACIONES",
      img: { aeimportaciones },
      description: "SHOP COMPUTERS COMPONENST",
      technologies: "Tecnologías: React.js Context react router MaterialUI",
      linkToCode:
        "https://github.com/Alan-Erriu/Ecommerce-aeimportaciones-react-materialui",
      linkToDeploy:
        "https://alan-erriu.github.io/Ecommerce-aeimportaciones-react-materialui/",
    },
    {
      id: "2",
      title: "SNEAKERS COMPANY",
      img: "https://media.licdn.com/dms/image/C4D22AQHNRvm_Fv8I8Q/feedshare-shrink_2048_1536/0/1678227098340?e=1682553600&v=beta&t=WA10vMio6vlfg9vpaTwhukuHMDCqGBC107VgW2fbyaw",
      descriptionEs:
        "El sitio lo cree con React.js. Para el carro de compras implemente useState y useContex. Para el css implemente Tailwindcss",
      descriptionEng: "SHOP ropa for mens",
      linkToCode: "https://github.com/Alan-Erriu/E-Commerce-Tailwind-React",
      linkToDeploy: "https://alan-erriu.github.io/E-Commerce-Tailwind-React/",
    },
    {
      id: "3",
      title: "CRUD STACK MERN",
      img: { logo },
      descriptionEs:
        "Manejo de peticiones get/post/put/delete, e implementación de base de datos con mongoDB interfaz grafica con react.js y material ui",
      descriptionEng: "CRUD mern stack",
      linkToCode: "https://github.com/Alan-Erriu/Crud-mongo-express-node-react",
      linkToDeploy: "https://aeimportaciones.netlify.app/",
    },
    {
      id: "4",
      title: "Portfolio Alan Erriu",
      img: { logo },
      descriptionEs:
        "TIENDA DE PERIFÉRICOS Y ACCESORIOS PARA PC SE IMPLEMENTÓ REACT Y MATERIAL UI PARA LA CREACIÓN DE LA PÁGINA. PARA EL CARRO DE COMPRAS SE IMPLEMENTÓ USEREDUCER, USECONTEX.  PARA LA NAVEGACIÓN REACT ROUTER.",
      descriptionEng: "SHOP COMPUTERS COMPONENST",
      linkToCode:
        "https://github.com/Alan-Erriu/Ecommerce-aeimportaciones-react-materialui",
      linkToDeploy:
        "https://alan-erriu.github.io/Ecommerce-aeimportaciones-react-materialui/",
    },
  ],
  texts: [
    (h1 = {
      titleEng: "Hi, i am Alan Erriu Front-End Developer",
      titleEsp: "Hola, soy Alan Erriu desarrollador front-end",
    }),
    (abouMe = {
      aboutEsp:
        "soy un desarrollador front-end con mas de un año de experiencia en React.js",
      abouteEng:
        "I am a front-end developer with more than a year of experience in React.js",
    }),
  ],
};
