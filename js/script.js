let test = {
    questions: [
        {
            text: "Кем вы хотели стать в детстве?",
            answers: [
                {
                    text: "Космонавтом",
                    points: 5
                },
                {
                    text: "Кондитером",
                    points: 2
                },
                {
                    text: "Пилотом",
                    points: 5
                },
                {
                    text: "Пожарником",
                    points: 7
                },
                {
                    text: "Другое",
                    points: 0
                }
            ]
        },
        {
            text: "Вы любите играть в игры?",
            answers: [
                {
                    text: "Да",
                    points: 2
                },
                {
                    text: "Нет",
                    points: 5
                },
                {
                    text: "Иногда играю",
                    points: 3
                },
                {
                    text: "Ненавижу игры",
                    points: 5
                },
                {
                    text: "Другое",
                    points: 0
                }
            ]
        },
        {
            text: "К какой группе вы б хотели себя отнести?",
            answers: [
                {
                    text: "Экстраверт",
                    points: 5
                },
                {
                    text: "Интроверт",
                    points: 2
                },
                {
                    text: "Не знаю",
                    points: 3
                },
                {
                    text: "Что это?",
                    points: -1
                },
                {
                    text: "Другое",
                    points: 0
                }
            ]
        },
        {
            text: "Что бы вы предпочли?",
            answers: [
                {
                    text: "Громкий концерт",
                    points: 5
                },
                {
                    text: "Сидеть дома и пить горячий шоколад",
                    points: 3
                },
                {
                    text: "Играть в игры с чаем",
                    points: 3
                },
                {
                    text: "Поесть в ресторане",
                    points: 5
                },
                {
                    text: "Другое",
                    points: 0
                }
            ]
        },
        {
            text: "К чему из перечисленого вас тянет больше всего?",
            answers: [
                {
                    text: "Колонка",
                    points: 3
                },
                {
                    text: "Приставка",
                    points: 2
                },
                {
                    text: "Лего",
                    points: 5
                },
                {
                    text: "Телефон",
                    points: 5
                },
                {
                    text: "Клавиатура",
                    points: 2
                }
            ]
        },
        {
            text: "Вам просто знакомится с новыми людьми?",
            answers: [
                {
                    text: "Довольно просто",
                    points: 3
                },
                {
                    text: "Да",
                    points: 5
                },
                {
                    text: "Нет",
                    points: 1
                },
                {
                    text: "Не сказал бы",
                    points: 2
                },
                {
                    text: "Что-то среднее",
                    points: 3
                }
            ]
        },
        {
            text: "Вы любите детей?",
            answers: [
                {
                    text: "Нет",
                    points: 3
                },
                {
                    text: "Ненавижу",
                    points: 5
                },
                {
                    text: "Да",
                    points: 1
                },
                {
                    text: "Обожаю!",
                    points: 2
                },
                {
                    text: "Что-то среднее",
                    points: 3
                }
            ]
        },
        {
            text: "Вы любите смотреть сериалы/фильмы?",
            answers: [
                {
                    text: "Нет",
                    points: 1
                },
                {
                    text: "Смотрю только самые популярные",
                    points: 2
                },
                {
                    text: "Да",
                    points: 4
                },
                {
                    text: "Обожаю!",
                    points: 5
                },
                {
                    text: "Смотрю время от времени",
                    points: 3
                }
            ]
        },
        {
            text: "Вы любите путешествовать?",
            answers: [
                {
                    text: "Нет",
                    points: 1
                },
                {
                    text: "Делаю это когда только будет возможность",
                    points: 3
                },
                {
                    text: "Да",
                    points: 4
                },
                {
                    text: "Обожаю!",
                    points: 5
                },
                {
                    text: "Лучше буду сидеть дома",
                    points: 1
                }
            ]
        },
        {
            text: "Вы любите творить/создавать?",
            answers: [
                {
                    text: "Нет",
                    points: 1
                },
                {
                    text: "Люблю , но у меня с фантазией не очень",
                    points: 3
                },
                {
                    text: "Да",
                    points: 4
                },
                {
                    text: "Обожаю!",
                    points: 5
                },
                {
                    text: "Не понял смысла вопроса",
                    points: -1
                }
            ]
        },
        {
            text: "Как вы относитесь к однополым отношениям/бракам?",
            answers: [
                {
                    text: "Положительно",
                    points: 4
                },
                {
                    text: "Негативно",
                    points: 2
                },
                {
                    text: "Не знаю",
                    points: 1
                },
                {
                    text: "Нейтрально",
                    points: 3
                },
                {
                    text: "Я сам являюсь представителем данного сообщества",
                    points: 3
                }
            ]
        }
    ]
}
let question_counter = 0;
let result_points = 0;
function startTest(this1) {
    this1.parentElement.style.display = "none";

    let question = document.getElementById("quest");
    question.style.display = "block";
}
function reoladQuestion(question) {
    let text = document.getElementById("text-question");
    let b1 = document.getElementById("btn1");
    let b2 = document.getElementById("btn2");
    let b3 = document.getElementById("btn3");
    let b4 = document.getElementById("btn4");
    let b5 = document.getElementById("btn5");

    text.innerText = question.text;
    b1.innerText = question.answers[0].text;
    b2.innerText = question.answers[1].text;;
    b3.innerText = question.answers[2].text;;
    b4.innerText = question.answers[3].text;;
    b5.innerText = question.answers[4].text;;
}
function startTimer() {
    setTimeout(() => {
        let bgdark = document.getElementById("bg-dark");
        let last_res_div = document.getElementById("last-res-div");
        bgdark.classList.add("opacity0");
        setTimeout(() => {
            bgdark.style.display = "none";
        }, 500);
        setTimeout(() => {
            last_res_div.style.display = "block";
            setTimeout(()=>{last_res_div.classList.add("opacity1");},100);
        }, 700);
    }, 2500)
}
function sendAnswer(this1) {
    let id = this1.id;
    let curr_quest = test.questions[question_counter];
    let numofid = parseInt(id[3]);
    result_points += curr_quest.answers[numofid - 1].points;

    if (question_counter == 10) {
        alert(`Твой результат : ${result_points}`);
        let quest = document.getElementById("quest");
        quest.style.display = "none";
        let result = document.getElementById("result");
        result.style.display = "block";
        startTimer();
        let name=document.getElementById("ur-name");
    }
    else
        reoladQuestion(test.questions[++question_counter]);
}