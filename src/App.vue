<template>
    <div>
        <Header :app-title="title" />
        <WebMap />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
/*    import Header from './components/Header.vue';
    import WebMap from './components/WebMap.vue';
    import { title } from './config';*/

/*export default {
    name: 'App',
    components: { Header, WebMap },
    data: () => ({
        title
    })
};*/


    @Component({
        props: {
            propMessage: String
        }
    })
    export default class App extends Vue {
        // 初始化数据 data可以声明成类属性形式
        msg = 123
        str: string = 'liyu'
        // 使用props
        helloMsg = 'Hello, ' + this.propMessage

        // 生命周期钩子声明  保留名称
        mounted () {
            this.greet()
        }

        // computed属性可以声明成类方法形式
        get computedMsg () {
            return 'computed ' + this.msg
        }

        // method方法可以声明成类方法形式
        greet () {
            alert(this.str)
        }
    }
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>
