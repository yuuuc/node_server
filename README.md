# dep

1. express `yarn add express -g`
2. typescript `yarn add typescript -g`
3. @type/node `yarn add @type/node -D`
4. @type/express `yarn add @type/express -D`
5. ts-node `yarn add ts-node`
6. nodemon `yarn add nodemon`
7. eslint `yarn add eslint`

# tsconfig.json

```javascript
{
"compilerOptions": {
  "target": "es2016",
  "module": "commonjs",
  "lib": ["es2016","dom"],
  "outDir": "dist",
},
"exclude": ["node_modules"]
}
```
