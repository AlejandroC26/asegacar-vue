<template>
    <div class="mb-2">
        <label>{{ sLabel }} <span class="text-caption text-weight-light">({{ oAccept }})</span></label>
        <b-form-file 
            accept="image/jpeg, image/png, image/jpg" 
            v-model="valor"
        />
        <div class="preview" v-if="bLoadedPreview">
            <img :src="sUrlPreview" alt="preview" />
        </div>
    </div>
</template>
<script>
import axiosServices from '../../../store/axiosServices';
export default {
    name: 'FormFileImage',
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
            bLoadedPreview: false,
            sUrlPreview: "",
            oAccept: ".png, .jpg, .jpeg",
        }
    },
    watch: {
        valor(newValor) {
            this.$emit('updateValor', newValor)
        },
        value(newValue) {
            this.valor = newValue; 
        },
        async oValorField(newValorField) {
            if(Object.keys(newValorField).length !== 0) {
                const response = await axiosServices.onAxiosGet(`/${this.sEndPoint}/${newValorField.id}`)
                if(response.data.status !== 'Error') {
                    this.sUrlPreview = response.data.data;
                    this.bLoadedPreview = true;
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