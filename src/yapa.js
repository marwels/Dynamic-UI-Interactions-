const LowerThird = function Nav(parentEl) {
  const LowerThirdContainer = document.createElement("div");
  LowerThirdContainer.className = "LowerThirdContainer";

  const left = document.createElement("div");
  left.className = "left";

  const firstRow2 = document.createElement("div");
  firstRow2.innerText = "EKT Gdynia";
  firstRow2.className = "firstRow shadow";
  left.appendChild(firstRow2);

  const firstRow = document.createElement("div");
  firstRow.innerText = "EKT Gdynia";
  firstRow.className = "firstRow jump";
  left.appendChild(firstRow);

  const secondRow = document.createElement("div");
  secondRow.className = "secondRow";
  const secondRowText = document.createElement("div");
  secondRowText.innerText = "dobrze jest";
  secondRowText.className = "secondRowText";
  secondRow.appendChild(secondRowText);
  const triangle = document.createElement("div");
  triangle.className = "triangle";
  secondRow.appendChild(triangle);
  left.appendChild(secondRow);
  LowerThirdContainer.appendChild(left);

  const right = document.createElement("div");
  right.className = "right";

  const firstRow2R = document.createElement("div");
  firstRow2R.innerText = "EKT Gdynia";
  firstRow2R.className = "firstRow shadow";
  right.appendChild(firstRow2R);

  const firstRowR = document.createElement("div");
  firstRowR.innerText = "EKT Gdynia";
  firstRowR.className = "firstRow jump";
  right.appendChild(firstRowR);

  const secondRowR = document.createElement("div");
  secondRowR.className = "secondRow";
  const secondRowTextR = document.createElement("div");
  secondRowTextR.innerText = "dobrze jest nie być głodnym";
  secondRowTextR.className = "secondRowText";
  secondRowR.appendChild(secondRowTextR);
  const triangleR = document.createElement("div");
  triangleR.className = "triangle";
  secondRowR.appendChild(triangleR);
  right.appendChild(secondRowR);
  LowerThirdContainer.appendChild(right);

  parentEl.appendChild(LowerThirdContainer);
};

export default LowerThird;
