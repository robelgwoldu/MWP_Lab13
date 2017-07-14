// import {CanActivate} from '@angular/router'
// import {Injectable} from '@angular/core'
// import {Router} from '@angular/router'
// import {mydbService} from './service/dbService'
// import {ActivatedRoute} from '@angular/router'

// @Injectable()
// export class myGuard implements CanActivate{

//     constructor(private service:mydbService,private router:Router,private route:ActivatedRoute){}    
// id;
//     canActivate(){
// this.route.params.subscribe(params=>{this.id = params['id']});
//     if(this.id==null || this.service.getStudent(this.id)==null){
//         this.router.navigate(['home'])
//         return false;
//     }else return true;

    
//     }

// }