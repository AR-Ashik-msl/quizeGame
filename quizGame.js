(function() {
    // ---------create a function constraction for creating several question object--------------
    function Questions(qname,answers,correctAns) {
        this.questionName = qname;
        this.answers = answers;
        this.correctAns = correctAns;
    }
    // create a prototype for displaying random question and answers

    Questions.prototype.displayQuesnAndAns = function(score) {
        console.log(this.questionName);
        for (let j = 0; j <this.answers.length; j++) {
            console.log(j+1,this.answers[j]);
        }
        return this.inputAns(score);
    }

    // ------ create another prototype for take input answer-----

    Questions.prototype.inputAns = function(score) {
        let ans = prompt('Please choice correct one');

        if (parseInt(ans) === this.correctAns) {
            console.log('Correct answer!');
            console.log('Your current score: ' + score(true) + '\n' + '---------------------------------------------------');
        } else if (ans === 'exit') {
            console.log('Game over:');
            console.log('Your total score: ' + score(false) + '\n' + '---------------------------------------------------');
            return ans;
        } else {
            console.log('Wrong answer! Try again');
            this.displayQuesnAndAns(score)
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
        if (value) {
            sc++;
        } else {
            return sc;
        }
        return sc;
    }
    // ---- create function to print question and prompt box dynamicaly-----
    function displayDynamicaly() {
        // ----- create a random variable for printing random question -------
        let i = Math.floor(Math.random()*quesnObjArray.length);

        if (quesnObjArray[i].displayQuesnAndAns(score) !== 'exit') {
            displayDynamicaly();
        }
    }
displayDynamicaly();
}());
