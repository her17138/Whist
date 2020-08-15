/**
 * implementación de reglas del juego 
 */

module.exports = {
    initDeck,
    setTrump,
    getTrump,
    getHigherCard,
    getTrickWinner,
    calculateGroupScore
}
function initDeck(){
    let temp_arr = [...Array(52).keys()]
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let arr = []    
    temp_arr.forEach(x => arr.push(values[x%13]))
    /**
     * asignar valores reales a numeros del deck 
     * 1-13: spades 
     * 14-26: clubs
     * 27-39: diamonds
     * 40-52: hearts 
     */
    let c_types = [...Array(13).fill("spades")].concat(Array(13).fill("clubs"), Array(13).fill("diamonds"), Array(13).fill("hearts"))
    // console.log(c_types) 
    let cards = temp_arr.map(x => JSON.parse(`{"value": "${arr[x]}", "type": "${c_types[temp_arr.indexOf(x)]}"}`))
    console.log(cards)
    // randomize deck
    let currentIndex = temp_arr.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards
}

 function setTrump(trump){

 }

 function getTrump(){
     trump = "heart";
     return trump;
 }

 function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

 function getHigherCard(data){
     const initial_cards = Object.values(data)
     var cards = []

     //convertir de data = {username1: {value: '2', type:'diamonds'}, ...}
     //cards =[["heart","0"],["heart","3"],["heart","A"],["x","B"]]
     for (i = 0; i < initial_cards.length; i++) {
         var temp = []
         temp.push(initial_cards[i].value)
         temp.push(initial_cards[i].type)
         cards.push(temp)
     }

   
     var cplayed = [];
     var cards_map = [];
     var maxCardIndex = -1;
     //validar si van a mandar los numeros como ints o como strings desde el frontend
     var values = {
        14: 'A',
        13: 'K',
        12: 'Q',
        11: 'J',
        10: '10',
        9: '9',
        8: '8',
        7: '7',
        6: '6',
        5: '5',
        4: '4',
        3: '3',
        2: '2',
        0: '0'      
     };
          
    
     isTrump = true
     trump = getTrump();

     while (isTrump){
            cards.forEach(element =>
               cplayed.push(element[1])
         );

         //haria falta analizar el trump en caso que venga de lo contrario si se manda como 
         //0 no hace falta
         cplayed.forEach(element => cards_map.push(Number(getKeyByValue(values,element))));
         maxCardIndex = cards_map.indexOf(Math.max(...cards_map));

         trump_card = cards[maxCardIndex][0]
         if (trump_card == trump){
            isTrump = false
         }
     }
     
     return maxCardIndex;
 }



//players se veria  asi:
// players = ["Juan", "Pedro", "Luis", "Hee"]
// index es el valor que getHigherCard devuelve
function getTrickWinner(players, index){
    return players[index];
}


 //podemos asumir que los grupos estan formados por pares e impares
 //es decir el player en la pos 1 es la pareja del player 3 y lo mismo con los
 //pares
 //seria bueno que tuvieramos una lista de users en la cual llevemos la cuenta de puntos individuales
 //la forma de calcular los puntos de grupo es que por cada 7 tricks que lleva la pareja
 //en conjunto ganan un punto como grupo

 //asumiendo que users se ve asi:
 //users = [["juan",4],["pedro",1],["carlos",2],["lalo",3]]
 function calculateGroupScore(users){
    var p1 = users[0][1] + users[2][1]
    var p2 = users[1][1] + users[3][1]
    

}


