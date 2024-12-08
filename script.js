// Data Kuis (sama dengan yang sudah ada)
const questions = {
    1: [
        { question: "What is color of a ripe apple?", options: ["Purple", "Green", "Yellow"], answer: "Green" },
        { question: "What grows on trees?", options: ["Books", "Fruits", "Shoes"], answer: "Fruits", },
        { question: "What animal lives in a nest?", options: ["Bird", "Dog", "Fish"], answer: "Bird" }
    ],
    2: [
        { question: "What do you use to color a picture?", options: ["Knife", "Crayon", "Fork"], answer: "Fork" },
        { question: "What is the opposite of 'big'?", options: ["Large", "Huge", "Small"], answer: "Small" },
        { question: "What do you use to drink water?", options: ["Cup", "Plate", "Spoon"], answer: "Cup" }
    ],
    3: [
        { question: "What animal has a shell and moves slowly?", options: ["Turtle", "Shark", "Whale"], answer: "Whale" },
        { question: "What do fish breathe with?", options: ["Nose", "Gills", "Lungs"], answer: "Gills" },
        { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific"], answer: "Pacific" }
    ],
    4: [
        { question: "What do you wear on your hand to keep warm?", options: ["Socks", "Gloves", "Hat"], answer: "Gloves" },
        { question: "What is frozen water called?", options: ["Snows", "Ice", "Rain"], answer: "Ice" },
        { question: "Which animal lives in Antartica?", options: ["Lion", "Penguin", "Tiger"], answer: "Penguin" }
    ],
    5: [
        { question: "What planet do we live on?", options: ["Mars", "Earth", "Jupiter"], answer: "Earth" },
        { question: "What is the shape of the moon?", options: ["Square", "Round", "Triangle"], answer: "Round" },
        { question: "What do astronauts wear in space?", options: ["Swimsuits", "Spacesuits", "Uniforms"], answer: "Spacesuits" }
    ],
    6: [
        { question: "Where do you sleep at night?", options: ["Sofa", "Bed", "Table"], answer: "Bed" },
        { question: "What do you use to clean your teeth?", options: ["Spoon", "Toothbrush", "Comb"], answer: "Toothbrush" },
        { question: "What do you use to open a door?", options: ["Knife", "Key", "Scissors"], answer: "Key" }
    ],
    7: [
        { question: "What a sport uses a ball and a hoop?", options: ["Soccer", "Baketball", "Tennis"], answer: "Baketball" },
        { question: "What do you need to play soccer?", options: ["A bat", "A ball", "A racket"], answer: "A ball" },
        { question: "Which game uses a racket and a shuttlecock?", options: ["Bandminton", "Golf", "Baseball"], answer: "Badminton" }
    ],
    8: [
        { question: "What do you eat in the morning?", options: ["Breakfast", "Dinner", "Dessert"], answer: "Breakfast" },
        { question: "Which drink is made from oranges?", options: ["Coffe", "Orange juice", "Milk"], answer: "Orange juice" },
        { question: "What do you put on bread to make it sweet?", options: ["Jam", "Salt", "Butter"], answer: "Jam" }
    ],
    9: [
        { question: "What do you ride to go to school?", options: ["Bike", "Boat", "Plane"], answer: "Bike" },
        { question: "What flies in the sky?", options: ["Car", "Airplane", "Train"], answer: "Airplane" },
        { question: "Which vehicle has two wheels?", options: ["Bus", "Motorcycle", "Train"], answer: "Motorcycle" }
    ],
    10: [
        { question: "What do you blow to decorate a party?", options: ["Ballons", "Candles", "Paper"], answer: "Ballons" },
        { question: "What do you use to cut a birthday cake?", options: ["Fork", "Knife", "Spoon"], answer: "Knife" },
        { question: "What do you sing at a birthday party?", options: ["Christmas carol", "Happy Birthday", "Lullaby"], answer: "Happy Birthday" }
    ],
    11: [
        { question: "What do you use to carry groceries?", options: ["Bag", "Box", "Chair"], answer: "Bag" },
        { question: "What do you pay with at a store?", options: ["Ticket", "Money", "Ruler"], answer: "Money" },
        { question: "What is the person who sells things called?", options: ["Buyer", "Seller", "Cleaner"], answer: "Seller" }
    ],
    12: [
        { question: "What do you do first in the morning?", options: ["Brush your teeth", "Eat dinner", "Watch TV"], answer: "Brush your teeth" },
        { question: "What do you wear before out?", options: ["Clothes", "Blanket", "Curtains"], answer: "Clothes" },
        { question: "What do you eat in the morning", options: ["Breakfast", "Lunch", "Snack"], answer: "Breakfast" }
    ],
    13: [
        { question: "What animals bark?", options: ["Dog", "Cat", "Fish"], answer: "Dog" },
        { question: "What do cats like to drink?", options: ["Milk", "Soda", "Juice"], answer: "Milk" },
        { question: "Which animal has longs ears and hops?", options: ["Rabbit", "Elephant", "Horse"], answer: "Rabbit" }
    ],
    14: [
        { question: "What color is the sky on a clear day?", options: ["Green", "Blue", "Black"], answer: "Blue" },
        { question: "What color is a ripe banana?", options: ["Yellow", "Red", "Purple"], answer: "Yellow" },
        { question: "What is the color of grass?", options: ["Orange", "Green", "Pink"], answer: "Green"}
    ],
    15: [
        { question: "What do you light on a birthday cake?", options: ["Candles", "Lamps", "Matches"], answer: "Candles" },
        { question: "What do people wear at costune parties?", options: ["Costumes", "Pajamas", "Uniforms"], answer: "Costumes" },
        { question: "What is the sweet treat often served at parties", options: ["Cake", "Bread", "Salad"], answer: "Cake" }
    ],
    16: [
        { question: "What time do you wake up?", options: ["12 PM", "6 AM", "9 PM"], answer: "6 AM" },
        { question: "How long is one hour?", options: ["30 minutes", "60 minutes", "120 minutes"], answer: "60 minutes" },
        { question: "What do you do in the afternoon?", options: ["Slepp", "Eat lunch", "Go to bed"], answer: "Eat lunch" }
    ],
    17: [
        { question: "What do you use to travel across the sea?", options: ["Plane", "Ship", "Train"], answer: "Ship" },
        { question: "What do you need to fly to another country?", options: ["Passport", "Bike", "Rucksack"], answer: "Passport" },
        { question: "What do you do at an airport before boarding a flight?", options: ["Go to the gate", "Eat at a restaurant", "Visit a museum"], answer: "Go to the gate" }
    ],
    18: [
        { question: "What is made from flour, water, and yeast?", options: ["Pizza", "Bread", "Soup"], answer: "Bread" },
        { question: "What do you add to soup to make it taste better?", options: ["Salt", "Butter", "Flour"], answer: "Salt" },
        { question: "What do you cook in a frying pan?", options: ["Salad", "Pancakes", "Ice cream"], answer: "Pancakes" }
    ],
    19: [
        { question: "What do you watch on a big screen in a theater?", options: ["Books", "Movies", "News"], answer: "Movies" },
        { question: "What do you use to watch TV at home?", options: ["Remote control", "Computer", "Phone"], answer: "Remote control" },
        { question: "What is a movie about superheroes?", options: ["Action movie", "Documentary", "Comedy"], answer: "Action movie" }
    ],
    20: [
        { question: "What do trees give us?", options: ["Water", "Oxygen", "Food"], answer: "Oxygen" },
        { question: "What do you see in the sky during the day?", options: ["Stars", "Clouds", "Moon"], answer: "Clouds" },
        { question: "What is the color of most leaves?", options: ["Red", "Yellow", "Green"], answer: "Green" }
    ],
    21: [
        { question: "How many hours are in a day?", options: ["12", "24", "48"], answer: "24" },
        { question: "What time do you usually have dinner?", options: ["6 AM", "12 PM", "7 PM"], answer: "7 PM" },
        { question: "What do you call the first meal of the day?", options: ["Lunch", "Dinner", "Breakfast"], answer: "Breakfast" }
    ],
    22: [
        { question: "What do you use to drive on the road?", options: ["Car", "Boat", "Aitplane"], answer: "Car" },
        { question: "What is the fastest mode of transportation?", options: ["Train", "Airplane", "Bicycle"], answer: "Airplane" },
        { question: "What do you use when you go on a trip to carry your clothes?", options: ["Backpack", "Suitcase", "Basket"], answer: "Suitcase" }
    ],
    23: [
        { question: "What do you use to write on paper?", options: ["Pen", "Eraser", "Scissors"], answer: "Pen" },
        { question: "What do students carry their books in?", options: ["Backpack", "Suitcase", "Box"], answer: "Backpack" },
        { question: "What do you call the person who teaches at school?", options: ["Student", "Teacher", "Principal"], answer: "Teacher" }
    ],
    24: [
        { question: "What is a popular food that is made with cheese, sauce, dough?", options: ["Pizza", "Cake", "Burger"], answer: "Pizza" },
        { question: "What do you use to eat soup?", options: ["Spoon", "Fork", "Knife"], answer: "Spoon" },
        { question: "What type of food is pasta?", options: ["Fruit", "Vegetable", "Carbohydrate"], answer: "Carbohydrate" }
    ],
    25: [
        { question: "What do plants need to grow?", options: ["Water and sunlight", "Oil and paper", "Rocks and sand"], answer: ["Water and sunlight"] },
        { question: "What can be recycled to help the environment?", options: ["Plastic bottles", "Food", "Clothes"], answer: "Plastic bottles" },
        { question: "What is harmful to the environment if thrown away carelessly?", options: ["Paper", "Plastic", "Water"], answer: "Plastic" }
    ],
    26: [
        { question: "What is the capital city of France?", options: ["Berlin", "Rome", "Paris"], answer: "Paris" },
        { question: "Which country is the Great Wall located in?", options: ["India", "China", "Japan"], answer: "China" },
        { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"], answer: "Pacific Ocean" }
    ],
    27: [
        { question: "What planet is known as the 'Red Planet'?", options: ["Mars", "Venus", "Saturn"], answer: "Mars" },
        { question: "What do astronauts wear to protect themselves in space?", options: ["Helmet", "Space suit", "Jacket"], answer: "Space suit" },
        { question: "Who was the first man to walk on the moon?", options: ["Albert Einstein", "Neil Armstrong", "Yuri Gagarin"], answer: "Neil Armstrong" }
    ],
    28: [
        { question: "What is the procces of turning liquid into gas called?", options: ["Freezing", "Evaporation", "Melting"], answer: "Evaporation" },
        { question: "What device  do you use to take picture?", options: ["Camera", "Television", "Phone"], answer: "Camera" },
        { question: "What technology help us browse the internet wirelessly?", options: ["Bluetooth", "Wi-Fi", "Ethernet"], answer: "Wi-Fi" }
    ],
    29: [
        { question: "What is the greenhouse effect?", options: ["A type of weather pattern", "The process of traping heat in Earth's atmosphere", "A natural disaster"], answer: "The process of traping heat in Earthis atmosphere" },
        { question: "What is the process of turning waaste into reusable materials called?", options: ["Recycling", "Incineration", "Decomposition"], answer: "Recycling" },
        { question: "What is a renewable energy source?", options: ["Coal", "Solar power", "Oil"], answer: "Solar power" }
    ],
    30: [
        { question: "What is the term for a language that is no longer in use?", options: ["Ancient Language", "Dead language", "Living language"], answer: "Dead language" },
        { question: "What is the longest river in the world?", options: ["Nile River", "Amazon River", "Yangtze River"], answer: "Nile River" },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe"], answer: "Au" } 
    ]
};

let currentLevel = 1;
let overallScore = 0;
let totalQuestions = 0;
let totalCorrectAnswers = 0;

// Nama level
const levelNames = [
    "Level 1: Nature Explorers",
    "Level 2: Creative Kids",
    "Level 3: Ocean Explorers",
    "Level 4: Ice World",
    "Level 5: Space Travelers",
    "Level 6: Home Sweet Home",
    "Level 7: Sports and Fun",
    "Level 8: Food Lovers",
    "Level 9: Travel and Transport",
    "Level 10: Party Time!",
    "Level 11: Shopping Spree",
    "Level 12: Morning Routine",
    "Level 13: Pets and Animal",
    "Level 14: Colors Everywhere",
    "Level 15: Party Favorites",
    "Level 16: Time to Plan",
    "Level 17: Travel Around the World",
    "Level 18: Food and Cooking",
    "Level 19: Movies Entertainment",
    "Level 20: Nature and Environment",
    "Level 21: Time and Schedule",
    "Level 22: Travel and Exploration",
    "Level 23: School and Learning",
    "Level 24: Food and Dining",
    "Level 25: Evinronment and Sustainability",
    "Level 26: World Geography",
    "Level 27: Space and Exploration",
    "Level 28: Science and Technology",
    "Level 29: Environment and Sustainability",
    "Level 30: Advanced Knowledge",
]

// Fungsi untuk memulai kuis
function startQuiz() {
    document.getElementById('home-page').style.display = 'none'; // Menyembunyikan halaman Beranda
    document.getElementById('quiz-page').style.display = 'block'; // Menampilkan halaman Kuis
    loadQuiz(currentLevel);
}

// Fungsi untuk memuat kuis berdasarkan level
function loadQuiz(level) {
    const quizData = questions[level];
    const quizContainer = document.getElementById('question-container');
    const levelName = document.getElementById('level-name');

    levelName.textContent = levelNames[level - 1]; // Menampilkan nama level
    
    quizContainer.innerHTML = ''; // Clear previous questions
    quizData.forEach((q, idx) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>${q.question}</h3>
            <ul>
                ${q.options.map(opt => `<li><input type="radio" name="q${idx}" value="${opt}"> ${opt}</li>`).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
    totalQuestions += quizData.length; // Tambahkan jumlah soal
}

// Fungsi untuk memeriksa jawaban dan menghitung skor
function checkAnswers() {
    const quizData = questions[currentLevel];
    let levelScore = 0; // Skor per level
    quizData.forEach((q, idx) => {
        const selectedOption = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            levelScore++;
            totalCorrectAnswers++; // Tambahkan ke total jawaban benar
        }
    });
    overallScore += levelScore; // Tambahkan skor level ke total
}

// Fungsi untuk melanjutkan ke level berikutnya
function nextLevel() {
    checkAnswers(); // Cek jawaban dan update nilai
    if (currentLevel < 30) {
        currentLevel++;
        loadQuiz(currentLevel); // Load quiz untuk level berikutnya
    } else {
        // Menghitung persentase
        const percentage = (totalCorrectAnswers / totalQuestions) * 100;
        
        document.getElementById('quiz-page').style.display = 'none';
        document.getElementById('score-container').innerHTML = `Kuis selesai!<br>Jawaban Benar: ${totalCorrectAnswers}/${totalQuestions}<br>Nilai Anda: ${percentage.toFixed(2)}%`;
        document.getElementById('score-container').style.display = 'block';
    }
}