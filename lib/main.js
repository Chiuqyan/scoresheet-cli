let readlineSync = require('readline-sync');
let addData = require('./addstudent');
let printer = require('./printer')

function classifier(choice, studentScoreList) {
    if (choice === "1")
        studentScoreList = addData.addData(studentScoreList);
    else if (choice === "2")
        printer.printer(studentScoreList);
    else if (choice === "3")
        return;
    else
        console.log("请选择正确选项");
}


function main() {
    let studentScoreList = [];
    let choice;
    do {
        choice = readlineSync.question(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

        classifier(choice, studentScoreList);
    } while (choice !== "3");
}
module.exports = main;