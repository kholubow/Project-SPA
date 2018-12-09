import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-worker-card',
  templateUrl: './worker-card.component.html',
  styleUrls: ['./worker-card.component.css']
})
export class WorkerCardComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onShowDetailedDataAboutChosenUser() {
    this.userService.onLoadDetailedDataAboutChosenUser(this.user);
  }

}
