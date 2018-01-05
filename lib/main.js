function classifier(solution, studentScoreList) {

    if (solution === "1")
        studentScoreList = addInfo(studentScoreList);
    else if (solution === "2")
        printScore(studentScoreList);
    else if (solution === "3")
        return;
    else
        console.log("请选择正确选项");
}
let readlineSync = require('readline-sync');
/*import readlineSyne from "readline-sync";*/

function main() {
    let studentScoreList = [];
    let solution;
    do {
        solution = readlineSync.question(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

        classifier(solution, studentScoreList);
    } while (solution !== "3");
}
module.exports = main;