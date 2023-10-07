import React, { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
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
    show?: boolean;
  };
  pin: {
    width: number;
    height: number;
    backgroundColor: string;
    borderWidth: number;
    borderColor: string;
    show?: boolean;
  };
};

const Wheel = ({ wheel, spinBtn, pin }: Props) => {
  const [rotationValue, setRotationValue] = useState<number>(45);
  const [scope, animate] = useAnimate();

  if (wheel.segments.length < 4) {
    throw new Error("Only allowing more than 4 segments");
  }

  if (wheel.segments.length > 20) {
    throw new Error("Only allowing less than 21 segments");
  }

  if (wheel.segments.length % 4 !== 0) {
    throw new Error("The amount of items should be divisible by 4");
  }

  // const wheelRef = useRef<HTMLDivElement>(null);

  const spin = () => {
    setRotationValue((previousRotationValue) => {
      let result: number;
      const max = 360;
      const min = 10;

      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

      result = previousRotationValue + randomValue + 45;

      console.log("Rotate Degrees: ", result % 360);

      return result;
    });
  };

  const clipPathValues: Record<number, number> = {
    4: 100,
    // 5: 90,
    6: 80,
    // 7: 65,
    8: 60,
    // 9: 55,
    10: 50,
    // 11: 45,
    12: 42,
    // 13: 40,
    14: 37,
    // 15: 35,
    16: 33,
    // 17: 31,
    // 18: 30,
    // 19: 28,
    20: 27,
  };

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

  const Pin = styled.div`
    &:after {
      content: "";
      position: absolute;
      top: -28px;
      width: 20px;
      height: 40px;
      background-color: ${pin.backgroundColor};
      clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%);
    }
  `;

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
      {spinBtn.show ? (
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
      ) : (
        <div
          className="spinBtn"
          style={{
            position: "absolute",
            width: `${spinBtn.width / 5}px`,
            height: `${spinBtn.height / 5}px`,
            background: `${spinBtn.backgroundColor}`,
            borderRadius: "50%",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
        ></div>
      )}

      {pin.show && (
        <Pin
          className="pin"
          style={{
            position: "absolute",
            background: `${pin.backgroundColor}`,
            top: 12,
            zIndex: 10,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        />
      )}
      <motion.div
        className="wheel"
        initial={{ rotate: 45 }}
        animate={{
          rotate: rotationValue,
          transition: { duration: 0 },
        }}
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
        onClick={spin}
      >
        {wheel.segments.map((segment, index) => {
          // Calculate the rotation for each segment based on the total number of segments
          const rotation = 360 / wheel.segments.length;

          // Calculate clipPath based on the number of segments
          const clipPathValue = clipPathValues[wheel.segments.length];

          // Use the calculated rotation for the transform
          const segmentRotation = rotation * (index + 0.5);

          return (
            <div
              key={index + segment.name}
              style={{
                position: "absolute",
                width: "50%",
                height: "50%",
                background: segment.hexColor,
                transformOrigin: "bottom right",
                transform: `rotate(${segmentRotation}deg)`,
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
                {rotation * (index + 1)}deg
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Wheel;
