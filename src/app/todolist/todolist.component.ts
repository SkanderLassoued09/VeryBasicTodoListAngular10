import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  id;
  name;
  age;
  listofusers = [
    {
      id: 1,
      name: 'Skander',
      age: 24,
    },
    {
      id: 2,
      name: 'SkanderLass',
      age: 25,
    },
    {
      id: 3,
      name: 'SkanderLassoued',
      age: 26,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.name != null && this.age != null) {
      let newlistuser = {
        id: this.id ? this.id : this.listofusers.length + 1,
        name: this.name,
        age: this.age,
      };

      let found = this.listofusers.find((user) => user.id == this.id);

      if (!found) {
        this.listofusers.push(newlistuser);
      } else {
        this.listofusers[this.listofusers.indexOf(found)] = newlistuser;
      }

      this.id = null;
      this.name = null;
      this.age = null;
    }
  }

  delete(user) {
    let index = this.listofusers.indexOf(user);
    console.log(index);
    this.listofusers.splice(index, 1);
  }

  edit(user) {
    this.id = user?.id;
    this.name = user?.name;
    this.age = user?.age;
  }
}

/**
 * Hekllo nezih hh
 * Hello Skander
 */
