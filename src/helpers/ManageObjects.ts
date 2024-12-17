


export class ManageObjects {

  static compare ( firstObj: object, secondObj: object ) {      
    return (JSON.stringify( firstObj ) === JSON.stringify( secondObj ));
  }

  
}