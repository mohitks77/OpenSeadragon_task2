import OpenSeaDragon from "openseadragon";
import React, { useEffect, useState } from "react";
const OpenSeaDragonViewer = ({ image }) => {
  const [viewer, setViewer] = useState(null);
  useEffect(() => {
    if (image && viewer) {
      viewer.open(image.source);
    }
  }, [image]);
  const InitOpenseadragon = () => {
    viewer && viewer.destroy();
    setViewer(
      OpenSeaDragon({
        id: "openSeaDragon",
        prefixUrl: "openseadragon-images/",
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        zoomPerScroll: 1.5,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
      })
    );
  };
  useEffect(() => {
    InitOpenseadragon();
    return () => {
      viewer && viewer.destroy();
    };
  }, []);
  return (
    <div
      id="openSeaDragon"
      style={{
        height: "1080px",
        width: "1920px",
      }}
    ></div>
  );
};
export { OpenSeaDragonViewer };
