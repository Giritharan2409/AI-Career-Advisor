// Timer functionality
let seconds = 0;
let minutes = 0;
let timerInterval;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = `Time: ${formattedTime}`;
}

// Start timer when page loads
timerInterval = setInterval(updateTimer, 1000);

// Prevent copying
document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Copying is not allowed during the exam!');
});

// Prevent right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled during the exam!');
});

// Detect tab switching
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        alert('Warning: Do not switch tabs during the exam! This action has been logged.');
        console.log('Tab switch detected at:', new Date().toLocaleTimeString());
    }
});

// Prevent keyboard shortcuts for copying
document.addEventListener('keydown', (e) => {
    // Ctrl+C, Ctrl+X, Ctrl+V
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
        e.preventDefault();
        alert('Keyboard shortcuts for copying/pasting are disabled!');
    }
    
    // Ctrl+U (view source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        alert('This action is not allowed during the exam!');
    }
    
    // F12 (developer tools)
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Developer tools are not allowed during the exam!');
    }
});

// Predefined questions for each domain
const questionsData = {
    data_analyst: {
        easy: [
            {
                question: "Which of these is used to store tabular data?",
                options: ["Instagram", "Excel", "Photoshop", "Paint"],
                correct_answer: "b"
            },
            {
                question: "What does SQL mainly help with?",
                options: ["Editing photos", "Sending emails", "Managing data in databases", "Watching videos"],
                correct_answer: "a"
            },
            {
                question: "A bar chart is useful for:",
                options: ["Comparing categories", "Writing text", "Playing music", "Sending messages"],
                correct_answer: "a"
            }
        ],
        medium: [
            {
                question: "Which SQL command is used to take data out of a database?",
                options: ["SELECT", "INSERT", "DELETE", "UPDATE"],
                correct_answer: "a"
            },
            {
                question: "What is the main difference between a line chart and a bar chart?",
                options: ["Line chart shows trends over time, bar chart shows comparisons", "Both show the same thing", "Bar chart shows weather, line chart shows text", "None of the above"],
                correct_answer: "a"
            },
            {
                question: "Which of these is NOT a Python library for data analysis?",
                options: ["Pandas", "NumPy", "Matplotlib", "PowerPoint"],
                correct_answer: "d"
            }
        ],
        hard: [
            {
                question: "If a dataset has missing values, which method is commonly used to handle them?",
                options: ["Ignore or fill missing values (imputation)", "Delete all data", "Replace with random text", "Save as image"],
                correct_answer: "a"
            },
            {
                question: "You have monthly sales data. Which statistical measure helps understand the 'average' sales?",
                options: ["Mean", "Median", "Mode", "All of the above"],
                correct_answer: "d"
            },
            {
                question: "If a dataset has 1,000 rows and 10 columns, how many values does it contain?",
                options: ["10", "100", "1,000", "10,000"],
                correct_answer: "d"
            },
            {
                question: "Which scenario is best for using a histogram?",
                options: ["To show the distribution of student marks", "To compare company profits", "To list names of employees", "To display a football scorecard"],
                correct_answer: "a"
            }
        ]
    },
    data_scientist: {
        easy: [
            {
                question: "Which language is most used in Data Science?",
                options: ["Python", "HTML", "CSS", "Excel"],
                correct_answer: "a"
            },
            {
                question: "What is a dataset?",
                options: ["Collection of data", "Music app", "Video player", "Drawing tool"],
                correct_answer: "a"
            },
            {
                question: "Which Python library is used for data analysis?",
                options: ["Pandas", "Snapchat", "PowerPoint", "Skype"],
                correct_answer: "a"
            }
        ],
        medium: [
            {
                question: "What is feature engineering?",
                options: ["Creating useful inputs for ML models", "Drawing features on photos", "Building a website", "Making reports"],
                correct_answer: "a"
            },
            {
                question: "Which visualization helps find correlation between variables?",
                options: ["Scatter plot", "Bar chart", "Pie chart", "Table"],
                correct_answer: "a"
            },
            {
                question: "Which concept is used to split data into train and test?",
                options: ["Model evaluation", "SQL command", "File storage", "Operating system"],
                correct_answer: "a"
            }
        ],
        hard: [
            {
                question: "What is overfitting in ML?",
                options: ["Model works well on training but poorly on new data", "Model always performs well", "Model ignores training data", "Model runs faster"],
                correct_answer: "a"
            },
            {
                question: "Which algorithm is used for classification?",
                options: ["Decision Tree", "K-Means", "Random Guess", "Histogram"],
                correct_answer: "a"
            },
            {
                question: "If a dataset has outliers, which central measure is better?",
                options: ["Median", "Mean", "Mode", "Range"],
                correct_answer: "a"
            }
        ]
    },
    machine_learning: {
        easy: [
            {
                question: "What is Machine Learning?",
                options: ["Teaching machines using data", "Playing music", "Repairing hardware", "Painting"],
                correct_answer: "a"
            },
            {
                question: "Which Python library is used in ML?",
                options: ["scikit-learn", "MS Word", "PowerPoint", "Canva"],
                correct_answer: "a"
            },
            {
                question: "Training data means:",
                options: ["Data used to teach the model", "Data used to test websites", "Data stored in folders", "Random numbers"],
                correct_answer: "a"
            }
        ],
        medium: [
            {
                question: "Which ML type uses labeled data?",
                options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Transfer Learning"],
                correct_answer: "a"
            },
            {
                question: "Which algorithm is used for regression?",
                options: ["Linear Regression", "K-Means", "Decision Tree Classifier", "Random Walk"],
                correct_answer: "a"
            },
            {
                question: "What is model evaluation used for?",
                options: ["Checking how well a model performs", "Editing a photo", "Saving a file", "Writing an email"],
                correct_answer: "a"
            }
        ],
        hard: [
            {
                question: "What is hyperparameter tuning?",
                options: ["Adjusting model settings for better results", "Fixing phone settings", "Cleaning datasets", "Adding colors to charts"],
                correct_answer: "a"
            },
            {
                question: "Which technique reduces model overfitting?",
                options: ["Regularization", "Random guessing", "Removing all features", "Increasing dataset errors"],
                correct_answer: "a"
            },
            {
                question: "Neural networks are mainly used for:",
                options: ["Complex pattern recognition", "Cooking recipes", "Simple addition", "Web browsing"],
                correct_answer: "a"
            }
        ]
    }
};

// Store selected questions globally
let selectedQuestions = [];

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Select exactly 2 easy, 2 medium, and 1 hard question from each domain
function selectQuestionsFromDomain(domainQuestions, domainName) {
    // Select exactly 2 easy questions
    const easyQuestions = shuffleArray(domainQuestions.easy).slice(0, 2);
    // Select exactly 2 medium questions
    const mediumQuestions = shuffleArray(domainQuestions.medium).slice(0, 2);
    // Select exactly 1 hard question
    const hardQuestions = shuffleArray(domainQuestions.hard).slice(0, 1);
    
    // Combine and add domain info
    return [...easyQuestions, ...mediumQuestions, ...hardQuestions].map(q => ({
        ...q,
        domain: domainName,
        // Add difficulty level for display
        difficulty: easyQuestions.includes(q) ? 'Easy' : 
                   mediumQuestions.includes(q) ? 'Medium' : 'Hard'
    }));
}

// Select random questions from each domain and difficulty level
function selectQuestions() {
    let selectedQuestions = [];
    
    // For each domain, select exactly 5 questions (2 easy, 2 medium, 1 hard)
    selectedQuestions = selectedQuestions.concat(selectQuestionsFromDomain(questionsData.data_analyst, 'data_analyst'));
    selectedQuestions = selectedQuestions.concat(selectQuestionsFromDomain(questionsData.data_scientist, 'data_scientist'));
    selectedQuestions = selectedQuestions.concat(selectQuestionsFromDomain(questionsData.machine_learning, 'machine_learning'));
    
    // Shuffle all selected questions
    return shuffleArray(selectedQuestions);
}

// Display questions dynamically
function displayQuestions(questions) {
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';
    
    questions.forEach((questionObj, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';
        
        // Add domain and difficulty indicator
        const infoContainer = document.createElement('div');
        infoContainer.className = 'question-info';
        
        const domainBadge = document.createElement('div');
        domainBadge.className = 'domain-badge';
        const domainName = questionObj.domain.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        domainBadge.textContent = domainName;
        
        const difficultyBadge = document.createElement('div');
        difficultyBadge.className = 'difficulty-badge';
        difficultyBadge.textContent = questionObj.difficulty;
        difficultyBadge.classList.add(questionObj.difficulty.toLowerCase());
        
        infoContainer.appendChild(domainBadge);
        infoContainer.appendChild(difficultyBadge);
        questionBlock.appendChild(infoContainer);
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Question ${index + 1}: ${questionObj.question}`;
        questionBlock.appendChild(questionTitle);
        
        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';
        
        questionObj.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'option-label';
            
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = String.fromCharCode(97 + optionIndex); // a, b, c, d
            optionInput.id = `q${index}-opt${optionIndex}`;
            
            const optionText = document.createElement('span');
            optionText.textContent = `(${String.fromCharCode(97 + optionIndex)}) ${option}`;
            
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(optionText);
            optionsList.appendChild(optionLabel);
        });
        
        questionBlock.appendChild(optionsList);
        questionsContainer.appendChild(questionBlock);
    });
}

// Automatically generate questions when page loads
window.addEventListener('DOMContentLoaded', () => {
    const loadingElement = document.getElementById('loading');
    const submitButton = document.getElementById('submitExam');
    
    // Show loading
    loadingElement.style.display = 'block';
    submitButton.style.display = 'none';
    
    try {
        // Select random questions
        selectedQuestions = selectQuestions();
        
        // Display questions
        displayQuestions(selectedQuestions);
        
        // Hide loading, show submit button
        loadingElement.style.display = 'none';
        submitButton.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to generate questions. Please try again.');
        loadingElement.style.display = 'none';
    }
});

// Submit exam
document.getElementById('submitExam').addEventListener('click', () => {
    const questions = document.querySelectorAll('.question-block');
    let allAnswered = true;
    const answers = [];
    
    questions.forEach((questionBlock, index) => {
        const selectedOption = questionBlock.querySelector(`input[name="question-${index}"]:checked`);
        if (!selectedOption) {
            allAnswered = false;
        } else {
            answers.push({
                question: index + 1,
                answer: selectedOption.value
            });
        }
    });
    
    if (!allAnswered) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    if (confirm('Are you sure you want to submit your exam?')) {
        clearInterval(timerInterval);
        
        // Evaluate answers and calculate score
        const result = evaluateExam(selectedQuestions, answers);
        
        // Store result in localStorage to pass to results page
        localStorage.setItem('examResult', JSON.stringify(result));
        localStorage.setItem('examTime', document.getElementById('timer').textContent);
        
        // Navigate to results page
        window.location.href = '/results';
    }
});

// Evaluate exam and calculate scores
function evaluateExam(questions, answers) {
    const result = {
        totalScore: 0,
        maxScore: 0,
        domainScores: {
            data_analyst: { score: 0, max: 0 },
            data_scientist: { score: 0, max: 0 },
            machine_learning: { score: 0, max: 0 }
        },
        correctAnswers: 0,
        totalQuestions: questions.length
    };
    
    // Calculate scores
    questions.forEach((question, index) => {
        // Determine points based on difficulty
        let points = 0;
        if (question.difficulty === 'Easy') {
            points = 2;
        } else if (question.difficulty === 'Medium') {
            points = 3;
        } else if (question.difficulty === 'Hard') {
            points = 5;
        }
        
        // Add to max score
        result.maxScore += points;
        result.domainScores[question.domain].max += points;
        
        // Check if answer is correct
        const userAnswer = answers.find(a => a.question === index + 1);
        if (userAnswer && userAnswer.answer === question.correct_answer) {
            result.totalScore += points;
            result.domainScores[question.domain].score += points;
            result.correctAnswers++;
        }
    });
    
    return result;
}

// Warn before leaving page
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});