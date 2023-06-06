<template>
    <router-view id="application"/>
</template>
<script>
import {mapActions, mapMutations, mapState} from 'vuex';
import Aside from '@/components/Aside.vue';

export default {
  methods:{
	  ...mapActions(['readToken']),
	  ...mapMutations(['loadSessionUser']),
  },
  computed: {
	  ...mapState(['token']),
  },
  mounted(){
    const $ = require('jquery')
    window.$ = $;
	  this.loadSessionUser();
  },
  created(){
	  this.readToken();
  }
}
</script>
