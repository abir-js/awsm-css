function handleClass(element, className) {
  const cleanClass = className.replace("chai-", "");
  const dashIndex = cleanClass.indexOf("-");
  const prefix = dashIndex === -1 ? cleanClass : cleanClass.slice(0, dashIndex);
  const value = dashIndex === -1 ? "" : cleanClass.slice(dashIndex + 1);

  switch (prefix) {
    case "bg":
      element.style.setProperty("background-color", value);
      break;
    case "text":
      element.style.setProperty("color", value);
      break;
    case "p":
      element.style.setProperty("padding", value * 4 + "px");
      break;
    case "px":
      element.style.setProperty("padding-left", value * 4 + "px");
      element.style.setProperty("padding-right", value * 4 + "px");
      break;
    case "py":
      element.style.setProperty("padding-top", value * 4 + "px");
      element.style.setProperty("padding-bottom", value * 4 + "px");
      break;
    case "pt":
      element.style.setProperty("padding-top", value * 4 + "px");
      break;
    case "pb":
      element.style.setProperty("padding-bottom", value * 4 + "px");
      break;
    case "m":
      element.style.setProperty("margin", value * 4 + "px");
      break;
    case "mx":
      element.style.setProperty("margin-left", value * 4 + "px");
      element.style.setProperty("margin-right", value * 4 + "px");
      break;
    case "my":
      element.style.setProperty("margin-top", value * 4 + "px");
      element.style.setProperty("margin-bottom", value * 4 + "px");
      break;
    case "mt":
      element.style.setProperty("margin-top", value * 4 + "px");
      break;
    case "mb":
      element.style.setProperty("margin-bottom", value * 4 + "px");
      break;
    case "fs":
      element.style.setProperty("font-size", value + "px");
      break;
    case "font":
      if (value === "bold") element.style.setProperty("font-weight", "bold");
      if (value === "semibold") element.style.setProperty("font-weight", "600");
      if (value === "medium") element.style.setProperty("font-weight", "500");
      if (value === "light") element.style.setProperty("font-weight", "300");
      break;
    case "align":
      if (value === "center") element.style.setProperty("text-align", "center");
      if (value === "left") element.style.setProperty("text-align", "left");
      if (value === "right") element.style.setProperty("text-align", "right");
      if (value === "justify")
        element.style.setProperty("text-align", "justify");
      break;
    case "leading":
      element.style.setProperty(
        "line-height",
        isNaN(value) ? value : value + "px",
      );
      break;
    case "tracking":
      element.style.setProperty("letter-spacing", value + "px");
      break;
    case "uppercase":
      element.style.setProperty("text-transform", "uppercase");
      break;
    case "lowercase":
      element.style.setProperty("text-transform", "lowercase");
      break;
    case "capitalize":
      element.style.setProperty("text-transform", "capitalize");
      break;
    case "border":
      element.style.setProperty("border", (value || 1) + "px solid black");
      break;
    case "bordercolor":
      element.style.setProperty("border-color", value);
      break;
    case "rounded":
      if (value === "full")
        element.style.setProperty("border-radius", "9999px");
      else element.style.setProperty("border-radius", (value || 8) + "px");
      break;
    case "w":
      if (value === "full") element.style.setProperty("width", "100%");
      else if (value === "screen") element.style.setProperty("width", "100vw");
      else element.style.setProperty("width", value + "px");
      break;
    case "h":
      if (value === "full") element.style.setProperty("height", "100%");
      else if (value === "screen") element.style.setProperty("height", "100vh");
      else element.style.setProperty("height", value + "px");
      break;
    case "maxw":
      element.style.setProperty("max-width", value + "px");
      break;
    case "maxh":
      element.style.setProperty("max-height", value + "px");
      break;
    case "block":
      element.style.setProperty("display", "block");
      break;
    case "inline":
      element.style.setProperty("display", "inline");
      break;
    case "hidden":
      element.style.setProperty("display", "none");
      break;
    case "list":
      element.style.setProperty("list-style-type", value);
      break;
    case "flex":
      element.style.setProperty("display", "flex");
      if (value === "col")
        element.style.setProperty("flex-direction", "column");
      if (value === "row") element.style.setProperty("flex-direction", "row");
      if (value === "wrap") element.style.setProperty("flex-wrap", "wrap");
      break;
    case "gap":
      element.style.setProperty("gap", value * 4 + "px");
      break;
    case "justify":
      if (value === "between")
        element.style.setProperty("justify-content", "space-between");
      else if (value === "center")
        element.style.setProperty("justify-content", "center");
      else if (value === "around")
        element.style.setProperty("justify-content", "space-around");
      else if (value === "end")
        element.style.setProperty("justify-content", "flex-end");
      else if (value === "start")
        element.style.setProperty("justify-content", "flex-start");
      break;
    case "items":
      if (value === "center")
        element.style.setProperty("align-items", "center");
      else if (value === "start")
        element.style.setProperty("align-items", "flex-start");
      else if (value === "end")
        element.style.setProperty("align-items", "flex-end");
      else if (value === "stretch")
        element.style.setProperty("align-items", "stretch");
      break;
    case "shadow":
      if (value === "sm")
        element.style.setProperty("box-shadow", "0 1px 3px rgba(0,0,0,0.12)");
      else if (value === "md")
        element.style.setProperty("box-shadow", "0 4px 12px rgba(0,0,0,0.15)");
      else if (value === "lg")
        element.style.setProperty("box-shadow", "0 10px 30px rgba(0,0,0,0.20)");
      break;
    case "opacity":
      element.style.setProperty("opacity", value / 100);
      break;
    case "cursor":
      element.style.setProperty("cursor", value);
      break;
    case "overflow":
      element.style.setProperty("overflow", value);
      break;
  }
}

function applyChaiStyles(element) {
  [...element.classList].forEach((cls) => {
    if (cls.startsWith("chai-")) handleClass(element, cls);
  });
}

(function () {
  document.querySelectorAll("*").forEach((el) => applyChaiStyles(el));
})();
