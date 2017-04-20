import { Component } from '@angular/core';

export class Race {
  id: number;
  country: string;
  circuit: string;
  date: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{race.country}} details!</h2>
    <div><label>RACE: </label>{{race.country}}</div>
    <div><label>CIRCUIT: </label>{{race.circuit}}</div>
    <div>
      <label>DATE: </label>
      <input [(ngModel)]="race.date" placeholder="date">
    </div>
    `
})
export class AppComponent {
  title = '2017 Championship Calendar';
  race: Race = {
    id: 1,
    country: 'Australia',
    circuit: 'Melbourne',
    date: '26 Mar',
  };
}
