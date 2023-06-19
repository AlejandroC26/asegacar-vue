<template>
  <div>
    <h1>{{ sTitle }}</h1>
    <b-card-group deck class="mt-3">
      <DownloadCard v-for="oCard, key in aDownloadCards" :key="key"
        :sHeader="oCard.sHeader" 
        :sEndPoint="oCard.sEndPoint"
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
    DownloadModal
  },
  props: {
    sTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      nKey: 0,
      bShowModal: false,
      sEndPoint: '',
      sFormatName: '',
      aComponents: [],
      aDownloadCards: [
        {
          sHeader: "Planilla Diaria" ,
          sEndPoint: "dailyPayroll",
          sFormatName: "Planilla diaria",
          aComponents: [
            {
              sName: 'id_master',
              sLabel: 'Fecha y Responsable',
              sComponent: 'FormSelect',
              sEndPoint: 'sltMaster/1',
              nCol: 12
            },
          ]
        },
        {
          sHeader: "Edades Bobinos" ,
          sEndPoint: "ageBobins",
          sFormatName: "EDADES BOBINOS",
          aComponents: [
            {
              sName: 'date',
              sLabel: 'Fecha de sacrificio',
              sComponent: 'FormDate',
              nCol: 12
            },
          ]
        },
        {
          sHeader: "Ante Morten" ,
          sEndPoint: "antemortemDailyRecord",
          sFormatName: "PLANILLA DIARIA ANTEMORTEM",
          aComponents: [
            {
              sName: 'sacrifice_date',
              sLabel: 'Fecha de Beneficio',
              sComponent: 'FormDate',
              nCol: 12
            },
          ]
        },
        {
          sHeader: "Matriz Diaria" ,
          sEndPoint: "dailyMatrix",
          sFormatName: "MATRIZ DIARIA",
          aComponents: [
            {
              sName: 'benefit_date',
              sLabel: 'Fecha de Beneficio',
              sComponent: 'FormDate',
              nCol: 6
            },
            {
              sName: 'format_code',
              sLabel: 'Código de Formato',
              sComponent: 'FormSelect',
              sEndPoint: 'sltFormatCodes',
              nCol: 6
            },
          ]
        },
      ]
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