var vines = ['Eating popcorn with your BF 🆚 eating popcorn with your friend 😗😗😗',
'When you realise my [new awesome single] came out! 👳🏽👳🏽👳🏽',
'When your friend calls and wants to hang out 👨‍❤️‍👨',
'trying to surf in the summer 🆚 trying to surf in the winter',
'I\'m going on tour tomorrow!!! join me at the o2 arena!!! wear your 💄💄💄',
'[terrible song thats in the charts right now] 😗😗😗',
'#bffsforevers #gonnadietogether',
'when your parents acting psycho and you\'re just like... 😵😵😵',
'Happy hanukkah everybody 🕎 🕎 🕎',
'aliens be like 👒👒👒',
'look at how much money i make!!!!! 🤑🤑🤑',
'#recording my #mixtape it\'s on fire 🎹🎹🎹',
'when you listen to my mixtape 🔥🚒🔥🚒🔥🚒🔥',
'when you\'re bored in church 👳🏽👳🏽👳🏽',
'hey check out my instagram, musical.ly, [ten other social networks] 🏛 🏛 🏛',
'we all have those days where... ⛪ ⛪ ⛪',
'what are THOSE #original #copyright #notinthepublicdomain ©️©️©️©️©️©️©️©️©️',
'when you find out your adopted #whywouldtheydothistome 🏙🏙🏙',
'when your moms like... 😕😕😕',
'why would THIS HAPPEN TO MEEEEEEEE #why 💀💀💀',
'Mmm... now only $0.99 on the savers menu #sponsered 🍔🍔🍔🍔🍔',
'when you see your crush 🐦🐦🐦',
'Is pepsi ok? 🍼🍼🍼',
'Me when i\'m older: 👶👶👶',
'Would you like fries with that REMIX!!!!!! 🎵🎵🎵🎵',
'every wedding be like... 👰',
'all the irish be like... ☘☘☘',
'when it\'s chinese new year in america... 🐉',
'MLG Paper Throw!!!! 🗑🗑🗑',
'When your in school and you\'re like: 🙄🙄🙄🙄🙄🙄🙄',
'when your friends say they play sports 🏈',
'Santa claus be like 🎃🎃🎃',
'when you see a rainbow 🌈'];

$( document ).ready(function() {

  $('.vineName').html(`"${vines[Math.floor(Math.random() * 32)]}"`)
  $('.another-button').click(function(){

    const randomVine = vines[Math.floor(Math.random() * 32)]

    $('.another-button').addClass('animated tada')
    setTimeout(function(){ $('.another-button').removeClass('tada') }, 1000)

    $('.vineName').animate({
      opacity: "0"
    }, 100, function() {
      $('.vineName').html(randomVine);
      $('.vineName').animate({
        opacity: '1'
      }, 100);
    });

  });

});
