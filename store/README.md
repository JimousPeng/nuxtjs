# STORE

store 目录用于组织应用的 Vuex 状态树 文件。

 Nuxt.js 框架集成了 Vuex 状态树 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。

------

### 使用状态树

 Nuxt.js 会尝试找到 src 目录（默认是应用根目录）下的 `store` 目录，如果该目录存在，它将做以下的事情： 

1. 引用 `vuex` 模块
2. 将 `vuex` 模块 加到 vendors 构建配置中去
3. 设置 `Vue` 根实例的 `store` 配置项

------

 **Nuxt.js 支持两种使用 `store` 的方式，你可以择一使用** 

 **模块方式** ：

 `store` 目录下的每个 `.js` 文件会被转换成为状态树[指定命名的子模块](http://vuex.vuejs.org/en/modules.html) （当然，`index` 是根模块） 

 **Classic(不建议使用)** ：

 `store/index.js`返回创建 Vuex.Store 实例的方法。

 【无论使用那种模式，您的`state`的值应该**始终是**`function`，为了避免返回引用类型，会导致多个实例相互影响。 】

------

#### 普通方式

 *Nuxt.js 允许您拥有一个* `store` *目录，其中包含与模块对应的每个文件* 

 首先，只需将状态导出为 *函数*，将变量和操作作为 `store/index.js` 中的对象导出 

```
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
```

 然后，您可以拥有 `store/todos.js` 文件 

```
export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
```

 Vuex 将如下创建： 

```
new Vuex.Store({
  state: () => ({
    counter: 0
  }),
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  modules: {
    todos: {
      namespaced: true,
      state: () => ({
        list: []
      }),
      mutations: {
        add(state, { text }) {
          state.list.push({
            text,
            done: false
          })
        },
        remove(state, { todo }) {
          state.list.splice(state.list.indexOf(todo), 1)
        },
        toggle(state, { todo }) {
          todo.done = !todo.done
        }
      }
    }
  }
})
```

 ***模块方法也适用于顶级定义，而无需在 `store` 目录中实现子目录*** 

 示例：您创建文件 `store/state.js` 并添加以下内容 

```
export default () => ({
  counter: 0
})
```

 相应的可以在文件夹中添加 `store/mutations.js` 

```
export default {
  increment(state) {
    state.counter++
  }
}
```

#### 模块文件

您可以将模块文件分解为单独的文件：`state.js`,`actions.js`,`mutations.js`和`getters.js`。如果您使用`index.js`来维护`state`,`getters`,`actions`和`mutations`，同时具有单个单独的操作文件，那么仍然可以正确识别该文件。

> 注意：在使用拆分文件模块时，必须记住使用**箭头函数功能**， `this` 在词法上可用。词法范围`this`意味着它总是指向引用**箭头函数**的所有者。如果未包含**箭头函数**，那么`this`将是未定义的(`undefined`)。解决方案是使用 "normal" 功能，该功能会将`this`指向自己的作用域，因此可以使用。





**若无额外配置，该目录不能被重命名。**