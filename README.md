Verify yarn-check-webpack-plugin.
ref: https://github.com/skovy/yarn-check-webpack-plugin/issues/31

Node.js: v14.15.0

## webpack4
### version
```shell
$ (cd webpack4 && npx webpack -v)
webpack 4.45.0
webpack-cli 4.3.1
webpack-dev-server 3.11.1
```

### verification
Execute commmands below.

```
$ cd webpack4
$ yarn
```

Then, edit `package.json` > `devDependencies` > `webpack-cli` **4.3.1** to **4.3.0**.

```
$ yarn start
```

`yarn-check-webpack-plugin` works correctly, but not exit process.

```
Wrong packages:
  - webpack-cli (expected 4.3.0 but got 4.3.1)
Please run `yarn install --check-files` to update.
✖ ｢wdm｣: Restart webpack after resolving the above issues.
```

## webpack5
### version
```shell
$ (cd webpack5 && npx webpack -v)
webpack 5.12.3
webpack-cli 4.3.1
webpack-dev-server 3.11.1
```

### verification
Execute commmands below.

```
$ cd webpack5
$ yarn
```

Then, edit `package.json` > `devDependencies` > `webpack-cli` **4.3.1** to **4.3.0**.

```
$ yarn start
```

`yarn-check-webpack-plugin` works correctly, but not exit process.

```
Wrong packages:
  - webpack-cli (expected 4.3.0 but got 4.3.1)
Please run `yarn install --check-files` to update.
✖ ｢wdm｣: Restart webpack after resolving the above issues.
```
