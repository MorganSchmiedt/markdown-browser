# Parseur Markdown vers HTML pour le Navigateur
<a href="README.md"><img src="./img/gb.svg" height="16px"></a>
<a href="README.fr.md"><img src="./img/fr.svg" height="16px"></a>

Ce parseur Markdown-vers-HTML est la version navigateur du parseur pour Node.js disponible ici : [@deskeen/markdown](https://github.com/deskeen/markdown)


## Utilisation

Téléchargez le module depuis le repertoire `dist/` et ajoutez-le à votre projet. Vous pouvez ensuite l'importer et l'utiliser:

```javascript
import parser from '{PATH}/markdown.min.mjs'

const html = parser.parse('mon texte markdown').innerHTML

// html === '<p>mon texte markdown</p>'
```

## En savoir plus

Pour d'informations sur : [@deskeen/markdown](https://github.com/deskeen/markdown)


### Différences avec la version Node.js

Le parseur retourne un [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).

Les nouveaux éléments peuvent être créés en utilisant les fonctions du DOM : [document.createElement](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) et [document.createTextNode](https://developer.mozilla.org/fr/docs/Web/API/Document/createTextNode).


## Contact

Vous pouvez me contacter à l'adresse {mon_prenom}@{mon_nom}.fr


## Licence

Licence MIT - Copyright (c) Morgan Schmiedt