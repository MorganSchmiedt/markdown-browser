# Markdown to HTML Parser - Browser version
<a href="README.md"><img src="./img/gb.svg" height="16px"></a>
<a href="README.fr.md"><img src="./img/fr.svg" height="16px"></a>

This Markdown-to-HTML parser is the Browser version of the Node.js parser available here: [@deskeen/markdown](https://github.com/deskeen/markdown)


## Usage

Download the module from the `dist/` directory and add it to your project. You can then import it and use it:

```javascript
import parser from '{PATH}/markdown.min.js'

const html = parser.parse('some markdown text').innerHTML

// html === '<p>some markdown text</p>'
```

## Learn more

Please check out the Node.js version repo for more informations: [@deskeen/markdown](https://github.com/deskeen/markdown)

You can find there the full list of the supported and unsupported Markdown syntaxes, an easy-to-read cheatsheet, a compatibility table with other popular markdown syntaxes and plenty of examples.


### Differences with the Node.js version

The parser returns an standard [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).

Also, new elements can be created by using the standard DOM functions: [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [document.createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode).


## Contact

You can reach me at {my_firstname}@{my_name}.fr


## Licence

MIT Licence - Copyright (c) Morgan Schmiedt