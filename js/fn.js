//  Функция для проверки длины строки
function checkSizeString (string, numberLetters) {
  if (string.length >= numberLetters) {
    return true;
  } return false;
}

// Функция палиндром
function palindrome(data) {
  data = data.toString().toLowerCase().replace(/\s|[,.!?"/-]/g, '');
  return data === data.split('').reverse().join('');
}

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:
function extractsNumber(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(string.at(i))) (isFinite(string.at(i))) {
      result += string.at(i);
    }
  }
  return Number(result);
};

// Функция принимает: исходную строку, минимальную длину и строку с добавочными символами
// Возвращает исходную строку, дополненную указанными символами до заданной длины.
// Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
// Если «добивка» слишком длинная, она обрезается с конца.
function addingSymbols(initialString, minLength, addSymbols) {
  let getString = '';
  const getLength = minLength - initialString.length;
  if (initialString.length < minLength) {
    while (getString.length < getLength) {
      if ((addSymbols.length + getString.length) > getLength) {
        getString = addSymbols.slice(minLength, getLength - getString.length).concat(getString);
      }
      break;
    }
    getString += addSymbols;
  }
  return getString.concat(initialString);
}
