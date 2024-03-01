//lower Case
var personName = "Maham hassan";
console.log("lowerCase:", personName.toLocaleLowerCase());
//upper Case
console.log("upperCase:", personName.toLocaleUpperCase());
//Title Case
console.log("titleCase:", personName.replace(/\bw/g, function (c) { return c.toLocaleUpperCase(); }));
