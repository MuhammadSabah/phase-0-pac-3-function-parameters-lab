// 1) Introduction function
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2) Introduction with language
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3 & 4) Introduction with language optional
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Example usage
console.log(introduction("Fawzi")); // Hi, my name is Fawzi.
console.log(introductionWithLanguage("Fawzi", "Ruby")); // Hi, my name is Fawzi and I am learning to program in Ruby.
console.log(introductionWithLanguageOptional("Fawzi")); // Hi, my name is Fawzi and I am learning to program in JavaScript.
console.log(introductionWithLanguageOptional("Fawzi", "Python")); // Hi, my name is Fawzi and I am learning to program in Python.
