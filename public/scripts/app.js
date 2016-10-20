/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 $( document ).ready(function() {
   console.log("The page has fully loaded!");

   // Test / driver code (temporary). Eventually will get this from the server.
   var tweetData = {
     "user": {
       "name": "Newton",
       "avatars": {
         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
       },
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
     "created_at": 1461116232227
   }

  var createTweetElement = (data) => {
    var tweetHTML = `

    <article>
      <header>
        <img src="${data.user.avatars.small}">
        <p class="TweeterName">${data.user.name}</p>
        <p class="TweeterHandle">${data.user.handle}</p>
      </header>

      <main>
      <p>${data.content.text}</p>
      </main>

      <footer>
        <p>${data.created_at}</p>
        <span class="icons">
          <img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/flag-icon.png" alt="Flag">
          <img src="https://pbs.twimg.com/media/Cm9baPGWEAAKA2r.png" alt="RT Arrows">
          <img src="http://milana.ee/img/cms/Heart.png" alt="Heart">
        </span>

        </footer>
    </article>
    `;

    return tweetHTML;
    };

  var $tweet = createTweetElement(tweetData);

   // Test / driver code (temporary)
   console.log($tweet); // to see what it looks like
   $('#tweets-container').append($tweet);
   // to add it to the page so we can make sure it's got all the right elements, classes, etc.

 });
