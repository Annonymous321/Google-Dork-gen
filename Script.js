const dorkCommands = [
  "intitle:",
  "inurl:",
  "site:",
  "filetype:",
  "intext:",
  "link:",
  "cache:",
  "related:",
  "info:",
  "map:",
  "movie:",
  "weather:",
  "stocks:",
  "define:",
  "book:",
];

let exampleIndex = 0;
let exampleDisplayInterval;

function displayExample() {
    let query = examples[exampleIndex];
    let currentIndex = 0;
    exampleDisplayInterval = setInterval(() => {
        if (currentIndex <= query.length) {
            document.getElementById('searchQuery').setAttribute("placeholder", query.substring(0, currentIndex));
            currentIndex++;
        } else {
            clearInterval(exampleDisplayInterval);
            if (document.getElementById('searchQuery').value === "") {
                setTimeout(() => {
                    eraseExample(query);
                }, 1000);
            }
        }
    }, 100);
}

function eraseExample(query) {
    let currentIndex = query.length;
    exampleDisplayInterval = setInterval(() => {
        if (currentIndex >= 0) {
            document.getElementById('searchQuery').setAttribute("placeholder", query.substring(0, currentIndex));
            currentIndex--;
        } else {
            clearInterval(exampleDisplayInterval);
            exampleIndex++;
            if (exampleIndex >= examples.length) {
                exampleIndex = 0;
            }
            setTimeout(() => {
              displayExample(); // Display the next example
            }, 1000);
        }
    }, 100);
}

document.getElementById('searchQuery').addEventListener('input', function() {
    if (this.value === "") {
        displayExample();
    } else {
        if (exampleDisplayInterval) {
            clearInterval(exampleDisplayInterval);
        }
        this.setAttribute("placeholder", "");
    }
});

document.getElementById('generateButton').addEventListener('click', function() {
  generateDork();
});

function generateDork() {
  const searchQuery = document.getElementById('searchQuery').value;
  const words = searchQuery.split(" ");
  let googleDork = "";
  words.forEach(word => {
    const randomDork = dorkCommands[Math.floor(Math.random() * dorkCommands.length)];
    googleDork += randomDork + ' ' + word + ' ';
  });

  document.getElementById('result').innerText = "Generated Google Dork: " + googleDork;
}
