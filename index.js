// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if the string is empty or consists solely of whitespaces.
String.prototype.blank = function(string) {
  if (string === /^\s*$/) {
    return true;
  }
}

// Return last element of an array.
Array.prototype.last = function(array) {
  return array.slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}