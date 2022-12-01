// Problema: Se requiere escribir un algoritmo que pueda leer y escribir valores en un cierto path determinado de un objeto cuya estructura es desconocida.

// Tareas:
// Definir e implementar unit tests
// Escribir el algoritmo

// Signature:
// deepGet(object, path) : any
// Ejemplo:
// deepGet(object, ‘sons[1].grandsons[0].name’)

const mockedObject = {
  name: "Jose",
  sons: [{ grandsons: [{ name: "Joselito" }] }],
  info: {
    addresses: [{ name: "Street Test", number: 24 }],
  },
};

function deepGet(obj, path) {
  let val = {};
  const paths = path.split(".");
  for (let i = 0; i < paths.length; i++) {
    const pathName = paths[i];

    if (pathName.indexOf("[") !== -1) {
      const name = pathName.split("[")[0];
      const index = pathName.split("[")[1][0];
      if (val == undefined) break;
      if (Object.keys(val).length > 0) {
        val = val[name][index];
      } else {
        val = obj[name][index];
      }
      continue;
    }
    if (Object.keys(val).length == 0 && i === 0) {
      val = obj[pathName];
    } else {
      val = val[pathName];
    }
  }

  if (val == undefined) return null;
  return val;
}

console.log(deepGet(mockedObject, "info.addresses[0].number"));

module.exports = deepGet;
