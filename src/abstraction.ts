// // interface IVehicle {
// //   startEngine(): void;
// //   stopEnging(): void;
// //   move(): void;
// // }

// // class Vehicle implements IVehicle {
// //   constructor(
// //     public name: string,
// //     public brand: string,
// //     public model: string
// //   ) {}

// //   startEngine(): void {
// //     console.log("Starting");
// //   }
// //   stopEnging(): void {
// //     console.log("Stop");
// //   }
// //   move(): void {
// //     console.log("Moving");
// //   }
// //   test() {
// //     console.log("Testing!");
// //   }
// // }

// // const vehicle1 = new Vehicle('Card', 'Toyota', '2016');

// abstract class Vehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}

//   abstract startEngine(): void;
//   abstract stopEnging(): void;
//    move(): void{
//     console.log('asdfasd')
//    }
// }

// class Car extends Vehicle {
//    startEngine(): void {
//        console.log('Start Engine')
//    }
//    stopEnging(): void {
//        console.log('Stop Engine')
//    }
// }
