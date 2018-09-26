# chi-square-p-value

Find Chi Square, P-value, Degree of Freedom of a contingency Table ie, two dimensional array

A working sample can be seen here [http://statpages.info/chisq.html](http://statpages.info/chisq.html)

# Usage

`npm install chi-square-p-value`

In your file

```javascript
import Analyse from 'chi-square-p-value';

const contingencyTable = [
	[23, 126],
	[3, 8],
	[1, 6],
	[2, 0]
];

/****
* chi - Chi Square value
* df - Degree of Freedom
* pValue - P Value
* residual - Adjusted Residual values of array
***/

const { chi, df, pValue, residual } = Analyse(contingencyTable);

```