# appdocviewer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Docker build
```
docker build -t appdocviewer/build .
```

### Docker run
```
docker run -it -p 8080:8080 --rm --name appdocviewer-deploy appdocviewer/build

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
