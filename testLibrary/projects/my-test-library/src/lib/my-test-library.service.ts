import { Injectable } from '@angular/core';

export class MyTestLibraryService {

  constructor() 
  { 
    console.log("In My Library Service");

  }

  async init()
  {
    //Uncomment these comments sequentially to notice the bug
    //debugger;
    return new Promise((resolve, reject) => {
      
      //debugger;
      console.log("in init");
      //console.log("in init2");
      resolve(true);
    })
  }
}
