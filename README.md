# CODE TEST BY SONIA

### Deployed version: https://insurance-claim-board.herokuapp.com/

### Instruction
In the project directory, you can run:<br />
`npm start`
Runs the app. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />
`npm test`
Tests the app.

### Achievement of this program
- Displayed a list of claim records
- Generated next best action by calculating current time minus updated time of the claim minus its sla (since mock data is used here, we changed current time to be a specific date and time for a better presentation of functionalities of this program). With calculated result of time length, we could find out the next best actions for each claim by refering to the JSON defined in utils/action-to-hours-mapping.js
- Used mocked data and resovled a simulated promise with 10% chance of request failure
- Added a loading bar functionality
- Implemented test suites with a high code coverage

### Tech stack used
- Used Jest and Enzyme for React automation testing framework
- Used Hooks to maintain functional components
- Used Sass to organize css code in a clean and reusable way

### Compromises made due to time constraints / Room for improvement
- Css styles and responsive design could be added. However BEM and Sass have been used to make it easy to rewrite or add other css styles in future
- Routing pages (i.e. seperated detail page for each claim). Currently only displayed all information in one page in dashboard. This could be done by using react-router.
- Data validation / error handling. Assume data format is correct, same as listed in the given JSON file. Add some error handling when renders data could make the program more robust. 
- Websocket. This project has only involved frontend and simulate backend api by resovles a promise with JSON mock data. However in realworld situation, Websocket or XHR (instead of HTTP request) could be used for real-time data transfer, given the context of building such a real-time insurance claim dashboard
- Searching records by claim assessor names. Given the target users of this dashboard are claim assessors, this feature is worthy to implement in future. Context API could be used to pair up with React Hooks to handle state mangement issue between components of search bar and claim records.
- Performance. In the situation where we have to handle a large amount of records, lazy loading could be used. Pagination is also necessary to avoid requesting too much unecessary information at once. (It is also a necessary thing to have regarding UI/UX)


### Last but not least..
Thank you so much for reviewing my code. Any feedback you give me could greatly help. I look forward to hearing from you!
