import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BackAssetType, selectMovement } from "../store/backgroundSlice";

type StyledMountainProps = {
  scale: number;
  left: number;
};

const StyledMountain = styled.div`
  position: absolute;
  bottom: 5%;
  transform-origin: bottom left;
  transform: scale(${(props: StyledMountainProps) => props.scale});
  left: ${(props: StyledMountainProps) => props.left + "px"};
`;

const MountainSvg = styled.svg`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
`;

type Props = {
  backAsset: BackAssetType;
};

const Mountain = (props: Props) => {
  const scale = props.backAsset.height / 392;
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
      <StyledMountain scale={scale} left={props.backAsset.left}>
        <MountainSvg
          x="-1"
          y="-1"
          width="790"
          height="392"
          xmlns="http://www.w3.org/2000/svg"
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
          <g>
            <path
              stroke="none"
              fill="url(#grad1)"
              id="svg_3"
              fill-opacity="null"
              stroke-opacity="null"
              stroke-width="1.5"
              d="m18.5,381.05774c0,0 1,0 3,0c0,0 2.82375,-1.82324 5,-2.45345c0.97325,-0.28186 2.07612,-0.75727 3,-1.22673c1.30656,-0.6639 2,-1.22672 3,-2.45345c1,-1.22673 1.69344,-1.78955 3,-2.45345c0.92388,-0.46945 1,0 2,-1.22673c0,0 1,-1.22673 2,-1.22673c1,0 2,-1.22672 2,-1.22672c1,0 1,0 2,0c0,0 0,0 0,0c1,-1.22673 2,-1.22673 2,-1.22673c2,-1.22673 3.132,-2.15328 7,-4.9069c3.11848,-2.22002 6.88152,-5.14032 10,-7.36035c1.934,-1.37681 2.82375,-3.04997 5,-3.68017c0.97325,-0.28187 2.70546,-1.6514 5,-3.68017c1.81399,-1.6039 3.82375,-3.04997 6,-3.68017c0.97325,-0.28187 2,-1.22673 2,-1.22673c1,-1.22673 2,-1.22673 3,-2.45345c1,-1.22673 2.85273,-2.66581 4,-3.68018c1.81399,-1.60389 2.85273,-2.6658 4,-3.68017c1.814,-1.60389 3,-2.45345 4,-3.68017c1,-1.22672 3.07612,-1.98399 4,-2.45345c1.30656,-0.66391 3.02675,-0.94486 4,-1.22673c2.17625,-0.6302 1.82375,-1.82325 4,-2.45345c0.97325,-0.28187 1.69344,-1.78955 3,-2.45346c1.84776,-0.93891 3.69344,-1.78954 5,-2.45345c0.92388,-0.46945 1.61732,-0.09337 2,-1.22673c0.5412,-1.60277 2.41886,-1.74053 4,-3.68017c1.58114,-1.93963 3,-2.45345 4,-3.68017c1,-1.22673 3.02675,-2.17159 4,-2.45345c2.17625,-0.63021 3.186,-2.07629 5,-3.68017c1.14727,-1.01438 1.82375,-3.04997 4,-3.68017c1.9465,-0.56368 3,-1.22673 4,-1.22673c0,0 1,0 1,0c0,0 1,0 1,0c1,0 2,0 4,0c1,0 3.02675,0.28186 4,0c2.17625,-0.63021 3.15224,-1.51454 5,-2.45346c1.30656,-0.6639 3,-2.45345 3,-2.45345c1,-1.22673 2.29289,-0.35932 3,-1.22673c0.70711,-0.8674 2,-1.22672 3,-2.45345c1,-1.22673 2,-2.45345 3,-3.68017c1,-1.22673 1,-1.22673 2,-2.45345c1,-1.22673 2.90633,-2.58029 4,-3.68018c2.78833,-2.80415 4.41885,-2.96726 6,-4.90689c1.58115,-1.93964 1.69344,-3.01628 3,-3.68017c0.92387,-0.46946 1.01291,0.1965 2,0c3.12144,-0.62138 8,-4.9069 12,-7.36036c4,-2.45345 8.186,-6.98318 10,-8.58707c1.14726,-1.01438 1,-1.22673 2,-2.45346c0,0 0.61731,-0.09337 1,-1.22673c0.5412,-1.60277 1,-2.45345 3,-4.90689c1,-1.22673 2,-3.68017 3,-4.9069c1,-1.22673 3.1731,-3.4995 4,-4.9069c1.30745,-2.22528 3,-3.68017 3,-3.68017c1,-1.22673 1,-1.22673 1,-1.22673c1,-1.22672 1.29289,-1.58604 2,-2.45345c1.41422,-1.73486 0.69255,-3.90835 2,-6.13363c0.8269,-1.40739 3.69255,-5.13507 5,-7.36035c0.8269,-1.40739 2,-1.22672 3,-2.45345c0,0 0.29289,-0.35933 1,-1.22673c0.70711,-0.8674 1.69344,-1.78955 3,-2.45345c0.92387,-0.46945 3.07613,-0.75727 4,-1.22673c1.30656,-0.6639 2.02675,-2.17159 3,-2.45345c2.17625,-0.63021 3,-2.45346 4,-3.68017c1,-1.22673 2,-2.45346 2,-3.68017c0,0 1.4588,-0.85068 2,-2.45346c0.38269,-1.13336 0,-3.68017 2,-6.13362c1,-1.22673 1,-3.68017 2,-4.9069c1,-1.22673 1.07613,-1.98399 2,-2.45345c1.30656,-0.66391 2,-2.45346 2,-2.45346c1,-1.22673 1.07613,-0.75726 2,-1.22673c1.30656,-0.6639 2.5582,-3.09047 6,-6.13362c5.44197,-4.81165 11.42334,-7.88569 17,-13.49398c3.28101,-3.29963 6,-6.13362 9,-9.8138c2,-2.45346 3.4588,-3.30411 4,-4.9069c0.38269,-1.13334 1.69254,-2.68162 3,-4.9069c0.8269,-1.40737 2,-2.45345 3,-3.68017c2,-2.45345 4,-4.9069 6,-7.36035c1,-1.22673 2.07611,-1.98399 3,-2.45345c1.30655,-0.66391 1.29291,-0.3593 2,-1.22673c0.70709,-0.86743 1,-1.22673 1,-1.22673c0,-1.22673 1,-2.45345 1,-3.68017c0,-2.45345 0.4588,-3.30411 1,-4.9069c0.38269,-1.13333 0.85272,-3.89252 2,-4.9069c1.814,-1.60388 3,-3.68017 4,-4.90689c1,-1.22673 2,-2.45346 3,-3.68017c1,-1.22673 2.07611,-1.984 3,-2.45346c1.30655,-0.6639 2.70547,-2.87813 5,-4.9069c1.814,-1.60388 3.61731,-3.77357 4,-4.90689c0.5412,-1.60279 2.4588,-0.85066 3,-2.45346c0.38269,-1.13333 0.29291,-2.81275 1,-3.68017c0.70709,-0.86743 1,-1.22673 2,-2.45345c1,-1.22673 1.69254,-2.68162 3,-4.9069c0.8269,-1.40738 1.4588,-0.85066 2,-2.45345c0.38269,-1.13334 1,-2.45346 2,-3.68017c0,0 0.07971,0.18651 4,-2.45346c5.11145,-3.44207 9.95328,-7.44859 13,-9.8138c4.92722,-3.82506 8,-7.36036 10,-9.81381c2,-2.45345 4,-4.9069 6,-7.36035c1,-1.22673 3.41885,-4.19399 5,-6.13363c1.58115,-1.93963 3.70547,-2.87813 6,-4.90689c1.814,-1.60389 4,-3.68017 4,-3.68017c2,-2.45346 3,-3.68018 4,-4.9069c2,-2.45346 3.29291,-4.03947 4,-4.9069c0.70709,-0.86743 1,-1.22673 2,-2.45345c1,-1.22673 1.61731,-1.32012 2,-2.45346c0.5412,-1.60279 1.29291,-1.58602 2,-2.45345c0.70709,-0.86743 1,-1.22673 2,-1.22673c0,0 0,-1.22673 1,-1.22673c0,0 1.07611,-0.75728 2,-1.22672c1.30655,-0.66391 2,-1.22673 2,-1.22673c1,0 1,0 1,0c1,0 2,0 3,0c0,0 1,0 1,0c1,0 1,1.22673 1,1.22673c0,0 0,0 1,0c0,0 -0.30655,0.56282 1,1.22672c0.92389,0.46944 1,0 1,0c1,0 1.29291,-0.86743 2,0c0.70709,0.86744 1,1.22673 1,1.22673c0,0 0.29291,0.3593 1,1.22673c0.70709,0.86743 1,0 2,0c0,0 0,0 0,0c0,0 0,1.22672 1,1.22672c0,0 0.29291,-0.86743 1,0c0.70709,0.86744 0.29291,1.58603 1,2.45346c0.70709,0.86743 2,1.22673 3,2.45345c0,0 0,1.22673 0,1.22673c0,0 0,0 1,1.22673c0,0 1,1.22672 1,1.22672c1,1.22673 1.69345,1.78955 3,2.45346c0.92389,0.46945 1,1.22672 2,2.45345c1,1.22673 2.4588,2.07738 3,3.68017c0.38269,1.13334 1.07611,1.98399 2,2.45346c1.30655,0.6639 2.07611,1.98399 3,2.45345c1.30655,0.66391 2.1731,2.2728 3,3.68017c1.30746,2.22528 2.9176,2.92803 4,6.13363c0.38269,1.13333 1,2.45345 1,2.45345c1,1.22673 0.61731,1.32012 1,2.45345c0.5412,1.60279 1.4588,2.07739 2,3.68017c0.38269,1.13334 0.61731,2.54685 1,3.68018c0.5412,1.60278 2,2.45345 2,2.45345c0,1.22673 1,1.22673 1,2.45345c0,0 0,1.22673 0,1.22673c0,1.22673 0,1.22673 0,1.22673c2,1.22672 3.70547,4.10485 6,6.13362c1.814,1.60389 3,3.68017 3,3.68017c1,1.22673 1.07611,1.984 2,2.45346c1.30655,0.6639 0.29291,1.58602 1,2.45345c0.70709,0.86743 3,1.22673 4,2.45345c1,1.22673 3.41885,1.74054 5,3.68017c1.58115,1.93964 3,3.68018 4,4.9069c1,1.22673 2.52017,2.85051 4,4.9069c2.38617,3.31584 6.41885,3.99493 8,9.81381c0.63245,2.32754 1.00681,2.25109 3,2.45345c6.06204,0.61546 10.08743,2.20066 15,4.9069c4.07965,2.24739 6.85272,3.89252 8,4.9069c1.81396,1.60388 3,2.45345 4,3.68017c1,1.22672 1.69342,3.01627 3,3.68017c1.84778,0.9389 3.18604,0.84957 5,2.45345c1.14728,1.01438 2.69257,3.90835 4,6.13363c0.8269,1.40737 1.61731,2.54684 2,3.68017c0.5412,1.60279 2.1731,2.2728 3,3.68017c1.30743,2.22528 1.29291,2.81275 2,3.68017c0.70709,0.86743 1.47424,1.40994 2,2.45345c1.1756,2.33337 2,2.45346 3,3.68017c1,1.22673 2,2.45346 2,2.45346c1,1.22672 2.41888,1.74053 4,3.68017c1.58112,1.93963 2.18604,3.30302 4,4.9069c2.29456,2.02877 3,3.68017 4,4.90689c2,2.45346 2.69257,3.90835 4,6.13363c0.8269,1.40739 2,2.45345 3,3.68017c1,1.22673 1.61731,3.77354 2,4.9069c0.5412,1.60278 2,1.22672 3,3.68017c1,2.45345 2.41888,4.19399 4,6.13362c1.58112,1.93964 3,4.9069 4,6.13363c2,2.45345 3,3.68017 4,4.9069c1,1.22672 2.41888,2.96726 4,4.90689c1.58112,1.93964 4,3.68017 6,6.13363c2,2.45345 4,3.68017 7,6.13362c3,2.45346 6,4.9069 8,8.58708c2,3.68017 2.20679,4.67708 4,7.36035c2.28589,3.42052 5.61383,6.49797 8,9.81381c1.47986,2.0564 3,3.68017 5,6.13362c2,2.45346 4.34619,4.54559 6,7.36036c1.30743,2.22527 1.70544,4.10485 4,6.13362c1.81396,1.60389 5.21167,4.5562 8,7.36035c2.18732,2.19974 4.41888,4.19399 6,6.13363c1.58112,1.93963 3,3.68017 4,4.90689c2,2.45346 3.85272,3.89252 5,4.9069c1.81396,1.6039 3.70544,2.87813 6,4.9069c1.81396,1.60389 2.85272,2.6658 4,3.68017c1.81396,1.6039 2.41888,4.19399 4,6.13363c1.58112,1.93963 3,2.45345 4,3.68017c1,1.22672 2.18604,3.303 4,4.90689c2.29456,2.02877 3.18604,4.52973 5,6.13363c1.14728,1.01438 1.85272,3.89252 3,4.9069c1.81396,1.60389 3.18604,3.303 5,4.9069c2.29456,2.02876 3.31073,4.33636 5,6.13362c2.38898,2.54169 3.18604,2.07629 5,3.68017c1.14728,1.01438 1.79486,2.72359 5,6.13363c3.77728,4.01875 7.22272,5.79505 11,9.8138c3.20514,3.41004 3.18604,3.303 5,4.9069c1.14728,1.01438 4.0979,3.4648 6,4.9069c4.25323,3.22464 8.37201,6.60603 12,9.8138c2.29456,2.02877 3.93414,5.08391 6,6.13363c2.92157,1.48451 3.3869,3.57909 6,4.90689c0.92389,0.46946 2.58582,0.7186 4,2.45346c0.70709,0.8674 1.47424,2.63666 2,3.68017c1.1756,2.33335 3.18604,2.07629 5,3.68017c-783.77025,2.48626 -784.70711,0.86739 -784,-0.00001c0.70711,-0.8674 1,-1.22673 1,-1.22673c1,0 1,-1.22672 2,-2.45345c1,-1.22673 3.07844,-2.19566 6,-3.68017c2.06586,-1.04973 5.69344,-1.78955 7,-2.45345c0.92388,-0.46946 2,0 2,0l0,0"
            />
          </g>
        </MountainSvg>
      </StyledMountain>
    </div>
  );
};

export default Mountain;
