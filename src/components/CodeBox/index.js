import { useGlassContext } from "../../context/GlassContext";
import { CodeBoxContainer, CodeLine, ClipboardCopy } from "./styles";
import { MdOutlineContentCopy, MdOutlineDone } from "react-icons/md";
import { useEffect, useState } from "react";

export function CodeBox() {
  const { glassStyle } = useGlassContext();
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  useEffect(() => {
    setIsCopySuccess(false);
  }, [glassStyle]);

  function handleCopy() {
    const textToCopy = `backdrop-filter: blur(${
      glassStyle.blur
    }px); \nbox-shadow: 0px 0px ${glassStyle.shadow * 2}px rgba(0, 0, 0, ${
      glassStyle.shadowTransparency / 10
    }); \nborder: ${glassStyle.outline}px solid rgba(
      ${glassStyle.outlineColor},${glassStyle.outlineColor},
      ${glassStyle.outlineColor},${glassStyle.outlineTransparency / 10}
      );
    `;
    navigator.clipboard.writeText(textToCopy).then(
      function () {
        setIsCopySuccess(true);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  return (
    <CodeBoxContainer glassStyle={glassStyle}>
      <p>CSS generated code</p>
      <CodeLine>backdrop-filter: blur({glassStyle.blur}px);</CodeLine>
      <CodeLine>
        box-shadow: 0px 0px {glassStyle.shadow * 2}px rgba(0, 0, 0,{" "}
        {glassStyle.shadowTransparency / 10});
      </CodeLine>
      <CodeLine>
        border: {glassStyle.outline}px solid rgba(
        {glassStyle.outlineColor},{glassStyle.outlineColor},
        {glassStyle.outlineColor},{glassStyle.outlineTransparency / 10}
        );
      </CodeLine>

      <ClipboardCopy onClick={handleCopy}>
        {isCopySuccess ? (
          <MdOutlineDone cursorPointerStatus={false} />
        ) : (
          <MdOutlineContentCopy cursorPointerStatus={true} />
        )}
      </ClipboardCopy>
    </CodeBoxContainer>
  );
}
