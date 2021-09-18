<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/rjsf-team/react-jsonschema-form">
    <img src="./react-tailwindcss-logo.png" alt="Logo" width="140" height="120">
  </a>

  <h3 align="center">@rjsf/tailwindcss</h3>

  <p align="center">
  tailwindcss theme, fields and widgets for <a href="https://github.com/mozilla-services/react-jsonschema-form/"><code>react-jsonschema-form</code></a>.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
   <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Report Bug</a>
    ·
    <a href="https://github.com/rjsf-team/react-jsonschema-form/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

Exports `tailwindcss` theme, fields and widgets for `react-jsonschema-form`.

### Built With

- [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form/)
- [tailwindcss](https://gettailwindcss.com/docs/4.0/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- `react-tailwindcss >= 1.0.1`
- `@rjsf/core >= 2.2.0`

```bash
yarn add react-tailwindcss @rjsf/core
```

### Installation

```bash
yarn add @rjsf/tailwindcss
```

## Usage

```js
import Form from "@rjsf/tailwindcss";
```

or

```js
import { withTheme } from "@rjsf/core";
import { Theme as tailwindcssTheme } from "@rjsf/tailwindcss";

const Form = withTheme(tailwindcssTheme);
```

<!-- CONTRIBUTING -->

## Contributing

Read our [contributors' guide](https://react-jsonschema-form.readthedocs.io/en/latest/contributing/) to get started.

<!-- CONTACT -->

## Contact

rjsf team: [https://github.com/orgs/rjsf-team/people](https://github.com/orgs/rjsf-team/people)

GitHub repository: [https://github.com/rjsf-team/react-jsonschema-form](https://github.com/rjsf-team/react-jsonschema-form)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[build-shield]: https://github.com/rjsf-team/react-jsonschema-form/workflows/CI/badge.svg
[build-url]: https://github.com/rjsf-team/react-jsonschema-form/actions
[contributors-shield]: https://img.shields.io/github/contributors/rjsf-team/react-jsonschema-form.svg
[contributors-url]: https://github.com/rjsf-team/react-jsonschema-form/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/apache-2.0/
[npm-shield]: https://img.shields.io/npm/v/@rjsf/tailwindcss/latest.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rjsf/tailwindcss
[npm-dl-shield]: https://img.shields.io/npm/dm/@rjsf/tailwindcss.svg?style=flat-square
[npm-dl-url]: https://www.npmjs.com/package/@rjsf/tailwindcss
[product-screenshot]: https://raw.githubusercontent.com/rjsf-team/react-jsonschema-form/59a8206e148474bea854bbb004f624143fbcbac8/packages/tailwindcss/screenshot.png
