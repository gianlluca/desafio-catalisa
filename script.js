const charactersElem = [
    {
        image : document.getElementById("img1"),
        name : document.getElementById("name1"),
        species : document.getElementById("species1"),
        charStatus : document.getElementById("charStatus1"),
    },
    {
        image : document.getElementById("img2"),
        name : document.getElementById("name2"),
        species : document.getElementById("species2"),
        charStatus : document.getElementById("charStatus2"),
    },
    {
        image : document.getElementById("img3"),
        name : document.getElementById("name3"),
        species : document.getElementById("species3"),
        charStatus : document.getElementById("charStatus3"),
    }
];

function generateThreeRandomNumbers() {
    return [
        Math.floor(Math.random() * 826) + 1,
        Math.floor(Math.random() * 826) + 1,
        Math.floor(Math.random() * 826) + 1
    ];
}

function requestRandomCharacters(){
    const numbers = generateThreeRandomNumbers();

    fetch(`https://rickandmortyapi.com/api/character/${numbers[0]},${numbers[1]},${numbers[2]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        for (let i = 0; i < charactersElem.length; i += 1) {
            charactersElem[i].image.src = data[i].image;
            charactersElem[i].image.alt = data[i].name;
            charactersElem[i].name.innerHTML = data[i].name;
            charactersElem[i].species.innerHTML = data[i].species;

            let isCharAlive = "Sim";

            if(data[i].status === "Dead"){
                isCharAlive = "Não";
            }else if(data[i].status === "unknown"){
                isCharAlive = "Desconhecido";
            }
            charactersElem[i].charStatus.innerHTML = isCharAlive;
        }
    });
}

document.getElementById("requestNewCharacters").onclick = requestRandomCharacters;

requestRandomCharacters();