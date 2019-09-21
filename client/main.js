// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
import Vue from 'vue'
import App from '/imports/client/App.vue'
import router from '/imports/client/router'
import VueMeteorTracker from 'vue-meteor-tracker'; // here!
// import App from '/imports/client/App.vue'
import './index.html';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload); // here!
Vue.use(VueMeteorTracker); // here!
Vue.use(iView);
// Meteor.startup(() => {

//         new Vue({
//             router,

//             ...App,
//         }).$mount(document.body)
//     })
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: './assets/images/logo.png',
    loading: './assets/images/logo.png',
    attempt: 1
})
Meteor.startup(() => {
    new Vue({
        el: '#app',
        router,
        ...App,
    });
});