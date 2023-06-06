<template>
    <b-card 
        @click="onShowModal"
        style="cursor:pointer;" 
        bg-variant="success" 
        text-variant="white" 
        :header="sHeader" 
        class="text-center">
        <b-card-text style="display:flex; justify-content: center;">Descargar Formato <span class="material-icons-sharp ml-2"> {{ '\ue2c0' }}</span></b-card-text>
    </b-card>
</template>
<script>
export default {
    name: 'DownloadCard',
    props: {
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