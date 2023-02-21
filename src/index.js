import "./dropDownStyle.css";
import Nav from "./dropDownMenu";
import { navTree } from "./dropDownMenu";

const contentParent = document.getElementById("content");

Nav(contentParent, navTree);
