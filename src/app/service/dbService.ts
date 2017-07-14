
export class mydbService {
    constructor() {}
    data =[ {id:'1',name:'Robel Woldu', StudId:'12345',email:'robel@mum.edu'},
            {id:'2',name:'Ermias Tesfaye',StudId:'223344',email:'ermias@mum.edu'},
            {id:'3',name:'Dawit Goitom',StudId:'556644',email:'dawit@mum.edu'},
            {id:'4',name:'Andemeskel',StudId:'221155',email:'ande@mum.edu'},
            {id:'5',name:'Rufael Rufael',StudId:'667788',email:'rufael@mum.edu'}];

    getData(){
        return this.data;
    }

  index = 0;

  getStudent(id){
    while(this.data.length >= this.index){
       if(this.data[this.index].id==id){
          return this.data[this.index];
       }
       else
         this.index=this.index+1;
    }
    return null;
}

}
