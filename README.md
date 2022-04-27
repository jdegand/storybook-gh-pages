# Storybook Github Pages

This is the storybook from my [devchallenges-storybook](https://github.com/jdegand/devchallenges-storybook) project.

[Live Link](https://jdegand.github.io/storybook-gh-pages)

* How to downgrade to react 17
    * npm remove react
    * npm remove react-dom
    * npm i react@17.0.2
    * npm i react-dom@17.0.2
    * inside "index.js"
        * import ReactDom from "react-dom"
        * use ReactDom to render the app


### Useful Resources

- [Stack Overflow](https://stackoverflow.com/questions/46566830/how-to-use-create-react-app-with-an-older-react-version/71908461#71908461) - downgrade create react app
- [Medium](https://medium.com/swlh/how-to-deploy-storybook-to-github-pages-4894097d49ab) - deploy storybook (outdated?)
- [Storybook Deployer](https://github.com/storybookjs/storybook-deployer) - easy way to deploy storybook
- [CommonMark](https://commonmark.org/help/tutorial/10-nestedLists.html) - Nested Lists markdown 
