import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BackAssetType, selectMovement } from "../store/backgroundSlice";

type StyledCloudProps = {
  scale: number;
  left: number;
};

const StyledCloud = styled.div`
  position: absolute;
  bottom: 5%;
  transform-origin: bottom left;
  transform: scale(${(props: StyledCloudProps) => props.scale});
  left: ${(props: StyledCloudProps) => props.left + "px"};
`;

const CloudSvg = styled.svg`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
`;

type Props = {
  backAsset: BackAssetType;
};

const Cloud = (props: Props) => {
  const scale = props.backAsset.height / 277.54709;
  const movement = useSelector(selectMovement);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        transform: `translateX(${
          movement * props.backAsset.movementMultiplier
        }px)`,
      }}
    >
      <StyledCloud scale={scale} left={props.backAsset.left}>
        <CloudSvg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1041.5837"
          height="277.54709"
          viewBox="0 0 1041.5837 277.54709"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor={props.backAsset.topColor}
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor={props.backAsset.bottomColor}
                stopOpacity={1}
              />
            </linearGradient>
          </defs>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="url(#grad1)"
            d="m 804.26563,198.57171 c 8.962,-5.053 18.31,-9.442 27.853,-3.347 10.138,6.471 7.963,16.832 5.836,25.455 15.764,-1.103 41.518,-9.884 63.15,5.042 4.726,3.263 9.864,6.182 15.356,9.734 18.465,-5.229 37.366,7.395 55.619,16.769 1.931,0.996 4.469,1.167 6.714,1.129 13.88,-0.247 25.38907,7.378 54.67707,9.138 8.457,0.51 13.538,14.645 -1.486,14.748 -14.017,0.099 -996.360075,0.656 -1017.937075,-0.029 -18.7169997,0 -19.7949997,-14.766 3.239,-16.566 3.004,-0.236 54.708,-3.236 71.647,-10.993 13.685005,-8.679 29.006005,-12.385 44.920005,-12.849 7.538,-0.223 15.596,0.588 21.218,7.833 8.678,-9.712 18.683,-16.185 31.594,-17.071 1.987,-19.607 23.358,-32.175 42.375,-19.722 2.942,-8.454 9.101,-13.575 17.39,-16.121 8.11,-2.487 15.914,-0.799 24.146,3.104 0.951,-17.697 8.675,-31.1 24.354,-40.384 -10.513,-6.159 -18.208,-13.58 -15.22,-26.186 2.842,-12.018 12.503,-16.193 23.745,-17.941 -9.992,-13.955004 -10.6,-22.130004 -2.803,-33.141004 6.928,-9.782 20.232,-12.451 37.283,-7.231 0.276,-4.637 0.158,-9.22 0.873,-13.678 4.74,-29.573 29.796,-50.5429998 57.948,-55.26499982 17.333,-2.90799998 33.805,0.37700002 47.438,11.84599982 12.174,10.245 17.959,23.846 16.394,40.088 -0.289,3.024 -0.491,6.058 -0.764,9.467 11.84,0.315 21.414,4.791 26.725,16.059 5.028,10.66 4.867,21.370003 -0.897,32.437004 6.743,-2.012 12.549,-4.572 18.584,-5.307 5.85,-0.712 12.201,-0.537 17.849,1.018 7.944,2.189 11.007,7.706 10.91,15.942 -0.021,1.768 -0.225,3.535 -0.37,5.601 7.921,0.636 14.612,3.484 19.734,9.583 5.347,6.366 5.481,13.684 4.101,21.803 15.859,-3.578 30.036,-2.277 39.107,14.337 5.574,-7.008 12.375,-11.091 21.295,-10.201 8.998,0.901 14.034,7.169 18.453,14.354 13.353,-9.881 26.996,-14.51 42.396,-3.525 1.206,-7.111 4.524,-12.834 10.662,-16.483 6.115,-3.639 12.669,-3.273 19.605,-1.378 3.838,-15.711 14.277,-24.774 29.479,-28.453 18.672,-4.521 38.405,4.506 42.841,21.334 2.347,8.912 5.205,14.722 13.528,19.365 7.571,4.229 10.596,12.814 10.441,21.879 -0.039,2.476 -0.002,4.954 -0.002,7.806 z"
          />
        </CloudSvg>
      </StyledCloud>
    </div>
  );
};

export default Cloud;
