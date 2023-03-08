const LowerThird = function Nav(parentEl) {
  const LowerThirdContainer = document.createElement("div");
  LowerThirdContainer.className = "LowerThirdContainer";

  const firstRow2 = document.createElement("div");
  firstRow2.innerText = "EKT Gdynia";
  firstRow2.className = "firstRow shadow";
  LowerThirdContainer.appendChild(firstRow2);

  const firstRow = document.createElement("div");
  firstRow.innerText = "EKT Gdynia";
  firstRow.className = "firstRow jump";
  LowerThirdContainer.appendChild(firstRow);

  const secondRow = document.createElement("div");
  secondRow.className = "secondRow";
  const secondRowText = document.createElement("div");
  secondRowText.innerText = "dobrze jest nie być głodnym";
  secondRowText.className = "secondRowText";
  secondRow.appendChild(secondRowText);
  const triangle = document.createElement("div");
  triangle.className = "triangle";
  secondRow.appendChild(triangle);
  LowerThirdContainer.appendChild(secondRow);
  parentEl.appendChild(LowerThirdContainer);
};

export default LowerThird;
