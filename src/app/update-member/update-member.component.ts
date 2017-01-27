import { Component, OnInit, Input } from '@angular/core';
import {Member} from '../member.model';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.scss'],
  providers: [MemberService]
})
export class UpdateMemberComponent implements OnInit {
  @Input() selectedMember;

  showEdit = null;



  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  sendUpdate(member) {
    this.memberService.updateMember(member);
    this.showEdit = null;
  }

  sendDelete(member) {
    if(confirm("Are you sure?")){
      this.memberService.deleteMember(member);
    }
  }

  startEdit() {
    this.showEdit = true;
  }

}
