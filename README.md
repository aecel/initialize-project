# initialize-project

## Usual steps to starting a project

1. Go to github, add a new repository
2. Add a README.md and a .gitignore that ignores Node
3. Run this to generate a package.json file

```
npm init -y
```

4. Run this to install webpack

```
npm install webpack webpack-cli --save-dev
```

5. Create a src and dist directory
6. Create an index.js file in src
7. Create an index.html file in dist. Link main.js defer in the script file.
8. Create a webpack.config.js file. Copy the sample file in here. If you want to make your own, the contents are:

```
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
}
```

9. Run this (For more about asset management in webpack, go to https://webpack.js.org/guides/asset-management)

```
npm install --save-dev style-loader css-loader
```

10. Add "watch": "webpack --watch" in "script" of the package.json file like this:

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
```

11. You can copy the usual code from index.js and style.css in src, and index.html in dist. (Files are still being edited)
12. Run this so that webpack compiles every time you save

```
npm run watch
```

## Optional steps of adding Jest

1. Run this to install

```
 npm install --save-dev jest
```

2. Add this section to your package.json

```
{
  "scripts": {
    "test": "jest"
  }
}
```

## Optional step of adding babel

1. Run this to install

```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

2. Add babel-loader to webpack.config.js, like this:

```
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
```

3. This part is for Jest (so that you can use modules with Jest)
4. Run this to install

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

5. Make a babel.config.js file and add this

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Optional step of adding eslint but idc I kinda hate it

1. Run this to install

```
npm install eslint --save-dev
```

2. Run this

```
./node_modules/.bin/eslint --init
```

3. Idk follow these steps: https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
4. Copy the ".eslintrc.json" file in the to-do repo

-- Deploying a subfolder to github pages (assuming that the folder is called "dist") --

1. Remove dist directory from the .gitignore file
2. Run these

```
git add dist
git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages
```
