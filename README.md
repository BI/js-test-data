# js-test-data

A data library to make test cases easier to implement.

##Available Test Data Properties
* **TagValues**: A flat array of data values used to test the [react-tag-list](https://github.com/BI/react-tag-list).
* **RCMOptions**: An array of option objects used to test the [react-compact-multiselect](https://github.com/BI/react-compact-multiselect).
* **XzibitOptions**: An array of option objects used to test the [react-xzibit-select](https://github.com/BI/react-xzibit-select).
* **XzibitDimensions**: An array of dimension objects used to test the filterable dimensions in the [react-xzibit-select](https://github.com/BI/react-xzibit-select).


```js
var testData = require('js-test-data');
testData.TagValues
testData.RCMOptions
testData.XzibitOptions
testData.XzibitDimensions
```