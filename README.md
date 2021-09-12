# Word finder

_Esta aplicación permite obtener la palabra más repetida dentro de un párrafo._

## Getting Starter 🚀

_Estas instrucciones te permitirán ejecutar el proyecto en tu maquina local._



## Installing dependencies 🔧

_Ejecute la siguiente instrucción para realizar la instalación de las dependencias del proyecto._

```
npm install
```

## Run project ⚙️

_Para ejecutar el proyecto solo debe correr la suite de pruebas unitarias._

```
npm run test
```

## Built with 🛠️

_Las herramientas utilizadas para crear este proyecto son:_

* [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale
* [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code

## Examples 📖

### Deberia retornar la palabra "copa".  📖
```
Input:

paragraph = 'Copa América: El medio más importante de Estados Unidos también le dio protagonismo a la final de Copa América con un "Messi y Argentina derrotan a Brasil para ganar la Copa América".',

wordsNotAllowed = ['messi', 'argentina', 'brasil', 'américa']

Output: "copa"

Explain: The word that is repeated the most times is "copa" with a total number of repetitions of three.


Frequency of the words not excluded
{
    copa: 3,
    el: 1,
    medio: 1,
    'más': 1,
    importante: 1,
    de: 2,
    estados: 1,
    unidos: 1,
    'también': 1,
    le: 1,
    dio: 1,
    protagonismo: 1,
    a: 2,
    la: 2,
    final: 1,
    con: 1,
    un: 1,
    y: 1,
    derrotan: 1,
    para: 1,
    ganar: 1
}

```

### Deberia retornar la palabra "de".  📖
```
Input:

paragraph = 'El triunfo más esperado y sudoroso, el que rompe un ayuno de 28 años para todo un pueblo y que finalmente consagra al mejor jugador del mundo con su selección: Argentina campeón de Sudamérica y Messi finalmente triunfador incluso con el colores albicelesti. Tras 14 años de intentarlo, la Pulga salda cuentas con el destino al llevarse esa Copa escapada tres veces a un paso de la meta (en 2007, 2015 y 2016). Lo hace además en Maracaná, donde se tragó el bocado más amargo de su carrera, la final mundial perdida en 2014 contra Alemania. Esta vez, frente a los rivales históricos.',

wordsNotAllowed = ['messi', 'argentina', 'brasil', 'américa', 'pulga', 'final', 'copa', 'triunfo', 'maracaná', 'rivales', 'pueblo', 'selección', 'históricos', 'además', 'campeón', 'el', 'vez', 'esta']

Output: "de"

Explain: The word that is repeated the most times is "de" with a total number of repetitions of five.


Frequency of the words not excluded
{
    '14': 1,
    '28': 1,
    '2007': 1,
    '2014': 1,
    '2015': 1,
    '2016': 1,
    'más': 2,
    esperado: 1,
    y: 4,
    sudoroso: 1,
    que: 2,
    rompe: 1,
    un: 3,
    ayuno: 1,
    de: 5,
    'años': 2,
    para: 1,
    todo: 1,
    finalmente: 2,
    consagra: 1,
    al: 2,
    mejor: 1,
    jugador: 1,
    del: 1,
    mundo: 1,
    con: 3,
    su: 2,
    'sudamérica': 1,
    triunfador: 1,
    incluso: 1,
    colores: 1,
    albicelesti: 1,
    tras: 1,
    intentarlo: 1,
    la: 3,
    salda: 1,
    cuentas: 1,
    destino: 1,
    llevarse: 1,
    esa: 1,
    escapada: 1,
    tres: 1,
    veces: 1,
    a: 2,
    paso: 1,
    meta: 1,
    en: 3,
    lo: 1,
    hace: 1,
    donde: 1,
    se: 1,
    'tragó': 1,
    bocado: 1,
    amargo: 1,
    carrera: 1,
    mundial: 1,
    perdida: 1,
    contra: 1,
    alemania: 1,
    frente: 1,
    los: 1
}
```

### Deberia retornar la palabra "principle".  📖
```
Input:

paragraph = 'SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands for five key design principles: single responsibility principle, open-closed principle, Liskov substitution principle, interface segregation principle, and dependency inversion principle. All five are commonly used by software engineers and provide some important benefits for developers.',

wordsNotAllowed = ['solid', 'is', 'popular', 'principles', 'design', 'development', 'software', 'liskov', 'segregation', 'dependency', 'inversion', 'engineers', 'important', 'benefits', 'developers', 'responsibility', 'key', 'stands']

Output: "principle"

Explain: The word that is repeated the most times is "principle" with a total number of repetitions of five.


Frequency of the words not excluded
{
    a: 1,
    set: 1,
    of: 1,
    that: 2,
    are: 2,
    used: 2,
    in: 1,
    objectoriented: 1,
    an: 1,
    acronym: 1,
    for: 2,
    five: 2,
    single: 1,
    principle: 5,
    openclosed: 1,
    substitution: 1,
    interface: 1,
    and: 2,
    all: 1,
    commonly: 1,
    by: 1,
    provide: 1,
    some: 1
}
```

### Deberia retornar la palabra "ball".  📖
```
Input:

paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.',

wordsNotAllowed = ['hit']

Output: "ball"

Explain: The word that is repeated the most times is "ball" with a total number of repetitions of two.


Frequency of the words not excluded
{
    bob: 1,
    a: 1,
    ball: 2,
    the: 1,
    flew: 1,
    far: 1,
    after: 1,
    it: 1,
    was: 1
}
```


### Deberia retornar la palabra "ball".  📖
```
Input:

paragraph = 'a.',

wordsNotAllowed = []

Output: 'a'

Explain: The word that is repeated the most times is "a" with a total number of repetitions of one.


Frequency of the words not excluded
{
    a: 1
}
```