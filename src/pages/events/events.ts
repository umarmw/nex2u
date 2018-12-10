import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events: Array<{icon: string, category: string, time: string, title: string, image: string, description: string, total: Object, comments: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.events = [
      {icon:"assets/category/icon1.jpeg", category: "category 1", time: "10 mins", title: "title one", image: 'assets/posts/item1.jpeg', description:'lorem ipsum isidr', total: {up: 10, down: 3, comment: 6}, comments:"test"},
      {icon:"assets/category/icon2.jpeg", category: "category 2", time: "20 mins", title: "title two", image: 'assets/posts/item2.jpeg', description:'lorem ipsum isidr', total: {up: 20, down: 6, comment: 16}, comments:"test"},
      {icon:"assets/category/icon3.jpeg", category: "category 3", time: "30 mins", title: "title three", image: 'assets/posts/item3.jpeg', description:'lorem ipsum isidr', total: {up: 32, down: 13, comment: 26}, comments:"test"},
      {icon:"assets/category/icon4.jpeg", category: "category 4", time: "40 mins", title: "title four", image: 'assets/posts/item4.jpeg', description:'lorem ipsum isidr', total: {up: 45, down: 7, comment: 5}, comments:"test"}
    ];
  }

  eventTapped(event, item) {
    this.navCtrl.push(EventDetailsPage, {
      item: item
    });
  }
}