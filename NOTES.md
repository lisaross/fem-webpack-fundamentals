# LOADERS

- Function that takes a source and returns a new source
- execute from right to left ie: style(css(less()))

```
module: {
    rules: [
        {
            // regex that instructs compiler which files to run the loader against
            test: regex,
            // use - an array/string/function that returns loader objects (pass the loader here)
            use: (Array|String|Function)
            include: RegExp[],
            exclude: RegExp[],
            issuer: (RegExp|String)[],
            // enforce can be pre or post - tells webpack to run this rule before or after all other rules
            enforce: "pre"|"post"
        },
    ],
}
```

ex:

```
rules: [
    {
        test: /\.less$/,
        use: ['style','css','less']
    }
]
```

## examples:

- code coverage
- responsive image handling
- compress images on fly
- pug / HAML
- write php that is converted to javascript -- look into that loader

# PLUGINS

- instance/class that has an apply property
- allows you to hook into compilation lifecycle
- lots of built in plugins
- lets you do things you can't do with a loader - ie. uglify, compression, etc
