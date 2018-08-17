import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-front';

  result = '';


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(environment.baseUrl + '/test').subscribe(res => {
      console.log(res);
    });
  }


}
