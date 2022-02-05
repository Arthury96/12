



const firstWordArray = ['pipes', 'crime', 'murderers', 'giants', 'airplanes', 'nurses', 'gypsies', 'spas', 'money', 'lighters', 'motherhood', 'amusement', 'parks', 
'motorcycles', 'golf', 'masonry', 'firemen', 'native', 'bohemians', 'wrestling', 'astronomy', 'pork', 'camels', 'pigeons', 'zebras', 'radio', 'printing',
'slavery', 'parachuting', 'x-rays', 'horses', 'railroads', 'mining', 'games', 'fencing', 'sugar', 'hockey', 'books', 'prisons', 'marionettes', 'shipwrecks', 'dolphins', 
'dentistry', 'execution', 'laundry', 'rhinoceros', 'agriculture', 'cactus', 'pipe', 'gymnastics', 'clowns'];

const verbArray = ['pronounce', 'doubt', 'disappear', 'tax', 'note', 'rent', 'enable', 'question', 'constitute', 'blame', 'rain', 'centre', 'resign', 'feature', 'mutter', 'reveal', 
'pass', 'determine', 'flood', 'consist', 'tempt', 'hook', 'compare', 'devote', 'expect', 'dispose', 'lose', 'come', 'split', 'desire', 'burn', 'accumulate', 'sail', 'draft', 'visit', 
'direct', 'predict', 'mark', 'have', 'strike', 'recover', 'defend', 'accommodate', 'offer', 'ban', 'install', 'listen', 'forbid', 'spin'];

const adverbArray = ['meaningfully', 'clearly', 'unimpressively', 'willfully', 'viciously', 'wetly', 'colorfully', 'happily', 'literally', 'elegantly', 'zestily', 'heavily',
'strictly', 'sometimes', 'faithfully', 'upward', 'rather', 'positively', 'inwardly', 'wisely', 'officially', 'almost', 'freely', 'strongly', 'joshingly', 'mechanically', 'busily',
'hastily', 'mortally', 'effectively', 'jaggedly', 'vainly', 'obediently', 'politely', 'merrily', 'slowly', 'neatly', 'loosely', 'kookily', 'eagerly', 'healthily', 'boldly', 'bravely',
'somewhat', 'mockingly', 'terrifically', 'thoroughly', 'interestingly', 'early', 'briskly'];

const subjectArray = ['truck', 'flock', 'swing', 'bread', 'patch', 'sugar', 'unit', 'maid', 'school', 'friends', 'grip', 'fold', 'wound', 'vessel', 'tub', 'current', 'division', 'seat',
'look', 'test', 'measure', 'arch', 'faucet', 'skate', 'color', 'vase', 'winter', 'hope', 'rock', 'stranger', 'girl', 'shape', 'pain', 'coal', 'wheel', 'arm', 'library', 'action', 'pencil',
'chair', 'pear', 'example', 'pets', 'riddle', 'list', 'sack', 'leather', 'team', 'church', 'beds'];

const unionArr = ['and', 'or', 'within', 'with', 'for', 'of' ];

const randomNumbeWord = (array) => {

    return Math.floor(Math.random() * array.length ) 

}


const returnString = () => {

    let upperCase = subjectArray[randomNumbeWord(subjectArray)];

    upperCase = upperCase[0].toUpperCase()  + upperCase.slice(1, );



    return `${upperCase} ${verbArray[randomNumbeWord(verbArray)]} ${firstWordArray[randomNumbeWord(firstWordArray)]} ${unionArr[randomNumbeWord(unionArr)]} ${verbArray[randomNumbeWord(verbArray)]} ${adverbArray[randomNumbeWord(adverbArray)]} ${firstWordArray[randomNumbeWord(firstWordArray)]}.`;


}


console.log(returnString());
