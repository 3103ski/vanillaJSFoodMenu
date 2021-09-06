This is an educational project

The intention was to explore a couple concepts and ideas:

-   Use JS closures to think about how they compare to using JS classes/prototype for encapsulation
-   Pay attention to lexical scoping of content instances and the benefits closures are providing
-   Render html templates dynamically using vanilla JS
-   Dynamically update DOM elements from data inside closures

Code Details:

-   index.html is super basic and contains only css, script imports, and a div named
    "app_main_container"
-   onload JS injects the page template into that div
-   The page's cart, menu, and food items are all IIFEs invoking a closure for each and assigning
    them to global variables
-   an id pattern for the rendered buttons allows a practical way of assigning event listeners AFTER
    something gets rendered
