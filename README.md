Trireme Trading: Assignment of USDT X SOLANA Candlestick Chart.

This web applications main aim is to depict the exchange rate of USDT x SOLANA in a candlestick chart, and to render the orders (Asks, Bids) in real time via websockets. 

The application has fulfilled the above through the use of Socket/IO. Please note there is no connection to a postgres database, and no use of TypeOrm. All server-side connections are completed solely through websockets. 

I have taken inspiration from the ByBit page which Trireme has linked in the description of the assignment, on the document. Therefore, I have aimed to follow the same color theme, and recreate a similar style of components.

Importantly: I would like to declare my proficiency in making all of the components fully functional via the backend, however, within the deadline and tight schedule, I have been unable to achieve this aim.


                      // RUN LOCALLY INSTRUCTIONS \\

    - This project is shared as a github repository. URL: https://github.com/alaarammu/candlestick-chart
    - To run the project locally, please pull the code from my github and onto VSCode or any other code editor. 
    - Please also pull the code on github from the candlestick-chart-api repository. 
    - To run the NEXT.js frontend:
                - npm run dev
                - To stop: Control/Command C
    - To run NEST.js backend: 
                - npm run start: dev
                - To stop: Control/Command C



Contents:
        - Features
        - Technologies
        - Tools
        - Project Structure


                         // FEATURES \\ 

    - This project depicts a fully responsive design, allowing components to be viewed and used at different screen sizes.
    - Interactive, easy-to-use, engaging UI which fits the theme of ByBits structure
    - Trading tools as part of a chart component, which is interactive and user-friendly, and directly connects to the order book for client-side convenience and effectiveness.

                         // TECHNOLOGIES \\ 

    - NEXT.JS frontend (A javascript library built with react)
    - NEST.JS backend ( A javascript backend framework )
    - I have used typescript, notice all my files are .tsx
    - A mix of tailwind.css and global.css
    - React-Icons installed for added user effect

                         // TOOLS \\ 

    - Using my terminal and external tools, i was able to incorporate the candlestick chart via Trading Views resources. From here, I was able to pull the data from the chart, and incorporate it into my order book via the websockets.                   

                      // PROJECT STRUCTURE \\

Below is a small visualisation of the folder arrangement and organisation of this project.

├── public/                 
├── src/
│   ├── components/  
|   |        |-------------
|   |                     |-- header.tsx
│   ├                     |-- Chart.tsx
│   ├── layout.tsx/       |-- CommentCard.tsx
│   ├── page.tsx          |-- footer.tsx
│   ├── loading.tsx       |-- MakeBooking.tsx
│                         |-- OrderBook.tsx
|── README.md             |-- PlaceOrder.tsx  
├── .gitignore            |-- SignUp.tsx        
├── package.json          |-- x-posts.tsx    
└── ...  