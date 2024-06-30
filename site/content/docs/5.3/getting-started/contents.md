---
layout: docs
title: Contents
description: Discover what's included in Crow, including our compiled and source code flavors.
group: getting-started
toc: true
---

## Compiled Crow

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
crow/
├── css/
│   ├── crow-grid.css
│   ├── crow-grid.css.map
│   ├── crow-grid.min.css
│   ├── crow-grid.min.css.map
│   ├── crow-grid.rtl.css
│   ├── crow-grid.rtl.css.map
│   ├── crow-grid.rtl.min.css
│   ├── crow-grid.rtl.min.css.map
│   ├── crow-reboot.css
│   ├── crow-reboot.css.map
│   ├── crow-reboot.min.css
│   ├── crow-reboot.min.css.map
│   ├── crow-reboot.rtl.css
│   ├── crow-reboot.rtl.css.map
│   ├── crow-reboot.rtl.min.css
│   ├── crow-reboot.rtl.min.css.map
│   ├── crow-utilities.css
│   ├── crow-utilities.css.map
│   ├── crow-utilities.min.css
│   ├── crow-utilities.min.css.map
│   ├── crow-utilities.rtl.css
│   ├── crow-utilities.rtl.css.map
│   ├── crow-utilities.rtl.min.css
│   ├── crow-utilities.rtl.min.css.map
│   ├── crow.css
│   ├── crow.css.map
│   ├── crow.min.css
│   ├── crow.min.css.map
│   ├── crow.rtl.css
│   ├── crow.rtl.css.map
│   ├── crow.rtl.min.css
│   └── crow.rtl.min.css.map
└── js/
    ├── crow.bundle.js
    ├── crow.bundle.js.map
    ├── crow.bundle.min.js
    ├── crow.bundle.min.js.map
    ├── crow.esm.js
    ├── crow.esm.js.map
    ├── crow.esm.min.js
    ├── crow.esm.min.js.map
    ├── crow.js
    ├── crow.js.map
    ├── crow.min.js
    └── crow.min.js.map
```

This is the most basic form of Crow: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`crow.*`), as well as compiled and minified CSS and JS (`crow.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`crow.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`crow.bundle.js` and minified `crow.bundle.min.js`) include [Popper](https://popper.js.org/).

### CSS files

Crow includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `crow.css`<br> `crow.min.css`<br> `crow.rtl.css`<br> `crow.rtl.min.css` | Included | Included | Included | Included |
| `crow-grid.css`<br> `crow-grid.rtl.css`<br> `crow-grid.min.css`<br> `crow-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `crow-utilities.css`<br> `crow-utilities.rtl.css`<br> `crow-utilities.min.css`<br> `crow-utilities.rtl.min.css` | — | — | — | Included |
| `crow-reboot.css`<br> `crow-reboot.rtl.css`<br> `crow-reboot.min.css`<br> `crow-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | Popper |
| --- | --- |
| `crow.bundle.js`<br> `crow.bundle.min.js`<br> | Included |
| `crow.js`<br> `crow.min.js`<br> | – |
{{< /bs-table >}}

## Crow source code

The Crow source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
crow/
├── dist/
│   ├── css/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the compiled download section above. The `site/content/docs/` folder includes the source code for our hosted documentation, including our live examples of Crow usage.

Beyond that, any other included file provides support for packages, license information, and development.
