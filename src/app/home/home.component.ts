import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member.service';
import {Router} from '@angular/router';
import {Member} from '../member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {

  members: FirebaseListObservable<any[]>;

  currentRoute: string = this.router.url;

  filter: string = "allMembers"


  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  memberDetail(clicked) {
    this.router.navigate(['members', clicked.$key]);
    console.log(clicked);
  }

  onChange(option) {
    this.filter = option;
  }


}
