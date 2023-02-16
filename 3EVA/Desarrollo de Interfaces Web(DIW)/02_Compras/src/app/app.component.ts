import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = '02_Compras';

  ngOnDestroy() {
    // cleanup logic (unsubscribe from observables, remove event listeners, etc.)
  }
}
