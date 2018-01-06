let readlineSync = require('readline-sync');
let sum;

function printItem(stulist, stuid) {
    let result = ``;
    let average;
    stulist.forEach(item => {
        if (item.stuId === stuid) {
            sum = parseFloat(item.mathScore) + parseFloat(item.chineseScore) + parseFloat(item.englishScore) + parseFloat(item.programScore);
            average = sum / 4;
            result = `
${item.name}|${item.mathScore}|${item.chineseScore}|${item.englishScore}|${item.programScore}|${average}|${sum}`;
        }
    });
    return result;
}

function judgment(str) {
    let result = true;
    if (str.indexOf(';') >= 0 || str.indexOf(' ') !== -1 || str.indexOf('.') !== -1 || str.indexOf('/') !== -1)
        result = false;
    else
        result = true;
    return result;
}

function printer(studentScoreList) {
    let tag = false;
    let allScores = [];
    let data = readlineSync.question(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
`);
    let result = `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================`;
    let str = ``;
    while (tag === false) {
        if (judgment(data) === true) {
            let stuId = data.split(",");
            stuId.forEach(item => {
                str = printItem(studentScoreList, item);
                result += str;
                allScores.push(sum);
            });
            tag = true;
        } else {
            data = readlineSync.question(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：
`);
        }
    }
    let classAverage = allScores.reduce((a, b) => a + b) / allScores.length;
    let median;
    if (allScores.length % 2 == 0)
        median = (allScores[allScores.length / 2] + allScores[(allScores.length / 2) - 1]) / 2;
    else
        median = allScores[(allScores.length - 1) / 2];

    result += `
========================
全班总分平均数：${classAverage.toFixed(2)}
全班总分中位数：${median}`;

    console.log(result);

}
module.exports = printer;