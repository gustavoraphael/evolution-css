import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(public routes: Router) {}

    teste: number = 1;

    ngOnInit(): void {}

    openRegister() {
        this.routes.navigate(['register-1']);
    }
}
