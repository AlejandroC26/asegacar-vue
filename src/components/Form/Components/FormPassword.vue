<template>
    <div>
        <label>{{ sLabel }}</label>
        <b-input-group class="mb-2">
            <b-form-input 
                :type="bShow ? 'text': 'password'"
                v-model="valor"
            />
            <b-input-group-prepend @click="onHandleShow()" is-text style="cursor: pointer;">
                <b-icon :icon="bShow ?  'eye-slash-fill' : 'eye-fill'"></b-icon>
            </b-input-group-prepend>
        </b-input-group>
    </div>
</template>
<script>
export default {
    name: 'FormPassword',
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
            valor: '',
            bShow: false
        }
    },
    methods: {
        onHandleShow(){
            this.bShow = !this.bShow;
        },
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