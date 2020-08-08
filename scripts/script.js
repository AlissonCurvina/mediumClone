let comments = [
    ["Jasmine Bina","Medium is truly where ideas are born, shared, and spread."],
    ["Jackie Colburn","Medium is a great place to read and learn from a wide range of authors. It’s not muddied up by ads. It’s not fake news. It feels like one of the few pure places to go online."],
    ["Rosemichelle Marzan","Do yourself a favor and start browsing Medium for high quality articles on just about ANY topic. Get those mental gears turning!"],
    ["Raquel Ledezma-Haight","I love Medium’s new publications: OneZero, GEN, Heated. And, I’m especially excited about Tenderly."],
    ["Paul Fabretti","In a web full of pseudo thought-leaders, Medium is the one place that I can reliably come to and be better informed in the easiest way possible of the things that matter to me."],
    ["Joel Leon","Medium is trying to shift the paradigm. They’re catering to those looking for fresh, new, authentic voices. I believe wholeheartedly in their mission."]
]

let currentIndex = 0

function changeContent() {
    document.getElementById("comments").innerHTML = comments[currentIndex][1]
    document.getElementById("name").innerHTML = comments[currentIndex][0]

    currentIndex++

    if ( currentIndex == comments.length) {
        currentIndex = 0
    }
}

setInterval(changeContent, 5000)