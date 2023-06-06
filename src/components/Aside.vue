<template>
    <aside>
        <div class="top">
            <div class="logo">
                <img src="../assets/img/logo/logo.png">
                <div class="text-center">
                    <h2><b>ASEGACAR</b></h2>
                    <h4>DEL HUILA S.A.S</h4>
                </div>
            </div>
            <div class="close" id="close-btn">
                <span class="material-icons-sharp">close</span>
            </div>
        </div>
        <div class="mt-4">
            <div class="profile">
                <div class="info">
                    <p>Bienvenido, <b>{{session_user.name + " " + session_user.last_name}}</b></p>
                    <small class="text-muted">Admin</small>
                </div>
            </div>
        </div>
        <div class="sidebar" style="margin-top: 1rem;">
            <router-link
                to="admin"
                :class="{'active': routeActive('admin')}"
            >
                <span class="material-icons-sharp">{{ '\ue9b0' }}</span>
                <h3>Inicio</h3>
            </router-link>
        </div>
        <div class="menu-container">
            <ul class="accordion-menu">
                <li class="link" v-for="item, key in menu" :key="key">
                    <div class="dropdown">
                        <i class="fa-brands fa-python"></i> 
                        <span class="material-icons-sharp">{{ item.icon }}</span>
                        <h3>{{ item.text }}</h3>
                        <b-icon icon="chevron-down"></b-icon>
                    </div>
                    <ul class="submenuItems">
                        <li v-for="route, key in item.routes" :key="key">
                            <router-link :to="route.name">
                                {{ route.text }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="sidebar">
            <router-link
                to="reportes"
                :class="{'active': routeActive('reportes')}"
            >
                <span class="material-icons-sharp">{{ '\ue4fb' }}</span>
                <h3>Reportes</h3>
            </router-link>
        </div>
        <div class="sidebar">
            <!-------------------------------->
            <a href="#" class="mt-3" @click="logout()">
                <span class="material-icons-sharp">&#xe9ba;</span>
                <h3>Logout</h3>
            </a>
        </div>
    </aside>
</template>
<script>
import menu  from '../store/menu'
import { mapActions, mapState } from 'vuex';
export default {
    data: function () {
        return{
            isActive:true,
            nItem: 0,
            menu: menu.menu,
        }
    },
    methods: {
        ...mapActions('auth',['logout']),
        onChangeRoute(sRoute, nKey) {
            this.$router.replace({
                name: `${sRoute}`,
            })
            this.nItem = nKey
        },
        routeActive(link_route){
            var route = this.$router.history.current.path.replace(/\//g, '');
            if(link_route == route) return true;
            return false;
        },
    },
    mounted() {
        let listElements = document.querySelectorAll('.link');
        listElements.forEach(listElement => {
            listElement.addEventListener('click', ()=>{
                if (listElement.classList.contains('active')){
                    listElement.classList.remove('active');
                }else{
                    listElements.forEach (listE => {
                        listE.classList.remove('active');
                    })
                    listElement.classList.toggle('active');
                }
            })
        });



        const sideMenu = document.querySelector('aside');
        const menuBtn = document.querySelector('#menu-btn');
        const closeBtn = document.querySelector('#close-btn');
        /* const themeToggler = document.querySelector('.theme-toggler'); */

        menuBtn.addEventListener('click',()=> {
            sideMenu.style.display = 'block';
        })

        closeBtn.addEventListener('click',()=> {
            sideMenu.style.display = 'none';
        })

       /*  themeToggler.addEventListener('click',()=> {
            document.body.classList.toggle('dark-theme-variables');
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        }) */
    },
    computed: {
        ...mapState(["session_user"]),
    }
}
</script>
<style>

ul {
    list-style: none;
}
  
.accordion-menu {
    max-width: 350px;
    overflow: hidden;
}

.accordion-menu li:last-child .dropdown {
    border-bottom: 0;
}
.accordion-menu li.active .dropdown {
    color: rgb(191, 191, 191);
}
.accordion-menu li.active .dropdown .b-icon.bi {
    transform: rotate(180deg);
}
li .dropdown {
    cursor: pointer;
    display: flex;
    gap: 1rem;
    font-size: 18px;
    height: 3.7rem;
    color: #999999;
    position: relative;
    user-select: none;
    align-items: center;
    margin-left: 1.8rem;
}
li .dropdown span {
    transition: color 500ms ease;
    transition: all 300ms ease;
}

li .dropdown:hover span{
    margin-left: 1rem;
}

li.active .dropdown span {
    margin-left: calc(1rem);
}
  
.dropdown  i {
    position: absolute;
    top: 17px;
    left: 16px;
}

li .dropdown .b-icon.bi {
    position: absolute;
    right: .5rem;
    transition: transform 0.2s ease-in-out;
}

.submenuItems {
    display: none;
    transition: all 2s ease-in-out;
}

.accordion-menu li.active .submenuItems{
    display: block;
}

.accordion-menu li.active .dropdown {
    margin-left: 0;
    background: #fff;
}
.accordion-menu li.active span {
    color: var(--color-primary);
}
.accordion-menu li.active .dropdown:before {
    content: "";
    width: 6px;
    height: 100%;
    background: var(--color-primary);
}

.submenuItems a {
    display: block;
    color: #66b2ff;
    font-weight: 600;
    padding: 12px 12px 12px 45px;
    transition: all 0.2s ease-out;
    text-decoration: none;
}

.submenuItems a:hover {
    color: rgb(188, 184, 184);
  }
</style>
