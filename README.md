<<<<<<< HEAD
To run the project first run `npm run install` followed by `npm run start`.
To run tests run `npm run test`.

For the best experience I recommend using this app in mobile view.

Features:

- Search for live and past data for different currency crosses.
- Dynamically search for currency pairs and update them in real time.
- Pick date from the calendar to search for past data.
- Clear past data by clicking the calendar icon.
- Add base currency to favorites by clicking the start icon.

Things to be aware of:

- As we use free API, past data is fetched by multiple requests (single API fetch by range is not available in the free plan). The API also has daily limit on calls per day, so if you select big range you might use them all instantly.

Improvements to be considered:

- Tests need major improvements. API requests should be mocked and tested too.
- There are occasional visual issues on front-end, such as misalignment when data is longer, or when resolution is changed in real time.
- Right now all rates are set with fixed decimal places. However, there are cases (e.g. JPY -> BTC) where we have weak vs strong currencies, and therefore price will show as 0.0000.

Thanks :)
=======
To run the project first run `npm run install` followed by `npm run start`
>>>>>>> a858b06dfaa773f41a8d053a50333abb813d3897
