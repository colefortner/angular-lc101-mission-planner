import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }
  add(memberName: string, isFirst: boolean){
    for(let i = 0; this.crew.length; i++){
      if(this.crew[i]['name'] === memberName){
        alert('you cannot have duplicate names')
    } else {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }
}
  edit(member: object){
    this.memberBeingEdited = member;
  }
  save(name: string, member: object){
    member['name'] = name;
    this.memberBeingEdited = null;
  }
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
}
