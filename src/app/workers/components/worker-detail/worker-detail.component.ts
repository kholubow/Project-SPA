import { User } from './../../../shared/models/User';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {
  bgWorkerDetail: string;
  chooseInfo: string;
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bgWorkerDetail = 'assets/images/BGsignin2.jpg';
    this.onShowDetailedDataAboutChosenUser();
  }

  onShowDetailedDataAboutChosenUser() {
    this.user = this.userService.onShowDetailedDataAboutChosenUser();
  }

  onClickCity() {
    this.chooseInfo = 'city';
  }

  onClickCountry() {
    this.chooseInfo = 'country';
  }

  onClickGender() {
    this.chooseInfo = 'gender';
  }

  onClickName() {
    this.chooseInfo = 'name';
  }

  onClickSurname() {
    this.chooseInfo = 'surname';
  }

  onClickDateOfBirth() {
    this.chooseInfo = 'dateOfBirth';
  }

  onClickPosition() {
    this.chooseInfo = 'position';
  }

}
