import React from "react";
import { SpinButtonInterface } from "../interfaces/spinButton.interface";

type Props = {
  buttonProps: SpinButtonInterface;
  clickHandler: Function;
  resetWheel: Function;
  isSpinning: boolean;
  hasSpun: boolean;
  isResetting: boolean;
  spinTriggered: boolean;
};

const SpinButton = ({
  clickHandler,
  buttonProps,
  isSpinning,
  hasSpun,
  isResetting,
  spinTriggered,
  resetWheel,
}: Props) => {
  const {
    text,
    textColor,
    borderWidth,
    borderColor,
    backgroundColor,
    alignButton,
    size,
    buttonTopOffset,
    rounded,
  } = buttonProps;

  const getBtnAlignment = (align: string) => {
    switch (align) {
      case "left":
        return "start";

      case "right":
        return "end";

      case "middle":
        return "center";

      default:
        return "center";
    }
  };

  const getBtnSize = (size: string) => {
    switch (size) {
      case "xs":
        return "0.5rem";
      case "sm":
        return "0.75rem";
      case "md":
        return "1rem";
      case "lg":
        return "1.25rem";
      case "xl":
        return "1.5rem";

      default:
        return "1rem";
    }
  };

  const getBtnOffset = (offset: string) => {
    // returns value in rem
    switch (offset) {
      case "-sm":
        return -2;
      case "-xs":
        return -1;
      case "xs":
        return 1;
      case "sm":
        return 2;
      case "md":
        return 3;
      case "lg":
        return 4;
      case "xl":
        return 5;

      default:
        return 1;
    }
  };

  const getBtnBorderRadius = (size: string) => {
    switch (size) {
      case "sm":
        return "0.25rem";
      case "md":
        return "0.5rem";
      case "lg":
        return "0.75rem";
      case "xl":
        return "1rem";
      case "full":
        return "5000em";

      default:
        return "0rem";
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        right: `0px`,
        bottom: `-${5 + getBtnOffset(buttonTopOffset)}rem`,
        left: `0px`,
        display: "flex",
        justifyContent: getBtnAlignment(alignButton),
        height: "5rem",
        alignItems: "center",
      }}
    >
      {!hasSpun && (
        <button
          className="spin-button"
          style={{
            fontSize: getBtnSize(size),
            borderRadius: getBtnBorderRadius(rounded),
            border: `${borderWidth}px solid`,
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            clickHandler();
          }}
          disabled={isSpinning}
        >
          {isSpinning ? "Spinning..." : text}
        </button>
      )}
      {hasSpun && (
        <button
          className="reset-button"
          style={{
            fontSize: getBtnSize(size),
            borderRadius: getBtnBorderRadius(rounded),
            border: `${borderWidth}px solid`,
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
          onClick={() => {
            resetWheel();
          }}
          disabled={isResetting}
        >
          {isResetting ? "Resetting..." : "Reset"}
        </button>
      )}
    </div>
  );
};

export default SpinButton;
