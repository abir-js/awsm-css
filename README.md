# ☕ ChaiTailwind

A lightweight, utility-first CSS engine inspired by Tailwind CSS — built from scratch with vanilla JavaScript. Style your HTML elements using `chai-` prefixed class names, applied at runtime with zero dependencies, zero build step, and zero configuration.

> **Live Playground** → just open `index.html` in your browser.

---

## 🚀 Getting Started

Clone the repo and open `index.html` directly in your browser. No npm, no bundler, no setup.

```bash
git clone https://github.com/abir-js/awsm-css.git
cd awsm-css
npm install
npm run dev
# Open the vite server in your browser. e.g. http://localhost:5173
```


### File Structure

```
chai-tailwind/
├── index.html      # The playground UI (editor + live preview)
├── node_modules
├── package-lock.json
├── package.json
├── preview.html    # The iframe that renders your HTML with chai styles
├── public
├── README.md
└── src
    └── chai.js         # The ChaiTailwind engine
```

---

## ✍️ How It Works

Add `chai-` prefixed classes to any HTML element. The engine reads your class list and applies inline styles at runtime — no compilation needed.

```html
<div class="chai-bg-white chai-p-6 chai-rounded-16 chai-shadow-md">
  <h1 class="chai-text-#e8720c chai-font-bold chai-fs-24">Hello, Chai!</h1>
  <p class="chai-text-#555555 chai-fs-14 chai-mt-2">Utility CSS, brewed fresh.</p>
</div>

<script src="chai.js"></script>
```

---

## 🎨 Available Classes

### Colors
| Class | Effect |
|---|---|
| `chai-bg-{color}` | `background-color` — any CSS color or hex e.g. `chai-bg-#e8720c` |
| `chai-text-{color}` | `color` — any CSS color or hex |

### Spacing (scale: n × 4px)
| Class | Effect |
|---|---|
| `chai-p-{n}` | padding all sides |
| `chai-px-{n}` | padding left + right |
| `chai-py-{n}` | padding top + bottom |
| `chai-pt-{n}` | padding top |
| `chai-pb-{n}` | padding bottom |
| `chai-m-{n}` | margin all sides |
| `chai-mx-{n}` | margin left + right |
| `chai-my-{n}` | margin top + bottom |
| `chai-mt-{n}` | margin top |
| `chai-mb-{n}` | margin bottom |

### Typography
| Class | Effect |
|---|---|
| `chai-fs-{n}` | `font-size: npx` e.g. `chai-fs-18` |
| `chai-font-bold` | `font-weight: bold` |
| `chai-font-semibold` | `font-weight: 600` |
| `chai-font-medium` | `font-weight: 500` |
| `chai-font-light` | `font-weight: 300` |
| `chai-align-center` | `text-align: center` |
| `chai-align-left` | `text-align: left` |
| `chai-align-right` | `text-align: right` |
| `chai-leading-{n}` | `line-height: npx` |
| `chai-tracking-{n}` | `letter-spacing: npx` |
| `chai-uppercase` | `text-transform: uppercase` |
| `chai-lowercase` | `text-transform: lowercase` |
| `chai-capitalize` | `text-transform: capitalize` |

### Borders
| Class | Effect |
|---|---|
| `chai-border-{n}` | `border: npx solid black` |
| `chai-bordercolor-{color}` | `border-color` |
| `chai-rounded-{n}` | `border-radius: npx` |
| `chai-rounded-full` | `border-radius: 9999px` (pill shape) |

### Sizing
| Class | Effect |
|---|---|
| `chai-w-{n}` | `width: npx` |
| `chai-w-full` | `width: 100%` |
| `chai-w-screen` | `width: 100vw` |
| `chai-h-{n}` | `height: npx` |
| `chai-h-full` | `height: 100%` |
| `chai-h-screen` | `height: 100vh` |
| `chai-maxw-{n}` | `max-width: npx` |
| `chai-maxh-{n}` | `max-height: npx` |

### Display
| Class | Effect |
|---|---|
| `chai-block` | `display: block` |
| `chai-inline` | `display: inline` |
| `chai-hidden` | `display: none` |

### Flexbox
| Class | Effect |
|---|---|
| `chai-flex` | `display: flex` |
| `chai-flex-col` | `flex-direction: column` |
| `chai-flex-row` | `flex-direction: row` |
| `chai-flex-wrap` | `flex-wrap: wrap` |
| `chai-gap-{n}` | `gap: n × 4px` |
| `chai-justify-center` | `justify-content: center` |
| `chai-justify-between` | `justify-content: space-between` |
| `chai-justify-around` | `justify-content: space-around` |
| `chai-justify-start` | `justify-content: flex-start` |
| `chai-justify-end` | `justify-content: flex-end` |
| `chai-items-center` | `align-items: center` |
| `chai-items-start` | `align-items: flex-start` |
| `chai-items-end` | `align-items: flex-end` |
| `chai-items-stretch` | `align-items: stretch` |

### Effects & Misc
| Class | Effect |
|---|---|
| `chai-shadow-sm` | small box shadow |
| `chai-shadow-md` | medium box shadow |
| `chai-shadow-lg` | large box shadow |
| `chai-opacity-{n}` | `opacity: n/100` e.g. `chai-opacity-50` → `0.5` |
| `chai-cursor-pointer` | `cursor: pointer` |
| `chai-overflow-hidden` | `overflow: hidden` |

---

## 🖥️ The Playground

The playground (`index.html`) works like [play.tailwindcss.com](https://play.tailwindcss.com).

- **Left panel** — write your HTML with `chai-` classes
- **Right panel** — live preview updates as you type
- **Presets** — pick from Card, Navbar, Buttons, Flexbox, and Form to get started
- **Tab** — indents in the editor
- **Ctrl+Enter** — force re-run

The playground uses `postMessage` to send your HTML from the editor to `preview.html` running inside an iframe — the same architecture used by Tailwind Play.

---

## 🧠 How the Engine Works

`chai.js` is a single self-contained script. It:

1. Selects every element on the page with `document.querySelectorAll("*")`
2. Loops through each element's class list
3. Finds classes starting with `chai-`
4. Splits the class name into a `prefix` and `value` on the first `-`
5. Uses a `switch` statement to apply the matching `element.style.setProperty()`

```js
// chai-bg-#e8720c
// prefix = "bg", value = "#e8720c"
element.style.setProperty("background-color", "#e8720c");

// chai-p-6
// prefix = "p", value = "6"  →  6 * 4 = 24px
element.style.setProperty("padding", "24px");
```

---

## 🤝 Contributing

Pull requests are welcome! Some ideas for extending the engine:



---

Made with ☕ by [Abir Bhattacharhee](https://github.com/abir-js)