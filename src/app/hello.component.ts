import { Component, OnInit } from '@angular/core';
import Ajv from "ajv";

@Component({
  selector: 'hello',
  template: './ajv-test/ajv-test.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  implements OnInit {

  constructor(){
    console.log("constructor")
    var ajv = new Ajv();

    let schema = {
      name: {
        "type": "string",
        "maxLength": 5 
      },
      id: {
        "type": "integer",
        "max": 20
      }
    }

    let data = {
      "name": "Bittu Yadav",
      "id": 82 
    };

    var valid = ajv.validate({
      type: "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 5,
        },
        "id": {
          "type": "number",
          "max": 3,
        }
      }
    }, data);
    console.clear();
    if (!valid){
      console.log("Error");
      console.log(ajv.errorsText());
    }else{
      console.log("Success");
      console.log(schema, data,valid);
    }


  }

  ngOnInit(){
    
  }
}
