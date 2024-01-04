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

const commandIndex = 0;

document.getElementById('generateButton').addEventListener('click', function() {
  generateDork();
});

function generateDork() {
  const searchQuery = document.getElementById('searchQuery').value;
  const selectedDork = dorkCommands[commandIndex] + ' "' + searchQuery + '"';
  document.getElementById('result').innerText = "Generated Google Dork: " + selectedDork;

  commandIndex = (commandIndex + 1) % dorkCommands.length;
}
