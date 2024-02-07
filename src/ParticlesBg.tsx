import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
// import particlesConfig from "./particles.config";
import { sideConfetti, starry, colors } from "./particles.config";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const options = [sideConfetti, starry, colors];

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      particlesLoaded={particlesLoaded}
      options={options[Math.floor(Math.random() * 3)]}
    />
  );
};

export default ParticlesBg;
