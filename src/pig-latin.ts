const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u'];

export const validateInput = (word: any): string => {
  if (typeof word !== 'string' || word.trim() === '') throw new Error('Only strings allowed');
  return word.trim();
};

export const normalizeWord = (word: string): { cleanWord: string, symbol: string } => {
  const lowerCasedWord = word.toLowerCase();
  const symbolMatch = lowerCasedWord.match(/[^a-zA-Z]+$/);
  const symbol = symbolMatch ? symbolMatch[0] : '';
  const cleanWord = lowerCasedWord.replace(/[^a-zA-Z]+$/, '');
  return { cleanWord, symbol };
};

export const getVowel = (cleanWord: string): string => {
  if (VOWELS.includes(cleanWord[0])) return cleanWord + 'way';
  return cleanWord;
};

export const getConsonant = (cleanWord: string): string => {
  if (!VOWELS.includes(cleanWord[0]) && VOWELS.includes(cleanWord[1])) {
    const modifiedWord = cleanWord.slice(1) + cleanWord[0] + 'ay';
    return modifiedWord;
  }
  return cleanWord;
};

export const getUntilThreeConsonants = (cleanWord: string): string => {
  const firstVowelIndex = cleanWord.split('').findIndex(char => VOWELS.includes(char));
  if (firstVowelIndex === -1) return cleanWord + 'ay';
  if (firstVowelIndex > 0) {
    const consonantCluster = cleanWord.slice(0, firstVowelIndex);
    const restOfWord = cleanWord.slice(firstVowelIndex);
    return restOfWord + consonantCluster + 'ay';
  }
  return cleanWord + 'way';
};

export const getOnlyConsonants = (cleanWord: string): string => {
  const containsVowel = cleanWord.split('').some(char => VOWELS.includes(char));
  if (!containsVowel) return cleanWord + 'ay';
  return cleanWord;
};

export const pigLatin = (word: any): string => {
  const validatedWord = validateInput(word);
  const { cleanWord, symbol } = normalizeWord(validatedWord);
  let pigLatinWord = getVowel(cleanWord);
  if (pigLatinWord === cleanWord) pigLatinWord = getConsonant(cleanWord);
  if (pigLatinWord === cleanWord) pigLatinWord = getUntilThreeConsonants(cleanWord);
  if (pigLatinWord === cleanWord) pigLatinWord = getOnlyConsonants(cleanWord);
  return pigLatinWord + symbol;
};
