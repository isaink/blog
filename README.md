# Create a Blog

A blog is a great example of how props might make our life easier, because it includes a repeated pattern with differing content- the blog posts themselves.

For now, we aren't going to worry about creating an editor for our posts- we are just going to render a list of pre-made posts for the user.

## Getting Started

Take a look at the other file in this repo, `blog_posts.json`. This includes an array which contains objects, each object representing a different blog post.

We are going to create three different components today- `app.js`, `feed.js`, and `post.js`.

- `app.js` is the container component - it's going to hold the state, which is the collection of post objects, and it's going to pass that state down (via props) to our Feed component.
- `feed.js` processes our list of posts and passes each post down (via props) to a different Post component.
- `post.js` accepts a single post and renders it.

Let's start with `app.js` and `feed.js`. Create `app.js` and stick the array from `blog_posts.json` in state as `allPosts` or something similar. Now, in your `render` function, render `<Feed />` and pass `allPosts` in as a prop, called (because we're creative) `allPosts`.

Your Feed component should be functional - instead of a full-on class, just a regular ES6 function. This is because Feed is not storing a state. In that function's body, go ahead and log `props.allPosts` to the console. Run your app and open Chrome Developer Tools. Do you see `allPosts` there?

Cool. Let's move on.

## Giving Feed a Purpose

Wait... Why do we even have a Feed component? We're just passing props through Feed to Posts, so couldn't we just do that in App?

Well, sure, but let's put some functionality in our Feed component that justifies its existence.

Let's make a quick detour to `post.js` and make a Post component that's just a basic functional component. For right now, let's just have it return an `h1` with the word "Post" in it.

Now, inside Feed, let's do two things:

- Loop through each post object from `this.props.allPosts`
- Create an instance of the Post component for each object in the array.

Store those components in a new variable and return them.

Right now, you should just be rendering five `h1` tags with the word "Post" in them. However, they're going to be better soon!

## Rendering Our Posts

Let's take another look at our Post functional component. Go ahead and set it up to accept props (in functional components, simply add a `props` argument), and then use object destructuring to break out our id, title, and body from our `props` object.

In the `return`, place the post's title in an `h3` tag, the body in a `p` tag, and wrap the whole thing in a `section` tag with an `id` attribute corresponding to the `id` prop.

Refresh your page. You should see each post rendering in their entirety.

## Adding Style

Style your page using the design language of [Medium](https://medium.com/).

----------------------------------------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
