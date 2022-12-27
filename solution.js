// complete the given function

function palindrome(str) {
  let newstr = str;
  let start = 0;
  let end = newstr.length - 1;
  while (start < end) {
    if (newstr.charAt(start) !== newstr.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
module.exports = palindrome;
