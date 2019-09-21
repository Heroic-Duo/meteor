<template>
  <div>
    <h1>index</h1>
    <p>现在时间：{{itme}}</p>
    <button @click="getItem()">获取现在时间</button>
    <div v-if="!$subReady.Time">Loading...</div>
    <div v-else>
      <p>Hello {{hello}},
        <br>The time is now: {{currentTime}}
      </p>
      <button @click="updateTime">Update Time</button>
      <p>Startup times:</p>
      <ul>
        <li v-for="(t, i) in TimeCursor" :key="i" >
          {{t.time}}  -  {{t._id}}
        </li>
      </ul>
      <p>Meteor settings</p>
      <pre><code>
        {{settings}}
      </code></pre>
    </div>
  </div>
</template>

<script>
import '/lib/collections'

export default {
  data() {
    return {
      hello: 'World',
      settings: Meteor.settings.public,
      itme: new Date()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {},
    updateTime() {
      Meteor.call('UpdateTime')
    },
    getItem () {
      this.itme = new Date()
    }
  },
  meteor: {
    $subscribe: {
      'Time': []
    },
    currentTime () {
      var t = Time.findOne('currentTime') || {};
      return t.time;
    },
    TimeCursor () {
      return Time.find({}, {
        sort: {time: -1}
      })
    },
  }
}
</script>

<style>

</style>