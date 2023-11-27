// choose categories questions 

// each categoy has set of questions 



const paqData = [

    // scary
    {
      question: 'The British promised the land of Palestine to:',
      options: ['Jews', 'Arabs', 'French'],
      Difficulty: 'easy',
      answer: 'Jews',
    },
    {
      question: 'Shaykh Izzeddin al-Qassam was killed on:',
      options: ['20 November 1935', '11 September 1930', '1 January 1933'],
      Difficulty: 'easy',
      answer: '20 November 1935',
    },
    {
      question: 'Hamas was formed on:',
      options: ['1990', '2000', '1987'],
      Difficulty: 'hard',
      answer: '1987',
    },
    {
      question: 'Israel Occupation Forces committed Sabra and Shatila massacre on:',
      options: ['1972', '1982', '1952'],
      Difficulty: 'hard',
      answer: '1982',
    },
    {
      question: 'Palestine Liberation Organization was formed on:',
      options: ['1954','1964','1973'],
      Difficulty: 'normal',
      answer: '1964',
    },
    
    {
       question: 'Rachel Cornie is an American peace activist was killed by Israel Occupation Forces on:',
       options: ['16 March 2003','16 March 2004','16 March 2005'],
       Difficulty: 'normal',
       answer: '16 March 2003',
      },

      {
       question: 'Shireen Abu Akleh an American-Palestinian Journalist was killed by Israel Occupation Forces on',
       options: ['11 May 2022','11 May 2021','11 May 2023'],
       Difficulty: 'scary',
        answer: '11 May 2022',
      },
      
      {
          question: 'Ghufran Harun a Palestinian Journalist was killed by Israel Occupation Forces on:',
          options: ['1 June 2022','1 June 2020','1 June 2023'],
          Difficulty: 'scary',
          answer: '16 March 2003',
        },
     
  ];
  
//   define variables 
currentPlayer=1;

let p1w=0, p1l=0, p2w=0, p2l = 0,round=1;

let difficulty;
let questionArray=[];
let questionsAndAnswers="";

// functions new game
function newGame(){

    // question difficulty from html and its value 
    p1w=0, p1l=0, p2w=0, p2l = 0,round=1;

document.querySelector(".scoreBoardWP").innerText=0;
document.querySelector(".scoreBoardLS").innerText=0;
document.querySelector(".scoreboardWI").innerText=0;
document.querySelector(".scoreBoardLT").innerText=0;

difficulty = document.querySelector("#pqdiffi").value;

// define of questions array 
questionArray=[];

// colletions of text from data set 
questionsAndAnswers="";
document.querySelector("#quiz").innerHTML ="";
for(let i=0;i<paqData.length;i++){
    if(paqData[i].Difficulty==difficulty){
        questionArray.push(paqData[i]);
       
    }
}
document.querySelector(".pqround").innerText=round;
// look for answer from each anchor 
qna();
document.querySelector("#quiz").innerHTML =questionsAndAnswers;
document.querySelectorAll("#quiz > a").forEach(function(e){
    e.addEventListener('click',checkanswer);
    });
console.log(questionArray);

}
  
document.querySelector("#pqNewGame").addEventListener('click',newGame);

function qna(){
    console.log(questionArray.length);
    randomNum=Math.floor(Math.random()*questionArray.length);
    questionsAndAnswers += "<h4>"+questionArray[randomNum].question+"</h4>";
    for(let j=0;j<questionArray[randomNum].options.length;j++){
        questionsAndAnswers += "<a class='ancOption' href='#' id='"+j+"'>"+questionArray[randomNum].options[j]+"</a>";
        }

}

function checkanswer(answer){
    console.log('prevent');
    answer.preventDefault();
console.log(this.id);

if(questionArray[randomNum].answer==questionArray[randomNum].options[this.id]){
    console.log("correct");
   
    if (currentPlayer==1){ 
        
        p1w++;

        document.querySelector(".scoreBoardWP").innerText=p1w;
        currentPlayer=2;
        questionsAndAnswers="";
        qna();
        document.querySelector("#quiz").innerHTML="";
        document.querySelector("#quiz").innerHTML = questionsAndAnswers;
        document.querySelectorAll("#quiz > a").forEach(function(e){
        e.addEventListener('click',checkanswer);
    });
console.log(questionArray);

    }

    else {

        p2w++; 
        round++;
        document.querySelector(".pqround").innerText=round;
        document.querySelector(".scoreboardWI").innerText=p2w;
        currentPlayer=1;
        questionsAndAnswers="";
        qna();
        document.querySelector("#quiz").innerHTML="";
        document.querySelector("#quiz").innerHTML =questionsAndAnswers;
    document.querySelectorAll("#quiz > a").forEach(function(e){
    e.addEventListener('click',checkanswer);
    });
    }

}
else{
    console.log("incorrect");

    if (currentPlayer==1){ 
        
        p1l++;

        document.querySelector(".scoreBoardLS").innerText=p1l;

        currentPlayer=2;
        questionsAndAnswers="";
        qna();
        document.querySelector("#quiz").innerHTML="";
        document.querySelector("#quiz").innerHTML =questionsAndAnswers;
    document.querySelectorAll("#quiz > a").forEach(function(e){
    e.addEventListener('click',checkanswer);
    });
    }

    else {

        p2l++; 
        round++;
        document.querySelector(".pqround").innerText=round;
        document.querySelector(".scoreBoardLT").innerText=p2l;
        questionsAndAnswers="";
        currentPlayer=1;
        qna();
        document.querySelector("#quiz").innerHTML="";
        document.querySelector("#quiz").innerHTML =questionsAndAnswers;
    document.querySelectorAll("#quiz > a").forEach(function(e){
    e.addEventListener('click',checkanswer);
    });
    }

}
}








//   each player start with starting coins 


// Player 1 plays 







// player 1 answer correct move to second player 


// player 1 time finish move to to second player 

// player 1 has option to buy from coins extra time to answer 

// player 1 extra time finish move to second player 

// player 1 wrong answer move to second player 


// correct answer hover green 


// player 1 wrong anwer move to second player 

// wrong answer hover red 

// each category has coundown timer 

// each category get points when answer is correct 

// each category deduct point when answer is wrong 

// if player answer is wrong deduct points from balance  or dedcut/add to negative balance 

// if player answer is correct get points 


// player 1 start 



// the winner after completing questions "currently 5"





