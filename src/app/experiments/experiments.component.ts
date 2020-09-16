import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: object = [];
  experiments: object[] = [
    {name: "experiment 1", firstMission: false},
    {name: "experiment 2", firstMission: true},
    {name: "experiment 3", firstMission: true}
  ]


  constructor() { }

  ngOnInit() {
  }
  add(experimentName: string){
    this.experiments.push({name: experimentName});
  }
  edit(experiment: object){
    this.experimentBeingEdited = experiment;
  }
  save(experimentEntry: string, experiment: object){
    experiment['name'] = experimentEntry;
    this.experimentBeingEdited = null;
  }
  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
}
