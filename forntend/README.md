**\* please use the backend project i provided. i only changed 5 first lines because of the cors error in original backend file \***

please use node -v +22

how to run project:
open backend project then:
npm i
npm start

then open frontend project and:
npm i
npm run dev

Notes about the project:

- I assumed this is a large-scale project, so I implemented the folder structure and added some additional packages with this mindset.

- I implemented two types of pagination: infinite scroll and basic numeric pagination. You can see infinite scroll mode in the '/' path and numeric pagination in the '/list' path. ( i use <a> tag to navigate between these 2 pages to clear react-query cache for better test experience)

* In infinite scroll, if the request for the next page encounters an error, we show a retry button to fetch the next page again without losing the previous page's data. However, in normal pagination, you can’t see the previous data unless you click on the previous page.

- Caching requests: I use React Query, so the requests cache automatically. The request response caches specific filters and search criteria. It means if you change filters, clear them, and then change filters and search to the same values, it won't request again until you change filters and search to new values. The cache persists with react-router navigation too. It only refetches when you refresh.

- I handled filter and search with searchParams to persist in the URL for keeping its data after refresh without involving state for better performance. This approach is suitable for PWAs but not ideal for the navigation experience.

**Sorry for the bad UI/UX; I tried my best :) and Consider that the task took approximately 5-6 hours to complete due to my limited availability.**
