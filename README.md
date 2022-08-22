# initialize-project

Usual steps to starting a project

1. Go to github, add a new repository
2. Add a README.md and a .gitignore that ignores Node
3. Run npm init to generate a package.json file
4. Run npm install webpack webpack-cli --save-dev to install webpack
5. Create a src and dist directory
6. Create an index.js file in src
7. Create an index.html file in dist. Link main.js defer in the script file.
8. Create a webpack.config.js file. Copy the sample file in here.
9. Run npm install --save-dev style-loader css-loader (For more about asset management in webpack, go to https://webpack.js.org/guides/asset-management)
10. Add "watch": "webpack --watch" in "script" of the package.json file
11. Copy the usual code from index.js and style.css in src, and index.html in dist.
12. Run npm run watch

Deploying a subfolder to github pages (assuming that the folder is called "dist")

1. Remove dist directory from the .gitignore file
2. Run git add dist
3. Run git commit -m "Initial dist subtree commit"
4. Run git subtree push --prefix dist origin gh-pages