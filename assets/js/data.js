var vines = ['Eating popcorn with your BF 🆚 eating popcorn with your friend',
`When you realise my new awesome single came out!🏽`,
'When your friend calls and wants to hang out',
'trying to surf in the summer trying to surf in the winter',
'I\'m going on tour tomorrow!!! join me at the o2 arena!!! wear your',
'Just finished my new awesome song',
'#bffsforevers #gonnadietogether',
'when your parents acting psycho and you\'re just like...',
'Happy hanukkah everybody',
'aliens be like',
'look at how much money i make!!!!',
'#recording my #mixtape it\'s on fire',
'when you listen to my mixtape',
'when you\'re bored in church🏽',
'hey check out my instagram, musical.ly, [ten other social networks]',
'we all have those days where...',
'what are THOSE #original #copyright #notinthepublicdomain ©️©️©️©️©️©️©️©️©️',
'when you find out your adopted #whywouldtheydothistome',
'when your moms like...',
'why would THIS HAPPEN TO MEEEEEEEE #why',
'Mmm... now only $0.99 on the savers menu #sponsered',
'when you see your crush',
'Is pepsi ok?',
'Me when i\'m older:',
'Would you like fries with that REMIX!!!!!!',
'every wedding be like...',
'all the irish be like...',
'when it\'s chinese new year in america...',
'MLG Paper Throw!!!!',
'When your in school and you\'re like:',
'when your friends say they play sports',
'Santa claus be like',
'when you see a rainbow'];

var hashtags = ['#therainisreal',
'#hashtag',
'#hashtags',
'#nocringe',
'#originalhashtag',
'#merrychristmas',
'#youusedto',
'#bored',
'#takeyourtime',
'#amiright',
'#letsgetrooooiiiteeeintothenews',
'#jacoubishere',
'#newvideo',
'#notfaked',
'#whatsthepointofeyelids',
'#paradoy',
'#style',
'#notaracist',
'#newsingle',
'#lookingfortheone',
'#yoyoyo',
'#featureme'];

var songs = ['Treez in the Breez',
'Shapez in Cloudz',
'Lookin Fresh',
'Neater than Neat Orange Squash',
'I Broke The Kitchen Fork: Part 2',
'The Return of The Chicken Sandwhich',
'Whip Whip Dab Dab',
'All Children are Racists',
'Mike the Racist Banana',
'John the Literal Apple',
'Bonjour, Madame',
'My Shirt\'s All Sweaty',
'Hit or Run',
'New Hairstyle like Harry Style',
'Internet Memez',
'My Strange Obsession: Part 8'];

var emojis = ["😗😗😗",
"👳🏽👳🏽👳",
"👨‍👨👨",
"😵😵😵",
"👒👒👒",
"🎹🎹🎹",
"🔥🚒🔥🚒🔥🚒🔥",
"🏙🏙🏙",
"😕😕😕",
"💀💀💀",
"🐦🐦🐦",
"🍼🍼🍼",
"👶👶👶",
"🎵🎵🎵🎵",
"👰👰👰",
"🐉🐉🐉",
"🗑🗑🗑",
"🙄🙄🙄🙄🙄🙄🙄",
"🏈🏈🏈",
"🎃🎃🎃",
"🌈🌈🌈",
"👌👌👌",
"🔫🔫🔫",
"🏠🔥 😁"]

function randomSong() {
  return `<span color:"#6cbbb9">${songs[Math.floor(Math.random()*songs.length)]}</span>`
}

function randomVine() {
  return `<span color:"black">${vines[Math.floor(Math.random()*vines.length)]}</span>`
}

function randomHashtag() {
  return `<span color:"#6cbbb9">${hashtags[Math.floor(Math.random()*hashtags.length)]}</span>`
}

function randomEmoji() {
  return `<span>${emojis[Math.floor(Math.random()*emojis.length)]}</span>`
}
