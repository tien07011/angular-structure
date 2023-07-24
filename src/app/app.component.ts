import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'IM MỒM ĐI LONG';

  test() {

    console.log('IM MỒM ĐI THẮNG');
  }

  ngOnInit() {
    console.log('OK OKE OKE');
  }
}
