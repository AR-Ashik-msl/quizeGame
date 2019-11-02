(function() {
    //-------- select necessary dom --------
    let mainContainer = document.getElementById('main-container');
    let Container = document.getElementById('container');
    let displayInDiv = document.getElementById('main');
    let displayScore = document.getElementById('sc');
    let gameOver = document.querySelector('.gameOver');
    let scx = document.getElementById('score-x');

    // ---------create a function constraction for creating several question object--------------
    function Questions(qname,answers,correctAns) {
        this.questionName = qname;
        this.answers = answers;
        this.correctAns = correctAns;
    }
    // create a prototype for displaying random question and answers

    Questions.prototype.displayQuesnAndAns = function() {
        // -------- print the random question --------------
        displayInDiv.innerText = this.questionName + '\n';
        //-------print the option and number --------------
        for (let j = 0; j <this.answers.length; j++) {
            //------- create new div inside the 'id=main' div-------------------
           let newDiv =  document.createElement('div');
           newDiv.className = 'option';
           //--------create text node and add it into new div --------------------
            newDiv.appendChild(document.createTextNode(j+1 + '.' + this.answers[j]));
            // ------- add the new div into the 'id=main'-----------------------
            displayInDiv.appendChild(newDiv);
        }
         return this.inputAns();
    }
   
    // ------ create another prototype for take input answer-----
    let cor = 0,wro = 0;

    Questions.prototype.inputAns = function() {
        let ans = prompt('Please choice correct one');
        
        if (parseInt(ans) === this.correctAns) {
            //------display current number -----------
            displayScore.innerText = score(true);
            //-----change the value if it is right or wrong ----------
            scx.style.visibility = 'visible';
            scx.innerText = 'correct answer!'
            cor++;

        } else if (ans === 'exit') {
            scx.style.visibility = 'hidden';
            mainContainer.style.visibility = 'hidden';
            container.style.display = 'block';
            displayInDiv.style.visibility = 'hidden';
            displayScore.style.visibility = 'hidden';
            //---- create and append h4 header into the id = gameOver div ---------
           let heading =  document.createElement('h4');
           heading.appendChild(document.createTextNode('game over'))
           gameOver.appendChild(heading);
           gameOver.appendChild(document.createTextNode(' your total score: ' + score() + '\n' + 'Correct answere: ' + cor + '\n' + 'Wrong answere: ' + wro));
           heading.style.color = 'tomato';
           heading.style.textDecoration = 'none';
           heading.style.fontSize = '3rem';
            return ans;
        } else {
            // console.log(' Try again');
            scx.style.visibility = 'visible';
            scx.innerText = 'Wrong answer!'
            wro++;
            // this.displayQuesnAndAns()//score
            // let sc = score(false);
            displayScore.innerText = score(false);
        }

    }

    

    //-------create question object and store into an array---------

    let quesnObjArray = [
        new Questions('Which is the first programming language?',['Plankalkül','Java','C','Pascal'],1),
        new Questions('Who is the best footballer in world in 2019?',['C.Ronaldo','Neymar','LM 10','C.Mbappe'],3),
        new Questions('Which country is called African Egle?',['Ghana','Somalia','Uganda','Nigeria'],4),
        new Questions('Who gave the theory of relativity?',['Albert Einstain','Sir Issack Neoton','Stephen Hocking','Hackel'],1),
        new Questions('Where was the Zozo Championship 2019 held?',['U.S.A','Japan','Korea','Chaina'],2),
        new Questions('When was the International Animation Day proclaimed?',['1995','2002','2003','2011'],2),
        new Questions('Which country is to hold the first phase of Bishwa Ijtema?',['U.S.A','Japan','Bangladesh','India'],3),
        new Questions('Who is the President of the World Bank?',['David Malpass','Antoini Kante','Donalt Trump','Diniel Scaloni'],1),
        new Questions('Who has taken office as the first female PM of Belgium?',['Antoinette Spaak',' C.Sophie Wilmes','Marie-Christine Marghem','Joëlle Milquet'],2)
    ]

// -----score checking function------
    let sc = 0;
    function score(value) {
        if (value === true) {
            sc++;
            return sc;
        } else if(value === false) {
            sc--
            return sc;
        }
        return sc;
    }
    // ---- create function to print question and prompt box dynamicaly-----
    function displayDynamicaly() {
        // ----- create a random variable for printing random question -------
        let i = Math.floor(Math.random()*quesnObjArray.length);

        if (quesnObjArray[i].displayQuesnAndAns() !== 'exit') {
            displayDynamicaly();
        }
    }

  displayDynamicaly();

}());


