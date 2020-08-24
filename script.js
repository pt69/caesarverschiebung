var eingabe = { 
  Eingabetext: "Ferien sind noch besser als Schule",
  Verschiebung: 0
};
var caesartext = '';
var settings;

var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var caesarArray = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];

function setup() {
  createCanvas(700,300);
  settings = QuickSettings.create(20, 20, "Cäsarverfahren (Verschiebung)");
  settings.setWidth(width-30);
  settings.bindText("Eingabetext", "Ferien sind noch besser als Schule", eingabe);
  settings.bindText("Verschiebung", 0, eingabe);
  settings.addTextArea("Caesartext", caesartext);
  settings.addButton("Text verschluesseln", function() { textVerschluesseln(); });	
}

function textVerschluesseln() {
    caesartext = '';
    verschiebung = eingabe.Verschiebung;
    for (var i = 0; i < eingabe.Eingabetext.length; i++) {
      var buchstabe = eingabe.Eingabetext.substring(i, i+1);
      for (var j = 0; j < alphabetArray.length; j++) {
        if (buchstabe == alphabetArray[j]) {
          caesartext = caesartext + caesarArray[j];
        }
      }
      if (buchstabe == ' ') { caesartext = caesartext + ' '; }
    }
  settings.setValue("Caesartext", caesartext);
}