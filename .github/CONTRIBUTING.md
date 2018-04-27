![logo](../src/assets/logo.jpg "logo")

# UI Toolkit Contributing Guide

UI Toolkit is a Vue 2.0 based component library for developers, designers and product managers to contribute to StayWoke.org projects.

We are excited that you are interested in contributing to UI Toolkit. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.


Issue Guidelines
---

- Issues are exclusively for bug reports, feature requests and design-related topics. Other questions may be closed directly. If any questions come up when you are using UI Tookkit, please hit us up via [Slack](https://staywoke.slack.com) for help.

- Before submitting an issue, please check if similar problems have already been issued.

- Please specify which version of `UI Toolkit` and `Vue` you are using, and provide OS and browser information. [JSFiddle](https://jsfiddle.net/) is recommended to build a live demo so that your issue can be reproduced clearly.


Pull Request Guidelines
---

- Fork this repository to your own account. Do not create branches here.

- Commit info should be formatted as `[Component Name]: Info about commit.` (e.g. `Button: Fix xxx bug`)

- Make sure that running `npm run dist` outputs the correct files.

- Rebase before creating a PR to keep commit history clear.

- Make sure PRs are created to `dev` branch instead of `master` branch.

- If your PR fixes a bug, please provide a description about the related bug.

- Merging a PR takes two maintainers: one approves the changes after reviewing, and then the other reviews and merges.


Requirements
---

Before submitting, you should have completed the following tasks without generating errors:

- [X] `npm test`
- [X] `npm run dev`
- [X] `npm run storybook`
- [X] `npm run dist`


Code Style
---

Just comply with the [ESLint](https://github.com/staywoke/ui-toolkit/blob/stub/.eslintrc.js) configuration of [UI Toolkit](https://github.com/staywoke/ui-toolkit).
