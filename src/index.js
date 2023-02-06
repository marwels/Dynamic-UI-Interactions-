import "./style.css";

jezeli value jest stringiem
Object. entries keys values
const navTree = {
    "dfgsdgsf": "dsfgsdfgg",
    "Kategoria 1": {
        "Pozycja 1": "http://sgdfg",
        "Pozycja 2": "sdgdfg",
        "Pozycja 3": {
            "sdsfsdf": "sdfsdf",
            "dfgsdfgsdg": "dgsdgsdf",
            "sdfgdsfg": {
                "ssdfgsdfg"
            }
        }
    }
}



const Nav = function Nav(parentEl, objectCategoriesLi, dontCreateNav) {
  const ul = document.createElement("ul");
  let topMost = ul;

  if (dontCreateNav !== true) {
    const nav = document.createElement("nav");
    nav.appendChild(ul);
    parentEl.appendChild(nav);
    let topMost = nav;
  } else {
    parentEl.appendChild(ul);
  }

  const entries = Object.entries(objectCategoriesLi);

  const children = [];

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (typeof entry[1] === "string") { // pojedynczy link
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = values[i];
      a.innerText = entry[0];
      li.appendChild(a);
      ul.appendChild(li);
    } else { // galaz drzewa
      const li = document.createElement("li");
      li.innerText = entry[0];

      children.push(Nav(li, entry[1], true));

      ul.appendChild(li);
    }
  }

  return () => {
    children.forEach((destroy) => destroy());
    parentEl.removeChild(topMost);
  }
};


