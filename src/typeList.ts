// TypeSctiptの基本の型

// boolean
let bool: boolean=true;

// number 数値
let num:number=1;

// string 文字
let str: string="A";

// array 配列
let arr1:Array<number>=[1,2,3];
let arr2:number[]=[1,2,3];

// tuple
let tuple: [number, string]=[1,"A"];

// any
let any1:any=false;

// void 関数で返却がない型、tsでは関数で返却があるかを自動で推測してくれるためvoidを書く必要はない
const funcA=():void=>{
    const test="TEST";
}

// null
let null1:null=null

// undefined
let undefined1:undefined=undefined;

// object
let obj1:object={};
let obj2:{id:number, name:string}={id:1, name:"AAA"};
