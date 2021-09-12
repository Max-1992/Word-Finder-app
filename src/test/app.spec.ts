import WordFinder from '../app'

describe('Test suite for WordFinder clase', () => {

  describe('Test suite for texts in Spanish', () => {
    it('It should return the word "copa".', () => {

      // Arrange - Preparación
      const paragraph = 'Copa América: El medio más importante de Estados Unidos también le dio protagonismo a la final de Copa América con un "Messi y Argentina derrotan a Brasil para ganar la Copa América".'
      const wordsNotAllowed = ['messi', 'argentina', 'brasil', 'américa']

      // Act - Actuación
      const wordFinder = new WordFinder()
      const word = wordFinder.findWordMostRepeat(paragraph, wordsNotAllowed)

      // Assert o Aserción
      expect(word).toEqual('copa')
    })

    it('It should return the word "de".', () => {

      // Arrange - Preparación
      const paragraph = 'El triunfo más esperado y sudoroso, el que rompe un ayuno de 28 años para todo un pueblo y que finalmente consagra al mejor jugador del mundo con su selección: Argentina campeón de Sudamérica y Messi finalmente triunfador incluso con el colores albicelesti. Tras 14 años de intentarlo, la Pulga salda cuentas con el destino al llevarse esa Copa escapada tres veces a un paso de la meta (en 2007, 2015 y 2016). Lo hace además en Maracaná, donde se tragó el bocado más amargo de su carrera, la final mundial perdida en 2014 contra Alemania. Esta vez, frente a los rivales históricos.'
      const wordsNotAllowed = ['messi', 'argentina', 'brasil', 'américa', 'pulga', 'final', 'copa', 'triunfo', 'maracaná', 'rivales', 'pueblo', 'selección', 'históricos', 'además', 'campeón', 'el', 'vez', 'esta']

      // Act - Actuación
      const wordFinder = new WordFinder()
      const word = wordFinder.findWordMostRepeat(paragraph, wordsNotAllowed)

      // Assert o Aserción
      expect(word).toEqual('de')
    })
  })

  describe('Test suite for texts in English', () => {
    it('It should return the word "principle".', () => {

      // Arrange - Preparación
      const paragraph = 'SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands for five key design principles: single responsibility principle, open-closed principle, Liskov substitution principle, interface segregation principle, and dependency inversion principle. All five are commonly used by software engineers and provide some important benefits for developers.'
      const wordsNotAllowed = ['solid', 'is', 'popular', 'principles', 'design', 'development', 'software', 'liskov', 'segregation', 'dependency', 'inversion', 'engineers', 'important', 'benefits', 'developers', 'responsibility', 'key', 'stands']

      // Act - Actuación
      const wordFinder = new WordFinder()
      const word = wordFinder.findWordMostRepeat(paragraph, wordsNotAllowed)

      // Assert o Aserción
      expect(word).toEqual('principle')
    })

    it('It should return the word "ball".', () => {

      // Arrange - Preparación
      const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'
      const wordsNotAllowed = ['hit']

      // Act - Actuación
      const wordFinder = new WordFinder()
      const word = wordFinder.findWordMostRepeat(paragraph, wordsNotAllowed)

      // Assert o Aserción
      expect(word).toEqual('ball')
    })

    it('It should return the word "a".', () => {

      // Arrange - Preparación
      const paragraph = 'a.'
      const wordsNotAllowed: any[] = []

      // Act - Actuación
      const wordFinder = new WordFinder()
      const word = wordFinder.findWordMostRepeat(paragraph, wordsNotAllowed)

      // Assert o Aserción
      expect(word).toEqual('a')
    })
  })
})
