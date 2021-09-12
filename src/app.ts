class WordFinder {

  public findWordMostRepeat (paragraph: string, wordsNotAllowed: string[]): string {
    const words = this.getAllWords(paragraph)

    const allowedWords = this.excludeWordsNotAllowed(words, wordsNotAllowed)

    const frequencyWords = this.getFrequencyWords(allowedWords)

    const sortedWords = this.sortWordsByFrequency(frequencyWords)

    const word = this.findWord(sortedWords)

    return word
  }

  private getAllWords (paragraph: string): string[] {
    const paragraphWithoutGrammaticalSigns = paragraph.replace(/[.,\\/#!$%\\^&\\*";:{}=\-_`~()]/g, '')

    const words = paragraphWithoutGrammaticalSigns.split(' ')

    return words
  }

  private excludeWordsNotAllowed (words: string[], wordsNotAllowed: string[]): string[] {
    const allowedWords = words.filter(word => !wordsNotAllowed.includes(word.toLocaleLowerCase()))

    return allowedWords
  }

  private getFrequencyWords (words: string[]): { [ key: string ]: number } {
    const countWords: { [ key: string ]: number } = {}

    words.forEach(word => {
      const wordToLowerCase = word.toLocaleLowerCase()
      countWords[wordToLowerCase] = (countWords[wordToLowerCase] || 0) + 1
    })

    return countWords
  }

  private sortWordsByFrequency (words: { [ key: string ]: number }): string[] {
    const wordSorted = Object.keys(words).sort((a: string, b: string) => words[b] - words[a])

    return wordSorted
  }

  private findWord (words: string[]): string {
    const word = words[0].toLocaleLowerCase()

    return word
  }

}

export default WordFinder
