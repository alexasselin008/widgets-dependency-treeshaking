# widgets-dependency-treeshaking

This repository has 3 project

- lib (function A, B, C, D)
- widgetA (uses lib's function A and C)
- widgetB (uses lib's function B and C)

I would like to compile those 3 projects into 3 separate files:
- lib.js (contains ONLY function A, B and C)
- widgetA.js (imports lib.js)
- widgetB.js (imports lib.js)

By default, since lib.js doesn't know which functions will be used by consumer, building it would result in a file that contains all functions (A, B, C). This is not ideal because widgetA and widgetB only use function A and B respectively.

So i'm thinking that i can use tree shaking to remove unused functions from lib.js. But i'm not sure how to do it. It might be with a second build pass.

