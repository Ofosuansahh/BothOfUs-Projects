<template>
    <li class="nav-item">
        <router-link
                :to="link.path"
                @click.native="linkClick"
                class="nav-link my-2 menu-link float-left"
                :target="link.target"
                :href="link.path">
            <template>
                <span class="menu-icon"><img :src="link.custom_icon" :alt="link.target"></span>
                <span class="nav-link-text menu-title">{{ link.name }}</span>
            </template>
        </router-link>
        <i v-show="$route.path === link.path" class="fa fa-caret-left right-menu-icon" aria-hidden="true"></i>
    </li>
</template>
<script>
  export default {
    name: 'sidebar-item',
    props: {
      link: {
        type: Object,
        default: () => {
          return {
            name: '',
            path: '',
            children: []
          };
        },
        description:
          'Sidebar link. Can contain name, path, icon and other attributes. See examples for more info'
      }
    },
    inject: {
      autoClose: {
        default: true
      }
    },
    data() {
      return {
        children: [],
        collapsed: true
      };
    },
    methods: {
      linkClick() {
        if (
          this.autoClose &&
          this.$sidebar &&
          this.$sidebar.showSidebar === true
        ) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>

<style scoped>
.nav-link .menu-title{
  font-size: 16px;
  font-weight: 300;
}
.nav-link.active .menu-title{
  font-weight: 700;
}
.menu-icon{
  width: 30px;
}
.right-menu-icon{
  float: right;
  font-size: 59px;
  color: #f2f0eb;
  margin-right: -3px;
}
.navbar-vertical.navbar-expand-md .navbar-nav .nav-link.active:before{
  border: none;
}
</style>