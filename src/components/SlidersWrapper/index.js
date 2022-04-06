import { useGlassContext } from "../../context/GlassContext";
import { Slider } from "../Slider";
import { RangeContainer, Range } from "./styles";

export function SlidersWrapper() {
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
    <>
      <RangeContainer>
        <Slider
          title="blur"
          min="0"
          max="100"
          value={glassStyle.blur}
          handleChange={handleDragBlur}
        />
      </RangeContainer>
      <RangeContainer>
        <Slider
          title="Shadow"
          min="0"
          max="100"
          value={glassStyle.shadow}
          handleChange={handleShadow}
        />
      </RangeContainer>
      <RangeContainer>
        <Slider
          title="Shadow transparency"
          min="0"
          max="10"
          value={glassStyle.shadowTransparency}
          handleChange={handleShadowTransparency}
        />
      </RangeContainer>
      <RangeContainer>
        <Slider
          title="Outline"
          min="0"
          max="10"
          value={glassStyle.outline}
          handleChange={handleOutline}
        />
      </RangeContainer>
      <RangeContainer>
        <Slider
          title="Outline transparency"
          min="0"
          max="10"
          value={glassStyle.outlineTransparency}
          handleChange={handleOutlineTransparency}
        />
      </RangeContainer>
      <RangeContainer>
        <Slider
          title="Outline color"
          min="0"
          max="256"
          value={glassStyle.outlineColor}
          handleChange={handleOutlineColor}
        />
      </RangeContainer>
    </>
  );
}
