import { Component, OnInit } from '@angular/core';
import {MemberService} from '../member.service';
import {Router} from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import {Member} from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  newMemberForm = null;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  newMember() {

    this.newMemberForm = true;

  }

  addMember(name: string, age: number, favorite: string, about: string) {
    this.newMemberForm = null;
    var newMember: Member = new Member(name, age, favorite, about);
    this.memberService.sendMember(newMember);
  }

}
