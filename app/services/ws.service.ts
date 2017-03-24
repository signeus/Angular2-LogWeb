import { Injectable } from '@angular/core';
import {Observable}  from 'rxjs/Rx';
import {Headers}     from '@angular/http';
import {Service}     from './service';

@Injectable()
export class WsService //extends Service 
{

    private actionUrl: string;
    private headers: Headers;
    private websocket: any;
    private receivedMsg: any;

    constructor()
    {
        this.websocket = new WebSocket("ws://0.0.0.0:9000/");
        this.websocket.onopen =  (evt:any) => {
            console.log("This is a socket");
            this.websocket.send("Hello");
        };
    }

    
    public sendMessage(text:string)
    {
      this.websocket.send(text);
    }

    public run(): any
    {
      return Observable.create((observer:any)=>{
          this.websocket.onmessage = (evt:any) => { 
              observer.next(evt);
        };
      }).map((res:any)=> res.data).share();
    }

}