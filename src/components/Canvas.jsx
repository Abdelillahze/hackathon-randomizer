import { useEffect, useMemo, useRef, useState } from "react";
import createChoices from "../utils/createChoices";
import checkChoice from "../utils/checkChoice";
import getBasicAngle from "../utils/getBasicAngle";
import End from "./End";
import { createPortal } from "react-dom";
import getFontSize from "../utils/getFontSize";

export default function Canvas({ start, setStart, choices }) {
  const [choice, setChoice] = useState("");
  const canvasRef = useRef(null);
  const [fontSize, setFontSize] = useState(50);
  const filteredChoices = useMemo(() => {
    return choices.trim();
  }, [choices]);
  const choicesArray = filteredChoices
    .split("\n")
    .filter((choice) => choice !== "");
  const size = 350;

  const realSpin = () => {
    canvasRef.current.classList.remove("fake");
    canvasRef.current.classList.add("real");
    const degree = 360 / choicesArray.length;
    const currentRotation = window.getComputedStyle(canvasRef.current).rotate;
    const randomDeg = Math.random() * 360;
    const value =
      parseInt(currentRotation === "none" ? 0 : currentRotation) +
      randomDeg +
      10000;
    canvasRef.current.style.rotate = `${value}deg`;
    const angle = getBasicAngle(value);

    for (let i = 0; i < choicesArray.length; i++) {
      const maxAngle = degree * (i + 1);
      const minAngle = maxAngle - degree;
      const negAngle = 360 - angle;

      console.log(minAngle, maxAngle, angle, negAngle);
      if (minAngle < negAngle && maxAngle > negAngle) {
        setTimeout(() => {
          setStart(false);
          setChoice(choicesArray[i]);
        }, 2500);
      }
    }
  };

  const fakeSpin = () => {
    canvasRef.current.classList.add("fake");
    const currentRotation = window.getComputedStyle(canvasRef.current).rotate;
    const randomDeg = Math.random() * 360;
    const value =
      parseInt(currentRotation === "none" ? 0 : currentRotation) +
      randomDeg +
      1000;
    console.log(value);
    canvasRef.current.style.rotate = `${value}deg`;
  };

  const onClickHandler = () => {
    if (start || choicesArray.length === 0) return;
    const realSpinAudio = new Audio("realSpin.mp3");
    const fakeSpinAudio = new Audio("fakeSpin.mp3");
    const isStart = Math.ceil(Math.random() * 5) === 5;
    canvasRef.current.classList.remove("animate-spin");

    if (isStart) {
      realSpinAudio.play();
      console.log("jackpooooot");
      setStart(true);
      realSpin();
    } else {
      fakeSpinAudio.play();
      fakeSpin();
    }
  };

  useEffect(() => {
    checkChoice(choicesArray);
  }, [filteredChoices]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;
    ctx.width = size;
    ctx.height = size;
    ctx.fillStyle = "#212529";
    ctx.fillRect(0, 0, size, size);
    ctx.translate(size / 2, size / 2);
    ctx.font = `50px Arial`;
    const fontSize = getFontSize(ctx, choicesArray);

    getFontSize(ctx, choicesArray);

    createChoices(ctx, size, choicesArray, fontSize, setFontSize);
  }, [filteredChoices, fontSize]);

  return (
    <div className="relative w-fit h-fit">
      {choice &&
        createPortal(
          <End
            choice={choice}
            setClose={() => {
              canvasRef.current.classList.add("animate-spin");
              setChoice("");
            }}
          />,
          document.getElementById("portal")
        )}
      <div className="absolute border-[20px] border-transparent border-r-grey-700 top-1/2 -right-3 -translate-y-1/2 z-10"></div>
      <canvas
        onClick={onClickHandler}
        ref={canvasRef}
        className={`rounded-full animate-spin animation-duration`}
      ></canvas>
    </div>
  );
}
