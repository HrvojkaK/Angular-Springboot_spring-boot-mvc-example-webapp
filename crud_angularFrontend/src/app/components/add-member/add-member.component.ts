import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { MemberService } from 'src/app/service/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  member=new Member;

  constructor(private memberService:MemberService, private router: Router){}

  ngOnInit() {}

  saveMember(){
    //if(!this.member){return} //i zovi dolje metodu samo ako je val ok
    this.memberService.createMember(this.member).subscribe((response)=>{
      console.log(response);

      this.router.navigate(['/member-list']);
    });

  }

}
