1. What problem does the context API help solve?

you no longer have to pass down props from component to component

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the single place where state is stored. Actions are packets of information that contain action type and associated data. Reducers receive the action and update state according to type and payload.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is pieces of state for the entire application, for multiple components. Component state is just the state for a single component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is a middleware that provides the ability to handle asynchronous operations 
inside our action creators.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Context-API the best just because of how much simpler it seems to be to use.
