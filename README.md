# Steps for Pig Latin Script Testing (TDD)

**TL;DR:**
Today, we applied a Test-Driven Development (TDD) approach to testing, focusing on defining requirements through tests, performing unit tests for each function, iterative development, and validating error handling. We used Pig Latin as our example to ensure each function meets its requirements and integrates smoothly.

**Summary:**
We adopted a Test-Driven Development (TDD) approach for our testing process. This involved defining requirements through test cases before implementing functions, focusing on unit tests for each function, and using an iterative approach to ensure that code passes all tests. We emphasized validation and error handling, making sure all functions work together correctly to convert words into Pig Latin. This method aligns with TDD principles by writing tests first, developing code to pass those tests, and refining the code as needed.

## 1. Input Validation

**Description**: Verify that the input is valid, meaning it should be a string and not empty. If the input is not valid, it should throw an error with the appropriate message.

- **Input**: `""`, `12345`, `null`
- **Expected Result**: An error with the message `"Only strings allowed"`.

## 2. Word Normalization

**Description**: Ensure that words with a mix of uppercase, lowercase, and symbols are properly normalized. Remove symbols from the end of the word but keep them for later use.

- **Input**: `"HeLLo!"`, `"QUICK@"`
- **Expected Result**: 
    - `{ cleanWord: "hello", symbol: "!" }`
    - `{ cleanWord: "quick", symbol: "@" }`

## 3. Words Starting with a Vowel

**Description**: Verify that words starting with a vowel follow the **Pig Latin** rules and end with `'way'`.

- **Input**: `"apple"`, `"orange"`
- **Expected Result**: `"appleway"`, `"orangeway"`

## 4. Words Starting with a Consonant Followed by a Vowel

**Description**: If the first letter is a consonant and the second letter is a vowel, the first letter should be moved to the end, and `'ay'` should be added.

- **Input**: `"hello"`, `"quick"`
- **Expected Result**: `"ellohay"`, `"uickqay"`

## 5. Words Starting with Two or More Consonants

**Description**: Verify that if the first two letters are consonants, both should be moved to the end, and `'ay'` should be added.

- **Input**: `"school"`, `"brown"`, `"string"`
- **Expected Result**: `"oolschay"`, `"ownbray"`, `"ingstray"`

## 6. Words Without Vowels

**Description**: Verify the function's behavior with words that do not contain vowels. Add `'ay'` to the end of the word.

- **Input**: `"rhythm"`, `"tsk"`
- **Expected Result**: `"rhythmay"`, `"tskay"`

## 7. Final Test for Converting Any Word to Pig Latin

**Description**: Verify that the final function takes any word, applies the **Pig Latin** rules, and transforms the word correctly, preserving symbols.

- **Input**: `"HeLLo!"`, `"QUICK@"`, `"school"`, `"rhythm"`
- **Expected Result**: `"ellohay!"`, `"uickqay@"`, `"oolschay"`, `"rhythmay"`
