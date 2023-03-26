// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================


for (let ster = "*"; ster.length < 6; ster += "*")
{
        console.log(ster)
}



// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for (let i = 0; i <= 3; i++)
{
    console.log("loop...")
    if (i === 3)
    {
        console.log("klaar!")
    }
}


// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let x = 0; x <= 9; x++)
{
    if (x >= 3 && x <= 5)
    {
        console.log(">" + x)
    }else if (x >= 6)
    {
        console.log(">>" + x)
    }else
    {
        console.log(x)
    }

}

// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================



for (let a = 1; a <= 100; a++)
{
    if (a % 3 === 0 && a % 5 === 0 && a < 100)
    {
        console.log("fizzbuzz");
    }else if (a % 3 === 0 && a < 100)
    {
        console.log("fizz");
    }else if (a % 5 === 0 && a < 100)
    {
        console.log("buzz");
    }else
    {
        console.log(a);
    }

}
