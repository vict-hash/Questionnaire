// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    createform(); // Call createform only after the page has fully loaded
});

function createform() {
    const formContainer = document.getElementById('form-container');

    const form = document.createElement('form');
    
    // Question 2: Radio buttons
    const question2Label = document.createElement('label');
    question2Label.innerText = "1. What's 5 + 5?";
    form.appendChild(question2Label);

    // Create a div to group radio buttons in one line
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('radio-group');

    const numbers = ['55', '10', '5'];

    numbers.forEach((number) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = '5+5_solution';
        radioInput.value = number;

        const radioLabel = document.createElement('label');
        radioLabel.innerText = number;

        radioGroup.appendChild(radioInput);
        radioGroup.appendChild(radioLabel);
    });

    form.appendChild(radioGroup);

    // Question 3: Checkbox input
    const question3Label = document.createElement('label');
    question3Label.innerText = "2. Which animals do you like among these?";
    form.appendChild(question3Label);

    // Create a div to group checkboxes in one line
    const checkboxGroup = document.createElement('div');
    checkboxGroup.classList.add('checkbox-group');

    const animals = ['bull', 'monkey', 'sloth', 'rabbit'];

    animals.forEach((animal) => {
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.name = 'animallike';
        checkboxInput.value = animal;

        const checkboxLabel = document.createElement('label');
        checkboxLabel.innerText = animal;

        checkboxGroup.appendChild(checkboxInput);
        checkboxGroup.appendChild(checkboxLabel);
    });

    form.appendChild(checkboxGroup);

    // Question 4: Radio buttons again
    const question4Label = document.createElement('label');
    question4Label.innerText = "3. O+K?";
    form.appendChild(question4Label);

    // Create a div to group radio buttons in one line
    const radioGroup2 = document.createElement('div');
    radioGroup2.classList.add('radio-group');

    const four_solutions = ['OK', 'KO', 'ZZ'];

    four_solutions.forEach((letters) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'OK_solution';
        radioInput.value = letters;

        const radioLabel = document.createElement('label');
        radioLabel.innerText = letters;

        radioGroup2.appendChild(radioInput);
        radioGroup2.appendChild(radioLabel);
    });

    form.appendChild(radioGroup2);

    // Question 5 textbox answer

    const question5Label = document.createElement('label');
    question5Label.innerText = "4. What's the weather like?";
    form.appendChild(question5Label);

    const question5Input = document.createElement('input');
    question5Input.type = 'text';
    question5Input.name = 'weather';
    question5Input.id = 'input_weather';
    form.appendChild(question5Input);

    // Question 1 remains unchanged
    const question1Label = document.createElement('label');
    question1Label.innerText = "5. What's your name?";
    form.appendChild(question1Label);

    const question1Input = document.createElement('input');
    question1Input.type = 'text';
    question1Input.name = 'name';
    question1Input.id = 'input'; // Add an ID to reference later in checkInput function
    form.appendChild(question1Input);


    const submitButton = document.createElement('button');
    submitButton.type = 'button'; // Prevents form submission for now
    submitButton.innerText = 'Submit';
    submitButton.onclick = checkInput; // Call checkInput when clicked
    form.appendChild(submitButton);

    const result = document.createElement('p');
    result.id = 'result';
    form.appendChild(result);

    formContainer.appendChild(form); // Add the form to the container
}

const correctNames = ["Ujvári Kamilla", "Kamilla Ujvári", "Ujvari Kamilla", "Kamilla Ujvari"]
const secondInputCorrectValues = ["ujvári", "ujvari"];
let hasExecuted = false;

function checkInput() {
    if (hasExecuted) {
        return; // If commands have been hasExecuted, exit the function and do nothing
    }

    const input = document.getElementById('input').value.trim();

    const isCorrect = correctNames.map(name => name.toLowerCase()).includes(input.toLowerCase());

    if (isCorrect) {
        executeCommands();
    } else if (input.toLowerCase() === "kamilla") {
        createSecondInputField();
    } else {
        document.getElementById('result').innerText = 'Thank you for your responses.';
    }
}

// Function to create the second input field dynamically
function createSecondInputField() {
    const formContainer = document.getElementById('form-container');
    const existingSecondInput = document.getElementById('second-input');
    if (existingSecondInput) return; // Prevent duplicate input fields

    const secondInputLabel = document.createElement('label');
    secondInputLabel.innerText = "Milyen Kamilla?";
    formContainer.appendChild(secondInputLabel);

    const secondInput = document.createElement('input');
    secondInput.type = 'text';
    secondInput.id = 'second-input';
    formContainer.appendChild(secondInput);

    const secondSubmitButton = document.createElement('button');
    secondSubmitButton.type = 'button';
    secondSubmitButton.innerText = 'Submit';
    secondSubmitButton.onclick = checkSecondInput; // Attach function to validate second input
    formContainer.appendChild(secondSubmitButton);
}

// Function to validate the second input
function checkSecondInput() {
    const secondInput = document.getElementById('second-input').value.trim();

    // Check if the entered value is correct
    if (secondInputCorrectValues.includes(secondInput.toLowerCase())) {
        executeCommands(); // Execute commands if the second value is correct
    } else {
        document.getElementById('result').innerText = 'Thank you for your responses.';
    }
}

function executeCommands() {
    hasExecuted = true; // Mark as executed
    document.getElementById('result').innerText = 'OH te vagy az Kamilla.';
    // Show the box with the text on the left
    document.getElementById('box').style.display = 'block';

    // Show and start the animation on the right
    const canvas = document.getElementById('fourierCanvas');
    canvas.style.display = 'block';
    startFourierAnimation(canvas);
    startTimer();
}

function startTimer() {
    let timerElement = document.getElementById("timer");
    let secondsLeft = 30;

    let timer = setInterval(() => {
        secondsLeft--;
        timerElement.innerText = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timer);

            // Show hidden elements after timer reaches 0
            document.getElementById("imageContainer1").classList.remove("hidden");
            document.getElementById("textBox1").classList.remove("hidden");
            document.getElementById("imageContainer2").classList.remove("hidden");
            document.getElementById("textBox2").classList.remove("hidden");
            document.getElementById("imageContainer3").classList.remove("hidden");
            document.getElementById("imageContainer4").classList.remove("hidden");
            document.getElementById("finalTextBox").classList.remove("hidden");
            document.getElementById("button-container").classList.remove("hidden");
            document.getElementById("yes-button").classList.remove("hidden");
            document.getElementById("button-container-two").classList.remove("hidden");
            document.getElementById("yes-button-two").classList.remove("hidden");
        }
    }, 1000);
}


/* function startTimer() {
    let timeRemaining = 30; // Set countdown time in seconds
    const timerDisplay = document.getElementById('timer');
    const imageContainer = document.getElementById('imageContainer');

    const countdown = setInterval(() => {
        timerDisplay.innerText = timeRemaining; // Update timer display
        timeRemaining--; // Decrement time remaining

        if (timeRemaining < 0) {
            clearInterval(countdown); // Stop the countdown
            timerDisplay.innerText = ''; // Set display to ''
            imageContainer.style.display = 'block'; // Show image
        }
    }, 1000); // Update every second
} */

function startFourierAnimation(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = 9; // Scaling factor for heart size
    let t = 0; // Parameter to track time

    function drawHeartShape() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas each frame

        ctx.beginPath(); // Start the path

        // Use ctx.moveTo to set the starting point
        const startX = 16 * Math.sin(0) ** 3;
        const startY = 13 * Math.cos(0) - 5 * Math.cos(2 * 0) - 2 * Math.cos(3 * 0) - Math.cos(4 * 0);
        ctx.moveTo(centerX + startX * scale, centerY - startY * scale);

        // Gradually draw the heart shape over time
        for (let i = 0; i <= t; i += 0.01) {
            const x = 16 * Math.sin(i) ** 3;
            const y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);
            ctx.lineTo(centerX + x * scale, centerY - y * scale);
        }

        ctx.strokeStyle = '#4681E8'; // Set stroke color using hex code (red)
        ctx.lineWidth = 2; // Line width
        ctx.stroke(); // Draw the stroke

        t += 0.05; // Increment t for animation

        // Once the heart is fully drawn, reset t to start again
        if (t >= 2 * Math.PI) {
            t = 0; // Reset t for continuous redrawing
        }

        requestAnimationFrame(drawHeartShape); // Continue animating
    }

    drawHeartShape(); // Start drawing the heart
}


var canvas = document.getElementById('sidenavCanvas'); // Select the sidenav canvas
var c = canvas.getContext('2d');

// Set the canvas dimensions to fit the sidenav
canvas.width = 200; // Adjust width to match your sidenav's width
canvas.height = window.innerHeight; // Set height to full window height

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 50; // Adjust the max size of circles
var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#349808',
    '#298889',
];

window.addEventListener('mousemove', 
    function(event) {
    mouse.x = event.x - canvas.getBoundingClientRect().left;
    mouse.y = event.y - canvas.getBoundingClientRect().top;
});

window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius  > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < 100; i++) { // Reduce the number of circles to fit the sidenav
        var radius = Math.random() * 20 + 1;
        var x = Math.random() * (canvas.width - radius * 2) + radius;
        var y = Math.random() * (canvas.height - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animate();

