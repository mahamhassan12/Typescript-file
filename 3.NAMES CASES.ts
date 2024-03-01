//lower Case
let personName: string = "MAHAM HASSAN";
console.log("lowerCase:",personName.toLocaleLowerCase());

//upper Case
console.log("upperCase:", personName.toLocaleUpperCase());

//Title Case
console.log("titleCase:", personName.replace(/\bw/g,c =>c.toLocaleUpperCase()));










