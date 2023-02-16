// //let paragraphs = document.querySelectorAll('p');
// let inputs = document.querySelectorAll('input');
// let test = document.querySelector('#test')
// let button = document.querySelector('#btn');

// let questions = [
//     {
//         text: 'Вопрос 1?',
//         right: 'ответ 1',
//     },
//     {
//         text: 'Вопрос 2?',
//         right: 'ответ 2',
//     },
//     {
//         text: 'Вопрос 3?',
//         right: 'ответ 3',
//     },
// ];

// for (let element of questions) {
//     console.log(element)
//     let div = document.createElement('div');
    
//     let p = document.createElement('p');
//     p.textContent = element.text
//     div.appendChild(p);

//     let input = document.createElement('input');
//     div.appendChild(input);

//     test.appendChild(div)
// }
// let radios = document.querySelectorAll('input[name="1"]');

// for (let radio of radios) {
//     radio.onclick = function() {
//         if (radio.hasAttribute('data-right')) {
//             console.log('correct')
//         } else {
//             console.log('wrong')
//         }
//     }    
// }

// 39
// let answers = [0, 1, 2]
// let divs = document.querySelectorAll('div');
// let radios = document.querySelectorAll('input[type="radio"]');

// button.addEventListener('click', function() {
//     for (let radio of radios) {
//         if (radio.checked) {
//             if (radio.hasAttribute('data-right')) {
//                 console.log('correct')
//                 radio.parentElement.classList.add('right')
//             } else {
//                 console.log('wrong');
//                 radio.parentElement.classList.add('wrong')
//             }
//         }
//     }
// })


//40
/*
let answers = [1, 1, 0];
let radioButtons = document.querySelectorAll('input[type="radio"]');
let button = document.getElementById('btn');

let radioGroups = {
    group1: document.querySelectorAll('input[type="radio"][name="1"]'),
    group2: document.querySelectorAll('input[type="radio"][name="2"]'),
    group3: document.querySelectorAll('input[type="radio"][name="3"]')
};

button.addEventListener('click', function() {
    let keys = Object.keys(radioGroups)
    
    let checkedRadioButtons = keys.reduce((acc, groupName) => {
        const group = radioGroups[groupName];
        
        for (let i = 0; i < group.length; i++) {
            if (group[i].checked) {
                acc.push(i);
            }
        }
        return acc;
    }, []);

    for (let i = 0; i < answers.length; i++) {
        if (checkedRadioButtons[i] == answers[i]) {
            console.log('correct');
        } else {
            console.log('wrong');  
        }
    }
})
*/
// 41
let questions = [
	{
		text: 'вопрос 1?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
];
let test = document.querySelector('#test');
let button = document.querySelector('#button');

for (let i = 0; i < questions.length; i++) {
    let div = document.createElement('div');
    
    let p = document.createElement('p');
    p.textContent = questions[i].text;
    div.appendChild(p);

    let label1 = document.createElement('label');

    let radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', i + 1);
    
    label1.appendChild(radio1);

    let radioLabel1 = document.createTextNode(questions[i].variants[0]);
    label1.appendChild(radioLabel1);

    div.appendChild(label1);

    let label2 = document.createElement('label');
    
    let radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', i + 1);
    label2.appendChild(radio2);

    let radioLabel2 = document.createTextNode(questions[i].variants[1]);
    label2.appendChild(radioLabel2);
    
    div.appendChild(label2);

    let label3 = document.createElement('label');
    
    let radio3 = document.createElement('input');
    radio3.setAttribute('type', 'radio');
    radio3.setAttribute('name', i + 1)
    label3.appendChild(radio3);

    let radioLabel3 = document.createTextNode(questions[i].variants[2]);
    label3.appendChild(radioLabel3);

    div.appendChild(label3)

    test.appendChild(div);   
}

let rightAnswers = [];

for (let i = 0; i < questions.length; i++) {
    rightAnswers.push(questions[i].right);
};

console.log(rightAnswers);

let radioGroups = {
    group1: document.querySelectorAll('input[type="radio"][name="1"]'),
    group2: document.querySelectorAll('input[type="radio"][name="2"]'),
    group3: document.querySelectorAll('input[type="radio"][name="3"]'),
};

button.addEventListener('click', function() {
    let keys = Object.keys(radioGroups);

    let checkedRadioButtons = keys.reduce((acc, groupName) => {
        const group = radioGroups[groupName];

        for (let i = 0; i < group.length; i++) {
            if (group[i].checked) {
                acc.push(i);
            }
        }
        return acc;
    }, []);

    for (let i = 0; i < rightAnswers.length; i++) {
        if (checkedRadioButtons[i] == rightAnswers[i]) {
            console.log('correct');
        } else {
            console.log('wrong')
        }
    }
})