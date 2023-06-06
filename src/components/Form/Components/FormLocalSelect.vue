<template>
    <div>
        <label>{{ sLabel }}</label>
        <b-form-select
            v-model="valor"
            :options="options"
        />
    </div>
</template>
<script>
export default {
    name: 'FormLocalSelect',
    props: {
        value: {},
        oValorField: {},
        sKeyField: {
            type: String,
            default: ''
        },
        sLabel: {
            type: String,
            default: ''
        },
        options: []
    },
    data() {
        return {
            valor: ''
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