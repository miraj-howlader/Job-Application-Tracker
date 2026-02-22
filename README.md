1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll?

getElementById("id")
👉 Selects one element by its ID.

getElementsByClassName("class")
👉 Selects multiple elements with the same class.
👉 Returns a live collection.

querySelector("selector")
👉 Selects the first matching element using CSS selector.

querySelectorAll("selector")
👉 Selects all matching elements using CSS selector.
👉 Returns a static list

2. How do you create and insert a new element into the DOM?

👉 By using document.createElement() and inserting it with appendChild() or insertAdjacentElement().

3. What is Event Bubbling?

👉 Event bubbling means an event starts from the target element and propagates upward through parent elements.

4. What is Event Delegation? Why is it useful?

 👉 Event delegation uses a parent element to handle events for child elements. It improves performance and works well with dynamically added elements.

5. Difference between preventDefault() and stopPropagation()?

 👉 preventDefault() stops default browser behavior.

 👉 stopPropagation() stops the event from bubbling to parent elements.