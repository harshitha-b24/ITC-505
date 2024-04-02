const story = [
    {
        text: "You awaken from cryosleep to find yourself stranded in space. Your ship's systems are malfunctioning, and you must make a decision: try to repair the ship or abandon it and search for help?",
        choices: [
            { text: "Repair the ship", nextStage: 1 },
            { text: "Abandon the ship", nextStage: 2 }
        ],
        image: "space.jpg"
    },
    {
        text: "You successfully repair the ship and manage to navigate to a nearby space station. However, the station appears deserted. What do you do?",
        choices: [
            { text: "Explore the station", nextStage: 3 },
            { text: "Continue searching for help", nextStage: 4 }
        ],
        image: "space_station.jpg"
    },
    {
        text: "While exploring the station, you encounter a hostile alien species. They attack you on sight. What do you do?",
        choices: [
            { text: "Fight back", nextStage: 5 },
            { text: "Attempt to communicate", nextStage: 6 }
        ],
        image: "alien.jpg"
    },
    {
        text: "You defeat the aliens and find a communication device. You send out a distress signal and receive a response from a nearby friendly civilization. What do you do?",
        choices: [
            { text: "Accept their help", nextStage: 7 },
            { text: "Be cautious and ask for more information", nextStage: 8 }
        ],
        image: "friendly_civilization.jpg"
    },
    {
        text: "You decide to abandon the space station and continue searching for help. As you travel through space, you encounter a mysterious wormhole. What do you do?",
        choices: [
            { text: "Investigate the wormhole", nextStage: 9 },
            { text: "Avoid the wormhole and keep searching for help", nextStage: 10 }
        ],
        image: "wormhole.jpg"
    },
    {
        text: "You communicate with the aliens and discover they were trying to protect their territory. They offer to guide you safely out of their space. What do you do?",
        choices: [
            { text: "Accept their offer and follow their guidance", nextStage: 11 },
            { text: "Politely decline and attempt to navigate on your own", nextStage: 12 }
        ],
        image: "friendly_aliens.jpg"
    },
    {
        text: "Following the aliens' guidance, you safely navigate out of their space and come across a derelict space station. What do you do?",
        choices: [
            { text: "Board the space station", nextStage: 13 },
            { text: "Avoid the space station and continue your journey", nextStage: 14 }
        ],
        image: "derelict_space_station.jpg"
    },
    {
        text: "The friendly civilization welcomes you and provides you with the necessary resources to repair your ship and return home safely. Congratulations, you've successfully completed your space adventure!",
        choices: [],
        image: "homecoming.jpg"
    },
    {
        text: "You attempt to communicate with the wormhole and discover it is a portal to a distant galaxy. What do you do?",
        choices: [
            { text: "Enter the wormhole and explore the new galaxy", nextStage: 15 },
            { text: "Avoid the wormhole and continue your search for help", nextStage: 10 }
        ],
        image: "distant_galaxy.jpg"
    },
    {
        text: "You bravely enter the wormhole and find yourself in a strange new galaxy. What do you do?",
        choices: [
            { text: "Explore the nearby planets", nextStage: 16 },
            { text: "Return through the wormhole to your original galaxy", nextStage: 17 }
        ],
        image: "new_planets.jpg"
    },
    {
        text: "You discover a peaceful civilization on one of the planets. They offer to assist you in repairing your ship. What do you do?",
        choices: [
            { text: "Accept their help and repair your ship", nextStage: 18 },
            { text: "Decline their help and continue exploring the galaxy", nextStage: 19 }
        ],
        image: "peaceful_civilization.jpg"
    },
    {
        text: "You successfully repair your ship with the help of the peaceful civilization and return to your original galaxy. Congratulations, you've successfully completed your space adventure!",
        choices: [],
        image: "homecoming.jpg"
    },
    // Additional stages
    {
        text: "You encounter a black hole on your journey. What do you do?",
        choices: [
            { text: "Attempt to navigate around it", nextStage: 20 },
            { text: "Explore its event horizon", nextStage: 21 }
        ],
        image: "black_hole.jpg"
    },
    {
        text: "You successfully navigate around the black hole but find yourself in a parallel universe. What do you do?",
        choices: [
            { text: "Explore the parallel universe", nextStage: 22 },
            { text: "Try to find a way back to your universe", nextStage: 23 }
        ],
        image: "parallel_universe.jpg"
    },
    {
        text: "You encounter a friendly spacefaring species in the parallel universe. What do you do?",
        choices: [
            { text: "Form an alliance with them", nextStage: 24 },
            { text: "Continue searching for a way back to your universe", nextStage: 25 }
        ],
        image: "friendly_species.jpg"
    },
    {
        text: "You discover a portal back to your universe but it's guarded by hostile aliens. What do you do?",
        choices: [
            { text: "Attempt to negotiate with the aliens", nextStage: 26 },
            { text: "Fight your way through", nextStage: 27 }
        ],
        image: "portal_guardians.jpg"
    },
    {
        text: "While exploring the black hole's event horizon, you discover a wormhole leading to an unknown dimension. What do you do?",
        choices: [
            { text: "Enter the wormhole and explore the unknown dimension", nextStage: 28 },
            { text: "Retreat from the wormhole and continue exploring space", nextStage: 29 }
        ],
        image: "unknown_dimension.jpg"
    },
    {
        text: "You enter the wormhole and find yourself in a dimension of pure energy. What do you do?",
        choices: [
            { text: "Attempt to harness the energy for your ship", nextStage: 30 },
            { text: "Retreat from the dimension and return to normal space", nextStage: 31 }
        ],
        image: "energy_dimension.jpg"
    },
    // Final stages
    {
        text: "You harness the energy from the dimension and upgrade your ship. Congratulations, you've successfully completed your space adventure!",
        choices: [],
        image: "upgraded_ship.jpg"
    },
    {
        text: "You retreat from the dimension and return to normal space. Congratulations, you've successfully completed your space adventure!",
        choices: [],
        image: "homecoming.jpg"
    }
    
];

let currentStage = 0;

function startGame() {
    currentStage = 0;
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('image');

    storyElement.innerHTML = `<p>${stage.text}</p>`;
    choicesElement.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.addEventListener('click', () => selectChoice(choice.nextStage));
        choicesElement.appendChild(button);
    });

    const imagePath = stage.image;
    imageElement.innerHTML = `<img src="${imagePath}" alt="Image for this stage">`;

    if (currentStage === story.length - 1) {
        endGame();
    }
}

function selectChoice(nextStage) {
    if (nextStage >= 0 && nextStage < story.length) {
        currentStage = nextStage;
        updatePage();
    } else {
        endGame();
    }
}

function endGame() {
    const storyElement = document.getElementById('story');
    const choicesElement = document.getElementById('choices');
    const imageElement = document.getElementById('image');

    storyElement.innerHTML = "<p>Congratulations! You've reached the end of your space adventure.</p>";
    choicesElement.innerHTML = '';
    imageElement.innerHTML = '';
}

startGame();
