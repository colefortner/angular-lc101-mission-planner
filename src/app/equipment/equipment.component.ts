import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;

  equipment: object[] = [
    {item: "Rock", firstMission: false},
    {item: "Paper", firstMission: false},
    {item: "Scissor", firstMission: true}
  ];
  constructor() { }

  ngOnInit() {
  }
  add(itemName: string){
    this.equipment.push({item: itemName});
  }
  edit(item: object){
    this.itemBeingEdited = item;
  }
  save(itemEntry: string, item: object){
    item['item'] = itemEntry;
    this.itemBeingEdited = null;
  }
  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
}
