## react hooks rules
* hooks let you use different React features form your components.
* it starts with use (useState , useEffects k useReducer)
* hooks can only be used at the top level of your components
* do not call hooks inside loops , conditions , or nested functions
* call hooks only from react function components or custom hook. do not call hooks form regular javascript functions or in class components
* you can also create your own custom hooks by creating function starting with use ensures that react can identify it as a hook . (ex useFetch , useForm)
* ensure hooks are called in the same order, this allows react to properly preserve between re -renders