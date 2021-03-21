# Markdown to HTML Parser - Browser version
<a href="README.md"><img src="./img/gb.svg" height="16px"></a>
<a href="README.fr.md"><img src="./img/fr.svg" height="16px"></a>

This Markdown-to-HTML parser is the browser version of the Node.js parser available here: [@deskeen/markdown](https://github.com/deskeen/markdown)


## Usage

Download the module from the `dist/` directory and add it to your project. You can then import it and use it:

```javascript
import parser from '{PATH}/markdown.min.mjs'

const html = parser.parse('some markdown text').innerHTML

// html === '<p>some markdown text</p>'
```

## Learn more

For information on: [@deskeen/markdown](https://github.com/deskeen/markdown)


### Differences with the Node.js version

The parser returns a standard [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).

New elements can be created using the standard DOM functions: [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [document.createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode).


## Contact

You can reach me at {my_firstname}@{my_name}.fr


## Licence

MIT Licence - Copyright (c) Morgan Schmiedt