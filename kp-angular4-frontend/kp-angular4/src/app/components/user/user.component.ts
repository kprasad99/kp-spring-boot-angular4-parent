import { Component, OnInit } from '@angular/core';

import { KppostService } from '../../services/kppost.service';

@Component( {
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
} )
export class UserComponent implements OnInit {

    name = 'Karthik Prasad';

    constructor( private kpPostService: KppostService ) { }

    ngOnInit() {
    }

    sayHello( name ) {
        console.log( "Karthik called" )
        this.kpPostService.getPosts( name ).subscribe(( posts ) => {
            console.log( posts )
        } );
        return false
    }
}
