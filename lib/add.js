let studentScore = require('./stuscore');
let readlineSync = require('readline-sync');

function getData(str) {
    let data = str.split(',');
    let name, id, className;
    let math, chinese, english, program;
    name = data[0];
    id = data[1];
    className = data[2];
    for (let item = 3; item < 7; item++) {
        let tag = data[item].split(":");
        if (tag[0] === "数学" || tag[0] === "math")
            math = tag[1];
        else if (tag[0] === "语文" || tag[0] === "chinese")
            chinese = tag[1];
        else if (tag[0] === "英语" || tag[0] === "english")
            english = tag[1];
        else if (tag[0] === "编程" || tag[0] === "program")
            program = tag[1];
    }

    let newData = new studentScore(name, id, className, math, chinese, english, program);
    return newData;
}


function judgeDataFormat(str) {
    let result = true;
    if (str.indexOf(';') >= 0 || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else if (str.split(',').length !== 7)
        result = false;
    else
        result = true;
    return result;
}


function addData(studentScoreList) {
    let tag = false;
    let data = readlineSync.question(`请输入学生信息（格式：姓名,学号,班级,学科:成绩,...），按回车提交：
`);
    while (tag === false) {
        if (judgeDataFormat(data) === false)
            data = readlineSync.question(`请按正确的格式输入（格式：姓名,学号,班级,学科:成绩,...):
`);
        else {
            studentScoreList.push(getData(data));
            tag = true;
        }
    }
    console.log(`学生${data.split(",")[0]}的成绩被添加`);
    return studentScoreList;
}
module.exports = addData;