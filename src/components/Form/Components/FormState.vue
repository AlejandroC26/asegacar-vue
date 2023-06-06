<template>
    <div>
        <label>{{ sLabel }}</label>
        <div>
            <b-form-checkbox v-model="valor" name="check-button" switch>
                <b>( {{ valor ? 'Activo' : 'Inactivo' }})</b>
            </b-form-checkbox>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FormState',
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
        }
    },
    data() {
        return {
            valor: false
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
            this.valor = newValorField[`${this.sKeyField}`] ? true : false
        }
    }
}
</script>