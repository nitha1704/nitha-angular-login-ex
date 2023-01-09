import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  info: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  handleSubmit(value: any) {
    const body = {
      username: value.username,
      password: value.password,
    };
    this.http
      .post(`http://212.80.212.177:9001/api/v1/auth/login`, body)
      .subscribe(
        (res: any) => {
          this.info = JSON.stringify(res.data, undefined, 2);
          console.log('success', res);
        },
        (err) => {
          this.info = JSON.stringify(err, undefined, 2);
          console.log('error', err);
        }
      );
  }
}
