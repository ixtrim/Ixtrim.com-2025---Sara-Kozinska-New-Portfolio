import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Container } from './styles';

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ["push", "repulse"],
          },
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 200,
            line_linked: {
              opacity: 0.35,
            },
          },
          bubble: {
            distance: 200,
            size: 10,
            duration: 2,
            opacity: 0.8,
            speed: 3,
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#fdb32b"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
          warp: true,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
          polygon: {
            nb_sides: 5,
          },
        },
        size: {
          value: { min: 3, max: 7 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
        shadow: {
          enable: true,
          color: "#000000",
          blur: 5,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Container>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </Container>
    );
  }

  return null;
};

export default Background;
