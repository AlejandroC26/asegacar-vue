<template>
    <div class="row">
        <div class="col-12">
            <label>{{ sLabel }}</label>
        </div>
        <div class="col">
            <div>
                <b-form-checkbox v-model="bShow" name="check-button" switch>
                    <b>( {{ bShow ? 'Si' : 'No' }})</b>
                </b-form-checkbox>
            </div>
        </div>
        <div class="col-10" v-show="bShow">
            <b-form-datepicker 
                v-model="valor" 
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'FormOptionalDate',
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
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        oValorField(newValorField) {
            let valor = newValorField[`${this.sKeyField}`];
            if(valor) {
                this.valor = valor;
                this.bShow = true;
            }
        },
        bShow(state) {
            if(state === true) {
                if(!this.valor) {
                    const date = new Date();
                    const formatDate = date.toISOString().split('T')[0];
                    this.valor = formatDate;
                }
            } else {
                this.valor = '';
            }
        }
    }
}
</script>