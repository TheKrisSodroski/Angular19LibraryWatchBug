import { Injectable } from '@angular/core';

export class MyTestLibraryService {

  constructor() 
  { 
    console.log("In My Library Service");

  }

  async init()
  {
//    debugger;
    return new Promise((resolve, reject) => {
      //debugger;
      console.log("in init");
      resolve(true);
    })
  }
}
