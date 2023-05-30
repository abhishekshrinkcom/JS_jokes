let jokes = [`What do you call a boomerang that won’t come back
<br>A stick.`,
  `What does a cloud wear under his raincoat
<br>Thunderwear.`,
  `What did one say to the other
<br>Dill with it.`,
  `What time is it when the clock strikes 13
<br>Time to get a new clock.`,
  `How does a cucumber become a pickle
<br>It goes through a jarring experience.`,
  `What did one toilet say to the other
<br>You look a bit flushed.`,
  `What do you think of that new diner on the moon
<br>Food was good, but there really wasn’t much atmosphere.`,
  `Why did the dinosaur cross the road
<br>Because the chicken wasn’t born yet.`,
  `Why can’t Elsa from Frozen have a balloon
<br>Because she will "let it go, let it go."`,
  `What musical instrument is found in the bathroom
<br>A tuba toothpaste.`,
  `Why did the kid bring a ladder to school
<br>Because she wanted to go to high school.`,
  `What do you call a dog magician
<br>A labracadabrador.`,
  `Where would you find an elephant
<br>The same place you lost her.`,
  `How do you get a squirrel to like you
<br>Act like a nut.`,
  `What do you call two birds in love
<br>Tweethearts`,
  `How does a scientist freshen her breath
<br>With experi-mints.`,
  `How are false teeth like stars
<br>They come out at night.`,
  `What building in your town has the most stories
<br>The public library.`,
  `What’s worse than finding a worm in your apple
<br>Finding half a worm.`,
  `What is a computer's favorite snack
<br>Computer chips.`,
  `What did one volcano say to the other
<br>I lava you.`,
  `How do we know that the ocean is friendly
<br>It waves.`,
  `What is a tornado’s favorite game to play
<br>Twister.`,
  `How does the moon cut his hair
<br>Eclipse it.`,
  `How do you talk to a giant
<br>Use big words.`,
  `What animal is always at a baseball game
<br>A bat.`,
  `What falls in winter but never gets hurt
<br>Snow.`,
  `What did the Dalmatian say after lunch
<br>That hit the spot.`,
  `Why did the kid cross the playground
<br>To get to the other slide.`,
  `What do you call a droid that takes the long way around
<br>R2 detour.`,
  `Why did the cookie go to the hospital
<br>Because he felt crummy.`,
  `Why was the baby strawberry crying
<br>Because her mom and dad were in a jam.`,
  `What did the little corn say to the mama corn
<br>Where is pop corn`,
  `How do you make a lemon drop
<br>Just let it fall.`,
  `What did the limestone say to the geologist
<br>Don’t take me for granite.`,
  `Why does a seagull fly over the sea
<br>Because if it flew over the bay, it would be a baygull.`,
  `What kind of water can’t freeze
<br>Hot water.`,
  `What kind of tree fits in your hand
<br>A palm tree.`,
  `What do you call a dinosaur that is sleeping
<br>A dino-snore.`,
  `What is fast, loud and crunchy
<br>A rocket chip.`,
  `Why did the teddy bear say no to dessert
<br>Because she was stuffed.`,
  `What has ears but cannot hear
<br>A cornfield.`,
  `What did the left eye say to the right eye
<br>Between us, something smells.`,
  `What did one plate say to the other plate
<br>Dinner is on me.`,
  `Why did the student eat his homework
<br>Because the teacher told him it was a piece of cake.`,
  `When you look for something, why is it always in the last place you look
<br>Because when you find it, you stop looking.`,
  `What is brown, hairy and wears sunglasses
<br>A coconut on vacation.`]

let j = Math.floor(Math.random() * jokes.length);
let anyJokes = jokes[j]
document.getElementById("showJokes").innerHTML = anyJokes;