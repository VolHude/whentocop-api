# When to cop API
EN: Interact with the When to cop API

FR: Interagir avec l'API de When to cop

## Example
```js
const whentocop = require("whentocop-api");
myDate = new Date();
const drops = await whentocop.search(myDate);
console.log(drops);
```
## Notez que le paramètre myDate doit être une instance de Date ou undefined si vous souhaitez utiliser la date actuelle.

