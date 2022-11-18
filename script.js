// 1. type을 쓰고 싶다면 type을 선언하라
// 2. type은 새 property를 추가하기 위해 다시 선언X
// 3. interface는 항상 상속이 가능
// 4. type은 중복 x interface는 중복가능
// 5. class는 interface, type 둘다 상속 가능
// 6. Typescript에게 오브젝트의 모양을 알려주기 위해서는 interface를 쓴다
// 7. 나머지 상황에서는 type을 쓴다

// type PlayerA = {
//     name: string
// }

// type PlayerAA = PlayerA & {
//     lastName:string
// }

// const playerA: PlayerAA = {
//     name: "nico",
//     lastName:"xx"
// }

/* ========================== */

// interface PlayerB {
//     name: string
// }

// interface PlayerBB extends PlayerB {
//     lastName:string
// }

// interface PlayerBB {
//     health : number
// }

// const playerB: PlayerBB = {
//     name: "nico",
//     lastName:"xx",
//     health : 54
// }

/* ========================== */

// type PlayerA = {
//     firstName:string
// }

// interface PlayerB {
//     firstName:string
// }
// class USer implements PlayerB {
//     constructor(
//         public firstName:string
//     ) {}
// } 