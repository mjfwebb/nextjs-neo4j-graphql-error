To reproduce the error just run `npm run dev` and open http://localhost:3000/api/graphql in your browser. You will encounter an error thrown by graphql:

```
Error: Cannot use GraphQLNonNull "String!" from another module or realm.
```

To circumvent this error, we have to add the graphql package to serverComponentsExternalPackages in next.config.js (this is currently commented out).
