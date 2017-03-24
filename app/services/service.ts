export abstract class Service
{ 
  constructor(protected core:any,protected parameters:any){}
  
  core_run(name:String,parameters:any):any
  {
    return this.core.service(name,parameters);
  }
 
  abstract run() : any;
}
