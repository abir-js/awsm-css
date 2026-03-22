# ☕ ChaiTailwind

> A runtime utility-first CSS engine — no build step, no config, just chai ☕

A lightweight, utility-first CSS engine inspired by Tailwind CSS — built from scratch with vanilla JavaScript. Style your HTML elements using `chai-` prefixed class names, applied at runtime with zero dependencies, zero build step, and zero configuration.

---

## 🌐 Live Demo

👉 https://awsm-css.vercel.app/

---

## 🚀 Getting Started

### Option 1: Run with Vite (Recommended)

```bash
git clone https://github.com/abir-js/awsm-css.git
cd awsm-css
npm install
npm run dev
```

Open: http://localhost:5173

---

### Option 2: Open Directly (No Setup)

Open `index.html` in your browser.

> ⚠️ Note: Some features may not work properly due to browser security (iframe restrictions).

---

## 📁 File Structure

```
chai-tailwind/
├── index.html          # Playground UI (editor + live preview)
├── public/
│   ├── preview.html   # iframe sandbox
│   └── chai.js        # ChaiTailwind engine
├── src/               # (optional) app logic
├── package.json
├── vite.config.js
└── README.md
```

---

## ✍️ How It Works

Add `chai-` prefixed classes to any HTML element. The engine reads your class list and applies inline styles at runtime — no compilation needed.

```html
<div class="chai-bg-white chai-p-6 chai-rounded-16 chai-shadow-md">
  <h1 class="chai-text-#e8720c chai-font-bold chai-fs-24">Hello, Chai!</h1>
  <p class="chai-text-#555555 chai-fs-14 chai-mt-2">Utility CSS, brewed fresh.</p>
</div>

<script src="/chai.js"></script>
```

---

## 🎨 Available Classes

### Colors

| Class               | Effect             |
| ------------------- | ------------------ |
| `chai-bg-{color}`   | `background-color` |
| `chai-text-{color}` | `color`            |

---

### Spacing (scale: n × 4px)

| Class         | Effect               |
| ------------- | -------------------- |
| `chai-p-{n}`  | padding              |
| `chai-px-{n}` | padding left + right |
| `chai-py-{n}` | padding top + bottom |
| `chai-m-{n}`  | margin               |
| `chai-mt-{n}` | margin-top           |
| `chai-mb-{n}` | margin-bottom        |

---

### Typography

| Class               | Effect            |
| ------------------- | ----------------- |
| `chai-fs-{n}`       | font-size         |
| `chai-font-bold`    | font-weight: bold |
| `chai-align-center` | text-align center |
| `chai-leading-{n}`  | line-height       |

---

### Flexbox

| Class                 | Effect                 |
| --------------------- | ---------------------- |
| `chai-flex`           | display: flex          |
| `chai-justify-center` | justify-content center |
| `chai-items-center`   | align-items center     |
| `chai-gap-{n}`        | gap                    |

---

### Effects

| Class                 | Effect         |
| --------------------- | -------------- |
| `chai-shadow-md`      | box-shadow     |
| `chai-opacity-{n}`    | opacity        |
| `chai-cursor-pointer` | cursor pointer |

---

## 🖥️ Playground

The playground (`index.html`) works like Tailwind Play:

* **Left panel** → write HTML with `chai-` classes
* **Right panel** → live preview
* **Presets** → Card, Navbar, Buttons, Flexbox, Form
* **Tab** → indent
* **Ctrl + Enter** → run code

Uses `postMessage` + iframe sandbox (`preview.html`).

---

## 🧠 How the Engine Works

`chai.js`:

1. Selects all elements
2. Filters `chai-` classes
3. Parses prefix + value
4. Applies inline styles

```js
// chai-bg-#e8720c
element.style.setProperty("background-color", "#e8720c");

// chai-p-6 → 6 * 4 = 24px
element.style.setProperty("padding", "24px");
```

---

## 🤔 Why ChaiTailwind?

Unlike Tailwind CSS:

* ❌ No build step
* ❌ No config
* ❌ No tooling

✅ Works directly in browser
✅ Great for playgrounds
✅ Perfect for learning CSS

---

## ⚠️ Limitations

* No pseudo-classes (hover, focus)
* No responsive breakpoints
* Inline styles only
* Not optimized for large production apps (yet)

---

## 🤝 Contributing

Pull requests are welcome!

Ideas:

* responsive utilities
* pseudo-class support
* better parsing engine
* plugin system

---

## 👨‍💻 Author

Made with ☕ by [Abir Bhattacharjee](https://github.com/abir-js)
