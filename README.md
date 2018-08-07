# medical

## 结构

```
src
├── App.vue
├── assets // 静态资源
│ ├── female.png
│ └── male.png
├── components
│ ├── Console.vue // 控制台，操作区
│ ├── Main.vue // canvas 显示区
│ ├── MiniPI.vue // 左侧 miniPI
│ ├── PatientCard.vue // miniPI 单项
│ └── common
│ └── ScaleFrame.vue // TODO：板块显示隐藏动画抽象到此处
└── main.js // socket 地址在此处配置
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```
