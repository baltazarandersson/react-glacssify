import { useEffect, useState } from "react";
import { useGlassContext } from "../../context/GlassContext";
import {
  Div,
  RangeContainer,
  MainWrapper,
  Title,
  Description,
  Range,
} from "./styles";

export function Main() {
  const {
    glassStyle,
    updateBlur,
    updateShadow,
    updateShadowTransparency,
    updateOutline,
    updateOutlineTransparency,
    updateOutlineColor,
  } = useGlassContext();

  const handleDragBlur = (e) => {
    updateBlur(e.target.value);
  };
  const handleShadow = (e) => {
    updateShadow(e.target.value);
  };
  const handleShadowTransparency = (e) => {
    updateShadowTransparency(e.target.value);
  };
  const handleOutline = (e) => {
    updateOutline(e.target.value);
  };
  const handleOutlineTransparency = (e) => {
    updateOutlineTransparency(e.target.value);
  };
  const handleOutlineColor = (e) => {
    updateOutlineColor(e.target.value);
  };

  return (
    <Div glassStyle={glassStyle}>
      <div>
        <Title>GLASS Effect Generator</Title>
        <Description>create your own glass effect!</Description>
      </div>
      <MainWrapper>
        <RangeContainer>
          <p>Blur</p>
          <Range
            type="range"
            min="0"
            max="100"
            value={glassStyle.blur}
            onChange={handleDragBlur}
          />
        </RangeContainer>
        <RangeContainer>
          <p>Shadow</p>
          <Range
            type="range"
            min="0"
            max="100"
            value={glassStyle.shadow}
            onChange={handleShadow}
          />
        </RangeContainer>
        <RangeContainer>
          <p>Shadow transparency</p>
          <Range
            type="range"
            min="0"
            max="10"
            value={glassStyle.shadowTransparency}
            onChange={handleShadowTransparency}
          />
        </RangeContainer>
        <RangeContainer>
          <p>Outline</p>
          <Range
            type="range"
            min="0"
            max="10"
            value={glassStyle.outline}
            onChange={handleOutline}
          />
        </RangeContainer>
        <RangeContainer>
          <p>Outline transparency</p>
          <Range
            type="range"
            min="0"
            max="10"
            value={glassStyle.outlineTransparency}
            onChange={handleOutlineTransparency}
          />
        </RangeContainer>
        <RangeContainer>
          <p>Outline color</p>
          <Range
            type="range"
            min="0"
            max="256"
            value={glassStyle.outlineColor}
            onChange={handleOutlineColor}
          />
        </RangeContainer>
      </MainWrapper>
    </Div>
  );
}
