import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import particlesConfid from './particles-confid';

const Particle = () => {

  const particlesInit = async (main) => {

    await loadFull(main);
  };
  
  return (
    <Particles
    id="tsparticles"
      init={particlesInit}
      options={particlesConfid}
        
    />
  )
}

export default Particle;
