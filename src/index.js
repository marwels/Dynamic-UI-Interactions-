import "./style.css";

const contentParent = document.getElementById("content");

const navTree = {
  style1: {
    one: "http://www.example.com",
    two: "http://www.example.com",
    three: "http://www.example.com",
    four: "http://www.example.com",
    five: "http://www.example.com",
  },
  style2: {
    one: "http://www.example.com",
    two: "http://www.example.com",
    three: "http://www.example.com",
    four: "http://www.example.com",
    five: "http://www.example.com",
  },
  style3: {
    one: "http://www.example.com",
    two: "http://www.example.com",
    three: "http://www.example.com",
    four: "http://www.example.com",
    five: "http://www.example.com",
  },
  style4: {
    one: "http://www.example.com",
    two: "http://www.example.com",
    three: "http://www.example.com",
    four: "http://www.example.com",
    five: "http://www.example.com",
  },
  // style5: {
  //   one: "http://www.example.com",
  //   two: "http://www.example.com",
  //   three: {
  //     moreLevels: "moreLevels",
  //   },
  // },
};

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
    if (typeof entry[1] === "string") {
      // pojedynczy link
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = entry[1];
      a.innerText = entry[0];
      li.appendChild(a);
      ul.appendChild(li);
    } else {
      // galaz drzewa
      const li = document.createElement("li");
      li.innerText = entry[0];

      children.push(Nav(li, entry[1], true));

      ul.appendChild(li);
    }
  }

  return () => {
    children.forEach((destroy) => destroy());
    parentEl.removeChild(topMost);
  };
};

Nav(contentParent, navTree);
