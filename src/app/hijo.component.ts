import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'hijo',
   templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {
   @Input() titulo: String;

   @Output() t1 = new EventEmitter<boolean>();

   constructor() { }

   ngOnInit() { }

   emitir(b: boolean){
      this.t1.emit(b);
   }
}