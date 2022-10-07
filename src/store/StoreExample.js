// The global data store will be contained in the store directory - in this case, Redux. 
// Each feature will have a folder, which will contain the 
// Redux Toolkit slice, as well as actions and tests. 
// This setup can also be used with regular Redux, 
// you would just create a .reducers.js file and .actions.js file 
// instead of a slice. If you're using sagas, it could be .saga.js 
// instead of .actions.js for Redux Thunk actions.

// .
// └── /src
//     ├── /store
//     │   ├── /authentication
//     │   │   ├── /authentication.slice.js
//     │   │   ├── /authentication.actions.js
//     │   │   └── /authentication.test.js
//     │   ├── /authors
//     │   │   ├── /authors.slice.js
//     │   │   ├── /authors.actions.js
//     │   │   └── /authors.test.js
//     │   └── /books
//     │       ├── /books.slice.js
//     │       ├── /books.actions.js
//     │       └── /books.test.js
//     ├── rootReducer.js
//     └── index.js
// You can also add something like a ui section of the store to handle modals, 
// toasts, sidebar toggling, and other global UI state, 
// which I find better than having const [isOpen, setIsOpen] = useState(false) all over the place.

// In the rootReducer you would import all your slices and 
// combine them with combineReducers, and in index.js you would configure the store.