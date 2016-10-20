/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$( document ).ready(function() {
  console.log("The page has fully loaded!");

  // Test / driver code (temporary). Eventually will get this from the server.
  var data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


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


  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  function renderTweets(tweets) {
    tweets.forEach(function(tweet){
      var $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);

    });
   // loops through tweets
     // calls createTweetElement for each tweet
     // takes return value and appends it to the tweets container
  }

  renderTweets(data);



 });
