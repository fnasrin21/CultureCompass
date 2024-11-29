// Question Bank For Quizzes
const questions = {
    easy: [
      {
        text: "What is the capital of France?",
        responses: ["Paris", "Rome", "Berlin", "Madrid"],
        correct: 0,
        hint: "Known as the City of Light."
      },
      {
        text: "Which country is famous for the Great Wall?",
        responses: ["China", "Japan", "India", "Korea"],
        correct: 0,
        hint: "It's also famous for pandas."
      },
      {
        text: "What is the primary language spoken in Spain?",
        responses: ["Spanish", "French", "German", "Italian"],
        correct: 0,
        hint: "The language shares its name with the country."
      },
      {
        text: "Which country is famous for pizza and pasta?",
        responses: ["Italy", "France", "Mexico", "Greece"],
        correct: 0,
        hint: "Home to the Leaning Tower of Pisa."
      },
      {
        text: "What is the national sport of Japan?",
        responses: ["Sumo Wrestling", "Soccer", "Karate", "Baseball"],
        correct: 0,
        hint: "It involves very large athletes in a circular ring."
      },
      {
        text: "Which country celebrates the festival of Diwali?",
        responses: ["India", "Thailand", "China", "Nepal"],
        correct: 0,
        hint: "Known as the Festival of Lights."
      },
      {
        text: "Which country is home to the Eiffel Tower?",
        responses: ["France", "Germany", "Italy", "Switzerland"],
        correct: 0,
        hint: "A romantic city."
      },
      {
        text: "What currency is used in the United Kingdom?",
        responses: ["Pound Sterling", "Euro", "Dollar", "Franc"],
        correct: 0,
        hint: "It’s not the Euro!"
      },
      {
        text: "Which African country is famous for the pyramids?",
        responses: ["Egypt", "South Africa", "Morocco", "Kenya"],
        correct: 0,
        hint: "The Great Sphinx also resides here."
      },
      {
        text: "Which country is known for its maple syrup?",
        responses: ["Canada", "USA", "Sweden", "Norway"],
        correct: 0,
        hint: "Its flag features a red maple leaf."
      }
    ],
    medium: [
      {
        text: "Which country is known as the Land of a Thousand Hills?",
        responses: ["Rwanda", "Uganda", "Kenya", "Ethiopia"],
        correct: 0,
        hint: "Located in East Africa, it’s famous for its gorillas."
      },
      {
        text: "What is the largest island in the world?",
        responses: ["Greenland", "Australia", "New Guinea", "Madagascar"],
        correct: 0,
        hint: "It’s part of the Kingdom of Denmark."
      },
      {
        text: "Which Asian country is known for its Blue City, Jodhpur?",
        responses: ["India", "Nepal", "Bhutan", "Sri Lanka"],
        correct: 0,
        hint: "It’s part of the state of Rajasthan."
      },
      {
        text: "What is the official religion of Thailand?",
        responses: ["Buddhism", "Hinduism", "Islam", "Christianity"],
        correct: 0,
        hint: "Monks play a significant role in this religion."
      },
      {
        text: "What is the tallest mountain in Japan?",
        responses: ["Mount Fuji", "Mount Kita", "Mount Tate", "Mount Ontake"],
        correct: 0,
        hint: "It’s an active stratovolcano and a national symbol."
      },
      {
        text: "Which country is home to the Galápagos Islands?",
        responses: ["Ecuador", "Peru", "Chile", "Colombia"],
        correct: 0,
        hint: "Located off the west coast of South America."
      },
      {
        text: "Which Pacific island nation is the most linguistically diverse country in the world?",
        responses: ["Papua New Guinea", "Fiji", "New Zealand", "Solomon Islands"],
        correct: 0,
        hint: "More than 800 languages are spoken here."
      },
      {
        text: "Which European country is home to Flamenco music and dance?",
        responses: ["Spain", "Portugal", "Italy", "Greece"],
        correct: 0,
        hint: "It’s also known for tapas and paella."
      },
      {
        text: "Which country’s cuisine is known for dishes like pho and bánh mì?",
        responses: ["Vietnam", "Thailand", "Japan", "Malaysia"],
        correct: 0,
        hint: "Pho is a noodle soup, and bánh mì is a sandwich."
      },
      {
        text: "Which European country is famous for the Acropolis of Athens?",
        responses: ["Greece", "Italy", "Turkey", "Cyprus"],
        correct: 0,
        hint: "The birthplace of democracy."
      }
    ],
    hard: [
      {
        text: "Which African country has three official capital cities?",
        responses: ["South Africa", "Nigeria", "Kenya", "Egypt"],
        correct: 0,
        hint: "The capitals include Pretoria, Cape Town, and Bloemfontein."
      },
      {
        text: "What is the name of the famous UNESCO World Heritage Site in Bangladesh?",
        responses: ["The Sundarbans", "Angkor Wat", "Borobudur", "Sigiriya"],
        correct: 0,
        hint: "This site is home to the largest mangrove forest and the Royal Bengal Tiger."
      },
      {
        text: "Which country is home to the world’s largest carnival in Rio de Janeiro?",
        responses: ["Brazil", "Argentina", "Colombia", "Mexico"],
        correct: 0,
        hint: "It’s known for samba dancing and vibrant costumes."
      },
      {
        text: "Which European country is home to the world's oldest university still in operation?",
        responses: ["Italy", "France", "England", "Germany"],
        correct: 0,
        hint: "The University of Bologna was established in 1088."
      },
      {
        text: "Which country is the world’s largest producer of coffee?",
        responses: ["Brazil", "Colombia", "Ethiopia", "Vietnam"],
        correct: 0,
        hint: "It is located in South America and also famous for its carnival."
      },
      {
        text: "Which country is known as the Land of the Rising Sun?",
        responses: ["Japan", "China", "Korea", "Vietnam"],
        correct: 0,
        hint: "It's famous for sushi and cherry blossoms."
      },
      {
        text: "What is the traditional attire worn by men in Scotland?",
        responses: ["Kilt", "Sarong", "Tunic", "Poncho"],
        correct: 0,
        hint: "It is often worn during Highland games and formal occasions."
      },
      {
        text: "Which country is famous for Oktoberfest?",
        responses: ["Germany", "Austria", "Switzerland", "Poland"],
        correct: 0,
        hint: "It’s also home to the Black Forest."
      },
      {
        text: "Which country has the highest number of UNESCO World Heritage Sites?",
        responses: ["Italy", "China", "Spain", "France"],
        correct: 0,
        hint: "It’s known for cities like Rome, Florence, and Venice."
      },
      {
        text: "Which country is home to Machu Picchu?",
        responses: ["Peru", "Chile", "Ecuador", "Argentina"],
        correct: 0,
        hint: "It’s an ancient Inca city located in the Andes Mountains."
      }
    ]
  };
  
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  let timer = 60;
  let intervalId;
  
  // DOM Elements
  const titleScreen = document.getElementById("title-screen");
  const quizContainer = document.getElementById("quiz-container");
  const timeoutScreen = document.getElementById("timeout-screen");
  const endScreen = document.getElementById("end-screen");
  const questionText = document.getElementById("question-text");
  const questionChoices = document.getElementById("question-choices");
  const timerBox = document.getElementById("timer");
  const scoreBox = document.getElementById("score");
  const progressBar = document.getElementById("progress-bar");
  const progressLabel = document.getElementById("progress-label");
  
  //shuffle array elements/quiz questions
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Start Quiz
  function startQuiz(difficulty) {
    currentQuestions = questions[difficulty];
    currentQuestionIndex = 0;
    score = 0;
    timer = 60;
  
    // Percentage for Progress Bar
    progressBar.value = 0;
    progressLabel.textContent = "0% Completed";
    scoreBox.textContent = score;
  
    titleScreen.classList.add("hidden");
    quizContainer.classList.add("active");
    showQuestion();
    startTimer();
  }
  
  // Show Question
  function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
  
    // Shuffle the multiple choices
    const shuffledResponses = question.responses.map((response, index) => ({
      text: response,
      isCorrect: index === question.correct,
    }));
    shuffleArray(shuffledResponses);
  
    // Display question text and choices
    questionText.textContent = question.text;
    questionChoices.innerHTML = "";
    shuffledResponses.forEach((response) => {
      const li = document.createElement("li");
      li.textContent = response.text;
      li.onclick = () => checkAnswer(response.isCorrect);
      questionChoices.appendChild(li);
    });
  
    // Hide hint initially
    document.getElementById("hint-text").classList.add("hidden");
  
    // Update progress bar and label
    const percentage = Math.round(
      ((currentQuestionIndex + 1) / currentQuestions.length) * 100
    );
    progressBar.value = currentQuestionIndex + 1;
    progressLabel.textContent = `${percentage}% Completed`;
  }
  
  // Check Answer
  function checkAnswer(isCorrect) {
    if (isCorrect) {
      score++;
      scoreBox.textContent = score;
    }
    nextQuestion();
  }
  
  // Skip Question
  function skipQuestion() {
    nextQuestion();
  }
  
  // Show Hint
  function showHint() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById("hint-text").textContent = question.hint;
    document.getElementById("hint-text").classList.remove("hidden");
  }
  
  // Next Question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= currentQuestions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  // Start Timer
  function startTimer() {
    intervalId = setInterval(() => {
      timer--;
      timerBox.textContent = `${timer} seconds`;
      if (timer <= 0) {
        clearInterval(intervalId);
        showTimeoutScreen();
      }
    }, 1000);
  }
  
  // Show Timeout Screen
  function showTimeoutScreen() {
    quizContainer.classList.remove("active");
    timeoutScreen.classList.remove("hidden");
    document.getElementById("timeout-score").textContent = score;
  }
  
  // End Quiz
  function endQuiz() {
    clearInterval(intervalId);
    quizContainer.classList.remove("active");
    endScreen.classList.remove("hidden");
    document.getElementById("final-score").textContent = score;
  }
  
  // Restart Quiz
  function restartQuiz() {
    timeoutScreen.classList.add("hidden");
    endScreen.classList.add("hidden");
    titleScreen.classList.remove("hidden");
  }