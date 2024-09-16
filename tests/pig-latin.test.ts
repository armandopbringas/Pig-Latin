import { validateInput, normalizeWord, getVowel, getConsonant, getUntilThreeConsonants, getOnlyConsonants, pigLatin } from '../src/pig-latin';

describe('Pig Latin Tests', () => {
  test('Should throw error for empty or invalid input', () => {
    expect(() => validateInput('')).toThrow('Only strings allowed');
    expect(() => validateInput(12345)).toThrow('Only strings allowed');
    expect(() => validateInput(null)).toThrow('Only strings allowed');
  });

  test('Should normalize words with mixed case and symbols', () => {
    expect(normalizeWord('HeLLo!')).toEqual({ cleanWord: 'hello', symbol: '!' });
    expect(normalizeWord('QUICK@')).toEqual({ cleanWord: 'quick', symbol: '@' });
  });

  test('Should add "way" for words starting with a vowel', () => {
    expect(getVowel('apple')).toBe('appleway');
    expect(getVowel('orange')).toBe('orangeway');
  });

  test('Should move first consonant to the end and add "ay"', () => {
    expect(getConsonant('hello')).toBe('ellohay');
    expect(getConsonant('quick')).toBe('uickqay');
  });

  test('Should move consonants to the end and add "ay" for multiple consonants', () => {
    expect(getUntilThreeConsonants('school')).toBe('oolschay');
    expect(getUntilThreeConsonants('brown')).toBe('ownbray');
    expect(getUntilThreeConsonants('string')).toBe('ingstray');
  });

  test('Should handle words without vowels and add "ay"', () => {
    expect(getOnlyConsonants('rhythm')).toBe('rhythmay');
    expect(getOnlyConsonants('tsk')).toBe('tskay');
  });

  test('Should convert words to Pig Latin correctly', () => {
    expect(pigLatin('HeLLo!')).toBe('ellohay!');
    expect(pigLatin('QUICK@')).toBe('uickqay@');
    expect(pigLatin('school')).toBe('oolschay');
    expect(pigLatin('brown')).toBe('ownbray');
    expect(pigLatin('rhythm')).toBe('rhythmay');
    expect(() => pigLatin(12345)).toThrow('Only strings allowed');
  });
});
