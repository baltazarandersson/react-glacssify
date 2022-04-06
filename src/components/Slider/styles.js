import styled from "styled-components";
import { css } from "styled-components";

export const RangeContainer = styled.div`
  width: 40%;
`;
export const RangeValue = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  left: ${(props) => props.left}%;
`;
export const RangeValueSpan = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  top: -60px;
  line-height: 55px;
  transform: translateX(-50%) scale(0);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  ${(props) => {
    console.log(props);

    return (
      props.active &&
      css`
        transform: translateX(-50%) scale(1);
      `
    );
  }}

  &:after {
    position: absolute;
    content: "";
    width: 45px;
    height: 45px;
    background: rgb(150 134 170);
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border: 2px solid #fafafa;
    border-radius: 50% 50% 0rem 50%;
    z-index: -1;
  }
`;

export const RangeDiv = styled.div``;

export const Range = styled.input`
  -webkit-appearance: none;
  background: #fafafa;
  outline: none;
  height: 7px;
  border-radius: 3px;
  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background: rgb(150 134 170);
    border: 1px solid #fafafa;
    border-radius: 50%;
    z-index: 3;
    position: relative;
  }
`;
