
let questions = [
"Как называется очень сильный ветер",
"Количество возможных состояний воды",
"Чем звезды отличаются от планет?",
"Как называется вид деревьев, имеющих иглообразные листья?",
"Как называется весенний разлив реки",
"В какое время года птицы вьют гнёзда?",
"Как называется кратковременное потепление зимой или весной",
"Как называется время, за которое Земля делает один оборот вокруг Солнца?",
"В каком созвездии находится Полярная звезда?",
"Когда происходит ледоход на реках?"
];

let RightCount = 0;
let RightAnswer = [
    "Ураган",
    "3",
    "Звезды излучают свет",
    "Хвойные",
    "Половодье",
    "Весной",
    "Оттепель",
    "Год",
    "Малой Медведицы",
    "Весной"
];

let Answer = document.getElementById('Answer');
let count = 0;
let mainArticle__paragraph = document.getElementById('main-article__paragraph').innerHTML = questions[count];

function AnswerThis(){
    if(Answer.value === RightAnswer[count]){
        RightCount++;
    }
    count++;
    if(count > 9){
        if(RightCount >= 6){
        alert("Тест пройден\n" + RightCount + "/10");
        location.reload();
    }
    else if(RightCount <= 5){
        alert("Тест не пройден\n" + RightCount + "/10");
        location.reload();
    }

    } else {
        Answer.value = "";
        mainArticle__paragraph = document.getElementById('main-article__paragraph').innerHTML = questions[count];
        Answer.placeholder = `Вопрос №${count + 1}`;
    }
    let mainArticle__header = document.getElementById('main-article__header');
    mainArticle__header.innerHTML = "question: " + (count + 1);
}   