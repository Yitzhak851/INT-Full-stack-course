let divContainer;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, -1];
let emptyCell = 8;
let divCell;//TODO- finish
let row;
let col;


function rand (min, max){
    return min + Math.floor(Math.random() * (max - min));
}

function row (i){
    return (i-i%3)/3;
}

function col (i){
    return (i%3);
}

function getIndex (row, col){
    return 3*row +col;
}

function shuffle (){
    let r = row(emptyCell);
    let c = col(emptyCell);
    if(emptyCell ==4){
        //We have fowr option, this is the middle

        if(rand(0,2) == 0){
            // Change row
            r +=rand(0,2) == 0 ? 1 : -1;
        }else{

        }
    }
}