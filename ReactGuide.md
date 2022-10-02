# Steps to start a React project

1. Run this in your main repos folder. This will create a new folder with the name you specified.

```
npx create-react-app {name of your project/repo}

```

2. Open VSCode with the new path, by running this:

```
code ./{name of your project/repo}
```

3. Remove boilerplate code and unnecessary imports.

4. Create a components folder and a styles folder in your src. Idk that's it actually. Start.

# Steps to deploy on github pages

1. First make sure that you have pushed your project

2. Make sure that your remote is named origin. To check, run:

```
git remote -v
```

3. If it is not named origin, run this

```
git remote add origin <url>
```

4. Install the gh-pages package as a "dev-dependency" of the app

```
npm install gh-pages --save-dev
```

5. Add a homepage property to your package.json file. For example:

```
"homepage": "https://{github username}.github.io/{your repo name}"
```

6. Add these script commands to your package.json file. Like this:

```
"scripts" : {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```

7. Run these

```
npm run predeploy
npm run deploy
```

8. Check your repo's Github Pages settings. If it is still not active/published, set your Github Pages source to be the gh-pages branch.
