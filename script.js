const concepts = [

/* ================= PROGRAMMING ================= */

{
title:"Variables",category:"Programming",emoji:"📦",
simple:"A variable is a named place where a program stores information.",
example:"Think of a labeled box. The label is the variable name and the thing inside is the value.",
realLife:"A box labeled 'age' could contain the number 15.",
key:"Variables let programs remember information.",
code:"let age = 15;\nlet name = \"Alex\";",
quiz:[
["What does a variable store?",["A value","Only pictures","Electricity","A website"],0],
["Which is a variable?",["let age = 15","<h1>","color: red","SELECT *"],0],
["Why do we use variables?",["To store information","To turn off computers","To draw pixels","To create electricity"],0]
]},

{
title:"Functions",category:"Programming",emoji:"⚙️",
simple:"A function is a reusable group of instructions that performs a task.",
example:"A button can call a function that says exactly what should happen when you click it.",
realLife:"A washing machine has a 'wash' program that performs many steps for you.",
key:"Functions help us reuse code instead of writing the same instructions again.",
code:"function sayHello() {\n  console.log(\"Hello!\");\n}",
quiz:[
["What is a function?",["A group of reusable instructions","A computer screen","A database","A color"],0],
["How do you run a function?",["Call it","Paint it","Delete it","Print it"],0],
["Why are functions useful?",["They reduce repeated code","They increase electricity","They replace HTML","They delete variables"],0]
]},

{
title:"Loops",category:"Programming",emoji:"🔁",
simple:"A loop repeats instructions multiple times.",
example:"Instead of writing 'say hello' ten times, a loop can repeat the instruction ten times.",
realLife:"A teacher asking every student in a class to stand up is repeating the same action for each student.",
key:"Loops are useful whenever something needs to happen repeatedly.",
code:"for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
quiz:[
["What does a loop do?",["Repeats instructions","Deletes code","Creates electricity","Changes the keyboard"],0],
["When are loops useful?",["When something repeats","Only when using CSS","Only for images","Never"],0],
["What does i often represent in a loop?",["A counter","A color","A password","A website"],0]
]},

{
title:"Arrays",category:"Programming",emoji:"🗃️",
simple:"An array is a collection that stores multiple values together.",
example:"Instead of having five separate variables for five fruits, you can put all five fruits into one array.",
realLife:"A shopping list is similar to an array because it contains multiple items.",
key:"Arrays organize multiple pieces of information.",
code:"let fruits = [\"apple\", \"banana\", \"orange\"];",
quiz:[
["What does an array store?",["Multiple values","Only one letter","Electricity","HTML pages"],0],
["Which is an array?",["[1, 2, 3]","<p>Hello</p>","color: blue","SELECT name"],0],
["What is useful about arrays?",["They organize collections","They create Wi-Fi","They replace computers","They remove data"],0]
]},

{
title:"Objects",category:"Programming",emoji:"🧩",
simple:"An object groups related information using named properties.",
example:"A person object could contain a name, age and favorite color.",
realLife:"A student record can contain a student's name, age, class and grades.",
key:"Objects are useful for representing real-world things in code.",
code:"let person = {\n  name: \"Alex\",\n  age: 15\n};",
quiz:[
["What do objects contain?",["Properties and values","Only numbers","Only images","Electricity"],0],
["What could describe a person object?",["name and age","Only CSS","Only HTML","Only pixels"],0],
["Objects are useful for representing what?",["Things and their information","Only websites","Only loops","Only colors"],0]
]},

{
title:"Recursion",category:"Programming",emoji:"🌀",
simple:"Recursion happens when a function calls itself to solve smaller versions of a problem.",
example:"Imagine opening a Russian doll and finding another smaller doll inside.",
realLife:"Folders can contain folders, which can contain more folders.",
key:"Recursion needs a stopping condition called a base case.",
code:"function count(n) {\n  if (n === 0) return;\n  count(n - 1);\n}",
quiz:[
["What is recursion?",["A function calling itself","A CSS color","A database","An HTML tag"],0],
["What stops recursion?",["A base case","A button","A browser","A variable name"],0],
["What usually becomes smaller?",["The problem","The screen","The keyboard","The computer"],0]
]},

{
title:"Algorithm",category:"Programming",emoji:"🧭",
simple:"An algorithm is a step-by-step method for solving a problem.",
example:"A recipe is like an algorithm: follow the steps in order to make the food.",
realLife:"Following directions from your house to school is a kind of algorithm.",
key:"Algorithms give computers clear instructions.",
quiz:[
["What is an algorithm?",["Step-by-step instructions","A computer screen","A programming language","A battery"],0],
["What is a recipe similar to?",["An algorithm","A variable","A database","A bug"],0],
["Why do computers need algorithms?",["To know what steps to perform","To charge themselves","To change color","To make sound"],0]
]},

{
title:"API",category:"Programming",emoji:"🔌",
simple:"An API lets different pieces of software communicate with each other.",
example:"A weather app can ask a weather service for today's temperature using an API.",
realLife:"A waiter takes your order to the kitchen and brings the result back. An API works similarly.",
key:"APIs are bridges between software systems.",
code:"fetch('/api/weather');",
quiz:[
["What does an API allow?",["Software to communicate","Computers to sleep","CSS to become HTML","Screens to grow"],0],
["A weather app might use an API to get what?",["Weather data","Keyboard keys","Electricity","A monitor"],0],
["An API is like what in a restaurant?",["A waiter","A table","A plate","A chair"],0]
]},

{
title:"HTTP",category:"Programming",emoji:"🌐",
simple:"HTTP is a set of rules used for communication between web browsers and servers.",
example:"When you open a website, your browser sends requests and receives responses.",
realLife:"It's like sending a request to a library and receiving the book you asked for.",
key:"HTTP is one of the foundations of the web.",
quiz:[
["What does HTTP help with?",["Web communication","Computer charging","Image editing","Sound recording"],0],
["Who can send an HTTP request?",["A browser","A chair","A battery","A keyboard"],0],
["What can a server send back?",["A response","A sandwich","Electricity","A keyboard"],0]
]},

{
title:"JSON",category:"Programming",emoji:"📄",
simple:"JSON is a text format commonly used to organize and exchange data.",
example:"A person's name and age can be represented as JSON.",
realLife:"JSON is like a neatly organized form that computers can easily read.",
key:"JSON makes structured information easy to send between systems.",
code:"{\n  \"name\": \"Alex\",\n  \"age\": 15\n}",
quiz:[
["What is JSON used for?",["Representing data","Styling pages","Drawing pictures","Charging devices"],0],
["JSON is commonly used between what?",["Applications and servers","Chairs and tables","Keyboards and mice","Batteries"],0],
["Which looks like JSON?",["{\"name\":\"Alex\"}","color:red","<h1>","SELECT *"],0]
]},

{
title:"DOM",category:"Programming",emoji:"🌳",
simple:"The DOM is the browser's representation of an HTML page that JavaScript can interact with.",
example:"JavaScript can use the DOM to change a heading when you click a button.",
realLife:"Think of your webpage as a tree. Each HTML element is like a branch or leaf.",
key:"The DOM lets JavaScript interact with webpage elements.",
code:"document.querySelector('h1');",
quiz:[
["What does DOM represent?",["A webpage structure","A database","A programming language","A keyboard"],0],
["What can JavaScript do with the DOM?",["Change webpage elements","Charge a phone","Create electricity","Change hardware"],0],
["DOM stands for?",["Document Object Model","Digital Online Machine","Data Object Memory","Document Online Method"],0]
]},

{
title:"Events",category:"Programming",emoji:"🖱️",
simple:"An event is something that happens that JavaScript can react to.",
example:"Clicking a button is an event.",
realLife:"A doorbell being pressed is an event that causes someone to react.",
key:"Events make websites interactive.",
quiz:[
["Which is an event?",["A button click","A CSS color","A variable name","A file type"],0],
["What can JavaScript do when an event happens?",["React to it","Turn off Wi-Fi","Change the keyboard","Delete the browser"],0],
["Which action can trigger an event?",["Clicking","Sleeping","Charging","Printing electricity"],0]
]},

{
title:"Git",category:"Programming",emoji:"🌿",
simple:"Git is a tool that tracks changes in code over time.",
example:"You can save different versions of your project and return to an older version.",
realLife:"It's like having multiple saved versions of a school project.",
key:"Git helps developers track and manage code changes.",
quiz:[
["What does Git track?",["Changes in files","Temperature","Internet speed","Battery level"],0],
["Why use Git?",["To manage versions","To design logos","To edit photos","To browse websites"],0],
["A saved version in Git is called what?",["A commit","A pixel","A folder","A browser"],0]
]},

{
title:"Database",category:"Programming",emoji:"🗄️",
simple:"A database is an organized system for storing and retrieving information.",
example:"A school database could store student names, classes and grades.",
realLife:"A library catalog is similar to a database.",
key:"Databases allow applications to remember lots of information.",
quiz:[
["What does a database store?",["Information","Electricity","Screens","Sound only"],0],
["What could a school database contain?",["Student information","Only colors","Only HTML","Only images"],0],
["Why use databases?",["To organize and retrieve data","To charge computers","To create keyboards","To change gravity"],0]
]},

{
title:"SQL",category:"Programming",emoji:"🔎",
simple:"SQL is a language used to work with relational databases.",
example:"You can use SQL to ask a database for all students in a class.",
realLife:"It's like asking a librarian to find every book matching a specific condition.",
key:"SQL lets you query and manipulate structured database data.",
code:"SELECT name FROM students;",
quiz:[
["What is SQL used for?",["Working with databases","Styling websites","Drawing images","Editing videos"],0],
["What does SELECT do?",["Retrieves data","Deletes the computer","Changes CSS","Creates electricity"],0],
["SQL commonly works with what?",["Relational databases","Keyboards","Monitors","Speakers"],0]
]},

{
title:"Frontend",category:"Programming",emoji:"🎨",
simple:"Frontend is the part of an application that users see and interact with.",
example:"Buttons, menus, text and animations on a website are frontend.",
realLife:"A restaurant's dining room is like the frontend because customers interact with it.",
key:"Frontend focuses on the user's experience.",
quiz:[
["What does frontend describe?",["What users see and interact with","The power supply","The server room","The keyboard"],0],
["HTML, CSS and JavaScript are commonly used for what?",["Frontend development","Cooking","Accounting","Hardware repair"],0],
["What does frontend focus on?",["User experience","Electricity","Computer temperature","Internet cables"],0]
]},

{
title:"Backend",category:"Programming",emoji:"⚙️",
simple:"Backend is the part of an application that works behind the scenes.",
example:"A server can process a login and retrieve information from a database.",
realLife:"A restaurant kitchen is like the backend because customers don't directly interact with it.",
key:"Backend handles logic, data and server-side operations.",
quiz:[
["What is backend?",["Behind-the-scenes application logic","Website colors","A monitor","A keyboard"],0],
["What can a backend communicate with?",["A database","A chair","A mouse pad","A speaker only"],0],
["Users usually see the backend directly?",["No","Yes always","Only in CSS","Only in HTML"],0]
]},

{
title:"Debugging",category:"Programming",emoji:"🐛",
simple:"Debugging means finding and fixing problems in a program.",
example:"If a button does nothing, you investigate the code to discover why.",
realLife:"It's like figuring out why a lamp isn't turning on.",
key:"Debugging is a normal and essential part of programming.",
quiz:[
["What is debugging?",["Finding and fixing problems","Writing essays","Drawing pictures","Installing keyboards"],0],
["What is a programming error often called?",["A bug","A fruit","A server","A pixel"],0],
["Why debug code?",["To make it work correctly","To change gravity","To charge it","To make the monitor bigger"],0]
]},

{
title:"Compiler",category:"Programming",emoji:"🔧",
simple:"A compiler translates source code into a form a computer can execute.",
example:"A programmer writes code, and a compiler translates it into instructions the machine can use.",
realLife:"It's like translating a book from one language into another.",
key:"Compilers help computers understand certain programming languages.",
quiz:[
["What does a compiler do?",["Translates code","Draws websites","Stores food","Changes batteries"],0],
["What does it translate?",["Source code","Keyboard keys","Electricity","Paper"],0],
["Why compile code?",["So it can be executed appropriately","To make coffee","To change colors","To clean a screen"],0]
]},

/* ================= SCIENCE ================= */

{
title:"Gravity",category:"Science",emoji:"🌍",
simple:"Gravity is the attraction between objects that have mass.",
example:"When you drop a ball, Earth pulls it toward the ground.",
realLife:"Gravity is why you stay on the ground instead of floating away.",
key:"Gravity affects planets, objects and everything with mass.",
quiz:[
["What does Earth's gravity pull objects toward?",["Earth","The sky","The keyboard","The Moon only"],0],
["Why does a dropped ball fall?",["Gravity pulls it","The ball becomes heavier","The air pushes it down only","The Sun catches it"],0],
["Gravity is a type of what?",["Force","Color","Sound","Light"],0]
]},

{
title:"Photosynthesis",category:"Science",emoji:"🌱",
simple:"Photosynthesis is how plants use light, water and carbon dioxide to make sugars.",
example:"A plant uses sunlight like energy for a tiny food factory.",
realLife:"Plants use sunlight to help make the food they need.",
key:"Photosynthesis is fundamental to plant life and produces oxygen as a byproduct.",
quiz:[
["What provides energy for photosynthesis?",["Light","Sound","Plastic","Gravity"],0],
["Plants take in which gas?",["Carbon dioxide","Helium","Hydrogen only","Neon"],0],
["What gas is released as a product?",["Oxygen","Gold","Helium","Nitrogen"],0]
]},

{
title:"Atom",category:"Science",emoji:"⚛️",
simple:"An atom is a tiny unit of matter that makes up elements.",
example:"A piece of iron contains enormous numbers of iron atoms.",
realLife:"Everything around you is made from atoms.",
key:"Atoms are building blocks of ordinary matter.",
quiz:[
["What are atoms?",["Tiny units of matter","Tiny planets","Types of plants","Types of sound"],0],
["Atoms make up what?",["Matter","Only sunlight","Only water","Only computers"],0],
["Which is made of atoms?",["A chair","Only electricity","Nothing","Only sound"],0]
]},

{
title:"Molecule",category:"Science",emoji:"🔬",
simple:"A molecule is a group of atoms chemically bonded together.",
example:"A water molecule contains hydrogen and oxygen atoms.",
realLife:"The water you drink is made of enormous numbers of water molecules.",
key:"Molecules are groups of bonded atoms.",
quiz:[
["What makes a molecule?",["Bonded atoms","Only light","Only electricity","Only sound"],0],
["Water is made of what?",["Water molecules","Pixels","Wires","Stars"],0],
["Can molecules contain different atoms?",["Yes","Never","Only in space","Only in computers"],0]
]},

{
title:"Cell",category:"Science",emoji:"🧫",
simple:"A cell is the basic structural and functional unit of living organisms.",
example:"Your body contains many specialized cells that perform different jobs.",
realLife:"Think of cells as tiny rooms that make up a huge building called an organism.",
key:"Living things are made of one or more cells.",
quiz:[
["What is a cell?",["A basic unit of life","A planet","A type of rock","A computer"],0],
["Your body contains what?",["Many cells","Only one cell","No cells","Only atoms"],0],
["Are all cells identical?",["No","Yes","Only plants","Only animals"],0]
]},

{
title:"DNA",category:"Science",emoji:"🧬",
simple:"DNA is a molecule that stores genetic information used by living organisms.",
example:"DNA contains instructions involved in how your body develops and functions.",
realLife:"You can think of DNA as a biological instruction library.",
key:"DNA carries hereditary information.",
quiz:[
["What does DNA store?",["Genetic information","Electricity","Weather","Money"],0],
["DNA is found in what?",["Living organisms","Only rocks","Only computers","Only water"],0],
["DNA is like what?",["Instructions","A battery","A keyboard","A camera"],0]
]},

{
title:"Evolution",category:"Science",emoji:"🦎",
simple:"Evolution is the change in inherited characteristics of populations across generations.",
example:"Over many generations, populations can change as certain inherited traits become more common.",
realLife:"Modern species have histories shaped by generations of biological change.",
key:"Evolution happens across generations, not because an individual simply decides to change.",
quiz:[
["Evolution occurs across what?",["Generations","Minutes","One afternoon","One meal"],0],
["What changes over time?",["Populations","Only rocks","Computers","Weather"],0],
["Is evolution the same as an individual choosing to change?",["No","Yes","Always","Only in plants"],0]
]},

{
title:"Natural Selection",category:"Science",emoji:"🦋",
simple:"Natural selection is a process where inherited traits that help survival or reproduction can become more common.",
example:"If a trait helps an animal survive and reproduce, descendants may inherit that trait.",
realLife:"Populations can become better suited to their environments over many generations.",
key:"Natural selection acts on inherited variation.",
quiz:[
["What does natural selection act on?",["Inherited variation","Computer code","Weather forecasts","Money"],0],
["What can become more common?",["Helpful inherited traits","Random passwords","Colors on screens","Cars"],0],
["Does natural selection happen instantly?",["No","Yes","Always","Only in humans"],0]
]},

{
title:"Ecosystem",category:"Science",emoji:"🌳",
simple:"An ecosystem includes living organisms and the environment they interact with.",
example:"A forest ecosystem includes trees, animals, fungi, soil, water and more.",
realLife:"A pond can function as a small ecosystem.",
key:"Living and nonliving parts interact within ecosystems.",
quiz:[
["What is an ecosystem?",["Living things plus their environment","Only animals","Only plants","Only water"],0],
["What can be part of an ecosystem?",["Trees and soil","Only computers","Only clouds","Only buildings"],0],
["Do organisms interact with their environment?",["Yes","No","Never","Only underground"],0]
]},

{
title:"Food Chain",category:"Science",emoji:"🐛",
simple:"A food chain shows how energy and nutrients move between organisms through feeding relationships.",
example:"Grass can be eaten by an insect, which can be eaten by a bird.",
realLife:"Predator and prey relationships are part of food chains.",
key:"Food chains show feeding relationships between organisms.",
quiz:[
["What does a food chain show?",["Feeding relationships","Internet connections","Weather","DNA codes"],0],
["What can start many food chains?",["Plants","Cars","Computers","Rocks"],0],
["What eats prey?",["Predators","Clouds","Rocks","Plants only"],0]
]},

{
title:"Electricity",category:"Science",emoji:"⚡",
simple:"Electricity involves the movement or presence of electric charge.",
example:"A battery can provide energy that allows electric current to flow through a circuit.",
realLife:"Lights, phones and computers use electrical energy.",
key:"Electric circuits allow electrical energy to be transferred and used.",
quiz:[
["Electricity involves what?",["Electric charge","Only water","Only sound","Only gravity"],0],
["What can provide electrical energy?",["A battery","A chair","A book","A cloud"],0],
["What uses electricity?",["A phone","A rock","A pencil","A paper"],0]
]},

{
title:"Magnetism",category:"Science",emoji:"🧲",
simple:"Magnetism is a force associated with magnetic fields and moving electric charges.",
example:"A magnet can attract certain materials such as iron.",
realLife:"Magnets are used in speakers, motors and many devices.",
key:"Magnetic fields can exert forces on certain materials and charges.",
quiz:[
["What can a magnet attract?",["Iron","Paper always","Water always","Glass always"],0],
["Magnets have what?",["Magnetic fields","DNA","Leaves","Roots"],0],
["Where are magnets used?",["Motors","Only books","Only food","Only pencils"],0]
]},

{
title:"Light",category:"Science",emoji:"💡",
simple:"Light is electromagnetic radiation that can travel through space and can be detected by human eyes within a certain range.",
example:"Sunlight travels through space and reaches Earth.",
realLife:"You see objects because light reaches your eyes.",
key:"Visible light is one small part of the electromagnetic spectrum.",
quiz:[
["What kind of phenomenon is light?",["Electromagnetic radiation","Sound only","Gravity only","Matter only"],0],
["Why can you see an object?",["Light reaches your eyes","The object talks","Gravity paints it","Sound colors it"],0],
["The visible spectrum is part of what?",["Electromagnetic spectrum","Food chain","Water cycle","DNA"],0]
]},

{
title:"Sound",category:"Science",emoji:"🔊",
simple:"Sound is a mechanical wave produced by vibrations traveling through a medium.",
example:"A vibrating speaker makes air vibrate, producing sound waves.",
realLife:"Your voice creates vibrations that travel through air to someone's ears.",
key:"Sound needs a medium such as air, water or a solid to travel.",
quiz:[
["Sound is produced by what?",["Vibrations","Gravity only","Light only","Plants"],0],
["Can sound travel through air?",["Yes","No","Never","Only in space"],0],
["Does sound need a medium?",["Yes","No","Never","Only sunlight"],0]
]},

{
title:"Energy",category:"Science",emoji:"🔋",
simple:"Energy is the capacity to cause change or do work.",
example:"A battery stores chemical energy that can be transformed into electrical energy.",
realLife:"Food provides chemical energy that your body uses.",
key:"Energy can be transferred and transformed.",
quiz:[
["What can energy do?",["Cause change","Only create colors","Only make sounds","Nothing"],0],
["What does a battery store?",["Chemical energy","Only light","Only water","Only sound"],0],
["Can energy change form?",["Yes","No","Never","Only in space"],0]
]},

{
title:"Force",category:"Science",emoji:"💥",
simple:"A force is a push or pull that can change an object's motion.",
example:"Pushing a shopping cart applies a force.",
realLife:"Kicking a ball changes its motion because your foot applies a force.",
key:"Forces can change speed, direction or shape.",
quiz:[
["A force is a what?",["Push or pull","Color","Sound","Number"],0],
["What can a force change?",["Motion","Only temperature","Only color","Nothing"],0],
["Kicking a ball applies what?",["A force","A database","A molecule","A password"],0]
]},

{
title:"Pressure",category:"Science",emoji:"🎈",
simple:"Pressure describes how much force is applied over a given area.",
example:"A sharp pin produces high pressure because its force acts over a tiny area.",
realLife:"Air inside a tire creates pressure against the tire walls.",
key:"The same force can create different pressure depending on the area.",
quiz:[
["Pressure depends on force and what?",["Area","Color","Sound","Time only"],0],
["Why can a sharp pin pierce easily?",["Its force acts over a tiny area","It has gravity","It is loud","It is warm"],0],
["Air inside a tire creates what?",["Pressure","DNA","Photosynthesis","Magnetism"],0]
]},

{
title:"Temperature",category:"Science",emoji:"🌡️",
simple:"Temperature measures how hot or cold something is and relates to the average kinetic energy of its particles.",
example:"Heating water increases the average motion of its particles.",
realLife:"A thermometer measures temperature.",
key:"Temperature describes the thermal state of matter.",
quiz:[
["Temperature tells us how what something is?",["Hot or cold","Heavy or light only","Loud or quiet","Fast or slow only"],0],
["What instrument measures temperature?",["Thermometer","Compass","Ruler","Clock"],0],
["Heating matter generally increases what?",["Particle motion","Its name","Its color only","Its age"],0]
]},

{
title:"Water Cycle",category:"Science",emoji:"💧",
simple:"The water cycle describes how water moves between Earth's surface, atmosphere and underground.",
example:"Water evaporates, forms clouds, falls as precipitation and returns to the surface.",
realLife:"Rain today may have been water that evaporated earlier.",
key:"Water continuously moves through different parts of Earth's system.",
quiz:[
["What happens during evaporation?",["Liquid water becomes vapor","Water becomes rock","Clouds disappear forever","Rain becomes fire"],0],
["What falls from clouds?",["Precipitation","DNA","Electricity","Soil"],0],
["Is water constantly moving through the cycle?",["Yes","No","Never","Only in winter"],0]
]},

{
title:"Solar System",category:"Science",emoji:"☀️",
simple:"The Solar System is the Sun and the objects that orbit it, including planets, moons and smaller bodies.",
example:"Earth travels around the Sun.",
realLife:"Our planet is one part of a much larger planetary system.",
key:"The Sun is at the center of our Solar System.",
quiz:[
["What is at the center of our Solar System?",["The Sun","Earth","The Moon","Mars"],0],
["What orbits the Sun?",["Planets","Only clouds","Only trees","Only oceans"],0],
["Earth is part of what?",["Solar System","Food chain","Water cycle only","Database"],0]
]},

/* ================= MATH ================= */

{
title:"Fractions",category:"Mathematics",emoji:"🍕",
simple:"A fraction represents a part of a whole.",
example:"If a pizza is divided into 4 equal pieces and you eat 1, you ate 1/4.",
realLife:"Recipes often use fractions such as 1/2 cup.",
key:"The top number counts parts and the bottom tells how many equal parts make the whole.",
quiz:[
["What does 1/4 mean?",["One of four equal parts","Four of one part","One plus four","Four whole pizzas"],0],
["The bottom of a fraction tells us what?",["How many equal parts","The color","The answer always","The units only"],0],
["Where might fractions be used?",["Recipes","Only computers","Only cars","Nowhere"],0]
]},

{
title:"Percentages",category:"Mathematics",emoji:"％",
simple:"A percentage expresses a quantity as a part out of 100.",
example:"50% means 50 out of 100, which is one half.",
realLife:"Discounts in shops are often given as percentages.",
key:"Percent means 'out of one hundred'.",
quiz:[
["What does percent mean?",["Out of 100","Out of 10","Out of 1","Out of 1000"],0],
["What is 50%?",["One half","One tenth","The whole","Nothing"],0],
["Where are percentages used?",["Discounts","Only planets","Only biology","Only music"],0]
]},

{
title:"Probability",category:"Mathematics",emoji:"🎲",
simple:"Probability measures how likely an event is to happen.",
example:"A fair coin has a 1/2 probability of landing heads.",
realLife:"Weather forecasts use probabilities when describing chances of rain.",
key:"Probability ranges from impossible to certain.",
quiz:[
["What does probability measure?",["Likelihood","Weight","Color","Temperature"],0],
["What is the probability of heads on a fair coin?",["1/2","1/10","2","100"],0],
["A probability of 1 means?",["Certain","Impossible","Unlikely","Random"],0]
]},

{
title:"Equation",category:"Mathematics",emoji:"🟰",
simple:"An equation states that two expressions have the same value.",
example:"x + 2 = 5 says the left side and right side are equal.",
realLife:"You can use equations to calculate unknown quantities.",
key:"The equals sign means both sides have the same value.",
quiz:[
["What does = mean?",["Equal","Greater than","Less than","Multiply"],0],
["In x + 2 = 5, what is x?",["3","2","5","7"],0],
["What can equations help find?",["Unknown values","Colors","Sounds","Weather only"],0]
]},

{
title:"Function",category:"Mathematics",emoji:"📈",
simple:"A mathematical function assigns an output to each allowed input.",
example:"A function could multiply every input by 2.",
realLife:"A taxi fare function can relate distance traveled to price.",
key:"Functions describe relationships between inputs and outputs.",
quiz:[
["What does a function connect?",["Inputs and outputs","Colors and sounds","Books and chairs","Clouds and trees"],0],
["If f(x)=2x, what is f(3)?",["6","3","2","9"],0],
["A function describes what?",["A relationship","A planet","A language","A battery"],0]
]},

{
title:"Derivative",category:"Mathematics",emoji:"📐",
simple:"A derivative measures how a quantity changes with respect to another quantity.",
example:"If position changes over time, its derivative gives velocity.",
realLife:"A speedometer tells you how quickly your position is changing.",
key:"Derivatives describe rates of change.",
quiz:[
["What does a derivative describe?",["Rate of change","Only area","Only color","Only probability"],0],
["Derivative of position with respect to time gives?",["Velocity","Mass","Temperature","Area"],0],
["A speedometer relates to what idea?",["Rate of change","Fractions only","Probability only","Geometry only"],0]
]},

{
title:"Integral",category:"Mathematics",emoji:"∫",
simple:"An integral can represent accumulation, such as the total area under a curve.",
example:"If you know how fast water enters a tank over time, an integral can help find the total water added.",
realLife:"Integrals can help calculate total distance from velocity over time.",
key:"Integration is closely connected to accumulation and area.",
quiz:[
["What can an integral represent?",["Accumulation","Only temperature","Only color","Only sound"],0],
["Area under a curve can be found using what?",["An integral","A keyboard","A database","A compass only"],0],
["Integrals are related to what?",["Accumulation","Only subtraction","Only language","Only history"],0]
]},

{
title:"Limit",category:"Mathematics",emoji:"🎯",
simple:"A limit describes the value a quantity approaches as an input gets closer to a particular point.",
example:"You can ask what a function approaches as x gets closer and closer to 2.",
realLife:"Imagine walking closer and closer to a door without necessarily reaching it.",
key:"Limits help define derivatives and continuity.",
quiz:[
["What does a limit describe?",["What something approaches","Only what something equals","A color","A probability"],0],
["What happens to the input?",["It approaches a value","It disappears","It becomes a picture","It becomes electricity"],0],
["Limits are important in what area?",["Calculus","Cooking","History","Geography"],0]
]},

{
title:"Vectors",category:"Mathematics",emoji:"➡️",
simple:"A vector represents a quantity with both magnitude and direction.",
example:"A velocity of 20 m/s east has both a size and a direction.",
realLife:"Directions on a map can be represented using vectors.",
key:"Vectors contain direction as well as magnitude.",
quiz:[
["What does a vector have?",["Magnitude and direction","Only color","Only size","Only time"],0],
["Velocity is an example of what?",["A vector","A scalar only","A fraction","A database"],0],
["A vector can describe what?",["Movement","Only temperature","Only money","Only language"],0]
]},

{
title:"Matrix",category:"Mathematics",emoji:"🔢",
simple:"A matrix is a rectangular arrangement of numbers or other values.",
example:"A 2×2 matrix has two rows and two columns.",
realLife:"Matrices are used in computer graphics, data analysis and many mathematical systems.",
key:"Matrices organize values into rows and columns.",
quiz:[
["How are matrix values organized?",["Rows and columns","Only circles","Only lines","Randomly"],0],
["A 2×3 matrix has how many entries?",["6","5","3","2"],0],
["Where are matrices used?",["Computer graphics","Only cooking","Only sports","Only music"],0]
]},

{
title:"Geometry",category:"Mathematics",emoji:"📐",
simple:"Geometry studies shapes, sizes, positions and properties of space.",
example:"Triangles, circles and rectangles are geometric shapes.",
realLife:"Architecture uses geometry to design buildings.",
key:"Geometry helps us understand space and shapes.",
quiz:[
["What does geometry study?",["Shapes and space","Only numbers","Only language","Only history"],0],
["A triangle has how many sides?",["3","4","5","2"],0],
["Where is geometry used?",["Architecture","Only cooking","Only music","Only biology"],0]
]},

{
title:"Pythagorean Theorem",category:"Mathematics",emoji:"📏",
simple:"The Pythagorean theorem relates the side lengths of a right triangle.",
example:"For a right triangle, the square of the longest side equals the sum of the squares of the other two sides.",
realLife:"It can help calculate distances when you know two perpendicular sides.",
key:"It applies specifically to right triangles.",
quiz:[
["Which triangle uses the theorem?",["Right triangle","Any circle","Any square","Only equilateral triangles"],0],
["What is the longest side called?",["Hypotenuse","Radius","Diameter","Base"],0],
["If the legs are 3 and 4, the hypotenuse is?",["5","6","7","12"],0]
]},

{
title:"Statistics",category:"Mathematics",emoji:"📊",
simple:"Statistics is the study of collecting, analyzing and interpreting data.",
example:"A school can analyze students' test scores using statistics.",
realLife:"Polls and surveys use statistics to summarize information.",
key:"Statistics helps us understand data.",
quiz:[
["What does statistics study?",["Data","Only shapes","Only language","Only electricity"],0],
["What can a survey produce?",["Data","Gravity","DNA","Light"],0],
["Why use statistics?",["To understand data","To change weather","To create planets","To charge phones"],0]
]},

{
title:"Mean",category:"Mathematics",emoji:"➗",
simple:"The mean is found by adding values and dividing by how many values there are.",
example:"The mean of 2, 4 and 6 is 4.",
realLife:"You can calculate average test scores using the mean.",
key:"Mean is one way to describe the center of numerical data.",
quiz:[
["How do you find the mean?",["Add and divide by the count","Multiply everything","Choose the largest","Choose the smallest"],0],
["Mean of 2,4,6?",["4","3","6","12"],0],
["What does mean help describe?",["Average","Color","Direction","Temperature only"],0]
]},

{
title:"Median",category:"Mathematics",emoji:"↔️",
simple:"The median is the middle value when numbers are arranged in order.",
example:"In 2, 4, 7, the median is 4.",
realLife:"Median income can describe a typical middle point in a population.",
key:"Median is based on position after sorting.",
quiz:[
["What is the median?",["Middle value","Largest value","Smallest value","Sum"],0],
["Median of 1,3,9?",["3","1","9","13"],0],
["What must you usually do first?",["Order the values","Multiply them","Delete them","Color them"],0]
]},

{
title:"Mode",category:"Mathematics",emoji:"🔢",
simple:"The mode is the value that appears most often in a dataset.",
example:"In 2, 3, 3, 5, the mode is 3.",
realLife:"A shop might find the most common shoe size sold.",
key:"Mode measures the most frequent value.",
quiz:[
["What is the mode?",["Most frequent value","Middle value","Average","Largest value"],0],
["Mode of 1,2,2,4?",["2","1","4","9"],0],
["Mode is based on what?",["Frequency","Color","Size only","Direction"],0]
]},

/* ================= PSYCHOLOGY ================= */

{
title:"Memory",category:"Psychology",emoji:"🧠",
simple:"Memory is the ability to encode, store and retrieve information.",
example:"Remembering someone's name uses memory.",
realLife:"Studying for an exam involves creating memories that you can later retrieve.",
key:"Memory is not simply a perfect recording of everything we experience.",
quiz:[
["What does memory allow us to do?",["Store and retrieve information","Fly","Change gravity","Create planets"],0],
["Remembering a name uses what?",["Memory","Magnetism","Photosynthesis","Geometry"],0],
["Can memory be imperfect?",["Yes","No","Never","Only in computers"],0]
]},

{
title:"Attention",category:"Psychology",emoji:"👀",
simple:"Attention is the process of focusing mental resources on particular information.",
example:"Listening to your teacher while ignoring background noise requires attention.",
realLife:"Driving requires attention to many important signals.",
key:"Attention helps us select what information to process.",
quiz:[
["What is attention?",["Focusing mental resources","Sleeping","Eating","Running"],0],
["Listening while ignoring noise uses what?",["Attention","Gravity","DNA","Algebra"],0],
["Attention helps us select what?",["Information","Food","Weather","Electricity"],0]
]},

{
title:"Emotion",category:"Psychology",emoji:"❤️",
simple:"Emotions are complex responses involving feelings, thoughts, body changes and behavior.",
example:"Fear can make someone feel tense and pay close attention to possible danger.",
realLife:"Happiness, sadness, anger and fear can influence decisions and behavior.",
key:"Emotions involve more than just a feeling.",
quiz:[
["Emotions can influence what?",["Thoughts and behavior","Gravity","DNA","Weather"],0],
["Fear can affect what?",["Body and attention","Only hair","Only shoes","Nothing"],0],
["Are emotions only physical reactions?",["No","Yes","Always","Never"],0]
]},

{
title:"Habit",category:"Psychology",emoji:"🔄",
simple:"A habit is a behavior that becomes repeated and often automatic through practice and context.",
example:"Checking your phone after waking can become a habit.",
realLife:"Brushing your teeth every morning is a common habit.",
key:"Repeated behavior can become easier and more automatic.",
quiz:[
["What is a habit?",["A repeated behavior","A planet","A mathematical formula","A type of cell"],0],
["Habits can become what?",["Automatic","Invisible forever","Electric","Mathematical"],0],
["Brushing teeth daily is an example of what?",["Habit","Gravity","Evolution","Probability"],0]
]},

{
title:"Motivation",category:"Psychology",emoji:"🔥",
simple:"Motivation is what energizes and directs behavior toward a goal.",
example:"Wanting to understand a subject can motivate you to study.",
realLife:"A goal can encourage someone to keep practicing a skill.",
key:"Motivation helps explain why people start and continue behaviors.",
quiz:[
["Motivation influences what?",["Behavior","Gravity","Weather","DNA"],0],
["A goal can affect what?",["Motivation","Photosynthesis","Magnetism","Temperature"],0],
["Motivation can help someone do what?",["Work toward a goal","Change planets","Stop time","Create atoms"],0]
]},

{
title:"Cognitive Bias",category:"Psychology",emoji:"🧩",
simple:"A cognitive bias is a systematic pattern that can influence judgment or decision-making.",
example:"People may rely too much on information that comes easily to mind.",
realLife:"Biases can affect how we judge risks, people and situations.",
key:"Biases can influence thinking without us deliberately choosing them.",
quiz:[
["What can a cognitive bias affect?",["Judgment","Gravity","Temperature","Photosynthesis"],0],
["Are biases always deliberate?",["No","Yes","Always","Only in children"],0],
["Biases can influence what?",["Decisions","Weather","DNA","Oceans"],0]
]},

{
title:"Confirmation Bias",category:"Psychology",emoji:"🔍",
simple:"Confirmation bias is the tendency to favor information that supports what we already believe.",
example:"Someone may search mainly for evidence that proves their existing opinion.",
realLife:"It can make disagreements harder because people notice different evidence.",
key:"Good critical thinking requires actively considering evidence that challenges our beliefs.",
quiz:[
["What does confirmation bias favor?",["Supporting information","Random colors","Weather","Gravity"],0],
["What can it make harder?",["Changing your mind","Walking","Sleeping","Eating"],0],
["What should critical thinking consider?",["Evidence that challenges you too","Only agreement","Only opinions","Nothing"],0]
]},

{
title:"Stress",category:"Psychology",emoji:"😵",
simple:"Stress is a response that can occur when demands feel challenging or threatening.",
example:"An important deadline can trigger stress.",
realLife:"School, work and major changes can sometimes create stress.",
key:"Stress can affect thoughts, emotions, body and behavior.",
quiz:[
["Stress can be triggered by what?",["Challenging demands","Only food","Only sunlight","Only music"],0],
["Stress can affect what?",["Body and thoughts","Only shoes","Only computers","Nothing"],0],
["Can stress influence behavior?",["Yes","No","Never","Only in animals"],0]
]},

{
title:"Learning",category:"Psychology",emoji:"📚",
simple:"Learning is a relatively lasting change in knowledge or behavior resulting from experience or practice.",
example:"Practicing a new language can improve your ability to use it.",
realLife:"Studying and practicing skills are common forms of learning.",
key:"Learning involves changes produced by experience.",
quiz:[
["Learning involves what?",["Change through experience","Gravity","Weather","DNA only"],0],
["What can improve a skill?",["Practice","Ignoring it","Deleting it","Sleeping forever"],0],
["Learning can change what?",["Knowledge or behavior","Gravity","The Sun","The Moon"],0]
]},

{
title:"Personality",category:"Psychology",emoji:"🪞",
simple:"Personality refers to relatively stable patterns in how a person thinks, feels and behaves.",
example:"People can differ in how outgoing, organized or emotionally reactive they tend to be.",
realLife:"Personality helps describe consistent tendencies across situations.",
key:"Personality is complex and influenced by both biological and environmental factors.",
quiz:[
["Personality describes patterns in what?",["Thoughts, feelings and behavior","Only height","Only weather","Only grades"],0],
["Can people differ in personality?",["Yes","No","Never","Only animals"],0],
["Is personality influenced by only one thing?",["No","Yes","Always","Only genetics"],0]
]},

/* ================= GEOGRAPHY ================= */

{
title:"Continent",category:"Geography",emoji:"🗺️",
simple:"A continent is one of Earth's large land regions.",
example:"Africa, Europe and Asia are continents.",
realLife:"Countries are located within or across continental regions.",
key:"Continents are large-scale geographic divisions of land.",
quiz:[
["What is a continent?",["A large land region","A tiny lake","A city","A planet"],0],
["Africa is what?",["A continent","A country","An ocean","A river"],0],
["Countries can be located on what?",["Continents","Only oceans","Only planets","Only clouds"],0]
]},

{
title:"Ocean",category:"Geography",emoji:"🌊",
simple:"An ocean is a vast body of salt water covering much of Earth's surface.",
example:"The Atlantic Ocean lies between the Americas and Europe/Africa.",
realLife:"Oceans influence climate, weather and ecosystems.",
key:"Oceans are major parts of Earth's water system.",
quiz:[
["What is an ocean?",["A huge body of salt water","A mountain","A city","A desert"],0],
["Oceans contain mostly what kind of water?",["Salt water","Fresh water","Juice","Oil"],0],
["Oceans influence what?",["Climate","Only computers","Only roads","Nothing"],0]
]},

{
title:"Latitude",category:"Geography",emoji:"📍",
simple:"Latitude measures how far north or south a place is from the Equator.",
example:"The Equator is at 0° latitude.",
realLife:"Latitude helps describe where places are on maps.",
key:"Latitude lines run east-west but measure north-south position.",
quiz:[
["Latitude measures north or what?",["South","East","West","Up"],0],
["What is the Equator's latitude?",["0°","90°","180°","45°"],0],
["Latitude helps locate what?",["Places","Only planets","Only oceans","Only roads"],0]
]},

{
title:"Longitude",category:"Geography",emoji:"🧭",
simple:"Longitude measures how far east or west a place is from the Prime Meridian.",
example:"The Prime Meridian is 0° longitude.",
realLife:"Latitude and longitude together can identify locations on Earth.",
key:"Longitude lines run from pole to pole.",
quiz:[
["Longitude measures east or what?",["West","North","South","Up"],0],
["Prime Meridian is?",["0° longitude","90° latitude","180° latitude","45° longitude"],0],
["Latitude plus longitude can identify what?",["A location","A sound","A plant","A database"],0]
]},

{
title:"Climate",category:"Geography",emoji:"☀️",
simple:"Climate describes long-term patterns of weather in a region.",
example:"A desert generally has a dry climate.",
realLife:"Climate influences what plants and animals can live in an area.",
key:"Climate is about long-term patterns, not today's weather.",
quiz:[
["Climate describes what?",["Long-term weather patterns","Today's exact temperature only","Only storms","Only clouds"],0],
["Is climate the same as weather?",["No","Yes","Always","Only in deserts"],0],
["Climate can influence what?",["Ecosystems","Computer code","DNA directly","Mathematics"],0]
]},

{
title:"Weather",category:"Geography",emoji:"🌦️",
simple:"Weather describes atmospheric conditions over a relatively short period.",
example:"Today's temperature, rain and wind are parts of weather.",
realLife:"You check the weather before deciding what clothes to wear.",
key:"Weather can change from day to day.",
quiz:[
["Weather describes what?",["Short-term atmospheric conditions","Millions of years only","Only oceans","Only mountains"],0],
["Rain is part of what?",["Weather","DNA","Geometry","Programming"],0],
["Can weather change quickly?",["Yes","No","Never","Only in summer"],0]
]},

{
title:"Mountain",category:"Geography",emoji:"🏔️",
simple:"A mountain is a large natural elevation of Earth's surface.",
example:"Mountains can form through tectonic activity.",
realLife:"Mountains influence climate, rivers and human settlement.",
key:"Mountains are major landforms.",
quiz:[
["What is a mountain?",["A large natural elevation","A body of water","A city","A cloud"],0],
["Mountains can form through what?",["Tectonic activity","Typing","Photosynthesis","Cooking"],0],
["Mountains can influence what?",["Rivers and climate","Only computers","Only music","Nothing"],0]
]},

{
title:"River",category:"Geography",emoji:"🏞️",
simple:"A river is a natural flowing body of water that usually moves toward a larger body of water.",
example:"A river may begin in highlands and flow toward a sea.",
realLife:"Rivers provide water and have supported human settlements for thousands of years.",
key:"Rivers are part of Earth's water systems.",
quiz:[
["What does a river do?",["Flows","Stays perfectly still","Flies","Burns"],0],
["Where might a river end?",["Sea or lake","Cloud only","Mountain top always","Space"],0],
["Rivers provide what?",["Water","Electricity only","DNA","Gravity"],0]
]},

{
title:"Desert",category:"Geography",emoji:"🏜️",
simple:"A desert is a region that receives very little precipitation.",
example:"The Sahara is a large desert in Africa.",
realLife:"Deserts can have extreme temperatures and specialized plants and animals.",
key:"Deserts are defined mainly by dryness, not simply by heat.",
quiz:[
["What defines a desert?",["Very low precipitation","Always extreme heat","Snow only","Mountains"],0],
["The Sahara is what?",["A desert","An ocean","A river","A continent"],0],
["Can deserts be cold?",["Yes","No","Never","Only underwater"],0]
]},

{
title:"Population",category:"Geography",emoji:"👥",
simple:"Population is the number of people living in a particular place.",
example:"A city's population is the number of people who live there.",
realLife:"Governments use population information when planning schools and transportation.",
key:"Population can change through births, deaths and migration.",
quiz:[
["What is population?",["Number of people in a place","Number of trees only","Amount of water","Number of buildings only"],0],
["What can change population?",["Migration","Only weather","Only gravity","Only colors"],0],
["Why study population?",["To plan services","To create planets","To change DNA","To make music"],0]
]},

/* ================= HISTORY ================= */

{
title:"Ancient Egypt",category:"History",emoji:"🏺",
simple:"Ancient Egypt was a civilization centered along the Nile River in northeastern Africa.",
example:"The civilization developed complex government, writing, religion and monumental architecture.",
realLife:"The pyramids remain famous examples of ancient Egyptian engineering and culture.",
key:"The Nile was central to Egyptian agriculture and civilization.",
quiz:[
["Where did Ancient Egypt develop?",["Along the Nile","Along the Amazon","In Australia","On Mars"],0],
["What helped Egyptian agriculture?",["The Nile","The desert alone","Snow","Volcanoes"],0],
["What are pyramids?",["Ancient monumental structures","Modern computers","Rivers","Languages"],0]
]},

{
title:"Ancient Greece",category:"History",emoji:"🏛️",
simple:"Ancient Greece was a collection of city-states and communities that strongly influenced philosophy, politics, science and art.",
example:"Athens developed an early form of democracy.",
realLife:"Many modern ideas in philosophy and politics have roots in Greek thought.",
key:"Ancient Greece was not one unified modern-style nation-state.",
quiz:[
["Ancient Greece consisted of many what?",["City-states","Countries like today","Continents","Oceans"],0],
["Which city developed an early democracy?",["Athens","Rome","Cairo","London"],0],
["Greek thought influenced what?",["Philosophy and politics","Only cooking","Only weather","Only computers"],0]
]},

{
title:"Roman Empire",category:"History",emoji:"🏛️",
simple:"The Roman Empire was a vast state centered on Rome that controlled territories around the Mediterranean and beyond.",
example:"Roman roads and legal institutions influenced later societies.",
realLife:"Elements of Roman law and engineering still influence the modern world.",
key:"Rome was influential in government, law, engineering and culture.",
quiz:[
["What was Rome?",["A major ancient empire","A modern continent","A river","A planet"],0],
["Romans were known for what?",["Roads and engineering","Only farming","Only music","Only astronomy"],0],
["Roman influence remains in?",["Law and engineering","Only sports","Only fashion","Nothing"],0]
]},

{
title:"Middle Ages",category:"History",emoji:"🏰",
simple:"The Middle Ages was a long period of European history roughly between ancient and early modern times.",
example:"Feudal relationships, kingdoms, trade and religious institutions shaped parts of medieval Europe.",
realLife:"Medieval castles and towns remain historical landmarks.",
key:"The Middle Ages covered many centuries and varied greatly by region.",
quiz:[
["The Middle Ages came after what period?",["Antiquity","The future","The Internet age","Prehistory only"],0],
["Castles are associated with what period?",["Middle Ages","Modern computing","Ancient space travel","Future"],0],
["Was the Middle Ages identical everywhere?",["No","Yes","Always","Only in Europe"],0]
]},

{
title:"Renaissance",category:"History",emoji:"🎨",
simple:"The Renaissance was a period of major cultural and intellectual change in Europe, especially from the 14th to 17th centuries.",
example:"Artists and scholars renewed interest in classical learning.",
realLife:"Leonardo da Vinci represents the Renaissance ideal of combining art and scientific curiosity.",
key:"The Renaissance influenced art, science, literature and learning.",
quiz:[
["What did Renaissance thinkers revisit?",["Classical learning","Computer science","Space travel","Modern cars"],0],
["Leonardo da Vinci is associated with?",["Renaissance","Industrial Revolution","Cold War","Ancient Egypt"],0],
["The Renaissance influenced what?",["Art and learning","Only weather","Only oceans","Only sports"],0]
]},

{
title:"Industrial Revolution",category:"History",emoji:"🏭",
simple:"The Industrial Revolution transformed production through machines, factories and new energy sources.",
example:"Textile production became increasingly mechanized.",
realLife:"Modern mass production and industrial cities developed partly from this transformation.",
key:"Industrialization changed work, cities, technology and economies.",
quiz:[
["What transformed production?",["Machines and factories","Only farming","Only books","Only oceans"],0],
["Industrialization changed what?",["Cities and work","Only weather","Only language","Nothing"],0],
["Factories became important during what?",["Industrial Revolution","Ancient Greece","Stone Age","Cold War only"],0]
]},

{
title:"World War I",category:"History",emoji:"🕊️",
simple:"World War I was a major global conflict fought mainly from 1914 to 1918.",
example:"The war involved major European powers and their allies.",
realLife:"The conflict reshaped borders and politics across many regions.",
key:"World War I had enormous political and human consequences.",
quiz:[
["When did World War I begin?",["1914","1939","1815","1945"],0],
["When did it end?",["1918","1914","1939","1945"],0],
["What did the war affect?",["Borders and politics","Only sports","Only weather","Only science"],0]
]},

{
title:"World War II",category:"History",emoji:"🌍",
simple:"World War II was a global conflict fought from 1939 to 1945.",
example:"The conflict involved the Axis powers and Allied powers.",
realLife:"The war profoundly changed international politics and led to major institutions such as the United Nations.",
key:"World War II reshaped the global political order.",
quiz:[
["When did World War II begin?",["1939","1914","1945","1920"],0],
["When did it end?",["1945","1939","1918","1950"],0],
["What did WWII greatly affect?",["Global politics","Only fashion","Only cooking","Only sports"],0]
]},

{
title:"Cold War",category:"History",emoji:"❄️",
simple:"The Cold War was a prolonged geopolitical rivalry mainly between the United States and Soviet Union after World War II.",
example:"The two sides competed through politics, military alliances, technology and influence.",
realLife:"The Space Race was one area of competition.",
key:"It was mainly a rivalry rather than a direct full-scale war between the two superpowers.",
quiz:[
["Who were the main rivals?",["United States and Soviet Union","Egypt and Greece","France and Rome","Brazil and Japan"],0],
["What was one area of competition?",["Space technology","Cooking","Fashion only","Football only"],0],
["Was it mainly direct war between the superpowers?",["No","Yes","Always","Only in Europe"],0]
]},

{
title:"Independence Movements",category:"History",emoji:"✊",
simple:"Independence movements seek political self-rule or freedom from external control.",
example:"Many colonies developed movements demanding independence from imperial powers.",
realLife:"The 20th century saw many countries gain independence.",
key:"Independence movements varied greatly in causes, methods and outcomes.",
quiz:[
["What do independence movements seek?",["Self-rule","More weather","More gravity","More oceans"],0],
["What can they oppose?",["External political control","Photosynthesis","Mathematics","Sound"],0],
["Many independence movements happened during which century?",["20th","5th","30th","1st"],0]
]},

/* ================= ECONOMICS ================= */

{
title:"Supply and Demand",category:"Economics",emoji:"📈",
simple:"Supply is how much sellers offer while demand is how much buyers want at different prices.",
example:"If many people want a product but there isn't much available, its price may rise.",
realLife:"Prices in shops are influenced by supply and demand.",
key:"Supply and demand help explain many market prices.",
quiz:[
["Supply refers to what?",["What sellers offer","What buyers want","Only taxes","Only money"],0],
["Demand refers to what?",["What buyers want","What sellers own","Only factories","Only governments"],0],
["What can happen when demand rises while supply stays low?",["Price may rise","Price must become zero","Nothing can happen","The product disappears"],0]
]},

{
title:"Inflation",category:"Economics",emoji:"💸",
simple:"Inflation is a sustained increase in the general price level of goods and services.",
example:"If prices generally rise over time, the same amount of money buys fewer things.",
realLife:"People notice inflation when everyday costs increase broadly.",
key:"Inflation concerns the overall price level, not just one product.",
quiz:[
["What does inflation mean?",["General price increases","All prices falling","More rainfall","More products only"],0],
["What can inflation reduce?",["Purchasing power","Gravity","Temperature","Population"],0],
["Does one expensive product automatically mean inflation?",["No","Yes","Always","Only in winter"],0]
]},

{
title:"GDP",category:"Economics",emoji:"🏦",
simple:"GDP measures the market value of final goods and services produced within an economy during a period.",
example:"A country's GDP includes the value of many goods and services produced there.",
realLife:"Economists use GDP as one indicator of economic activity.",
key:"GDP measures production, not every aspect of people's well-being.",
quiz:[
["What does GDP measure?",["Economic production","Only population","Only happiness","Only exports"],0],
["GDP includes final what?",["Goods and services","Only houses","Only cars","Only food"],0],
["Is GDP a complete measure of well-being?",["No","Yes","Always","Only for small countries"],0]
]},

{
title:"Taxes",category:"Economics",emoji:"🧾",
simple:"Taxes are compulsory payments collected by governments to help fund public spending and services.",
example:"Income and sales can be subject to taxes depending on the country.",
realLife:"Taxes can help fund schools, roads and public services.",
key:"Tax systems vary between countries.",
quiz:[
["What are taxes?",["Compulsory government payments","Donations to friends","Bank passwords","Loans only"],0],
["What can taxes help fund?",["Public services","Only video games","Only private hobbies","Nothing"],0],
["Do all countries have identical taxes?",["No","Yes","Always","Only neighboring countries"],0]
]},

{
title:"Interest",category:"Economics",emoji:"💰",
simple:"Interest is the cost of borrowing money or the return earned on money saved or invested.",
example:"A bank may pay interest on savings or charge interest on a loan.",
realLife:"Interest affects loans, savings accounts and investments.",
key:"Interest connects the value of money with time.",
quiz:[
["Interest can be what on a loan?",["A borrowing cost","A password","A tax always","A product"],0],
["Banks can pay interest on what?",["Savings","Only cars","Only food","Only houses"],0],
["Interest connects money with what?",["Time","Weather","Color","Sound"],0]
]},

/* ================= GENERAL KNOWLEDGE ================= */

{
title:"Democracy",category:"General Knowledge",emoji:"🗳️",
simple:"Democracy is a system of government in which political power is ultimately connected to the people.",
example:"Citizens may choose representatives through elections.",
realLife:"Many countries use democratic institutions in different forms.",
key:"Democracy involves political participation and mechanisms for public decision-making.",
quiz:[
["Democracy connects political power to whom?",["The people","Only computers","Only businesses","Only weather"],0],
["How can citizens participate?",["Elections","Photosynthesis","Gravity","DNA"],0],
["Is every democracy organized identically?",["No","Yes","Always","Only in Europe"],0]
]},

{
title:"Constitution",category:"General Knowledge",emoji:"📜",
simple:"A constitution establishes fundamental rules and principles for how a state is governed.",
example:"It can define government institutions and rights.",
realLife:"Constitutions can limit government power and establish political structures.",
key:"A constitution provides a framework for government.",
quiz:[
["What does a constitution establish?",["Fundamental rules of government","Weather","DNA","Food chains"],0],
["What can constitutions define?",["Government institutions","Only sports","Only music","Only recipes"],0],
["Can a constitution limit government power?",["Yes","No","Never","Only in ancient times"],0]
]},

{
title:"Philosophy",category:"General Knowledge",emoji:"🤔",
simple:"Philosophy investigates fundamental questions about reality, knowledge, morality, reasoning and existence.",
example:"A philosopher might ask how we know whether something is true.",
realLife:"Philosophical thinking can help people examine assumptions and arguments.",
key:"Philosophy is about carefully examining fundamental questions.",
quiz:[
["What does philosophy investigate?",["Fundamental questions","Only weather","Only sports","Only computers"],0],
["Philosophy can examine what?",["Knowledge and morality","Only prices","Only plants","Only maps"],0],
["What does philosophical thinking encourage?",["Questioning assumptions","Ignoring evidence","Never asking questions","Guessing"],0]
]},

{
title:"Ethics",category:"General Knowledge",emoji:"⚖️",
simple:"Ethics is the study of questions about right and wrong, duties, values and how people should act.",
example:"Is it right to tell the truth even when it is difficult?",
realLife:"Ethical questions appear in medicine, technology, business and everyday decisions.",
key:"Ethics examines reasons behind moral judgments.",
quiz:[
["What does ethics study?",["Moral questions","Only weather","Only mathematics","Only biology"],0],
["Ethics can ask what?",["What we should do","What color is best","How gravity works only","How plants grow only"],0],
["Where can ethical questions appear?",["Technology","Only history","Only sports","Nowhere"],0]
]},

{
title:"Language",category:"General Knowledge",emoji:"🗣️",
simple:"Language is a structured system people use to communicate meaning.",
example:"English, Arabic and French are human languages.",
realLife:"People use language to communicate ideas, feelings and information.",
key:"Languages have systems involving sounds, words and grammar.",
quiz:[
["What is language used for?",["Communication","Gravity","Photosynthesis","Electricity"],0],
["Languages communicate what?",["Meaning","Only numbers","Only weather","Only colors"],0],
["Languages have what?",["Rules and structures","Only pictures","Only sounds with no patterns","Nothing"],0]
]},

{
title:"Culture",category:"General Knowledge",emoji:"🌎",
simple:"Culture includes shared patterns of meanings, practices, values and traditions within groups.",
example:"Food traditions and celebrations can be parts of culture.",
realLife:"Different communities may have different customs and traditions.",
key:"Culture is learned and shared rather than simply inherited biologically.",
quiz:[
["Culture can include what?",["Traditions and values","Only DNA","Only weather","Only gravity"],0],
["Is culture learned and shared?",["Yes","No","Never","Only in schools"],0],
["Food traditions can be part of what?",["Culture","Geometry","Magnetism","Programming"],0]
]},

{
title:"Logic",category:"General Knowledge",emoji:"🧠",
simple:"Logic studies principles used to distinguish good reasoning from bad reasoning.",
example:"If all humans are mortal and Sara is human, then Sara is mortal.",
realLife:"Logic helps people evaluate arguments and identify contradictions.",
key:"Logic focuses on how conclusions follow from premises.",
quiz:[
["What does logic study?",["Reasoning","Weather","DNA","Cooking"],0],
["Logic can help evaluate what?",["Arguments","Only colors","Only plants","Only music"],0],
["What does a conclusion depend on in an argument?",["Premises and reasoning","Weather","Clothes","Gravity"],0]
]},

{
title:"Critical Thinking",category:"General Knowledge",emoji:"🔎",
simple:"Critical thinking means carefully evaluating information, evidence and reasoning before accepting a conclusion.",
example:"Instead of believing a claim immediately, you ask what evidence supports it.",
realLife:"Critical thinking is useful when reading news or comparing sources.",
key:"Critical thinking is not simply being negative; it is evaluating claims carefully.",
quiz:[
["What does critical thinking evaluate?",["Evidence and reasoning","Only colors","Only weather","Only prices"],0],
["What should you ask about a claim?",["What evidence supports it?","Who looks coolest?","What color is it?","Nothing"],0],
["Critical thinking means automatically rejecting everything?",["No","Yes","Always","Only online"],0]
]},

{
title:"Scientific Method",category:"General Knowledge",emoji:"🧪",
simple:"The scientific method is a general approach for investigating questions using observations, hypotheses, testing and evidence.",
example:"A scientist can form a hypothesis, design a test and compare the results with predictions.",
realLife:"Experiments help researchers investigate how things work.",
key:"Science relies on evidence and testing rather than simply accepting claims.",
quiz:[
["What does science rely on?",["Evidence","Rumors only","Guessing only","Popularity"],0],
["What can scientists test?",["Hypotheses","Colors only","Passwords","Opinions only"],0],
["What can experiments provide?",["Evidence","Gravity","Money","Languages"],0]
]},

{
title:"Information",category:"General Knowledge",emoji:"💡",
simple:"Information is data or knowledge that has meaning or usefulness in a particular context.",
example:"The number 25 is data, while '25 students are in the class' gives it context.",
realLife:"People use information to make decisions.",
key:"Context helps turn raw data into useful information.",
quiz:[
["What gives data meaning?",["Context","Color","Sound","Gravity"],0],
["Information can help with what?",["Decision-making","Changing planets","Creating DNA","Stopping time"],0],
["Is raw data always immediately meaningful?",["No","Yes","Always","Never"],0]
]}

];


/* =====================================================
   APP STATE
===================================================== */

let currentCategory = "All";

let currentConceptIndex = 0;

let learned = JSON.parse(
    localStorage.getItem("learnedConcepts") || "[]"
);


/* =====================================================
   HOME
===================================================== */

function goHome() {

    document.getElementById("conceptPage")
        .classList.add("hidden");

    document.getElementById("homePage")
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   CATEGORIES
===================================================== */

function displayCategories() {

    const container =
        document.getElementById("categories");

    const categories = [
        "All",
        ...new Set(
            concepts.map(concept => concept.category)
        )
    ];

    container.innerHTML = categories
        .map(category => `

            <button
                class="category-button ${
                    currentCategory === category
                        ? "active"
                        : ""
                }"
                onclick="selectCategory('${category}')"
            >
                ${category}
            </button>

        `)
        .join("");

}


function selectCategory(category) {

    currentCategory = category;

    displayCategories();

    searchConcepts();

}


/* =====================================================
   DISPLAY CARDS
===================================================== */

function displayConcepts(list = concepts) {

    const container =
        document.getElementById("conceptCards");

    document.getElementById("conceptCount")
        .textContent = `${list.length} concepts`;

    if (list.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <div>🔎</div>

                <h3>
                    Nothing found
                </h3>

                <p>
                    Try another word or category.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML = list
        .map(concept => {

            const realIndex =
                concepts.indexOf(concept);

            const isLearned =
                learned.includes(realIndex);

            return `

                <button
                    class="concept-card ${
                        isLearned ? "learned" : ""
                    }"
                    onclick="openConcept(${realIndex})"
                >

                    <div class="card-emoji">
                        ${concept.emoji}
                    </div>

                    <div class="card-info">

                        <small>
                            ${concept.category}
                        </small>

                        <h3>
                            ${concept.title}
                        </h3>

                        <span>
                            Explain this →
                        </span>

                    </div>

                </button>

            `;

        })
        .join("");

}


/* =====================================================
   SEARCH
===================================================== */

function searchConcepts() {

    const search =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const filtered = concepts.filter(concept => {

        const matchesSearch =
            concept.title
                .toLowerCase()
                .includes(search) ||

            concept.category
                .toLowerCase()
                .includes(search) ||

            concept.simple
                .toLowerCase()
                .includes(search);


        const matchesCategory =
            currentCategory === "All" ||
            concept.category === currentCategory;


        return matchesSearch && matchesCategory;

    });


    displayConcepts(filtered);

}


/* =====================================================
   OPEN CONCEPT
===================================================== */

function openConcept(index) {

    currentConceptIndex = index;

    const concept = concepts[index];


    document.getElementById("homePage")
        .classList.add("hidden");


    document.getElementById("conceptPage")
        .classList.remove("hidden");


    document.getElementById("conceptHeader")
        .innerHTML = `

            <div class="badge">
                ${concept.emoji} ${concept.category}
            </div>

            <h1>
                ${concept.title}
            </h1>

            <p>
                Let's make this ridiculously simple.
            </p>

        `;


    document.getElementById("conceptContent")
        .innerHTML = `

            <article class="info main">

                <small>
                    🧒 EXPLAIN IT SIMPLY
                </small>

                <h2>
                    ${concept.simple}
                </h2>

            </article>


            <article class="info example">

                <small>
                    🎯 TINY EXAMPLE
                </small>

                <p>
                    ${concept.example}
                </p>

            </article>


            <article class="info">

                <small>
                    🌍 REAL LIFE
                </small>

                <p>
                    ${concept.realLife}
                </p>

            </article>


            <article class="info key-idea">

                <small>
                    💡 KEY IDEA
                </small>

                <p>
                    ${concept.key}
                </p>

            </article>


            ${
                concept.code
                ? `

                    <article class="info code">

                        <small>
                            💻 EXAMPLE
                        </small>

                        <pre>${concept.code}</pre>

                    </article>

                `
                : ""
            }

        `;


    createQuiz(concept);


    if (!learned.includes(index)) {

        learned.push(index);

        localStorage.setItem(
            "learnedConcepts",
            JSON.stringify(learned)
        );

    }


    updateProgress();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   QUIZ
===================================================== */

function createQuiz(concept) {

    const container =
        document.getElementById("quizContainer");


    document.getElementById("quizScore")
        .textContent =
        `3 questions • 1 point each`;


    container.innerHTML =
        concept.quiz
            .map((question, qIndex) => {

                const questionText =
                    question[0];

                const answers =
                    question[1];

                const correct =
                    question[2];


                return `

                    <div
                        class="quiz-card"
                        id="quiz-${qIndex}"
                    >

                        <div class="quiz-number">
                            QUESTION ${qIndex + 1} / 3
                        </div>

                        <h3>
                            ${questionText}
                        </h3>

                        <div class="answers">

                            ${answers
                                .map((answer, answerIndex) => `

                                    <button
                                        class="answer"
                                        onclick="
                                            answerQuiz(
                                                ${qIndex},
                                                ${answerIndex},
                                                ${correct}
                                            )
                                        "
                                    >

                                        <span class="answer-letter">
                                            ${String.fromCharCode(
                                                65 + answerIndex
                                            )}
                                        </span>

                                        ${answer}

                                    </button>

                                `)
                                .join("")}

                        </div>

                        <div
                            id="result-${qIndex}"
                        ></div>

                    </div>

                `;

            })
            .join("");

}


/* =====================================================
   ANSWER QUIZ
===================================================== */

function answerQuiz(
    questionIndex,
    selected,
    correct
) {

    const quiz =
        document.getElementById(
            `quiz-${questionIndex}`
        );


    const buttons =
        quiz.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selected === correct) {

        buttons[selected]
            .classList.add("correct");


        document.getElementById(
            `result-${questionIndex}`
        ).innerHTML = `

            <div class="quiz-result result-good">
                🎉 Correct!
            </div>

        `;

    } else {

        buttons[selected]
            .classList.add("wrong");


        buttons[correct]
            .classList.add("correct");


        document.getElementById(
            `result-${questionIndex}`
        ).innerHTML = `

            <div class="quiz-result result-bad">
                ❌ Not quite! The correct answer is
                <strong>
                    ${buttons[correct].textContent.trim()}
                </strong>
            </div>

        `;

    }

}


/* =====================================================
   PREVIOUS / NEXT
===================================================== */

function previousConcept() {

    if (currentConceptIndex > 0) {

        openConcept(
            currentConceptIndex - 1
        );

    }

}


function nextConcept() {

    if (
        currentConceptIndex <
        concepts.length - 1
    ) {

        openConcept(
            currentConceptIndex + 1
        );

    }

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const dark =
        document.body.classList.contains("dark");


    document.getElementById(
        "themeButton"
    ).textContent =
        dark ? "☀️" : "🌙";


    localStorage.setItem(
        "darkMode",
        dark
    );

}


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    document.getElementById(
        "progressText"
    ).textContent =
        `${learned.length} learned`;

}


/* =====================================================
   START APP
===================================================== */

function startApp() {

    const savedDarkMode =
        localStorage.getItem("darkMode");


    if (savedDarkMode === "true") {

        document.body.classList.add("dark");

        document.getElementById(
            "themeButton"
        ).textContent = "☀️";

    }


    displayCategories();

    displayConcepts();

    updateProgress();

}


startApp();