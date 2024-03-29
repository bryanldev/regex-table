let re;

// Literal Characters
re = /hello/;

// Modifiers
re = /helo/g;       // Perform a global match (find all matches rather than stopping after the first match)
re = /helo/i;       // Perform case-insensitive matching
re = /helo/m;       // Perform multiline matching

// Metacharacter Symbols

re = /^h/i;         // Must start with
re = /world$/i;     // Must ends with
re = /^hello$/i;    // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gr?a?y/i;     // Optional character
re = /gr?a?y\?/i;   // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an a or e
re = /[GF]ray/i;      // Must be a G or F
re = /[^GF]ray/i;     // Match anything except a G or F
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;    // Must occur exactly {m} amount of times
re = /Hel{2,}/i;      // Must  occur at last {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Chacter Classes
re = /\w/;             // Word character - alphanumeric or _
re = /\w+/;            // + = one or more
re = /\W/;             // Non-Word character
re = /\d/;             // Match any digit
re = /\d+/;            // Match any digit 0 or more times
re = /\D/;             // Macth any Non-digit
re = /\s/;             // Macth whitespace char
re = /\S/;             // Macth non-whitespace char
re = /Hell\b/i;        // Word boundary

// Assertions
re = /x(?=y)/;         // Match x only if followed by x
re = /x(?!y)/;         // Match x only if NOT followed by x

// String to match
const str = 'gray';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log (`${str} matches ${re.source}`);
  } else {
    console.log (`${str} does NOT match ${re.source}`);
  }
}

// Remove this comment to test your regular expressions.
// reTest(re, str);
