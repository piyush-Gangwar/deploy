import { Component, OnInit } from '@angular/core';
import  {default as details} from '../assets/myDetails.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Portfolio';
  flag: boolean = false;
  messageSuccess: boolean = true;
  highSchoolDetails: string = "";
  intermeadiateDetails: string = "";
  email = details.contactDetails[0].email;
  experienceDetailss = details.experienceDetails;
  educationDetialss = details.educationDetials;

  ngOnInit() {
    this.showMessageSuccess();
  }

  showMessageSuccess() {
    var that = this;
    setTimeout(() => {
      that.messageSuccess = false;
      that.title = "Piyush Gangwar";
      setTimeout(() => {
        that.messageSuccess = false;
        that.title = "My Portfolio";
        that.showMessageSuccess();
      }, 3000);
    }, 3000);
  }


}



