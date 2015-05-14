# js-test-data

A data library to make test cases easier to implement. Choose from a few different data formats to suit your needs.

##Available Test Data 
* **Data.Toppings**: An array of objects containing label and value properties. Used in testing the [react-tag-list](https://github.com/BI/react-tag-list).
* **Data.TVShows**: An array of option objects containing label and value properties, as well as another property to be used for 'grouping' the options. Used in testing the [react-compact-multiselect](https://github.com/BI/react-compact-multiselect).
* **Data.Fruits**: An array of option objects containing label and value properties, as well as 'grouping' properties allowing the data to have another dimension to it.Used in testing the [react-xzibit-select](https://github.com/BI/react-xzibit-select).

###Grouping Data
The grouping data is also available.
* **Data.Colors**: A flat array of color names.
* **Data.TVNetworks**: A flat array of Tv Network names.
* **Data.Plants**: A flat array of plant names.

```js
var Data = require('js-test-data');
Data.Fruits
```