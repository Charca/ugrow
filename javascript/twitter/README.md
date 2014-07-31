Twitter Search App
==================

![comp](twitter-search-app.png "The comp")

##Simple Rules:

1. Create a static HTML + CSS only version of the app. Hint: You can grab profile pictures from [http://uifaces.com/](http://uifaces.com/) and round them using the `border-radius` property. If you want to use the same font, see [https://www.google.com/fonts/specimen/Open+Sans](https://www.google.com/fonts/specimen/Open+Sans)

2. Make an AJAX request to the JSONP service [http://tweetproxy.ap01.aws.af.cm/search?q=Globant&callback=?](http://tweetproxy.ap01.aws.af.cm/search?q=Globant&callback=?)

3. Make your app dynamic by using the data from the JSON response in your list of tweets. You will need the fields: `text, created_at, user.name, user.screen_name, user.profile_image_url`

4. Make the search box work by performing a new request with the given query. Once the data is loaded, replace the old tweets with the new ones.

5. Show a "Loading..." message between the search box and the list of tweets every time new data is being requested, and hide it when we get the results back.

6. If the user tries to submit the search with an empty query, show an error message and don't perform the AJAX request.

7. When clicking on the user name or avatar, open its Twitter profile in a new tab.

8. Have fun.