import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/User';
import { AlertifyService } from '../../../shared/services/alertify.service';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {
bgAllWorkers: string;
users: User[];

  constructor(private alertify: AlertifyService,
              private userService: UserService) { }


  ngOnInit() {
      this.bgAllWorkers = 'assets/images/BGsignin2.jpg';
      this.loadUsers();
  }


  loadUsers() {

    this.userService.getUsers().subscribe((res: User[]) => {
        this.users = res;
        this.alertify.success('Dane o użytkownikach zostały pobrane pomyślnie');
    }, error => {
        this.alertify.error('Nie udało się pobrać wszystkich użytkowników');
    });
  }

}
