# Steps to reproduce

- Run `npm install`
- Run `npm run build`
- Inspect the runtime file in `dist/runtime~main.303.43e9c511529c185ee664.js`

# Example output

```
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"179":"main","303":"runtime~main"}[chunkId] || chunkId) + "." + chunkId + "." + {"179":"c539139b868f46f81e90","229":"31d6cfe0d16ae931b73c","851":"31d6cfe0d16ae931b73c"}[chunkId] + ".css";
/******/ 		};
```

# Bug 1 - Extra chunkId

`__webpack_require__.miniCssF` contains a mapping `"303":"runtime~main"`, however chunk#303 does not have a CSS file.

# Bug 2 - Extra content hashes

`__webpack_require__.miniCssF` contains mappings for `"229":"31d6cfe0d16ae931b73c"` and `"851":"31d6cfe0d16ae931b73c"`, however those chunks don't have CSS files.


# Correct output

The output should be:

```
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"179":"main"}[chunkId] || chunkId) + "." + chunkId + "." + {"179":"c539139b868f46f81e90"}[chunkId] + ".css";
/******/ 		};
```

As chunk#179 (i.e. main) is the only chunk with a CSS file, `main.179.c539139b868f46f81e90.css`

