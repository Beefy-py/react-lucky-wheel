import React, { useRef, useState } from "react";
import styled from "styled-components";

type Segment = { name: string; image: string; hexColor: string };

type Props = {
  wheel: {
    width: number;
    height: number;
    segments: Array<Segment>;
    backgroundColor: string;
    timingFunction: string;
  };
  spinBtn: {
    text: string;
    width: number;
    height: number;
    backgroundColor: string;
    borderWidth: number;
    borderColor: string;
  };
};

const Wheel = ({ wheel, spinBtn }: Props) => {
  const SpinBtn = styled.div`
    &:after {
      content: "";
      position: absolute;
      top: -28px;
      width: 20px;
      height: 30px;
      background-color: ${spinBtn.backgroundColor};
      clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
    }
  `;

  if (wheel.segments.length < 4) {
    throw new Error("Only allowing more than 4 segments");
  }

  if (wheel.segments.length > 20) {
    throw new Error("Only allowing less than 21 segments");
  }

  const wheelRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [currentSegment, setCurrentSegmentIndex] = useState<number>(0);

  const rotationPerSegment = 360 / wheel.segments.length;

  const spin = () => {
    let newValue: number;
    if (wheelRef.current) {
      newValue =
        Math.floor(Math.random() * (360 - rotationPerSegment + 1)) +
        rotationPerSegment;
      console.log({ newValue, currentValue: value });
      wheelRef.current.style.transform = `rotate(${newValue}deg)`;
      setValue(newValue);
    }

    // Calculate the current segment
    const newCurrentSegment = Math.floor(
      (newValue! % 360) / rotationPerSegment
    );
    setCurrentSegmentIndex(newCurrentSegment);
    console.log(`The wheel landed on segment ${newCurrentSegment}`);
  };

  const clipPathValues: Record<number, number> = {
    4: 100,
    5: 90,
    6: 80,
    7: 65,
    8: 60,
    9: 55,
    10: 50,
    11: 45,
    12: 42,
    13: 40,
    14: 37,
    15: 35,
    16: 33,
    17: 31,
    18: 30,
    19: 28,
    20: 27,
  };

  return (
    <section
      className="wheel-container"
      style={{
        position: "relative",
        width: `${wheel.width}px`,
        height: `${wheel.height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SpinBtn
        className="spinBtn"
        style={{
          position: "absolute",
          width: `${spinBtn.width}px`,
          height: `${spinBtn.height}px`,
          background: `${spinBtn.backgroundColor}`,
          borderRadius: "50%",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "uppercase",
          fontWeight: 600,
          color: "#333",
          letterSpacing: "0.1em",
          border: `${spinBtn.borderWidth}px solid ${spinBtn.borderColor}`,
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={spin}
      >
        {spinBtn.text}
      </SpinBtn>
      <div
        className="wheel"
        ref={wheelRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: wheel.backgroundColor,
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: `0 0 0 5px ${wheel.backgroundColor}, 0 0 0 15px #fff, 0 0 0 18px #111`,
          transition: `transform 5s ${wheel.timingFunction}`,
        }}
      >
        {wheel.segments.map((segment, index) => {
          // Calculate the rotation for each segment based on the total number of segments
          const rotation = 360 / wheel.segments.length;

          // Calculate clipPath based on the number of segments
          const clipPathValue = clipPathValues[wheel.segments.length];

          return (
            <div
              key={index + segment.name}
              style={{
                position: "absolute",
                width: "50%",
                height: "50%",
                background: segment.hexColor,
                transformOrigin: "bottom right",
                // Use the calculated rotation for the transform
                transform: `rotate(${rotation * (index + 0.5)}deg)`,
                // Use the calculated clipPathValue for the clipPath
                clipPath: `polygon(0 0, ${clipPathValue}% 0, 100% 100%, 0 ${clipPathValue}%)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  position: "relative",
                  // Rotate the text back so it's horizontal
                  transform: `rotate(45deg)`,
                  fontSize: "1em",
                  fontWeight: 700,
                  color: "white",
                  textShadow: "3px 5px 2px rgba(0,0,0,0.15)",
                }}
              >
                {segment.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wheel;
