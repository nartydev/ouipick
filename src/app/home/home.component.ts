import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeScroll = false;
  title = 'app';

  scrollPos = 0;
  scrollNeg = 0;
  index = 0;

  valueEvent = 1;
  eventGroup = 0;

  constructor() {}

  ngOnInit() {}

  eventGroupId(id) {
    this.eventGroup = id;
    console.log(this.eventGroup);
  }

  @HostListener("window:wheel", ["$event"])
  onWindowScroll($event) {
   console.log($event);
   if ($event.deltaY > 10 && !this.activeScroll) {
    this.activeScroll = true;
    this.getNextProject();
    setTimeout(() => {
      this.activeScroll = false;
    }, 1000);
   }
   if ($event.deltaY < -10 && !this.activeScroll) {
    this.activeScroll = true;
    this.getPrevProject();
    setTimeout(() => {
      this.activeScroll = false;
    }, 1000);
   }
  }

  getNextProject() {
    this.getSomeQuote(1);
  }

  getPrevProject() {
    this.getSomeQuote(-1);
  }

  getSomeQuote(increment: number) {
    this.index = this.index + increment;

    if (this.index >= 3 && increment === 1) {
      this.index = 0;
    }

    if (this.index < 0 && increment === -1) {
      this.index = 2 - 1;
    }

  }

  changeValueEvent(id) {
    this.valueEvent = id;
    console.log(this.valueEvent);
  }
}
