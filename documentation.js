/**
 * SPARouter is a very light-weight javascript plugin basically for routing front-end for single page applications.
 * SPARouter allows you to create routes in your front-end whether it is a Single Page Application or not
 * and pass function you would  want to execute if these routes are matched.
 */
SPARouter

/**
 * You can install SPARouter by hosting it locally or by cdn
 * - via npm  
 * `npm install @kodnificent/sparouter`
 * - via cdn  
 * Include this code just before the closing head tag of your html page  
 * 
 * **For develpment use only**  
 * ``<script src="https://unpkg.com/@kodnificent/sparouter@1.0.5/dist/sparouter.js"></script>``  
 * 
 * **For production use**  
 * ``<script src="https://unpkg.com/@kodnificent/sparouter@1.0.5/dist/sparouter.min.js"></script>``  
 */
Installation

/**
 * Use SPARouter through these easy steps.
 * - first create a new instance of the `SPARouter` class by passing options to it.  
 * - Call the `router.get()` method for each route and add it's callback function to it.
 * - Call `router.notFoundHandler()` to add a callback function it no route was matched. i.e 404 handler
 * - Finally call the `router.init()` to initialize the router.
 * @example
 * import SPARouter from "@kodnificent/sparouter"; // if you are hosting locally
 * const options = {
 * historyMode : true // set this to true if you use the HTML5 history mode API
 * }
 * const router = new SPARouter(options);
 * 
 * router.get("/", function(req, router){
 * 
 * console.log(`Welcome to my home page! The request url is ${req.url}`);
 * //outputs: Welcome to my home page! The request url is /
 * 
 * }).setName("home");
 * 
 * router.get("/user/{username}", function(req, router){
 * 
 * console.log(`Showing profile for ${req.param.username}. To go back home click <a href="${router.pathFor("home")}">here</a>`);
 * // if url is /user/victor
 * //ouputs: Showing profile for victor. To go back home click <a href="/">here</a> 
 * 
 * }).setName("user-profile");
 * 
 * router.notFoundHandler(function(){
 * 
 * console.log("oops! the page you are looking for is probably eaten by a snake");
 * // if user navigates to /wrong-page
 * //outputs: oops! the page you are looking for is probably eaten by a snake
 * 
 * });
 * router.init();
 */
BasicUsage

/**
 * The full API documentation can be found [here](API.md).
 */
API