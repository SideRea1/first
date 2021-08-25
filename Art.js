let phrases = [
    {title:'П. Пикассо', text: 'Искусство смывает пыль повседневности с души.', image: 'https://i.pinimg.com/236x/a1/47/b0/a147b0c310c889ef1772aca4040afeea.jpg'},
    {title:'М. Глинка', text: 'Чтобы красоту создать, надо самому быть чистым душой.', image: 'https://i.pinimg.com/236x/be/58/e1/be58e11e7ab7c5d5d2f0fa98315c13af.jpg' },
    {title:'Тадеуш Пейпер', text: 'Искусство, создаваемое для двенадцати человек, со временем становится достоянием двенадцати миллионов.', image: 'https://i.pinimg.com/236x/6c/b2/f7/6cb2f7854aff3274a154a05accb85fe6.jpg' },
    {title:'К. Станиславский', text: 'Любите искусство в себе, а не себя в искусстве.', image: 'https://i.pinimg.com/236x/5d/94/64/5d946439fa5bfcc6e12bd6f0266d3689.jpg'},
    {title:'Дени Дидро', text: 'Искусство заключается в том, чтобы найти необыкновенное в обыкновенном и обыкновенное в необыкновенном.', image: 'https://i.pinimg.com/236x/1b/c6/a1/1bc6a1ee3638875b1f9ff2943e2555f0.jpg' },
    {title:'Гиппократ', text: 'Жизнь коротка, искусство вечно.', image: 'https://i.pinimg.com/236x/90/af/2b/90af2bc0f3f0beca502bc53e1176a24f.jpg' },
    {title:'К. Станиславский', text: 'Искусство — отражение и познание жизни; не зная жизни, творить нельзя.', image: 'https://i.pinimg.com/236x/c1/2d/78/c12d788e4be85a2322d18ee6a361bcc3.jpg' },
    {title:'И. Гете', text: 'Искусство есть посредник того, что нельзя высказать.', image: 'https://i.pinimg.com/236x/95/1e/56/951e56929ffd1e0edfa146ee4d0caacf.jpg' },
    {title:'Р. Кент', text: 'Высшая цель, которой служит искусство, — способствовать тому, чтобы люди глубже понимали жизнь и больше ее любили.', image: 'https://i.pinimg.com/236x/3b/9a/58/3b9a58b2497bed615ce8c0606141ccf6.jpg'},
    {title:'Гиппократ', text: 'Жизнь коротка, а путь искусства долог.', image: 'https://i.pinimg.com/236x/c3/97/cc/c397ccd52cf16f74aa07b0e3c71f0eb4.jpg' },
    {title:'Б. Пастернак', text: 'Искусство — есть рассказ о счастье существования.', image: 'https://i.pinimg.com/236x/eb/2b/c7/eb2bc721d99c39428a9a78c48c7cdbe0.jpg' },
    {title:'Альберт Штернер', text: 'Никакого современного искусства нет. Есть только искусство – и реклама.', image: 'https://i.pinimg.com/236x/a4/5a/67/a45a6715e417259e9614c13bbc16ad08.jpg' },
    {title:'Гилберт Честертон', text: 'Искусство – это всегда ограничение. Смысл всякой картины в ее рамке.', image: 'https://i.pinimg.com/236x/65/aa/d9/65aad9d5ef8ef166a4d36c52a43f0925.jpg' },
    {title:'Григорий Ландау', text: 'Теория – монолог, искусство – диалог, в котором собеседник молчит.', image: 'https://i.pinimg.com/236x/c9/66/ef/c966ef967e637be7bad1b4f95cedae84.jpg' },
    {title:'Карл Краус', text: 'Скромность – право художника, тщеславие – его долг.', image: 'https://i.pinimg.com/236x/75/9b/f9/759bf922bb7ad5a65155dfeab0eb8f5c.jpg' },
    {title:'Карл Краус', text: 'Наука – это спектральный анализ, искусство – синтез света.', image: 'https://i.pinimg.com/236x/ab/c2/8c/abc28c2f628c57b6d6c348818f6afd30.jpg' },
    {title:'Луиза де Вильморен', text: 'Быть современным – значит опережать свое время ровно настолько, чтобы позволить ему догнать тебя без труда.', image: 'https://i.pinimg.com/236x/84/f3/ee/84f3ee8b3d95e08799bcbdaf9a28f155.jpg' },
    {title:'Сэмюэл Батлер', text: 'Искусству можно научиться лишь у тех, кто зарабатывает им себе на жизнь.', image: 'https://i.pinimg.com/236x/4d/76/c7/4d76c7703ac4509bb3e24ededb368207.jpg' },
    {title:'Оскар Уайльд', text: 'Люди искусства имеют пол, но само искусство пола не имеет.', image: 'https://i.pinimg.com/236x/d1/a4/52/d1a452f0d7adcdfd9c3374590bcdacb2.jpg' },
    {title:'Жан Кокто', text: 'Я знаю, что искусство совершенно необходимо, только не знаю зачем.', image: 'https://i.pinimg.com/236x/92/f8/35/92f835927ae8c7fc3e9085148c143f3d.jpg' },
    {title:'О. Бальзак', text: 'Искусство — это религия, которая имеет своих жрецов и должна иметь своих мучеников.', image: 'https://i.pinimg.com/236x/2b/7e/2e/2b7e2e93d49a00d6740b7723cbb4ddd4.jpg' } 
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.header-right');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.card-image');
  let title = document.querySelector('.cardTitle');
  let card = document.querySelector('.card1');
  

  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    phrase.textContent = randomElement.text;
    image.src = randomElement.image;
    title.textContent = randomElement.title;
  });

  
let ima = [
  'https://i.pinimg.com/236x/a1/47/b0/a147b0c310c889ef1772aca4040afeea.jpg',
  'https://i.pinimg.com/236x/be/58/e1/be58e11e7ab7c5d5d2f0fa98315c13af.jpg',
  'https://i.pinimg.com/236x/6c/b2/f7/6cb2f7854aff3274a154a05accb85fe6.jpg',
  'https://i.pinimg.com/236x/5d/94/64/5d946439fa5bfcc6e12bd6f0266d3689.jpg',
  'https://i.pinimg.com/236x/1b/c6/a1/1bc6a1ee3638875b1f9ff2943e2555f0.jpg',
  'https://i.pinimg.com/236x/90/af/2b/90af2bc0f3f0beca502bc53e1176a24f.jpg',
  'https://i.pinimg.com/236x/c1/2d/78/c12d788e4be85a2322d18ee6a361bcc3.jpg',
  'https://i.pinimg.com/236x/95/1e/56/951e56929ffd1e0edfa146ee4d0caacf.jpg',
  'https://i.pinimg.com/236x/3b/9a/58/3b9a58b2497bed615ce8c0606141ccf6.jpg',
  'https://i.pinimg.com/236x/c3/97/cc/c397ccd52cf16f74aa07b0e3c71f0eb4.jpg',
  'https://i.pinimg.com/236x/eb/2b/c7/eb2bc721d99c39428a9a78c48c7cdbe0.jpg',
  'https://i.pinimg.com/236x/a4/5a/67/a45a6715e417259e9614c13bbc16ad08.jpg',
  'https://i.pinimg.com/236x/65/aa/d9/65aad9d5ef8ef166a4d36c52a43f0925.jpg',
  'https://i.pinimg.com/236x/c9/66/ef/c966ef967e637be7bad1b4f95cedae84.jpg',
  'https://i.pinimg.com/236x/75/9b/f9/759bf922bb7ad5a65155dfeab0eb8f5c.jpg',
  'https://i.pinimg.com/236x/ab/c2/8c/abc28c2f628c57b6d6c348818f6afd30.jpg',
  'https://i.pinimg.com/236x/84/f3/ee/84f3ee8b3d95e08799bcbdaf9a28f155.jpg',
  'https://i.pinimg.com/236x/4d/76/c7/4d76c7703ac4509bb3e24ededb368207.jpg',
  'https://i.pinimg.com/236x/d1/a4/52/d1a452f0d7adcdfd9c3374590bcdacb2.jpg',
  'https://i.pinimg.com/236x/92/f8/35/92f835927ae8c7fc3e9085148c143f3d.jpg',
  'https://i.pinimg.com/236x/2b/7e/2e/2b7e2e93d49a00d6740b7723cbb4ddd4.jpg'
];

let titl = [
  'П. Пикассо',
  'М. Глинка',
  'Тадеуш Пейпер',
  'К. Станиславский',
  'Дени Дидро',
  'Гиппократ',
  'К. Станиславский',
  'И. Гете',
  'Р. Кент',
  'Гиппократ',
  'Б. Пастернак',
  'Альберт Штернер',
  'Гилберт Честертон',
  'Григорий Ландау',
  'Карл Краус',
  'Карл Краус',
  'Луиза де Вильморен',
  'Сэмюэл Батлер',
  'Оскар Уайльд',
  'Жан Кокто',
  'О. Бальзак'
];

let phra = [
  'Искусство смывает пыль повседневности с души.',
  'Чтобы красоту создать, надо самому быть чистым душой.',
  'Искусство, создаваемое для двенадцати человек, со временем становится достоянием двенадцати миллионов.',
  'Любите искусство в себе, а не себя в искусстве.',
  'Искусство заключается в том, чтобы найти необыкновенное в обыкновенном и обыкновенное в необыкновенном.',
  'Жизнь коротка, искусство вечно.',
  'Искусство — отражение и познание жизни; не зная жизни, творить нельзя.',
  'Искусство есть посредник того, что нельзя высказать.',
  'Высшая цель, которой служит искусство, — способствовать тому, чтобы люди глубже понимали жизнь и больше ее любили.',
  'Жизнь коротка, а путь искусства долог.',
  'Искусство — есть рассказ о счастье существования.',
  'Никакого современного искусства нет. Есть только искусство – и реклама.',
  'Искусство – это всегда ограничение. Смысл всякой картины в ее рамке.',
  'Теория – монолог, искусство – диалог, в котором собеседник молчит.',
  'Скромность – право художника, тщеславие – его долг.',
  'Наука – это спектральный анализ, искусство – синтез света.',
  'Быть современным – значит опережать свое время ровно настолько, чтобы позволить ему догнать тебя без труда.',
  'Искусству можно научиться лишь у тех, кто зарабатывает им себе на жизнь.',
  'Люди искусства имеют пол, но само искусство пола не имеет.',
  'Я знаю, что искусство совершенно необходимо, только не знаю зачем.',
  'Искусство — это религия, которая имеет своих жрецов и должна иметь своих мучеников.',
];

  let currentIndex = 0;
  setInterval(function() {
      document.getElementById('img').src = ima[currentIndex];
      currentIndex++;
      if(currentIndex >= ima.length) {
          currentIndex = 0;
      }
  }, 10000 );

  let replacingTitl = 0;
  setInterval(function() {
    document.getElementById('tit').textContent = titl[replacingTitl];
    replacingTitl++;
    if(replacingTitl >= titl.length) {
      replacingTitl = 0;
    }
}, 10000 );
  
let replacingPhrase = 0;
setInterval(function() {
  document.getElementById('phr').textContent = phra[replacingPhrase];
  replacingPhrase++;
  if(replacingPhrase >= phra.length) {
    replacingPhrase = 0;
  }
}, 10000 );







