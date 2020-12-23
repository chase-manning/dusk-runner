import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BackAsset } from "../config/zones";
import { BackAssetType, selectBackAssets } from "../store/backgroundSlice";
import Cloud from "./Cloud";
import Mountain from "./Mountain";

const StyledBackgroundAssets = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundAssets = () => {
  const backAssets = useSelector(selectBackAssets);

  if (backAssets.length === 0) return null;

  let backAssetsSorted: BackAssetType[] = [...backAssets];

  backAssetsSorted.sort(
    (a: BackAssetType, b: BackAssetType) => b.height - a.height
  );

  return (
    <StyledBackgroundAssets>
      {backAssetsSorted.map((backAsset: BackAssetType) => {
        if (backAsset.backAssetType === BackAsset.MOUNTAIN)
          return <Mountain backAsset={backAsset} />;
        else if (backAsset.backAssetType === BackAsset.CLOUD)
          return <Cloud backAsset={backAsset} />;
        else return null;
      })}
    </StyledBackgroundAssets>
  );
};

export default BackgroundAssets;
