// Here's where the main part of your app will live: in the views directory. 
// Any page in your app is a "view". In this small example, 
// the views line up pretty well with the Redux store,
// but it won't necessarily be the case that the store and views are exactly the same, 
// which is why they're separate. Also, books might pull from authors, and so on.

// Anything within a view is an item that will likely only be used 
// within that specific view - a BookForm that will only be used at the /books route, 
// and an AuthorBlurb that will only be used on the /authors route. 
// It might include specific forms, modals, buttons, any component that won't be global.

// The advantage of keeping everything domain-focused instead of putting 
// all your pages together in components/pages is that it makes it really 
// easy to look at the structure of the application and know how many top level 
// views there are, and know where everything that's only used by that view is. 
// If there are nested routes, you can always add a nested views folder within the main route.

// .
// └── /src
//     └── /views
//         ├── /Authors
//         │   ├── /AuthorsPage
//         │   │   ├── AuthorsPage.js
//         │   │   └── AuthorsPage.test.js
//         │   └── /AuthorBlurb
//         │       ├── /AuthorBlurb.js
//         │       └── /AuthorBlurb.test.js
//         ├── /Books
//         │   ├── /BooksPage
//         │   │   ├── BooksPage.js
//         │   │   └── BooksPage.test.js
//         │   └── /BookForm
//         │       ├── /BookForm.js
//         │       └── /BookForm.test.js
//         └── /Login
//             ├── LoginPage
//             │   ├── LoginPage.styles.js
//             │   ├── LoginPage.js
//             │   └── LoginPage.test.js
//             └── LoginForm
//                 ├── LoginForm.js
//                 └── LoginForm.test.js