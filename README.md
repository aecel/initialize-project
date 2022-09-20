# initialize-project

Usual steps to starting a project

1. Go to github, add a new repository
2. Add a README.md and a .gitignore that ignores Node
3. Run npm init -y to generate a package.json file
4. Run npm install webpack webpack-cli --save-dev to install webpack
5. Create a src and dist directory
6. Create an index.js file in src
7. Create an index.html file in dist. Link main.js defer in the script file.
8. Create a webpack.config.js file. Copy the sample file in here.
9. Run npm install --save-dev style-loader css-loader (For more about asset management in webpack, go to https://webpack.js.org/guides/asset-management)
10. Add "watch": "webpack --watch" in "script" of the package.json file
11. You can copy the usual code from index.js and style.css in src, and index.html in dist. (Files are still being edited)
12. Run npm run watch

Optional step of adding Jest

1. Run npm install --save-dev jest
2. Add this section to your package.json
{
  "scripts": {
    "test": "jest"
  }
}

Optional step of adding babel

1. Run npm install -D babel-loader @babel/core @babel/preset-env webpack

2. Add babel-loader to webpack.config.js, like this:
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}

3. This part is for Jest (so that you can use modules with Jest)
4. Run npm install --save-dev babel-jest @babel/core @babel/preset-env
5. Make a babel.config.js file and add this

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

Optional step of adding eslint but idc I kinda hate it

1. Run npm install eslint --save-dev
2. Run ./node_modules/.bin/eslint --init
3. Idk follow these steps: https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
4. Copy the ".eslintrc.json" file in the to-do repo

Deploying a subfolder to github pages (assuming that the folder is called "dist")

1. Remove dist directory from the .gitignore file
2. Run git add dist
3. Run git commit -m "Initial dist subtree commit"
4. Run git subtree push --prefix dist origin gh-pages