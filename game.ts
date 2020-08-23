class Game {
    private _player : Player;
    private _stacks : Stack[];
    private _clock : string;
    private _maxMove : number;
    private _moveCount : number;

    constructor(player : Player, stacks : Stack[], maxMove : number)
    {
        this._player = player;
        this._stacks = stacks;
        this._maxMove = maxMove;
        this._moveCount = 0;
    }

    get player() : Player
    {
        return this.player;
    }

    get stacks() : Stack[]
    {
        return this._stacks;
    }

    public getStack(color : string) : Stack{
        // returns the stack that match the color
        for(var i = 0; i < this._stacks.length; i++)
        {
            if(this._stacks[i].color === color)
                return this._stacks[i];
        }
    }

    public start() : void {
        this._clock = "0:00";
    }

    public isGameOver() : boolean {
        return this._moveCount >= this._maxMove;
    }

    public increaseMove () {
        this._moveCount++;
    }

    public end() : void {
        // calculate result / score
    }
}

class Player {
    private _name : string;

    constructor(name : string){
        this._name = name;
    }

    get name () : string {
        return this._name;
    }

    public makeMove(sourceStack : Stack, destinationStack : Stack) : void {
        let dice = sourceStack.moveDiceOut();
        destinationStack.moveDiceIn(dice);
    }
}

class Stack {
    private _color : string;
    private _dices : Dice[];

    constructor(color: string, dices : Dice[]){
        this._color = color;
        this._dices = dices;
    }

    get color() : string {
        return this._color;
    }

    get dices() : Dice[]
    {
        return this._dices;
    }

    public moveDiceIn(dice : Dice){
        this._dices.push(dice);
    }

    public moveDiceOut() : Dice {
        return this._dices.pop();
    }

    public isSolved() : boolean
    {
        return false;
    }
}

class Dice {
    private _color : string;
    private _id : number;

    constructor(color : string, id : number){
        this._id = id;
        this._color = color;
    }

    get color() : string 
    {
        return this._color;
    }

    public isSame(anotherDice : Dice) : boolean
    {
        return this._id === anotherDice._id;
    }
}

/***************************User Interface Code********************/

class GameInterface {
    private _game : Game;

    constructor(game : Game){
        this._game = game;
    }

    public drawElements(){
        // code to draw the game board
        for(var i = 0; i < this._game.stacks.length; i++){
            var stackDrawingService = new StackDrawingService(this._game.stacks[i]);
            stackDrawingService.draw(i);

            var diceDrawingService = new DiceDrawingService(this._game.stacks[i]);
            diceDrawingService.draw(i);
        }
    }

    public userDrag(e){
        var souceColor = e.SC;
        var destinationColor = e.DC;
        var souceStack = this._game.getStack(souceColor);
        var destinationStack = this._game.getStack(destinationColor);
        this._game.player.makeMove(souceStack, destinationStack);
        if(this._game.isGameOver())
        {
            this._game.end();
            this.showGameOverView();
        }
    }

    public showGameOverView(){

    }
}

class StackDrawingService {
    private topCoordinate : number;
    private bottomCoordinate: number;
    private gapBetween : number;
    private _stack : Stack;

    public constructor(stack : Stack){
        this._stack = stack;
    }

    public draw(sequenceNumber : number){
        // html, css code to draw the stack in right place
    }
}

class DiceDrawingService {
    private topCoordinate : number;
    private bottomCoordinate: number;
    private gapBetween : number;
    private _stack : Stack;

    public constructor(stack : Stack){
        this._stack = stack;
    }

    public draw(sequenceNumber : number){
        for(var i = 0; i < this._stack.dices.length; i++)
        {
            // html, css code to draw the stack in right place
        }
    }
}


let player = new Player("jalaluddin");
let stacks = new Array<Stack>();

let diceSet1 = new Array<Dice>();
diceSet1.push(new Dice("red", 1));
diceSet1.push(new Dice("red", 2));
diceSet1.push(new Dice("green", 3));

let diceSet2 = new Array<Dice>();
diceSet2.push(new Dice("red", 4));
diceSet2.push(new Dice("green", 5));
diceSet2.push(new Dice("green", 6));

let diceSet3 = new Array<Dice>();
diceSet3.push(new Dice("blue", 7));
diceSet3.push(new Dice("blue", 8));
diceSet3.push(new Dice("blue", 9));


stacks.push(new Stack("red", diceSet1));
stacks.push(new Stack("green", diceSet2));
stacks.push(new Stack("blue", diceSet3));

let game = new Game(player, stacks, 10);

var gameInterface = new GameInterface(game);
gameInterface.drawElements();

game.start();
