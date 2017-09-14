import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class KppostService {

    constructor( private http: Http ) {
        console.log( "KPPostService called" )
    }

    getPosts( name ) {
        let params: URLSearchParams = new URLSearchParams();
        params.set( 'name', name )

        return this.http.get( "/rest/sayhello", {
            search: params
        } ).map( res => res.text() );
    }
}
