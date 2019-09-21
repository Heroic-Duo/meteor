import { Meteor } from 'meteor/meteor';


import '/lib/collections';
import '/lib/methods';
import '/lib/publications';

Meteor.startup(() => {
    // code to run on server at startup
    Meteor.call('UpdateTime');
    // Add a new doc on each start.
    Time.insert({ time: new Date() });
    Menu.insert({ menu: new Date() });
    Shi.insert({ shiliao: new Date() });
    Daojia.insert({ daoJia: new Date() });
    // Print the current time from the database
    // console.log(`The time is now ${Time.findOne().time}`);

    // console.log(Nav)
});