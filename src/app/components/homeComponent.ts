import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <p>
We come from many places, cultures, and backgrounds, but share a strong common commitment to personal inner growth, wellness, sustainability, and positive values.

Many of us have experienced the stress and negativity so common at other colleges. That's why we came to MUM!

We support a progressive and inclusive campus culture that’s creative, dynamic, and focused on making the world a better, more peaceful place.
    </p>
   `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
