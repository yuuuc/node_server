# dep

1. express `npm i express -g`
2. typescript `npm i typescript -g`
3. @type/node `npm i @type/node -D`
4. @type/express `npm i @type/express -D`
5. ts-node `npm i ts-node`
6. nodemon `npm i nodemon`
7. eslint `npm i eslint`

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
