// Whether or not your project needs a utils folder is up to you, 
// but I think there are usually some global utility functions, 
// like validation and conversion, that could easily be used across multiple sections of the app. 
// If you keep it organized - not just having one helpers.js 
// file that contains thousands of functions - it could be a helpful addition to the organization of your project.

// .
// └── src
//     └── /utils
//         ├── /constants
//         │   └── countries.constants.js
//         └── /helpers
//             ├── validation.helpers.js
//             ├── currency.helpers.js
//             └── array.helpers.js
// Again, the utils folder can contain anything you want that you think makes sense to keep on a global level. 
// If you don't prefer the "multi-tier" filenames, you could just call it validation.js, 
// but the way I see it, being explicit does not take anything away from the project, 
// and makes it easier to navigate filenames when searching in your IDE.