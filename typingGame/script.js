const typeText = document.querySelector('.text')
const inputText = document.querySelector('.input1')
let ballMove = document.querySelector('.ball')
let checkBallMove = false
const paragraphs = [
    "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear.",
    "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon. Pursued distances show us how mother-in-laws can be charleses. Authors often misinterpret the lion as a cormous science, when in actuality it feels more like a leprous lasagna.",
    "In modern times the first scrawny kitten is, in its own way, an input. An ostrich is the beginner of a roast. An appressed exhaust is a gun of the mind. A recorder is a grade from the right perspective.",
    "What we don't know for sure is whether or not a pig of the coast is assumed to be a hardback pilot. The literature would have us believe that a dusky clave is not but an objective.",
    "An aunt is a bassoon from the right perspective. As far as we can estimate, some posit the melic myanmar to be less than kutcha. One cannot separate foods from blowzy bows.",
    "A baby is a shingle from the right perspective. Before defenses, collars were only operations. Bails are gleesome relatives. An alloy is a streetcar's debt.",
    "A broadband jam is a network of the mind. One cannot separate chickens from glowing periods. A production is a faucet from the right perspective.",
    "In recent years, some teeming herons are thought of simply as numbers. Nowhere is it disputed that an unlaid fur is a marble of the mind. Far from the truth, few can name a glossy lier that isn't an ingrate bone.",
    "A cough is a talk from the right perspective. A designed tractor's tray comes with it the thought that the snuffly flax is a rainbow. Their health was, in this moment, an earthy passbook. This could be, or perhaps the swordfishes could be said to resemble healthy sessions.",
    "Authors often misinterpret the flag as a wayless trigonometry, when in actuality it feels more like a bousy gold. Few can name a jasp oven that isn't a stutter grape. They were lost without the huffy religion that composed their booklet. Those waves are nothing more than pedestrians.",
    "This could be, or perhaps few can name a pasteboard quiver that isn't a brittle alligator. A swordfish is a death's numeric. Authors often misinterpret the mist as a swelling asphalt, when in actuality it feels more like a crosswise closet.",
    "The vision of an attempt becomes a lawny output. Dibbles are mis womens. The olden penalty reveals itself as a bustled field to those who look. Few can name a chalky force that isn't a primate literature.",
    "A tramp is a siamese from the right perspective. We know that a flitting monkey's jaw comes with it the thought that the submersed break is a pamphlet. Their cream was, in this moment, a seedy daffodil.",
    "The frosts could be said to resemble backstage chards. One cannot separate colleges from pinkish bacons. Far from the truth, the mom of a rooster becomes a chordal hydrogen. A tempo can hardly be considered a purer credit without also being a pajama.",
    "Far from the truth, an ajar reminder without catamarans is truly a foundation of smarmy semicircles. An alike board without harps is truly a satin of fated pans.",
    "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern.",
    "If this was somewhat unclear, a friend is a fridge from the right perspective. An upset carriage is a stitch of the mind. To be more specific, a temper is a pair from the right perspective. Authors often misinterpret the liquid as a notchy baseball, when in actuality it feels more like an unbarbed angle.",
    "A reptant discussion's rest comes with it the thought that the condemned syrup is a wish. The drake of a wallaby becomes a sonant harp. If this was somewhat unclear, spotty children show us how technicians can be jumps. Their honey was, in this moment, an intime direction. A ship is the lion of a hate. They were lost without the croupous jeep that composed their lily.",
    "Those cowbells are nothing more than elements. This could be, or perhaps before stockings, thoughts were only opinions. A coil of the exclamation is assumed to be a hurtless toy. A board is the cast of a religion. In ancient times the first stinko sailboat is, in its own way, an exchange. Few can name a tutti channel that isn't a footless operation. Extending this logic, an oatmeal is the rooster of a shake.",
];

inputText.addEventListener('input', () => {
  const textArray = typeText.querySelectorAll('span')
  const inputWord = inputText.value.split('')
  let correct = true
  textArray.forEach((spanCheck, index) => {
    const char = inputWord[index]
    if (char == null) {
      spanCheck.classList.remove('correct')
      spanCheck.classList.remove('incorrect')
      correct = false
    } else if (char === spanCheck.innerText) {
      spanCheck.classList.add('correct')
      spanCheck.classList.remove('incorrect')
    } else {
      spanCheck.classList.remove('correct')
      spanCheck.classList.add('incorrect')
      correct = false
    }
  })
  if (correct) {
      resetGame()
  }
})

function resetGame(){
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typeText.innerHTML = '';
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typeText.innerHTML += span;
    });
    inputText.value = ''
    timeleft = 60 + 1
    timeRes()
}

var timeleft = 60;

  var txtTime = setInterval(function timeRes(){
      timeleft--;
      document.querySelector('.time').textContent = timeleft;
      if(timeleft === 0){
          document.querySelector('.warning').innerHTML += `
          <h1 class="res">Game over.<br>You <span>lose</span>.</h1>`
          clearInterval(txtTime);
      }
  },1000);

resetGame()