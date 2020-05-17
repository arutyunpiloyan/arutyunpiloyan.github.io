function scrollToElement(el) {
  $("html, body").animate({ scrollTop: $("#page" + el).offset().top }, 500);
}

let bio = document.getElementById("bio-text");

function engText() {
  bio.innerHTML = "Arutyun Piloyan, a native of Armenia, graduated from the Tchaikovsky Moscow Conservatory and \
  currently studies at the Schwob School of Music in the USA as a graduate student with Prof. Sergiu Schwartz. \
  Arutyun’s previous violin teachers include Nikolay Enyukov, Alvia Vandysheva, Eduard Grach, and Graf Mourja. <br><br> \
  A winner in numerous competitions, Arutyun’s success includes First Prizes at competitions for young violinists in \
  Kaspiysk and Makhachkala (Republic of Dagestan), Second Prize at the Renaissance International Komitas Competition (Armenia), \
  Gold Medal at the Fuat Mansurov Competition in Moscow (Russia), First Prize and Gold Medal at the Citta di Pesaro International \
  Violin Competition (Italy), Third Prize winner at the MTNA Competition (USA). \
  Arutyun is also a winner of the Schwob School of Music Concerto Competition 2019 \
  Arutyun Piloyan has toured the US, Germany, Italy, Poland, South Korea, Oman, Armenia, Russia. He appeared as a \
  soloist and performed in some of Russia’s famous concert halls, including the Bolshoi, Maly, and Rachmaninov halls \
  of the Moscow Conservatory, the Myaskovsky Hall, the Tchaikovsky Concert Hall, the Bolshoi Theatre, the Moscow \
  International House of Music and the St. Petersburg House of Music. <br><br> \
  Since 2019 Arutyun has also committed himself to jazz and improvisation. \
  He played at various famous jazz clubs in Moscow and the US. Currently, \
  Arutyun is a soloist in the Jazz Ensemble at the Schwob School of Music. <br><br>\
  In 2010 Arutyun began his teaching career as a private tutor and also as a teaching \
  assistant at the college at the Moscow Tchaikovsky Conservatory. Currently Arutyun is an active pedagogue. \
  He has created his own teaching method to work with people of different levels: from beginners to advanced \
  students who are willing to learn and improve their violin skills."
}

function rusText() {
  bio.innerHTML = "Арутюн Пилоян, родился в Армении (г. Ереван) в 1993 году. В возрасте 6 лет вместе с родителями переехал жить в Россию. \
  Арутюн окончил Московскую консерваторию им. П.И. Чайковского, и в настоящее время учится в Schwob School of Music в \
  США у профессора Серджиу Шварца. \
  Ранее Арутюн учился у таких выдающихся педагогов как: Николай Енюков, Альвия Вандышева, Эдуард Грач и Граф Муржа.<br><br> \
  Лауреат множества международных конкурсов: вторая премия и приз за “лучшее исполнение произведения Комитаса” \
  на Международном конкурсе им.Комитаса “Renaissance” (Армения), золотая медаль на фестивале им.Фуата Мансурова в Москве (Россия), \
  Первая премия и Золотая медаль на Международном конкурсе скрипачей  Citta di Pesaro(Италия), Третья премия на конкурсе MTNA (США). \
  Арутюн также является победителем конкурса Schwob Concerto Competition 2019. \
  Арутюн Пилоян гастролировал в США, Германии, Италии, Польше, Южной Корее, Омане, Армении, России. \
  Выступал в качестве солиста в таких известных концертных залах России, как Большой, Малый и Рахманиновский концертные залы \
  Московской консерватории, Концертный зал им.П.И.Чайковского, Большой театр России, Московский международный Дом музыки и Санкт - Петербургский Дом музыки. <br><br>\
  С 2019 года Арутюн также посвятил себя джазу и импровизации.Он играл во многих известных джазовых клубах Москвы и разных городах США. \
  В настоящее время Арутюн является солистом джазового ансамбля в Schwob School of Music. <br><br>\
  С 2010 года Арутюн начал свою преподавательскую деятельность, как частный репетитор, \
  затем был ассистентом в Колледже при Московской консерватории, а в настоящее время ведет активную педагогическую деятельность. \
  Арутюн занимается по собственно разработанной методике для разных уровней от студентов “с нуля” и до профессионалов, \
  желающих улучшить свои навыки игры на скрипке."
}