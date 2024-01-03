document.getElementById('searchQuery').addEventListener('input', function() {
  generateDork();
});

function generateDork() {
  var searchQuery = document.getElementById('searchQuery').value;
  var googleDork = 'site:stationx.net ' + searchQuery;
  document.getElementById('result').innerText = "Generated Google Dork: " + googleDork;
}
