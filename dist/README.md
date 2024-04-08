# @sokhay/js-utils

<p>This library contains es5 and es6 implementations and create using typescript. Simply import your utils as named imports like this:</p>

#### 🚀 Installation
``` bash
yarn add @sokhay/js-utils

npm install @sokhay/js-utils

pnpm install @sokhay/js-utils
```

<h2>Usage</h2>

```
import { utils, validator } from "@sokhay/js-utils";
```

<p><b>Version:</b> 1.0.3</p>

<h2>Function</h2>
<table>
    <thead>
    <tr>
      <th>Function</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="#">assertString</a>
            </td>
            <td>Asserts whether the input is a string. Throws a TypeError if it's not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">countDigits</a>
            </td>
            <td>Counts the total number of digits in a string.</td>
        </tr>
        <tr>
            <td>
                <a href="#">countLowercase</a>
            </td>
            <td>Counts the total number of lowercase letters in a string.</td>
        </tr>
        <tr>
            <td>
                <a href="#">countSpecialChars</a>
            </td>
            <td>Counts the total number of special characters in a string using a regular expression.</td>
        </tr>
        <tr>
            <td>
                <a href="#">countUppercase</a>
            </td>
            <td>Counts the total number of uppercase letters in a string.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isContainsDigit</a>
            </td>
            <td>Takes a string (str) as input and returns a boolean value indicating whether the input string contains at least one digit character (0-9) or not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isContainsLowercase</a>
            </td>
            <td>Takes a string (str) as input and returns a boolean value indicating whether the input string contains at least one lowercase letter (a-z) or not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isContainsSpecialCharacter</a>
            </td>
            <td>Takes a string (str) as input and returns a boolean value indicating whether the input string contains at least one special character or not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isContainsUppercase</a>
            </td>
            <td>Takes a string (str) as input and returns a boolean value indicating whether the input string contains at least one uppercase letter (A-Z) or not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">merge</a>
            </td>
            <td>Merges properties from the defaults object into the obj object if they don't already exist.</td>
        </tr>
         <tr>
            <td>
                <a href="#">passwordValidator</a>
            </td>
            <td>Validates a password against a set of rules.</td>
        </tr>
        <tr>
            <td>
                <a href="#">formatCurrency</a>
            </td>
            <td>Formats a given amount as currency.</td>
        </tr>
        <tr>
            <td>
                <a href="#">formatDateTime</a>
            </td>
            <td>Formats a given date into separate date and time strings.</td>
        </tr>
        <tr>
            <td>
                <a href="#">formatPhoneNumber</a>
            </td>
            <td>Formats a phone number according to a specified format.</td>
        </tr>
        <tr>
            <td>
                <a href="#">compareDates</a>
            </td>
            <td>Compare two dates.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isArray</a>
            </td>
            <td>Returns true if the value is an array.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isBoolean</a>
            </td>
            <td>Returns true if the value is a boolean.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isDate</a>
            </td>
            <td>Returns true if the value is an instance of Date.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isFunction</a>
            </td>
            <td>Returns true if the value is a function.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isNumber</a>
            </td>
            <td>Returns true if the value is a number.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isObject</a>
            </td>
            <td>Returns true if the value is an object.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isString</a>
            </td>
            <td>Returns true if the value is a string.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isSymbol</a>
            </td>
            <td>Returns true if the value is a symbol.</td>
        </tr>
        <tr>
            <td>
                <a href="#">type</a>
            </td>
            <td>ReturnsReturns a string representation of the type which also differentiates between 'object', 'array', 'date'.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isByteLength</a>
            </td>
            <td>Checks if the byte length of a string falls within a specified range.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isEmail</a>
            </td>
            <td>Takes a string (str) as input and returns a boolean value indicating whether the input string represents a valid email address or not.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isNumeric</a>
            </td>
            <td>Return true if a value is numeric.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isRequired</a>
            </td>
            <td>Return true if a value is null, undefined, or an empty string.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isStringExceedMaxLength</a>
            </td>
            <td>Return true if a string's length exceeds the maximum length.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isStringLengthBetween</a>
            </td>
            <td>Return true if the length of a string falls within a specified range.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isStrongPassword</a>
            </td>
            <td>Return true if the password is match the rules.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isEmpty</a>
            </td>
            <td>Return true if the string is empty.</td>
        </tr>
        <tr>
            <td>
                <a href="#">isNull</a>
            </td>
            <td>Return true if the value is null.</td>
        </tr>
    </tbody>
 </table>

<a href="#license"></a>
<h2>License</h2>

MIT


<a href="#author"></a>
<h2>Author</h2>
Try Sokhay
