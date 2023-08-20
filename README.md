# GSIV23_Aparajit_Garg

Deployed website: https://movie-recommendation-a4fd3.web.app

Instructions to run the code:
1) Clone the repo: git clone https://github.com/Aparajit-Garg/GSIV23_Aparajit_Garg.git
2) Go inside the cloned directory
3) Run: npm install
4) To run the app, execute: npm start
5) To run the test cases, execute: npm run test

Points to note in the project:
1) Code structure: The code is maintained in a structure which is simple
                   and understandable by a new joinee in the project as well
2) Reusability: The layout is divided in a way that each component is separate
at elemental level providing easier debugging and maintenance of the code
3) Developed from scratch: Parcel is used as the bundler here as most of the people
                           use WebPack, not saying that webpack is not good, just wanted to show that I have the knowledge of setting up a project from scratch. Each and every file and line of code is done at personal level only
4) Redux: For state management, I have used redux library
5) Routing: For routing implementation, I have used react-router-dom
6) Testing: Unit test cases are also implemented for Movie Detail page asserting the
            rendering of all the details
7) Code Splitting: Implemented code splitting to Movie detail page can be found on
                   github repo but not kept in the build as the build size increased
                   and performace deteriorated
8) Extra features: Implemented debouncing in the search box