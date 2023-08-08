<template>
    <div>
        <label  v-if="!bHideLabel">{{ sLabel }}</label>
        <b-form-textarea
            v-model="valor"
        ></b-form-textarea>
    </div>
</template>
<script>
export default {
    name: 'FormArea',
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