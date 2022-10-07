// https://www.taniarascia.com/react-architecture-directory-structure/


// Within the components folder, I would group by type - forms, 
// tables, buttons, layout, etc. The specifics will vary by your specific app.

// In this example, I'm assuming you're either creating your own form system, 
// or creating your own bindings to an existing form system (for example, 
// combining Formik and Material UI). In this case, you'd create a folder for 
// each component (TextField, Select, Radio, Dropdown, etc.), 
// and inside would be a file for the component itself, the styles, 
// the tests, and the Storybook if it's being used.

// - Component.js - The actual React component
// - Component.styles.js - The Styled Components file for the component
// - Component.test.js - The tests
// - Component.stories.js - The Storybook file

// To me, this makes a lot more sense than having one folder that contains 
// the files for ALL components, one folder that contains all the tests, 
// and one folder that contains all the Storybook files, etc. 
// Everything related is grouped together and easy to find.

// .
// └── /src
//     └── /components
//         ├── /forms
//         │   ├── /TextField
//         │   │   ├── TextField.js
//         │   │   ├── TextField.styles.js
//         │   │   ├── TextField.test.js
//         │   │   └── TextField.stories.js
//         │   ├── /Select
//         │   │   ├── Select.js
//         │   │   ├── Select.styles.js
//         │   │   ├── Select.test.js
//         │   │   └── Select.stories.js
//         │   └── index.js
//         ├── /routing
//         │   └── /PrivateRoute
//         │       ├── /PrivateRoute.js
//         │       └── /PrivateRoute.test.js
//         └── /layout
//             └── /navigation
//                 └── /NavBar
//                     ├── NavBar.js
//                     ├── NavBar.styles.js
//                     ├── NavBar.test.js
//                     └── NavBar.stories.js

// You'll notice there's an index.js file in the components/forms directory. 
// It is often rightfully suggested to avoid using index.js files as 
// they're not explicit, but in this case it makes sense - it will end up 
// being an index of all the forms and look something like this:

// src/components/forms/index.js
// import { TextField } from './TextField/TextField'
// import { Select } from './Select/Select'
// import { Radio } from './Radio/Radio'

// export { TextField, Select, Radio }

// Then when you need to use one or more of the components, you can easily import them all at once.

// import { TextField, Select, Radio } from '@components/forms'

// I would recommend this approach more than making an index.js inside of every folder within forms, 
// so now you just have one index.js that actually indexes the entire directory, 
// as opposed to ten index.js files just to make imports easier for each individual file.