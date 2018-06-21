import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';

import { AngularFireStorage } from 'angularfire2/storage';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-create-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;
  stockPath = { path: '' };

  title: string = 'Google Map';
  lat: number = 51.678418;
  lng: number = 7.809007;

  droppedLat: number;
  droppedLng: number;
  markerWasDropped: boolean;

 

  onCoordMarkerDropped(event: any) {
    console.log(event);

    this.markerWasDropped = true;
    this.droppedLat = event.coords.lat.toFixed(6);
    this.droppedLng = event.coords.lng.toFixed(6);
  }
  

  @Output()
  create = new EventEmitter();


  ngOnInit() {
    this.form = this.formBuilder.group({
      nameEvent: ['', Validators.required],
      descriptionEvent: ['', Validators.required],
      addressEvent: ['', Validators.required],
      categoryEvent: ['', Validators.required],
      photoEvent: ['', Validators.required]

    });
    function disableScroll(e){
	
      if (e.keyCode) {
        /^(32|33|34|35|36|38|40)$/.test(e.keyCode) && e.preventDefault();
      }else {
        e.preventDefault();
      }
    
    }
    
    addEventListener("mousewheel", disableScroll, false);
    addEventListener("DOMMouseScroll", disableScroll, false);
    addEventListener("keydown", disableScroll, false);
  }
  createEvent() {
    console.log('form valid', this.form.valid);
    if (this.form.valid) {
      // add to firebase
      this.create.emit(this.form);
    }
  }

}

