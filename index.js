var scanf = require(`scanf`);

var ListaString = [];
var cancelar;

do {
    console.log(`Ingrese cadenas de texto, digite *CANCELAR* si desea salir`)
    let Stringlist = scanf(`%s`);
    cancelar = Stringlist;
    ListaString.push(SaveString);
} while (cancelar != "cancelar");

ListaString.splice(ListaString.findIndex(element => element === `cancelar`), 1);

ListaString.forEach((SaveString, index) => {
    console.log(`${index + 1}.${SaveString.strings}`)
});
