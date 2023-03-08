const LowerThird = function Nav(parentEl) {
  const LowerThirdContainer = document.createElement("div");
  LowerThirdContainer.className = "LowerThirdContainer";
  const firstRow = document.createElement("div");
  firstRow.innerText = "EKT Gdynia";
  firstRow.className = "firstRow";
  LowerThirdContainer.appendChild(firstRow);
  const secondRow = document.createElement("div");
  secondRow.className = "secondRow";
  const secondRowText = document.createElement("div");
  secondRowText.innerText = "dobrze jest";
  secondRowText.className = "secondRowText";
  secondRow.appendChild(secondRowText);
  const triangle = document.createElement("div");
  triangle.className = "triangle";
  secondRow.appendChild(triangle);
  LowerThirdContainer.appendChild(secondRow);
  parentEl.appendChild(LowerThirdContainer);
};

export default LowerThird;
