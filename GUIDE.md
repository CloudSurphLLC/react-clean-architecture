# React Project - Clean structure

Clean architecture or structure is a software design philosophy that separates the elements of a design into ring levels. An important goal of clean structure is to provide developers with a way to organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism. 

### Advantages of Proper Architecture
- Testable
- Maintainable
- Changeable
- Easy to Develop
- Easy to Deploy
- Independent

```
react-example-app
├── src
│   ├── App.js
│   ├── index.js
│   ├── components
│   │   ├── BlogPost.js
│   │   ├── ReviewItem.js
│   │   ├── ...
│   ├── layouts
│   ├── pages
│   │   ├── Blog
│   │   ├── Home
│   │   ├── About
│   │   ├── ...
│   ├── queries
│   │   ├── useHome.js
│   │   ├── useBlog.js
│   ├── routes
│   │   ├── routes.js
│   ├── store
│   │   ├── index.js
│   │   ├── authSlice.js
│   │   ├── ...
│   ├── widgets
│   │   ├── buttons.js
│   │   ├── typography.js
│   │   ├── ...
│   ├── utils
│   │   ├── axios.js
├── public
├── node_modules
├── package.json
└── README.md
```

## Components
Components are the building blocks of any react project. This folder consists of a collection of UI components like BlogPost.js, Header.js, Menu.js, Loading.js, etc., that can be used across various files in the project and are dependent to the current project packages.

## Layouts
This directory containers layouts of the app like: AuthLayout or AppLayout. layout helps us to inject global components to the pages and protect restricted pages as well.

## Pages
As the name says, it contains pages that we use in the projects, and a page usually contains of components and widgets.

## Queries
What is `SWR`? well, The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861. SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

`SWR` Query is just one single line of code, you can simplify the logic of data fetching in your project

Example below:
```javascript
const {data, error} = useSwr('/api/posts', query);
```

## Routes
This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.

## Store
The global data store will be contained in the store directory - in this case, Redux. Each feature will have a file called reducer, which will contain the Redux Toolkit slice, as well as actions.
[Go to this article to see how to configure Redux toolkit](https://cloudsurph.com)


## Widgets
Within the widgets folder, I would group by type - forms, tables, buttons, layout, etc. The specifics will vary by your specific app, and are not dependent to the current project packages and styles).

What is different between components and widgets directories?
Components can't be used if we copy them and use in new project which they are depend on packages and styles, But widgets can be used in different project.