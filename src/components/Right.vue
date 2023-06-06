<template>
    <div class="right">
        <div class="top">
            <button id="menu-btn">
                <span class="material-icons-sharp">menu</span>
            </button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
    components: {},
    data() {
        return {
            search: '',
            count_lines: 0,
            active_line: false,
            loading_line: false,
        };
    },
    methods: {
        formatDate(date){
            var fecha = new Date(date);
            var ano = fecha.getFullYear();
            var mes = fecha.getMonth()+1;
            var dia = fecha.getDate();
            if(mes < 10)  mes="0"+mes
            if(dia < 10 ) dia="0"+dia
            return ano+"/"+mes+"/"+dia;
        },
        ...mapMutations(['loadSessionLines']),
        ...mapMutations(['loadSessionSalePoints']),
    },
    computed: {
        ...mapState(["session_user"]),
        ...mapState(["session_lines"]),
        ...mapState(["session_sale_points"]),
    },
    mounted() {},
    watch: {}
};
</script>
<style>
.dnone{
    display: none;
}
.right .sales-analytics .offline:hover .sub-menu-item{
    display: block;
}
.right .sales-analytics .item .sub-menu-item{
    bottom: -25px;
    position: absolute;
    width: 80%;
    display: none;
    z-index: 10;
}
.right .sales-analytics .item .sub-menu-item .triangle{
    position: absolute;
    top: -8px;
    left: 8px;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 8px solid var(--color-primary);
}
.right .sales-analytics .item .sub-menu-item .buttons {
    position: relative;
    background: #f6f6f9;
    border: 1px solid var(--color-primary);
    box-shadow: 0 0 1rem #c6c7d1;
}
.right .sales-analytics .item .sub-menu-item .buttons .links a{
    width: 100%;
    display: block;
    padding: .5rem;
    text-align: center;
    transition: all .3s;
    color: var(--color-primary);
}
.right .sales-analytics .item .sub-menu-item .buttons .links a:hover{
    color: #fff;
    background: var(--color-primary);
}
</style>
