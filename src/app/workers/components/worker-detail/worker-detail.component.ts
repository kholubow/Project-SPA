import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent implements OnInit {
  bgWorkerDetail: string;
  chooseInfo: string;

  constructor() { }

  ngOnInit() {
    this.bgWorkerDetail = 'assets/images/BGsignin2.jpg';
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

  onClickInterests() {
    this.chooseInfo = 'interests';
  }

  onClickIntroduction() {
    this.chooseInfo = 'introduction';
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

}
