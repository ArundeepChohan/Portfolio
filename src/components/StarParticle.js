import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import config from "./stars-config.json";

const particlesInit = async (main) => {
  await loadFull(main);
};

const StarParticle = ({ theme }) => {
  const [loaded, setLoaded] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    if (myRef && loaded) {
      myRef.current.children[0].children[0].style.setProperty(
        "position",
        "absolute",
        "important"
      );
    }
  }, [myRef, loaded]);

  return (
    <div ref={myRef} className="canvas-parent">
      <Particles
        loaded={() => setLoaded(true)}
        init={particlesInit}
        options={config}
      />
    </div>
  );
};

export default StarParticle;
