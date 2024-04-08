import { assertString } from "../../utils/assertString";
import { merge } from "../../utils/merge";

const upperCaseRegex = /^[A-Z]$/;
const lowerCaseRegex = /^[a-z]$/;
const numberRegex = /^[0-9]$/;
// const symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
const specialCharRegex = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#\\"\\]/

export interface IDefaultPasswordOption {
    minLength: number,
    minLowercase: number,
    minUppercase: number,
    minNumbers: number,
    minSpecialChars: number,

}
const defaultOptions: IDefaultPasswordOption = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSpecialChars: 1,
};
// will use it if need score
// const defaultOptions = {
//   minLength: 8,
//   minLowercase: 1,
//   minUppercase: 1,
//   minNumbers: 1,
//   minSpecialChars: 1,
//   returnScore: false,
//   pointsPerUnique: 1,
//   pointsPerRepeat: 0.5,
//   pointsForContainingLower: 10,
//   pointsForContainingUpper: 10,
//   pointsForContainingNumber: 10,
//   pointsForContainingSpecialChar: 10,
// };

/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/
function countChars(str: string) {
  let result = {};
  Array.from(str).forEach((char) => {
    let curVal = result[char];
    if (curVal) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}

/* Return information about a password */
function analyzePassword(password) {
  let charMap = countChars(password);
  let analysis = {
    length: password.length,
    uniqueChars: Object.keys(charMap).length,
    uppercaseCount: 0,
    lowercaseCount: 0,
    numberCount: 0,
    specialCharCount: 0,
  };
  Object.keys(charMap).forEach((char) => {
    /* istanbul ignore else */
    if (upperCaseRegex.test(char)) {
      analysis.uppercaseCount += charMap[char];
    } else if (lowerCaseRegex.test(char)) {
      analysis.lowercaseCount += charMap[char];
    } else if (numberRegex.test(char)) {
      analysis.numberCount += charMap[char];
    } else if (specialCharRegex.test(char)) {
      analysis.specialCharCount += charMap[char];
    }
  });
  return analysis;
}

function scorePassword(analysis, scoringOptions) {
  let points = 0;
  points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
  points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
  if (analysis.lowercaseCount > 0) {
    points += scoringOptions.pointsForContainingLower;
  }
  if (analysis.uppercaseCount > 0) {
    points += scoringOptions.pointsForContainingUpper;
  }
  if (analysis.numberCount > 0) {
    points += scoringOptions.pointsForContainingNumber;
  }
  if (analysis.specialCharCount > 0) {
    points += scoringOptions.pointsForContainingSpecialChar;
  }
  return points;
}

export function isStrongPassword(str: string, options: null | IDefaultPasswordOption = null): boolean {
  assertString(str);
  const analysis = analyzePassword(str);
  options = merge(options || {}, defaultOptions);
//   if (options.returnScore) {
//     return scorePassword(analysis, options);
//   }
  return analysis.length >= options.minLength
        && analysis.lowercaseCount >= options.minLowercase
        && analysis.uppercaseCount >= options.minUppercase
        && analysis.numberCount >= options.minNumbers
        && analysis.specialCharCount >= options.minSpecialChars;
}