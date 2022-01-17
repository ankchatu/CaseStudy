import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-entry-list',
  templateUrl: './employee-entry-list.component.html',
  styleUrls: ['./employee-entry-list.component.css']
})
export class EmployeeEntryListComponent implements OnInit {

  title!: string;
  employeeEntries: EmployeeEntry[] = [];
  editMode: boolean = false;
constructor(private authService: AuthService,private router: Router) { }
ngOnInit() {
   this.title = "Employee List";
   this.employeeEntries = this.getEmployeeEntries();
}
  model = new EmployeeEntry("" , "");
  editModel = new EmployeeEntry("" , "");

  getEmployeeEntries() : EmployeeEntry[] {
    let mockEmployeeEntries : EmployeeEntry[] = [
       { id: "1",
          name: "Ram",
         },
       { id: "2",
          name: "Shyam"},
          { id: "3",
          name: "Vijay"},
          { id: "4",
          name: "Dinanath"},
          { id: "5",
          name: "Chauhan"},
    ];
    return mockEmployeeEntries;
 }

   addEmployee(){
    this.employeeEntries.push({ id: this.model.id,
      name: this.model.name,
     })

     this.model.id ="";
     this.model.name ="";
   }

   deleteEmployee(dataToDel : EmployeeEntry){
    this.employeeEntries.forEach((value,index)=>{
      if(value==dataToDel) this.employeeEntries.splice(index,1);
  });
   }

   saveEmployee(dataToSave : EmployeeEntry){
    this.employeeEntries.forEach((value,index)=>{
      if(value==dataToSave)
        {
          value.id = dataToSave.id;
          value.name = dataToSave.name;
        }
     });
     this.editMode = false;
   }

   populateEditForm(dataToEdit : EmployeeEntry){
     this.editMode = true;
     this.editModel = dataToEdit;
     this.model.id = "";
     this.model.name = "";
   }

   logout(){
    this.authService.logout();
    this.router.navigate(['/', 'login']);
   }

   toHomePage(){
    this.router.navigate(['/', 'home']);
   }

}
export class EmployeeEntry {

  constructor(
    public id: string,
    public name: string,
  ) {  }
  }
