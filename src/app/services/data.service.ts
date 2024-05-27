import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  students = [
    { id: 1, sname: "Arjun", age: 20, class: "BSC CS", phone: 7894561230, email: "arjun12@gmail.com",fee:30000},
    { id: 2, sname: "Avinash", age: 20, class: "BCA", phone: 7894561789, email: "avinash21@gmail.com",fee:29000},
    { id: 3, sname: "Akhil", age: 22, class: "BTECH", phone: 7894561456, email: "akhil23@gmail.com",fee:40000},
    { id: 4, sname: "Arun", age: 21, class: "BSC IT", phone: 7894561123, email: "arun32@gmail.com",fee:30000}
  ]
}
