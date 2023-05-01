// import "./dropDownStyle.css";
import "./responsiveMenu.css";
import responsiveMenu from "./responsiveMenu";
import Nav from "./dropDownMenu";
import { navTree } from "./dropDownMenu";
import LowerThird from "./yapa";
// import "./yapa.css";
import { sumToLoop } from "./recursiveEx";
import { sumToRecursion } from "./recursiveEx";
import { sumToFormula } from "./recursiveEx";
import { factorial } from "./recursiveEx";
import { betterFib } from "./recursiveEx";
import { printListRecursion } from "./recursiveEx";
import { printListLoop } from "./recursiveEx";

const contentParent = document.getElementById("content");

// sumToLoop(100);
// console.log(sumToRecursion(100));
// console.log(sumToFormula(100));
// console.log(factorial(5));

// console.log(betterFib(77));
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// printListRecursion(list);
// printListLoop(list);
// Nav(contentParent, navTree);

// LowerThird(contentParent);

responsiveMenu();
