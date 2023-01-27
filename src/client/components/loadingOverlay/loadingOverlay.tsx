import React from "react";
import styled from "styled-components";
import { Loader } from "../loader";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Wrapper = styled.div`
  position: relative;
`;

interface ILoadingOverlay {
  children: React.ReactNode;
  isLoading: boolean;
}

const LoadingOverlay: React.FC<ILoadingOverlay> = ({ children, isLoading }) => {
  return (
    <Wrapper>
      {children}
      {isLoading && (
        <Overlay>
          <Loader />
        </Overlay>
      )}
    </Wrapper>
  );
};

export { LoadingOverlay };
