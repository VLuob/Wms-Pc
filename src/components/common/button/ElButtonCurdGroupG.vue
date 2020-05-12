<template>
    <div class="ElButtonCurdGroupG">
        <el-button-group>
            <el-button-mini icon="add" @click.native="$emit('click-add')" :disabled="addDisabled" style="position:absolute;right:30px;top:90px;">添加管理员</el-button-mini>
        </el-button-group>
        <slot></slot>
    </div>
</template>

<script>
    import ElButtonMini from "@/components/common/button/ElButtonMini";

    export default {
        name: "ElButtonCurdGroupG",
        components: {ElButtonMini},
   /*      props: {
            addDisabled: {
                default: false
            },
            editDisabled: {
                default: false
            },
            deleteDisabled: {
                default: false
            }
        }, */
        data() {
            return {}
        },
        mounted() {
            this.reload();
        },
        methods: {
            reload() {
            },
        },
        watch: {},
        computed: {},

    }
</script>

<style lang="less" scoped>
    @import (reference) "~style/all.less";

    .ElButtonCurdGroupG {
    }
</style>