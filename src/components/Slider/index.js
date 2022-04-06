import { useState } from "react";
import {
  Range,
  RangeValue,
  RangeDiv,
  RangeContainer,
  RangeValueSpan,
} from "./styles";

export function Slider({ title, min, max, value, handleChange } = {}) {
  const [showRangeValue, setShowRangeValue] = useState(false);

  return (
    <>
      <p>{title}</p>

      <RangeContainer>
        <RangeValue left={(value / max) * 90 + 5}>
          <RangeValueSpan active={showRangeValue}>{value}</RangeValueSpan>
        </RangeValue>

        <RangeDiv>
          <Range
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            onInput={() => {
              setShowRangeValue(true);
            }}
            onBlur={() => {
              setShowRangeValue(false);
            }}
          />
        </RangeDiv>
      </RangeContainer>
    </>
  );
}
