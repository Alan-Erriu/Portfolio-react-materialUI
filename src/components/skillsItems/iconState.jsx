import React from "react";

//all image url from icons
const imgReact =
  "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg";
const imgJs =
  "https://profilinator.rishav.dev/skills-assets/javascript-original.svg";

const sqlServer =
  "https://proyectoa.com/wp-content/uploads/2008/10/sql-server.png";
const imgNet =
  "https://profilinator.rishav.dev/skills-assets/dot-net-original-wordmark.svg";
const imgCSharp =
  "https://profilinator.rishav.dev/skills-assets/csharp-original.svg";
// all icons and titles
const allIcons = [
  {
    img: imgNet,
    text: ".Net",
  },
  {
    img: imgCSharp,
    text: "C#",
  },
  { img: sqlServer, text: "SQL Server" },
  { img: imgReact, text: "React" },

  {
    img: imgJs,
    text: "JavaScript",
  },
];
//only icons and titles for backEnd
const backEndIcons = [
  {
    img: imgNet,
    text: ".Net",
  },
  {
    img: imgCSharp,
    text: "C#",
  },
];
//only icons and titles for frontEnd
const frontEndIcons = [
  { img: imgReact, text: "React" },
  {
    img: imgJs,
    text: "JavaScript",
  },
];
const dataBaseIcons = [
  { img: sqlServer, text: "SQL Server" },
];
export { frontEndIcons, backEndIcons, allIcons, dataBaseIcons };
