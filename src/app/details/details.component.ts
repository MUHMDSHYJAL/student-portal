import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  sid: any = ""
  stud: any = {}
  students:any = []
  dd=new Date()
  constructor(private ar:ActivatedRoute,private ds:DataService){
    this.students=this.ds.students
    this.ar.params.subscribe((res)=>{
      this.sid=res['id']
      this.stud=this.students.find((item:any)=>item.id==this.sid)
      console.log(this.stud);
      
    })
  }

}
