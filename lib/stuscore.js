class studentScore {

    constructor(name, stuId, className, mathScore, chineseScore, englishScore, programScore) {
        this.name = name;
        this.stuId = stuId;
        this.className = className;
        this.mathScore = mathScore;
        this.chineseScore = chineseScore;
        this.englishScore = englishScore;
        this.programScore = programScore;
    }

    introduce() { return `${this.name},${this.stuId},${this.className},${this.mathScore},${this.chineseScore},${this.englishScore},${this.programScore}`; }
}
exports["default"] = studentScore;
module.exports = exports["default"];