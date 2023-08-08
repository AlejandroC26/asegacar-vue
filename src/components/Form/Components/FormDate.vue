<template>
    <div class="mb-2">
        <label v-if="!bHideLabel">{{ sLabel }}</label>
        <b-form-datepicker 
            v-model="valor" 
        />
    </div>
</template>
<script>
export default {
    name: 'FormDate',
    props: {
        value: {},
        oValorField: {},
        bHideLabel: {
            type: Boolean,
            default: false
        },
        sKeyField: {
            type: String,
            default: ''
        },
        sLabel: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            valor: ''
        }
    },
    mounted() {
        if(this.oValorField && Object.values(this.oValorField).length) {
            this.valor = this.oValorField[`${this.sKeyField}`]
        }
    },
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        oValorField(newValorField) {
            this.valor = newValorField[`${this.sKeyField}`]
        }
    }
}
</script>
<style>
.b-form-btn-label-control.form-control > .form-control {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>