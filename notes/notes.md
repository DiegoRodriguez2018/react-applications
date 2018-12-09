### REACT
React deals with the views in the MVC model.

---


### BABEL and JSX
``` html
<script type="text/babel"></script>
```

Babel is language support, it translates from JSX code javascript, that will later append some html elements. 

JSX is not html and not javascript, although looks a little bit like both. JSX is a different language, thats why we need babel to compile it into html.

Babel is a very important part of the React framework. 



---

```html
    <script type="text/babel">
    ReactDOM.render(
        <h1> My portfolio </h1>,
        document.getElementById("root")
    )
    </script>
```

This will work ok. But the code below would not:


```html
    <script type="text/babel">
    ReactDOM.render(
        <h1> My portfolio </h1>
        <p> hi! </p>,
        document.getElementById("root")
    )
    
    </script>
```

This will produce the following error:
`Adjacent JSX elements must be wrapped in an enclosing tag`

To fix this we need to nested into a div, although later we will find better ways to create our react apps so we dont create unnecesary elements. 




---

Create react app -> its a react boilerplate