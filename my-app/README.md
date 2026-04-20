## HOOKS
- Hooks are nothing just a simple function.
- It is predefined.
- Paranthesis is needed.
- Hooks allow you to use state and other features without writing a class.

>There is 2 rules to use Hooks. <br>
    1. Only call Hooks at the top level.<br>
    2. Only call hooks from React functions.

Note: we cant rerender elements using normal JS elements.

## Useeffect
>it is used to manage all the life cycle methods alone.

Syntax:
```jsx
useEffect(()=>{},[])
useEffect Takes 2 parameter-- Callback and dependancy-array
```
If the dependency array is empty then it will mount only , when the page is reloaded for the first time.once