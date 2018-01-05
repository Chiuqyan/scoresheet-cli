function getNewNode(str) {
    let information = str.split(',');
    let name, id, className;
    let math, chinese, english, program;
    name = information[0];
    id = information[1];
    className = information[2];
    for (let iter = 3; iter < 7; iter++) {
        let flag = information[iter].split(":");
        if (flag[0] === "数学" || flag[0] === "math")
            math = flag[1];
        else if (flag[0] === "语文" || flag[0] === "chinese")
            chinese = flag[1];
        else if (flag[0] === "英语" || flag[0] === "english")
            english = flag[1];
        else if (flag[0] === "编程" || flag[0] === "program")
            program = flag[1];
    }

    let newNode = new studentScore(name, id, className, math, chinese, english, program);
    return newNode;
}

function judgeIdFormat(str) {
    let result = true;
    if (str.indexOf(';') >= 0 || str.indexOf(' ') !== -1 || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else
        result = true;
    return result;
}

function judgeStuFormat(str) {
    let result = true;
    if (str.indexOf(';') >= 0 /*|| str.indexOf(' ')!==-1 */ || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else if (str.split(',').length !== 7)
        result = false;
    else
        result = true;
    return result;
}


function addInfo(studentScoreList) {
    let flag = false;
    let info = readlineSync.question(`请输入学生信息（格式：姓名,学号,班级,学科:成绩,...），按回车提交：
`);
    while (flag === false) {
        if (judgeInfo(info) === false)
            info = readlineSync.question(`请按正确的格式输入（格式：姓名,学号,班级,学科:成绩,...):
`);
        else {
            studentScoreList.push(getNewNode(info));
            flag = true;
        }
    }
    console.log(`学生${info.split(",")[0]}的成绩被添加`);
    return studentScoreList;
}