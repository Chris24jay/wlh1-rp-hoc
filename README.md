# HOC, RenderProps and PropTypes

## HOC
Higher Order Component. Used when we have many similar components that share data or functionality. HOC's are just functions that return a Component

## RenderProp
Used when we have many similar components that share data or functionality. Uses a custom prop we most often call render but can be called anything we like. `render` is almost always a function. In our example of displaying the artists, we pass in the artist array and specific genre we want to use. In the toggle compoenent, we say just render whatever we pass into you

## PropTypes
Used to specify a specific datatype we expect our props to be and if they are required. This is a development only package that will give you errors in the console but not break your app