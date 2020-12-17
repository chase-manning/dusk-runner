import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovement } from "../store/backgroundSlice";

type StyledCloudProps = {
  scale: number;
  left: string;
};

const StyledCloud = styled.div`
  position: absolute;
  bottom: 5%;
  transform-origin: bottom left;
  transform: scale(${(props: StyledCloudProps) => props.scale});
  left: ${(props: StyledCloudProps) => props.left};
`;

const CloudSvg = styled.svg`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
`;

export type CloudType = {
  topColor: string;
  bottomColor: string;
  height: number;
  left: string;
  movementMultiplier: number;
};

type Props = {
  cloud: CloudType;
};

const Cloud = (props: Props) => {
  const scale = props.cloud.height / 392;
  const movement = useSelector(selectMovement);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        transform: `translateX(${movement * props.cloud.movementMultiplier}px)`,
      }}
    >
      <StyledCloud scale={scale} left={props.cloud.left}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              stopColor={props.cloud.topColor}
              stopOpacity={1}
            />
            <stop
              offset="100%"
              stopColor={props.cloud.bottomColor}
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <g>
          <title>Layer 1</title>
          <ellipse
            ry="56.5"
            rx="74"
            id="svg_1"
            cy="336.95313"
            cx="117.5"
            stroke-opacity="null"
            stroke-width="0"
            stroke="#000"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="42"
            rx="54.5"
            id="svg_3"
            cy="274.45312"
            cx="115"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="42"
            rx="54.5"
            id="svg_4"
            cy="372.45312"
            cx="57"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_5"
            cy="242.95313"
            cx="174"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_6"
            cy="150.95313"
            cx="170"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_7"
            cy="124.95313"
            cx="262"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_8"
            cy="160.95313"
            cx="349"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_9"
            cy="99.95313"
            cx="445"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_10"
            cy="140.95313"
            cx="523"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_11"
            cy="177.95313"
            cx="611"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="83.5"
            id="svg_12"
            cy="225.95313"
            cx="622"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="57.5"
            rx="46.5"
            id="svg_13"
            cy="267.95313"
            cx="680"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <ellipse
            stroke="#000"
            ry="99.5"
            rx="90.50001"
            id="svg_14"
            cy="362.95313"
            cx="690.00001"
            stroke-opacity="null"
            stroke-width="0"
            fill="#ff0000"
          />
          <rect
            id="svg_15"
            height="259"
            width="527"
            y="149.45313"
            x="127.5"
            stroke-opacity="null"
            stroke-width="0"
            stroke="#000"
            fill="#ff0000"
          />
          <rect
            id="svg_16"
            height="0"
            width="1"
            y="174.45313"
            x="870.5"
            stroke-opacity="null"
            stroke-width="0"
            stroke="#000"
            fill="#ff0000"
          />
        </g>
      </StyledCloud>
    </div>
  );
};

export default Cloud;
