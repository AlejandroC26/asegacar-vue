<template>
    <b-card 
        :border-variant="sVariant"
        :header="sHeader"
        :header-bg-variant="sVariant"
        header-text-variant="white"
        align="center"
        @click="onShowModal"
        style="cursor:pointer;" 
        class="text-center"
    >
        <b-card-text 
            text-variant="white" 
            style="display:flex; justify-content: center;"
        >Descargar Formato <span class="material-icons-sharp ml-2"> {{ '\ue2c0' }}</span></b-card-text>
    </b-card>
</template>
<script>
export default {
    name: 'DownloadCard',
    props: {
        sVariant: {
            type: String,
            default: 'success'
        },
        sHeader: {
            type: String,
            default: ''
        },
        sFormatName: {
            type: String,
            default: ''
        },
        sEndPoint: {
            type: String,
            default: ''
        },
        aComponents: {
            type: Array
        }
    },
    methods: {
        onShowModal() {
            this.$emit('showModal', {
                sEndPoint: this.sEndPoint,
                aComponents: this.aComponents,
                sFormatName: this.sFormatName
            })
        }
    }
}
</script>