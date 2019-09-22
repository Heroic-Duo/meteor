<template>
  <div id="Hmenu">
    <Menu mode="horizontal" theme="light" active-name="0" menuitems class="head_nav">
      <template v-if="MenuCursor.length">
        <Submenu :name="index" v-for="(value, index) in MenuCursor[0].list" :key="value.url">
          <template slot="title">
            <Icon type="stats-bars" v-text="value.menu">111</Icon>
          </template>
          <MenuGroup :title="value.menu">
            <MenuItem :name="(+'0-'+one)" v-for="(item, one) in value.list" :key="item.menu">
              <router-link :to="('/' + (item.id))" v-text="item.menu"></router-link>
            </MenuItem>
          </MenuGroup>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import "@lib/collections";

export default {
  data() {
    return {
      list: "",
      settings: Meteor.settings.public,
      itme: new Date()
    };
  },
  mounted() {},
  methods: {},
  meteor: {
    $subscribe: {
      Menu: []
    },
    MenuCursor() {
      //   return Time.find({}, {
      //     sort: {time: -1}
      //   })
      return Menu.find({ name: "导航PC" }, {});
    }
  }
};
</script>

<style lang="stylus" scoped>
#Hmenu {
  text-align: center;

  .head_nav {
    display: inline-block;
    width: 90%;
    height: 100px;
    line-height: 100px;
  }

  .ivu-menu-light {
    background: rgba(255, 255, 255, 0);
  }

  .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    padding: 0 5px;
  }

  a {
    display: block;
    line-height: 36px;
    width: 100%;
  }

  .ivu-menu-item-selected a {
    color: #fff;
  }
}
</style>