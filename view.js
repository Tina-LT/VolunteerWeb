update = () => {
    document.getElementById("name").innerHTML = "姓名：" + usrname;
    document.getElementById("grade").innerHTML = "年级：" + grade;
    document.getElementById("credit").innerHTML = "信用分：" + credit;
    document.getElementById("hour").innerHTML = "学分：" + hour;
    let allPrograms = "";
    for (let i = 0; i < programs.length; i++) {
        allPrograms += programs[i] + "<br>";

    }
    document.getElementById("program").innerHTML = "已经报名参加的项目：<br>" + allPrograms;
}

setInterval(update, 1000 / 5);
