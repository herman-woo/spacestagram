just trying to remember certain things i've changed now that I'm coming back to this project
# Logs
## 2023-09-20
- added a check on the APIs for undefined fetches, was causing an issue earlier where 1 undefined array would break the whole thing
- beware of fetching too far back for APOD, it takes a while to get the site to load
## 2023-09-25
- fixing up the load more button, specifically the look of the button and the logic of getting more posts
- - 10pm, finished up the infinite loading, instead of saving the page number we now save the earliest retrieval date and iterate on that date. because if we use page numbers at some point it gets really silly to iterate through page 50 something and then translate what the number 50 means in terms of how many days to go back. It has to do something like, how many posts do we want per iteration ect. Much easier to just note down the new date, and then iterate that again with a fixed number that determines the amounts of dates we go back per iteration.
- - specifically made changes to Date.js. I think this is much more useful.
- - next, i want to take a look at saving the posts to local, so that the liked posts dont disappear. Though if you keep iterating back and saving it to local, it'll take up a lot of space.