import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from  '../member.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberKey: string;
  memberDisplay: FirebaseObjectObservable<any>;

  constructor(private memberService: MemberService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberKey = urlParameters['id'];
    });
    this.memberDisplay = this.memberService.getMemberByKey(this.memberKey);
  }

}
