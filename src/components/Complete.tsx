import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PlayerState, selectState } from "../store/playerSlice";
import Player from "./Player";

const StyledComplete = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {
  complete: boolean;
};

const Header = styled.div`
  font-size: 4rem;
  text-align: center;
  color: var(--foregroundColor);
  opacity: ${(props: Props) => (props.complete ? "1" : "0")};
  transition: opacity 2s;
`;

const SubHeader = styled.div`
  font-size: 1.25rem;
  text-align: center;
  color: var(--foregroundColor);
  opacity: ${(props: Props) => (props.complete ? "1" : "0")};
  transition: 3s opacity 2s;
`;

const Complete = () => {
  const state = useSelector(selectState);

  return (
    <StyledComplete>
      <Text>
        <Header complete={state === PlayerState.COMPLETE}>
          Stage Complete
        </Header>
        <SubHeader complete={state === PlayerState.COMPLETE}>
          Tap to continue
        </SubHeader>
      </Text>
    </StyledComplete>
  );
};

export default Complete;
