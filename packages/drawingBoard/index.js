// packages/textarea/index.js

// 导入组件，组件必须声明 name
import DrawingBoard from './index.vue'

// 为组件添加 install 方法，用于按需引入
DrawingBoard.install = function (Vue) {
    Vue.component(DrawingBoard.name, DrawingBoard)
}

export default DrawingBoard