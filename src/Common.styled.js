import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`

export const hover01 = css`
    &:hover {
        background-color: #33399b;
    }
`;

export const hover02 = css`
    &:hover {
        color: #33399b;
    }
    &:hover::after {
        border-left-color: #33399b;
        border-bottom-color: #33399b;
    }
`;

export const hover03 = css`
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }
`;