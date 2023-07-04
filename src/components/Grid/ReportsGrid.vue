<template>
  <div>
    <h1>{{ sTitle }}</h1>
    <b-card-group 
      deck 
      class="mt-3"
      v-for="oGroup, gKey in aGroupCards" :key="`g-${gKey}`">
      <DownloadCard v-for="oCard, key in oGroup.aCards" :key="key"
        :sHeader="oCard.sHeader" 
        :sEndPoint="oCard.sEndPoint"
        :sVariant="oGroup.sVariant"
        :sFormatName="oCard.sFormatName"
        :aComponents="oCard.aComponents"
        @showModal="onShowModal"
      />
    </b-card-group>
    <DownloadModal
      v-model="bShowModal"
      :key="nKey"
      :sEndPoint="sEndPoint"
      :sFormatName="sFormatName"
      :aComponents="aComponents"
      @close="onClose"
    />
  </div>
</template>
<script>
import Formulario from "../Form/Formulario.vue";
import DownloadModal from "../Form/DownloadModal.vue"; 
import DownloadCard from "../Form/Components/Specials/DownloadCard.vue";

export default {
  name: "GridView",
  components: {
    Formulario,
    DownloadCard,
    DownloadModal,
  },
  props: {
    sTitle: {
      type: String,
      default: "",
    },
    aGroupCards: {}
  },
  data() {
    return {
      nKey: 0,
      bShowModal: false,
      sEndPoint: '',
      sFormatName: '',
      aComponents: [],
    };
  },
  mounted() {},
  methods: {
    onShowModal(data){
      this.nKey += 1;
      this.bShowModal = true;
      this.sEndPoint = data.sEndPoint;
      this.aComponents = data.aComponents;
      this.sFormatName = data.sFormatName;
    },
    onClose() {
      this.bShowModal = false;
    },
  },
  computed: {
    rows() {
      return this.aItems.length;
    },
  },
};
</script>