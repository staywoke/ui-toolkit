# UI Toolkit

> Vue.js UI Toolkit for Rapid Project Development of StayWoke Projects.

## THIS IS A WORK IN PROGRESS & NOT READY FOR PRODUCTION


Overview
---

This project is the home for all StayWoke Vue.js 2 Components in our UI Toolkit. It is not set up to be a complete Web Application, but rather a collection of parts you can use to speed up development of your own.

#### [View Components ⇨](https://staywoke.github.io/ui-toolkit)



Sample Project
---

We felt it would help to see how you would implement our UI Toolkit in the "Real World" so we made a Sample Project that uses our UI ToolKit to get you started within minutes on making a full-blown Vue.js 2 Web Application.

#### [View Sample Project ⇨](https://github.com/staywoke/ui-toolkit-sample-project)


UI Toolkit Components
---

> UI Toolkit uses [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) Principles. Each component has example documentation for implementing in your Vue.js 2 Project.


Pre-Setup Node Version Manager (NVM)
---

*Install NVM*

Install [NVM](https://github.com/creationix/nvm#installation) to make working with the right version of Node automatic.

Check that the following code was added to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This automagically loads nvm
```

*Setup NVM for this project*

```bash
nvm install v8.9.4
```

Now you can continue with installation.


Developer Scripts
---

> Developers of UI Toolkit really only need the following development scripts.

``` bash
# install dependencies
npm install

# serve interactive components with hot reload at localhost:9001
npm run storybook

# run all tests
npm test

# run single unit test by name
npm run -s unit:single -- -t 'Component › Atom › Checkbox'
```
