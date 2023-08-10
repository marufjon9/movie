const movies = [
  {
    Title: "The Secret Rules of Modern Living: Algorithms",
    fulltitle: "The Secret Rules of Modern Living: Algorithms (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Secret-Rules-of-Modern-Living-Algorithms-Movie-Poster.jpg",
    imdb_id: "tt5818010",
    imdb_rating: 7.5,
    runtime: 58,
    language: "English",
    ytid: "hpyxmT6KSvw",
  },
  {
    Title: "Patton Oswalt: Annihilation",
    fulltitle: "Patton Oswalt: Annihilation (2017)",
    movie_year: 2017,
    Categories: "Uncategorized",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
    imdb_id: "tt7026230",
    imdb_rating: 7.4,
    runtime: 66,
    language: "English",
    ytid: "4hZi5QaMBFc",
  },
  {
    Title: "Jumanji: Welcome to the Jungle",
    fulltitle: "Jumanji: Welcome to the Jungle (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Fantasy",
    summary:
      "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jumanji-Welcome-to-the-Jungle-Movie-Poster.jpg",
    imdb_id: "tt2283362",
    imdb_rating: 7,
    runtime: 119,
    language: "English",
    ytid: "2QKg5SZ_35I",
  },
  {
    Title: "Phineas and Ferb the Movie: Across the 2nd Dimension",
    fulltitle: "Phineas and Ferb the Movie: Across the 2nd Dimension (2011)",
    movie_year: 2011,
    Categories: "Action|Adventure|Animation|Comedy|Family",
    summary:
      "Perry's worst fear comes true when Phineas and Ferb find out that he is in fact Secret Agent P, but that soon pales in comparison during a trip to the 2nd dimension where Perry finds out that Dr. Doofenshmirtz is truly evil and successful.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Phineas-and-Ferb-the-Movie-Across-the-2nd-Dimension-Movie-Poster.jpg",
    imdb_id: "tt1825918",
    imdb_rating: 7.5,
    runtime: 0,
    language: "English",
    ytid: "LzSp8gxkw9k",
  },

  {
    Title: "The Foster Boy",
    fulltitle: "The Foster Boy (2011)",
    movie_year: 2011,
    Categories: "Drama",
    summary:
      "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Foster-Boy-Movie-Poster.jpg",
    imdb_id: "tt2057931",
    imdb_rating: 7.4,
    runtime: 107,
    language: "English",
    ytid: "E9Qv_XVJ-js",
  },

  {
    Title: "The Anthem of the Heart",
    fulltitle: "The Anthem of the Heart (2017)",
    movie_year: 2017,
    Categories: "Drama|Family",
    summary:
      "Takumi is on his class' community outreach group. His teacher assigns more students to the group including a student who, due to a mishap, has foregone speaking. The class has to perform a musical, but volunteers brave enough to perform are hard to come by. The reluctance slowly begins to wash away when the aforementioned girl makes an effort to perform. As the day of the performance approaches will the students be able to overcome their reluctance and go for it?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Anthem-of-the-Heart-Movie-Poster.jpg",
    imdb_id: "tt6738046",
    imdb_rating: 6.2,
    runtime: 119,
    language: "English",
    ytid: "EnbgMjdguxI",
  },
  {
    Title: "My Teacher",
    fulltitle: "My Teacher (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Hibiki is an awkward, 17-year-old high school sophomore who hasn't known romance. But she's about to fall in love for the very first time. With whom? A man who isn't great with words, but compassionate about his students. It's her history teacher, Mr. Ito. \"Is it okay if I fall for you?\" Hibiki asks. \"I'm afraid I can't return those feelings,\" is Ito's reply. Hibiki's first love crashes before takeoff. But it doesn't matter. \"Still I want to cherish my crush anyway.\" A teacher's heart begins to turn by a student's pure love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Teacher-Movie-Poster.jpg",
    imdb_id: "tt6190198",
    imdb_rating: 6,
    runtime: 113,
    language: "English",
    ytid: "HpYqkdn2ilU",
  },
  {
    Title: "You Were Never Really Here",
    fulltitle: "You Were Never Really Here (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Thriller",
    summary:
      "Balancing between feverish dreamlike hallucinations of a tormented past and a grim disoriented reality, the grizzled Joe--a traumatised Gulf War veteran and now an unflinching hired gun who lives with his frail elderly mother--has just finished successfully yet another job. With an infernal reputation of being a brutal man of results, the specialised in recovering missing teens enforcer will embark on a blood-drenched rescue mission, when Nina, the innocent 13-year-old daughter of an ambitious New York senator, never returns home. But amidst half-baked leads and a desperate desire to shake off his shoulders the heavy burden of a personal hell, Joe's frenzied plummet into the depths of Tartarus is inevitable, and every step Joe takes to flee the pain, brings him closer to the horrors of insanity. In the end, what is real, and what is a dream? Can there be a new chapter in Joe's life when he keeps running around in circles?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/You-Were-Never-Really-Here-Movie-Poster.jpg",
    imdb_id: "tt5742374",
    imdb_rating: 7.1,
    runtime: 89,
    language: "English",
    ytid: "yMqsd7Umxy8",
  },
  {
    Title: "Petals on the Wind",
    fulltitle: "Petals on the Wind (2014)",
    movie_year: 2014,
    Categories: "Drama|Horror|Romance|Thriller",
    summary:
      "A decade after Cathy, Christopher, and Carrie escaped from their grandparents' attic at Foxworth Hall, Petals on the Wind continues to follow the twisted plight of the family as they attempt to put their sordid past behind them, but soon discover certain secrets can't be left behind. When Cathy finds herself in an abusive relationship with a fellow dancer, Julian, Christopher and Cathy are forced to face the forbidden feelings they developed for one another while coming of age during captivity. But when tragedy strikes the Dollangangers once again, Cathy returns to Foxworth Hall to confront her grandmother and seek revenge on her mother with a plan to seduce her husband Bart. When Christopher runs to Cathy's side, the two are determined to start over again - together.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Petals-on-the-Wind-Movie-Poster.jpg",
    imdb_id: "tt3496892",
    imdb_rating: 6.3,
    runtime: 85,
    language: "English",
    ytid: "X8b86Bgrk0w",
  },
  {
    Title: "Jesus Christ Superstar Live in Concert",
    fulltitle: "Jesus Christ Superstar Live in Concert (2018)",
    movie_year: 2018,
    Categories: "Musical",
    summary:
      "A live musical recounting the final days of Jesus Christ and those around him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jesus-Christ-Superstar-Live-in-Concert-Movie-Poster.jpg",
    imdb_id: "tt6874964",
    imdb_rating: 8,
    runtime: 99,
    language: "English",
    ytid: "mPbb4BDirHA",
  },
  {
    Title: "Dare to Be Wild",
    fulltitle: "Dare to Be Wild (2015)",
    movie_year: 2015,
    Categories: "Biography|Drama|Romance",
    summary:
      "Irishwoman Mary Reynold's journey from rank outsider to winner of a Gold Medal at the Chelsea Flower Show.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dare-to-Be-Wild-Movie-Poster.jpg",
    imdb_id: "tt2989350",
    imdb_rating: 6.4,
    runtime: 100,
    language: "English",
    ytid: "12lF4c06yEY",
  },
  {
    Title: "Trouble Is My Business",
    fulltitle: "Trouble Is My Business (2018)",
    movie_year: 2018,
    Categories: "Action|Adventure|Crime|Mystery|Thriller",
    summary:
      "Los Angeles in 1947, everything should be sunny, but the smog creates a fog, a haze that permeates not just the lungs, but the psyches. Private eye Roland Drake cracks cases and romances femme fatales, while corrupt cops rule the underworld of the city and moral lines are anything but black and white. A dark, hard-boiled tale of love and betrayal, told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed. He wakes up to her missing too, and a pool of blood where she used to be. After a nervous encounter with the equally ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Trouble-Is-My-Business-Movie-Poster.jpg",
    imdb_id: "tt2243900",
    imdb_rating: 6.1,
    runtime: 116,
    language: "English",
    ytid: "SqUEOsQf6hM",
  },
  {
    Title: "Outside In",
    fulltitle: "Outside In (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An ex-con struggling to readjust to life in his small town forms an intense bond with his former high school teacher.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Outside-In-Movie-Poster.jpg",
    imdb_id: "tt7260048",
    imdb_rating: 6.4,
    runtime: 109,
    language: "English",
    ytid: "s0SdJfplC80",
  },
  {
    Title: "Froning: The Fittest Man in History",
    fulltitle: "Froning: The Fittest Man in History (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "Rich Froning Jr. is a legend in CrossFit and the Sport of Fitness. In this biopic, take a look at his childhood, follow his quest for a fourth CrossFit Games title, and see him as a son, a husband and a new father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Froning-The-Fittest-Man-in-History-Movie-Poster.jpg",
    imdb_id: "tt5079382",
    imdb_rating: 6.7,
    runtime: 99,
    language: "English",
    ytid: "D1ze-f7jS2A",
  },
  {
    Title: "Elizabethtown",
    fulltitle: "Elizabethtown (2005)",
    movie_year: 2005,
    Categories: "Comedy|Drama|Romance",
    summary:
      "After causing a loss of almost one billion dollars in his company, the shoe designer Drew Baylor decides to commit suicide. However, in the exact moment of his act of despair, he receives a phone call from his sister telling him that his beloved father had just died in Elizabethtown, and he should bring him back since his mother had problem with the relatives of his father. He travels in an empty red eye flight and meets the attendant Claire Colburn, who changes his view and perspective of life.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Elizabethtown-Movie-Poster.jpg",
    imdb_id: "tt0368709",
    imdb_rating: 6.4,
    runtime: 123,
    language: "English",
    ytid: "qyPq2BS8Ug0",
  },

  {
    Title: "Sons of Ben",
    fulltitle: "Sons of Ben (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Sport",
    summary:
      "After many rumors of an MLS team arriving in Philadelphia never materializing, a small group of soccer fans took matters into their own hands and started a supporters group called the Sons of Ben to help bring a team to their hometown. They were a group without a team to root for and had a modest goal of reaching 100 members by the end of the year. Little did they know they would reach over 1,500 members in less time than that and start a movement that would not only change the soccer landscape in Philadelphia forever, but also help revive a community that had been struggling for decades.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sons-of-Ben-Movie-Poster.jpg",
    imdb_id: "tt2317088",
    imdb_rating: 7.8,
    runtime: 75,
    language: "English",
    ytid: "m8I_pgCaRsM",
  },
  {
    Title: "12 Strong",
    fulltitle: "12 Strong (2018)",
    movie_year: 2018,
    Categories: "Action|Drama|History|War",
    summary:
      'The True Story of the Army\'s Special Forces "Green Berets", who within weeks responded to the 9-11 attack. Green Berets, with the help of the 160th SOAR(A), took over the country and allowed other Special Forces and the rest of the conventional military to begin the more publicly visible war.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/12-Strong-Movie-Poster.jpg",
    imdb_id: "tt1413492",
    imdb_rating: 6.7,
    runtime: 130,
    language: "English",
    ytid: "-Denciie5oA",
  },
  {
    Title: "The Commuter",
    fulltitle: "The Commuter (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "Now a hard-working life insurance salesman and a caring family man, the former police officer, Michael MacCauley, has taken the commuter rail to New York for the past ten years. But, unexpectedly, things will take a turn for the worse, when on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this indeed a serious situation? As Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal where there's definitely more than meets the eye. Can he decide in time who's the one?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Commuter-Movie-Poster.jpg",
    imdb_id: "tt1590193",
    imdb_rating: 6.3,
    runtime: 105,
    language: "English",
    ytid: "WWexI9YiLSc",
  },
  {
    Title: "Birdshot",
    fulltitle: "Birdshot (2016)",
    movie_year: 2016,
    Categories: "Drama|Mystery|Thriller",
    summary:
      'Birdshot" is a mystery-thriller film that tells a story of a young Filipina farm girl who wanders into the boundaries of a Philippine reservation forest. Deep within the reservation she mistakenly shoots and kills a critically endangered and protected Philippine Eagle. As the local authorities begin a manhunt to track down the poacher of a national bird, their investigation leads them to an even more horrific discovery.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Birdshot-Movie-Poster.jpg",
    imdb_id: "tt6135042",
    imdb_rating: 6.8,
    runtime: 116,
    language: "English",
    ytid: "7k8h_X3GjgM",
  },
  {
    Title: "May",
    fulltitle: "May (2002)",
    movie_year: 2002,
    Categories: "Drama|Horror",
    summary:
      "When May was a child, she was a lonely girl with a lazy eye and without any friends except a weird and ugly doll kept in a glass case given by her bizarre mother on her birthday. May becomes a lonely, weird young woman, working in an animal hospital and assisting the veterinarian in surgeries and sewing operated animals most of the time. Her lesbian colleague Polly has a sort of attraction for her. When the shy May meets the mechanic Adam Stubbs, she loves his hands and has a crush on him. They date, but the weirdness and bizarre behavior of May pushes Adam away from her. Alone, May has a brief affair with Polly, but she feels rejected again when her colleague meets Ambrosia. When her doll is accidentally broken, the deranged May decides to build a friend for her, using the best parts her acquaintances can offer.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/May-Movie-Poster.jpg",
    imdb_id: "tt0303361",
    imdb_rating: 6.7,
    runtime: 93,
    language: "English",
    ytid: "YbN_uoGQysc",
  },

  {
    Title: "The Lost Brother",
    fulltitle: "The Lost Brother (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Cetarti, a public employee who has just been fired, travels from Buenos Aires to Lapachito, a lonely town in the Chaco province. He must take care of the corpses of his mother and brother who have been brutally murdered, and with whom no bond of affection binds him. The only thing that mobilizes Cetarti to undertake the trip is the possibility of charging a modest life insurance to be able to settle in Brazil. There he meets Duarte, a sort of town capo and friend of his mother's murderer, with whom he establishes a strange society to manage and collect that money.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Lost-Brother-Movie-Poster.jpg",
    imdb_id: "tt6522634",
    imdb_rating: 6.7,
    runtime: 112,
    language: "English",
    ytid: "1DNXCdWZuHs",
  },
  {
    Title: "The Redeemed and the Dominant: Fittest on Earth",
    fulltitle: "The Redeemed and the Dominant: Fittest on Earth (2018)",
    movie_year: 2018,
    Categories: "Documentary",
    summary:
      'In 2017 the fittest athletes on Earth took on the unknown and unknowable during four of the most intense days of competition in CrossFit Games history. "The Redeemed and the Dominant: Fittest on Earth " captures all the drama as top athletes resembling chiseled Grecian gods descend on Madison, Wisconsin, to face a series of trials. Hercules faced 12; they take on 13. Emotions run high as a throng of Australian athletes rise to the top. By the end of the competition, some learn tough lessons-that all that glitters isn\'t gold, or even bronze-and some learn that they\'re even stronger than they realized. The best among them enter the pantheon of CrossFit giants and earn the right to call themselves the "Fittest on Earth.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Redeemed-and-the-Dominant-Fittest-on-Earth-Movie-Poster.jpg",
    imdb_id: "tt8144778",
    imdb_rating: 7.1,
    runtime: 119,
    language: "English",
    ytid: "rlZ5MG-E2Ls",
  },
  {
    Title: "First Match",
    fulltitle: "First Match (2018)",
    movie_year: 2018,
    Categories: "Drama|Sport",
    summary:
      "Hardened by years in foster care, a teenage girl from Brooklyn's Brownsville neighborhood decides that joining the boys wrestling team is the only way back to her estranged father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/First-Match-Movie-Poster.jpg",
    imdb_id: "tt6061074",
    imdb_rating: 6.1,
    runtime: 102,
    language: "English",
    ytid: "Xva2FWNdcD0",
  },

  {
    Title: "Happy End",
    fulltitle: "Happy End (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Gradually succumbing to dementia, George Laurent, the octogenarian patriarch of the Laurents, an affluent upper-bourgeois family, is uncomfortably sharing his palatial manor in Calais, the heart of the infamous migrant jungle, with his twice-married son, Thomas, and Anne, his workaholic daughter who has taken over the family construction business. Divorced and frigid, Anne has to handle the impact of a disastrous workplace accident caused by her disappointing son Pierre's negligence, while at the same time, the urgent hospitalisation of Thomas' ex-wife from a mysterious poisoning, leads his sulky 13-year-old daughter, Ève, to live with her father and his new wife, Anais. Undoubtedly, in this family, everyone has a skeleton in the closet, and as the fates of the Laurents enmesh with insistent and ignoble desires, a peculiar and disturbing alliance will form. But in the end, some secrets are bigger than others.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Happy-End-Movie-Poster.jpg",
    imdb_id: "tt5304464",
    imdb_rating: 6.9,
    runtime: 107,
    language: "English",
    ytid: "cZ1ajZRn8YM",
  },
  {
    Title: "After the Storm",
    fulltitle: "After the Storm (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Dwelling on his past glory as a prize-winning author, Ryota (Hiroshi Abe) wastes the money he makes as a private detective on gambling and can barely pay child support. After the death of his father, his aging mother (Kirin Kiki) and beautiful ex-wife (Yoko Make) seem to be moving on with their lives. Renewing contact with his initially distrusting family, Ryota struggles to take back control of his existence and to find a lasting place in the life of his young son (Taiyo Yoshizawa) - until a stormy summer night offers them a chance to truly bond again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/After-the-Storm-Movie-Poster.jpg",
    imdb_id: "tt5294966",
    imdb_rating: 7.4,
    runtime: 118,
    language: "English",
    ytid: "i0lr6hfRG9s",
  },
  {
    Title: "Mary and the Witch's Flower",
    fulltitle: "Mary and the Witch's Flower (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Family|Fantasy",
    summary:
      'Mary is an ordinary young girl stuck in the country with her Great-Aunt Charlotte and seemingly no adventures or friends in sight. She follows a mysterious cat into the nearby forest, where she discovers an old broomstick and the strange Fly-by-Night flower, a rare plant that blossoms only once every seven years and only in that forest. Together the flower and the broomstick whisk Mary above the clouds and far away to Endor College - a school of magic run by headmistress Madam Mumblechook and the brilliant Doctor Dee. But there are terrible things happening at the school, and, when Mary tells a lie, she must risk her life to try to set things right. Based on Mary Stewart\'s 1971 classic children\'s book "The Little Broomstick", "Mary and The Witch\'s Flower" is an action-packed film full of jaw-dropping imaginative worlds, ingenious characters, and the stirring, heartfelt story of a young girl trying to find a place in the world. Featuring the voices of Ruby Barnhill and Academy ...',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mary-and-the-Witchs-Flower-Movie-Poster.jpg",
    imdb_id: "tt6336356",
    imdb_rating: 6.8,
    runtime: 102,
    language: "English",
    ytid: "888z3ku4t3I",
  },
  {
    Title: "The Last Movie Star",
    fulltitle: "The Last Movie Star (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An aging former movie star is forced to face the reality that his glory days are behind him. On its surface, the film is a tale about faded fame. At its core, it's a universal story about growing old.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Last-Movie-Star-Movie-Poster.jpg",
    imdb_id: "tt5836316",
    imdb_rating: 6.8,
    runtime: 94,
    language: "English",
    ytid: "1-f8O118hnE",
  },
  {
    Title: "Lucky",
    fulltitle: "Lucky (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "Lucky is an old US Navy veteran of rigid habits and attitudes in a small town. When his routine is interrupted by a sudden collapse at home, Lucky finds himself realizing that his remarkably healthy old age is going to face an inevitable decline and he has to accept it. In that difficult reassessment, Lucky must face up to what he believes in and how much it compares to his neighbors' priorities. In doing so, Lucky finds that his life has its positive side as he searches for some meaning that he can accept.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lucky-Movie-Poster.jpg",
    imdb_id: "tt5859238",
    imdb_rating: 7.4,
    runtime: 88,
    language: "English",
    ytid: "2KLLkj84GAo",
  },
  {
    Title: "Phantom Thread",
    fulltitle: "Phantom Thread (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Set in the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants, and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Phantom-Thread-Movie-Poster.jpg",
    imdb_id: "tt5776858",
    imdb_rating: 7.7,
    runtime: 130,
    language: "English",
    ytid: "asbg5u5j0YI",
  },
  {
    Title: "Molly's Game",
    fulltitle: "Molly's Game (2017)",
    movie_year: 2017,
    Categories: "Biography|Crime|Drama",
    summary:
      "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mollys-Game-Movie-Poster.jpg",
    imdb_id: "tt4209788",
    imdb_rating: 7.5,
    runtime: 140,
    language: "English",
    ytid: "Vu4UPet8Nyc",
  },
  {
    Title: "The Third Murder",
    fulltitle: "The Third Murder (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery",
    summary:
      "Misumi has a criminal record dating back many years and is now under the spotlight again. It looks like an open and shut case, for Misumi has confessed to the new charge. Enter prominent lawyer Shigemori, who harbours other ideas, which could mean the difference between life and death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Third-Murder-Movie-Poster.jpg",
    imdb_id: "tt6410564",
    imdb_rating: 6.8,
    runtime: 124,
    language: "English",
    ytid: "Plr3V4TYBQE",
  },
  {
    Title: "Ichi the Killer",
    fulltitle: "Ichi the Killer (2001)",
    movie_year: 2001,
    Categories: "Action|Comedy|Crime|Drama|Horror",
    summary:
      "When a Yakuza boss named Anjo disappears with 300 million yen, his chief henchman, a sadomasochistic man named Kakihara, and the rest of his mob goons go looking for him. After capturing and torturing a rival Yakuza member looking for answers, they soon realize they have the wrong man and begin looking for the man named Jijii who tipped them off in the first place. Soon enough Kakihara and his men encounter Ichi, a psychotic, sexually-repressed young man with amazing martial arts abilities and blades that come out of his shoes. One by one Ichi takes out members of the Yakuza and all the while Kakihara intensifies his pursuit of Ichi and Ichi's controller Jijii. What will happen as the final showdown happens between the tortured and ultra-violent Ichi and the pain-craving Kakihara?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ichi-the-Killer-Movie-Poster.jpg",
    imdb_id: "tt0296042",
    imdb_rating: 7.1,
    runtime: 129,
    language: "English",
    ytid: "iFUMtrAMknE",
  },
  {
    Title: "The Boy with the Topknot",
    fulltitle: "The Boy with the Topknot (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "One-off drama based on the critically acclaimed memoirs of British journalist Sathnam Sanghera. A touching, humorous and emotional rites-of-passage story.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Boy-with-the-Topknot-Movie-Poster.jpg",
    imdb_id: "tt5757738",
    imdb_rating: 6.7,
    runtime: 90,
    language: "English",
    ytid: "RLEnTBG7ncQ",
  },

  {
    Title: "Control",
    fulltitle: "Control (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Thriller",
    summary:
      "The once unconditional friendship between police officers Vincke and Verstuyft hits a very rough patch when they come up against a series of gruesome murders. Complicating matters even further, a survivor of the killer drives a wedge between them when Verstuyft falls for her charms. Meanwhile, the serial killer has a new victim in sight...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Control-Movie-Poster.jpg",
    imdb_id: "tt1727497",
    imdb_rating: 6.3,
    runtime: 127,
    language: "English",
    ytid: "xF99vVf8yv0",
  },
  {
    Title: "Dear Etranger",
    fulltitle: "Dear Etranger (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "A 40-year old man sees his life change when his wife gets pregnant. He already has a daughter from his first marriage whom he rarely sees and two step-daughters, from his wife's first marriage. The youngest of his step-daughters is looking forward to a baby brother or sister, but the oldest doesn't welcome the news and suddenly decides that she wants to live with her father. And as if that were not enough trouble, he is forced out of his good office job into an inferior position.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dear-Etranger-Movie-Poster.jpg",
    imdb_id: "tt5797164",
    imdb_rating: 7,
    runtime: 0,
    language: "English",
    ytid: "F-FPd35FqAY",
  },
  {
    Title: "Before We Vanish",
    fulltitle: "Before We Vanish (2017)",
    movie_year: 2017,
    Categories: "Drama|Sci-Fi",
    summary:
      "Three aliens travel to Earth in preparation for a mass invasion, taking possession of human bodies.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Before-We-Vanish-Movie-Poster.jpg",
    imdb_id: "tt5999530",
    imdb_rating: 6,
    runtime: 129,
    language: "English",
    ytid: "fjlXE-u-3rc",
  },

  {
    Title: "All the Money in the World",
    fulltitle: "All the Money in the World (2017)",
    movie_year: 2017,
    Categories: "Biography|Crime|Drama|Mystery|Thriller",
    summary:
      "Rome, 1973. Masked men kidnap a teenage boy named John Paul Getty III (Charlie Plummer). His grandfather, Jean Paul Getty (Christopher Plummer), is the richest human in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. All the Money in the World (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/All-the-Money-in-the-World-Movie-Poster.jpg",
    imdb_id: "tt5294550",
    imdb_rating: 6.9,
    runtime: 132,
    language: "English",
    ytid: "KXHrCBkIxQQ",
  },

  {
    Title: "I Kill Giants",
    fulltitle: "I Kill Giants (2017)",
    movie_year: 2017,
    Categories: "Drama|Fantasy|Thriller",
    summary:
      "Twelve-year-old Barbara Thorson flees from reality, leaving in the imaginary world of fantasy and magic, where she fights with giants. Her family does not understand her, peers do not like her, and she irritates teachers. And only recently moved here Sofia, her same age, trying to make friends with her.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Kill-Giants-Movie-Poster.jpg",
    imdb_id: "tt4547194",
    imdb_rating: 6.5,
    runtime: 106,
    language: "English",
    ytid: "ZBfLY-YL-5w",
  },
  {
    Title: "Roxanne Roxanne",
    fulltitle: "Roxanne Roxanne (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      'In the early 1980s, the most feared battle MC in Queens, New York, was a fierce teenage girl with the weight of the world on her shoulders. At the age of 14, Lolita "Roxanne Shanté" Gooden was well on her way to becoming a hip-hop legend as she hustled to provide for her family while defending herself from the dangers of the streets of the Queensbridge Projects in NYC.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Roxanne-Roxanne-Movie-Poster.jpg",
    imdb_id: "tt5796838",
    imdb_rating: 6.1,
    runtime: 100,
    language: "English",
    ytid: "IKA8H_LolNM",
  },

  {
    Title: "Every Secret Thing",
    fulltitle: "Every Secret Thing (2014)",
    movie_year: 2014,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      "A detective looks to unravel a mystery surrounding missing children and the prime suspects: two young women who, seven years ago, were put away for an infant's death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Every-Secret-Thing-Movie-Poster.jpg",
    imdb_id: "tt1706598",
    imdb_rating: 6.1,
    runtime: 93,
    language: "English",
    ytid: "6QT0zKjvRfE",
  },
  {
    Title: "Believe in Me",
    fulltitle: "Believe in Me (2006)",
    movie_year: 2006,
    Categories: "Drama|Sport",
    summary:
      "Girls? The thought of coaching them seems preposterous to Clay Driscoll (earnest newcomer Jeffrey Donovan), who travels to Middleton, Okla., in the 1960s prepared to coach the varsity boys' team. But that position is filled, so he's forced to coach the girls' team -- the Lady Cyclones. Faced with an under-performing crew of untrained players, the coach begins to treat the girls like boys. They run laps in a closed gym and practice shots and plays they've never tried before -- and eventually their \"old-fashioned grit\" leads them to a Cinderella season culminating with the state championships. Along their way, Driscoll and the girls overcome several obstacles, most of all, gaining a fan base. Meanwhile, big man in town Ellis Brawley (Bruce Dern) can't stand Driscoll and his newfangled idea of empowering female athletes. Of course, the Lady Cyclones are up to the task of proving Brawley wrong. Driven by their caring young coach, the girls determine to play as hard as the boys, even ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Believe-in-Me-Movie-Poster.jpg",
    imdb_id: "tt0419491",
    imdb_rating: 7.1,
    runtime: 0,
    language: "English",
    ytid: "IHatBd-2lLI",
  },
  {
    Title: "Still the Water",
    fulltitle: "Still the Water (2014)",
    movie_year: 2014,
    Categories: "Drama|Romance",
    summary:
      "On the subtropical Japanese island of Amami, traditions about nature remain eternal. During the full-moon night of traditional dances in August, 16-year-old Kaito discovers a dead body floating in the sea. His girlfriend Kyoko will attempt to help him understand this mysterious discovery. Together, Kaito and Kyoko will learn to become adults by experiencing the interwoven cycles of life, death and love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Still-the-Water-Movie-Poster.jpg",
    imdb_id: "tt3230162",
    imdb_rating: 6.8,
    runtime: 121,
    language: "English",
    ytid: "npg8_sHQmbc",
  },
  {
    Title: "Redemption Trail",
    fulltitle: "Redemption Trail (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Two powerful, yet deeply troubled women - refugees from political and personal trauma - flee a past that haunts them. The daughter of a murdered Black Panther revolutionary, Tess, lives off the grid on a Sonoma vineyard, fiercely detached from all connections. Her hermetic life cracks when she gives reluctant shelter to a desperate young woman, Anna who has attempted suicide in a nearby forest. An unlikely alliance forms between the two, where other close relationships have failed - David, Anna's husband and John, Tess' employer, cannot break through their walls. But the very difference between the two women opens them up to a new vision of themselves, as not only survivors, but as heroes capable even of a thrilling shoot-out in the name of outlaw justice. Reclaiming freedom, and life, they plunge forward, towards an unknown, transformative horizon.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Redemption-Trail-Movie-Poster.jpg",
    imdb_id: "tt2009432",
    imdb_rating: 6.7,
    runtime: 92,
    language: "English",
    ytid: "vM8_fHXeTVk",
  },
  {
    Title: "Black Marigolds",
    fulltitle: "Black Marigolds (2013)",
    movie_year: 2013,
    Categories: "Drama|Romance",
    summary:
      "Black Marigolds is a drama steeped in literature. Following writer Ryan Cole and his wife Kate as they move to an off season vacation home on a frigid lake in Northern California so that Ryan can finish his new novel. At first everything is perfect for two people who need only each other to be happy. But soon Kate begins to notice Ryan forgetting things, and as his frustration grows so does her concern for him. While he refuses to seek help, he becomes increasingly volatile and unpredictable. Finally it will be up to Kate to choose between the pleasant past or the terrible future.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Black-Marigolds-Movie-Poster.jpg",
    imdb_id: "tt2141623",
    imdb_rating: 6.1,
    runtime: 84,
    language: "English",
    ytid: "gLzRi0wbneI",
  },
  {
    Title: "The Greatest Showman",
    fulltitle: "The Greatest Showman (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Musical|Romance",
    summary:
      "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Greatest-Showman-Movie-Poster.jpg",
    imdb_id: "tt1485796",
    imdb_rating: 7.8,
    runtime: 105,
    language: "English",
    ytid: "AXCTMGYUg9A",
  },

  {
    Title: "Demon House",
    fulltitle: "Demon House (2018)",
    movie_year: 2018,
    Categories: "Documentary|Horror",
    summary:
      "The story takes place with doing a docudrama about the home he purchased in Gary, Indiana. He convinces a couple of previous tenants to come back and discuss their accounts of the frightening ordeals that they endured during their stay at the home. A woman becomes possessed and begins speaking in tongues. Following the extreme amount of activity documented, production had to be halted, but the movie has been finished one year later and, boy, are you in for one edge of your seat demonic thrill ride.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Demon-House-Movie-Poster.jpg",
    imdb_id: "tt4130484",
    imdb_rating: 6.1,
    runtime: 111,
    language: "English",
    ytid: "zGbZheZYpLM",
  },
  {
    Title: "Along for the Ride",
    fulltitle: "Along for the Ride (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary: "A documentary about Dennis Hopper.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Along-for-the-Ride-Movie-Poster.jpg",
    imdb_id: "tt3986978",
    imdb_rating: 7,
    runtime: 90,
    language: "English",
    ytid: "oGXol1CI26k",
  },
  {
    Title: "Centre of My World",
    fulltitle: "Centre of My World (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "After a summer spent with his his best friend Kat to escape his family, Phil goes back to school and starts to question his feelings towards Nicholas, a new classmate.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Centre-of-My-World-Movie-Poster.jpg",
    imdb_id: "tt4932154",
    imdb_rating: 7.3,
    runtime: 115,
    language: "English",
    ytid: "u-PTAF5wgS0",
  },
  {
    Title: "Wonderstruck",
    fulltitle: "Wonderstruck (2017)",
    movie_year: 2017,
    Categories: "Drama|Family|Mystery",
    summary:
      "Tells the tale of two children separated by fifty years. In 1927, Rose searches for the actress who's life she chronicles in her scrapbook; in 1977, Ben runs away from home to find his father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonderstruck-Movie-Poster.jpg",
    imdb_id: "tt5208216",
    imdb_rating: 6.3,
    runtime: 116,
    language: "English",
    ytid: "n207k52C3DM",
  },
  {
    Title: "The Witness",
    fulltitle: "The Witness (2015)",
    movie_year: 2015,
    Categories: "Biography|Crime|Documentary|Mystery",
    summary:
      "Bill Genovese's decade-long journey to unravel the truth about the mythic death and little-known life of his sister, Kitty, who was reportedly stabbed in front of 38 witnesses and became the face of urban apathy. THE WITNESS begins in 2004 when The Times questions its original story: the number of witnesses, what they observed, the number of attacks. None was more affected by the story than Bill. He vowed not to be like the 38, volunteered for Vietnam, and lost both legs. What if Kitty's mythic story is an urban myth? Breaking his family's half-century of silence, Bill seeks to find the truth confronting the witnesses, the killer, their families and his own. THE WITNESS is about bearing witness, loss and forgiveness, and what we owe each other.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Witness-Movie-Poster.jpg",
    imdb_id: "tt3568002",
    imdb_rating: 7.1,
    runtime: 89,
    language: "English",
    ytid: "EAGOoF5CDXA",
  },
  {
    Title: "Harold and Lillian: A Hollywood Love Story",
    fulltitle: "Harold and Lillian: A Hollywood Love Story (2015)",
    movie_year: 2015,
    Categories: "Biography|Documentary",
    summary:
      "Movie fans know the work of Harold and Lillian Michelson, even if they don't recognize the names. Working largely uncredited in the Hollywood system, storyboard artist Harold and film researcher Lillian left an indelible mark on classics by Alfred Hitchcock, Steven Spielberg, Mel Brooks, Stanley Kubrick, Roman Polanski and many more. Through an engaging mix of love letters, film clips and candid conversations with Harold and Lillian, Danny DeVito, Mel Brooks, Francis Ford Coppola and others, this deeply engaging documentary from Academy Award®-nominated director Daniel Raim offers both a moving portrait of a marriage and a celebration of the unknown talents that help shape the films we love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Harold-and-Lillian-A-Hollywood-Love-Story-Movie-Poster.jpg",
    imdb_id: "tt4683668",
    imdb_rating: 8,
    runtime: 94,
    language: "English",
    ytid: "sfc3aAQ_UTI",
  },
  {
    Title: "Ferrari 312B: Where the Revolution Begins",
    fulltitle: "Ferrari 312B: Where the Revolution Begins (2017)",
    movie_year: 2017,
    Categories: "Documentary|History|Sport",
    summary:
      "In a race against time and all odds, the revolutionary F1 racing car Ferrari 312B will get back on the Monaco circuit, 46 years later, under the wing of it's creator, the genius engineer Mauro Forghieri.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferrari-312B-Where-the-Revolution-Begins-Movie-Poster.jpg",
    imdb_id: "tt7017474",
    imdb_rating: 7,
    runtime: 85,
    language: "English",
    ytid: "p-5wUn2X-rc",
  },

  {
    Title: "Fairy Tail: The Movie - Dragon Cry",
    fulltitle: "Fairy Tail: The Movie - Dragon Cry (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Animation|Comedy|Fantasy",
    summary:
      "Dragon Cry\" - it's a magic artifact, that power can destroy the world. For a long time she was kept in the Kingdom of Fiore, but in the end was stolen by the Kingdom of Stella. The main characters (Natsu, Lucy, Gray, Erza, Wendy, Happy and Carla) penetrate into the Kingdom on a mission undercover. In the end they will have to deal with the King Animus and his entourage (Zach and Sonya). The purpose of the Animus to enslave the world? And Sonya was secretly trying to save the country? Expect exciting adventures on the sea of intrigue and save the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Fairy-Tail-The-Movie-Dragon-Cry-Movie-Poster.jpg",
    imdb_id: "tt6548966",
    imdb_rating: 7.5,
    runtime: 85,
    language: "English",
    ytid: "0bIkW607yJA",
  },

  {
    Title: "To Rome with Love",
    fulltitle: "To Rome with Love (2012)",
    movie_year: 2012,
    Categories: "Comedy|Romance",
    summary:
      "In Rome, the America tourist Hayley meets the local lawyer Michelangelo on the street and soon they fall in love with each other. Hayley's parents, the psychiatrist Phyllis and the retired music producer Jerry, travel to Rome to meet Michelangelo and his parents. When Jerry listens to Michelangelo's father Giancarlo singing opera in the shower, he is convinced that he is a talented opera singer. But there is a problem: Giancarlo can only sing in the shower. The couple Antonio and Milly travel to Rome to meet Antonio's relatives that belong to the high society. Milly goes to the hairdresser while Antonio waits for her in the room. Milly gets lost in Rome and the prostitute Anna mistakenly goes to Antonio's room. Out of the blue, his relatives arrive in the room and they believe Anna is Antonio's wife. Meanwhile the shy Milly meets her favorite actor Luca Salta (Antonio Albanese) and goes to his hotel room \"to discuss about movies\". One day, the middle-class clerk Leopoldo becomes a ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/To-Rome-with-Love-Movie-Poster.jpg",
    imdb_id: "tt1859650",
    imdb_rating: 6.3,
    runtime: 112,
    language: "English",
    ytid: "ft__aQSrHqE",
  },
  {
    Title: "Journey to the West",
    fulltitle: "Journey to the West (2014)",
    movie_year: 2014,
    Categories: "Drama",
    summary:
      "Tsai Ming-liang returns with this latest entry in his Walker series, in which his monk acquires an unexpected acolyte in the form of Denis Lavant as he makes his way through the streets of a sun-dappled Marseille.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Journey-to-the-West-Movie-Poster.jpg",
    imdb_id: "tt3521442",
    imdb_rating: 6.8,
    runtime: 56,
    language: "English",
    ytid: "FOxhoVx6a8o",
  },

  {
    Title: "Won't Back Down",
    fulltitle: "Won't Back Down (2012)",
    movie_year: 2012,
    Categories: "Drama",
    summary:
      "Two determined mothers with children who are failing in an inner city school in Pittsburgh join forces to take back the school, and turn it into a place of learning. But before they can change the school for the better, they must first battle the parents, the school board, and the teachers union. Because this is for their children, they won't back down from this enormous challenge.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wont-Back-Down-Movie-Poster.jpg",
    imdb_id: "tt1870529",
    imdb_rating: 6.4,
    runtime: 0,
    language: "English",
    ytid: "busgdBQE9M0",
  },

  {
    Title: "Annihilation",
    fulltitle: "Annihilation (2018)",
    movie_year: 2018,
    Categories: "Adventure|Drama|Fantasy|Horror|Mystery",
    summary:
      "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Annihilation-Movie-Poster.jpg",
    imdb_id: "tt2798920",
    imdb_rating: 7,
    runtime: 115,
    language: "English",
    ytid: "89OP78l9oF0",
  },

  {
    Title: "The Nile Hilton Incident",
    fulltitle: "The Nile Hilton Incident (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Set against the backdrop of the Egyptian Revolution, the thriller features a police officer who investigates the murder of a woman. What initially seems to be a killing of a prostitute turns into a more complicated case involving the very elite of Egypt.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Nile-Hilton-Incident-Movie-Poster.jpg",
    imdb_id: "tt5540188",
    imdb_rating: 6.9,
    runtime: 111,
    language: "English",
    ytid: "G1njw7sUFoQ",
  },
  {
    Title: "Star Wars: The Last Jedi",
    fulltitle: "Star Wars: The Last Jedi (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Star-Wars-The-Last-Jedi-Movie-Poster.jpg",
    imdb_id: "tt2527336",
    imdb_rating: 7.4,
    runtime: 152,
    language: "English",
    ytid: "Q0CbN8sfihY",
  },
  {
    Title: "The Woman Who Left",
    fulltitle: "The Woman Who Left (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "After 30 years of wrongful imprisonment, a woman plans to take revenge on her former lover.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Woman-Who-Left-Movie-Poster.jpg",
    imdb_id: "tt5843990",
    imdb_rating: 7.6,
    runtime: 226,
    language: "English",
    ytid: "MOopZgQuYz0",
  },
  {
    Title: "The Outsider",
    fulltitle: "The Outsider (2018)",
    movie_year: 2018,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      "An epic set in post-WWII Japan and centered on an American former G.I. who joins the yakuza.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Outsider-Movie-Poster.jpg",
    imdb_id: "tt2011311",
    imdb_rating: 6.3,
    runtime: 120,
    language: "English",
    ytid: "QNNcl2mEHzQ",
  },

  {
    Title: "Hotel Salvation",
    fulltitle: "Hotel Salvation (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Faced with his father's untimely and bizarre demand to go and die in the holy city of Varanasi and attain Salvation, a son is left with no choice but to embark on this journey.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hotel-Salvation-Movie-Poster.jpg",
    imdb_id: "tt5997928",
    imdb_rating: 7.3,
    runtime: 102,
    language: "English",
    ytid: "Que1V8IEcEU",
  },
  {
    Title: "Lego DC Comics Super Heroes: The Flash",
    fulltitle: "Lego DC Comics Super Heroes: The Flash (2018)",
    movie_year: 2018,
    Categories: "Action|Animation|Sci-Fi",
    summary:
      "The morning sun shines on the jewel of the Metropolis skyline, The Daily Planet building. But when The Joker decides this building needs a renovation, it's time to sound the Trouble Alert because all bricks are about to break loose! The Justice League leaps into action but as the battle is brewing against The Joker something goes haywire with The Flash's powers causing him to get caught in a repeating time loop and even stranger is the yellow clad Reverse Flash taunting him at every turn! It will take all of Flash's speed, a little magic and the helping hands and paws of the Justice League's new recruits The Atom, Krypto the Super Dog and Ace the Bat Hound to break the cycle and save Metropolis!",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lego-DC-Comics-Super-Heroes-The-Flash-Movie-Poster.jpg",
    imdb_id: "tt7877382",
    imdb_rating: 6.5,
    runtime: 78,
    language: "English",
    ytid: "AGKDZNU_HNo",
  },
  {
    Title: "Prodigy",
    fulltitle: "Prodigy (2017)",
    movie_year: 2017,
    Categories: "Drama|Sci-Fi|Thriller",
    summary:
      "Dr. Fonda, an unconventional psychologist, is consulted on the case of a troubled young genius, Ellie. Upon meeting the girl in a high-security facility, under the watchful eyes of a roomful of experts, Fonda is surprised to discover the advanced nature of Ellie's intelligence. However, as their session progresses he uncovers just how desperate and dangerous this situation really is...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Prodigy-Movie-Poster.jpg",
    imdb_id: "tt5017936",
    imdb_rating: 6.6,
    runtime: 80,
    language: "English",
    ytid: "SpkYUAUlmFc",
  },
  {
    Title: "Pitch Perfect 3",
    fulltitle: "Pitch Perfect 3 (2017)",
    movie_year: 2017,
    Categories: "Comedy|Music",
    summary:
      "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Pitch-Perfect-3-Movie-Poster.jpg",
    imdb_id: "tt4765284",
    imdb_rating: 6,
    runtime: 93,
    language: "English",
    ytid: "aVsOXRgjeeU",
  },
  {
    Title: "The Vanishing of Sidney Hall",
    fulltitle: "The Vanishing of Sidney Hall (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery",
    summary:
      "Sidney Hall finds accidental success and unexpected love at an early age, then disappears without a trace.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Vanishing-of-Sidney-Hall-Movie-Poster.jpg",
    imdb_id: "tt1291566",
    imdb_rating: 6.8,
    runtime: 119,
    language: "English",
    ytid: "I3A12z2ETTk",
  },

  {
    Title: "Pan's Labyrinth",
    fulltitle: "Pan's Labyrinth (2006)",
    movie_year: 2006,
    Categories: "Drama|Fantasy|War",
    summary:
      "In 1944 falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the the true princess and will never see her real father, the king, again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Pans-Labyrinth-Movie-Poster.jpg",
    imdb_id: "tt0457430",
    imdb_rating: 8.2,
    runtime: 118,
    language: "English",
    ytid: "E7XGNPXdlGQ",
  },
  {
    Title: "Along with the Gods: The Two Worlds",
    fulltitle: "Along with the Gods: The Two Worlds (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Drama|Fantasy",
    summary:
      "Having died unexpectedly, firefighter Ja-hong is taken to the afterlife by 3 afterlife guardians. Only when he passes 7 trials over 49 days and proves he was innocent in human life, he's able to reincarnate, and his 3 afterlife guardians are by his side to defend him in trial.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Along-with-the-Gods-The-Two-Worlds-Movie-Poster.jpg",
    imdb_id: "tt7160070",
    imdb_rating: 7.4,
    runtime: 139,
    language: "English",
    ytid: "sD7dmu-IWNw",
  },

  {
    Title: "Ilo Ilo",
    fulltitle: "Ilo Ilo (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Set in Singapore, Ilo Ilo chronicles the relationship between the Lim family and their newly arrived maid, Teresa. Like many other Filipino women, she has come to this city in search of a better life. Her presence in the family worsens their already strained relationship. Jiale, the young and troublesome son, starts to form a unique bond with Teresa, who soon becomes an unspoken part of the family. This is 1997 and the Asian Financial Crisis is beginning to be felt in the region...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ilo-Ilo-Movie-Poster.jpg",
    imdb_id: "tt2901736",
    imdb_rating: 7.3,
    runtime: 99,
    language: "English",
    ytid: "MqtITxxMZvc",
  },
  {
    Title: "Bowling for Columbine",
    fulltitle: "Bowling for Columbine (2002)",
    movie_year: 2002,
    Categories: "Crime|Documentary|Drama",
    summary:
      "The United States of America is notorious for its astronomical number of people killed by firearms for a developed nation without a civil war. With his signature sense of angry humor, activist filmmaker Michael Moore sets out to explore the roots of this bloodshed. In doing so, he learns that the conventional answers of easy availability of guns, violent national history, violent entertainment and even poverty are inadequate to explain this violence when other cultures share those same factors without the equivalent carnage. In order to arrive at a possible explanation, Michael Moore takes on a deeper examination of America's culture of fear, bigotry and violence in a nation with widespread gun ownership. Furthermore, he seeks to investigate and confront the powerful elite political and corporate interests fanning this culture for their own unscrupulous gain.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bowling-for-Columbine-Movie-Poster.jpg",
    imdb_id: "tt0310793",
    imdb_rating: 8,
    runtime: 120,
    language: "English",
    ytid: "hH0mSAjp_Jw",
  },
  {
    Title: "Paddington 2",
    fulltitle: "Paddington 2 (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Paddington is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Paddington-2-Movie-Poster.jpg",
    imdb_id: "tt4468740",
    imdb_rating: 8,
    runtime: 103,
    language: "English",
    ytid: "sw7RElt-SvE",
  },
  {
    Title: "Chasing Coral",
    fulltitle: "Chasing Coral (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Coral reefs around the world are vanishing at an unprecedented rate. A team of divers, photographers and scientists set out on a thrilling ocean adventure to discover why and to reveal the underwater mystery to the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Coral-Movie-Poster.jpg",
    imdb_id: "tt6333054",
    imdb_rating: 8.1,
    runtime: 93,
    language: "English",
    ytid: "b6fHA9R2cKI",
  },
  {
    Title: "Gaga: Five Foot Two",
    fulltitle: "Gaga: Five Foot Two (2017)",
    movie_year: 2017,
    Categories: "Biography|Documentary|Music|Musical",
    summary:
      "The documentary pulls back the curtain to introduce the woman behind the performer, the costumes, the glitz and the glamour. Off-stage, in the studio, unplugged and at home, audiences get an unguarded glimpse at Gaga through a series of personal highs and lows and the culmination of a year's emotional journey. From struggles with relationships to health issues, from finding solace in her inner circle to conquering her insecurities, Gaga: Five Foot Two navigates the divide between life as a superstar and life as an everyday woman.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gaga-Five-Foot-Two-Movie-Poster.jpg",
    imdb_id: "tt7291268",
    imdb_rating: 7.1,
    runtime: 100,
    language: "English",
    ytid: "IxI1iOi0t-c",
  },

  {
    Title: "Loveless",
    fulltitle: "Loveless (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Still living under the same roof, the Moscow couple of Boris and Zhenya is in the terrible final stages of a bitter divorce. Under those circumstances, as both have already found new partners, the insults pour down like rain in this toxic familial battle zone, always pivoting around the irresolvable and urgent matter of Alyosha's custody, their 12-year-old only son. Unheard, unloved, and above all, unwanted, the introverted and unhappy boy feels that he is an intolerable burden, however, what his parents don't know is that he can hear every single word. As a result, when Boris and Zhenya finally realize that Alyosha has been missing for nearly two days, it is already too late. But is this a simple case of a runaway teenager?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Loveless-Movie-Poster.jpg",
    imdb_id: "tt6304162",
    imdb_rating: 7.7,
    runtime: 127,
    language: "English",
    ytid: "6h5GuecUU-Q",
  },
  {
    Title: "Icarus",
    fulltitle: "Icarus (2017)",
    movie_year: 2017,
    Categories: "Documentary|Sport|Thriller",
    summary:
      "When Bryan Fogel sets out to uncover the truth about doping in sports, a chance meeting with a Russian scientist transforms his story from a personal experiment into a geopolitical thriller involving dirty urine, unexplained death and Olympic Gold-exposing the biggest scandal in sports history.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Icarus-Movie-Poster.jpg",
    imdb_id: "tt6333060",
    imdb_rating: 8,
    runtime: 121,
    language: "English",
    ytid: "qXoRdSTrR-4",
  },
  {
    Title: "Veronica",
    fulltitle: "Veronica (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror",
    summary:
      "Madrid, June of 1991. Verónica is a teenage girl surpassed by the circumstances after her father died recently, her mother works in a bar all day and she must care for her three siblings, twin girls Lucía and Irene and the youngest Antoñito. Still mourning for her father's death, Verónica decides to play Ouija with her friends Rosa and Diana, taking advantage a total solar eclipse where all classmates and teachers are on the school's rooftop watching it. Alone in the cellar, the girls try to contact their recent deceased family members, but the session goes wrong and something happens to Verónica. She hid from her mother what has happened, Verónica starts to feel strange presences inside the house and fears that these ghosts are a threat to any of her siblings. Advised by Sister Narcisa (nicknamed by the children as Sister Death) about the sinister spirit which is close to her, Verónica looking for a way to break the contact with the ghost and save everyone, suffering hallucinations ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Veronica-Movie-Poster.jpg",
    imdb_id: "tt5862312",
    imdb_rating: 6.2,
    runtime: 105,
    language: "English",
    ytid: "wNlMIvKnjOQ",
  },
  {
    Title: "Hostages",
    fulltitle: "Hostages (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "The movie describes real events that took place in 1983, when seven young Georgians, all from intellectual elite families, attempted to flee the Soviet Union by hijacking an airliner. The crisis ended with a storming of the airliner by Soviet special forces that resulted in eight dead. The surviving hijackers were subsequently tried and executed.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hostages-Movie-Poster.jpg",
    imdb_id: "tt5207262",
    imdb_rating: 6.3,
    runtime: 103,
    language: "English",
    ytid: "apVZcaujlGs",
  },

  {
    Title: "Strangled",
    fulltitle: "Strangled (2016)",
    movie_year: 2016,
    Categories: "Crime|Thriller",
    summary:
      "Based on real-life events, this psycho-thriller is set in the provincial Hungary of the 1960s, when a series of atrocious murders shock the small town of Martfü. A psychotic killer is on the prowl, who continues to slaughter young women while an innocent man is wrongly accused and sentenced for crimes he could never have committed. A determined detective arrives on the scene and soon becomes obsessed with the case while under pressure from the prosecutor to see a man hang. Stuck in the suffocating social, political and psychological world of socialist Hungary, we soon find ourselves entangled in a web of intricate conspiracy and disturbing drama.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Strangled-Movie-Poster.jpg",
    imdb_id: "tt4975280",
    imdb_rating: 7.1,
    runtime: 121,
    language: "English",
    ytid: "SpVUhG-fSxI",
  },
  {
    Title: "Still Life",
    fulltitle: "Still Life (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Still Life is a poignant, quixotic tale of life, love and the afterlife. Meticulous and organized to the point of obsession, John May (Eddie Marsan) is a council worker charged with finding the next of kin of those who have died alone. When his department is downsized, John must up his efforts on his final case, taking him on a liberating journey that allows him to start living life at last.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Still-Life-Movie-Poster.jpg",
    imdb_id: "tt2395417",
    imdb_rating: 7.4,
    runtime: 92,
    language: "English",
    ytid: "1t3SXlPo-WA",
  },
  {
    Title: "Parked",
    fulltitle: "Parked (2010)",
    movie_year: 2010,
    Categories: "Drama",
    summary:
      "Fred Daly returns to Ireland with nowhere to live but his car. Then dope-smoking 21-year-old Cathal parks beside him, and brightens up his lonely world. Encouraged by Cathal, Fred meets attractive music teacher Jules. Growing closer, these three outsiders are set on a course that will change their lives forever.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Parked-Movie-Poster.jpg",
    imdb_id: "tt1571409",
    imdb_rating: 6.8,
    runtime: 94,
    language: "English",
    ytid: "m_fTqL3Szo0",
  },

  {
    Title: "Heartbeats",
    fulltitle: "Heartbeats (2010)",
    movie_year: 2010,
    Categories: "Drama|Romance",
    summary:
      "In a story interspersed with interview tales of romantic pitfalls, friendship turns to romantic rivalry for gay man Francis and straight woman Marie when a veritable Adonis named Nicolas enters their lives. Sexual tensions mount as Francis and Marie await Nicolas' show of preference.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Heartbeats-Movie-Poster.jpg",
    imdb_id: "tt1600524",
    imdb_rating: 7.2,
    runtime: 101,
    language: "English",
    ytid: "YknK1G-g-qc",
  },
  {
    Title: "I, Tonya",
    fulltitle: "I, Tonya (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama|Sport",
    summary:
      'From the proverbial wrong side of the tracks in Portland, Oregon, former competitive figure skater Tonya Harding was never fully accepted in the figure skating community for not inherently being the image of grace, breeding and privilege that the community wanted to portray, despite she being naturally gifted in the sport athletically. Despite ultimately garnering some success in figure skating being national champion, a world championship medalist, an Olympian, and being the first American woman to complete a Triple Axel in competition, she is arguably best known for her association to "the incident": the leg bashing on January 6, 1994 of her competitor, Nancy Kerrigan, who, unlike Tonya, was everything that the figure skating community wanted in their representatives. Her association to that incident led to Tonya being banned from competitive figure skating for life. Tonya\'s story from the beginning of her figure skating life at age four to the aftermath of the incident is presented...',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Tonya-Movie-Poster.jpg",
    imdb_id: "tt5580036",
    imdb_rating: 7.6,
    runtime: 120,
    language: "English",
    ytid: "OXZQ5DfSAAc",
  },
  {
    Title: "The Breadwinner",
    fulltitle: "The Breadwinner (2017)",
    movie_year: 2017,
    Categories: "Animation|Drama|Family",
    summary:
      "From executive producer Angelina Jolie and the creators of the Academy Award nominated The Secret of Kells and Song of the Sea, comes the highly-anticipated new feature based on Deborah Ellis' bestselling novel. Parvana is an 11-year-old girl growing up under the Taliban in Afghanistan in 2001. When her father is wrongfully arrested, Parvana cuts off her hair and dresses like a boy in order to support her family. Working alongside her friend Shauzia, Parvana discovers a new world of freedom-and danger. With undaunted courage, Parvana draws strength from the fantastical stories she invents, as she embarks on a quest to find her father and reunite her family. Equal parts thrilling and enchanting, The Breadwinner is an inspiring and luminously animated tale about the power of stories to sustain hope and carry us through dark times.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Breadwinner-Movie-Poster.jpg",
    imdb_id: "tt3901826",
    imdb_rating: 7.6,
    runtime: 94,
    language: "English",
    ytid: "p64O8KAHHaQ",
  },
  {
    Title: "Devil's Tree: Rooted Evil",
    fulltitle: "Devil's Tree: Rooted Evil (2018)",
    movie_year: 2018,
    Categories: "Horror|Thriller",
    summary:
      "Devil's Tree: Rooted Evil is about an aspiring journalist named Sam who finds a Tree with a very dark history. As her own past has demons that continue to haunt her, she eventually finds out what haunts this ominous Tree. Loosely based on real events, the actual Tree still stands today. This film takes you on a ride out of the realm of fantasy and into the realm of true Evil.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Devils-Tree-Rooted-Evil-Movie-Poster.jpg",
    imdb_id: "tt7315526",
    imdb_rating: 6.2,
    runtime: 76,
    language: "English",
    ytid: "n7ROX-PDs7A",
  },
  {
    Title: "Novitiate",
    fulltitle: "Novitiate (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Set in the early 1960s and during the era of Vatican II, a young woman in training to become a nun struggles with issues of faith, the changing church and sexuality.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Novitiate-Movie-Poster.jpg",
    imdb_id: "tt4513316",
    imdb_rating: 6.6,
    runtime: 123,
    language: "English",
    ytid: "o6QrP53BEug",
  },
  {
    Title: "The Eternal Road",
    fulltitle: "The Eternal Road (2017)",
    movie_year: 2017,
    Categories: "Drama|History",
    summary:
      "Based on true events an epic story of one man's struggle for survival. Jussi Ketola, returns to Finland from the great depression struck America only to face growing political unrest. One summer night of 1930, nationalist thugs violently abduct Ketola from his home. Beaten and forced to walk the Eternal Road towards a foreign Soviet Russia, where cruelty seems to know no end, his only dream is to return to his family cost it what it may. Hope dies last.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Eternal-Road-Movie-Poster.jpg",
    imdb_id: "tt4173170",
    imdb_rating: 7.3,
    runtime: 103,
    language: "English",
    ytid: "iYZl0lU6DF4",
  },
  {
    Title: "The Shape of Water",
    fulltitle: "The Shape of Water (2017)",
    movie_year: 2017,
    Categories: "Adventure|Drama|Fantasy|Horror|Romance",
    summary:
      "From master storyteller Guillermo del Toro comes THE SHAPE OF WATER, an otherworldly fable set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Doug Jones.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Shape-of-Water-Movie-Poster.jpg",
    imdb_id: "tt5580390",
    imdb_rating: 7.5,
    runtime: 123,
    language: "English",
    ytid: "XFYWazblaUA",
  },
  {
    Title: "Ferdinand",
    fulltitle: "Ferdinand (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Destined to become a fearless fighting bull, the young pacifist and flower-loving calf, Ferdinand, summons up the courage to escape from a Spanish bull-training camp, to finally find himself on little Nina's idyllic and fragrant farm. However, an unfortunate run-in with a busy golden bee will send the immense but peaceful animal back to the old Casa del Toro academy, where the famous matador, El Primero, usually selects his worthy bovine opponents for the arena. Does Ferdinand hide a fierce champion underneath a mountain of muscles, or is he a gentle giant after all?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferdinand-Movie-Poster.jpg",
    imdb_id: "tt3411444",
    imdb_rating: 6.7,
    runtime: 108,
    language: "English",
    ytid: "n7RkOfN8KvE",
  },

  {
    Title: "My Entire High School Sinking Into the Sea",
    fulltitle: "My Entire High School Sinking Into the Sea (2016)",
    movie_year: 2016,
    Categories: "Animation|Comedy|Drama",
    summary:
      "An earthquake causes a high school to float into the sea, where it slowly sinks like a shipwreck.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Entire-High-School-Sinking-Into-the-Sea-Movie-Poster.jpg",
    imdb_id: "tt5538568",
    imdb_rating: 6.2,
    runtime: 75,
    language: "English",
    ytid: "zepBuHGkiWc",
  },

  {
    Title: "The Body",
    fulltitle: "The Body (2012)",
    movie_year: 2012,
    Categories: "Mystery|Thriller",
    summary:
      'In the middle of the night, a guard working the night shift at the morgue located deep in the woods has a terrible car accident, and as a result, he is now in a coma, suffering multiple skull injuries and fractures. But what made the guard panic and leave his post in the first place? Furthermore, according to the register, the body of Mayka Villaverde, a beautiful well-off businesswoman, is mysteriously missing from the morgue. Presumably, Mayka died of a heart attack, nevertheless, who signed the death certificate with the autopsy pending? In the end, when in forensic medicine the principle of: "every death is a homicide until proven otherwise" is a basic general rule, finding out who is behind this case shrouded in mystery is going to be an arduous task.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Body-Movie-Poster.jpg",
    imdb_id: "tt1937149",
    imdb_rating: 7.6,
    runtime: 108,
    language: "English",
    ytid: "NyE5LnY3dT0",
  },
  {
    Title: "Generation Iron 2",
    fulltitle: "Generation Iron 2 (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "From the director of Generation Iron, comes the anticipated sequel that will depict 5 of the top bodybuilding and fitness mega-stars on a quest of achieving the ultimate physique and taking it to the next extreme level. In the world of social media and internet, the rules have changed as to what makes an iconic bodybuilding mass-monster. Starring Kai Greene, Calum Von Moger, Rich Piana, among others, this film will explore an all new generation of bodybuilders and how this new world, and new people, carve their own path to physique perfection.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Generation-Iron-2-Movie-Poster.jpg",
    imdb_id: "tt6263642",
    imdb_rating: 6.1,
    runtime: 106,
    language: "English",
    ytid: "Q8-oU2Fb5ro",
  },

  {
    Title: "Forgotten",
    fulltitle: "Forgotten (2017)",
    movie_year: 2017,
    Categories: "Mystery|Thriller",
    summary:
      "Jin-Seok (Kang Ha-Neul) moves into a new home with his older brother Yoo-Seok (Kim Moo-Yul), mother (Na Young-Hee) and father (Moon Sung-Geun). Jin-Seok suffers from hypersensitivity, but with medication he is able to live normally. One rainy evening, Jin-Seok sees his older brother being thrown into a van by a group of men. After 19 days of silence, Yoo-Seok returns home, but he doesn't remember anything from his disappearance. Jin-Seok though notices enough changes in his older brother's personality and behavior that he begins to suspect that the person who has returned is not Yoo-Seok. Meanwhile, Jin-Seok keeps hearing sounds from a locked room temporarily storing the previous home owner's belongings.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Forgotten-Movie-Poster.jpg",
    imdb_id: "tt7057496",
    imdb_rating: 7.2,
    runtime: 108,
    language: "English",
    ytid: "i5fAD6PqBMQ",
  },
  {
    Title: "The Girl Without Hands",
    fulltitle: "The Girl Without Hands (2016)",
    movie_year: 2016,
    Categories: "Animation",
    summary:
      "In hard times, a miller sells his daughter to the Devil. Protected by her purity, she escapes but is deprived of her hands. Walking away from her family, she encounters the goddess of water, a gentle gardener and the prince in his castle. A long journey towards the light...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Girl-Without-Hands-Movie-Poster.jpg",
    imdb_id: "tt5698496",
    imdb_rating: 7,
    runtime: 76,
    language: "English",
    ytid: "pfqb097tCFw",
  },
  {
    Title: "Same Kind of Different as Me",
    fulltitle: "Same Kind of Different as Me (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "International art dealer Ron Hall must befriend a dangerous homeless man in order to save his struggling marriage to his wife, a woman whose dreams will lead all three of them on the journey of their lives.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Same-Kind-of-Different-as-Me-Movie-Poster.jpg",
    imdb_id: "tt1230168",
    imdb_rating: 6.3,
    runtime: 119,
    language: "English",
    ytid: "PltWQ8kQe04",
  },
  {
    Title: "Meester Kikker",
    fulltitle: "Meester Kikker (2016)",
    movie_year: 2016,
    Categories: "Family",
    summary:
      "The classroom is astonished when their teacher tells them his big secret: sometimes he turns into a frog. Two kids see it as their task to protect his secret.. and to keep him out of the beak of a stork.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Meester-Kikker-Movie-Poster.jpg",
    imdb_id: "tt4923200",
    imdb_rating: 6.4,
    runtime: 86,
    language: "English",
    ytid: "WfZHRrki0_A",
  },
  {
    Title: "Marrowbone",
    fulltitle: "Marrowbone (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Thriller",
    summary:
      "A young man and his three younger siblings, who have kept secret the death of their beloved mother in order to remain together, are plagued by a sinister presence in the sprawling manor in which they live.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Marrowbone-Movie-Poster.jpg",
    imdb_id: "tt5886440",
    imdb_rating: 6.6,
    runtime: 110,
    language: "English",
    ytid: "cYz5sL9pbxU",
  },
  {
    Title: "Wonder Wheel",
    fulltitle: "Wonder Wheel (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "In the hustle and bustle of 1950s Coney Island, where the buzzing crowd comes and goes trudging slowly over the wooden boardwalks, silent stories of the everyday toilers who give life to the attraction unfold. Somewhere in a clam bar, there's the sad waitress Ginny, a one-time actress and now a suffering wife who's been given a second chance by the side of the well-intentioned but uncouth carousel operator, Humpty. On the other hand, there's Humpty's 26-year-old estranged daughter, Carolina, who left the familial nest and a preordained future seeking adventure as a mobster's wife; only to return home with her wings broken, begging for forgiveness. And from the lifeguard's high tower, where all is in plain sight, the young and charming lifesaver and hopeful playwright, Mickey, is the inadvertent but potent catalyst that binds everything together. Shattered dreams, reckless love and betrayal, all under the bright lights of Coney Island.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonder-Wheel-Movie-Poster.jpg",
    imdb_id: "tt5825380",
    imdb_rating: 6.2,
    runtime: 101,
    language: "English",
    ytid: "jsQ7633OZNc",
  },
  {
    Title: "The Disaster Artist",
    fulltitle: "The Disaster Artist (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama",
    summary:
      'Aspiring actor Greg Sestero befriends the eccentric Tommy Wiseau. The two travel to L.A, and when Hollywood rejects them, Tommy decides to write, direct, produce and star in their own movie. That movie is The Room, which has attained cult status as the "Citizen Kane" of bad movies.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Disaster-Artist-Movie-Poster.jpg",
    imdb_id: "tt3521126",
    imdb_rating: 7.6,
    runtime: 104,
    language: "English",
    ytid: "sPSJYXi7BWA",
  },
  {
    Title: "The Man Who Invented Christmas",
    fulltitle: "The Man Who Invented Christmas (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama",
    summary:
      "In 1843, the celebrated British novelist, Charles Dickens, is at a low point in his career with three flops behind him and his family expenses piling up at home. Determined to recover, Dickens decides to write a Christmas story and self-publish it in less than two months. As Dickens labors writing on such short notice, his estranged father and mother come to bunk with him. Still haunted by painful memories of his father ruining his childhood by his financial irresponsibly, Dickens develops a writer's block which seems to have no solution. As such, Dickens must face his personal demons epitomized through his characters, especially in his imagined conversations with Ebenezer Scrooge. Now with a looming deadline, Dickens struggles for inspiration against his frustrations and his characters' opinions in a literary challenge creating a classic tale that would define the essential soul of modern Christmas.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Man-Who-Invented-Christmas-Movie-Poster.jpg",
    imdb_id: "tt6225520",
    imdb_rating: 7,
    runtime: 104,
    language: "English",
    ytid: "UxcnYR3mcPU",
  },
  {
    Title: "Raw",
    fulltitle: "Raw (2016)",
    movie_year: 2016,
    Categories: "Drama|Horror",
    summary:
      "Justine is a first-year veterinary student. Her elder sister is studying the same course at the university. Justine was raised a strict vegetarian but, as part of the hazing rituals, is forced to eat meat. Initially this has adverse effects but she soon develops a craving for meat...particularly human flesh.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Raw-Movie-Poster.jpg",
    imdb_id: "tt4954522",
    imdb_rating: 7,
    runtime: 99,
    language: "English",
    ytid: "gFlXVX2af_Y",
  },
  {
    Title: "I Called Him Morgan",
    fulltitle: "I Called Him Morgan (2016)",
    movie_year: 2016,
    Categories: "Documentary|Drama|History|Music",
    summary:
      "On a snowy night in February 1972, celebrated jazz musician Lee Morgan was shot dead by his common-law wife Helen during a gig at a club in New York City. The murder sent shockwaves through the jazz community, and the memory of the event still haunts those who knew the Morgans. This feature documentary by Swedish filmmaker Kasper Collin is a love letter to two unique personalities and the music that brought them together. A film about love, jazz and America.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Called-Him-Morgan-Movie-Poster.jpg",
    imdb_id: "tt4170344",
    imdb_rating: 7.2,
    runtime: 92,
    language: "English",
    ytid: "yxLByThNvWU",
  },
  {
    Title: "The Women's Balcony",
    fulltitle: "The Women's Balcony (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "A bar mitzvah mishap causes a major rift in a devout Orthodox community in Jerusalem.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Womens-Balcony-Movie-Poster.jpg",
    imdb_id: "tt5974460",
    imdb_rating: 6.6,
    runtime: 96,
    language: "English",
    ytid: "heG--uvK-i4",
  },
  {
    Title: "Giant",
    fulltitle: "Giant (2017)",
    movie_year: 2017,
    Categories: "Drama|History",
    summary:
      "Having fought in the First Carlist War, Martin returns to his family farm in Gipuzkoa only to find that his younger brother, Joaquín, towers over him in height. Convinced that everyone will want to pay to see the tallest man on Earth, the siblings set out on a long trip all over Europe, during which ambition, money and fame will forever change the family's fate. A story based on true events.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Giant-Movie-Poster.jpg",
    imdb_id: "tt5693136",
    imdb_rating: 6.8,
    runtime: 114,
    language: "English",
    ytid: "elMP6PqGBo0",
  },
  {
    Title: "The Last Laugh",
    fulltitle: "The Last Laugh (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "Feature documentary about humor and the Holocaust, examining whether it is ever acceptable to use humor in connection with a tragedy of that scale, and the implications for other seemingly off-limits topics in a society that prizes free speech.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Last-Laugh-Movie-Poster.jpg",
    imdb_id: "tt2102508",
    imdb_rating: 7,
    runtime: 88,
    language: "English",
    ytid: "mzvz9OOqqdM",
  },
  {
    Title: "Human Flow",
    fulltitle: "Human Flow (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Over 65 million people around the world have been forced from their homes to escape famine, climate change and war in the greatest human displacement since World War II. Human Flow, an epic film journey led by the internationally renowned artist Ai Weiwei, gives a powerful visual expression to this massive human migration. The documentary elucidates both the staggering scale of the refugee crisis and its profoundly personal human impact. Captured over the course of an eventful year in 23 countries, the film follows a chain of urgent human stories that stretches across the globe in countries including Afghanistan, Bangladesh, France, Greece, Germany, Iraq, Israel, Italy, Kenya, Mexico, and Turkey. Human Flow is a witness to its subjects and their desperate search for safety, shelter and justice: from teeming refugee camps to perilous ocean crossings to barbed-wire borders; from dislocation and disillusionment to courage, endurance and adaptation; from the haunting lure of lives left ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Human-Flow-Movie-Poster.jpg",
    imdb_id: "tt6573444",
    imdb_rating: 6.9,
    runtime: 140,
    language: "English",
    ytid: "DVZGyTdk_BY",
  },
  {
    Title: "Burn Motherfucker, Burn!",
    fulltitle: "Burn Motherfucker, Burn! (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Explores the roots of civil unrest in California and the relationship between African Americans and LAPD.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Burn-Motherfucker-Burn-Movie-Poster.jpg",
    imdb_id: "tt6175670",
    imdb_rating: 6.5,
    runtime: 99,
    language: "English",
    ytid: "tx4vKHTNuAc",
  },
  {
    Title: "In This Corner of the World",
    fulltitle: "In This Corner of the World (2016)",
    movie_year: 2016,
    Categories: "Animation|Drama|Family|Fantasy|History",
    summary:
      "Set in Hiroshima during World War II, an eighteen-year-old girl gets married and now has to prepare food for her family despite the rationing and lack of supplies. As she struggles with the daily loss of life's amenities she still has to maintain the will to live.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-This-Corner-of-the-World-Movie-Poster.jpg",
    imdb_id: "tt4769824",
    imdb_rating: 7.9,
    runtime: 129,
    language: "English",
    ytid: "sDPRMcZs5Lw",
  },
  {
    Title: "Graduation",
    fulltitle: "Graduation (2016)",
    movie_year: 2016,
    Categories: "Crime|Drama",
    summary:
      "Romeo Aldea (49), a physician living in a small mountain town in Transylvania, has raised his daughter Eliza with the idea that once she turns 18, she will leave to study and live abroad. His plan is close to succeeding - Eliza has won a scholarship to study psychology in the UK. She just has to pass her final exams - a formality for such a good student. On the day before her first written exam, Eliza is assaulted in an attack that could jeopardize her entire future. Now Romeo has to make a decision. There are ways of solving the situation, but none of them using the principles he, as a father, has taught his daughter.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Graduation-Movie-Poster.jpg",
    imdb_id: "tt4936450",
    imdb_rating: 7.4,
    runtime: 128,
    language: "English",
    ytid: "dlxGMOJ0jK0",
  },

  {
    Title: "The Death of Stalin",
    fulltitle: "The Death of Stalin (2017)",
    movie_year: 2017,
    Categories: "Comedy|History",
    summary:
      "In early-1953 Moscow, under the Great Terror's heavy cloak of state paranoia, the ever-watchful Soviet leader, Joseph Stalin, collapses unexpectedly of a brain haemorrhage. Inevitably, when his body is discovered in the following morning, a frenetic surge of raw panic spreads like a virus in the senior members of the Council of Ministers, as they scramble to maintain order, weed out the competition, and, ultimately, take power. But in the middle of a gut-wrenching roller-coaster of incessant plotting, tireless machinations, and frail allegiances, absolutely no one is safe; not even the feared chief of the secret police, Lavrenti Beria. In the end, who will prevail after the death of Stalin?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Death-of-Stalin-Movie-Poster.jpg",
    imdb_id: "tt4686844",
    imdb_rating: 7.2,
    runtime: 107,
    language: "English",
    ytid: "kPpXFnHoC-0",
  },

  {
    Title: "Z-O-M-B-I-E-S",
    fulltitle: "Z-O-M-B-I-E-S (2018)",
    movie_year: 2018,
    Categories: "Musical|Romance",
    summary:
      "Disney's \"ZOMBIES\" is a music and dance filled story set in the fictitious world of Seabrook, a cookie-cutter community brimming with perky conformity, 50 years after a zombie apocalypse. Today, the zombies pose no threat, but are required to live in Zombietown, an isolated, rundown community infused with their unique creative spirit. When zombies are finally allowed to enroll in Seabrook High School, the charming, charismatic zombie Zed, who is determined to play football, meets freshman Addison, who dreams of being a cheerleader - the ultimate form of status in Seabrook. Addison takes a lot of flak for befriending Zed and his zombie friends, but comes to learn that zombies and cheerleaders aren't so different after all. Zed and Addison work together to show Seabrook what they can achieve when they embrace their differences and celebrate what makes them a community.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Z-O-M-B-I-E-S-Movie-Poster.jpg",
    imdb_id: "tt6878820",
    imdb_rating: 6.6,
    runtime: 94,
    language: "English",
    ytid: "sA93QG5Tqpw",
  },
  {
    Title: "2048: Nowhere to Run",
    fulltitle: "2048: Nowhere to Run (2017)",
    movie_year: 2017,
    Categories: "Action|Sci-Fi",
    summary:
      "Gentle Sapper, a replicant, unleashes his true power when he sees his loved ones in trouble.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/2048-Nowhere-to-Run-Movie-Poster.jpg",
    imdb_id: "tt7387408",
    imdb_rating: 6.9,
    runtime: 5,
    language: "English",
    ytid: "9TOx_7H2PXQ",
  },
  {
    Title: "A Taxi Driver",
    fulltitle: "A Taxi Driver (2017)",
    movie_year: 2017,
    Categories: "Action|Drama|History",
    summary:
      "May 1980. A Seoul taxi driver named Man-seob (SONG Kang-ho) comes across an offer too good to be true. If he drives a foreign passenger from Seoul down to Gwangju and back again before the curfew, he'll be paid the unthinkable sum of 100,000 won - enough to cover several months of unpaid rent. Without stopping to ask the details, he picks up the German reporter Peter (Thomas Kretschmann) and sets off along the highway. Although stopped by police roadblocks at the edge of Gwangju, Man-seob is desperate to earn his taxi fare, and eventually manages to find a way into the city. There they encounter students and ordinary citizens taking part in large-scale demonstrations against the government. Man-seob, alarmed by the danger in the air, pleads with Peter to go quickly back to Seoul. But Peter ignores him, and with the help of a university student Jae-sik (RYU Jun-yeol) and a Gwangju taxi driver named HWANG (YOO Hai-jin), begins shooting with his news camera. As time passes the situation ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/A-Taxi-Driver-Movie-Poster.jpg",
    imdb_id: "tt6878038",
    imdb_rating: 7.9,
    runtime: 137,
    language: "English",
    ytid: "bB7z4Xn5oNA",
  },
  {
    Title: "Midnight Runners",
    fulltitle: "Midnight Runners (2017)",
    movie_year: 2017,
    Categories: "Action|Comedy|Crime",
    summary:
      "Hwang Ki Joon, Mr Action, and Kang Hee Yeol, Mr Bookworm, are two best friends but contradictory students at Korean National Police University. They accidentally witness a kidnapping and decide to work together to track it down.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Midnight-Runners-Movie-Poster.jpg",
    imdb_id: "tt7056732",
    imdb_rating: 7.1,
    runtime: 109,
    language: "English",
    ytid: "cyVk51ksx4o",
  },

  {
    Title: "Bright Lights: Starring Carrie Fisher and Debbie Reynolds",
    fulltitle:
      "Bright Lights: Starring Carrie Fisher and Debbie Reynolds (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "Carrie Fisher and Debbie Reynolds star in a tender portrait of Hollywood royalty in all its eccentricity. From the red carpet to the back alleys behind it, the documentary is about the bonds of family love, which are beautifully bitter-sweet.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bright-Lights-Starring-Carrie-Fisher-and-Debbie-Reynolds-Movie-Poster.jpg",
    imdb_id: "tt5651050",
    imdb_rating: 8,
    runtime: 95,
    language: "English",
    ytid: "K97Rthh-qmk",
  },
  {
    Title: "The Happiest Day in the Life of Olli Mäki",
    fulltitle: "The Happiest Day in the Life of Olli Mäki (2016)",
    movie_year: 2016,
    Categories: "Biography|Drama|Romance|Sport",
    summary:
      "The true story of Olli Mäki, the famous Finnish boxer who had a shot at the 1962 World Featherweight title. Immensely talented and equally modest, Olli's small town life is transformed when he is swept into national stardom and suddenly regarded as a symbol of his country. There's only one problem: Olli has just fallen in love. Inside of the ring, it's Finland vs. the USA, but outside, boxing and romance become unlikely adversaries vying for Olli's attention. This charming feature debut from Juho Kuosmanen was awarded the Un Certain Regard Prize at the Cannes Film Festival.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Happiest-Day-in-the-Life-of-Olli-Mäki-Movie-Poster.jpg",
    imdb_id: "tt4771932",
    imdb_rating: 7.2,
    runtime: 92,
    language: "English",
    ytid: "jxBGb-YY5Vs",
  },
  {
    Title: "Chris Rock: Tamborine",
    fulltitle: "Chris Rock: Tamborine (2018)",
    movie_year: 2018,
    Categories: "Comedy",
    summary:
      "Chris Rock takes the stage in Brooklyn for a comedy special filled with searing observations on fatherhood, infidelity and American politics.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chris-Rock-Tamborine-Movie-Poster.jpg",
    imdb_id: "tt8005338",
    imdb_rating: 6.5,
    runtime: 64,
    language: "English",
    ytid: "Iz46th3HSMU",
  },
  {
    Title: "The Red Turtle",
    fulltitle: "The Red Turtle (2016)",
    movie_year: 2016,
    Categories: "Animation|Fantasy",
    summary:
      "Surrounded by the immense and furious ocean, a shipwrecked mariner battles all alone for his life with the relentless towering waves. Right on the brink of his demise, the man set adrift by the raging tempest washes ashore on a small and deserted tropical island of sandy beaches, timid animal inhabitants and a slender but graceful swaying bamboo forest. Alone, famished, yet, determined to break free from his Eden-like prison, after foraging for food and fresh water and encouraged by the dense forest, the stranded sailor builds a raft and sets off to the wide sea, however, an indistinguishable adversary prevents him from escaping. Each day, the exhausted man never giving up hope will attempt to make a new, more improved raft, but the sea is vast with wonderful and mysterious creatures and the island's only red turtle won't let the weary survivor escape that easily. Is this the heartless enemy?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Red-Turtle-Movie-Poster.jpg",
    imdb_id: "tt3666024",
    imdb_rating: 7.5,
    runtime: 80,
    language: "English",
    ytid: "Sw7BggqBpTk",
  },
  {
    Title: "Tragedy Girls",
    fulltitle: "Tragedy Girls (2017)",
    movie_year: 2017,
    Categories: "Comedy|Horror",
    summary:
      "A twist on the slasher genre, following two death-obsessed teenage girls who use their online show about real-life tragedies to send their small mid-western town into a frenzy, and cement their legacy as modern horror legends.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tragedy-Girls-Movie-Poster.jpg",
    imdb_id: "tt3859272",
    imdb_rating: 6,
    runtime: 98,
    language: "English",
    ytid: "8_APkCw-Dx8",
  },
  {
    Title: "Columbus",
    fulltitle: "Columbus (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "A Korean-born man finds himself stuck in Columbus, Indiana, where his architect father is in a coma. The man meets a young woman who wants to stay in Columbus with her mother, a recovering addict, instead of pursuing her own dreams.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Columbus-Movie-Poster.jpg",
    imdb_id: "tt5990474",
    imdb_rating: 7.3,
    runtime: 0,
    language: "English",
    ytid: "r3dcnV6Z9Zs",
  },

  {
    Title: "Dawson City: Frozen Time",
    fulltitle: "Dawson City: Frozen Time (2016)",
    movie_year: 2016,
    Categories: "Documentary|History",
    summary:
      "Dawson City: Frozen Time, pieces together the bizarre true history of a collection of some 500 films dating from 1910s - 1920s, which were lost for over 50 years until being discovered buried in a sub-arctic swimming pool deep in the Yukon Territory, in Dawson City, located about 350 miles south of the Arctic Circle. Using these permafrost protected, rare silent films and newsreels, archival footage, interviews and historical photographs to tell the story, and accompanied by an enigmatic score by Sigur Rós collaborator and composer Alex Somers (Captain Fantastic), Dawson City: Frozen Time depicts a unique history of a Canadian gold rush town by chronicling the life cycle of a singular film collection through its exile, burial, rediscovery, and salvation - and through that collection, how a First Nation hunting camp was transformed and displaced.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dawson-City-Frozen-Time-Movie-Poster.jpg",
    imdb_id: "tt5215486",
    imdb_rating: 7.6,
    runtime: 120,
    language: "English",
    ytid: "oEbHM8Vsvlo",
  },
  {
    Title: "Good Time",
    fulltitle: "Good Time (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Motivated by an almost ferocious love for his intellectually disabled brother, Nick, and an explosive mix of desperation and thirst for a better life, the abrasive and fledgeling criminal, Connie, involves his sibling in an ill-conceived bank robbery that swears to be a quick and easy job. Instead, things go utterly wrong, and Nick will wind up in Rikers Island after one unanticipated complication, forcing the desperate but determined Connie to embark on a nightmarish, no-holds-barred quest to bail Nick out. Inevitably, over the course of a long and violent night, Connie will go to great lengths to save Nick from a cruel fate, doomed, however, to do more harm than good. Is it all heading somewhere?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Good-Time-Movie-Poster.jpg",
    imdb_id: "tt4846232",
    imdb_rating: 7.3,
    runtime: 101,
    language: "English",
    ytid: "nrR-SbCRgCU",
  },
  {
    Title: "Menashe",
    fulltitle: "Menashe (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Menashe, a widower, lives and works within the Hasidic community of Borough Park, Brooklyn. Since his wife passed away a year before, he has been trying hard to regain custody of his nine-year-old son, Rieven. But the rabbi (and all the community behind him) will not hear of it unless he re-marries, which Menashe does not want, his first marriage having been very unhappy. Father and son get on well together, but can Menashe take care of Rieven properly? Not really for all his goodwill as he holds down a low-paid job as a grocery clerk that consumes too much of his efforts and energy. Always late, always in a hurry, he endeavors to improve himself though. But will his efforts be enough to convince the rabbi that he can be a good father without a wife at home?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Menashe-Movie-Poster.jpg",
    imdb_id: "tt6333086",
    imdb_rating: 6.5,
    runtime: 82,
    language: "English",
    ytid: "83UoZcdX__Y",
  },
  {
    Title: "Newness",
    fulltitle: "Newness (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "In contemporary Los Angeles, two millennials navigating a social media-driven hookup culture begin a relationship that pushes both emotional and physical boundaries.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Newness-Movie-Poster.jpg",
    imdb_id: "tt6408226",
    imdb_rating: 6.4,
    runtime: 112,
    language: "English",
    ytid: "EtBhKTuPjEk",
  },
  {
    Title: "Kedi",
    fulltitle: "Kedi (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "In the city of Istanbul, there are more than just human inhabitants. There are also the stray domestic cats of the city who live free but have complicated relationships with the people themselves. This film follows a selection of individual cats as they live their own lives in Istanbul with their own distinctive personalities. However, with this vibrant population, is the reality of an ancient metropolis changing with the times that may have less of a place for them.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kedi-Movie-Poster.jpg",
    imdb_id: "tt4420704",
    imdb_rating: 7.7,
    runtime: 79,
    language: "English",
    ytid: "lKq7UqplcL8",
  },
  {
    Title: "Three Billboards Outside Ebbing, Missouri",
    fulltitle: "Three Billboards Outside Ebbing, Missouri (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "THREE BILLBOARDS OUTSIDE EBBING, MISSOURI is a darkly comic drama from Academy Award nominee Martin McDonagh (In Bruges). After months have passed without a culprit in her daughter's murder case, Mildred Hayes (Academy Award winner Frances McDormand) makes a bold move, painting three signs leading into her town with a controversial message directed at William Willoughby (Academy Award nominee Woody Harrelson), the town's revered chief of police. When his second-in-command Officer Dixon (Academy Award winner Sam Rockwell), an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Three-Billboards-Outside-Ebbing-Missouri-Movie-Poster.jpg",
    imdb_id: "tt5027774",
    imdb_rating: 8.2,
    runtime: 115,
    language: "English",
    ytid: "Jit3YhGx5pU",
  },
  {
    Title: "Jagga Jasoos",
    fulltitle: "Jagga Jasoos (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Musical|Mystery",
    summary:
      "Join Jagga, a gifted teenage detective, who along with a female companion, is on a quest to find his missing father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jagga-Jasoos-Movie-Poster.jpg",
    imdb_id: "tt4129428",
    imdb_rating: 6.5,
    runtime: 161,
    language: "English",
    ytid: "YheC-4Qgoro",
  },

  {
    Title: "My Life as a Zucchini",
    fulltitle: "My Life as a Zucchini (2016)",
    movie_year: 2016,
    Categories: "Animation|Comedy|Drama",
    summary:
      "Courgette (Zucchini) is an intriguing nickname for a 9-year-old boy. Although his unique story is surprisingly universal. After his mother's disappearance, Courgette is befriended by a police officer Raymond, who accompanies him to his new foster home filled with other orphans his age. At first he struggles to find his place in this strange, at times, hostile environment. Yet with Raymond's help and his new-found friends, Courgette eventually learns to trust and might find true love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Life-as-a-Zucchini-Movie-Poster.jpg",
    imdb_id: "tt2321405",
    imdb_rating: 7.8,
    runtime: 66,
    language: "English",
    ytid: "3nRwYWVxjRU",
  },
  {
    Title: "The Salesman",
    fulltitle: "The Salesman (2016)",
    movie_year: 2016,
    Categories: "Drama|Thriller",
    summary:
      'Forced to leave their collapsing house, Ranaa and Emad, an Iranian couple who happen to be performers rehearsing for Arthur Miller\'s "Death of a Salesman" rent a new apartment from one of their fellow performers. Unaware of the fact that the previous tenant had been a woman of ill repute having many clients, they settle down. By a nasty turn of events one of the clients pays a visit to the apartment one night while Ranaa is alone at home taking a bath and the aftermath turns the peaceful life of the couple upside down.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Salesman-Movie-Poster.jpg",
    imdb_id: "tt5186714",
    imdb_rating: 7.8,
    runtime: 124,
    language: "English",
    ytid: "r-61yYjKHHc",
  },
  {
    Title: "I Am Not Your Negro",
    fulltitle: "I Am Not Your Negro (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      'In 1979, James Baldwin wrote a letter to his literary agent describing his next project, "Remember This House." The book was to be a revolutionary, personal account of the lives and assassinations of three of his close friends: Medgar Evers, Malcolm X and Martin Luther King, Jr. At the time of Baldwin\'s death in 1987, he left behind only 30 completed pages of this manuscript. Filmmaker Raoul Peck envisions the book James Baldwin never finished.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Am-Not-Your-Negro-Movie-Poster.jpg",
    imdb_id: "tt5804038",
    imdb_rating: 7.8,
    runtime: 93,
    language: "English",
    ytid: "rNUYdgIyaPM",
  },
  {
    Title: "Lady Bird",
    fulltitle: "Lady Bird (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      'Christine "Lady Bird" MacPherson is a high school senior from the "wrong side of the tracks." She longs for adventure, sophistication, and opportunity, but finds none of that in her Sacramento Catholic high school. LADY BIRD follows the title character\'s senior year in high school, including her first romance, her participation in the school play, and most importantly, her applying for college.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lady-Bird-Movie-Poster.jpg",
    imdb_id: "tt4925292",
    imdb_rating: 7.5,
    runtime: 94,
    language: "English",
    ytid: "cNi_HC839Wo",
  },

  {
    Title: "Blood of My Blood",
    fulltitle: "Blood of My Blood (2015)",
    movie_year: 2015,
    Categories: "Drama|History",
    summary:
      "Two haunting Italian tales from different centuries in the convent prison of Bobbio, caught somewhere between past and present: a young 17th century priest falls under the spell of a bewitching nun and a modern-day tax investigator tries to push a mysterious old man out of hiding.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blood-of-My-Blood-Movie-Poster.jpg",
    imdb_id: "tt2922590",
    imdb_rating: 6.2,
    runtime: 106,
    language: "English",
    ytid: "kS-RqI3ws_Y",
  },
  {
    Title: "I Am Not a Witch",
    fulltitle: "I Am Not a Witch (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Following a banal incident in her local village, 8-year old girl Shula is accused of witchcraft. After a short trial she is found guilty, taken into state custody and exiled to a witch camp in the middle of a desert. At the camp she takes part in an initiation ceremony where she is shown the rules surrounding her new life as a witch. Like the other residents, Shula is tied to a ribbon which is attached to a coil that perches in a large tree. She is told that should she ever cut the ribbon, she'll be cursed and transformed into a goat.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Am-Not-a-Witch-Movie-Poster.jpg",
    imdb_id: "tt6213284",
    imdb_rating: 6.7,
    runtime: 93,
    language: "English",
    ytid: "telx5Pfe2-I",
  },
  {
    Title: "Sophie and the Rising Sun",
    fulltitle: "Sophie and the Rising Sun (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "Set in the autumn of 1941 in Salty Creek, a fishing village in South Carolina, the film tells the dramatic story of interracial lovers swept up in the tides of history. As World War II rages in Europe a wounded stranger, Mr. Ohta, appears in the town under mysterious circumstances. Sophie, a native of Salty Creek, quickly becomes transfixed by Mr. Ohta and a friendship born of their mutual love of art blossoms into a delicate and forbidden courtship. As their secret relationship evolves the war escalates tragically. When Pearl Harbor is bombed, a surge of misguided patriotism, bigotry and violence sweeps through the town, threatening Mr. Ohta's life. A trio of women, each with her own secrets - Sophie, along with the town matriarch and her housekeeper - rejects law and propriety, risking their lives with their actions.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sophie-and-the-Rising-Sun-Movie-Poster.jpg",
    imdb_id: "tt4532818",
    imdb_rating: 6.5,
    runtime: 105,
    language: "English",
    ytid: "E5nSoWkT8Hs",
  },
  {
    Title: "Justice League",
    fulltitle: "Justice League (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. Together, Batman and Wonder Woman work quickly to find and recruit a team of metahumans to stand against this newly awakened threat. But despite the formation of this unprecedented league of heroes-Batman, Wonder Woman, Aquaman, Cyborg and The Flash-it may already be too late to save the planet from an assault of catastrophic proportions.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Justice-League-Movie-Poster.jpg",
    imdb_id: "tt0974015",
    imdb_rating: 6.7,
    runtime: 120,
    language: "English",
    ytid: "r9-DM9uBtVI",
  },
  {
    Title: "Contemporary Color",
    fulltitle: "Contemporary Color (2016)",
    movie_year: 2016,
    Categories: "Documentary|Music",
    summary:
      "In the summer of 2015, legendary musician David Byrne staged an event at Brooklyn's Barclays Center to celebrate the art of Color Guard: synchronized dance routines involving flags, rifles, and sabers. Recruiting performers that include the likes of Saint Vincent, Nelly Furtado, Ad-Rock, and Ira Glass to collaborate on original pieces with 10 color guard teams from across the US and Canada, Contemporary Color is a beautifully filmed snapshot of a one-of-a-kind live event.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Contemporary-Color-Movie-Poster.jpg",
    imdb_id: "tt5258306",
    imdb_rating: 6.4,
    runtime: 97,
    language: "English",
    ytid: "p3xvU1qqUwg",
  },
  {
    Title: "The Ballad of Lefty Brown",
    fulltitle: "The Ballad of Lefty Brown (2017)",
    movie_year: 2017,
    Categories: "Western",
    summary:
      "When cowboy Lefty Brown witnesses the murder of his longtime partner, the newly-elected Senator Edward Johnson. He strikes out to find the killers and avenge his friend's cold-blooded murder. Tracking the outlaws across the vast and desolate Montana plains, Lefty stumbles across a young wannabe gunslinger, Jeremiah, and an old friend, a former hard-drinking pal turned U.S. Marshall, to help deliver the men to justice. After a gunfight with the outlaws leaves Jeremiah wounded, Lefty returns home with the names of Johnson's killers only to find that he is being accused of his friend's murder by the governor. With the tables turned Lefty must evade the law, get the Marshall to stop drinking again, and prove his innocence by exposing the powerful men ultimately responsible for Johnson's death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Ballad-of-Lefty-Brown-Movie-Poster.jpg",
    imdb_id: "tt4400994",
    imdb_rating: 6.2,
    runtime: 111,
    language: "English",
    ytid: "Sv2khM97ylU",
  },
  {
    Title: "In the Family",
    fulltitle: "In the Family (2011)",
    movie_year: 2011,
    Categories: "Drama|Romance",
    summary:
      "In the town of Martin, Tennessee, Chip Hines, a precocious six year old, has only known life with his two dads, Cody and Joey. And a good life it is. When Cody dies suddenly in a car accident, Joey and Chip struggle to find their footing again. Just as they begin to, Cody's will reveals that he named his sister as Chip's guardian. The years of Joey's acceptance into the family unravel as Chip is taken away from him. In his now solitary home life, Joey searches for a solution. The law is not on his side, but friends are. Armed with their comfort and inspired by memories of Cody, Joey finds a path to peace with the family and becomes closer to his son.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-the-Family-Movie-Poster.jpg",
    imdb_id: "tt1845804",
    imdb_rating: 7.1,
    runtime: 169,
    language: "English",
    ytid: "-ECpRYBYEt8",
  },
  {
    Title: "Blade of the Immortal",
    fulltitle: "Blade of the Immortal (2017)",
    movie_year: 2017,
    Categories: "Action|Drama",
    summary:
      "Manji, a highly skilled samurai, becomes cursed with immortality after a legendary battle. Haunted by the brutal murder of his sister, Manji knows that only fighting evil will regain his soul. He promises to help a young girl named Rin avenge her parents, who were killed by a group of master swordsmen led by ruthless warrior Anotsu. The mission will change Manji in ways he could never imagine - the 100th film by master director Takashi Miike.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blade-of-the-Immortal-Movie-Poster.jpg",
    imdb_id: "tt5084170",
    imdb_rating: 6.8,
    runtime: 140,
    language: "English",
    ytid: "exLJtcfxKHg",
  },
  {
    Title: "Batman: Gotham by Gaslight",
    fulltitle: "Batman: Gotham by Gaslight (2018)",
    movie_year: 2018,
    Categories: "Action|Adventure|Animation|Crime|Fantasy",
    summary:
      "In an age of mystery and superstition, how would the people of Gotham react to a weird creature of the night, a bat-garbed vigilante feared by the guilty and the innocent alike? The very first Elseworlds tale re-imagines the Dark Knight detective in Victorian times and pits him against the infamous murderer Jack the Ripper.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Batman-Gotham-by-Gaslight-Movie-Poster.jpg",
    imdb_id: "tt7167630",
    imdb_rating: 6.8,
    runtime: 78,
    language: "English",
    ytid: "R7FuOmlAO1k",
  },
  {
    Title: "Darkest Hour",
    fulltitle: "Darkest Hour (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History|War",
    summary:
      "During World War II, as Adolf Hitler's awesomely powerful Wehrmacht rampages across Europe, the Prime Minister of the United Kingdom, Neville Chamberlain, is forced to resign, recommending Winston Churchill as his replacement. But even in his early days as the country's leader, Churchill is under pressure to commence peace negotiations with the German dictator or to fight head-on the seemingly invincible Nazi regime, whatever the cost. However difficult and dangerous his decision may be, Churchill has no choice but to shine in the country's darkest hour.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Darkest-Hour-Movie-Poster.jpg",
    imdb_id: "tt4555426",
    imdb_rating: 7.4,
    runtime: 125,
    language: "English",
    ytid: "LtJ60u7SUSw",
  },

  {
    Title: "In Search of Balance",
    fulltitle: "In Search of Balance (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "At a genetic level, humans are literally connected to the rest of the natural world through our DNA. But today's highly processed foods, pesticide based monoculture farming methods, increasing urbanization, obsession with technology and destruction of the natural environment distance us further and further from the world we coevolved with. We are out of balance with nature and the reductionist philosophy of modern western medicine, once immensely powerful, seems inadequate to answer today's challenges.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-Search-of-Balance-Movie-Poster.jpg",
    imdb_id: "tt5022626",
    imdb_rating: 6.6,
    runtime: 74,
    language: "English",
    ytid: "x4pLLL8XF5Q",
  },
  {
    Title: "Minimalism: A Documentary About the Important Things",
    fulltitle: "Minimalism: A Documentary About the Important Things (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "How might your life be better with less? Minimalism: A Documentary About the Important Things examines the many flavors of minimalism by taking the audience inside the lives of minimalists from all walks of life -- families, entrepreneurs, architects, artists, journalists, scientists, and even a former Wall Street broker -- all of whom are striving to live a meaningful life with less.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Minimalism-A-Documentary-About-the-Important-Things-Movie-Poster.jpg",
    imdb_id: "tt3810760",
    imdb_rating: 6.7,
    runtime: 79,
    language: "English",
    ytid: "0Co1Iptd4p4",
  },
  {
    Title: "Tom of Finland",
    fulltitle: "Tom of Finland (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Touko Laaksonen, a decorated officer, returns home after a harrowing and heroic experience serving his country in World War II, but life in Finland during peacetime proves equally distressing. He finds peace-time Helsinki rampant with persecution of the homosexual men around him, even being pressured to marry women and have children. Touko finds refuge in his liberating art, specializing in homoerotic drawings of muscular men, free of inhibitions. His work - made famous by his signature 'Tom of Finland' - became the emblem of a generation of men and fanned the flames of a gay revolution.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tom-of-Finland-Movie-Poster.jpg",
    imdb_id: "tt5226984",
    imdb_rating: 6.9,
    runtime: 115,
    language: "English",
    ytid: "V0E9zPRt96w",
  },
  {
    Title: "Thelma",
    fulltitle: "Thelma (2017)",
    movie_year: 2017,
    Categories: "Drama|Fantasy|Mystery|Romance|Thriller",
    summary:
      "Having just enrolled at a university in Oslo against her stern parents' will, the sheltered Biology freshman and devout Christian, Thelma, leaves for the first time the isolated Norwegian countryside, to start a new life away from home. Tangibly lonely, a casual conversation and an unexpected friendship in the face of the beautiful fellow student, Anja, will broaden Thelma's hazy horizons; however, as the glacially alluring misfit wrestles with an onslaught of novel feelings, an unprecedented psychosomatic manifestation of repressed emotions takes over. A mystery cloaks soft-spoken Thelma's past, and the more she struggles to renounce her nebulous desire, the more violent is her quivering awakening. But can Thelma find a denied truth behind a stinging temptation?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thelma-Movie-Poster.jpg",
    imdb_id: "tt6304046",
    imdb_rating: 7.1,
    runtime: 116,
    language: "English",
    ytid: "vgQMHG9SGlU",
  },
  {
    Title: "My Friend Dahmer",
    fulltitle: "My Friend Dahmer (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Horror",
    summary: "A young Jeffrey Dahmer struggles to belong in high school.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Friend-Dahmer-Movie-Poster.jpg",
    imdb_id: "tt2291540",
    imdb_rating: 6.4,
    runtime: 107,
    language: "English",
    ytid: "jmnuC7tn9D4",
  },
  {
    Title: "When We First Met",
    fulltitle: "When We First Met (2018)",
    movie_year: 2018,
    Categories: "Comedy|Fantasy|Romance",
    summary:
      "Noah spends the perfect first night with Avery, the girl of his dreams, but gets relegated to the friend zone. He spends the next three years wondering what went wrong - until he gets the unexpected chance to travel back in time and change that night - and his fate - over and over again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/When-We-First-Met-Movie-Poster.jpg",
    imdb_id: "tt5783956",
    imdb_rating: 6.4,
    runtime: 97,
    language: "English",
    ytid: "d2sJNee7FQ4",
  },
  {
    Title: "Bomb City",
    fulltitle: "Bomb City (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Thriller|Western",
    summary:
      "Bomb City is a crime-drama, about the cultural aversion of a group of punk rockers in a conservative Texas town. Their ongoing battle with a rival, more-affluent clique leads to a controversial hate crime that questions the morality of American justice. Based on the true story of Brian Deneke.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bomb-City-Movie-Poster.jpg",
    imdb_id: "tt4351548",
    imdb_rating: 7.1,
    runtime: 95,
    language: "English",
    ytid: "ir4IraOtads",
  },
  {
    Title: "The Ritual",
    fulltitle: "The Ritual (2017)",
    movie_year: 2017,
    Categories: "Horror",
    summary:
      "A group of college friends reunite for a trip to the forest, but encounter a menacing presence in the woods that's stalking them.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Ritual-Movie-Poster.jpg",
    imdb_id: "tt5638642",
    imdb_rating: 6.3,
    runtime: 94,
    language: "English",
    ytid: "Vfugwq2uoa0",
  },
  {
    Title: "Accident Man",
    fulltitle: "Accident Man (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Thriller",
    summary:
      "Mike Fallon, the Accident Man, is a stone cold killer whose methodical hits baffle the police and delight his clients. He is the best at what he does. But when a loved one is dragged into the London underworld and murdered by his own crew, Fallon is forced to rip apart the life he knew in order to hold those accountable and avenge the one person who actually meant something to him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Accident-Man-Movie-Poster.jpg",
    imdb_id: "tt6237612",
    imdb_rating: 6.1,
    runtime: 105,
    language: "English",
    ytid: "hk6Fhe8HyKs",
  },
  {
    Title: "Coco",
    fulltitle: "Coco (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Coco-Movie-Poster.jpg",
    imdb_id: "tt2380307",
    imdb_rating: 8.5,
    runtime: 0,
    language: "English",
    ytid: "6Zxj9q8Yjdw",
  },
  {
    Title: "Murder on the Orient Express",
    fulltitle: "Murder on the Orient Express (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery",
    summary:
      "Hercule Poirot, the best detective in the world decides to leave on the Orient Express. The train accidentally gets stopped because of a small avalanche. Little did he know that a murder was planned and that a person on this train was able of committing such crime. Will he solve this murder before the train starts working again?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Murder-on-the-Orient-Express-Movie-Poster.jpg",
    imdb_id: "tt3402236",
    imdb_rating: 6.6,
    runtime: 114,
    language: "English",
    ytid: "Mq4m3yAoW8E",
  },
  {
    Title: "Doctor Who: Shada",
    fulltitle: "Doctor Who: Shada (2017)",
    movie_year: 2017,
    Categories: "Sci-Fi",
    summary:
      "The story revolves around the planet Shada, on which the Time Lords have constructed a high security prison for some of the Universe's most dangerous criminals. Skagra, a flawed genius from the planet Dronoid, wishes to create a \"Universal Mind\" in which all the pooled knowledge of the universe's greatest criminals would be placed at his disposal and with which he intends to take control of the Universe. Skagra wants to go to Shada to extract the knowledge of the criminals who have been imprisoned there. Unfortunately for Skagra, knowledge of the location of Shada has been deliberately hidden by the Time Lords, but Skagra discovers that there is a Time Lord living on Earth in the twentieth century who may hold the key to its location. This Time Lord is masquerading as a professor at St. Cedd's College, Cambridge and calling himself Professor Chronotis. Sensing danger, Chronotis calls for the assistance of his old friend and protégé, the Doctor. The story climaxes in a battle for ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Doctor-Who-Shada-Movie-Poster.jpg",
    imdb_id: "tt7689226",
    imdb_rating: 6,
    runtime: 138,
    language: "English",
    ytid: "jBpmCZV6GAc",
  },
  {
    Title: "The Everlasting Flame",
    fulltitle: "The Everlasting Flame (2009)",
    movie_year: 2009,
    Categories: "Documentary|Sport",
    summary: "Official Film of the Beijing Olympics.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Everlasting-Flame-Movie-Poster.jpg",
    imdb_id: "tt1491616",
    imdb_rating: 6.2,
    runtime: 101,
    language: "English",
    ytid: "0BE0fL_tqnc",
  },
  {
    Title: "Daddy's Home 2",
    fulltitle: "Daddy's Home 2 (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      "Having finally gotten used to each other's existence, Brad and Dusty must now deal with their intrusive fathers during the holidays.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Daddys-Home-2-Movie-Poster.jpg",
    imdb_id: "tt5657846",
    imdb_rating: 6,
    runtime: 100,
    language: "English",
    ytid: "yyW_EX7iRW0",
  },
  {
    Title: "The Florida Project",
    fulltitle: "The Florida Project (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Halley lives with her six year old daughter Moonee in a budget motel along one of the commercial strips catering to the Walt Disney World tourist clientele outside Orlando, Florida. Halley, who survives largely on welfare, has little respect for people, especially those who cross her, it an attitude that she has passed down to Moonee, who curses and gives the finger like her mother. Although the motel's policy is not to allow long term rentals, Bobby, the motel manager, has made arrangements for people like Halley to live there while not undermining the policy as he realizes that many such tenants have no place to go otherwise. Halley, Moonee and Moonee's friends, who live in the motel or others like it along the strip and who she often drags into her disruptive pranks, are often the bane of Bobby's existence, but while dealing with whatever problem arises, Bobby has a soft spot especially for the children and thus, by association, their parents, as he knows that Moonee and others ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Florida-Project-Movie-Poster.jpg",
    imdb_id: "tt5649144",
    imdb_rating: 7.6,
    runtime: 111,
    language: "English",
    ytid: "WwQ-NH1rRT4",
  },
  {
    Title: "Only the Brave",
    fulltitle: "Only the Brave (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      'In 2007 Prescott, Arizona, Eric Marsh of the Prescott Fire Department is frustrated fighting forest fires when the Type 1 or "Hotshot" front line forest fire fighting crews from afar overrule his operational suggestions to his area\'s sorrow. To change that, Marsh gets approval from the Mayor to attempt to organize an unprecedented certified municipal-based Hotshot crew for Prescott. To that end, Marsh needs new recruits, which includes the young wastrel, Brendan McDonough, to undergo the rigorous training and qualification testing for the most dangerous of fire fighting duty. Along the way, the new team meets the challenge and the hailed Granite Mountain Hotshots are born. In doing so, all the men, especially McDonough, are changed as new experience and maturity is achieved in fire-forged camaraderie. All this is put to the test in 2013 with the notorious Yarnell Hill Fire that will demand efforts and sacrifices no one can ignore.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Only-the-Brave-Movie-Poster.jpg",
    imdb_id: "tt3829920",
    imdb_rating: 7.7,
    runtime: 134,
    language: "English",
    ytid: "EE_GY6zccqc",
  },
  {
    Title: "God's Own Country",
    fulltitle: "God's Own Country (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Spring. Yorkshire. Isolated young sheep farmer Johnny Saxby numbs his daily frustrations with binge drinking and casual sex, until the arrival of a Romanian migrant worker Gheorghe, employed for the lambing season, ignites an intense relationship that sets Johnny on a new path.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gods-Own-Country-Movie-Poster.jpg",
    imdb_id: "tt5635086",
    imdb_rating: 7.7,
    runtime: 104,
    language: "English",
    ytid: "ki3B3C2tGBQ",
  },
  {
    Title: "Wonder",
    fulltitle: "Wonder (2017)",
    movie_year: 2017,
    Categories: "Drama|Family",
    summary:
      "Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman. Born with facial differences that, up until now, have prevented him from going to a mainstream school, Auggie becomes the most unlikely of heroes when he enters the local fifth grade. As his family, his new classmates, and the larger community all struggle to discover their compassion and acceptance, Auggie's extraordinary journey will unite them all and prove you can't blend in when you were born to stand out.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonder-Movie-Poster.jpg",
    imdb_id: "tt2543472",
    imdb_rating: 8,
    runtime: 113,
    language: "English",
    ytid: "YRXmuv7JP-A",
  },
  {
    Title: "Crooked House",
    fulltitle: "Crooked House (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery",
    summary:
      "In this classic Agatha Christie detective story, former diplomat Charles Hayward has returned from Cairo to London to become a private detective. When Aristide Leonides, a wealthy and ruthless tycoon, is poisoned in his own bed, Detective Hayward is invited to solve the crime. As the investigation deepens he must confront the shocking realization that one of the key suspects is Aristede's beautiful granddaughter, his employer and former lover; and must keep a clear head to navigate the sultry Sophia and the rest of her hostile family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Crooked-House-Movie-Poster.jpg",
    imdb_id: "tt1869347",
    imdb_rating: 6.3,
    runtime: 115,
    language: "English",
    ytid: "JwTYh5BHH5A",
  },
  {
    Title: "Roman J. Israel, Esq.",
    fulltitle: "Roman J. Israel, Esq. (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "ROMAN J. ISRAEL, ESQ. is a dramatic thriller set in the underbelly of the overburdened Los Angeles criminal court system. Denzel Washington stars as Roman Israel, a driven, idealistic defense attorney who, through a tumultuous series of events, finds himself in a crisis that leads to extreme action. Colin Farrell costars as the monied, cutthroat lawyer who recruits Roman to his firm.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Roman-J.-Israel-Esq.-Movie-Poster.jpg",
    imdb_id: "tt6000478",
    imdb_rating: 6.4,
    runtime: 122,
    language: "English",
    ytid: "tGVIKqbEtdU",
  },
  {
    Title: "Wheelman",
    fulltitle: "Wheelman (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Mystery|Thriller",
    summary:
      "After three years in prison, the driver known as Wheelman has to work for mobsters to pay for a debt. When he is assigned to drive a getaway car for a bank heist, he is not able to contact his liaison and a stranger call him giving orders to deliver the stolen money to him. Soon he learns that he has been betrayed by his contact and spends the night trying to save his thirteen year-old Katie and his ex-wife Jessica from a gang that wants the money robbed from the bank. But who can be trusted?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wheelman-Movie-Poster.jpg",
    imdb_id: "tt5723286",
    imdb_rating: 6.4,
    runtime: 82,
    language: "English",
    ytid: "38rOdku5Voc",
  },
  {
    Title: "Voyeur",
    fulltitle: "Voyeur (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      'Journalism icon Gay Talese reports on Gerald Foos, the owner of a Colorado motel, who allegedly secretly watched his guests with the aid of specially designed ceiling vents, peering down from an "observation platform" he built in the motel\'s attic.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Voyeur-Movie-Poster.jpg",
    imdb_id: "tt7588790",
    imdb_rating: 6.2,
    runtime: 96,
    language: "English",
    ytid: "kTAYqsT05Dc",
  },
  {
    Title: "The Great Invisible",
    fulltitle: "The Great Invisible (2014)",
    movie_year: 2014,
    Categories: "Documentary",
    summary:
      'On April 20, 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico. It killed 11 workers and caused the worst oil spill in American history. The explosion still haunts the lives of those most intimately affected, though the story has long ago faded from the front page. At once a fascinating corporate thriller, a heartbreaking human drama and a peek inside the walls of the secretive oil industry, "The Great Invisible" is the first documentary feature to go beyond the media coverage to examine the crisis in depth through the eyes of oil executives, survivors and Gulf Coast residents who experienced it first-hand and then were left to pick up the pieces while the world moved on.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Great-Invisible-Movie-Poster.jpg",
    imdb_id: "tt3567200",
    imdb_rating: 6.6,
    runtime: 92,
    language: "English",
    ytid: "sv9Xm1WsIXA",
  },

  {
    Title: "The Meyerowitz Stories",
    fulltitle: "The Meyerowitz Stories (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "An estranged family gathers together in New York for an event celebrating the artistic work of their father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Meyerowitz-Stories-Movie-Poster.jpg",
    imdb_id: "tt5536736",
    imdb_rating: 7,
    runtime: 112,
    language: "English",
    ytid: "8zShjmv0Vg4",
  },
  {
    Title: "Our Souls at Night",
    fulltitle: "Our Souls at Night (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "In Holt, a small Colorado town, Addie Moore (Jane Fonda) pays an unexpected visit to a neighbor, Louis Waters (Robert Redford). Her husband died years ago, as did his wife, and in such a small town they'd been neighbors for decades, but had little contact. Their children (Matthias Schoenaerts and Judy Greer) live far away and they are all alone in their big houses. Addie seeks to establish a connection, and make the most of the rest of the time they have.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Our-Souls-at-Night-Movie-Poster.jpg",
    imdb_id: "tt5034266",
    imdb_rating: 6.9,
    runtime: 103,
    language: "English",
    ytid: "lci71HjGvaM",
  },
  {
    Title: "Cuba and the Cameraman",
    fulltitle: "Cuba and the Cameraman (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Life in Cuba for three struggling families over the course of 45 years, from the cautious optimism of the early 1970s to the harrowing 1990s after the fall of the Soviet Union and the 2016 death of Fidel Castro.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Cuba-and-the-Cameraman-Movie-Poster.jpg",
    imdb_id: "tt7320560",
    imdb_rating: 8.2,
    runtime: 113,
    language: "English",
    ytid: "lsZ8hDutkeM",
  },
  {
    Title: "Catching the Sun",
    fulltitle: "Catching the Sun (2015)",
    movie_year: 2015,
    Categories: "Documentary|Drama|History|News",
    summary:
      "Through the stories of workers and entrepreneurs in the U.S. and China, Catching the Sun captures the global race to lead the clean energy future. Over the course of a solar jobs training program, Catching the Sun follows the hope and heartbreak of unemployed American workers seeking jobs in the solar industry. With countries like China investing in innovative technologies and capitalizing on this trillion-dollar opportunity, Catching the Sun tells the story of the global energy transition from the perspective of workers and entrepreneurs building solutions to income inequality and climate change with their own hands. Their successes and failures speak to one of the biggest questions of our time: will the U.S. actually be able to build a clean energy economy?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Catching-the-Sun-Movie-Poster.jpg",
    imdb_id: "tt1698654",
    imdb_rating: 7,
    runtime: 75,
    language: "English",
    ytid: "NjTi1j4enl4",
  },

  {
    Title: "1922",
    fulltitle: "1922 (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      'Featuring shades of Edgar Allen Poe\'s ["A Tell-tale Heart" and] "The Black Cat", 1922, with a Bonny and Clyde sub-plot, based on the Stephen King novella of the same name, centers on simple but proud farmer, Wilfred James, who, with his young son, murders his wife to gain ownership of her inherited land. Shortly after, however, strange and supernatural occurrences begin to plague both James and his farm. Is it just simple bad luck, or is it the work of something much more sinister?',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/1922-Movie-Poster.jpg",
    imdb_id: "tt6214928",
    imdb_rating: 6.3,
    runtime: 102,
    language: "English",
    ytid: "3E_fT0aTsjI",
  },
  {
    Title: "Bright",
    fulltitle: "Bright (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Fantasy|Thriller",
    summary:
      "In Los Angeles, humans live with orcs and elves in a world where fantasy creatures do exist. LAPD police officer Dayl Ward is the first human cop having the orc police officer Nick Jakoby as a partner. When Ward is shot by an orc and Jakoby does not capture the shooter, he questions whether Jakoby lets the fellow orc escape. During a patrol, Ward and Jakoby arrest a man that tells that there is a prophecy and Ward is blessed. Meanwhile, Internal Affairs press Ward to find the truth about the escape of the shooter so that they can fire Jakoby. The magic department of the FBI interrogates the man that belongs to the terrorist Shield of Light group which protects brights so that they can prepare for the return of the Dark Lord that will destroy the world. Ward and Jakoby are summoned to attend a disturbance and they stumble upon a Shield of Light safe-house where they arrest the elf Tikka and bag her magic wand. Soon they learn that Tikka is hunted down by the evil and powerful rogue elf...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bright-Movie-Poster.jpg",
    imdb_id: "tt5519340",
    imdb_rating: 6.4,
    runtime: 117,
    language: "English",
    ytid: "6EZCBSsBxko",
  },
  {
    Title: "Thor: Ragnarok",
    fulltitle: "Thor: Ragnarok (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Fantasy|Sci-Fi",
    summary:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thor-Ragnarok-Movie-Poster.jpg",
    imdb_id: "tt3501632",
    imdb_rating: 7.9,
    runtime: 130,
    language: "English",
    ytid: "ue80QwXMRHg",
  },

  {
    Title: "Sweet Virginia",
    fulltitle: "Sweet Virginia (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "A former rodeo star, with a small time life, unknowingly starts a rapport with a young man who is responsible for the violence that has suddenly gripped his small town. Every character from his loved ones to his business patrons, plays a part in the unravelling of this community. Our aged hero must face his relationships of past and present to come up against this unpredictable predator.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sweet-Virginia-Movie-Poster.jpg",
    imdb_id: "tt2582498",
    imdb_rating: 6.1,
    runtime: 93,
    language: "English",
    ytid: "SqZu5uxqLUE",
  },
  {
    Title: "LBJ",
    fulltitle: "LBJ (2016)",
    movie_year: 2016,
    Categories: "Biography|Drama",
    summary:
      "LBJ centers on the political upheaval that Vice President Johnson faced when he was thrust into the presidency at the hands of an assassin's bullet in November 1963. With political battles on both sides of the aisle, Johnson struggles to heal a nation and secure his presidency by passing Kennedy's historic Civil Rights Act.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/LBJ-Movie-Poster.jpg",
    imdb_id: "tt4778988",
    imdb_rating: 6.3,
    runtime: 98,
    language: "English",
    ytid: "xrnEp8WLH0g",
  },
  {
    Title: "Almost Friends",
    fulltitle: "Almost Friends (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Charlie is an unmotivated man in his mid 20s still living at home with his mother and stepfather who falls for a young woman who has a serious boyfriend.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Almost-Friends-Movie-Poster.jpg",
    imdb_id: "tt4955566",
    imdb_rating: 6.1,
    runtime: 101,
    language: "English",
    ytid: "6WOJp7yoTnk",
  },

  {
    Title: "Last Flag Flying",
    fulltitle: "Last Flag Flying (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama|War",
    summary:
      'In 2003, 30 years after they served together in the Vietnam War, former Navy Hospital Corpsman Larry "Doc" Shepherd re-unites with ex-Marines Sal and Mueller on a different type of mission: to bury Doc\'s son, a young Marine killed in the Iraq War. Doc decides to forgo burial at Arlington Cemetery and, with the help of his old buddies, takes the casket on a bittersweet trip up the East Coast to his home in suburban New Hampshire.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Last-Flag-Flying-Movie-Poster.jpg",
    imdb_id: "tt6018306",
    imdb_rating: 6.9,
    runtime: 125,
    language: "English",
    ytid: "VmS4lTZ34uk",
  },
  {
    Title: "The Killing of a Sacred Deer",
    fulltitle: "The Killing of a Sacred Deer (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Mystery|Thriller",
    summary:
      "After the untimely death of 16-year-old Martin's father on the operating table, little by little, a deep and empathetic bond begins to form between him and the respected cardiothoracic surgeon, Dr Steven Murphy. At first, expensive gifts and then an invitation for dinner will soon earn the orphaned teenager the approval of Dr Steven's perfect family, even though right from the start, a vague, yet unnerving feeling overshadows Martin's honest intent. And then, unexpectedly, the idyllic family is smitten by a fierce and pitiless punishment, while at the same time, everything will start falling apart as the innocents have to suffer. In the end, as the sins of one burden the entire family, only an unimaginable and unendurable decision that demands a pure sacrifice can purge the soul. But to find catharsis, one must first admit the sin.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Killing-of-a-Sacred-Deer-Movie-Poster.jpg",
    imdb_id: "tt5715874",
    imdb_rating: 7.1,
    runtime: 121,
    language: "English",
    ytid: "NHF6UhYyZNc",
  },
  {
    Title: "The Games of the V Olympiad Stockholm, 1912",
    fulltitle: "The Games of the V Olympiad Stockholm, 1912 (2017)",
    movie_year: 2017,
    Categories: "Documentary|Sport",
    summary:
      "Using the surviving film materials from the Olympic Games held in Stockholm 1912 created at the time by a single production company, Svensk-Amerikanska Filmkompaniet these images, often misunderstood and consequently misused as historical records The production undertook a scene-by-scene analysis of each surviving shot using historical records to reconstruct a chronological sequence of images that would tell the story of these Olympic Games. After 4K digital scanning in Burbank , CA by Warner Bros. Motion Picture Imaging Chris Rodmell edited the material into a new chronological record of events from over a century before. The creation and addition of intertitles with newly written text, allows us to finally and accurately contextualize the images. The Criterion Blu-Ray edition comes with a musical accompaniment by Donald Sosin, thus brings the second dimension to what is a true testament to the technical quality of the original materials and the skillfulness of those who captured ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Games-of-the-V-Olympiad-Stockholm-1912-Movie-Poster.jpg",
    imdb_id: "tt7241484",
    imdb_rating: 6.3,
    runtime: 170,
    language: "English",
    ytid: "-IGp6aS4y6E",
  },
  {
    Title: "Chasing Great",
    fulltitle: "Chasing Great (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Drama|Sport",
    summary:
      "All Black captain Richie McCaw has lived his dream with characteristic precision and calculated determination. He's 34 and perhaps the best rugby player ever. But the dream is almost over. He is old by professional sport standards and everyone is asking when he's going to retire. Before his career ends Richie McCaw sets his sights on a risk-all attempt to win the Rugby World Cup back to back. No team has won it a second time in a row. No captain has won it twice. He will either end his career on an impossibly high note or take a nation's dreams down with him. Chasing Great follows Richie McCaw through his final season as he attempts to captain the All Blacks to the first ever-back-to back World Cup win. Until now Richie McCaw's achievements have been well documented, but little is known about the man himself. He has never courted the media and remains intensely private. Chasing Great takes the audience inside his world for the first time and what emerges is a very personal insight ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Great-Movie-Poster.jpg",
    imdb_id: "tt5722234",
    imdb_rating: 7.2,
    runtime: 105,
    language: "English",
    ytid: "zG7qmUYqqt8",
  },
  {
    Title: "Thank You for Your Service",
    fulltitle: "Thank You for Your Service (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|War",
    summary:
      "DreamWorks Pictures' Thank You for Your Service follows a group of U.S. soldiers returning from Iraq who struggle to integrate back into family and civilian life, while living with the memory of a war that threatens to destroy them long after they've left the battlefield. Starring an ensemble cast led by Miles Teller, Haley Bennett, Joe Cole, Amy Schumer, Beulah Koale, Scott Haze, Keisha Castle-Hughes, Brad Beyer, Omar J. Dorsey and Jayson Warner Smith, the drama is based on the bestselling book by Pulitzer Prize-winning reporter and author David Finkel. Jason Hall, who wrote the screenplay of American Sniper, makes his directorial debut with Thank You for Your Service and also serves as its screenwriter. Jon Kilik (The Hunger Games series, Babel) produces the film, while Ann Ruark (Biutiful) and Jane Evans (Sin City) executive produces.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thank-You-for-Your-Service-Movie-Poster.jpg",
    imdb_id: "tt2776878",
    imdb_rating: 6.5,
    runtime: 109,
    language: "English",
    ytid: "GTl5SHYJxz4",
  },
  {
    Title: "Professor Marston and the Wonder Women",
    fulltitle: "Professor Marston and the Wonder Women (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Details the unconventional life of Dr. William Marston, the Harvard psychologist and inventor who helped invent the modern lie detector test and created Wonder Woman in 1941. Marston was in a polyamorous relationship with his wife Elizabeth, a psychologist and inventor in her own right, and Olive Byrne, a former student who became an academic. This relationship was key to the creation of Wonder Woman, as Elizabeth and Olive's feminist ideals were ingrained in the character from her creation. Marston died of skin cancer in 1947, but Elizabeth and Olive remained a couple and raised their and Marston's children together. The film is said to focus on how Marston dealt with the controversy surrounding Wonder Woman's creation.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Professor-Marston-and-the-Wonder-Women-Movie-Poster.jpg",
    imdb_id: "tt6133130",
    imdb_rating: 7.1,
    runtime: 108,
    language: "English",
    ytid: "r991pr4Fohk",
  },
  {
    Title: "Goodbye Christopher Robin",
    fulltitle: "Goodbye Christopher Robin (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Family|History",
    summary:
      "A rare glimpse into the relationship between beloved children's author A. A. Milne (Domhnall Gleeson) and his son Christopher Robin, whose toys inspired the magical world of Winnie the Pooh. Along with his mother Daphne (Margot Robbie), and his nanny Olive, Christopher Robin and his family are swept up in the international success of the books; the enchanting tales bringing hope and comfort to England after the First World War. But with the eyes of the world on Christopher Robin, what will the cost be to the family?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Goodbye-Christopher-Robin-Movie-Poster.jpg",
    imdb_id: "tt1653665",
    imdb_rating: 7.1,
    runtime: 107,
    language: "English",
    ytid: "uQq3aFSijRg",
  },

  {
    Title: "Happy Death Day",
    fulltitle: "Happy Death Day (2017)",
    movie_year: 2017,
    Categories: "Horror|Mystery|Thriller",
    summary:
      "A teenage girl, trying to enjoy her birthday, soon realizes that this is her final one. That is, if she can figure out who her killer is. She must relive that day, over and over again, dying in a different way each time. Can she solve her own murder?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Happy-Death-Day-Movie-Poster.jpg",
    imdb_id: "tt5308322",
    imdb_rating: 6.5,
    runtime: 96,
    language: "English",
    ytid: "1NTaDm3atkc",
  },
  {
    Title: "Blade Runner 2049",
    fulltitle: "Blade Runner 2049 (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Sci-Fi|Thriller",
    summary:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blade-Runner-2049-Movie-Poster.jpg",
    imdb_id: "tt1856101",
    imdb_rating: 8.1,
    runtime: 164,
    language: "English",
    ytid: "gCcx85zbxz4",
  },
  {
    Title: "My Little Pony: The Movie",
    fulltitle: "My Little Pony: The Movie (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "After a dark force conquers Canterlot, the Mane 6 - Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy, and Rarity - embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship to save their homeland.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Little-Pony-The-Movie-Movie-Poster.jpg",
    imdb_id: "tt4131800",
    imdb_rating: 6.2,
    runtime: 99,
    language: "English",
    ytid: "kIv_ConaZ1c",
  },
  {
    Title: "The Foreigner",
    fulltitle: "The Foreigner (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "The story of humble London businessman Quan (Chan), whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love - his teenage daughter - is taken from him in a senseless act of politically-motivated terrorism. In his relentless search for the identity of the terrorists, Quan is forced into a cat- and-mouse conflict with a Irish government official (Brosnan), whose own past may hold clues to the identities of the elusive killers.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Foreigner-Movie-Poster.jpg",
    imdb_id: "tt1615160",
    imdb_rating: 7,
    runtime: 113,
    language: "English",
    ytid: "33iuQu3UtjI",
  },
  {
    Title: "Marshall",
    fulltitle: "Marshall (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "In 1940, Thurgood Marshall is a young lawyer for the NAACP who criss-crosses the country defending innocent African-Americans from unjust indictments in court. His latest case is in Bridgeport, Connecticut where an African-American chauffeur is accused of rape of a wealthy white society woman. To admit Marshall into the local Bar, insurance lawyer Sam Friedman is picked over his objections to do introductions in court. However, Friedman's commitment changes drastically when the racist judge forbids Marshall to speak in court, forcing Friedman to act as lead counsel. Now in an intolerable situation for the pair, Marshall must guide his new compatriot through this criminal trial even as Friedman endures not only this unfamiliar area of law, but also the bigoted pressure he now must share. However, the case proves more complex than either anticipates with unexpected twists and turns even as it becomes a vital one that would define two careers as well as the fight for justice in America.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Marshall-Movie-Poster.jpg",
    imdb_id: "tt5301662",
    imdb_rating: 7.2,
    runtime: 118,
    language: "English",
    ytid: "IfvzEXhhWNk",
  },
  {
    Title: "Rebel in the Rye",
    fulltitle: "Rebel in the Rye (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Romance|War",
    summary:
      'The life of celebrated but reclusive author, J.D. Salinger, who gained worldwide fame with the publication of his novel, "The Catcher in the Rye".',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Rebel-in-the-Rye-Movie-Poster.jpg",
    imdb_id: "tt4986134",
    imdb_rating: 6.6,
    runtime: 106,
    language: "English",
    ytid: "VWRhXMMb7CY",
  },
  {
    Title: "Brawl in Cell Block 99",
    fulltitle: "Brawl in Cell Block 99 (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "Bradley Thomas is a hard working man. After him and his wife's miscarriage they admit the spark isn't there anymore and decide to have a baby. After being fired from his job, he turns to his friend who hires him as a drug dealer. A trade goes bad and he ends up in prison, the only problem is that a gang has kidnapped his wife and they will do an experimental operation on the baby unless Thomas kills one of the inmates in cell block 99. Bradley will not stop at anything until his wife is safe again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Brawl-in-Cell-Block-99-Movie-Poster.jpg",
    imdb_id: "tt5657856",
    imdb_rating: 7.2,
    runtime: 132,
    language: "English",
    ytid: "7FnAhrJDTqs",
  },
  {
    Title: "Chasing Trane: The John Coltrane Documentary",
    fulltitle: "Chasing Trane: The John Coltrane Documentary (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Music",
    summary:
      "CHASING TRANE is the definitive documentary film about an outside-the-box thinker with extraordinary talent whose boundary-shattering music continues to impact and influence people around the world. This smart, passionate, thought-provoking and uplifting documentary is for anyone who appreciates the power of music to entertain, inspire and transform. Written and directed by critically-acclaimed documentary filmmaker John Scheinfeld (The U.S. vs. John Lennon and Who Is Harry Nilsson...?) the film is produced with the full participation of the Coltrane family and the support of the record labels that collectively own the Coltrane catalog. Scheinfeld brings his strong story-telling skills to the creation of a rich, textured and compelling narrative that takes the audience to unexpected places. Set against the social, political and cultural landscape of the times, CHASING TRANE brings John Coltrane to life as a fully dimensional being, inviting the audience to engage with Coltrane the man...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Trane-The-John-Coltrane-Documentary-Movie-Poster.jpg",
    imdb_id: "tt4287434",
    imdb_rating: 7.3,
    runtime: 99,
    language: "English",
    ytid: "LujRZj2nJTg",
  },
  {
    Title: "Mark Felt: The Man Who Brought Down the White House",
    fulltitle: "Mark Felt: The Man Who Brought Down the White House (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History|Thriller",
    summary:
      'The story of Mark Felt, who under the name "Deep Throat" helped journalists Bob Woodward and Carl Bernstein uncover the Watergate scandal in 1972.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mark-Felt-The-Man-Who-Brought-Down-the-White-House-Movie-Poster.jpg",
    imdb_id: "tt5175450",
    imdb_rating: 6.4,
    runtime: 103,
    language: "English",
    ytid: "iFpuXxM4tzE",
  },
  {
    Title: "Battle of the Sexes",
    fulltitle: "Battle of the Sexes (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama|Sport",
    summary:
      "In the wake of the sexual revolution and the rise of the women's movement, the 1973 tennis match between women's world champion Billie Jean King (Emma Stone) and ex-men's-champ and serial hustler Bobby Riggs (Steve Carell) was billed as the BATTLE OF THE SEXES and became one of the most watched televised sports events of all time, reaching 90 million viewers around the world. As the rivalry between King and Riggs kicked into high gear, off-court each was fighting more personal and complex battles. The fiercely private King was not only championing for equality, but also struggling to come to terms with her own sexuality, as her friendship with Marilyn Barnett (Andrea Riseborough) developed. And Riggs, one of the first self-made media-age celebrities, wrestled with his gambling demons, at the expense of his family and wife Priscilla (Elisabeth Shue). Together, Billie and Bobby served up a cultural spectacle that resonated far beyond the tennis court, sparking discussions in bedrooms ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Battle-of-the-Sexes-Movie-Poster.jpg",
    imdb_id: "tt4622512",
    imdb_rating: 6.8,
    runtime: 121,
    language: "English",
    ytid: "5AWP1K7FaFI",
  },

  {
    Title: "Brad's Status",
    fulltitle: "Brad's Status (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama|Music",
    summary:
      "A father takes his son to tour colleges on the East Coast and meets up with an old friend who makes him feel inferior about his life's choices.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Brads-Status-Movie-Poster.jpg",
    imdb_id: "tt5884230",
    imdb_rating: 6.5,
    runtime: 102,
    language: "English",
    ytid: "22w8T9K8iRU",
  },
  {
    Title: "Breathe",
    fulltitle: "Breathe (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Romance",
    summary:
      "When Robin is struck down by polio at the age of 28, he is confined to a hospital bed and given only a few months to live. With the help of Diana's twin brothers (Tom Hollander) and the groundbreaking ideas of inventor Teddy Hall (Hugh Bonneville), Robin and Diana dare to escape the hospital ward to seek out a full and passionate life together - raising their young son, traveling and devoting their lives to helping other polio patients.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Breathe-Movie-Poster.jpg",
    imdb_id: "tt5716464",
    imdb_rating: 7.1,
    runtime: 118,
    language: "English",
    ytid: "7_YnYrLfjxA",
  },
  {
    Title: "City of Ghosts",
    fulltitle: "City of Ghosts (2017)",
    movie_year: 2017,
    Categories: "Documentary|War",
    summary:
      'A documentary that follows the efforts of "Raqqa Is Being Slaughtered Silently," a handful of anonymous activists who banded together after their homeland was taken over by ISIS in 2014. With deeply personal access, this is the story of a brave group of citizen journalists as they face the realities of life undercover, on the run, and in exile, risking their lives to stand up against one of the greatest evils in the world today.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/City-of-Ghosts-Movie-Poster.jpg",
    imdb_id: "tt6333056",
    imdb_rating: 7.5,
    runtime: 92,
    language: "English",
    ytid: "jBeqGcMaC-A",
  },
  {
    Title: "It",
    fulltitle: "It (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Thriller",
    summary:
      "In the Town of Derry, the local kids are disappearing one by one, leaving behind bloody remains. In a place known as 'The Barrens', a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/It-Movie-Poster.jpg",
    imdb_id: "tt1396484",
    imdb_rating: 7.5,
    runtime: 135,
    language: "English",
    ytid: "FnCdOQsX5kc",
  },

  {
    Title: "California Typewriter",
    fulltitle: "California Typewriter (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "California Typewriter is a story about people whose lives are connected by typewriters. The film is a meditation on creativity and technology featuring Tom Hanks, John Mayer, Sam Shepard, David McCullough and others.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/California-Typewriter-Movie-Poster.jpg",
    imdb_id: "tt5966990",
    imdb_rating: 7.2,
    runtime: 103,
    language: "English",
    ytid: "AgJ3kSOHMiU",
  },

  {
    Title: "Stronger",
    fulltitle: "Stronger (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Stronger is the inspiring real life story of Jeff Bauman, an ordinary man who captured the hearts of his city and the world to become a symbol of hope after surviving the 2013 Boston Marathon bombing.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Stronger-Movie-Poster.jpg",
    imdb_id: "tt3881784",
    imdb_rating: 7,
    runtime: 119,
    language: "English",
    ytid: "I6MN0QfQx7I",
  },
  {
    Title: "Victoria & Abdul",
    fulltitle: "Victoria & Abdul (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History",
    summary:
      "Abdul Karim arrives from India to participate in Queen Victoria's golden jubilee. The young clerk is surprised to find favor with the queen herself. As Victoria questions the constrictions of her long-held position, the two forge an unlikely and devoted alliance that her household and inner circle try to destroy. As their friendship deepens, the queen begins to see a changing world through new eyes, joyfully reclaiming her humanity.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Victoria-Abdul-Movie-Poster.jpg",
    imdb_id: "tt5816682",
    imdb_rating: 6.8,
    runtime: 111,
    language: "English",
    ytid: "mtC8jNHSxgQ",
  },
  {
    Title: "Mother!",
    fulltitle: "Mother! (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Mystery",
    summary:
      "Amidst a wild flat meadow encircled by an Edenic lush forest, a couple have cocooned themselves in a secluded mansion that was not so long ago burned to the ground, devotedly restored by the supportive wife. Within this safe environment, the once famous middle-aged poet husband is desirous of creating his magnum opus; however, he seems unable to break out of the persistent creative rut that haunts him. Then, unexpectedly, a knock at the door, the sudden arrival of a cryptic late-night visitor and his intrusive wife will stimulate the writer's stagnant imagination. Little by little, much to the perplexed wife's surprise, the more chaos he lets in their haven, the better for his punctured male ego. In the end, will this incremental mess blemish, irreparably, the couple's inviolable sanctuary?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mother-Movie-Poster.jpg",
    imdb_id: "tt5109784",
    imdb_rating: 6.7,
    runtime: 121,
    language: "English",
    ytid: "XpICoc65uh0",
  },

  {
    Title: "Dunkirk",
    fulltitle: "Dunkirk (2017)",
    movie_year: 2017,
    Categories: "Action|Drama|History|Thriller|War",
    summary:
      "Evacuation of Allied soldiers from the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dunkirk-Movie-Poster.jpg",
    imdb_id: "tt5013056",
    imdb_rating: 8,
    runtime: 106,
    language: "English",
    ytid: "F-eMt3SrfFU",
  },
  {
    Title: "American Made",
    fulltitle: "American Made (2017)",
    movie_year: 2017,
    Categories: "Action|Biography|Comedy|Crime|Drama",
    summary:
      "Barry Seal was just an ordinary pilot who worked for TWA before he was recruited by the CIA in 1978. His work in South America eventually caught the eye of the Medellín Cartel, associated with Pablo Escobar, who needed a man with his skill set. Barry became a drug trafficker, gun smuggler and money launderer. Soon acquiring the title, 'The gringo that always delivers'.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/American-Made-Movie-Poster.jpg",
    imdb_id: "tt3532216",
    imdb_rating: 7.2,
    runtime: 0,
    language: "English",
    ytid: "AEBIJRAkujM",
  },
  {
    Title: "Ferrari: Race to Immortality",
    fulltitle: "Ferrari: Race to Immortality (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "The 1950's - the iconic Scuderia Ferrari battle to stay on top in one of the deadliest decades in motor racing history. Cars and drivers were pushed to their limits, and the competition for the world championship meant racing on a knife edge where one mistake could take a life. At the centre of it all was Enzo Ferrari, a towering figure in motor racing who was driven to win at any cost. Amidst the stiff competition within his Ferrari team, two of its British stars, Peter Collins and Mike Hawthorn, put friendship first and the championship second. Ferrari: Race to Immortality tells the story of the loves and losses, triumphs and tragedy of Ferrari's most celebrated drivers in an era where they lived la dolce vita during the week and it was win or die on any given Sunday.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferrari-Race-to-Immortality-Movie-Poster.jpg",
    imdb_id: "tt6622186",
    imdb_rating: 6.7,
    runtime: 91,
    language: "English",
    ytid: "g3e5hGgeNoQ",
  },
  {
    Title: "The Party",
    fulltitle: "The Party (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "To celebrate her long-awaited prestigious post as a Shadow Minister for Health and, hopefully, the stepping stone to party leadership, the newly-appointed British opposition politician, Janet, is throwing a party for friends at her London flat. Of course, in this select and intimate soirée, apart from Bill--Janet's self-denying academic husband--a motley crew of elite hand-picked guests have been invited: There's April, the sourly cynical American best friend; her unlikely German husband, Gottfried; there's also Jinny and Martha; and finally, Tom, the smooth banker in the impeccable suit. But inevitably, before dinner is served, the upbeat ambience will shatter to pieces, as festering secrets will start surfacing in this perfect domestic war-zone. Undoubtedly, after this night, things will never be the same again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Party-Movie-Poster.jpg",
    imdb_id: "tt5814592",
    imdb_rating: 6.7,
    runtime: 71,
    language: "English",
    ytid: "uamEr9pCxl8",
  },
  {
    Title: "Detroit",
    fulltitle: "Detroit (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|History|Thriller",
    summary:
      "A police raid in Detroit in 1967 results in one of the largest RACE riots in United States history. The story is centred around the Algiers Motel incident, which occurred in Detroit, Michigan on July 25, 1967, during the racially charged 12th Street Riot. It involves the death of three black men and the brutal beatings of nine other people: seven black men and two white women.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Detroit-Movie-Poster.jpg",
    imdb_id: "tt5390504",
    imdb_rating: 7.4,
    runtime: 143,
    language: "English",
    ytid: "d5h7Kgo-zeI",
  },
  {
    Title: "Kingsman: The Golden Circle",
    fulltitle: "Kingsman: The Golden Circle (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy",
    summary:
      "After the Kingsman headquarters are blown up by a psychotic criminal named Poppy Adams, the surviving agents find their way to an allied secret organisation based in Kentucky, named Statesman. The two agencies must now work together in order to save the world and take down the so called 'Golden Circle'.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kingsman-The-Golden-Circle-Movie-Poster.jpg",
    imdb_id: "tt4649466",
    imdb_rating: 6.8,
    runtime: 141,
    language: "English",
    ytid: "6Nxc-3WpMbg",
  },
  {
    Title: "Better Watch Out",
    fulltitle: "Better Watch Out (2016)",
    movie_year: 2016,
    Categories: "Comedy|Horror|Thriller",
    summary:
      "When you think the suburbs, you think safety, but this holiday night the suburbs are anything but safe. Ashley (Olivia DeJonge) thought this babysitting job was going to be an easy night, but the night takes a turn when dangerous intruders break in and terrorize her and the twelve-year-old boy, Luke (Levi Miller), she's caring for. Ashley defends her charge to the best of her ability only to discover this is no normal home invasion.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Better-Watch-Out-Movie-Poster.jpg",
    imdb_id: "tt4443658",
    imdb_rating: 6.5,
    runtime: 89,
    language: "English",
    ytid: "1BDxAsaoM1Y",
  },

  {
    Title: "1 Buck",
    fulltitle: "1 Buck (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "Shifting from one pocket to another, from one man's drama to another, a lowly dollar bill, 'one buck' takes us on an odyssey through the heart of a forgotten town in Louisiana.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/1-Buck-Movie-Poster.jpg",
    imdb_id: "tt4685428",
    imdb_rating: 6,
    runtime: 90,
    language: "English",
    ytid: "PyJhVOZVqRQ",
  },
  {
    Title: "Gook",
    fulltitle: "Gook (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Eli and Daniel, two Korean American brothers, own a struggling shoe store and have an unlikely friendship with Kamilla, a street wise 11-year-old African American girl. Kamilla ditches school, Eli stresses about the store, and Daniel tries to have a good time. It's just another typical day at the store until the Rodney King verdict is read and riots break out. With the chaos moving towards them, the trio is forced to defend the store while contemplating the future of their own personal dreams and the true meaning of family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gook-Movie-Poster.jpg",
    imdb_id: "tt6057032",
    imdb_rating: 7.1,
    runtime: 94,
    language: "English",
    ytid: "6Duh20o-qWs",
  },

  {
    Title: "Love Finds You in Valentine",
    fulltitle: "Love Finds You in Valentine (2016)",
    movie_year: 2016,
    Categories: "Drama|Romance",
    summary:
      "Kennedy Blaine, a Californian girl, inherits a ranch in the small town of Valentine in Nebraska. Before she sells the property, she decides to spend the summer in her house and learn more about her family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Love-Finds-You-in-Valentine-Movie-Poster.jpg",
    imdb_id: "tt4769430",
    imdb_rating: 6.4,
    runtime: 87,
    language: "English",
    ytid: "UHP3si-jEg4",
  },
  {
    Title: "Animal Factory",
    fulltitle: "Animal Factory (2000)",
    movie_year: 2000,
    Categories: "Crime|Drama",
    summary:
      "Ron, who's young, slight, and privileged, is sentenced to prison on marijuana charges. For whatever reason, he brings out paternal feelings in an 18-year prison veteran, Earl Copan, who takes Ron under his wing. The film explores the nature of that relationship, Ron's part in Earl's gang, and the way Ron deals with aggressive cons intent on assault and rape. There's casual racism, too, in the prisoners and the guards, a strike called by Black prisoners, and the nearly omnipresence of hard drugs. Ron's lawyer is working on getting Ron out quickly, Earl has a shot at parole, and death seems to be waiting in the next cell. Will prison turn Ron into an animal?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Animal-Factory-Movie-Poster.jpg",
    imdb_id: "tt0204137",
    imdb_rating: 6.6,
    runtime: 94,
    language: "English",
    ytid: "iR3pzkmJZ0c",
  },
  {
    Title: "All the King's Men",
    fulltitle: "All the King's Men (2006)",
    movie_year: 2006,
    Categories: "Drama|Thriller",
    summary:
      "In the 50's, in Louisiana, the smart populist, manipulative and wolf hick Willie Stark is elected governor with the support of the lower social classes. He joins a team composed of his bodyguard and friend Sugar Boy; the journalist from an aristocratic family Jack Burden; the lobbyist Tiny Duffy; and his mistress Sadie Burke, to face the opposition of the upper classes. When the influent Judge Irwin supports a group of politicians in their request of impeachment, Stark assigns Jack to find some dirtiness along the life of Irwin, leading to a tragedy in the end.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/All-the-Kings-Men-Movie-Poster.jpg",
    imdb_id: "tt0405676",
    imdb_rating: 6.2,
    runtime: 128,
    language: "English",
    ytid: "Ruq0GPvloVc",
  },
  {
    Title: "A Princess for Christmas",
    fulltitle: "A Princess for Christmas (2011)",
    movie_year: 2011,
    Categories: "Comedy|Drama|Family|Romance",
    summary:
      "Jules Daly is struggling to raise her orphaned niece and nephew (Maggie and Milo) alone, but it isn't easy after getting downsized out of her antique sales job while Milo rebels against the death of his parents through petty theft. With things looking bleak for Christmas, an English butler named Paisley arrives with an invitation for all to come see the kids' emotionally distant grandfather who lives in Castlebury Hall, somewhere near Liechtenstein. With nothing to hold them back, they go, but the grandfather - Edward, Duke of Castlebury - is rather cold over their visit to his castle. So is his other surviving son, Ashton, Prince of Castlebury. Before long, they're all having a good time and looking forward to hosting a Christmas Eve ball, but Jules overhears a conversation from which she draws a wrong conclusion.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/A-Princess-for-Christmas-Movie-Poster.jpg",
    imdb_id: "tt1083448",
    imdb_rating: 6.5,
    runtime: 91,
    language: "English",
    ytid: "ZuBu_CIjExg",
  },
  {
    Title: "Batman vs. Two-Face",
    fulltitle: "Batman vs. Two-Face (2017)",
    movie_year: 2017,
    Categories: "Action|Animation|Comedy",
    summary:
      "In Gotham City, a botched experiment by Professor Hugo Strange to extract the evil from Batman's rogues gallery would go disastrously wrong, leaving the noble District Attorney Harvey Dent horrifically scarred both physically and mentally as the dichotomous supervillain, Two-Face. Eventually, Dent is captured by the Dynamic Duo and is seemingly cured of his injuries to help him restart his life as a honest citizen. However, there is later a new wave of crimes by other Batman enemies that has the modus operandi of Two-Face, even while Dent still seems to be innocent. However, Robin, already jealous of Bruce's older friendship with Dent, is not so sure and the Duo has a rift as they disagree about their suspicions. Meanwhile, dark forces plan a horrific fate for Gotham City and Two-Face, or perhaps an impostor, somehow seems to be at the bottom of it.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Batman-vs.-Two-Face-Movie-Poster.jpg",
    imdb_id: "tt6142314",
    imdb_rating: 6.1,
    runtime: 72,
    language: "English",
    ytid: "5VD0kfTeznE",
  },
  {
    Title: "The Good Neighbor",
    fulltitle: "The Good Neighbor (2016)",
    movie_year: 2016,
    Categories: "Crime|Drama|Thriller",
    summary:
      "A pair of mischievous high school kids create the illusion of a haunting on an unsuspecting elderly neighbor while keeping his every reaction under surveillance. A series of coincidences leads to tragedy.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Good-Neighbor-Movie-Poster.jpg",
    imdb_id: "tt2262315",
    imdb_rating: 6.3,
    runtime: 98,
    language: "English",
    ytid: "wIXTB9wtqxA",
  },
  {
    Title: "The Snow Queen 3",
    fulltitle: "The Snow Queen 3 (2016)",
    movie_year: 2016,
    Categories: "Adventure|Animation|Comedy|Family|Sci-Fi",
    summary:
      "The rare gift of getting into all kinds of trouble is their family trait. What else can you expect from the ones raised among trolls in snowy lands? But now Kai and Gerda have grown up and entered a new stage - this time they are going to cause a global disaster...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Snow-Queen-3-Movie-Poster.jpg",
    imdb_id: "tt4685554",
    imdb_rating: 6.7,
    runtime: 80,
    language: "English",
    ytid: "tRK8PD6n5Ec",
  },
  {
    Title: "American Assassin",
    fulltitle: "American Assassin (2017)",
    movie_year: 2017,
    Categories: "Action|Thriller",
    summary:
      "Twenty three-year-old Mitch lost his parents to a tragic car accident at the age of fourteen, and his girlfriend to a terrorist attack just as they were engaged. Seeking revenge, he is enlisted by CIA Deputy Director Irene Kennedy as a black ops recruit. Kennedy then assigns Cold War veteran Stan Hurley to train Mitch. Together they will later on investigate a wave of apparently random attacks on military and civilian targets. The discovery of a pattern in the violence leads them to a joint mission with a lethal Turkish agent to stop a mysterious operative intent on starting a world war in the Middle East.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/American-Assassin-Movie-Poster.jpg",
    imdb_id: "tt1961175",
    imdb_rating: 6.2,
    runtime: 112,
    language: "English",
    ytid: "6yoEyzOkTOI",
  },
  {
    Title: "Kinky Boots",
    fulltitle: "Kinky Boots (2005)",
    movie_year: 2005,
    Categories: "Comedy|Drama|Music",
    summary:
      "Charles Price may have grown up with his father in the family shoe business, but he never thought that he would take his father's place. Yet, the untimely death of his father places him in that position, only to learn that Price and Sons Shoes is failing. While in despair at his failed attempts to save the business, Charles has a chance encounter with the flamboyant drag queen cabaret singer, Lola. Her complaints about the inadequate footwear for her work combined with one of Charles' ex-employees, Lauren, leads to a suggestion to change the product to create a desperate chance to save the business: make men's fetish footwear. Lola is convinced to be their footwear designer and the transition begins. Now this disparate lot must struggle at this unorthodox idea while dealing with both the prejudice of the staff, Lola's discomfort in the small town and the selfish manipulation of Charles' greedy fiance who cannot see the greater good in Charles' dream.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kinky-Boots-Movie-Poster.jpg",
    imdb_id: "tt0434124",
    imdb_rating: 7.1,
    runtime: 107,
    language: "English",
    ytid: "Ek7VcOkzzkM",
  },
  {
    Title: "Super Dark Times",
    fulltitle: "Super Dark Times (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "Teenagers Zach and Josh have been best friends their whole lives, but when a gruesome accident leads to a cover-up, the secret drives a wedge between them and propels them down a rabbit hole of escalating paranoia and violence.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Super-Dark-Times-Movie-Poster.jpg",
    imdb_id: "tt5112578",
    imdb_rating: 6.6,
    runtime: 100,
    language: "English",
    ytid: "qG0af8nliCE",
  },
  {
    Title: "Score: A Film Music Documentary",
    fulltitle: "Score: A Film Music Documentary (2016)",
    movie_year: 2016,
    Categories: "Documentary|Music",
    summary:
      "For a predominately visual medium like cinema, its musical component plays a vital role as well, especially its score. In that essential musical accompaniment, the soul of the film is expressed whether it be sweepingly majestic fanfares or delicate lyrical pieces. This documentary explores the artistic role of this special musical discipline that completes the cinematic artistic creation process and the artists who have devoted their careers to this contribution. We explore the form's history and examine the masters who defined it with their own distinctive artistic vision. In doing so, the various components of this delicate creative process are revealed as they create a musical compositional work that has inspired a popular appreciation of music in all its forms, which gave some old musical ways their own new lease on life.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Score-A-Film-Music-Documentary-Movie-Poster.jpg",
    imdb_id: "tt4207112",
    imdb_rating: 7.4,
    runtime: 93,
    language: "English",
    ytid: "pKNC3aqkRvY",
  },
  {
    Title: "Tulip Fever",
    fulltitle: "Tulip Fever (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      'In 17th Century Amsterdam, an orphaned girl Sophia (Alicia Vikander) is forcibly married to a rich and powerful merchant Cornelis Sandvoort (Christoph Waltz) - an unhappy "arrangement" that saves her from poverty. After her husband commissions a portrait, she begins a passionate affair with the painter Jan Van Loos (Dane DeHaan), a struggling young artist. Seeking to escape the merchant\'s ever-reaching grasp, the lovers risk everything and enter the frenzied tulip bulb market, with the hope that the right bulb will make a fortune and buy their freedom.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tulip-Fever-Movie-Poster.jpg",
    imdb_id: "tt0491203",
    imdb_rating: 6.2,
    runtime: 105,
    language: "English",
    ytid: "Thtm0jOZM54",
  },
  {
    Title: "Rememory",
    fulltitle: "Rememory (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Sci-Fi",
    summary:
      "Gordon Dunn, a famed scientific pioneer, is mysteriously found dead just after the unveiling of his newest work, a groundbreaking device able to extract, record and play a person's unfiltered memories. After his death, Gordon's reclusive wife, Carolyn, delves deeper into her own private world when a mysterious man shows up claiming to be from Gordon's past. With questionable motives he takes the machine and uses it to try and solve the mystery, beginning an investigation of memories that lead him down a path of guilt, grief, and betrayal to an unexpected answer.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Rememory-Movie-Poster.jpg",
    imdb_id: "tt2331047",
    imdb_rating: 6.2,
    runtime: 111,
    language: "English",
    ytid: "n6ihJIjVGLo",
  },
  {
    Title: "Logan Lucky",
    fulltitle: "Logan Lucky (2017)",
    movie_year: 2017,
    Categories: "Comedy|Crime|Drama",
    summary:
      "When Jimmy Logan (Channing Tatum) gets fired, he convinces his brother Clyde (Adam Driver) and sister Mellie (Riley Keough) to help him rob the Charlotte Motor Speedway during a NASCAR Race. But they will need the help of Joe Bang (Daniel Craig), a convicted safe-cracker who is currently doing time. All they have to do is break Joe out, blow the racetrack vault, get away with the cash, return Joe to prison, and get Jimmy to his daughter's beauty pageant on time. What could possibly go wrong? Well, there is the Logan family curse .",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Logan-Lucky-Movie-Poster.jpg",
    imdb_id: "tt5439796",
    imdb_rating: 7.1,
    runtime: 118,
    language: "English",
    ytid: "wsOIuzxMplA",
  },
  {
    Title: "The Hitman's Bodyguard",
    fulltitle: "The Hitman's Bodyguard (2017)",
    movie_year: 2017,
    Categories: "Action|Comedy|Thriller",
    summary:
      "With his reputation in tatters after a painfully unsuccessful delivery of a distinguished Japanese client, former triple-A executive protection agent, Michael Bryce, two long years after the disgraceful incident, is now reduced to a mere second-class bodyguard for hire. Under those circumstances, Bryce would do anything to prove his worth once again, and as a result, it won't be long before he accepts an offer from Interpol to escort the renowned international assassin Darius Kincaid from Manchester to the Hague. The task seems simple: Bryce only needs to transport the contract killer from point A to point B, nevertheless, Kincaid, as the only one with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator, is an obvious target, while the trip to the Netherlands is long and hazardous. Without a doubt, this is a race against the clock as the mismatched duo will have to put aside their grudges, in a non-stop concerto for bullets.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Hitmans-Bodyguard-Movie-Poster.jpg",
    imdb_id: "tt1959563",
    imdb_rating: 6.9,
    runtime: 118,
    language: "English",
    ytid: "IpKmt4MpctM",
  },
  {
    Title: "Valerian and the City of a Thousand Planets",
    fulltitle: "Valerian and the City of a Thousand Planets (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "In the Century XXVIII, the space station Alpha is a city where beings from different planets live together exchanging their knowledge and culture. Peace is granted by a human force, including Major Valerian and his partner Sergeant Laureline. They are assigned by the Defence Minister to retrieve the last species of converter in a dangerous mission. They succeed and back to Alpha, unknown humanoids abduct Commander Arun Filitt expecting to steal the converter. They head to a forbidden area that is infected but Valerian and Laureline follow them and disclose a hidden secret about the race and the infected area.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Valerian-and-the-City-of-a-Thousand-Planets-Movie-Poster.jpg",
    imdb_id: "tt2239822",
    imdb_rating: 6.5,
    runtime: 0,
    language: "English",
    ytid: "NNrK7xVG3PM",
  },
  {
    Title: "Beach Rats",
    fulltitle: "Beach Rats (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An aimless teenager on the outer edges of Brooklyn struggles to escape his bleak home life and navigate questions of self-identity, as he balances his time between his delinquent friends, a potential new girlfriend, and older men he meets online.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Beach-Rats-Movie-Poster.jpg",
    imdb_id: "tt6303866",
    imdb_rating: 6.5,
    runtime: 98,
    language: "English",
    ytid: "qMBqERvgrZc",
  },
  {
    Title: "Patti Cake$",
    fulltitle: "Patti Cake$ (2017)",
    movie_year: 2017,
    Categories: "Drama|Music",
    summary:
      "PATTI CAKE$ is centered on aspiring rapper Patricia Dombrowski, a.k.a. Killa P, a.k.a. Patti Cake$, who is fighting an unlikely quest for glory in her downtrodden hometown in New Jersey.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Patti-Cake-Movie-Poster.jpg",
    imdb_id: "tt6288250",
    imdb_rating: 6.6,
    runtime: 109,
    language: "English",
    ytid: "L-591Dqa48g",
  },
  {
    Title: "Patton Oswalt: Annihilation",
    fulltitle: "Patton Oswalt: Annihilation (2017)",
    movie_year: 2017,
    Categories: "Uncategorized",
    summary:
      "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Patton-Oswalt-Annihilation-Movie-Poster.jpg",
    imdb_id: "tt7026230",
    imdb_rating: 7.4,
    runtime: 66,
    language: "English",
    ytid: "4hZi5QaMBFc",
  },
  {
    Title: "And Then I Go",
    fulltitle: "And Then I Go (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/And-Then-I-Go-Movie-Poster.jpg",
    imdb_id: "tt2018111",
    imdb_rating: 7.6,
    runtime: 99,
    language: "English",
    ytid: "8CdIiD6-iF0",
  },
  {
    Title: "The Foster Boy",
    fulltitle: "The Foster Boy (2011)",
    movie_year: 2011,
    Categories: "Drama",
    summary:
      "The illegitimate orphan child, 12-year-old Max, is sold by the local minister for a basket of food to the Bösiger family, who own a mountain farm. Max' initial hope of finally finding a loving home is brutally shattered: The farmer and his wife treat Max like livestock, and their son Jacob humiliates and abuses him. Only the local teacher notices the child suffering on the farm.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Foster-Boy-Movie-Poster.jpg",
    imdb_id: "tt2057931",
    imdb_rating: 7.4,
    runtime: 107,
    language: "English",
    ytid: "E9Qv_XVJ-js",
  },
  {
    Title: "Forever My Girl",
    fulltitle: "Forever My Girl (2018)",
    movie_year: 2018,
    Categories: "Drama|Music|Romance",
    summary:
      "After being gone for a decade a country star returns home to the love he left behind.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Forever-My-Girl-Movie-Poster.jpg",
    imdb_id: "tt4103724",
    imdb_rating: 6.4,
    runtime: 108,
    language: "English",
    ytid: "3vqcMr1q5Uc",
  },
  {
    Title: "Tom Segura: Disgraceful",
    fulltitle: "Tom Segura: Disgraceful (2018)",
    movie_year: 2018,
    Categories: "Comedy|Documentary",
    summary:
      "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tom-Segura-Disgraceful-Movie-Poster.jpg",
    imdb_id: "tt7379330",
    imdb_rating: 7.5,
    runtime: 0,
    language: "English",
    ytid: "kYYINJM3lPA",
  },
  {
    Title: "The Secret Rules of Modern Living: Algorithms",
    fulltitle: "The Secret Rules of Modern Living: Algorithms (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "Professor Marcus du Sautoy demystifies the hidden world of algorithms and reveals where these 2,000-year-old problem solvers came from, how they work, and what they have achieved.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Secret-Rules-of-Modern-Living-Algorithms-Movie-Poster.jpg",
    imdb_id: "tt5818010",
    imdb_rating: 7.5,
    runtime: 58,
    language: "English",
    ytid: "hpyxmT6KSvw",
  },
  {
    Title: "Secrets in the Fall",
    fulltitle: "Secrets in the Fall (2015)",
    movie_year: 2015,
    Categories: "Family",
    summary:
      "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band together to re-claim their weekend and make it out of the woods before dark!",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Secrets-in-the-Fall-Movie-Poster.jpg",
    imdb_id: "tt2522908",
    imdb_rating: 7.3,
    runtime: 0,
    language: "English",
    ytid: "eMVw1pHVMAw",
  },
  {
    Title: "Suicide Squad: Hell to Pay",
    fulltitle: "Suicide Squad: Hell to Pay (2018)",
    movie_year: 2018,
    Categories: "Action|Animation",
    summary:
      "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Suicide-Squad-Hell-to-Pay-Movie-Poster.jpg",
    imdb_id: "tt7167602",
    imdb_rating: 7.2,
    runtime: 86,
    language: "English",
    ytid: "EPZZvk-wbGE",
  },
  {
    Title: "Wildling",
    fulltitle: "Wildling (2018)",
    movie_year: 2018,
    Categories: "Fantasy|Horror",
    summary:
      "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom, her childhood nightmares return with a vengeance, leading to the conclusion of a terrifying secret.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wildling-Movie-Poster.jpg",
    imdb_id: "tt5085924",
    imdb_rating: 6.1,
    runtime: 92,
    language: "English",
    ytid: "eyl1Wf90AgY",
  },
  {
    Title: "The Humanity Bureau",
    fulltitle: "The Humanity Bureau (2017)",
    movie_year: 2017,
    Categories: "Action|Sci-Fi",
    summary:
      "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Humanity-Bureau-Movie-Poster.jpg",
    imdb_id: "tt6143568",
    imdb_rating: 6.1,
    runtime: 95,
    language: "English",
    ytid: "kUH8JGhRzPY",
  },
  {
    Title: "Farewell Ferris Wheel",
    fulltitle: "Farewell Ferris Wheel (2016)",
    movie_year: 2016,
    Categories: "Documentary|Drama|News",
    summary:
      "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Farewell-Ferris-Wheel-Movie-Poster.jpg",
    imdb_id: "tt2349677",
    imdb_rating: 7.4,
    runtime: 72,
    language: "English",
    ytid: "-K2m6AKNB-g",
  },
  {
    Title: "Don't Talk to Irene",
    fulltitle: "Don't Talk to Irene (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      'Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don\'t need to be physically "perfect" to be perfectly AWESOME.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dont-Talk-to-Irene-Movie-Poster.jpg",
    imdb_id: "tt5030452",
    imdb_rating: 6.4,
    runtime: 90,
    language: "English",
    ytid: "lK48UxWuUho",
  },
  {
    Title: "Blood Road",
    fulltitle: "Blood Road (2017)",
    movie_year: 2017,
    Categories: "Documentary|History|Sport",
    summary:
      "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blood-Road-Movie-Poster.jpg",
    imdb_id: "tt6900092",
    imdb_rating: 6.9,
    runtime: 96,
    language: "English",
    ytid: "XCzVqiN950M",
  },
  {
    Title: "Andre the Giant",
    fulltitle: "Andre the Giant (2018)",
    movie_year: 2018,
    Categories: "Documentary",
    summary:
      "A look at the life and career of professional wrestler André Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Andre-the-Giant-Movie-Poster.jpg",
    imdb_id: "tt6543420",
    imdb_rating: 8.2,
    runtime: 85,
    language: "English",
    ytid: "f_jTeuajas0",
  },
  {
    Title: "Dead on Arrival",
    fulltitle: "Dead on Arrival (2017)",
    movie_year: 2017,
    Categories: "Thriller",
    summary:
      "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dead-on-Arrival-Movie-Poster.jpg",
    imdb_id: "tt5903088",
    imdb_rating: 6.9,
    runtime: 97,
    language: "English",
    ytid: "8jJ-kC-rq0Q",
  },
  {
    Title: "Big Time",
    fulltitle: "Big Time (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Bjarke Ingels started out as a young man dreaming of creating cartoons. Now, he has been named \"one of architecture's biggest innovators\" by The Wall Street Journal and one of The 100 Most Influential People on the planet by TIME Magazine. BIG TIME follows Bjarke during the course of 7 years (2009-2016), while he struggles to finish his biggest project so far. We are let into Bjarke's creative processes as well as the endless compromises that his work entails, and we are on the side when his personal life starts putting pressure on him, too. In addition to the recently opened architectural marvel VIA 57 West (625 West 57th Street), Bjarke Ingels' company Bjarke Ingels Group (BIG) was given the task of designing and building one of the skyscrapers which will replace Two World Trade Center in Manhattan. While Bjarke is creating these buildings, which will change the New York skyline, he is hit by health-related issues. The Film offers an intimate look into the innovative and ambitious ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Big-Time-Movie-Poster.jpg",
    imdb_id: "tt7630164",
    imdb_rating: 6.2,
    runtime: 93,
    language: "English",
    ytid: "VK0mGdMKMW4",
  },

  {
    Title: "Hostiles",
    fulltitle: "Hostiles (2017)",
    movie_year: 2017,
    Categories: "Adventure|Drama|Western",
    summary:
      "In 1892, after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero, Joseph Blocker, is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment in the feral American landscape is further complicated, when the widowed settler, Rosalie Quaid, is taken in by the band of soldiers, as aggressive packs of marauding Comanches who are still on the warpath, are thirsty for blood. In a territory crawling with hostiles, can the seasoned Captain do his duty one last time?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hostiles-Movie-Poster.jpg",
    imdb_id: "tt5478478",
    imdb_rating: 7.3,
    runtime: 134,
    language: "English",
    ytid: "1M5cj4UmscE",
  },
  {
    Title: "Maze Runner: The Death Cure",
    fulltitle: "Maze Runner: The Death Cure (2018)",
    movie_year: 2018,
    Categories: "Action|Sci-Fi|Thriller",
    summary:
      "In the epic finale to The Maze Runner Saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary last city, a WCKD controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get the answers to the questions the Gladers have been asking since they first arrived in the maze. Will Thomas and the crew make it out alive? Or will Ava Paige get her way?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Maze-Runner-The-Death-Cure-Movie-Poster.jpg",
    imdb_id: "tt4500922",
    imdb_rating: 6.5,
    runtime: 141,
    language: "English",
    ytid: "wnE_y4vN9nQ",
  },
  {
    Title: "Den of Thieves",
    fulltitle: "Den of Thieves (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank of downtown Los Angeles.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Den-of-Thieves-Movie-Poster.jpg",
    imdb_id: "tt1259528",
    imdb_rating: 7,
    runtime: 140,
    language: "English",
    ytid: "FKd_ks0rdAM",
  },
  {
    Title: "V.I.P.",
    fulltitle: "V.I.P. (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Thriller",
    summary:
      "The son (Lee Jong-Suk) of a high-ranking North Korean official is suspected of committing serial murders around the world. To stop the killer, South Korea, North Korea and Interpol chase after him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/V.I.P.-Movie-Poster.jpg",
    imdb_id: "tt6413410",
    imdb_rating: 6.4,
    runtime: 128,
    language: "English",
    ytid: "dwRkl2BjtGQ",
  },

  {
    Title: "Perfect Strangers",
    fulltitle: "Perfect Strangers (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      "In the same night that happens a blood red moon, some longtime friends reunite to dinner: the group is formed by plastic surgeon Alfonso and his wife, psychologist Eva, who are the hosts of the dinner; lawyers Antonio and his wife Ana; taxi driver Eduardo and his young and recent wife, veterinary Blanca; and finally Pepe, a former gym teacher actually unemployed, who surprisingly appears without Lucía, his recent girlfriend. Motivated by Blanca, who have some suspects about the group by the behaviors of some of them, she proposes a game where all diners leave their cell phones on the table, at the condition to say to everyone the contents of all text and voice messages. Starting like an innocent game, the progressive revelation of secrets as they appear cause a series the events each time more dramatics: Alfonso suspects that Eva has an affair, Ana thinks wrongly that Antonio is homosexual, Blanca realizes a horrible side about her marriage with Eduardo, and Pepe tries to keep hidden ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Perfect-Strangers-Movie-Poster.jpg",
    imdb_id: "tt6101820",
    imdb_rating: 7,
    runtime: 97,
    language: "English",
    ytid: "-lOUnBsjGuY",
  },
  {
    Title: "Paterno",
    fulltitle: "Paterno (2018)",
    movie_year: 2018,
    Categories: "Biography|Drama",
    summary:
      "The film centers on Joe Paterno, who, after becoming the winningest coach in college football history, is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Paterno-Movie-Poster.jpg",
    imdb_id: "tt2388986",
    imdb_rating: 6.6,
    runtime: 105,
    language: "English",
    ytid: "scI7dYdlzuY",
  },
  {
    Title: "Shirley: Visions of Reality",
    fulltitle: "Shirley: Visions of Reality (2013)",
    movie_year: 2013,
    Categories: "Documentary",
    summary:
      "13 of Edward Hopper's paintings are brought alive by the film, telling the story of a woman, whose thoughts, emotions and contemplations let us observe an era in American history. Shirley is a woman in America in the 1930s, '40s, '50s, and early '60s. A woman who would like to influence the course of history with her professional and socio political involvement.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Shirley-Visions-of-Reality-Movie-Poster.jpg",
    imdb_id: "tt2636806",
    imdb_rating: 6.5,
    runtime: 92,
    language: "English",
    ytid: "rcQ4JKxxukY",
  },

  {
    Title: "Faces Places",
    fulltitle: "Faces Places (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Agnes Varda, one of the leading lights of France's honored French New Wave cinema era, and professional photographer and muralist, J.R., partake on a special art project. Together, they travel around France in a special box truck equipped as a portable photo booth and traveling printing facility as they take photographs of people around the country. With that inspiration, they also create special colossal mural pictures of individuals, communities and places they want to honor and celebrate. Along the way, the old cinematic veteran and the young artistic idealist enjoy an odd friendship as they chat and explore their views on the world as only they can.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Faces-Places-Movie-Poster.jpg",
    imdb_id: "tt5598102",
    imdb_rating: 8,
    runtime: 89,
    language: "English",
    ytid: "2rKZcAiLHlY",
  },
  {
    Title: "The Post",
    fulltitle: "The Post (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History|Thriller",
    summary:
      "When American military analyst, Daniel Ellsberg, realizes to his disgust the depths of the US government's deceptions about the futility of the Vietnam War, he takes action by copying top-secret documents that would become the Pentagon Papers. Later, Washington Post owner, Kay Graham, is still adjusting to taking over her late husband's business when editor Ben Bradlee discovers the New York Times has scooped them with an explosive expose on those papers. Determined to compete, Post reporters find Ellsberg himself and a complete copy of those papers. However, the Post's plans to publish their findings are put in jeopardy with a Federal restraining order that could get them all indicted for Contempt. Now, Kay Graham must decide whether to back down for the safety of her paper or publish and fight for the Freedom of the Press. In doing so, Graham and her staff join a fight that would have America's democratic ideals in the balance.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Post-Movie-Poster.jpg",
    imdb_id: "tt6294822",
    imdb_rating: 7.2,
    runtime: 116,
    language: "English",
    ytid: "nrXlY6gzTTM",
  },
  {
    Title: "The Anthem of the Heart",
    fulltitle: "The Anthem of the Heart (2017)",
    movie_year: 2017,
    Categories: "Drama|Family",
    summary:
      "Takumi is on his class' community outreach group. His teacher assigns more students to the group including a student who, due to a mishap, has foregone speaking. The class has to perform a musical, but volunteers brave enough to perform are hard to come by. The reluctance slowly begins to wash away when the aforementioned girl makes an effort to perform. As the day of the performance approaches will the students be able to overcome their reluctance and go for it?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Anthem-of-the-Heart-Movie-Poster.jpg",
    imdb_id: "tt6738046",
    imdb_rating: 6.2,
    runtime: 119,
    language: "English",
    ytid: "EnbgMjdguxI",
  },
  {
    Title: "My Teacher",
    fulltitle: "My Teacher (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Hibiki is an awkward, 17-year-old high school sophomore who hasn't known romance. But she's about to fall in love for the very first time. With whom? A man who isn't great with words, but compassionate about his students. It's her history teacher, Mr. Ito. \"Is it okay if I fall for you?\" Hibiki asks. \"I'm afraid I can't return those feelings,\" is Ito's reply. Hibiki's first love crashes before takeoff. But it doesn't matter. \"Still I want to cherish my crush anyway.\" A teacher's heart begins to turn by a student's pure love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Teacher-Movie-Poster.jpg",
    imdb_id: "tt6190198",
    imdb_rating: 6,
    runtime: 113,
    language: "English",
    ytid: "HpYqkdn2ilU",
  },
  {
    Title: "You Were Never Really Here",
    fulltitle: "You Were Never Really Here (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Thriller",
    summary:
      "Balancing between feverish dreamlike hallucinations of a tormented past and a grim disoriented reality, the grizzled Joe--a traumatised Gulf War veteran and now an unflinching hired gun who lives with his frail elderly mother--has just finished successfully yet another job. With an infernal reputation of being a brutal man of results, the specialised in recovering missing teens enforcer will embark on a blood-drenched rescue mission, when Nina, the innocent 13-year-old daughter of an ambitious New York senator, never returns home. But amidst half-baked leads and a desperate desire to shake off his shoulders the heavy burden of a personal hell, Joe's frenzied plummet into the depths of Tartarus is inevitable, and every step Joe takes to flee the pain, brings him closer to the horrors of insanity. In the end, what is real, and what is a dream? Can there be a new chapter in Joe's life when he keeps running around in circles?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/You-Were-Never-Really-Here-Movie-Poster.jpg",
    imdb_id: "tt5742374",
    imdb_rating: 7.1,
    runtime: 89,
    language: "English",
    ytid: "yMqsd7Umxy8",
  },
  {
    Title: "Petals on the Wind",
    fulltitle: "Petals on the Wind (2014)",
    movie_year: 2014,
    Categories: "Drama|Horror|Romance|Thriller",
    summary:
      "A decade after Cathy, Christopher, and Carrie escaped from their grandparents' attic at Foxworth Hall, Petals on the Wind continues to follow the twisted plight of the family as they attempt to put their sordid past behind them, but soon discover certain secrets can't be left behind. When Cathy finds herself in an abusive relationship with a fellow dancer, Julian, Christopher and Cathy are forced to face the forbidden feelings they developed for one another while coming of age during captivity. But when tragedy strikes the Dollangangers once again, Cathy returns to Foxworth Hall to confront her grandmother and seek revenge on her mother with a plan to seduce her husband Bart. When Christopher runs to Cathy's side, the two are determined to start over again - together.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Petals-on-the-Wind-Movie-Poster.jpg",
    imdb_id: "tt3496892",
    imdb_rating: 6.3,
    runtime: 85,
    language: "English",
    ytid: "X8b86Bgrk0w",
  },
  {
    Title: "Jesus Christ Superstar Live in Concert",
    fulltitle: "Jesus Christ Superstar Live in Concert (2018)",
    movie_year: 2018,
    Categories: "Musical",
    summary:
      "A live musical recounting the final days of Jesus Christ and those around him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jesus-Christ-Superstar-Live-in-Concert-Movie-Poster.jpg",
    imdb_id: "tt6874964",
    imdb_rating: 8,
    runtime: 99,
    language: "English",
    ytid: "mPbb4BDirHA",
  },
  {
    Title: "Dare to Be Wild",
    fulltitle: "Dare to Be Wild (2015)",
    movie_year: 2015,
    Categories: "Biography|Drama|Romance",
    summary:
      "Irishwoman Mary Reynold's journey from rank outsider to winner of a Gold Medal at the Chelsea Flower Show.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dare-to-Be-Wild-Movie-Poster.jpg",
    imdb_id: "tt2989350",
    imdb_rating: 6.4,
    runtime: 100,
    language: "English",
    ytid: "12lF4c06yEY",
  },
  {
    Title: "Trouble Is My Business",
    fulltitle: "Trouble Is My Business (2018)",
    movie_year: 2018,
    Categories: "Action|Adventure|Crime|Mystery|Thriller",
    summary:
      "Los Angeles in 1947, everything should be sunny, but the smog creates a fog, a haze that permeates not just the lungs, but the psyches. Private eye Roland Drake cracks cases and romances femme fatales, while corrupt cops rule the underworld of the city and moral lines are anything but black and white. A dark, hard-boiled tale of love and betrayal, told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed. He wakes up to her missing too, and a pool of blood where she used to be. After a nervous encounter with the equally ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Trouble-Is-My-Business-Movie-Poster.jpg",
    imdb_id: "tt2243900",
    imdb_rating: 6.1,
    runtime: 116,
    language: "English",
    ytid: "SqUEOsQf6hM",
  },
  {
    Title: "Outside In",
    fulltitle: "Outside In (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An ex-con struggling to readjust to life in his small town forms an intense bond with his former high school teacher.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Outside-In-Movie-Poster.jpg",
    imdb_id: "tt7260048",
    imdb_rating: 6.4,
    runtime: 109,
    language: "English",
    ytid: "s0SdJfplC80",
  },
  {
    Title: "Froning: The Fittest Man in History",
    fulltitle: "Froning: The Fittest Man in History (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "Rich Froning Jr. is a legend in CrossFit and the Sport of Fitness. In this biopic, take a look at his childhood, follow his quest for a fourth CrossFit Games title, and see him as a son, a husband and a new father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Froning-The-Fittest-Man-in-History-Movie-Poster.jpg",
    imdb_id: "tt5079382",
    imdb_rating: 6.7,
    runtime: 99,
    language: "English",
    ytid: "D1ze-f7jS2A",
  },
  {
    Title: "Elizabethtown",
    fulltitle: "Elizabethtown (2005)",
    movie_year: 2005,
    Categories: "Comedy|Drama|Romance",
    summary:
      "After causing a loss of almost one billion dollars in his company, the shoe designer Drew Baylor decides to commit suicide. However, in the exact moment of his act of despair, he receives a phone call from his sister telling him that his beloved father had just died in Elizabethtown, and he should bring him back since his mother had problem with the relatives of his father. He travels in an empty red eye flight and meets the attendant Claire Colburn, who changes his view and perspective of life.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Elizabethtown-Movie-Poster.jpg",
    imdb_id: "tt0368709",
    imdb_rating: 6.4,
    runtime: 123,
    language: "English",
    ytid: "qyPq2BS8Ug0",
  },

  {
    Title: "Sons of Ben",
    fulltitle: "Sons of Ben (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Sport",
    summary:
      "After many rumors of an MLS team arriving in Philadelphia never materializing, a small group of soccer fans took matters into their own hands and started a supporters group called the Sons of Ben to help bring a team to their hometown. They were a group without a team to root for and had a modest goal of reaching 100 members by the end of the year. Little did they know they would reach over 1,500 members in less time than that and start a movement that would not only change the soccer landscape in Philadelphia forever, but also help revive a community that had been struggling for decades.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sons-of-Ben-Movie-Poster.jpg",
    imdb_id: "tt2317088",
    imdb_rating: 7.8,
    runtime: 75,
    language: "English",
    ytid: "m8I_pgCaRsM",
  },
  {
    Title: "12 Strong",
    fulltitle: "12 Strong (2018)",
    movie_year: 2018,
    Categories: "Action|Drama|History|War",
    summary:
      'The True Story of the Army\'s Special Forces "Green Berets", who within weeks responded to the 9-11 attack. Green Berets, with the help of the 160th SOAR(A), took over the country and allowed other Special Forces and the rest of the conventional military to begin the more publicly visible war.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/12-Strong-Movie-Poster.jpg",
    imdb_id: "tt1413492",
    imdb_rating: 6.7,
    runtime: 130,
    language: "English",
    ytid: "-Denciie5oA",
  },
  {
    Title: "The Commuter",
    fulltitle: "The Commuter (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "Now a hard-working life insurance salesman and a caring family man, the former police officer, Michael MacCauley, has taken the commuter rail to New York for the past ten years. But, unexpectedly, things will take a turn for the worse, when on one of his daily journeys, the cryptic passenger, Joanna, makes Michael a generous and tempting offer to locate a single commuter or face grave consequences. Is this a sick joke, or is this indeed a serious situation? As Michael races against the clock to solve this wicked conundrum, everyone aboard is a suspect, in a deal where there's definitely more than meets the eye. Can he decide in time who's the one?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Commuter-Movie-Poster.jpg",
    imdb_id: "tt1590193",
    imdb_rating: 6.3,
    runtime: 105,
    language: "English",
    ytid: "WWexI9YiLSc",
  },
  {
    Title: "Birdshot",
    fulltitle: "Birdshot (2016)",
    movie_year: 2016,
    Categories: "Drama|Mystery|Thriller",
    summary:
      'Birdshot" is a mystery-thriller film that tells a story of a young Filipina farm girl who wanders into the boundaries of a Philippine reservation forest. Deep within the reservation she mistakenly shoots and kills a critically endangered and protected Philippine Eagle. As the local authorities begin a manhunt to track down the poacher of a national bird, their investigation leads them to an even more horrific discovery.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Birdshot-Movie-Poster.jpg",
    imdb_id: "tt6135042",
    imdb_rating: 6.8,
    runtime: 116,
    language: "English",
    ytid: "7k8h_X3GjgM",
  },
  {
    Title: "May",
    fulltitle: "May (2002)",
    movie_year: 2002,
    Categories: "Drama|Horror",
    summary:
      "When May was a child, she was a lonely girl with a lazy eye and without any friends except a weird and ugly doll kept in a glass case given by her bizarre mother on her birthday. May becomes a lonely, weird young woman, working in an animal hospital and assisting the veterinarian in surgeries and sewing operated animals most of the time. Her lesbian colleague Polly has a sort of attraction for her. When the shy May meets the mechanic Adam Stubbs, she loves his hands and has a crush on him. They date, but the weirdness and bizarre behavior of May pushes Adam away from her. Alone, May has a brief affair with Polly, but she feels rejected again when her colleague meets Ambrosia. When her doll is accidentally broken, the deranged May decides to build a friend for her, using the best parts her acquaintances can offer.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/May-Movie-Poster.jpg",
    imdb_id: "tt0303361",
    imdb_rating: 6.7,
    runtime: 93,
    language: "English",
    ytid: "YbN_uoGQysc",
  },

  {
    Title: "The Lost Brother",
    fulltitle: "The Lost Brother (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Cetarti, a public employee who has just been fired, travels from Buenos Aires to Lapachito, a lonely town in the Chaco province. He must take care of the corpses of his mother and brother who have been brutally murdered, and with whom no bond of affection binds him. The only thing that mobilizes Cetarti to undertake the trip is the possibility of charging a modest life insurance to be able to settle in Brazil. There he meets Duarte, a sort of town capo and friend of his mother's murderer, with whom he establishes a strange society to manage and collect that money.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Lost-Brother-Movie-Poster.jpg",
    imdb_id: "tt6522634",
    imdb_rating: 6.7,
    runtime: 112,
    language: "English",
    ytid: "1DNXCdWZuHs",
  },
  {
    Title: "The Redeemed and the Dominant: Fittest on Earth",
    fulltitle: "The Redeemed and the Dominant: Fittest on Earth (2018)",
    movie_year: 2018,
    Categories: "Documentary",
    summary:
      'In 2017 the fittest athletes on Earth took on the unknown and unknowable during four of the most intense days of competition in CrossFit Games history. "The Redeemed and the Dominant: Fittest on Earth " captures all the drama as top athletes resembling chiseled Grecian gods descend on Madison, Wisconsin, to face a series of trials. Hercules faced 12; they take on 13. Emotions run high as a throng of Australian athletes rise to the top. By the end of the competition, some learn tough lessons-that all that glitters isn\'t gold, or even bronze-and some learn that they\'re even stronger than they realized. The best among them enter the pantheon of CrossFit giants and earn the right to call themselves the "Fittest on Earth.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Redeemed-and-the-Dominant-Fittest-on-Earth-Movie-Poster.jpg",
    imdb_id: "tt8144778",
    imdb_rating: 7.1,
    runtime: 119,
    language: "English",
    ytid: "rlZ5MG-E2Ls",
  },
  {
    Title: "First Match",
    fulltitle: "First Match (2018)",
    movie_year: 2018,
    Categories: "Drama|Sport",
    summary:
      "Hardened by years in foster care, a teenage girl from Brooklyn's Brownsville neighborhood decides that joining the boys wrestling team is the only way back to her estranged father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/First-Match-Movie-Poster.jpg",
    imdb_id: "tt6061074",
    imdb_rating: 6.1,
    runtime: 102,
    language: "English",
    ytid: "Xva2FWNdcD0",
  },

  {
    Title: "Happy End",
    fulltitle: "Happy End (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Gradually succumbing to dementia, George Laurent, the octogenarian patriarch of the Laurents, an affluent upper-bourgeois family, is uncomfortably sharing his palatial manor in Calais, the heart of the infamous migrant jungle, with his twice-married son, Thomas, and Anne, his workaholic daughter who has taken over the family construction business. Divorced and frigid, Anne has to handle the impact of a disastrous workplace accident caused by her disappointing son Pierre's negligence, while at the same time, the urgent hospitalisation of Thomas' ex-wife from a mysterious poisoning, leads his sulky 13-year-old daughter, Ève, to live with her father and his new wife, Anais. Undoubtedly, in this family, everyone has a skeleton in the closet, and as the fates of the Laurents enmesh with insistent and ignoble desires, a peculiar and disturbing alliance will form. But in the end, some secrets are bigger than others.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Happy-End-Movie-Poster.jpg",
    imdb_id: "tt5304464",
    imdb_rating: 6.9,
    runtime: 107,
    language: "English",
    ytid: "cZ1ajZRn8YM",
  },
  {
    Title: "After the Storm",
    fulltitle: "After the Storm (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Dwelling on his past glory as a prize-winning author, Ryota (Hiroshi Abe) wastes the money he makes as a private detective on gambling and can barely pay child support. After the death of his father, his aging mother (Kirin Kiki) and beautiful ex-wife (Yoko Make) seem to be moving on with their lives. Renewing contact with his initially distrusting family, Ryota struggles to take back control of his existence and to find a lasting place in the life of his young son (Taiyo Yoshizawa) - until a stormy summer night offers them a chance to truly bond again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/After-the-Storm-Movie-Poster.jpg",
    imdb_id: "tt5294966",
    imdb_rating: 7.4,
    runtime: 118,
    language: "English",
    ytid: "i0lr6hfRG9s",
  },
  {
    Title: "Mary and the Witch's Flower",
    fulltitle: "Mary and the Witch's Flower (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Family|Fantasy",
    summary:
      'Mary is an ordinary young girl stuck in the country with her Great-Aunt Charlotte and seemingly no adventures or friends in sight. She follows a mysterious cat into the nearby forest, where she discovers an old broomstick and the strange Fly-by-Night flower, a rare plant that blossoms only once every seven years and only in that forest. Together the flower and the broomstick whisk Mary above the clouds and far away to Endor College - a school of magic run by headmistress Madam Mumblechook and the brilliant Doctor Dee. But there are terrible things happening at the school, and, when Mary tells a lie, she must risk her life to try to set things right. Based on Mary Stewart\'s 1971 classic children\'s book "The Little Broomstick", "Mary and The Witch\'s Flower" is an action-packed film full of jaw-dropping imaginative worlds, ingenious characters, and the stirring, heartfelt story of a young girl trying to find a place in the world. Featuring the voices of Ruby Barnhill and Academy ...',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mary-and-the-Witchs-Flower-Movie-Poster.jpg",
    imdb_id: "tt6336356",
    imdb_rating: 6.8,
    runtime: 102,
    language: "English",
    ytid: "888z3ku4t3I",
  },
  {
    Title: "The Last Movie Star",
    fulltitle: "The Last Movie Star (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An aging former movie star is forced to face the reality that his glory days are behind him. On its surface, the film is a tale about faded fame. At its core, it's a universal story about growing old.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Last-Movie-Star-Movie-Poster.jpg",
    imdb_id: "tt5836316",
    imdb_rating: 6.8,
    runtime: 94,
    language: "English",
    ytid: "1-f8O118hnE",
  },
  {
    Title: "Lucky",
    fulltitle: "Lucky (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "Lucky is an old US Navy veteran of rigid habits and attitudes in a small town. When his routine is interrupted by a sudden collapse at home, Lucky finds himself realizing that his remarkably healthy old age is going to face an inevitable decline and he has to accept it. In that difficult reassessment, Lucky must face up to what he believes in and how much it compares to his neighbors' priorities. In doing so, Lucky finds that his life has its positive side as he searches for some meaning that he can accept.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lucky-Movie-Poster.jpg",
    imdb_id: "tt5859238",
    imdb_rating: 7.4,
    runtime: 88,
    language: "English",
    ytid: "2KLLkj84GAo",
  },
  {
    Title: "Phantom Thread",
    fulltitle: "Phantom Thread (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Set in the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock (Daniel Day-Lewis) and his sister Cyril (Lesley Manville) are at the center of British fashion, dressing royalty, movie stars, heiresses, socialites, debutants, and dames with the distinct style of The House of Woodcock. Women come and go through Woodcock's life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma (Vicky Krieps), who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Phantom-Thread-Movie-Poster.jpg",
    imdb_id: "tt5776858",
    imdb_rating: 7.7,
    runtime: 130,
    language: "English",
    ytid: "asbg5u5j0YI",
  },
  {
    Title: "Molly's Game",
    fulltitle: "Molly's Game (2017)",
    movie_year: 2017,
    Categories: "Biography|Crime|Drama",
    summary:
      "Molly Bloom, a beautiful young Olympic-class skier, ran the world's most exclusive high-stakes poker game for a decade before being arrested in the middle of the night by 17 FBI agents wielding automatic weapons. Her players included Hollywood royalty, sports stars, business titans, and finally, unbeknownst to her, the Russian mob. Her only ally was her criminal defense lawyer Charlie Jaffey, who learned that there was much more to Molly than the tabloids led us to believe.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mollys-Game-Movie-Poster.jpg",
    imdb_id: "tt4209788",
    imdb_rating: 7.5,
    runtime: 140,
    language: "English",
    ytid: "Vu4UPet8Nyc",
  },
  {
    Title: "The Third Murder",
    fulltitle: "The Third Murder (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery",
    summary:
      "Misumi has a criminal record dating back many years and is now under the spotlight again. It looks like an open and shut case, for Misumi has confessed to the new charge. Enter prominent lawyer Shigemori, who harbours other ideas, which could mean the difference between life and death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Third-Murder-Movie-Poster.jpg",
    imdb_id: "tt6410564",
    imdb_rating: 6.8,
    runtime: 124,
    language: "English",
    ytid: "Plr3V4TYBQE",
  },
  {
    Title: "Ichi the Killer",
    fulltitle: "Ichi the Killer (2001)",
    movie_year: 2001,
    Categories: "Action|Comedy|Crime|Drama|Horror",
    summary:
      "When a Yakuza boss named Anjo disappears with 300 million yen, his chief henchman, a sadomasochistic man named Kakihara, and the rest of his mob goons go looking for him. After capturing and torturing a rival Yakuza member looking for answers, they soon realize they have the wrong man and begin looking for the man named Jijii who tipped them off in the first place. Soon enough Kakihara and his men encounter Ichi, a psychotic, sexually-repressed young man with amazing martial arts abilities and blades that come out of his shoes. One by one Ichi takes out members of the Yakuza and all the while Kakihara intensifies his pursuit of Ichi and Ichi's controller Jijii. What will happen as the final showdown happens between the tortured and ultra-violent Ichi and the pain-craving Kakihara?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ichi-the-Killer-Movie-Poster.jpg",
    imdb_id: "tt0296042",
    imdb_rating: 7.1,
    runtime: 129,
    language: "English",
    ytid: "iFUMtrAMknE",
  },
  {
    Title: "The Boy with the Topknot",
    fulltitle: "The Boy with the Topknot (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "One-off drama based on the critically acclaimed memoirs of British journalist Sathnam Sanghera. A touching, humorous and emotional rites-of-passage story.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Boy-with-the-Topknot-Movie-Poster.jpg",
    imdb_id: "tt5757738",
    imdb_rating: 6.7,
    runtime: 90,
    language: "English",
    ytid: "RLEnTBG7ncQ",
  },

  {
    Title: "Control",
    fulltitle: "Control (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Thriller",
    summary:
      "The once unconditional friendship between police officers Vincke and Verstuyft hits a very rough patch when they come up against a series of gruesome murders. Complicating matters even further, a survivor of the killer drives a wedge between them when Verstuyft falls for her charms. Meanwhile, the serial killer has a new victim in sight...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Control-Movie-Poster.jpg",
    imdb_id: "tt1727497",
    imdb_rating: 6.3,
    runtime: 127,
    language: "English",
    ytid: "xF99vVf8yv0",
  },
  {
    Title: "Dear Etranger",
    fulltitle: "Dear Etranger (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "A 40-year old man sees his life change when his wife gets pregnant. He already has a daughter from his first marriage whom he rarely sees and two step-daughters, from his wife's first marriage. The youngest of his step-daughters is looking forward to a baby brother or sister, but the oldest doesn't welcome the news and suddenly decides that she wants to live with her father. And as if that were not enough trouble, he is forced out of his good office job into an inferior position.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dear-Etranger-Movie-Poster.jpg",
    imdb_id: "tt5797164",
    imdb_rating: 7,
    runtime: 0,
    language: "English",
    ytid: "F-FPd35FqAY",
  },
  {
    Title: "Before We Vanish",
    fulltitle: "Before We Vanish (2017)",
    movie_year: 2017,
    Categories: "Drama|Sci-Fi",
    summary:
      "Three aliens travel to Earth in preparation for a mass invasion, taking possession of human bodies.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Before-We-Vanish-Movie-Poster.jpg",
    imdb_id: "tt5999530",
    imdb_rating: 6,
    runtime: 129,
    language: "English",
    ytid: "fjlXE-u-3rc",
  },

  {
    Title: "All the Money in the World",
    fulltitle: "All the Money in the World (2017)",
    movie_year: 2017,
    Categories: "Biography|Crime|Drama|Mystery|Thriller",
    summary:
      "Rome, 1973. Masked men kidnap a teenage boy named John Paul Getty III (Charlie Plummer). His grandfather, Jean Paul Getty (Christopher Plummer), is the richest human in the world, a billionaire oil magnate, but he's notoriously miserly. His favorite grandson's abduction is not reason enough for him to part with any of his fortune. All the Money in the World (2017) follows Gail, (Michelle Williams), Paul's devoted, strong-willed mother, who unlike Getty, has consistently chosen her children over his fortune. Her son's life in the balance with time running out, she attempts to sway Getty even as her son's mob captors become increasingly more determined, volatile and brutal. When Getty sends his enigmatic security man Fletcher Chace (Mark Wahlberg) to look after his interests, he and Gail become unlikely allies in this race against time that ultimately reveals the true and lasting value of love over money.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/All-the-Money-in-the-World-Movie-Poster.jpg",
    imdb_id: "tt5294550",
    imdb_rating: 6.9,
    runtime: 132,
    language: "English",
    ytid: "KXHrCBkIxQQ",
  },

  {
    Title: "I Kill Giants",
    fulltitle: "I Kill Giants (2017)",
    movie_year: 2017,
    Categories: "Drama|Fantasy|Thriller",
    summary:
      "Twelve-year-old Barbara Thorson flees from reality, leaving in the imaginary world of fantasy and magic, where she fights with giants. Her family does not understand her, peers do not like her, and she irritates teachers. And only recently moved here Sofia, her same age, trying to make friends with her.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Kill-Giants-Movie-Poster.jpg",
    imdb_id: "tt4547194",
    imdb_rating: 6.5,
    runtime: 106,
    language: "English",
    ytid: "ZBfLY-YL-5w",
  },
  {
    Title: "Roxanne Roxanne",
    fulltitle: "Roxanne Roxanne (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      'In the early 1980s, the most feared battle MC in Queens, New York, was a fierce teenage girl with the weight of the world on her shoulders. At the age of 14, Lolita "Roxanne Shanté" Gooden was well on her way to becoming a hip-hop legend as she hustled to provide for her family while defending herself from the dangers of the streets of the Queensbridge Projects in NYC.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Roxanne-Roxanne-Movie-Poster.jpg",
    imdb_id: "tt5796838",
    imdb_rating: 6.1,
    runtime: 100,
    language: "English",
    ytid: "IKA8H_LolNM",
  },

  {
    Title: "Every Secret Thing",
    fulltitle: "Every Secret Thing (2014)",
    movie_year: 2014,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      "A detective looks to unravel a mystery surrounding missing children and the prime suspects: two young women who, seven years ago, were put away for an infant's death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Every-Secret-Thing-Movie-Poster.jpg",
    imdb_id: "tt1706598",
    imdb_rating: 6.1,
    runtime: 93,
    language: "English",
    ytid: "6QT0zKjvRfE",
  },
  {
    Title: "Believe in Me",
    fulltitle: "Believe in Me (2006)",
    movie_year: 2006,
    Categories: "Drama|Sport",
    summary:
      "Girls? The thought of coaching them seems preposterous to Clay Driscoll (earnest newcomer Jeffrey Donovan), who travels to Middleton, Okla., in the 1960s prepared to coach the varsity boys' team. But that position is filled, so he's forced to coach the girls' team -- the Lady Cyclones. Faced with an under-performing crew of untrained players, the coach begins to treat the girls like boys. They run laps in a closed gym and practice shots and plays they've never tried before -- and eventually their \"old-fashioned grit\" leads them to a Cinderella season culminating with the state championships. Along their way, Driscoll and the girls overcome several obstacles, most of all, gaining a fan base. Meanwhile, big man in town Ellis Brawley (Bruce Dern) can't stand Driscoll and his newfangled idea of empowering female athletes. Of course, the Lady Cyclones are up to the task of proving Brawley wrong. Driven by their caring young coach, the girls determine to play as hard as the boys, even ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Believe-in-Me-Movie-Poster.jpg",
    imdb_id: "tt0419491",
    imdb_rating: 7.1,
    runtime: 0,
    language: "English",
    ytid: "IHatBd-2lLI",
  },
  {
    Title: "Still the Water",
    fulltitle: "Still the Water (2014)",
    movie_year: 2014,
    Categories: "Drama|Romance",
    summary:
      "On the subtropical Japanese island of Amami, traditions about nature remain eternal. During the full-moon night of traditional dances in August, 16-year-old Kaito discovers a dead body floating in the sea. His girlfriend Kyoko will attempt to help him understand this mysterious discovery. Together, Kaito and Kyoko will learn to become adults by experiencing the interwoven cycles of life, death and love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Still-the-Water-Movie-Poster.jpg",
    imdb_id: "tt3230162",
    imdb_rating: 6.8,
    runtime: 121,
    language: "English",
    ytid: "npg8_sHQmbc",
  },
  {
    Title: "Redemption Trail",
    fulltitle: "Redemption Trail (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Two powerful, yet deeply troubled women - refugees from political and personal trauma - flee a past that haunts them. The daughter of a murdered Black Panther revolutionary, Tess, lives off the grid on a Sonoma vineyard, fiercely detached from all connections. Her hermetic life cracks when she gives reluctant shelter to a desperate young woman, Anna who has attempted suicide in a nearby forest. An unlikely alliance forms between the two, where other close relationships have failed - David, Anna's husband and John, Tess' employer, cannot break through their walls. But the very difference between the two women opens them up to a new vision of themselves, as not only survivors, but as heroes capable even of a thrilling shoot-out in the name of outlaw justice. Reclaiming freedom, and life, they plunge forward, towards an unknown, transformative horizon.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Redemption-Trail-Movie-Poster.jpg",
    imdb_id: "tt2009432",
    imdb_rating: 6.7,
    runtime: 92,
    language: "English",
    ytid: "vM8_fHXeTVk",
  },
  {
    Title: "Black Marigolds",
    fulltitle: "Black Marigolds (2013)",
    movie_year: 2013,
    Categories: "Drama|Romance",
    summary:
      "Black Marigolds is a drama steeped in literature. Following writer Ryan Cole and his wife Kate as they move to an off season vacation home on a frigid lake in Northern California so that Ryan can finish his new novel. At first everything is perfect for two people who need only each other to be happy. But soon Kate begins to notice Ryan forgetting things, and as his frustration grows so does her concern for him. While he refuses to seek help, he becomes increasingly volatile and unpredictable. Finally it will be up to Kate to choose between the pleasant past or the terrible future.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Black-Marigolds-Movie-Poster.jpg",
    imdb_id: "tt2141623",
    imdb_rating: 6.1,
    runtime: 84,
    language: "English",
    ytid: "gLzRi0wbneI",
  },
  {
    Title: "The Greatest Showman",
    fulltitle: "The Greatest Showman (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Musical|Romance",
    summary:
      "Orphaned, penniless but ambitious and with a mind crammed with imagination and fresh ideas, the American Phineas Taylor Barnum will always be remembered as the man with the gift to effortlessly blur the line between reality and fiction. Thirsty for innovation and hungry for success, the son of a tailor will manage to open a wax museum but will soon shift focus to the unique and peculiar, introducing extraordinary, never-seen-before live acts on the circus stage. Some will call Barnum's wide collection of oddities, a freak show; however, when the obsessed showman gambles everything on the opera singer Jenny Lind to appeal to a high-brow audience, he will somehow lose sight of the most important aspect of his life: his family. Will Barnum risk it all to be accepted?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Greatest-Showman-Movie-Poster.jpg",
    imdb_id: "tt1485796",
    imdb_rating: 7.8,
    runtime: 105,
    language: "English",
    ytid: "AXCTMGYUg9A",
  },

  {
    Title: "Demon House",
    fulltitle: "Demon House (2018)",
    movie_year: 2018,
    Categories: "Documentary|Horror",
    summary:
      "The story takes place with doing a docudrama about the home he purchased in Gary, Indiana. He convinces a couple of previous tenants to come back and discuss their accounts of the frightening ordeals that they endured during their stay at the home. A woman becomes possessed and begins speaking in tongues. Following the extreme amount of activity documented, production had to be halted, but the movie has been finished one year later and, boy, are you in for one edge of your seat demonic thrill ride.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Demon-House-Movie-Poster.jpg",
    imdb_id: "tt4130484",
    imdb_rating: 6.1,
    runtime: 111,
    language: "English",
    ytid: "zGbZheZYpLM",
  },
  {
    Title: "Along for the Ride",
    fulltitle: "Along for the Ride (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary: "A documentary about Dennis Hopper.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Along-for-the-Ride-Movie-Poster.jpg",
    imdb_id: "tt3986978",
    imdb_rating: 7,
    runtime: 90,
    language: "English",
    ytid: "oGXol1CI26k",
  },
  {
    Title: "Centre of My World",
    fulltitle: "Centre of My World (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "After a summer spent with his his best friend Kat to escape his family, Phil goes back to school and starts to question his feelings towards Nicholas, a new classmate.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Centre-of-My-World-Movie-Poster.jpg",
    imdb_id: "tt4932154",
    imdb_rating: 7.3,
    runtime: 115,
    language: "English",
    ytid: "u-PTAF5wgS0",
  },
  {
    Title: "Wonderstruck",
    fulltitle: "Wonderstruck (2017)",
    movie_year: 2017,
    Categories: "Drama|Family|Mystery",
    summary:
      "Tells the tale of two children separated by fifty years. In 1927, Rose searches for the actress who's life she chronicles in her scrapbook; in 1977, Ben runs away from home to find his father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonderstruck-Movie-Poster.jpg",
    imdb_id: "tt5208216",
    imdb_rating: 6.3,
    runtime: 116,
    language: "English",
    ytid: "n207k52C3DM",
  },
  {
    Title: "The Witness",
    fulltitle: "The Witness (2015)",
    movie_year: 2015,
    Categories: "Biography|Crime|Documentary|Mystery",
    summary:
      "Bill Genovese's decade-long journey to unravel the truth about the mythic death and little-known life of his sister, Kitty, who was reportedly stabbed in front of 38 witnesses and became the face of urban apathy. THE WITNESS begins in 2004 when The Times questions its original story: the number of witnesses, what they observed, the number of attacks. None was more affected by the story than Bill. He vowed not to be like the 38, volunteered for Vietnam, and lost both legs. What if Kitty's mythic story is an urban myth? Breaking his family's half-century of silence, Bill seeks to find the truth confronting the witnesses, the killer, their families and his own. THE WITNESS is about bearing witness, loss and forgiveness, and what we owe each other.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Witness-Movie-Poster.jpg",
    imdb_id: "tt3568002",
    imdb_rating: 7.1,
    runtime: 89,
    language: "English",
    ytid: "EAGOoF5CDXA",
  },
  {
    Title: "Harold and Lillian: A Hollywood Love Story",
    fulltitle: "Harold and Lillian: A Hollywood Love Story (2015)",
    movie_year: 2015,
    Categories: "Biography|Documentary",
    summary:
      "Movie fans know the work of Harold and Lillian Michelson, even if they don't recognize the names. Working largely uncredited in the Hollywood system, storyboard artist Harold and film researcher Lillian left an indelible mark on classics by Alfred Hitchcock, Steven Spielberg, Mel Brooks, Stanley Kubrick, Roman Polanski and many more. Through an engaging mix of love letters, film clips and candid conversations with Harold and Lillian, Danny DeVito, Mel Brooks, Francis Ford Coppola and others, this deeply engaging documentary from Academy Award®-nominated director Daniel Raim offers both a moving portrait of a marriage and a celebration of the unknown talents that help shape the films we love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Harold-and-Lillian-A-Hollywood-Love-Story-Movie-Poster.jpg",
    imdb_id: "tt4683668",
    imdb_rating: 8,
    runtime: 94,
    language: "English",
    ytid: "sfc3aAQ_UTI",
  },
  {
    Title: "Ferrari 312B: Where the Revolution Begins",
    fulltitle: "Ferrari 312B: Where the Revolution Begins (2017)",
    movie_year: 2017,
    Categories: "Documentary|History|Sport",
    summary:
      "In a race against time and all odds, the revolutionary F1 racing car Ferrari 312B will get back on the Monaco circuit, 46 years later, under the wing of it's creator, the genius engineer Mauro Forghieri.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferrari-312B-Where-the-Revolution-Begins-Movie-Poster.jpg",
    imdb_id: "tt7017474",
    imdb_rating: 7,
    runtime: 85,
    language: "English",
    ytid: "p-5wUn2X-rc",
  },

  {
    Title: "Fairy Tail: The Movie - Dragon Cry",
    fulltitle: "Fairy Tail: The Movie - Dragon Cry (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Animation|Comedy|Fantasy",
    summary:
      "Dragon Cry\" - it's a magic artifact, that power can destroy the world. For a long time she was kept in the Kingdom of Fiore, but in the end was stolen by the Kingdom of Stella. The main characters (Natsu, Lucy, Gray, Erza, Wendy, Happy and Carla) penetrate into the Kingdom on a mission undercover. In the end they will have to deal with the King Animus and his entourage (Zach and Sonya). The purpose of the Animus to enslave the world? And Sonya was secretly trying to save the country? Expect exciting adventures on the sea of intrigue and save the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Fairy-Tail-The-Movie-Dragon-Cry-Movie-Poster.jpg",
    imdb_id: "tt6548966",
    imdb_rating: 7.5,
    runtime: 85,
    language: "English",
    ytid: "0bIkW607yJA",
  },

  {
    Title: "To Rome with Love",
    fulltitle: "To Rome with Love (2012)",
    movie_year: 2012,
    Categories: "Comedy|Romance",
    summary:
      "In Rome, the America tourist Hayley meets the local lawyer Michelangelo on the street and soon they fall in love with each other. Hayley's parents, the psychiatrist Phyllis and the retired music producer Jerry, travel to Rome to meet Michelangelo and his parents. When Jerry listens to Michelangelo's father Giancarlo singing opera in the shower, he is convinced that he is a talented opera singer. But there is a problem: Giancarlo can only sing in the shower. The couple Antonio and Milly travel to Rome to meet Antonio's relatives that belong to the high society. Milly goes to the hairdresser while Antonio waits for her in the room. Milly gets lost in Rome and the prostitute Anna mistakenly goes to Antonio's room. Out of the blue, his relatives arrive in the room and they believe Anna is Antonio's wife. Meanwhile the shy Milly meets her favorite actor Luca Salta (Antonio Albanese) and goes to his hotel room \"to discuss about movies\". One day, the middle-class clerk Leopoldo becomes a ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/To-Rome-with-Love-Movie-Poster.jpg",
    imdb_id: "tt1859650",
    imdb_rating: 6.3,
    runtime: 112,
    language: "English",
    ytid: "ft__aQSrHqE",
  },
  {
    Title: "Journey to the West",
    fulltitle: "Journey to the West (2014)",
    movie_year: 2014,
    Categories: "Drama",
    summary:
      "Tsai Ming-liang returns with this latest entry in his Walker series, in which his monk acquires an unexpected acolyte in the form of Denis Lavant as he makes his way through the streets of a sun-dappled Marseille.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Journey-to-the-West-Movie-Poster.jpg",
    imdb_id: "tt3521442",
    imdb_rating: 6.8,
    runtime: 56,
    language: "English",
    ytid: "FOxhoVx6a8o",
  },

  {
    Title: "Won't Back Down",
    fulltitle: "Won't Back Down (2012)",
    movie_year: 2012,
    Categories: "Drama",
    summary:
      "Two determined mothers with children who are failing in an inner city school in Pittsburgh join forces to take back the school, and turn it into a place of learning. But before they can change the school for the better, they must first battle the parents, the school board, and the teachers union. Because this is for their children, they won't back down from this enormous challenge.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wont-Back-Down-Movie-Poster.jpg",
    imdb_id: "tt1870529",
    imdb_rating: 6.4,
    runtime: 0,
    language: "English",
    ytid: "busgdBQE9M0",
  },

  {
    Title: "Annihilation",
    fulltitle: "Annihilation (2018)",
    movie_year: 2018,
    Categories: "Adventure|Drama|Fantasy|Horror|Mystery",
    summary:
      "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Annihilation-Movie-Poster.jpg",
    imdb_id: "tt2798920",
    imdb_rating: 7,
    runtime: 115,
    language: "English",
    ytid: "89OP78l9oF0",
  },

  {
    Title: "The Nile Hilton Incident",
    fulltitle: "The Nile Hilton Incident (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Set against the backdrop of the Egyptian Revolution, the thriller features a police officer who investigates the murder of a woman. What initially seems to be a killing of a prostitute turns into a more complicated case involving the very elite of Egypt.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Nile-Hilton-Incident-Movie-Poster.jpg",
    imdb_id: "tt5540188",
    imdb_rating: 6.9,
    runtime: 111,
    language: "English",
    ytid: "G1njw7sUFoQ",
  },
  {
    Title: "Star Wars: The Last Jedi",
    fulltitle: "Star Wars: The Last Jedi (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Star-Wars-The-Last-Jedi-Movie-Poster.jpg",
    imdb_id: "tt2527336",
    imdb_rating: 7.4,
    runtime: 152,
    language: "English",
    ytid: "Q0CbN8sfihY",
  },
  {
    Title: "The Woman Who Left",
    fulltitle: "The Woman Who Left (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "After 30 years of wrongful imprisonment, a woman plans to take revenge on her former lover.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Woman-Who-Left-Movie-Poster.jpg",
    imdb_id: "tt5843990",
    imdb_rating: 7.6,
    runtime: 226,
    language: "English",
    ytid: "MOopZgQuYz0",
  },
  {
    Title: "The Outsider",
    fulltitle: "The Outsider (2018)",
    movie_year: 2018,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      "An epic set in post-WWII Japan and centered on an American former G.I. who joins the yakuza.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Outsider-Movie-Poster.jpg",
    imdb_id: "tt2011311",
    imdb_rating: 6.3,
    runtime: 120,
    language: "English",
    ytid: "QNNcl2mEHzQ",
  },

  {
    Title: "Hotel Salvation",
    fulltitle: "Hotel Salvation (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Faced with his father's untimely and bizarre demand to go and die in the holy city of Varanasi and attain Salvation, a son is left with no choice but to embark on this journey.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hotel-Salvation-Movie-Poster.jpg",
    imdb_id: "tt5997928",
    imdb_rating: 7.3,
    runtime: 102,
    language: "English",
    ytid: "Que1V8IEcEU",
  },
  {
    Title: "Lego DC Comics Super Heroes: The Flash",
    fulltitle: "Lego DC Comics Super Heroes: The Flash (2018)",
    movie_year: 2018,
    Categories: "Action|Animation|Sci-Fi",
    summary:
      "The morning sun shines on the jewel of the Metropolis skyline, The Daily Planet building. But when The Joker decides this building needs a renovation, it's time to sound the Trouble Alert because all bricks are about to break loose! The Justice League leaps into action but as the battle is brewing against The Joker something goes haywire with The Flash's powers causing him to get caught in a repeating time loop and even stranger is the yellow clad Reverse Flash taunting him at every turn! It will take all of Flash's speed, a little magic and the helping hands and paws of the Justice League's new recruits The Atom, Krypto the Super Dog and Ace the Bat Hound to break the cycle and save Metropolis!",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lego-DC-Comics-Super-Heroes-The-Flash-Movie-Poster.jpg",
    imdb_id: "tt7877382",
    imdb_rating: 6.5,
    runtime: 78,
    language: "English",
    ytid: "AGKDZNU_HNo",
  },
  {
    Title: "Prodigy",
    fulltitle: "Prodigy (2017)",
    movie_year: 2017,
    Categories: "Drama|Sci-Fi|Thriller",
    summary:
      "Dr. Fonda, an unconventional psychologist, is consulted on the case of a troubled young genius, Ellie. Upon meeting the girl in a high-security facility, under the watchful eyes of a roomful of experts, Fonda is surprised to discover the advanced nature of Ellie's intelligence. However, as their session progresses he uncovers just how desperate and dangerous this situation really is...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Prodigy-Movie-Poster.jpg",
    imdb_id: "tt5017936",
    imdb_rating: 6.6,
    runtime: 80,
    language: "English",
    ytid: "SpkYUAUlmFc",
  },
  {
    Title: "Pitch Perfect 3",
    fulltitle: "Pitch Perfect 3 (2017)",
    movie_year: 2017,
    Categories: "Comedy|Music",
    summary:
      "After the highs of winning the World Championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Pitch-Perfect-3-Movie-Poster.jpg",
    imdb_id: "tt4765284",
    imdb_rating: 6,
    runtime: 93,
    language: "English",
    ytid: "aVsOXRgjeeU",
  },
  {
    Title: "The Vanishing of Sidney Hall",
    fulltitle: "The Vanishing of Sidney Hall (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery",
    summary:
      "Sidney Hall finds accidental success and unexpected love at an early age, then disappears without a trace.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Vanishing-of-Sidney-Hall-Movie-Poster.jpg",
    imdb_id: "tt1291566",
    imdb_rating: 6.8,
    runtime: 119,
    language: "English",
    ytid: "I3A12z2ETTk",
  },
  {
    Title: "Jumanji: Welcome to the Jungle",
    fulltitle: "Jumanji: Welcome to the Jungle (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Fantasy",
    summary:
      "In a brand new Jumanji adventure, four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it. To beat the game and return to the real world, they'll have to go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves - or they'll be stuck in the game forever, to be played by others without break.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jumanji-Welcome-to-the-Jungle-Movie-Poster.jpg",
    imdb_id: "tt2283362",
    imdb_rating: 7,
    runtime: 119,
    language: "English",
    ytid: "2QKg5SZ_35I",
  },
  {
    Title: "Pan's Labyrinth",
    fulltitle: "Pan's Labyrinth (2006)",
    movie_year: 2006,
    Categories: "Drama|Fantasy|War",
    summary:
      "In 1944 falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the the true princess and will never see her real father, the king, again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Pans-Labyrinth-Movie-Poster.jpg",
    imdb_id: "tt0457430",
    imdb_rating: 8.2,
    runtime: 118,
    language: "English",
    ytid: "E7XGNPXdlGQ",
  },
  {
    Title: "Along with the Gods: The Two Worlds",
    fulltitle: "Along with the Gods: The Two Worlds (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Drama|Fantasy",
    summary:
      "Having died unexpectedly, firefighter Ja-hong is taken to the afterlife by 3 afterlife guardians. Only when he passes 7 trials over 49 days and proves he was innocent in human life, he's able to reincarnate, and his 3 afterlife guardians are by his side to defend him in trial.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Along-with-the-Gods-The-Two-Worlds-Movie-Poster.jpg",
    imdb_id: "tt7160070",
    imdb_rating: 7.4,
    runtime: 139,
    language: "English",
    ytid: "sD7dmu-IWNw",
  },

  {
    Title: "Ilo Ilo",
    fulltitle: "Ilo Ilo (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Set in Singapore, Ilo Ilo chronicles the relationship between the Lim family and their newly arrived maid, Teresa. Like many other Filipino women, she has come to this city in search of a better life. Her presence in the family worsens their already strained relationship. Jiale, the young and troublesome son, starts to form a unique bond with Teresa, who soon becomes an unspoken part of the family. This is 1997 and the Asian Financial Crisis is beginning to be felt in the region...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ilo-Ilo-Movie-Poster.jpg",
    imdb_id: "tt2901736",
    imdb_rating: 7.3,
    runtime: 99,
    language: "English",
    ytid: "MqtITxxMZvc",
  },
  {
    Title: "Bowling for Columbine",
    fulltitle: "Bowling for Columbine (2002)",
    movie_year: 2002,
    Categories: "Crime|Documentary|Drama",
    summary:
      "The United States of America is notorious for its astronomical number of people killed by firearms for a developed nation without a civil war. With his signature sense of angry humor, activist filmmaker Michael Moore sets out to explore the roots of this bloodshed. In doing so, he learns that the conventional answers of easy availability of guns, violent national history, violent entertainment and even poverty are inadequate to explain this violence when other cultures share those same factors without the equivalent carnage. In order to arrive at a possible explanation, Michael Moore takes on a deeper examination of America's culture of fear, bigotry and violence in a nation with widespread gun ownership. Furthermore, he seeks to investigate and confront the powerful elite political and corporate interests fanning this culture for their own unscrupulous gain.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bowling-for-Columbine-Movie-Poster.jpg",
    imdb_id: "tt0310793",
    imdb_rating: 8,
    runtime: 120,
    language: "English",
    ytid: "hH0mSAjp_Jw",
  },
  {
    Title: "Paddington 2",
    fulltitle: "Paddington 2 (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Paddington is happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's 100th birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Paddington-2-Movie-Poster.jpg",
    imdb_id: "tt4468740",
    imdb_rating: 8,
    runtime: 103,
    language: "English",
    ytid: "sw7RElt-SvE",
  },
  {
    Title: "Chasing Coral",
    fulltitle: "Chasing Coral (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Coral reefs around the world are vanishing at an unprecedented rate. A team of divers, photographers and scientists set out on a thrilling ocean adventure to discover why and to reveal the underwater mystery to the world.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Coral-Movie-Poster.jpg",
    imdb_id: "tt6333054",
    imdb_rating: 8.1,
    runtime: 93,
    language: "English",
    ytid: "b6fHA9R2cKI",
  },
  {
    Title: "Gaga: Five Foot Two",
    fulltitle: "Gaga: Five Foot Two (2017)",
    movie_year: 2017,
    Categories: "Biography|Documentary|Music|Musical",
    summary:
      "The documentary pulls back the curtain to introduce the woman behind the performer, the costumes, the glitz and the glamour. Off-stage, in the studio, unplugged and at home, audiences get an unguarded glimpse at Gaga through a series of personal highs and lows and the culmination of a year's emotional journey. From struggles with relationships to health issues, from finding solace in her inner circle to conquering her insecurities, Gaga: Five Foot Two navigates the divide between life as a superstar and life as an everyday woman.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gaga-Five-Foot-Two-Movie-Poster.jpg",
    imdb_id: "tt7291268",
    imdb_rating: 7.1,
    runtime: 100,
    language: "English",
    ytid: "IxI1iOi0t-c",
  },

  {
    Title: "Loveless",
    fulltitle: "Loveless (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Still living under the same roof, the Moscow couple of Boris and Zhenya is in the terrible final stages of a bitter divorce. Under those circumstances, as both have already found new partners, the insults pour down like rain in this toxic familial battle zone, always pivoting around the irresolvable and urgent matter of Alyosha's custody, their 12-year-old only son. Unheard, unloved, and above all, unwanted, the introverted and unhappy boy feels that he is an intolerable burden, however, what his parents don't know is that he can hear every single word. As a result, when Boris and Zhenya finally realize that Alyosha has been missing for nearly two days, it is already too late. But is this a simple case of a runaway teenager?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Loveless-Movie-Poster.jpg",
    imdb_id: "tt6304162",
    imdb_rating: 7.7,
    runtime: 127,
    language: "English",
    ytid: "6h5GuecUU-Q",
  },
  {
    Title: "Icarus",
    fulltitle: "Icarus (2017)",
    movie_year: 2017,
    Categories: "Documentary|Sport|Thriller",
    summary:
      "When Bryan Fogel sets out to uncover the truth about doping in sports, a chance meeting with a Russian scientist transforms his story from a personal experiment into a geopolitical thriller involving dirty urine, unexplained death and Olympic Gold-exposing the biggest scandal in sports history.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Icarus-Movie-Poster.jpg",
    imdb_id: "tt6333060",
    imdb_rating: 8,
    runtime: 121,
    language: "English",
    ytid: "qXoRdSTrR-4",
  },
  {
    Title: "Veronica",
    fulltitle: "Veronica (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror",
    summary:
      "Madrid, June of 1991. Verónica is a teenage girl surpassed by the circumstances after her father died recently, her mother works in a bar all day and she must care for her three siblings, twin girls Lucía and Irene and the youngest Antoñito. Still mourning for her father's death, Verónica decides to play Ouija with her friends Rosa and Diana, taking advantage a total solar eclipse where all classmates and teachers are on the school's rooftop watching it. Alone in the cellar, the girls try to contact their recent deceased family members, but the session goes wrong and something happens to Verónica. She hid from her mother what has happened, Verónica starts to feel strange presences inside the house and fears that these ghosts are a threat to any of her siblings. Advised by Sister Narcisa (nicknamed by the children as Sister Death) about the sinister spirit which is close to her, Verónica looking for a way to break the contact with the ghost and save everyone, suffering hallucinations ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Veronica-Movie-Poster.jpg",
    imdb_id: "tt5862312",
    imdb_rating: 6.2,
    runtime: 105,
    language: "English",
    ytid: "wNlMIvKnjOQ",
  },
  {
    Title: "Hostages",
    fulltitle: "Hostages (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "The movie describes real events that took place in 1983, when seven young Georgians, all from intellectual elite families, attempted to flee the Soviet Union by hijacking an airliner. The crisis ended with a storming of the airliner by Soviet special forces that resulted in eight dead. The surviving hijackers were subsequently tried and executed.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hostages-Movie-Poster.jpg",
    imdb_id: "tt5207262",
    imdb_rating: 6.3,
    runtime: 103,
    language: "English",
    ytid: "apVZcaujlGs",
  },

  {
    Title: "Strangled",
    fulltitle: "Strangled (2016)",
    movie_year: 2016,
    Categories: "Crime|Thriller",
    summary:
      "Based on real-life events, this psycho-thriller is set in the provincial Hungary of the 1960s, when a series of atrocious murders shock the small town of Martfü. A psychotic killer is on the prowl, who continues to slaughter young women while an innocent man is wrongly accused and sentenced for crimes he could never have committed. A determined detective arrives on the scene and soon becomes obsessed with the case while under pressure from the prosecutor to see a man hang. Stuck in the suffocating social, political and psychological world of socialist Hungary, we soon find ourselves entangled in a web of intricate conspiracy and disturbing drama.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Strangled-Movie-Poster.jpg",
    imdb_id: "tt4975280",
    imdb_rating: 7.1,
    runtime: 121,
    language: "English",
    ytid: "SpVUhG-fSxI",
  },
  {
    Title: "Still Life",
    fulltitle: "Still Life (2013)",
    movie_year: 2013,
    Categories: "Drama",
    summary:
      "Still Life is a poignant, quixotic tale of life, love and the afterlife. Meticulous and organized to the point of obsession, John May (Eddie Marsan) is a council worker charged with finding the next of kin of those who have died alone. When his department is downsized, John must up his efforts on his final case, taking him on a liberating journey that allows him to start living life at last.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Still-Life-Movie-Poster.jpg",
    imdb_id: "tt2395417",
    imdb_rating: 7.4,
    runtime: 92,
    language: "English",
    ytid: "1t3SXlPo-WA",
  },
  {
    Title: "Parked",
    fulltitle: "Parked (2010)",
    movie_year: 2010,
    Categories: "Drama",
    summary:
      "Fred Daly returns to Ireland with nowhere to live but his car. Then dope-smoking 21-year-old Cathal parks beside him, and brightens up his lonely world. Encouraged by Cathal, Fred meets attractive music teacher Jules. Growing closer, these three outsiders are set on a course that will change their lives forever.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Parked-Movie-Poster.jpg",
    imdb_id: "tt1571409",
    imdb_rating: 6.8,
    runtime: 94,
    language: "English",
    ytid: "m_fTqL3Szo0",
  },

  {
    Title: "Heartbeats",
    fulltitle: "Heartbeats (2010)",
    movie_year: 2010,
    Categories: "Drama|Romance",
    summary:
      "In a story interspersed with interview tales of romantic pitfalls, friendship turns to romantic rivalry for gay man Francis and straight woman Marie when a veritable Adonis named Nicolas enters their lives. Sexual tensions mount as Francis and Marie await Nicolas' show of preference.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Heartbeats-Movie-Poster.jpg",
    imdb_id: "tt1600524",
    imdb_rating: 7.2,
    runtime: 101,
    language: "English",
    ytid: "YknK1G-g-qc",
  },
  {
    Title: "I, Tonya",
    fulltitle: "I, Tonya (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama|Sport",
    summary:
      'From the proverbial wrong side of the tracks in Portland, Oregon, former competitive figure skater Tonya Harding was never fully accepted in the figure skating community for not inherently being the image of grace, breeding and privilege that the community wanted to portray, despite she being naturally gifted in the sport athletically. Despite ultimately garnering some success in figure skating being national champion, a world championship medalist, an Olympian, and being the first American woman to complete a Triple Axel in competition, she is arguably best known for her association to "the incident": the leg bashing on January 6, 1994 of her competitor, Nancy Kerrigan, who, unlike Tonya, was everything that the figure skating community wanted in their representatives. Her association to that incident led to Tonya being banned from competitive figure skating for life. Tonya\'s story from the beginning of her figure skating life at age four to the aftermath of the incident is presented...',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Tonya-Movie-Poster.jpg",
    imdb_id: "tt5580036",
    imdb_rating: 7.6,
    runtime: 120,
    language: "English",
    ytid: "OXZQ5DfSAAc",
  },
  {
    Title: "The Breadwinner",
    fulltitle: "The Breadwinner (2017)",
    movie_year: 2017,
    Categories: "Animation|Drama|Family",
    summary:
      "From executive producer Angelina Jolie and the creators of the Academy Award nominated The Secret of Kells and Song of the Sea, comes the highly-anticipated new feature based on Deborah Ellis' bestselling novel. Parvana is an 11-year-old girl growing up under the Taliban in Afghanistan in 2001. When her father is wrongfully arrested, Parvana cuts off her hair and dresses like a boy in order to support her family. Working alongside her friend Shauzia, Parvana discovers a new world of freedom-and danger. With undaunted courage, Parvana draws strength from the fantastical stories she invents, as she embarks on a quest to find her father and reunite her family. Equal parts thrilling and enchanting, The Breadwinner is an inspiring and luminously animated tale about the power of stories to sustain hope and carry us through dark times.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Breadwinner-Movie-Poster.jpg",
    imdb_id: "tt3901826",
    imdb_rating: 7.6,
    runtime: 94,
    language: "English",
    ytid: "p64O8KAHHaQ",
  },
  {
    Title: "Devil's Tree: Rooted Evil",
    fulltitle: "Devil's Tree: Rooted Evil (2018)",
    movie_year: 2018,
    Categories: "Horror|Thriller",
    summary:
      "Devil's Tree: Rooted Evil is about an aspiring journalist named Sam who finds a Tree with a very dark history. As her own past has demons that continue to haunt her, she eventually finds out what haunts this ominous Tree. Loosely based on real events, the actual Tree still stands today. This film takes you on a ride out of the realm of fantasy and into the realm of true Evil.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Devils-Tree-Rooted-Evil-Movie-Poster.jpg",
    imdb_id: "tt7315526",
    imdb_rating: 6.2,
    runtime: 76,
    language: "English",
    ytid: "n7ROX-PDs7A",
  },
  {
    Title: "Novitiate",
    fulltitle: "Novitiate (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Set in the early 1960s and during the era of Vatican II, a young woman in training to become a nun struggles with issues of faith, the changing church and sexuality.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Novitiate-Movie-Poster.jpg",
    imdb_id: "tt4513316",
    imdb_rating: 6.6,
    runtime: 123,
    language: "English",
    ytid: "o6QrP53BEug",
  },
  {
    Title: "The Eternal Road",
    fulltitle: "The Eternal Road (2017)",
    movie_year: 2017,
    Categories: "Drama|History",
    summary:
      "Based on true events an epic story of one man's struggle for survival. Jussi Ketola, returns to Finland from the great depression struck America only to face growing political unrest. One summer night of 1930, nationalist thugs violently abduct Ketola from his home. Beaten and forced to walk the Eternal Road towards a foreign Soviet Russia, where cruelty seems to know no end, his only dream is to return to his family cost it what it may. Hope dies last.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Eternal-Road-Movie-Poster.jpg",
    imdb_id: "tt4173170",
    imdb_rating: 7.3,
    runtime: 103,
    language: "English",
    ytid: "iYZl0lU6DF4",
  },
  {
    Title: "The Shape of Water",
    fulltitle: "The Shape of Water (2017)",
    movie_year: 2017,
    Categories: "Adventure|Drama|Fantasy|Horror|Romance",
    summary:
      "From master storyteller Guillermo del Toro comes THE SHAPE OF WATER, an otherworldly fable set against the backdrop of Cold War era America circa 1962. In the hidden high-security government laboratory where she works, lonely Elisa (Sally Hawkins) is trapped in a life of isolation. Elisa's life is changed forever when she and co-worker Zelda (Octavia Spencer) discover a secret classified experiment. Rounding out the cast are Michael Shannon, Richard Jenkins, Michael Stuhlbarg, and Doug Jones.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Shape-of-Water-Movie-Poster.jpg",
    imdb_id: "tt5580390",
    imdb_rating: 7.5,
    runtime: 123,
    language: "English",
    ytid: "XFYWazblaUA",
  },
  {
    Title: "Ferdinand",
    fulltitle: "Ferdinand (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Destined to become a fearless fighting bull, the young pacifist and flower-loving calf, Ferdinand, summons up the courage to escape from a Spanish bull-training camp, to finally find himself on little Nina's idyllic and fragrant farm. However, an unfortunate run-in with a busy golden bee will send the immense but peaceful animal back to the old Casa del Toro academy, where the famous matador, El Primero, usually selects his worthy bovine opponents for the arena. Does Ferdinand hide a fierce champion underneath a mountain of muscles, or is he a gentle giant after all?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferdinand-Movie-Poster.jpg",
    imdb_id: "tt3411444",
    imdb_rating: 6.7,
    runtime: 108,
    language: "English",
    ytid: "n7RkOfN8KvE",
  },

  {
    Title: "My Entire High School Sinking Into the Sea",
    fulltitle: "My Entire High School Sinking Into the Sea (2016)",
    movie_year: 2016,
    Categories: "Animation|Comedy|Drama",
    summary:
      "An earthquake causes a high school to float into the sea, where it slowly sinks like a shipwreck.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Entire-High-School-Sinking-Into-the-Sea-Movie-Poster.jpg",
    imdb_id: "tt5538568",
    imdb_rating: 6.2,
    runtime: 75,
    language: "English",
    ytid: "zepBuHGkiWc",
  },

  {
    Title: "The Body",
    fulltitle: "The Body (2012)",
    movie_year: 2012,
    Categories: "Mystery|Thriller",
    summary:
      'In the middle of the night, a guard working the night shift at the morgue located deep in the woods has a terrible car accident, and as a result, he is now in a coma, suffering multiple skull injuries and fractures. But what made the guard panic and leave his post in the first place? Furthermore, according to the register, the body of Mayka Villaverde, a beautiful well-off businesswoman, is mysteriously missing from the morgue. Presumably, Mayka died of a heart attack, nevertheless, who signed the death certificate with the autopsy pending? In the end, when in forensic medicine the principle of: "every death is a homicide until proven otherwise" is a basic general rule, finding out who is behind this case shrouded in mystery is going to be an arduous task.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Body-Movie-Poster.jpg",
    imdb_id: "tt1937149",
    imdb_rating: 7.6,
    runtime: 108,
    language: "English",
    ytid: "NyE5LnY3dT0",
  },
  {
    Title: "Generation Iron 2",
    fulltitle: "Generation Iron 2 (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "From the director of Generation Iron, comes the anticipated sequel that will depict 5 of the top bodybuilding and fitness mega-stars on a quest of achieving the ultimate physique and taking it to the next extreme level. In the world of social media and internet, the rules have changed as to what makes an iconic bodybuilding mass-monster. Starring Kai Greene, Calum Von Moger, Rich Piana, among others, this film will explore an all new generation of bodybuilders and how this new world, and new people, carve their own path to physique perfection.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Generation-Iron-2-Movie-Poster.jpg",
    imdb_id: "tt6263642",
    imdb_rating: 6.1,
    runtime: 106,
    language: "English",
    ytid: "Q8-oU2Fb5ro",
  },

  {
    Title: "Forgotten",
    fulltitle: "Forgotten (2017)",
    movie_year: 2017,
    Categories: "Mystery|Thriller",
    summary:
      "Jin-Seok (Kang Ha-Neul) moves into a new home with his older brother Yoo-Seok (Kim Moo-Yul), mother (Na Young-Hee) and father (Moon Sung-Geun). Jin-Seok suffers from hypersensitivity, but with medication he is able to live normally. One rainy evening, Jin-Seok sees his older brother being thrown into a van by a group of men. After 19 days of silence, Yoo-Seok returns home, but he doesn't remember anything from his disappearance. Jin-Seok though notices enough changes in his older brother's personality and behavior that he begins to suspect that the person who has returned is not Yoo-Seok. Meanwhile, Jin-Seok keeps hearing sounds from a locked room temporarily storing the previous home owner's belongings.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Forgotten-Movie-Poster.jpg",
    imdb_id: "tt7057496",
    imdb_rating: 7.2,
    runtime: 108,
    language: "English",
    ytid: "i5fAD6PqBMQ",
  },
  {
    Title: "The Girl Without Hands",
    fulltitle: "The Girl Without Hands (2016)",
    movie_year: 2016,
    Categories: "Animation",
    summary:
      "In hard times, a miller sells his daughter to the Devil. Protected by her purity, she escapes but is deprived of her hands. Walking away from her family, she encounters the goddess of water, a gentle gardener and the prince in his castle. A long journey towards the light...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Girl-Without-Hands-Movie-Poster.jpg",
    imdb_id: "tt5698496",
    imdb_rating: 7,
    runtime: 76,
    language: "English",
    ytid: "pfqb097tCFw",
  },
  {
    Title: "Same Kind of Different as Me",
    fulltitle: "Same Kind of Different as Me (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "International art dealer Ron Hall must befriend a dangerous homeless man in order to save his struggling marriage to his wife, a woman whose dreams will lead all three of them on the journey of their lives.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Same-Kind-of-Different-as-Me-Movie-Poster.jpg",
    imdb_id: "tt1230168",
    imdb_rating: 6.3,
    runtime: 119,
    language: "English",
    ytid: "PltWQ8kQe04",
  },
  {
    Title: "Meester Kikker",
    fulltitle: "Meester Kikker (2016)",
    movie_year: 2016,
    Categories: "Family",
    summary:
      "The classroom is astonished when their teacher tells them his big secret: sometimes he turns into a frog. Two kids see it as their task to protect his secret.. and to keep him out of the beak of a stork.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Meester-Kikker-Movie-Poster.jpg",
    imdb_id: "tt4923200",
    imdb_rating: 6.4,
    runtime: 86,
    language: "English",
    ytid: "WfZHRrki0_A",
  },
  {
    Title: "Marrowbone",
    fulltitle: "Marrowbone (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Thriller",
    summary:
      "A young man and his three younger siblings, who have kept secret the death of their beloved mother in order to remain together, are plagued by a sinister presence in the sprawling manor in which they live.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Marrowbone-Movie-Poster.jpg",
    imdb_id: "tt5886440",
    imdb_rating: 6.6,
    runtime: 110,
    language: "English",
    ytid: "cYz5sL9pbxU",
  },
  {
    Title: "Wonder Wheel",
    fulltitle: "Wonder Wheel (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "In the hustle and bustle of 1950s Coney Island, where the buzzing crowd comes and goes trudging slowly over the wooden boardwalks, silent stories of the everyday toilers who give life to the attraction unfold. Somewhere in a clam bar, there's the sad waitress Ginny, a one-time actress and now a suffering wife who's been given a second chance by the side of the well-intentioned but uncouth carousel operator, Humpty. On the other hand, there's Humpty's 26-year-old estranged daughter, Carolina, who left the familial nest and a preordained future seeking adventure as a mobster's wife; only to return home with her wings broken, begging for forgiveness. And from the lifeguard's high tower, where all is in plain sight, the young and charming lifesaver and hopeful playwright, Mickey, is the inadvertent but potent catalyst that binds everything together. Shattered dreams, reckless love and betrayal, all under the bright lights of Coney Island.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonder-Wheel-Movie-Poster.jpg",
    imdb_id: "tt5825380",
    imdb_rating: 6.2,
    runtime: 101,
    language: "English",
    ytid: "jsQ7633OZNc",
  },
  {
    Title: "The Disaster Artist",
    fulltitle: "The Disaster Artist (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama",
    summary:
      'Aspiring actor Greg Sestero befriends the eccentric Tommy Wiseau. The two travel to L.A, and when Hollywood rejects them, Tommy decides to write, direct, produce and star in their own movie. That movie is The Room, which has attained cult status as the "Citizen Kane" of bad movies.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Disaster-Artist-Movie-Poster.jpg",
    imdb_id: "tt3521126",
    imdb_rating: 7.6,
    runtime: 104,
    language: "English",
    ytid: "sPSJYXi7BWA",
  },
  {
    Title: "The Man Who Invented Christmas",
    fulltitle: "The Man Who Invented Christmas (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama",
    summary:
      "In 1843, the celebrated British novelist, Charles Dickens, is at a low point in his career with three flops behind him and his family expenses piling up at home. Determined to recover, Dickens decides to write a Christmas story and self-publish it in less than two months. As Dickens labors writing on such short notice, his estranged father and mother come to bunk with him. Still haunted by painful memories of his father ruining his childhood by his financial irresponsibly, Dickens develops a writer's block which seems to have no solution. As such, Dickens must face his personal demons epitomized through his characters, especially in his imagined conversations with Ebenezer Scrooge. Now with a looming deadline, Dickens struggles for inspiration against his frustrations and his characters' opinions in a literary challenge creating a classic tale that would define the essential soul of modern Christmas.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Man-Who-Invented-Christmas-Movie-Poster.jpg",
    imdb_id: "tt6225520",
    imdb_rating: 7,
    runtime: 104,
    language: "English",
    ytid: "UxcnYR3mcPU",
  },
  {
    Title: "Raw",
    fulltitle: "Raw (2016)",
    movie_year: 2016,
    Categories: "Drama|Horror",
    summary:
      "Justine is a first-year veterinary student. Her elder sister is studying the same course at the university. Justine was raised a strict vegetarian but, as part of the hazing rituals, is forced to eat meat. Initially this has adverse effects but she soon develops a craving for meat...particularly human flesh.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Raw-Movie-Poster.jpg",
    imdb_id: "tt4954522",
    imdb_rating: 7,
    runtime: 99,
    language: "English",
    ytid: "gFlXVX2af_Y",
  },
  {
    Title: "I Called Him Morgan",
    fulltitle: "I Called Him Morgan (2016)",
    movie_year: 2016,
    Categories: "Documentary|Drama|History|Music",
    summary:
      "On a snowy night in February 1972, celebrated jazz musician Lee Morgan was shot dead by his common-law wife Helen during a gig at a club in New York City. The murder sent shockwaves through the jazz community, and the memory of the event still haunts those who knew the Morgans. This feature documentary by Swedish filmmaker Kasper Collin is a love letter to two unique personalities and the music that brought them together. A film about love, jazz and America.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Called-Him-Morgan-Movie-Poster.jpg",
    imdb_id: "tt4170344",
    imdb_rating: 7.2,
    runtime: 92,
    language: "English",
    ytid: "yxLByThNvWU",
  },
  {
    Title: "The Women's Balcony",
    fulltitle: "The Women's Balcony (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "A bar mitzvah mishap causes a major rift in a devout Orthodox community in Jerusalem.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Womens-Balcony-Movie-Poster.jpg",
    imdb_id: "tt5974460",
    imdb_rating: 6.6,
    runtime: 96,
    language: "English",
    ytid: "heG--uvK-i4",
  },
  {
    Title: "Giant",
    fulltitle: "Giant (2017)",
    movie_year: 2017,
    Categories: "Drama|History",
    summary:
      "Having fought in the First Carlist War, Martin returns to his family farm in Gipuzkoa only to find that his younger brother, Joaquín, towers over him in height. Convinced that everyone will want to pay to see the tallest man on Earth, the siblings set out on a long trip all over Europe, during which ambition, money and fame will forever change the family's fate. A story based on true events.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Giant-Movie-Poster.jpg",
    imdb_id: "tt5693136",
    imdb_rating: 6.8,
    runtime: 114,
    language: "English",
    ytid: "elMP6PqGBo0",
  },
  {
    Title: "The Last Laugh",
    fulltitle: "The Last Laugh (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "Feature documentary about humor and the Holocaust, examining whether it is ever acceptable to use humor in connection with a tragedy of that scale, and the implications for other seemingly off-limits topics in a society that prizes free speech.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Last-Laugh-Movie-Poster.jpg",
    imdb_id: "tt2102508",
    imdb_rating: 7,
    runtime: 88,
    language: "English",
    ytid: "mzvz9OOqqdM",
  },
  {
    Title: "Human Flow",
    fulltitle: "Human Flow (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Over 65 million people around the world have been forced from their homes to escape famine, climate change and war in the greatest human displacement since World War II. Human Flow, an epic film journey led by the internationally renowned artist Ai Weiwei, gives a powerful visual expression to this massive human migration. The documentary elucidates both the staggering scale of the refugee crisis and its profoundly personal human impact. Captured over the course of an eventful year in 23 countries, the film follows a chain of urgent human stories that stretches across the globe in countries including Afghanistan, Bangladesh, France, Greece, Germany, Iraq, Israel, Italy, Kenya, Mexico, and Turkey. Human Flow is a witness to its subjects and their desperate search for safety, shelter and justice: from teeming refugee camps to perilous ocean crossings to barbed-wire borders; from dislocation and disillusionment to courage, endurance and adaptation; from the haunting lure of lives left ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Human-Flow-Movie-Poster.jpg",
    imdb_id: "tt6573444",
    imdb_rating: 6.9,
    runtime: 140,
    language: "English",
    ytid: "DVZGyTdk_BY",
  },
  {
    Title: "Burn Motherfucker, Burn!",
    fulltitle: "Burn Motherfucker, Burn! (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Explores the roots of civil unrest in California and the relationship between African Americans and LAPD.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Burn-Motherfucker-Burn-Movie-Poster.jpg",
    imdb_id: "tt6175670",
    imdb_rating: 6.5,
    runtime: 99,
    language: "English",
    ytid: "tx4vKHTNuAc",
  },
  {
    Title: "In This Corner of the World",
    fulltitle: "In This Corner of the World (2016)",
    movie_year: 2016,
    Categories: "Animation|Drama|Family|Fantasy|History",
    summary:
      "Set in Hiroshima during World War II, an eighteen-year-old girl gets married and now has to prepare food for her family despite the rationing and lack of supplies. As she struggles with the daily loss of life's amenities she still has to maintain the will to live.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-This-Corner-of-the-World-Movie-Poster.jpg",
    imdb_id: "tt4769824",
    imdb_rating: 7.9,
    runtime: 129,
    language: "English",
    ytid: "sDPRMcZs5Lw",
  },
  {
    Title: "Graduation",
    fulltitle: "Graduation (2016)",
    movie_year: 2016,
    Categories: "Crime|Drama",
    summary:
      "Romeo Aldea (49), a physician living in a small mountain town in Transylvania, has raised his daughter Eliza with the idea that once she turns 18, she will leave to study and live abroad. His plan is close to succeeding - Eliza has won a scholarship to study psychology in the UK. She just has to pass her final exams - a formality for such a good student. On the day before her first written exam, Eliza is assaulted in an attack that could jeopardize her entire future. Now Romeo has to make a decision. There are ways of solving the situation, but none of them using the principles he, as a father, has taught his daughter.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Graduation-Movie-Poster.jpg",
    imdb_id: "tt4936450",
    imdb_rating: 7.4,
    runtime: 128,
    language: "English",
    ytid: "dlxGMOJ0jK0",
  },

  {
    Title: "The Death of Stalin",
    fulltitle: "The Death of Stalin (2017)",
    movie_year: 2017,
    Categories: "Comedy|History",
    summary:
      "In early-1953 Moscow, under the Great Terror's heavy cloak of state paranoia, the ever-watchful Soviet leader, Joseph Stalin, collapses unexpectedly of a brain haemorrhage. Inevitably, when his body is discovered in the following morning, a frenetic surge of raw panic spreads like a virus in the senior members of the Council of Ministers, as they scramble to maintain order, weed out the competition, and, ultimately, take power. But in the middle of a gut-wrenching roller-coaster of incessant plotting, tireless machinations, and frail allegiances, absolutely no one is safe; not even the feared chief of the secret police, Lavrenti Beria. In the end, who will prevail after the death of Stalin?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Death-of-Stalin-Movie-Poster.jpg",
    imdb_id: "tt4686844",
    imdb_rating: 7.2,
    runtime: 107,
    language: "English",
    ytid: "kPpXFnHoC-0",
  },

  {
    Title: "Z-O-M-B-I-E-S",
    fulltitle: "Z-O-M-B-I-E-S (2018)",
    movie_year: 2018,
    Categories: "Musical|Romance",
    summary:
      "Disney's \"ZOMBIES\" is a music and dance filled story set in the fictitious world of Seabrook, a cookie-cutter community brimming with perky conformity, 50 years after a zombie apocalypse. Today, the zombies pose no threat, but are required to live in Zombietown, an isolated, rundown community infused with their unique creative spirit. When zombies are finally allowed to enroll in Seabrook High School, the charming, charismatic zombie Zed, who is determined to play football, meets freshman Addison, who dreams of being a cheerleader - the ultimate form of status in Seabrook. Addison takes a lot of flak for befriending Zed and his zombie friends, but comes to learn that zombies and cheerleaders aren't so different after all. Zed and Addison work together to show Seabrook what they can achieve when they embrace their differences and celebrate what makes them a community.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Z-O-M-B-I-E-S-Movie-Poster.jpg",
    imdb_id: "tt6878820",
    imdb_rating: 6.6,
    runtime: 94,
    language: "English",
    ytid: "sA93QG5Tqpw",
  },
  {
    Title: "2048: Nowhere to Run",
    fulltitle: "2048: Nowhere to Run (2017)",
    movie_year: 2017,
    Categories: "Action|Sci-Fi",
    summary:
      "Gentle Sapper, a replicant, unleashes his true power when he sees his loved ones in trouble.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/2048-Nowhere-to-Run-Movie-Poster.jpg",
    imdb_id: "tt7387408",
    imdb_rating: 6.9,
    runtime: 5,
    language: "English",
    ytid: "9TOx_7H2PXQ",
  },
  {
    Title: "A Taxi Driver",
    fulltitle: "A Taxi Driver (2017)",
    movie_year: 2017,
    Categories: "Action|Drama|History",
    summary:
      "May 1980. A Seoul taxi driver named Man-seob (SONG Kang-ho) comes across an offer too good to be true. If he drives a foreign passenger from Seoul down to Gwangju and back again before the curfew, he'll be paid the unthinkable sum of 100,000 won - enough to cover several months of unpaid rent. Without stopping to ask the details, he picks up the German reporter Peter (Thomas Kretschmann) and sets off along the highway. Although stopped by police roadblocks at the edge of Gwangju, Man-seob is desperate to earn his taxi fare, and eventually manages to find a way into the city. There they encounter students and ordinary citizens taking part in large-scale demonstrations against the government. Man-seob, alarmed by the danger in the air, pleads with Peter to go quickly back to Seoul. But Peter ignores him, and with the help of a university student Jae-sik (RYU Jun-yeol) and a Gwangju taxi driver named HWANG (YOO Hai-jin), begins shooting with his news camera. As time passes the situation ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/A-Taxi-Driver-Movie-Poster.jpg",
    imdb_id: "tt6878038",
    imdb_rating: 7.9,
    runtime: 137,
    language: "English",
    ytid: "bB7z4Xn5oNA",
  },
  {
    Title: "Midnight Runners",
    fulltitle: "Midnight Runners (2017)",
    movie_year: 2017,
    Categories: "Action|Comedy|Crime",
    summary:
      "Hwang Ki Joon, Mr Action, and Kang Hee Yeol, Mr Bookworm, are two best friends but contradictory students at Korean National Police University. They accidentally witness a kidnapping and decide to work together to track it down.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Midnight-Runners-Movie-Poster.jpg",
    imdb_id: "tt7056732",
    imdb_rating: 7.1,
    runtime: 109,
    language: "English",
    ytid: "cyVk51ksx4o",
  },

  {
    Title: "Bright Lights: Starring Carrie Fisher and Debbie Reynolds",
    fulltitle:
      "Bright Lights: Starring Carrie Fisher and Debbie Reynolds (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "Carrie Fisher and Debbie Reynolds star in a tender portrait of Hollywood royalty in all its eccentricity. From the red carpet to the back alleys behind it, the documentary is about the bonds of family love, which are beautifully bitter-sweet.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bright-Lights-Starring-Carrie-Fisher-and-Debbie-Reynolds-Movie-Poster.jpg",
    imdb_id: "tt5651050",
    imdb_rating: 8,
    runtime: 95,
    language: "English",
    ytid: "K97Rthh-qmk",
  },
  {
    Title: "The Happiest Day in the Life of Olli Mäki",
    fulltitle: "The Happiest Day in the Life of Olli Mäki (2016)",
    movie_year: 2016,
    Categories: "Biography|Drama|Romance|Sport",
    summary:
      "The true story of Olli Mäki, the famous Finnish boxer who had a shot at the 1962 World Featherweight title. Immensely talented and equally modest, Olli's small town life is transformed when he is swept into national stardom and suddenly regarded as a symbol of his country. There's only one problem: Olli has just fallen in love. Inside of the ring, it's Finland vs. the USA, but outside, boxing and romance become unlikely adversaries vying for Olli's attention. This charming feature debut from Juho Kuosmanen was awarded the Un Certain Regard Prize at the Cannes Film Festival.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Happiest-Day-in-the-Life-of-Olli-Mäki-Movie-Poster.jpg",
    imdb_id: "tt4771932",
    imdb_rating: 7.2,
    runtime: 92,
    language: "English",
    ytid: "jxBGb-YY5Vs",
  },
  {
    Title: "Chris Rock: Tamborine",
    fulltitle: "Chris Rock: Tamborine (2018)",
    movie_year: 2018,
    Categories: "Comedy",
    summary:
      "Chris Rock takes the stage in Brooklyn for a comedy special filled with searing observations on fatherhood, infidelity and American politics.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chris-Rock-Tamborine-Movie-Poster.jpg",
    imdb_id: "tt8005338",
    imdb_rating: 6.5,
    runtime: 64,
    language: "English",
    ytid: "Iz46th3HSMU",
  },
  {
    Title: "The Red Turtle",
    fulltitle: "The Red Turtle (2016)",
    movie_year: 2016,
    Categories: "Animation|Fantasy",
    summary:
      "Surrounded by the immense and furious ocean, a shipwrecked mariner battles all alone for his life with the relentless towering waves. Right on the brink of his demise, the man set adrift by the raging tempest washes ashore on a small and deserted tropical island of sandy beaches, timid animal inhabitants and a slender but graceful swaying bamboo forest. Alone, famished, yet, determined to break free from his Eden-like prison, after foraging for food and fresh water and encouraged by the dense forest, the stranded sailor builds a raft and sets off to the wide sea, however, an indistinguishable adversary prevents him from escaping. Each day, the exhausted man never giving up hope will attempt to make a new, more improved raft, but the sea is vast with wonderful and mysterious creatures and the island's only red turtle won't let the weary survivor escape that easily. Is this the heartless enemy?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Red-Turtle-Movie-Poster.jpg",
    imdb_id: "tt3666024",
    imdb_rating: 7.5,
    runtime: 80,
    language: "English",
    ytid: "Sw7BggqBpTk",
  },
  {
    Title: "Tragedy Girls",
    fulltitle: "Tragedy Girls (2017)",
    movie_year: 2017,
    Categories: "Comedy|Horror",
    summary:
      "A twist on the slasher genre, following two death-obsessed teenage girls who use their online show about real-life tragedies to send their small mid-western town into a frenzy, and cement their legacy as modern horror legends.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tragedy-Girls-Movie-Poster.jpg",
    imdb_id: "tt3859272",
    imdb_rating: 6,
    runtime: 98,
    language: "English",
    ytid: "8_APkCw-Dx8",
  },
  {
    Title: "Columbus",
    fulltitle: "Columbus (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "A Korean-born man finds himself stuck in Columbus, Indiana, where his architect father is in a coma. The man meets a young woman who wants to stay in Columbus with her mother, a recovering addict, instead of pursuing her own dreams.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Columbus-Movie-Poster.jpg",
    imdb_id: "tt5990474",
    imdb_rating: 7.3,
    runtime: 0,
    language: "English",
    ytid: "r3dcnV6Z9Zs",
  },

  {
    Title: "Dawson City: Frozen Time",
    fulltitle: "Dawson City: Frozen Time (2016)",
    movie_year: 2016,
    Categories: "Documentary|History",
    summary:
      "Dawson City: Frozen Time, pieces together the bizarre true history of a collection of some 500 films dating from 1910s - 1920s, which were lost for over 50 years until being discovered buried in a sub-arctic swimming pool deep in the Yukon Territory, in Dawson City, located about 350 miles south of the Arctic Circle. Using these permafrost protected, rare silent films and newsreels, archival footage, interviews and historical photographs to tell the story, and accompanied by an enigmatic score by Sigur Rós collaborator and composer Alex Somers (Captain Fantastic), Dawson City: Frozen Time depicts a unique history of a Canadian gold rush town by chronicling the life cycle of a singular film collection through its exile, burial, rediscovery, and salvation - and through that collection, how a First Nation hunting camp was transformed and displaced.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dawson-City-Frozen-Time-Movie-Poster.jpg",
    imdb_id: "tt5215486",
    imdb_rating: 7.6,
    runtime: 120,
    language: "English",
    ytid: "oEbHM8Vsvlo",
  },
  {
    Title: "Good Time",
    fulltitle: "Good Time (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Thriller",
    summary:
      "Motivated by an almost ferocious love for his intellectually disabled brother, Nick, and an explosive mix of desperation and thirst for a better life, the abrasive and fledgeling criminal, Connie, involves his sibling in an ill-conceived bank robbery that swears to be a quick and easy job. Instead, things go utterly wrong, and Nick will wind up in Rikers Island after one unanticipated complication, forcing the desperate but determined Connie to embark on a nightmarish, no-holds-barred quest to bail Nick out. Inevitably, over the course of a long and violent night, Connie will go to great lengths to save Nick from a cruel fate, doomed, however, to do more harm than good. Is it all heading somewhere?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Good-Time-Movie-Poster.jpg",
    imdb_id: "tt4846232",
    imdb_rating: 7.3,
    runtime: 101,
    language: "English",
    ytid: "nrR-SbCRgCU",
  },
  {
    Title: "Menashe",
    fulltitle: "Menashe (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Menashe, a widower, lives and works within the Hasidic community of Borough Park, Brooklyn. Since his wife passed away a year before, he has been trying hard to regain custody of his nine-year-old son, Rieven. But the rabbi (and all the community behind him) will not hear of it unless he re-marries, which Menashe does not want, his first marriage having been very unhappy. Father and son get on well together, but can Menashe take care of Rieven properly? Not really for all his goodwill as he holds down a low-paid job as a grocery clerk that consumes too much of his efforts and energy. Always late, always in a hurry, he endeavors to improve himself though. But will his efforts be enough to convince the rabbi that he can be a good father without a wife at home?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Menashe-Movie-Poster.jpg",
    imdb_id: "tt6333086",
    imdb_rating: 6.5,
    runtime: 82,
    language: "English",
    ytid: "83UoZcdX__Y",
  },
  {
    Title: "Newness",
    fulltitle: "Newness (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "In contemporary Los Angeles, two millennials navigating a social media-driven hookup culture begin a relationship that pushes both emotional and physical boundaries.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Newness-Movie-Poster.jpg",
    imdb_id: "tt6408226",
    imdb_rating: 6.4,
    runtime: 112,
    language: "English",
    ytid: "EtBhKTuPjEk",
  },
  {
    Title: "Kedi",
    fulltitle: "Kedi (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "In the city of Istanbul, there are more than just human inhabitants. There are also the stray domestic cats of the city who live free but have complicated relationships with the people themselves. This film follows a selection of individual cats as they live their own lives in Istanbul with their own distinctive personalities. However, with this vibrant population, is the reality of an ancient metropolis changing with the times that may have less of a place for them.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kedi-Movie-Poster.jpg",
    imdb_id: "tt4420704",
    imdb_rating: 7.7,
    runtime: 79,
    language: "English",
    ytid: "lKq7UqplcL8",
  },
  {
    Title: "Three Billboards Outside Ebbing, Missouri",
    fulltitle: "Three Billboards Outside Ebbing, Missouri (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "THREE BILLBOARDS OUTSIDE EBBING, MISSOURI is a darkly comic drama from Academy Award nominee Martin McDonagh (In Bruges). After months have passed without a culprit in her daughter's murder case, Mildred Hayes (Academy Award winner Frances McDormand) makes a bold move, painting three signs leading into her town with a controversial message directed at William Willoughby (Academy Award nominee Woody Harrelson), the town's revered chief of police. When his second-in-command Officer Dixon (Academy Award winner Sam Rockwell), an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Three-Billboards-Outside-Ebbing-Missouri-Movie-Poster.jpg",
    imdb_id: "tt5027774",
    imdb_rating: 8.2,
    runtime: 115,
    language: "English",
    ytid: "Jit3YhGx5pU",
  },
  {
    Title: "Jagga Jasoos",
    fulltitle: "Jagga Jasoos (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Musical|Mystery",
    summary:
      "Join Jagga, a gifted teenage detective, who along with a female companion, is on a quest to find his missing father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Jagga-Jasoos-Movie-Poster.jpg",
    imdb_id: "tt4129428",
    imdb_rating: 6.5,
    runtime: 161,
    language: "English",
    ytid: "YheC-4Qgoro",
  },

  {
    Title: "My Life as a Zucchini",
    fulltitle: "My Life as a Zucchini (2016)",
    movie_year: 2016,
    Categories: "Animation|Comedy|Drama",
    summary:
      "Courgette (Zucchini) is an intriguing nickname for a 9-year-old boy. Although his unique story is surprisingly universal. After his mother's disappearance, Courgette is befriended by a police officer Raymond, who accompanies him to his new foster home filled with other orphans his age. At first he struggles to find his place in this strange, at times, hostile environment. Yet with Raymond's help and his new-found friends, Courgette eventually learns to trust and might find true love.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Life-as-a-Zucchini-Movie-Poster.jpg",
    imdb_id: "tt2321405",
    imdb_rating: 7.8,
    runtime: 66,
    language: "English",
    ytid: "3nRwYWVxjRU",
  },
  {
    Title: "The Salesman",
    fulltitle: "The Salesman (2016)",
    movie_year: 2016,
    Categories: "Drama|Thriller",
    summary:
      'Forced to leave their collapsing house, Ranaa and Emad, an Iranian couple who happen to be performers rehearsing for Arthur Miller\'s "Death of a Salesman" rent a new apartment from one of their fellow performers. Unaware of the fact that the previous tenant had been a woman of ill repute having many clients, they settle down. By a nasty turn of events one of the clients pays a visit to the apartment one night while Ranaa is alone at home taking a bath and the aftermath turns the peaceful life of the couple upside down.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Salesman-Movie-Poster.jpg",
    imdb_id: "tt5186714",
    imdb_rating: 7.8,
    runtime: 124,
    language: "English",
    ytid: "r-61yYjKHHc",
  },
  {
    Title: "I Am Not Your Negro",
    fulltitle: "I Am Not Your Negro (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      'In 1979, James Baldwin wrote a letter to his literary agent describing his next project, "Remember This House." The book was to be a revolutionary, personal account of the lives and assassinations of three of his close friends: Medgar Evers, Malcolm X and Martin Luther King, Jr. At the time of Baldwin\'s death in 1987, he left behind only 30 completed pages of this manuscript. Filmmaker Raoul Peck envisions the book James Baldwin never finished.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Am-Not-Your-Negro-Movie-Poster.jpg",
    imdb_id: "tt5804038",
    imdb_rating: 7.8,
    runtime: 93,
    language: "English",
    ytid: "rNUYdgIyaPM",
  },
  {
    Title: "Lady Bird",
    fulltitle: "Lady Bird (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      'Christine "Lady Bird" MacPherson is a high school senior from the "wrong side of the tracks." She longs for adventure, sophistication, and opportunity, but finds none of that in her Sacramento Catholic high school. LADY BIRD follows the title character\'s senior year in high school, including her first romance, her participation in the school play, and most importantly, her applying for college.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Lady-Bird-Movie-Poster.jpg",
    imdb_id: "tt4925292",
    imdb_rating: 7.5,
    runtime: 94,
    language: "English",
    ytid: "cNi_HC839Wo",
  },

  {
    Title: "Blood of My Blood",
    fulltitle: "Blood of My Blood (2015)",
    movie_year: 2015,
    Categories: "Drama|History",
    summary:
      "Two haunting Italian tales from different centuries in the convent prison of Bobbio, caught somewhere between past and present: a young 17th century priest falls under the spell of a bewitching nun and a modern-day tax investigator tries to push a mysterious old man out of hiding.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blood-of-My-Blood-Movie-Poster.jpg",
    imdb_id: "tt2922590",
    imdb_rating: 6.2,
    runtime: 106,
    language: "English",
    ytid: "kS-RqI3ws_Y",
  },
  {
    Title: "I Am Not a Witch",
    fulltitle: "I Am Not a Witch (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Following a banal incident in her local village, 8-year old girl Shula is accused of witchcraft. After a short trial she is found guilty, taken into state custody and exiled to a witch camp in the middle of a desert. At the camp she takes part in an initiation ceremony where she is shown the rules surrounding her new life as a witch. Like the other residents, Shula is tied to a ribbon which is attached to a coil that perches in a large tree. She is told that should she ever cut the ribbon, she'll be cursed and transformed into a goat.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/I-Am-Not-a-Witch-Movie-Poster.jpg",
    imdb_id: "tt6213284",
    imdb_rating: 6.7,
    runtime: 93,
    language: "English",
    ytid: "telx5Pfe2-I",
  },
  {
    Title: "Sophie and the Rising Sun",
    fulltitle: "Sophie and the Rising Sun (2016)",
    movie_year: 2016,
    Categories: "Drama",
    summary:
      "Set in the autumn of 1941 in Salty Creek, a fishing village in South Carolina, the film tells the dramatic story of interracial lovers swept up in the tides of history. As World War II rages in Europe a wounded stranger, Mr. Ohta, appears in the town under mysterious circumstances. Sophie, a native of Salty Creek, quickly becomes transfixed by Mr. Ohta and a friendship born of their mutual love of art blossoms into a delicate and forbidden courtship. As their secret relationship evolves the war escalates tragically. When Pearl Harbor is bombed, a surge of misguided patriotism, bigotry and violence sweeps through the town, threatening Mr. Ohta's life. A trio of women, each with her own secrets - Sophie, along with the town matriarch and her housekeeper - rejects law and propriety, risking their lives with their actions.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sophie-and-the-Rising-Sun-Movie-Poster.jpg",
    imdb_id: "tt4532818",
    imdb_rating: 6.5,
    runtime: 105,
    language: "English",
    ytid: "E5nSoWkT8Hs",
  },
  {
    Title: "Justice League",
    fulltitle: "Justice League (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. Together, Batman and Wonder Woman work quickly to find and recruit a team of metahumans to stand against this newly awakened threat. But despite the formation of this unprecedented league of heroes-Batman, Wonder Woman, Aquaman, Cyborg and The Flash-it may already be too late to save the planet from an assault of catastrophic proportions.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Justice-League-Movie-Poster.jpg",
    imdb_id: "tt0974015",
    imdb_rating: 6.7,
    runtime: 120,
    language: "English",
    ytid: "r9-DM9uBtVI",
  },
  {
    Title: "Contemporary Color",
    fulltitle: "Contemporary Color (2016)",
    movie_year: 2016,
    Categories: "Documentary|Music",
    summary:
      "In the summer of 2015, legendary musician David Byrne staged an event at Brooklyn's Barclays Center to celebrate the art of Color Guard: synchronized dance routines involving flags, rifles, and sabers. Recruiting performers that include the likes of Saint Vincent, Nelly Furtado, Ad-Rock, and Ira Glass to collaborate on original pieces with 10 color guard teams from across the US and Canada, Contemporary Color is a beautifully filmed snapshot of a one-of-a-kind live event.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Contemporary-Color-Movie-Poster.jpg",
    imdb_id: "tt5258306",
    imdb_rating: 6.4,
    runtime: 97,
    language: "English",
    ytid: "p3xvU1qqUwg",
  },
  {
    Title: "The Ballad of Lefty Brown",
    fulltitle: "The Ballad of Lefty Brown (2017)",
    movie_year: 2017,
    Categories: "Western",
    summary:
      "When cowboy Lefty Brown witnesses the murder of his longtime partner, the newly-elected Senator Edward Johnson. He strikes out to find the killers and avenge his friend's cold-blooded murder. Tracking the outlaws across the vast and desolate Montana plains, Lefty stumbles across a young wannabe gunslinger, Jeremiah, and an old friend, a former hard-drinking pal turned U.S. Marshall, to help deliver the men to justice. After a gunfight with the outlaws leaves Jeremiah wounded, Lefty returns home with the names of Johnson's killers only to find that he is being accused of his friend's murder by the governor. With the tables turned Lefty must evade the law, get the Marshall to stop drinking again, and prove his innocence by exposing the powerful men ultimately responsible for Johnson's death.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Ballad-of-Lefty-Brown-Movie-Poster.jpg",
    imdb_id: "tt4400994",
    imdb_rating: 6.2,
    runtime: 111,
    language: "English",
    ytid: "Sv2khM97ylU",
  },
  {
    Title: "In the Family",
    fulltitle: "In the Family (2011)",
    movie_year: 2011,
    Categories: "Drama|Romance",
    summary:
      "In the town of Martin, Tennessee, Chip Hines, a precocious six year old, has only known life with his two dads, Cody and Joey. And a good life it is. When Cody dies suddenly in a car accident, Joey and Chip struggle to find their footing again. Just as they begin to, Cody's will reveals that he named his sister as Chip's guardian. The years of Joey's acceptance into the family unravel as Chip is taken away from him. In his now solitary home life, Joey searches for a solution. The law is not on his side, but friends are. Armed with their comfort and inspired by memories of Cody, Joey finds a path to peace with the family and becomes closer to his son.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-the-Family-Movie-Poster.jpg",
    imdb_id: "tt1845804",
    imdb_rating: 7.1,
    runtime: 169,
    language: "English",
    ytid: "-ECpRYBYEt8",
  },
  {
    Title: "Blade of the Immortal",
    fulltitle: "Blade of the Immortal (2017)",
    movie_year: 2017,
    Categories: "Action|Drama",
    summary:
      "Manji, a highly skilled samurai, becomes cursed with immortality after a legendary battle. Haunted by the brutal murder of his sister, Manji knows that only fighting evil will regain his soul. He promises to help a young girl named Rin avenge her parents, who were killed by a group of master swordsmen led by ruthless warrior Anotsu. The mission will change Manji in ways he could never imagine - the 100th film by master director Takashi Miike.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blade-of-the-Immortal-Movie-Poster.jpg",
    imdb_id: "tt5084170",
    imdb_rating: 6.8,
    runtime: 140,
    language: "English",
    ytid: "exLJtcfxKHg",
  },
  {
    Title: "Batman: Gotham by Gaslight",
    fulltitle: "Batman: Gotham by Gaslight (2018)",
    movie_year: 2018,
    Categories: "Action|Adventure|Animation|Crime|Fantasy",
    summary:
      "In an age of mystery and superstition, how would the people of Gotham react to a weird creature of the night, a bat-garbed vigilante feared by the guilty and the innocent alike? The very first Elseworlds tale re-imagines the Dark Knight detective in Victorian times and pits him against the infamous murderer Jack the Ripper.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Batman-Gotham-by-Gaslight-Movie-Poster.jpg",
    imdb_id: "tt7167630",
    imdb_rating: 6.8,
    runtime: 78,
    language: "English",
    ytid: "R7FuOmlAO1k",
  },
  {
    Title: "Darkest Hour",
    fulltitle: "Darkest Hour (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History|War",
    summary:
      "During World War II, as Adolf Hitler's awesomely powerful Wehrmacht rampages across Europe, the Prime Minister of the United Kingdom, Neville Chamberlain, is forced to resign, recommending Winston Churchill as his replacement. But even in his early days as the country's leader, Churchill is under pressure to commence peace negotiations with the German dictator or to fight head-on the seemingly invincible Nazi regime, whatever the cost. However difficult and dangerous his decision may be, Churchill has no choice but to shine in the country's darkest hour.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Darkest-Hour-Movie-Poster.jpg",
    imdb_id: "tt4555426",
    imdb_rating: 7.4,
    runtime: 125,
    language: "English",
    ytid: "LtJ60u7SUSw",
  },

  {
    Title: "In Search of Balance",
    fulltitle: "In Search of Balance (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "At a genetic level, humans are literally connected to the rest of the natural world through our DNA. But today's highly processed foods, pesticide based monoculture farming methods, increasing urbanization, obsession with technology and destruction of the natural environment distance us further and further from the world we coevolved with. We are out of balance with nature and the reductionist philosophy of modern western medicine, once immensely powerful, seems inadequate to answer today's challenges.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/In-Search-of-Balance-Movie-Poster.jpg",
    imdb_id: "tt5022626",
    imdb_rating: 6.6,
    runtime: 74,
    language: "English",
    ytid: "x4pLLL8XF5Q",
  },
  {
    Title: "Minimalism: A Documentary About the Important Things",
    fulltitle: "Minimalism: A Documentary About the Important Things (2015)",
    movie_year: 2015,
    Categories: "Documentary",
    summary:
      "How might your life be better with less? Minimalism: A Documentary About the Important Things examines the many flavors of minimalism by taking the audience inside the lives of minimalists from all walks of life -- families, entrepreneurs, architects, artists, journalists, scientists, and even a former Wall Street broker -- all of whom are striving to live a meaningful life with less.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Minimalism-A-Documentary-About-the-Important-Things-Movie-Poster.jpg",
    imdb_id: "tt3810760",
    imdb_rating: 6.7,
    runtime: 79,
    language: "English",
    ytid: "0Co1Iptd4p4",
  },
  {
    Title: "Tom of Finland",
    fulltitle: "Tom of Finland (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Touko Laaksonen, a decorated officer, returns home after a harrowing and heroic experience serving his country in World War II, but life in Finland during peacetime proves equally distressing. He finds peace-time Helsinki rampant with persecution of the homosexual men around him, even being pressured to marry women and have children. Touko finds refuge in his liberating art, specializing in homoerotic drawings of muscular men, free of inhibitions. His work - made famous by his signature 'Tom of Finland' - became the emblem of a generation of men and fanned the flames of a gay revolution.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tom-of-Finland-Movie-Poster.jpg",
    imdb_id: "tt5226984",
    imdb_rating: 6.9,
    runtime: 115,
    language: "English",
    ytid: "V0E9zPRt96w",
  },
  {
    Title: "Thelma",
    fulltitle: "Thelma (2017)",
    movie_year: 2017,
    Categories: "Drama|Fantasy|Mystery|Romance|Thriller",
    summary:
      "Having just enrolled at a university in Oslo against her stern parents' will, the sheltered Biology freshman and devout Christian, Thelma, leaves for the first time the isolated Norwegian countryside, to start a new life away from home. Tangibly lonely, a casual conversation and an unexpected friendship in the face of the beautiful fellow student, Anja, will broaden Thelma's hazy horizons; however, as the glacially alluring misfit wrestles with an onslaught of novel feelings, an unprecedented psychosomatic manifestation of repressed emotions takes over. A mystery cloaks soft-spoken Thelma's past, and the more she struggles to renounce her nebulous desire, the more violent is her quivering awakening. But can Thelma find a denied truth behind a stinging temptation?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thelma-Movie-Poster.jpg",
    imdb_id: "tt6304046",
    imdb_rating: 7.1,
    runtime: 116,
    language: "English",
    ytid: "vgQMHG9SGlU",
  },
  {
    Title: "My Friend Dahmer",
    fulltitle: "My Friend Dahmer (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Horror",
    summary: "A young Jeffrey Dahmer struggles to belong in high school.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Friend-Dahmer-Movie-Poster.jpg",
    imdb_id: "tt2291540",
    imdb_rating: 6.4,
    runtime: 107,
    language: "English",
    ytid: "jmnuC7tn9D4",
  },
  {
    Title: "When We First Met",
    fulltitle: "When We First Met (2018)",
    movie_year: 2018,
    Categories: "Comedy|Fantasy|Romance",
    summary:
      "Noah spends the perfect first night with Avery, the girl of his dreams, but gets relegated to the friend zone. He spends the next three years wondering what went wrong - until he gets the unexpected chance to travel back in time and change that night - and his fate - over and over again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/When-We-First-Met-Movie-Poster.jpg",
    imdb_id: "tt5783956",
    imdb_rating: 6.4,
    runtime: 97,
    language: "English",
    ytid: "d2sJNee7FQ4",
  },
  {
    Title: "Bomb City",
    fulltitle: "Bomb City (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Thriller|Western",
    summary:
      "Bomb City is a crime-drama, about the cultural aversion of a group of punk rockers in a conservative Texas town. Their ongoing battle with a rival, more-affluent clique leads to a controversial hate crime that questions the morality of American justice. Based on the true story of Brian Deneke.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bomb-City-Movie-Poster.jpg",
    imdb_id: "tt4351548",
    imdb_rating: 7.1,
    runtime: 95,
    language: "English",
    ytid: "ir4IraOtads",
  },
  {
    Title: "The Ritual",
    fulltitle: "The Ritual (2017)",
    movie_year: 2017,
    Categories: "Horror",
    summary:
      "A group of college friends reunite for a trip to the forest, but encounter a menacing presence in the woods that's stalking them.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Ritual-Movie-Poster.jpg",
    imdb_id: "tt5638642",
    imdb_rating: 6.3,
    runtime: 94,
    language: "English",
    ytid: "Vfugwq2uoa0",
  },
  {
    Title: "Accident Man",
    fulltitle: "Accident Man (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Thriller",
    summary:
      "Mike Fallon, the Accident Man, is a stone cold killer whose methodical hits baffle the police and delight his clients. He is the best at what he does. But when a loved one is dragged into the London underworld and murdered by his own crew, Fallon is forced to rip apart the life he knew in order to hold those accountable and avenge the one person who actually meant something to him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Accident-Man-Movie-Poster.jpg",
    imdb_id: "tt6237612",
    imdb_rating: 6.1,
    runtime: 105,
    language: "English",
    ytid: "hk6Fhe8HyKs",
  },
  {
    Title: "Coco",
    fulltitle: "Coco (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Coco-Movie-Poster.jpg",
    imdb_id: "tt2380307",
    imdb_rating: 8.5,
    runtime: 0,
    language: "English",
    ytid: "6Zxj9q8Yjdw",
  },
  {
    Title: "Murder on the Orient Express",
    fulltitle: "Murder on the Orient Express (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery",
    summary:
      "Hercule Poirot, the best detective in the world decides to leave on the Orient Express. The train accidentally gets stopped because of a small avalanche. Little did he know that a murder was planned and that a person on this train was able of committing such crime. Will he solve this murder before the train starts working again?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Murder-on-the-Orient-Express-Movie-Poster.jpg",
    imdb_id: "tt3402236",
    imdb_rating: 6.6,
    runtime: 114,
    language: "English",
    ytid: "Mq4m3yAoW8E",
  },
  {
    Title: "Doctor Who: Shada",
    fulltitle: "Doctor Who: Shada (2017)",
    movie_year: 2017,
    Categories: "Sci-Fi",
    summary:
      "The story revolves around the planet Shada, on which the Time Lords have constructed a high security prison for some of the Universe's most dangerous criminals. Skagra, a flawed genius from the planet Dronoid, wishes to create a \"Universal Mind\" in which all the pooled knowledge of the universe's greatest criminals would be placed at his disposal and with which he intends to take control of the Universe. Skagra wants to go to Shada to extract the knowledge of the criminals who have been imprisoned there. Unfortunately for Skagra, knowledge of the location of Shada has been deliberately hidden by the Time Lords, but Skagra discovers that there is a Time Lord living on Earth in the twentieth century who may hold the key to its location. This Time Lord is masquerading as a professor at St. Cedd's College, Cambridge and calling himself Professor Chronotis. Sensing danger, Chronotis calls for the assistance of his old friend and protégé, the Doctor. The story climaxes in a battle for ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Doctor-Who-Shada-Movie-Poster.jpg",
    imdb_id: "tt7689226",
    imdb_rating: 6,
    runtime: 138,
    language: "English",
    ytid: "jBpmCZV6GAc",
  },
  {
    Title: "The Everlasting Flame",
    fulltitle: "The Everlasting Flame (2009)",
    movie_year: 2009,
    Categories: "Documentary|Sport",
    summary: "Official Film of the Beijing Olympics.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Everlasting-Flame-Movie-Poster.jpg",
    imdb_id: "tt1491616",
    imdb_rating: 6.2,
    runtime: 101,
    language: "English",
    ytid: "0BE0fL_tqnc",
  },
  {
    Title: "Daddy's Home 2",
    fulltitle: "Daddy's Home 2 (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      "Having finally gotten used to each other's existence, Brad and Dusty must now deal with their intrusive fathers during the holidays.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Daddys-Home-2-Movie-Poster.jpg",
    imdb_id: "tt5657846",
    imdb_rating: 6,
    runtime: 100,
    language: "English",
    ytid: "yyW_EX7iRW0",
  },
  {
    Title: "The Florida Project",
    fulltitle: "The Florida Project (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Halley lives with her six year old daughter Moonee in a budget motel along one of the commercial strips catering to the Walt Disney World tourist clientele outside Orlando, Florida. Halley, who survives largely on welfare, has little respect for people, especially those who cross her, it an attitude that she has passed down to Moonee, who curses and gives the finger like her mother. Although the motel's policy is not to allow long term rentals, Bobby, the motel manager, has made arrangements for people like Halley to live there while not undermining the policy as he realizes that many such tenants have no place to go otherwise. Halley, Moonee and Moonee's friends, who live in the motel or others like it along the strip and who she often drags into her disruptive pranks, are often the bane of Bobby's existence, but while dealing with whatever problem arises, Bobby has a soft spot especially for the children and thus, by association, their parents, as he knows that Moonee and others ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Florida-Project-Movie-Poster.jpg",
    imdb_id: "tt5649144",
    imdb_rating: 7.6,
    runtime: 111,
    language: "English",
    ytid: "WwQ-NH1rRT4",
  },
  {
    Title: "Only the Brave",
    fulltitle: "Only the Brave (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      'In 2007 Prescott, Arizona, Eric Marsh of the Prescott Fire Department is frustrated fighting forest fires when the Type 1 or "Hotshot" front line forest fire fighting crews from afar overrule his operational suggestions to his area\'s sorrow. To change that, Marsh gets approval from the Mayor to attempt to organize an unprecedented certified municipal-based Hotshot crew for Prescott. To that end, Marsh needs new recruits, which includes the young wastrel, Brendan McDonough, to undergo the rigorous training and qualification testing for the most dangerous of fire fighting duty. Along the way, the new team meets the challenge and the hailed Granite Mountain Hotshots are born. In doing so, all the men, especially McDonough, are changed as new experience and maturity is achieved in fire-forged camaraderie. All this is put to the test in 2013 with the notorious Yarnell Hill Fire that will demand efforts and sacrifices no one can ignore.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Only-the-Brave-Movie-Poster.jpg",
    imdb_id: "tt3829920",
    imdb_rating: 7.7,
    runtime: 134,
    language: "English",
    ytid: "EE_GY6zccqc",
  },
  {
    Title: "God's Own Country",
    fulltitle: "God's Own Country (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "Spring. Yorkshire. Isolated young sheep farmer Johnny Saxby numbs his daily frustrations with binge drinking and casual sex, until the arrival of a Romanian migrant worker Gheorghe, employed for the lambing season, ignites an intense relationship that sets Johnny on a new path.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gods-Own-Country-Movie-Poster.jpg",
    imdb_id: "tt5635086",
    imdb_rating: 7.7,
    runtime: 104,
    language: "English",
    ytid: "ki3B3C2tGBQ",
  },
  {
    Title: "Wonder",
    fulltitle: "Wonder (2017)",
    movie_year: 2017,
    Categories: "Drama|Family",
    summary:
      "Based on the New York Times bestseller, WONDER tells the incredibly inspiring and heartwarming story of August Pullman. Born with facial differences that, up until now, have prevented him from going to a mainstream school, Auggie becomes the most unlikely of heroes when he enters the local fifth grade. As his family, his new classmates, and the larger community all struggle to discover their compassion and acceptance, Auggie's extraordinary journey will unite them all and prove you can't blend in when you were born to stand out.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wonder-Movie-Poster.jpg",
    imdb_id: "tt2543472",
    imdb_rating: 8,
    runtime: 113,
    language: "English",
    ytid: "YRXmuv7JP-A",
  },
  {
    Title: "Crooked House",
    fulltitle: "Crooked House (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery",
    summary:
      "In this classic Agatha Christie detective story, former diplomat Charles Hayward has returned from Cairo to London to become a private detective. When Aristide Leonides, a wealthy and ruthless tycoon, is poisoned in his own bed, Detective Hayward is invited to solve the crime. As the investigation deepens he must confront the shocking realization that one of the key suspects is Aristede's beautiful granddaughter, his employer and former lover; and must keep a clear head to navigate the sultry Sophia and the rest of her hostile family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Crooked-House-Movie-Poster.jpg",
    imdb_id: "tt1869347",
    imdb_rating: 6.3,
    runtime: 115,
    language: "English",
    ytid: "JwTYh5BHH5A",
  },
  {
    Title: "Roman J. Israel, Esq.",
    fulltitle: "Roman J. Israel, Esq. (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "ROMAN J. ISRAEL, ESQ. is a dramatic thriller set in the underbelly of the overburdened Los Angeles criminal court system. Denzel Washington stars as Roman Israel, a driven, idealistic defense attorney who, through a tumultuous series of events, finds himself in a crisis that leads to extreme action. Colin Farrell costars as the monied, cutthroat lawyer who recruits Roman to his firm.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Roman-J.-Israel-Esq.-Movie-Poster.jpg",
    imdb_id: "tt6000478",
    imdb_rating: 6.4,
    runtime: 122,
    language: "English",
    ytid: "tGVIKqbEtdU",
  },
  {
    Title: "Wheelman",
    fulltitle: "Wheelman (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Mystery|Thriller",
    summary:
      "After three years in prison, the driver known as Wheelman has to work for mobsters to pay for a debt. When he is assigned to drive a getaway car for a bank heist, he is not able to contact his liaison and a stranger call him giving orders to deliver the stolen money to him. Soon he learns that he has been betrayed by his contact and spends the night trying to save his thirteen year-old Katie and his ex-wife Jessica from a gang that wants the money robbed from the bank. But who can be trusted?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wheelman-Movie-Poster.jpg",
    imdb_id: "tt5723286",
    imdb_rating: 6.4,
    runtime: 82,
    language: "English",
    ytid: "38rOdku5Voc",
  },
  {
    Title: "Voyeur",
    fulltitle: "Voyeur (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      'Journalism icon Gay Talese reports on Gerald Foos, the owner of a Colorado motel, who allegedly secretly watched his guests with the aid of specially designed ceiling vents, peering down from an "observation platform" he built in the motel\'s attic.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Voyeur-Movie-Poster.jpg",
    imdb_id: "tt7588790",
    imdb_rating: 6.2,
    runtime: 96,
    language: "English",
    ytid: "kTAYqsT05Dc",
  },
  {
    Title: "The Great Invisible",
    fulltitle: "The Great Invisible (2014)",
    movie_year: 2014,
    Categories: "Documentary",
    summary:
      'On April 20, 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico. It killed 11 workers and caused the worst oil spill in American history. The explosion still haunts the lives of those most intimately affected, though the story has long ago faded from the front page. At once a fascinating corporate thriller, a heartbreaking human drama and a peek inside the walls of the secretive oil industry, "The Great Invisible" is the first documentary feature to go beyond the media coverage to examine the crisis in depth through the eyes of oil executives, survivors and Gulf Coast residents who experienced it first-hand and then were left to pick up the pieces while the world moved on.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Great-Invisible-Movie-Poster.jpg",
    imdb_id: "tt3567200",
    imdb_rating: 6.6,
    runtime: 92,
    language: "English",
    ytid: "sv9Xm1WsIXA",
  },

  {
    Title: "The Meyerowitz Stories",
    fulltitle: "The Meyerowitz Stories (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "An estranged family gathers together in New York for an event celebrating the artistic work of their father.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Meyerowitz-Stories-Movie-Poster.jpg",
    imdb_id: "tt5536736",
    imdb_rating: 7,
    runtime: 112,
    language: "English",
    ytid: "8zShjmv0Vg4",
  },
  {
    Title: "Our Souls at Night",
    fulltitle: "Our Souls at Night (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      "In Holt, a small Colorado town, Addie Moore (Jane Fonda) pays an unexpected visit to a neighbor, Louis Waters (Robert Redford). Her husband died years ago, as did his wife, and in such a small town they'd been neighbors for decades, but had little contact. Their children (Matthias Schoenaerts and Judy Greer) live far away and they are all alone in their big houses. Addie seeks to establish a connection, and make the most of the rest of the time they have.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Our-Souls-at-Night-Movie-Poster.jpg",
    imdb_id: "tt5034266",
    imdb_rating: 6.9,
    runtime: 103,
    language: "English",
    ytid: "lci71HjGvaM",
  },
  {
    Title: "Cuba and the Cameraman",
    fulltitle: "Cuba and the Cameraman (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Life in Cuba for three struggling families over the course of 45 years, from the cautious optimism of the early 1970s to the harrowing 1990s after the fall of the Soviet Union and the 2016 death of Fidel Castro.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Cuba-and-the-Cameraman-Movie-Poster.jpg",
    imdb_id: "tt7320560",
    imdb_rating: 8.2,
    runtime: 113,
    language: "English",
    ytid: "lsZ8hDutkeM",
  },
  {
    Title: "Catching the Sun",
    fulltitle: "Catching the Sun (2015)",
    movie_year: 2015,
    Categories: "Documentary|Drama|History|News",
    summary:
      "Through the stories of workers and entrepreneurs in the U.S. and China, Catching the Sun captures the global race to lead the clean energy future. Over the course of a solar jobs training program, Catching the Sun follows the hope and heartbreak of unemployed American workers seeking jobs in the solar industry. With countries like China investing in innovative technologies and capitalizing on this trillion-dollar opportunity, Catching the Sun tells the story of the global energy transition from the perspective of workers and entrepreneurs building solutions to income inequality and climate change with their own hands. Their successes and failures speak to one of the biggest questions of our time: will the U.S. actually be able to build a clean energy economy?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Catching-the-Sun-Movie-Poster.jpg",
    imdb_id: "tt1698654",
    imdb_rating: 7,
    runtime: 75,
    language: "English",
    ytid: "NjTi1j4enl4",
  },

  {
    Title: "1922",
    fulltitle: "1922 (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|Mystery|Thriller",
    summary:
      'Featuring shades of Edgar Allen Poe\'s ["A Tell-tale Heart" and] "The Black Cat", 1922, with a Bonny and Clyde sub-plot, based on the Stephen King novella of the same name, centers on simple but proud farmer, Wilfred James, who, with his young son, murders his wife to gain ownership of her inherited land. Shortly after, however, strange and supernatural occurrences begin to plague both James and his farm. Is it just simple bad luck, or is it the work of something much more sinister?',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/1922-Movie-Poster.jpg",
    imdb_id: "tt6214928",
    imdb_rating: 6.3,
    runtime: 102,
    language: "English",
    ytid: "3E_fT0aTsjI",
  },
  {
    Title: "Bright",
    fulltitle: "Bright (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Fantasy|Thriller",
    summary:
      "In Los Angeles, humans live with orcs and elves in a world where fantasy creatures do exist. LAPD police officer Dayl Ward is the first human cop having the orc police officer Nick Jakoby as a partner. When Ward is shot by an orc and Jakoby does not capture the shooter, he questions whether Jakoby lets the fellow orc escape. During a patrol, Ward and Jakoby arrest a man that tells that there is a prophecy and Ward is blessed. Meanwhile, Internal Affairs press Ward to find the truth about the escape of the shooter so that they can fire Jakoby. The magic department of the FBI interrogates the man that belongs to the terrorist Shield of Light group which protects brights so that they can prepare for the return of the Dark Lord that will destroy the world. Ward and Jakoby are summoned to attend a disturbance and they stumble upon a Shield of Light safe-house where they arrest the elf Tikka and bag her magic wand. Soon they learn that Tikka is hunted down by the evil and powerful rogue elf...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Bright-Movie-Poster.jpg",
    imdb_id: "tt5519340",
    imdb_rating: 6.4,
    runtime: 117,
    language: "English",
    ytid: "6EZCBSsBxko",
  },
  {
    Title: "Thor: Ragnarok",
    fulltitle: "Thor: Ragnarok (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy|Fantasy|Sci-Fi",
    summary:
      "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thor-Ragnarok-Movie-Poster.jpg",
    imdb_id: "tt3501632",
    imdb_rating: 7.9,
    runtime: 130,
    language: "English",
    ytid: "ue80QwXMRHg",
  },
  {
    Title: "Phineas and Ferb the Movie: Across the 2nd Dimension",
    fulltitle: "Phineas and Ferb the Movie: Across the 2nd Dimension (2011)",
    movie_year: 2011,
    Categories: "Action|Adventure|Animation|Comedy|Family",
    summary:
      "Perry's worst fear comes true when Phineas and Ferb find out that he is in fact Secret Agent P, but that soon pales in comparison during a trip to the 2nd dimension where Perry finds out that Dr. Doofenshmirtz is truly evil and successful.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Phineas-and-Ferb-the-Movie-Across-the-2nd-Dimension-Movie-Poster.jpg",
    imdb_id: "tt1825918",
    imdb_rating: 7.5,
    runtime: 0,
    language: "English",
    ytid: "LzSp8gxkw9k",
  },
  {
    Title: "Sweet Virginia",
    fulltitle: "Sweet Virginia (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "A former rodeo star, with a small time life, unknowingly starts a rapport with a young man who is responsible for the violence that has suddenly gripped his small town. Every character from his loved ones to his business patrons, plays a part in the unravelling of this community. Our aged hero must face his relationships of past and present to come up against this unpredictable predator.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Sweet-Virginia-Movie-Poster.jpg",
    imdb_id: "tt2582498",
    imdb_rating: 6.1,
    runtime: 93,
    language: "English",
    ytid: "SqZu5uxqLUE",
  },
  {
    Title: "LBJ",
    fulltitle: "LBJ (2016)",
    movie_year: 2016,
    Categories: "Biography|Drama",
    summary:
      "LBJ centers on the political upheaval that Vice President Johnson faced when he was thrust into the presidency at the hands of an assassin's bullet in November 1963. With political battles on both sides of the aisle, Johnson struggles to heal a nation and secure his presidency by passing Kennedy's historic Civil Rights Act.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/LBJ-Movie-Poster.jpg",
    imdb_id: "tt4778988",
    imdb_rating: 6.3,
    runtime: 98,
    language: "English",
    ytid: "xrnEp8WLH0g",
  },
  {
    Title: "Almost Friends",
    fulltitle: "Almost Friends (2016)",
    movie_year: 2016,
    Categories: "Comedy|Drama",
    summary:
      "Charlie is an unmotivated man in his mid 20s still living at home with his mother and stepfather who falls for a young woman who has a serious boyfriend.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Almost-Friends-Movie-Poster.jpg",
    imdb_id: "tt4955566",
    imdb_rating: 6.1,
    runtime: 101,
    language: "English",
    ytid: "6WOJp7yoTnk",
  },

  {
    Title: "Last Flag Flying",
    fulltitle: "Last Flag Flying (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama|War",
    summary:
      'In 2003, 30 years after they served together in the Vietnam War, former Navy Hospital Corpsman Larry "Doc" Shepherd re-unites with ex-Marines Sal and Mueller on a different type of mission: to bury Doc\'s son, a young Marine killed in the Iraq War. Doc decides to forgo burial at Arlington Cemetery and, with the help of his old buddies, takes the casket on a bittersweet trip up the East Coast to his home in suburban New Hampshire.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Last-Flag-Flying-Movie-Poster.jpg",
    imdb_id: "tt6018306",
    imdb_rating: 6.9,
    runtime: 125,
    language: "English",
    ytid: "VmS4lTZ34uk",
  },
  {
    Title: "The Killing of a Sacred Deer",
    fulltitle: "The Killing of a Sacred Deer (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Mystery|Thriller",
    summary:
      "After the untimely death of 16-year-old Martin's father on the operating table, little by little, a deep and empathetic bond begins to form between him and the respected cardiothoracic surgeon, Dr Steven Murphy. At first, expensive gifts and then an invitation for dinner will soon earn the orphaned teenager the approval of Dr Steven's perfect family, even though right from the start, a vague, yet unnerving feeling overshadows Martin's honest intent. And then, unexpectedly, the idyllic family is smitten by a fierce and pitiless punishment, while at the same time, everything will start falling apart as the innocents have to suffer. In the end, as the sins of one burden the entire family, only an unimaginable and unendurable decision that demands a pure sacrifice can purge the soul. But to find catharsis, one must first admit the sin.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Killing-of-a-Sacred-Deer-Movie-Poster.jpg",
    imdb_id: "tt5715874",
    imdb_rating: 7.1,
    runtime: 121,
    language: "English",
    ytid: "NHF6UhYyZNc",
  },
  {
    Title: "The Games of the V Olympiad Stockholm, 1912",
    fulltitle: "The Games of the V Olympiad Stockholm, 1912 (2017)",
    movie_year: 2017,
    Categories: "Documentary|Sport",
    summary:
      "Using the surviving film materials from the Olympic Games held in Stockholm 1912 created at the time by a single production company, Svensk-Amerikanska Filmkompaniet these images, often misunderstood and consequently misused as historical records The production undertook a scene-by-scene analysis of each surviving shot using historical records to reconstruct a chronological sequence of images that would tell the story of these Olympic Games. After 4K digital scanning in Burbank , CA by Warner Bros. Motion Picture Imaging Chris Rodmell edited the material into a new chronological record of events from over a century before. The creation and addition of intertitles with newly written text, allows us to finally and accurately contextualize the images. The Criterion Blu-Ray edition comes with a musical accompaniment by Donald Sosin, thus brings the second dimension to what is a true testament to the technical quality of the original materials and the skillfulness of those who captured ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Games-of-the-V-Olympiad-Stockholm-1912-Movie-Poster.jpg",
    imdb_id: "tt7241484",
    imdb_rating: 6.3,
    runtime: 170,
    language: "English",
    ytid: "-IGp6aS4y6E",
  },
  {
    Title: "Chasing Great",
    fulltitle: "Chasing Great (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Drama|Sport",
    summary:
      "All Black captain Richie McCaw has lived his dream with characteristic precision and calculated determination. He's 34 and perhaps the best rugby player ever. But the dream is almost over. He is old by professional sport standards and everyone is asking when he's going to retire. Before his career ends Richie McCaw sets his sights on a risk-all attempt to win the Rugby World Cup back to back. No team has won it a second time in a row. No captain has won it twice. He will either end his career on an impossibly high note or take a nation's dreams down with him. Chasing Great follows Richie McCaw through his final season as he attempts to captain the All Blacks to the first ever-back-to back World Cup win. Until now Richie McCaw's achievements have been well documented, but little is known about the man himself. He has never courted the media and remains intensely private. Chasing Great takes the audience inside his world for the first time and what emerges is a very personal insight ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Great-Movie-Poster.jpg",
    imdb_id: "tt5722234",
    imdb_rating: 7.2,
    runtime: 105,
    language: "English",
    ytid: "zG7qmUYqqt8",
  },
  {
    Title: "Thank You for Your Service",
    fulltitle: "Thank You for Your Service (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|War",
    summary:
      "DreamWorks Pictures' Thank You for Your Service follows a group of U.S. soldiers returning from Iraq who struggle to integrate back into family and civilian life, while living with the memory of a war that threatens to destroy them long after they've left the battlefield. Starring an ensemble cast led by Miles Teller, Haley Bennett, Joe Cole, Amy Schumer, Beulah Koale, Scott Haze, Keisha Castle-Hughes, Brad Beyer, Omar J. Dorsey and Jayson Warner Smith, the drama is based on the bestselling book by Pulitzer Prize-winning reporter and author David Finkel. Jason Hall, who wrote the screenplay of American Sniper, makes his directorial debut with Thank You for Your Service and also serves as its screenwriter. Jon Kilik (The Hunger Games series, Babel) produces the film, while Ann Ruark (Biutiful) and Jane Evans (Sin City) executive produces.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Thank-You-for-Your-Service-Movie-Poster.jpg",
    imdb_id: "tt2776878",
    imdb_rating: 6.5,
    runtime: 109,
    language: "English",
    ytid: "GTl5SHYJxz4",
  },
  {
    Title: "Professor Marston and the Wonder Women",
    fulltitle: "Professor Marston and the Wonder Women (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Details the unconventional life of Dr. William Marston, the Harvard psychologist and inventor who helped invent the modern lie detector test and created Wonder Woman in 1941. Marston was in a polyamorous relationship with his wife Elizabeth, a psychologist and inventor in her own right, and Olive Byrne, a former student who became an academic. This relationship was key to the creation of Wonder Woman, as Elizabeth and Olive's feminist ideals were ingrained in the character from her creation. Marston died of skin cancer in 1947, but Elizabeth and Olive remained a couple and raised their and Marston's children together. The film is said to focus on how Marston dealt with the controversy surrounding Wonder Woman's creation.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Professor-Marston-and-the-Wonder-Women-Movie-Poster.jpg",
    imdb_id: "tt6133130",
    imdb_rating: 7.1,
    runtime: 108,
    language: "English",
    ytid: "r991pr4Fohk",
  },
  {
    Title: "Goodbye Christopher Robin",
    fulltitle: "Goodbye Christopher Robin (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Family|History",
    summary:
      "A rare glimpse into the relationship between beloved children's author A. A. Milne (Domhnall Gleeson) and his son Christopher Robin, whose toys inspired the magical world of Winnie the Pooh. Along with his mother Daphne (Margot Robbie), and his nanny Olive, Christopher Robin and his family are swept up in the international success of the books; the enchanting tales bringing hope and comfort to England after the First World War. But with the eyes of the world on Christopher Robin, what will the cost be to the family?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Goodbye-Christopher-Robin-Movie-Poster.jpg",
    imdb_id: "tt1653665",
    imdb_rating: 7.1,
    runtime: 107,
    language: "English",
    ytid: "uQq3aFSijRg",
  },

  {
    Title: "Happy Death Day",
    fulltitle: "Happy Death Day (2017)",
    movie_year: 2017,
    Categories: "Horror|Mystery|Thriller",
    summary:
      "A teenage girl, trying to enjoy her birthday, soon realizes that this is her final one. That is, if she can figure out who her killer is. She must relive that day, over and over again, dying in a different way each time. Can she solve her own murder?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Happy-Death-Day-Movie-Poster.jpg",
    imdb_id: "tt5308322",
    imdb_rating: 6.5,
    runtime: 96,
    language: "English",
    ytid: "1NTaDm3atkc",
  },
  {
    Title: "Blade Runner 2049",
    fulltitle: "Blade Runner 2049 (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Sci-Fi|Thriller",
    summary:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blade-Runner-2049-Movie-Poster.jpg",
    imdb_id: "tt1856101",
    imdb_rating: 8.1,
    runtime: 164,
    language: "English",
    ytid: "gCcx85zbxz4",
  },
  {
    Title: "My Little Pony: The Movie",
    fulltitle: "My Little Pony: The Movie (2017)",
    movie_year: 2017,
    Categories: "Adventure|Animation|Comedy|Family|Fantasy",
    summary:
      "After a dark force conquers Canterlot, the Mane 6 - Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy, and Rarity - embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship to save their homeland.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/My-Little-Pony-The-Movie-Movie-Poster.jpg",
    imdb_id: "tt4131800",
    imdb_rating: 6.2,
    runtime: 99,
    language: "English",
    ytid: "kIv_ConaZ1c",
  },
  {
    Title: "The Foreigner",
    fulltitle: "The Foreigner (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "The story of humble London businessman Quan (Chan), whose long-buried past erupts in a revenge-fueled vendetta when the only person left for him to love - his teenage daughter - is taken from him in a senseless act of politically-motivated terrorism. In his relentless search for the identity of the terrorists, Quan is forced into a cat- and-mouse conflict with a Irish government official (Brosnan), whose own past may hold clues to the identities of the elusive killers.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Foreigner-Movie-Poster.jpg",
    imdb_id: "tt1615160",
    imdb_rating: 7,
    runtime: 113,
    language: "English",
    ytid: "33iuQu3UtjI",
  },
  {
    Title: "Marshall",
    fulltitle: "Marshall (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "In 1940, Thurgood Marshall is a young lawyer for the NAACP who criss-crosses the country defending innocent African-Americans from unjust indictments in court. His latest case is in Bridgeport, Connecticut where an African-American chauffeur is accused of rape of a wealthy white society woman. To admit Marshall into the local Bar, insurance lawyer Sam Friedman is picked over his objections to do introductions in court. However, Friedman's commitment changes drastically when the racist judge forbids Marshall to speak in court, forcing Friedman to act as lead counsel. Now in an intolerable situation for the pair, Marshall must guide his new compatriot through this criminal trial even as Friedman endures not only this unfamiliar area of law, but also the bigoted pressure he now must share. However, the case proves more complex than either anticipates with unexpected twists and turns even as it becomes a vital one that would define two careers as well as the fight for justice in America.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Marshall-Movie-Poster.jpg",
    imdb_id: "tt5301662",
    imdb_rating: 7.2,
    runtime: 118,
    language: "English",
    ytid: "IfvzEXhhWNk",
  },
  {
    Title: "Rebel in the Rye",
    fulltitle: "Rebel in the Rye (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Romance|War",
    summary:
      'The life of celebrated but reclusive author, J.D. Salinger, who gained worldwide fame with the publication of his novel, "The Catcher in the Rye".',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Rebel-in-the-Rye-Movie-Poster.jpg",
    imdb_id: "tt4986134",
    imdb_rating: 6.6,
    runtime: 106,
    language: "English",
    ytid: "VWRhXMMb7CY",
  },
  {
    Title: "Brawl in Cell Block 99",
    fulltitle: "Brawl in Cell Block 99 (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama",
    summary:
      "Bradley Thomas is a hard working man. After him and his wife's miscarriage they admit the spark isn't there anymore and decide to have a baby. After being fired from his job, he turns to his friend who hires him as a drug dealer. A trade goes bad and he ends up in prison, the only problem is that a gang has kidnapped his wife and they will do an experimental operation on the baby unless Thomas kills one of the inmates in cell block 99. Bradley will not stop at anything until his wife is safe again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Brawl-in-Cell-Block-99-Movie-Poster.jpg",
    imdb_id: "tt5657856",
    imdb_rating: 7.2,
    runtime: 132,
    language: "English",
    ytid: "7FnAhrJDTqs",
  },
  {
    Title: "Chasing Trane: The John Coltrane Documentary",
    fulltitle: "Chasing Trane: The John Coltrane Documentary (2016)",
    movie_year: 2016,
    Categories: "Biography|Documentary|Music",
    summary:
      "CHASING TRANE is the definitive documentary film about an outside-the-box thinker with extraordinary talent whose boundary-shattering music continues to impact and influence people around the world. This smart, passionate, thought-provoking and uplifting documentary is for anyone who appreciates the power of music to entertain, inspire and transform. Written and directed by critically-acclaimed documentary filmmaker John Scheinfeld (The U.S. vs. John Lennon and Who Is Harry Nilsson...?) the film is produced with the full participation of the Coltrane family and the support of the record labels that collectively own the Coltrane catalog. Scheinfeld brings his strong story-telling skills to the creation of a rich, textured and compelling narrative that takes the audience to unexpected places. Set against the social, political and cultural landscape of the times, CHASING TRANE brings John Coltrane to life as a fully dimensional being, inviting the audience to engage with Coltrane the man...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Chasing-Trane-The-John-Coltrane-Documentary-Movie-Poster.jpg",
    imdb_id: "tt4287434",
    imdb_rating: 7.3,
    runtime: 99,
    language: "English",
    ytid: "LujRZj2nJTg",
  },
  {
    Title: "Mark Felt: The Man Who Brought Down the White House",
    fulltitle: "Mark Felt: The Man Who Brought Down the White House (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History|Thriller",
    summary:
      'The story of Mark Felt, who under the name "Deep Throat" helped journalists Bob Woodward and Carl Bernstein uncover the Watergate scandal in 1972.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mark-Felt-The-Man-Who-Brought-Down-the-White-House-Movie-Poster.jpg",
    imdb_id: "tt5175450",
    imdb_rating: 6.4,
    runtime: 103,
    language: "English",
    ytid: "iFpuXxM4tzE",
  },
  {
    Title: "Battle of the Sexes",
    fulltitle: "Battle of the Sexes (2017)",
    movie_year: 2017,
    Categories: "Biography|Comedy|Drama|Sport",
    summary:
      "In the wake of the sexual revolution and the rise of the women's movement, the 1973 tennis match between women's world champion Billie Jean King (Emma Stone) and ex-men's-champ and serial hustler Bobby Riggs (Steve Carell) was billed as the BATTLE OF THE SEXES and became one of the most watched televised sports events of all time, reaching 90 million viewers around the world. As the rivalry between King and Riggs kicked into high gear, off-court each was fighting more personal and complex battles. The fiercely private King was not only championing for equality, but also struggling to come to terms with her own sexuality, as her friendship with Marilyn Barnett (Andrea Riseborough) developed. And Riggs, one of the first self-made media-age celebrities, wrestled with his gambling demons, at the expense of his family and wife Priscilla (Elisabeth Shue). Together, Billie and Bobby served up a cultural spectacle that resonated far beyond the tennis court, sparking discussions in bedrooms ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Battle-of-the-Sexes-Movie-Poster.jpg",
    imdb_id: "tt4622512",
    imdb_rating: 6.8,
    runtime: 121,
    language: "English",
    ytid: "5AWP1K7FaFI",
  },

  {
    Title: "Brad's Status",
    fulltitle: "Brad's Status (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama|Music",
    summary:
      "A father takes his son to tour colleges on the East Coast and meets up with an old friend who makes him feel inferior about his life's choices.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Brads-Status-Movie-Poster.jpg",
    imdb_id: "tt5884230",
    imdb_rating: 6.5,
    runtime: 102,
    language: "English",
    ytid: "22w8T9K8iRU",
  },
  {
    Title: "Breathe",
    fulltitle: "Breathe (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|Romance",
    summary:
      "When Robin is struck down by polio at the age of 28, he is confined to a hospital bed and given only a few months to live. With the help of Diana's twin brothers (Tom Hollander) and the groundbreaking ideas of inventor Teddy Hall (Hugh Bonneville), Robin and Diana dare to escape the hospital ward to seek out a full and passionate life together - raising their young son, traveling and devoting their lives to helping other polio patients.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Breathe-Movie-Poster.jpg",
    imdb_id: "tt5716464",
    imdb_rating: 7.1,
    runtime: 118,
    language: "English",
    ytid: "7_YnYrLfjxA",
  },
  {
    Title: "City of Ghosts",
    fulltitle: "City of Ghosts (2017)",
    movie_year: 2017,
    Categories: "Documentary|War",
    summary:
      'A documentary that follows the efforts of "Raqqa Is Being Slaughtered Silently," a handful of anonymous activists who banded together after their homeland was taken over by ISIS in 2014. With deeply personal access, this is the story of a brave group of citizen journalists as they face the realities of life undercover, on the run, and in exile, risking their lives to stand up against one of the greatest evils in the world today.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/City-of-Ghosts-Movie-Poster.jpg",
    imdb_id: "tt6333056",
    imdb_rating: 7.5,
    runtime: 92,
    language: "English",
    ytid: "jBeqGcMaC-A",
  },
  {
    Title: "It",
    fulltitle: "It (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Thriller",
    summary:
      "In the Town of Derry, the local kids are disappearing one by one, leaving behind bloody remains. In a place known as 'The Barrens', a group of seven kids are united by their horrifying and strange encounters with an evil clown and their determination to kill It.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/It-Movie-Poster.jpg",
    imdb_id: "tt1396484",
    imdb_rating: 7.5,
    runtime: 135,
    language: "English",
    ytid: "FnCdOQsX5kc",
  },

  {
    Title: "California Typewriter",
    fulltitle: "California Typewriter (2016)",
    movie_year: 2016,
    Categories: "Documentary",
    summary:
      "California Typewriter is a story about people whose lives are connected by typewriters. The film is a meditation on creativity and technology featuring Tom Hanks, John Mayer, Sam Shepard, David McCullough and others.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/California-Typewriter-Movie-Poster.jpg",
    imdb_id: "tt5966990",
    imdb_rating: 7.2,
    runtime: 103,
    language: "English",
    ytid: "AgJ3kSOHMiU",
  },

  {
    Title: "Stronger",
    fulltitle: "Stronger (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama",
    summary:
      "Stronger is the inspiring real life story of Jeff Bauman, an ordinary man who captured the hearts of his city and the world to become a symbol of hope after surviving the 2013 Boston Marathon bombing.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Stronger-Movie-Poster.jpg",
    imdb_id: "tt3881784",
    imdb_rating: 7,
    runtime: 119,
    language: "English",
    ytid: "I6MN0QfQx7I",
  },
  {
    Title: "Victoria & Abdul",
    fulltitle: "Victoria & Abdul (2017)",
    movie_year: 2017,
    Categories: "Biography|Drama|History",
    summary:
      "Abdul Karim arrives from India to participate in Queen Victoria's golden jubilee. The young clerk is surprised to find favor with the queen herself. As Victoria questions the constrictions of her long-held position, the two forge an unlikely and devoted alliance that her household and inner circle try to destroy. As their friendship deepens, the queen begins to see a changing world through new eyes, joyfully reclaiming her humanity.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Victoria-Abdul-Movie-Poster.jpg",
    imdb_id: "tt5816682",
    imdb_rating: 6.8,
    runtime: 111,
    language: "English",
    ytid: "mtC8jNHSxgQ",
  },
  {
    Title: "Mother!",
    fulltitle: "Mother! (2017)",
    movie_year: 2017,
    Categories: "Drama|Horror|Mystery",
    summary:
      "Amidst a wild flat meadow encircled by an Edenic lush forest, a couple have cocooned themselves in a secluded mansion that was not so long ago burned to the ground, devotedly restored by the supportive wife. Within this safe environment, the once famous middle-aged poet husband is desirous of creating his magnum opus; however, he seems unable to break out of the persistent creative rut that haunts him. Then, unexpectedly, a knock at the door, the sudden arrival of a cryptic late-night visitor and his intrusive wife will stimulate the writer's stagnant imagination. Little by little, much to the perplexed wife's surprise, the more chaos he lets in their haven, the better for his punctured male ego. In the end, will this incremental mess blemish, irreparably, the couple's inviolable sanctuary?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Mother-Movie-Poster.jpg",
    imdb_id: "tt5109784",
    imdb_rating: 6.7,
    runtime: 121,
    language: "English",
    ytid: "XpICoc65uh0",
  },

  {
    Title: "Dunkirk",
    fulltitle: "Dunkirk (2017)",
    movie_year: 2017,
    Categories: "Action|Drama|History|Thriller|War",
    summary:
      "Evacuation of Allied soldiers from the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dunkirk-Movie-Poster.jpg",
    imdb_id: "tt5013056",
    imdb_rating: 8,
    runtime: 106,
    language: "English",
    ytid: "F-eMt3SrfFU",
  },
  {
    Title: "American Made",
    fulltitle: "American Made (2017)",
    movie_year: 2017,
    Categories: "Action|Biography|Comedy|Crime|Drama",
    summary:
      "Barry Seal was just an ordinary pilot who worked for TWA before he was recruited by the CIA in 1978. His work in South America eventually caught the eye of the Medellín Cartel, associated with Pablo Escobar, who needed a man with his skill set. Barry became a drug trafficker, gun smuggler and money launderer. Soon acquiring the title, 'The gringo that always delivers'.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/American-Made-Movie-Poster.jpg",
    imdb_id: "tt3532216",
    imdb_rating: 7.2,
    runtime: 0,
    language: "English",
    ytid: "AEBIJRAkujM",
  },
  {
    Title: "Ferrari: Race to Immortality",
    fulltitle: "Ferrari: Race to Immortality (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "The 1950's - the iconic Scuderia Ferrari battle to stay on top in one of the deadliest decades in motor racing history. Cars and drivers were pushed to their limits, and the competition for the world championship meant racing on a knife edge where one mistake could take a life. At the centre of it all was Enzo Ferrari, a towering figure in motor racing who was driven to win at any cost. Amidst the stiff competition within his Ferrari team, two of its British stars, Peter Collins and Mike Hawthorn, put friendship first and the championship second. Ferrari: Race to Immortality tells the story of the loves and losses, triumphs and tragedy of Ferrari's most celebrated drivers in an era where they lived la dolce vita during the week and it was win or die on any given Sunday.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Ferrari-Race-to-Immortality-Movie-Poster.jpg",
    imdb_id: "tt6622186",
    imdb_rating: 6.7,
    runtime: 91,
    language: "English",
    ytid: "g3e5hGgeNoQ",
  },
  {
    Title: "The Party",
    fulltitle: "The Party (2017)",
    movie_year: 2017,
    Categories: "Comedy|Drama",
    summary:
      "To celebrate her long-awaited prestigious post as a Shadow Minister for Health and, hopefully, the stepping stone to party leadership, the newly-appointed British opposition politician, Janet, is throwing a party for friends at her London flat. Of course, in this select and intimate soirée, apart from Bill--Janet's self-denying academic husband--a motley crew of elite hand-picked guests have been invited: There's April, the sourly cynical American best friend; her unlikely German husband, Gottfried; there's also Jinny and Martha; and finally, Tom, the smooth banker in the impeccable suit. But inevitably, before dinner is served, the upbeat ambience will shatter to pieces, as festering secrets will start surfacing in this perfect domestic war-zone. Undoubtedly, after this night, things will never be the same again.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Party-Movie-Poster.jpg",
    imdb_id: "tt5814592",
    imdb_rating: 6.7,
    runtime: 71,
    language: "English",
    ytid: "uamEr9pCxl8",
  },
  {
    Title: "Detroit",
    fulltitle: "Detroit (2017)",
    movie_year: 2017,
    Categories: "Crime|Drama|History|Thriller",
    summary:
      "A police raid in Detroit in 1967 results in one of the largest RACE riots in United States history. The story is centred around the Algiers Motel incident, which occurred in Detroit, Michigan on July 25, 1967, during the racially charged 12th Street Riot. It involves the death of three black men and the brutal beatings of nine other people: seven black men and two white women.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Detroit-Movie-Poster.jpg",
    imdb_id: "tt5390504",
    imdb_rating: 7.4,
    runtime: 143,
    language: "English",
    ytid: "d5h7Kgo-zeI",
  },
  {
    Title: "Kingsman: The Golden Circle",
    fulltitle: "Kingsman: The Golden Circle (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Comedy",
    summary:
      "After the Kingsman headquarters are blown up by a psychotic criminal named Poppy Adams, the surviving agents find their way to an allied secret organisation based in Kentucky, named Statesman. The two agencies must now work together in order to save the world and take down the so called 'Golden Circle'.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kingsman-The-Golden-Circle-Movie-Poster.jpg",
    imdb_id: "tt4649466",
    imdb_rating: 6.8,
    runtime: 141,
    language: "English",
    ytid: "6Nxc-3WpMbg",
  },
  {
    Title: "Better Watch Out",
    fulltitle: "Better Watch Out (2016)",
    movie_year: 2016,
    Categories: "Comedy|Horror|Thriller",
    summary:
      "When you think the suburbs, you think safety, but this holiday night the suburbs are anything but safe. Ashley (Olivia DeJonge) thought this babysitting job was going to be an easy night, but the night takes a turn when dangerous intruders break in and terrorize her and the twelve-year-old boy, Luke (Levi Miller), she's caring for. Ashley defends her charge to the best of her ability only to discover this is no normal home invasion.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Better-Watch-Out-Movie-Poster.jpg",
    imdb_id: "tt4443658",
    imdb_rating: 6.5,
    runtime: 89,
    language: "English",
    ytid: "1BDxAsaoM1Y",
  },

  {
    Title: "1 Buck",
    fulltitle: "1 Buck (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "Shifting from one pocket to another, from one man's drama to another, a lowly dollar bill, 'one buck' takes us on an odyssey through the heart of a forgotten town in Louisiana.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/1-Buck-Movie-Poster.jpg",
    imdb_id: "tt4685428",
    imdb_rating: 6,
    runtime: 90,
    language: "English",
    ytid: "PyJhVOZVqRQ",
  },
  {
    Title: "Gook",
    fulltitle: "Gook (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "Eli and Daniel, two Korean American brothers, own a struggling shoe store and have an unlikely friendship with Kamilla, a street wise 11-year-old African American girl. Kamilla ditches school, Eli stresses about the store, and Daniel tries to have a good time. It's just another typical day at the store until the Rodney King verdict is read and riots break out. With the chaos moving towards them, the trio is forced to defend the store while contemplating the future of their own personal dreams and the true meaning of family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Gook-Movie-Poster.jpg",
    imdb_id: "tt6057032",
    imdb_rating: 7.1,
    runtime: 94,
    language: "English",
    ytid: "6Duh20o-qWs",
  },

  {
    Title: "Love Finds You in Valentine",
    fulltitle: "Love Finds You in Valentine (2016)",
    movie_year: 2016,
    Categories: "Drama|Romance",
    summary:
      "Kennedy Blaine, a Californian girl, inherits a ranch in the small town of Valentine in Nebraska. Before she sells the property, she decides to spend the summer in her house and learn more about her family.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Love-Finds-You-in-Valentine-Movie-Poster.jpg",
    imdb_id: "tt4769430",
    imdb_rating: 6.4,
    runtime: 87,
    language: "English",
    ytid: "UHP3si-jEg4",
  },
  {
    Title: "Animal Factory",
    fulltitle: "Animal Factory (2000)",
    movie_year: 2000,
    Categories: "Crime|Drama",
    summary:
      "Ron, who's young, slight, and privileged, is sentenced to prison on marijuana charges. For whatever reason, he brings out paternal feelings in an 18-year prison veteran, Earl Copan, who takes Ron under his wing. The film explores the nature of that relationship, Ron's part in Earl's gang, and the way Ron deals with aggressive cons intent on assault and rape. There's casual racism, too, in the prisoners and the guards, a strike called by Black prisoners, and the nearly omnipresence of hard drugs. Ron's lawyer is working on getting Ron out quickly, Earl has a shot at parole, and death seems to be waiting in the next cell. Will prison turn Ron into an animal?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Animal-Factory-Movie-Poster.jpg",
    imdb_id: "tt0204137",
    imdb_rating: 6.6,
    runtime: 94,
    language: "English",
    ytid: "iR3pzkmJZ0c",
  },
  {
    Title: "All the King's Men",
    fulltitle: "All the King's Men (2006)",
    movie_year: 2006,
    Categories: "Drama|Thriller",
    summary:
      "In the 50's, in Louisiana, the smart populist, manipulative and wolf hick Willie Stark is elected governor with the support of the lower social classes. He joins a team composed of his bodyguard and friend Sugar Boy; the journalist from an aristocratic family Jack Burden; the lobbyist Tiny Duffy; and his mistress Sadie Burke, to face the opposition of the upper classes. When the influent Judge Irwin supports a group of politicians in their request of impeachment, Stark assigns Jack to find some dirtiness along the life of Irwin, leading to a tragedy in the end.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/All-the-Kings-Men-Movie-Poster.jpg",
    imdb_id: "tt0405676",
    imdb_rating: 6.2,
    runtime: 128,
    language: "English",
    ytid: "Ruq0GPvloVc",
  },
  {
    Title: "A Princess for Christmas",
    fulltitle: "A Princess for Christmas (2011)",
    movie_year: 2011,
    Categories: "Comedy|Drama|Family|Romance",
    summary:
      "Jules Daly is struggling to raise her orphaned niece and nephew (Maggie and Milo) alone, but it isn't easy after getting downsized out of her antique sales job while Milo rebels against the death of his parents through petty theft. With things looking bleak for Christmas, an English butler named Paisley arrives with an invitation for all to come see the kids' emotionally distant grandfather who lives in Castlebury Hall, somewhere near Liechtenstein. With nothing to hold them back, they go, but the grandfather - Edward, Duke of Castlebury - is rather cold over their visit to his castle. So is his other surviving son, Ashton, Prince of Castlebury. Before long, they're all having a good time and looking forward to hosting a Christmas Eve ball, but Jules overhears a conversation from which she draws a wrong conclusion.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/A-Princess-for-Christmas-Movie-Poster.jpg",
    imdb_id: "tt1083448",
    imdb_rating: 6.5,
    runtime: 91,
    language: "English",
    ytid: "ZuBu_CIjExg",
  },
  {
    Title: "Batman vs. Two-Face",
    fulltitle: "Batman vs. Two-Face (2017)",
    movie_year: 2017,
    Categories: "Action|Animation|Comedy",
    summary:
      "In Gotham City, a botched experiment by Professor Hugo Strange to extract the evil from Batman's rogues gallery would go disastrously wrong, leaving the noble District Attorney Harvey Dent horrifically scarred both physically and mentally as the dichotomous supervillain, Two-Face. Eventually, Dent is captured by the Dynamic Duo and is seemingly cured of his injuries to help him restart his life as a honest citizen. However, there is later a new wave of crimes by other Batman enemies that has the modus operandi of Two-Face, even while Dent still seems to be innocent. However, Robin, already jealous of Bruce's older friendship with Dent, is not so sure and the Duo has a rift as they disagree about their suspicions. Meanwhile, dark forces plan a horrific fate for Gotham City and Two-Face, or perhaps an impostor, somehow seems to be at the bottom of it.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Batman-vs.-Two-Face-Movie-Poster.jpg",
    imdb_id: "tt6142314",
    imdb_rating: 6.1,
    runtime: 72,
    language: "English",
    ytid: "5VD0kfTeznE",
  },
  {
    Title: "The Good Neighbor",
    fulltitle: "The Good Neighbor (2016)",
    movie_year: 2016,
    Categories: "Crime|Drama|Thriller",
    summary:
      "A pair of mischievous high school kids create the illusion of a haunting on an unsuspecting elderly neighbor while keeping his every reaction under surveillance. A series of coincidences leads to tragedy.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Good-Neighbor-Movie-Poster.jpg",
    imdb_id: "tt2262315",
    imdb_rating: 6.3,
    runtime: 98,
    language: "English",
    ytid: "wIXTB9wtqxA",
  },
  {
    Title: "The Snow Queen 3",
    fulltitle: "The Snow Queen 3 (2016)",
    movie_year: 2016,
    Categories: "Adventure|Animation|Comedy|Family|Sci-Fi",
    summary:
      "The rare gift of getting into all kinds of trouble is their family trait. What else can you expect from the ones raised among trolls in snowy lands? But now Kai and Gerda have grown up and entered a new stage - this time they are going to cause a global disaster...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Snow-Queen-3-Movie-Poster.jpg",
    imdb_id: "tt4685554",
    imdb_rating: 6.7,
    runtime: 80,
    language: "English",
    ytid: "tRK8PD6n5Ec",
  },
  {
    Title: "American Assassin",
    fulltitle: "American Assassin (2017)",
    movie_year: 2017,
    Categories: "Action|Thriller",
    summary:
      "Twenty three-year-old Mitch lost his parents to a tragic car accident at the age of fourteen, and his girlfriend to a terrorist attack just as they were engaged. Seeking revenge, he is enlisted by CIA Deputy Director Irene Kennedy as a black ops recruit. Kennedy then assigns Cold War veteran Stan Hurley to train Mitch. Together they will later on investigate a wave of apparently random attacks on military and civilian targets. The discovery of a pattern in the violence leads them to a joint mission with a lethal Turkish agent to stop a mysterious operative intent on starting a world war in the Middle East.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/American-Assassin-Movie-Poster.jpg",
    imdb_id: "tt1961175",
    imdb_rating: 6.2,
    runtime: 112,
    language: "English",
    ytid: "6yoEyzOkTOI",
  },
  {
    Title: "Kinky Boots",
    fulltitle: "Kinky Boots (2005)",
    movie_year: 2005,
    Categories: "Comedy|Drama|Music",
    summary:
      "Charles Price may have grown up with his father in the family shoe business, but he never thought that he would take his father's place. Yet, the untimely death of his father places him in that position, only to learn that Price and Sons Shoes is failing. While in despair at his failed attempts to save the business, Charles has a chance encounter with the flamboyant drag queen cabaret singer, Lola. Her complaints about the inadequate footwear for her work combined with one of Charles' ex-employees, Lauren, leads to a suggestion to change the product to create a desperate chance to save the business: make men's fetish footwear. Lola is convinced to be their footwear designer and the transition begins. Now this disparate lot must struggle at this unorthodox idea while dealing with both the prejudice of the staff, Lola's discomfort in the small town and the selfish manipulation of Charles' greedy fiance who cannot see the greater good in Charles' dream.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Kinky-Boots-Movie-Poster.jpg",
    imdb_id: "tt0434124",
    imdb_rating: 7.1,
    runtime: 107,
    language: "English",
    ytid: "Ek7VcOkzzkM",
  },
  {
    Title: "Super Dark Times",
    fulltitle: "Super Dark Times (2017)",
    movie_year: 2017,
    Categories: "Drama|Thriller",
    summary:
      "Teenagers Zach and Josh have been best friends their whole lives, but when a gruesome accident leads to a cover-up, the secret drives a wedge between them and propels them down a rabbit hole of escalating paranoia and violence.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Super-Dark-Times-Movie-Poster.jpg",
    imdb_id: "tt5112578",
    imdb_rating: 6.6,
    runtime: 100,
    language: "English",
    ytid: "qG0af8nliCE",
  },
  {
    Title: "Score: A Film Music Documentary",
    fulltitle: "Score: A Film Music Documentary (2016)",
    movie_year: 2016,
    Categories: "Documentary|Music",
    summary:
      "For a predominately visual medium like cinema, its musical component plays a vital role as well, especially its score. In that essential musical accompaniment, the soul of the film is expressed whether it be sweepingly majestic fanfares or delicate lyrical pieces. This documentary explores the artistic role of this special musical discipline that completes the cinematic artistic creation process and the artists who have devoted their careers to this contribution. We explore the form's history and examine the masters who defined it with their own distinctive artistic vision. In doing so, the various components of this delicate creative process are revealed as they create a musical compositional work that has inspired a popular appreciation of music in all its forms, which gave some old musical ways their own new lease on life.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Score-A-Film-Music-Documentary-Movie-Poster.jpg",
    imdb_id: "tt4207112",
    imdb_rating: 7.4,
    runtime: 93,
    language: "English",
    ytid: "pKNC3aqkRvY",
  },
  {
    Title: "Tulip Fever",
    fulltitle: "Tulip Fever (2017)",
    movie_year: 2017,
    Categories: "Drama|Romance",
    summary:
      'In 17th Century Amsterdam, an orphaned girl Sophia (Alicia Vikander) is forcibly married to a rich and powerful merchant Cornelis Sandvoort (Christoph Waltz) - an unhappy "arrangement" that saves her from poverty. After her husband commissions a portrait, she begins a passionate affair with the painter Jan Van Loos (Dane DeHaan), a struggling young artist. Seeking to escape the merchant\'s ever-reaching grasp, the lovers risk everything and enter the frenzied tulip bulb market, with the hope that the right bulb will make a fortune and buy their freedom.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tulip-Fever-Movie-Poster.jpg",
    imdb_id: "tt0491203",
    imdb_rating: 6.2,
    runtime: 105,
    language: "English",
    ytid: "Thtm0jOZM54",
  },
  {
    Title: "Rememory",
    fulltitle: "Rememory (2017)",
    movie_year: 2017,
    Categories: "Drama|Mystery|Sci-Fi",
    summary:
      "Gordon Dunn, a famed scientific pioneer, is mysteriously found dead just after the unveiling of his newest work, a groundbreaking device able to extract, record and play a person's unfiltered memories. After his death, Gordon's reclusive wife, Carolyn, delves deeper into her own private world when a mysterious man shows up claiming to be from Gordon's past. With questionable motives he takes the machine and uses it to try and solve the mystery, beginning an investigation of memories that lead him down a path of guilt, grief, and betrayal to an unexpected answer.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Rememory-Movie-Poster.jpg",
    imdb_id: "tt2331047",
    imdb_rating: 6.2,
    runtime: 111,
    language: "English",
    ytid: "n6ihJIjVGLo",
  },
  {
    Title: "Logan Lucky",
    fulltitle: "Logan Lucky (2017)",
    movie_year: 2017,
    Categories: "Comedy|Crime|Drama",
    summary:
      "When Jimmy Logan (Channing Tatum) gets fired, he convinces his brother Clyde (Adam Driver) and sister Mellie (Riley Keough) to help him rob the Charlotte Motor Speedway during a NASCAR Race. But they will need the help of Joe Bang (Daniel Craig), a convicted safe-cracker who is currently doing time. All they have to do is break Joe out, blow the racetrack vault, get away with the cash, return Joe to prison, and get Jimmy to his daughter's beauty pageant on time. What could possibly go wrong? Well, there is the Logan family curse .",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Logan-Lucky-Movie-Poster.jpg",
    imdb_id: "tt5439796",
    imdb_rating: 7.1,
    runtime: 118,
    language: "English",
    ytid: "wsOIuzxMplA",
  },
  {
    Title: "The Hitman's Bodyguard",
    fulltitle: "The Hitman's Bodyguard (2017)",
    movie_year: 2017,
    Categories: "Action|Comedy|Thriller",
    summary:
      "With his reputation in tatters after a painfully unsuccessful delivery of a distinguished Japanese client, former triple-A executive protection agent, Michael Bryce, two long years after the disgraceful incident, is now reduced to a mere second-class bodyguard for hire. Under those circumstances, Bryce would do anything to prove his worth once again, and as a result, it won't be long before he accepts an offer from Interpol to escort the renowned international assassin Darius Kincaid from Manchester to the Hague. The task seems simple: Bryce only needs to transport the contract killer from point A to point B, nevertheless, Kincaid, as the only one with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator, is an obvious target, while the trip to the Netherlands is long and hazardous. Without a doubt, this is a race against the clock as the mismatched duo will have to put aside their grudges, in a non-stop concerto for bullets.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Hitmans-Bodyguard-Movie-Poster.jpg",
    imdb_id: "tt1959563",
    imdb_rating: 6.9,
    runtime: 118,
    language: "English",
    ytid: "IpKmt4MpctM",
  },
  {
    Title: "Valerian and the City of a Thousand Planets",
    fulltitle: "Valerian and the City of a Thousand Planets (2017)",
    movie_year: 2017,
    Categories: "Action|Adventure|Fantasy|Sci-Fi",
    summary:
      "In the Century XXVIII, the space station Alpha is a city where beings from different planets live together exchanging their knowledge and culture. Peace is granted by a human force, including Major Valerian and his partner Sergeant Laureline. They are assigned by the Defence Minister to retrieve the last species of converter in a dangerous mission. They succeed and back to Alpha, unknown humanoids abduct Commander Arun Filitt expecting to steal the converter. They head to a forbidden area that is infected but Valerian and Laureline follow them and disclose a hidden secret about the race and the infected area.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Valerian-and-the-City-of-a-Thousand-Planets-Movie-Poster.jpg",
    imdb_id: "tt2239822",
    imdb_rating: 6.5,
    runtime: 0,
    language: "English",
    ytid: "NNrK7xVG3PM",
  },
  {
    Title: "Beach Rats",
    fulltitle: "Beach Rats (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      "An aimless teenager on the outer edges of Brooklyn struggles to escape his bleak home life and navigate questions of self-identity, as he balances his time between his delinquent friends, a potential new girlfriend, and older men he meets online.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Beach-Rats-Movie-Poster.jpg",
    imdb_id: "tt6303866",
    imdb_rating: 6.5,
    runtime: 98,
    language: "English",
    ytid: "qMBqERvgrZc",
  },
  {
    Title: "Patti Cake$",
    fulltitle: "Patti Cake$ (2017)",
    movie_year: 2017,
    Categories: "Drama|Music",
    summary:
      "PATTI CAKE$ is centered on aspiring rapper Patricia Dombrowski, a.k.a. Killa P, a.k.a. Patti Cake$, who is fighting an unlikely quest for glory in her downtrodden hometown in New Jersey.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Patti-Cake-Movie-Poster.jpg",
    imdb_id: "tt6288250",
    imdb_rating: 6.6,
    runtime: 109,
    language: "English",
    ytid: "L-591Dqa48g",
  },
  {
    Title: "And Then I Go",
    fulltitle: "And Then I Go (2017)",
    movie_year: 2017,
    Categories: "Drama",
    summary:
      'In the cruel world of junior high, Edwin suffers in a state of anxiety and alienation alongside his only friend, Flake. Misunderstood by their families and demoralized at school daily, their fury simmers quietly until an idea for vengeance offers them a terrifying release. Based on the acclaimed novel "Project X" by Jim Shepard, this unflinching look at adolescence explores how the powerful bonds of childhood friendship and search for belonging can become a matter of life or death.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/And-Then-I-Go-Movie-Poster.jpg",
    imdb_id: "tt2018111",
    imdb_rating: 7.6,
    runtime: 99,
    language: "English",
    ytid: "8CdIiD6-iF0",
  },
  {
    Title: "Forever My Girl",
    fulltitle: "Forever My Girl (2018)",
    movie_year: 2018,
    Categories: "Drama|Music|Romance",
    summary:
      "After being gone for a decade a country star returns home to the love he left behind.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Forever-My-Girl-Movie-Poster.jpg",
    imdb_id: "tt4103724",
    imdb_rating: 6.4,
    runtime: 108,
    language: "English",
    ytid: "3vqcMr1q5Uc",
  },
  {
    Title: "Tom Segura: Disgraceful",
    fulltitle: "Tom Segura: Disgraceful (2018)",
    movie_year: 2018,
    Categories: "Comedy|Documentary",
    summary:
      "Comedian Tom Segura rants about funny things about pop culture and the way of living in 2018.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Tom-Segura-Disgraceful-Movie-Poster.jpg",
    imdb_id: "tt7379330",
    imdb_rating: 7.5,
    runtime: 0,
    language: "English",
    ytid: "kYYINJM3lPA",
  },

  {
    Title: "Secrets in the Fall",
    fulltitle: "Secrets in the Fall (2015)",
    movie_year: 2015,
    Categories: "Family",
    summary:
      "Nothing is impossible for a group of young campers, friends and enemies alike, on a weekend retreat at Camp Pinnacle. But what starts as an exciting wilderness adventure turns into trouble when a young camper goes missing and the rest of the group must set out to find him. The campers are forced to overcome their differences and band together to re-claim their weekend and make it out of the woods before dark!",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Secrets-in-the-Fall-Movie-Poster.jpg",
    imdb_id: "tt2522908",
    imdb_rating: 7.3,
    runtime: 0,
    language: "English",
    ytid: "eMVw1pHVMAw",
  },
  {
    Title: "Suicide Squad: Hell to Pay",
    fulltitle: "Suicide Squad: Hell to Pay (2018)",
    movie_year: 2018,
    Categories: "Action|Animation",
    summary:
      "Task Force X targets a powerful mystical object that they will risk their lives to steal.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Suicide-Squad-Hell-to-Pay-Movie-Poster.jpg",
    imdb_id: "tt7167602",
    imdb_rating: 7.2,
    runtime: 86,
    language: "English",
    ytid: "EPZZvk-wbGE",
  },
  {
    Title: "Wildling",
    fulltitle: "Wildling (2018)",
    movie_year: 2018,
    Categories: "Fantasy|Horror",
    summary:
      "Anna spends her entire childhood under the care of a mysterious man she only knows as Daddy. He keeps her locked in an attic making her fear the Wildling, a child-eating monster that roams the outside. At age 16, Anna is freed by small-town sheriff Ellen Cooper who helps her start a new life as a normal teenager. But as Anna's body begins to blossom, her childhood nightmares return with a vengeance, leading to the conclusion of a terrifying secret.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Wildling-Movie-Poster.jpg",
    imdb_id: "tt5085924",
    imdb_rating: 6.1,
    runtime: 92,
    language: "English",
    ytid: "eyl1Wf90AgY",
  },
  {
    Title: "The Humanity Bureau",
    fulltitle: "The Humanity Bureau (2017)",
    movie_year: 2017,
    Categories: "Action|Sci-Fi",
    summary:
      "A dystopian thriller set in the year 2030 that sees the world in a permanent state of economic recession and facing serious environmental problems as a result of global warming.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/The-Humanity-Bureau-Movie-Poster.jpg",
    imdb_id: "tt6143568",
    imdb_rating: 6.1,
    runtime: 95,
    language: "English",
    ytid: "kUH8JGhRzPY",
  },
  {
    Title: "Farewell Ferris Wheel",
    fulltitle: "Farewell Ferris Wheel (2016)",
    movie_year: 2016,
    Categories: "Documentary|Drama|News",
    summary:
      "Farewell, Ferris Wheel examines the link between America's carnival industry and a small Mexican town that legally provides one third of the carnival's labor. However, increased regulations are compromising this longstanding connection, putting both the industry and its workers in jeopardy.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Farewell-Ferris-Wheel-Movie-Poster.jpg",
    imdb_id: "tt2349677",
    imdb_rating: 7.4,
    runtime: 72,
    language: "English",
    ytid: "-K2m6AKNB-g",
  },
  {
    Title: "Don't Talk to Irene",
    fulltitle: "Don't Talk to Irene (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      'Irene must endure 2 weeks of community service at a retirement home. Following her passion for cheerleading, she secretly signs up the senior residents to audition for a dance-themed reality show to prove that you don\'t need to be physically "perfect" to be perfectly AWESOME.',
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dont-Talk-to-Irene-Movie-Poster.jpg",
    imdb_id: "tt5030452",
    imdb_rating: 6.4,
    runtime: 90,
    language: "English",
    ytid: "lK48UxWuUho",
  },
  {
    Title: "Blood Road",
    fulltitle: "Blood Road (2017)",
    movie_year: 2017,
    Categories: "Documentary|History|Sport",
    summary:
      "The mysteries surrounding her father's death in the Vietnam war lead ultra-endurance mountain biker Rebecca Rusch on an emotional journey as she pedals 1200 miles of the Ho Chi Minh trail.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Blood-Road-Movie-Poster.jpg",
    imdb_id: "tt6900092",
    imdb_rating: 6.9,
    runtime: 96,
    language: "English",
    ytid: "XCzVqiN950M",
  },
  {
    Title: "Andre the Giant",
    fulltitle: "Andre the Giant (2018)",
    movie_year: 2018,
    Categories: "Documentary",
    summary:
      "A look at the life and career of professional wrestler André Roussimoff, who gained notoriety in the 1980s as Andre the Giant.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Andre-the-Giant-Movie-Poster.jpg",
    imdb_id: "tt6543420",
    imdb_rating: 8.2,
    runtime: 85,
    language: "English",
    ytid: "f_jTeuajas0",
  },
  {
    Title: "Dead on Arrival",
    fulltitle: "Dead on Arrival (2017)",
    movie_year: 2017,
    Categories: "Thriller",
    summary:
      "A pharmaceutical sales rep visits a small town in Louisiana on business. He finds himself in a dark world of corruption and murder with 24 hours to live, running from the police, the mob and a sheriff that wants him dead.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Dead-on-Arrival-Movie-Poster.jpg",
    imdb_id: "tt5903088",
    imdb_rating: 6.9,
    runtime: 97,
    language: "English",
    ytid: "8jJ-kC-rq0Q",
  },
  {
    Title: "Big Time",
    fulltitle: "Big Time (2017)",
    movie_year: 2017,
    Categories: "Documentary",
    summary:
      "Bjarke Ingels started out as a young man dreaming of creating cartoons. Now, he has been named \"one of architecture's biggest innovators\" by The Wall Street Journal and one of The 100 Most Influential People on the planet by TIME Magazine. BIG TIME follows Bjarke during the course of 7 years (2009-2016), while he struggles to finish his biggest project so far. We are let into Bjarke's creative processes as well as the endless compromises that his work entails, and we are on the side when his personal life starts putting pressure on him, too. In addition to the recently opened architectural marvel VIA 57 West (625 West 57th Street), Bjarke Ingels' company Bjarke Ingels Group (BIG) was given the task of designing and building one of the skyscrapers which will replace Two World Trade Center in Manhattan. While Bjarke is creating these buildings, which will change the New York skyline, he is hit by health-related issues. The Film offers an intimate look into the innovative and ambitious ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Big-Time-Movie-Poster.jpg",
    imdb_id: "tt7630164",
    imdb_rating: 6.2,
    runtime: 93,
    language: "English",
    ytid: "VK0mGdMKMW4",
  },

  {
    Title: "Hostiles",
    fulltitle: "Hostiles (2017)",
    movie_year: 2017,
    Categories: "Adventure|Drama|Western",
    summary:
      "In 1892, after nearly two decades of fighting the Cheyenne, the Apache, and the Comanche natives, the United States Cavalry Captain and war hero, Joseph Blocker, is ordered to escort the ailing Cheyenne chief, Yellow Hawk--his most despised enemy--to his ancestral home in Montana's Valley of the Bears. Nauseated with a baleful anger, Joseph's unwelcome final assignment in the feral American landscape is further complicated, when the widowed settler, Rosalie Quaid, is taken in by the band of soldiers, as aggressive packs of marauding Comanches who are still on the warpath, are thirsty for blood. In a territory crawling with hostiles, can the seasoned Captain do his duty one last time?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Hostiles-Movie-Poster.jpg",
    imdb_id: "tt5478478",
    imdb_rating: 7.3,
    runtime: 134,
    language: "English",
    ytid: "1M5cj4UmscE",
  },
  {
    Title: "Maze Runner: The Death Cure",
    fulltitle: "Maze Runner: The Death Cure (2018)",
    movie_year: 2018,
    Categories: "Action|Sci-Fi|Thriller",
    summary:
      "In the epic finale to The Maze Runner Saga, Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary last city, a WCKD controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get the answers to the questions the Gladers have been asking since they first arrived in the maze. Will Thomas and the crew make it out alive? Or will Ava Paige get her way?",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Maze-Runner-The-Death-Cure-Movie-Poster.jpg",
    imdb_id: "tt4500922",
    imdb_rating: 6.5,
    runtime: 141,
    language: "English",
    ytid: "wnE_y4vN9nQ",
  },
  {
    Title: "Den of Thieves",
    fulltitle: "Den of Thieves (2018)",
    movie_year: 2018,
    Categories: "Action|Crime|Drama|Mystery|Thriller",
    summary:
      "A gritty L.A crime saga which follows the intersecting and often personally connected lives of an elite unit of the LA County Sheriff's Dept. and the state's most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank of downtown Los Angeles.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Den-of-Thieves-Movie-Poster.jpg",
    imdb_id: "tt1259528",
    imdb_rating: 7,
    runtime: 140,
    language: "English",
    ytid: "FKd_ks0rdAM",
  },
  {
    Title: "V.I.P.",
    fulltitle: "V.I.P. (2017)",
    movie_year: 2017,
    Categories: "Action|Crime|Thriller",
    summary:
      "The son (Lee Jong-Suk) of a high-ranking North Korean official is suspected of committing serial murders around the world. To stop the killer, South Korea, North Korea and Interpol chase after him.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/V.I.P.-Movie-Poster.jpg",
    imdb_id: "tt6413410",
    imdb_rating: 6.4,
    runtime: 128,
    language: "English",
    ytid: "dwRkl2BjtGQ",
  },

  {
    Title: "Perfect Strangers",
    fulltitle: "Perfect Strangers (2017)",
    movie_year: 2017,
    Categories: "Comedy",
    summary:
      "In the same night that happens a blood red moon, some longtime friends reunite to dinner: the group is formed by plastic surgeon Alfonso and his wife, psychologist Eva, who are the hosts of the dinner; lawyers Antonio and his wife Ana; taxi driver Eduardo and his young and recent wife, veterinary Blanca; and finally Pepe, a former gym teacher actually unemployed, who surprisingly appears without Lucía, his recent girlfriend. Motivated by Blanca, who have some suspects about the group by the behaviors of some of them, she proposes a game where all diners leave their cell phones on the table, at the condition to say to everyone the contents of all text and voice messages. Starting like an innocent game, the progressive revelation of secrets as they appear cause a series the events each time more dramatics: Alfonso suspects that Eva has an affair, Ana thinks wrongly that Antonio is homosexual, Blanca realizes a horrible side about her marriage with Eduardo, and Pepe tries to keep hidden ...",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Perfect-Strangers-Movie-Poster.jpg",
    imdb_id: "tt6101820",
    imdb_rating: 7,
    runtime: 97,
    language: "English",
    ytid: "-lOUnBsjGuY",
  },
  {
    Title: "Paterno",
    fulltitle: "Paterno (2018)",
    movie_year: 2018,
    Categories: "Biography|Drama",
    summary:
      "The film centers on Joe Paterno, who, after becoming the winningest coach in college football history, is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Paterno-Movie-Poster.jpg",
    imdb_id: "tt2388986",
    imdb_rating: 6.6,
    runtime: 105,
    language: "English",
    ytid: "scI7dYdlzuY",
  },
  {
    Title: "Shirley: Visions of Reality",
    fulltitle: "Shirley: Visions of Reality (2013)",
    movie_year: 2013,
    Categories: "Documentary",
    summary:
      "13 of Edward Hopper's paintings are brought alive by the film, telling the story of a woman, whose thoughts, emotions and contemplations let us observe an era in American history. Shirley is a woman in America in the 1930s, '40s, '50s, and early '60s. A woman who would like to influence the course of history with her professional and socio political involvement.",
    ImageURL:
      "https://hydramovies.com/wp-content/uploads/2018/04/Shirley-Visions-of-Reality-Movie-Poster.jpg",
    imdb_id: "tt2636806",
    imdb_rating: 6.5,
    runtime: 92,
    language: "English",
    ytid: "rcQ4JKxxukY",
  },
];
