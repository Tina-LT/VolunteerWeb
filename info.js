let usrname = "小明";
let grade = 12;
let credit = 100;
let hour = 0;
const programs = [];
let websiteRun = false;

const element1 = document.getElementById("btn1");
const element2 = document.getElementById("btn2");
const element3 = document.getElementById("btn3");
const element4 = document.getElementById("btn4");

const func1 = () => {
    programs.push("上海徐汇区三叶草儿童康健园");
    hour += 4;
    console.log(programs.length);
    alert("报名成功");
}

const func2 = () => {
    programs.push("浦东新区辅读学校");
    hour += 4;
    console.log(programs.length);
    alert("报名成功");
}

const func3 = () => {
    programs.push("上海市自闭症儿童教育指导中心（上海市宝山区培智学校）");
    hour += 4;
    alert("报名成功");
}

const func4 = () => {
    programs.push("恩启 （上海静安中心）北京正在关怀科技有限公司品牌");
    hour += 4;
    alert("报名成功");
}

element1.addEventListener("click", func1);
element2.addEventListener("click", func2);
element3.addEventListener("click", func3);
element4.addEventListener("click", func4);

/*
const getUsrName = () => {
    return usrname;
}

const getGrade = () => {
    return grade;
}

const getCredit = () => {
    return credit;
}

const getHour  = () =>{
    return hour;
}
*/