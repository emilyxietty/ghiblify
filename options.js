var quotes = [
	{"We Each Need To Find Our Own Inspiration. Sometimes That's Not Easy. - Kiki's Delivery Service (1989)"},
	{"My Heart Is Stronger Now That You're In It. - The Secret World Of Arrietty (2010)"},
	{"I Love Ponyo Whether She's A Fish, A Human, Or Something In Between. - Ponyo (2008)"},
	{"Whenever Someone Creates Something With All Of Their Heart, Then That Creation Is Given A Soul. - The Cat Returns (2002)"},
	{"No Matter How Many Weapons You Have, No Matter How Great Your Technology Might Be, The World Cannot Live Without Love. - Castle In The Sky (1986)"},
	{"Sometimes You Have To Fight For The Things That Are Worth Fighting For. - The Secret World Of Arrietty (2010)"},
	{"They Say That The Best Blaze Burns Brightest When Circumstances Are At Their Worst. - Howl's Moving Castle (2004)"},
	{"Always Believe In Yourself. Do This And No Matter Where You Are, You Will Have Nothing To Fear. - The Cat Returns (2002)"},
	{"It Doesn’t Really Matter What Color Your Dress Is. What Matters Is The Heart Inside. - Kiki's Delivery Service (1989)"},
	{"Everybody, Try Laughing. Then Whatever Scares You Will Go Away! - My Neighbor Totoro (1988)"},
	{"Life Is Suffering. It Is Hard. The World Is Cursed. But Still, You Find Reasons To Keep On Living. - Princess Mononoke (1997)"},
	{"Once You've Met Someone, You Never Really Forget Them. - Spirited Away (2001)"},
	{"It’s Funny How You Wake Up Each Day And Never Really Know If It’ll Be One That Will Change Your Life Forever. - The Secret World Of Arrietty (2010)"},
	{"Deny Death, And You Deny Life. - Tales From Earthsea (2006)"},
	{"This Isn't So Bad, Now Is It? You're Still In Good Shape And Your Clothes Finally Suit You. - Howl's Moving Castle (2004)"},
	{"It's Been A Pleasure Meeting You, Even If You Are My Least Favorite Vegetable. - Howl's Moving Castle (2004)"},
	{"It's Not Easy Being Old. - Howl's Moving Castle (2004)"},
	{"One Thing You Can Always Count On Is That Hearts Change. - Howl's Moving Castle (2004)"},
	{"They Say That The Best Blaze Burns The Brightest When Circumstances Are At Their Worst. - Howl's Moving Castle (2004)"},
	{"Hes Calling The Spirits Of Darkness I Saw Him Do This Once Before When A Girl Dumped Him! - Howls Moving Castle (2004)"},
	{"There You Are Sweetheart, Sorry I'm Late, I Was Looking Everywhere For You. - Howl's Moving Castle (2004)"},
	{"A fickle heart is the only constant in the world. - Howl's Moving Castle (2004)"},
	{"You're Only Five, But You're Very Smart. Sometimes We Have To Take A Leap. - Ponyo (2008)"},
	{"You Should Never Judge Others By Their Looks. - Ponyo (2008)"},
	{"Life Is Mysterious And Amazing, But We Have Work To Do Now, And I Need You Both To Stay Calm. - Ponyo (2008)"},
	{"You're Not Busy, You're Five. - Ponyo (2008)"},
  {"Staying in this room is what will make you sick! - Spirited Away (2001)"},
  {"Quit whining. It's fun to move to a new place, it's an adventure. - Spirited Away (2001)"},
  {"I've gotta get out of this place. Someday I’m getting on that train. - Spirited Away (2001)"},
  {"Now go, and don't look back. - Spirited Away (2001)"},
  {"Something you wouldn't recognize. It’s called love. - Spirited Away (2001)"},
	{"You still haven’t noticed that something precious to you has been replaced. - Spirited Away (2001)"},
	{"If you make Sen cry I won’t like you anymore. - Spirited Away (2001)"},
	{"I’m not leaving until you give me a job!! - Spirited Away (2001)"},
	{"This is a high class place I’m running here! - Spirited Away (2001)"}

]
function getRandomQuote(array) {
  // Random number generator
  var quoteIndex = Math.floor(Math.random() * quotes.length);

  for (var i = 0; i < array.length; i++) {
// array.length rather than the actual quotes variable makes this function a little bit more flexible

    var randomQuote = array[quoteIndex];
    // Random quote variable with the index set to your random number variable
  }
  return randomQuote; // Returns random quote variable
}
// Passes quotes array as an argument and stores result of function in variable
var result = getRandomQuote(quotes);


console.log(result);
