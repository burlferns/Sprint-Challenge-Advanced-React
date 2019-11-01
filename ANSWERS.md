- [ ] Why would you use class component over function components (removing hooks from the question)?
Under the assumption that I cannot use hooks for function components, then I would use class components over function components as class components would offer the ability to use state variables and also run code at specific times in the component life cycle that I would not be able to do with function components without hooks. 


- [ ] Name three lifecycle methods and their purposes.
1) ComponentDidMount
This method runs after the initial mounting of the components to the real DOM. So it is used to run code after the first mounting of the component. So for example, it is used when we need to get data from a server, and this data affects what is displayed on the webpage. So on the very first render a message is usually displayed saying "loading data", and then after that ComponentDidMount runs to get the server data and save it to state. Then since state changes, the render method is called again and the state data is used to render the page.
2) ComponentDidUpdate
This method runs ever time the render method runs (even if there are no changes to the real DOM). It is used to run any code that needs to be run after the render method runs, for example if there is a change of state to a certain value after a render, and then something (let's call this something doX) is supposed to happen,  ComponentDidUpdate can be used to run code that can detect this state change and then launch other code that can make doX happen.
3)componentWillUnMount
This method runs after a component is unmounted from the DOM. One example of its use is to remove any event listeners that were added to the component for events that React does not support


- [ ] What is the purpose of a custom hook?
To build a standardized hook that you can use multiple times that allows you to be DRY (Don't Repeat Yourself) and thus efficient when it comes to writing the initial code and maintaining it later on


- [ ] Why is it important to test our apps?
We need to write tests for our apps so that:
1) we can find bugs before the end user finds them.
2) we are forced to think about edge cases for our code and thus make sure that our code can handle these edge cases
3) we can verify that any implementation changes done during refactoring do not cause any functional changes, thus it is easier and less expensive to maintain.
