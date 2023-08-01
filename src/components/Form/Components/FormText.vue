<template>
    <div>
        <label v-if="!bHideLabel">{{ sLabel }}</label>
        <b-form-input
            type="text"
            v-model="valor"
        />
    </div>
</template>
<script>
export default {
    name: 'FormText',
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