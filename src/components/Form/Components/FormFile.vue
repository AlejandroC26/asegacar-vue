<template>
    <div class="mb-2">
        <label>{{ sLabel }} <span class="text-caption text-weight-light">({{ oAccept }})</span></label>
        <b-form-file 
            accept="application/pdf" 
            v-model="valor"
        />
        <b-button v-if="bHaveFile" @click="onDownloadFile()" class="w-100 mt-2" variant="danger">Descargar Formato</b-button>
    </div>
</template>
<script>
import axiosServices from '../../../store/axiosServices';
export default {
    name: 'FormFile',
    props: {
        value: {},
        oValorField: {},
        sKeyField: {
            type: String,
            default: ''
        },
        sEndPoint: {
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
            valor: [],
            bHaveFile: false,
            oAccept: ".pdf",
        }
    },
    methods: {
        async onDownloadFile() {
            const response = await axiosServices.onAxiosGet(`/${this.sEndPoint}/${this.oValorField.id}`);
            let fURL = window.URL.createObjectURL(response.data);
            let fLink = document.createElement('a');

            fLink.href = fURL;
            fLink.setAttribute('download', `${this.sLabel}.pdf`);
            document.body.appendChild(fLink);

            fLink.click();
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
            if(Object.keys(newValorField).length !== 0) {
                if(newValorField[this.sKeyField]) {
                    this.bHaveFile = true;
                }
            } 
        }
    }
}
</script>
<style scoped>
.preview {
  background: #f0f0f0;
}
.preview img {
  max-width: 100%;
  width: auto;
  max-height: 150px;
  display: block;
  margin: 0 auto;
}
</style>