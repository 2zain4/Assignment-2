

// Q1
// const path = require("node:path");

// function Path() {
//   console.log({
//     File: __filename,
//     Dir: __dirname
//   });
// }

// Path();

// -----------------------
// Q2
// const path = require("node:path");

// function getPath(filePath) {
// return path.basename(filePath);

// }
//  console.log(getPath("/full stack/test2/test/rebort.docx"));

// ===============
// Q3
// const path = require("node:path");

// function buildPath(obj) {
//   return obj.dir + "/" + obj.name + obj.ext;
// }

// console.log(buildPath({
//      dir: "/folder",
//      name: "app",
//      ext: ".js"
//     }));

// ==============
// Q4
// const path = require("node:path");

// function extName(filePath) {
// return path.extname(filePath);

// }
//  console.log(extName("/full stack/test2/test/rebort.docx"));

// ====================
// Q5
// const path = require("node:path");

// function extName(filePath) {
//   const parses = path.parse(filePath);

//   return {
//     Name: parses.name,
//     Ext: parses.ext
//   };
// }

// console.log(extName("/home/app/main.js"));

// ===================

// Q6
// const path = require("node:path");

// function checksPath(filePath) {
//   return path.isAbsolute(filePath);
// }

// console.log(checksPath("/home/user/file.txt"));

// ============
// Q7
// const path = require("node:path");

// function joinSegments(path1, path2, path3) {
//   return path.join(path1, path2, path3);
// }

// console.log(joinSegments("src", "components", "App.js"));

// ===================
// Q8
// const path = require("node:path");

// function resolvePath(filePath) {
//   return path.resolve(filePath);
// }

// console.log(resolvePath("./index.js"));

// ============
// Q9
// const path = require("node:path");

// function joinSegments(path1, path2) {
//   return path.join(path1, path2);
// }

// console.log(joinSegments("/folder1", "folder2/folder3"));

// ===================
// Q10

// ========
// Q11

// =================
// Q12

// const EventEmitter = require("node:events");

// const event = new EventEmitter();

// event.on("start", () => {
//   console.log("Welcome event triggered!");
// });

// event.emit("start");

// ==================
// Q13

// const EventEmitter = require("node:events");

// const event = new EventEmitter();

// event.on("login", (username) => {
//   console.log("User logged in: " + username);
// });

// event.emit("login", "Ahmed");

// ==================
// Q14

// const fs = require("node:fs");
// const path = require("node:path");

// function readFileContent(filePath) {

// const absolutePath = path.resolve(filePath);    
// const data= fs.readFileSync(absolutePath,{ encoding: "utf-8" });

// console.log(data);
// }

// readFileContent("./test/data.text");

// ==================
// Q15

const fs = require("node:fs");
const path = require("node:path");

function writeFileContent(filePath) {

const absolutePath = path.resolve(filePath);    
const data= fs.writeFile(absolutePath,"Async save", (err)=>{
    if(err){
        console.error({err});
    }
} );

}

writeFileContent("./test/data2.text");



// ==========
// Q16

// ==================
// Q17

// ==================

 


// const fs = require("node:fs");
// const path = require("node:path");

// // const absolusePath = path.resolve("./data.txt");
// const absolutePath = path.resolve("./test/data.text");

// // console.log(absolusePath)
// fs.readFile(absolutePath,{ encoding: "utf-8" },(err,data)=> {
    
//     console.log({data});
// })


// const absolusePath = path.resolve("data.txt");

// fs.readFile(absolusePath,{ encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.error(err);
//   }else{  console.log(data);
//   }
// })
// try{
//     const data = fs.readFileSync(absolusePath,{ encoding: "utf-8" })
//     console.log(data);
// }catch(err){
//     console.error(err);
// }

// fs.writeFile("./test/data.txt", "/Hello, World!", { flag:"a"} ,(err) => {
//     console.log(err);
// })

// fs.writeFileSync(path.resolve("./data.txt"), "adad", { flag:"a"} )

// fs.unlink(path.resolve("./test/data.txt"), (err => {
//     if(err){
//         console.error({err});
//     }
// }))

// if (!fs.existsSync(path.resolve("./test/data.txt"))) {
// fs.writeFile(path.resolve("./test/data.txt"), "adadada",{ flag:"a"}) }

// fs.mkdir("zain/test", { recursive: true }, (err) => {console.log(err); })

// fs.rmSync("data", { recursive: true})
