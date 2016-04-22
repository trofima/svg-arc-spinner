SVG Arc Spinner
===============

Just one more svg arc spinner. 
It returns string representing the svg arc spinner.

All you need is in [dist](/dist/) folder. The class uses commonjs pattern for module exporting.
Typescript declarations can be found [here](/dist/SVGArcSpinner.d.ts).
 
Example
-------

```javascript
    var spinnerContainer = document.createElement('div');
    
    spinnerContainer.innerHTML = new SVGArcSpinner({size: 100}).render();
```