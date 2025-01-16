const storyData = [
    {
        text: "You are Saitama, the hero who can defeat anyone with a single punch. You're feeling bored. What do you want to do today?",
        choices: [
            { text: "Go to the Hero Association", next: 1 },
            { text: "Train some more", next: 2 },
            { text: "Visit Mumen Rider", next: 5 }
        ]
    },
    {
        text: "You arrive at the Hero Association and meet Genos, your disciple. He asks if you want to team up for a mission.",
        choices: [
            { text: "Accept Genos's offer", next: 3 },
            { text: "Decline and go home", next: 4 },
            { text: "Challenge a high-level hero to a sparring match", next: 6 }
        ]
    },
    {
        text: "You start your daily training routine, but it's too easy. You feel bored again. What will you do?",
        choices: [
            { text: "Visit Mumen Rider", next: 5 },
            { text: "Look for a new enemy", next: 7 },
            { text: "Try a new form of training", next: 8 }
        ]
    },
    {
        text: "You and Genos easily defeat the monsters on your mission. Genos expresses his admiration for your strength, and you head back to the Association.",
        choices: [
            { text: "Relax in your apartment", next: 9 },
            { text: "Go to a new mission", next: 10 },
            { text: "Train Genos on his weakness", next: 11 }
        ]
    },
    {
        text: "You decline Genos's offer and go home. Your apartment is as empty and quiet as always. But suddenly, you receive a strange message.",
        choices: [
            { text: "Investigate the message", next: 12 },
            { text: "Ignore it and nap", next: 13 },
            { text: "Watch TV", next: 9 }
        ]
    },
    {
        text: "Mumen Rider invites you to hang out and talk about justice. He talks passionately about being a hero without any special powers. He asks for advice.",
        choices: [
            { text: "Encourage Mumen Rider to keep going", next: 14 },
            { text: "Tell him to stop being a hero", next: 15 },
            { text: "Show Mumen Rider some of your moves", next: 16 }
        ]
    },
    {
        text: "You challenge a high-level hero, Bang (Silver Fang), to a sparring match. He agrees, but warns you that you may be overestimating your power. The match begins.",
        choices: [
            { text: "End the match quickly with a single punch", next: 17 },
            { text: "Try to keep the fight going", next: 18 },
            { text: "Ask Bang for training tips", next: 19 }
        ]
    },
    {
        text: "You seek out a new enemy and find a monster terrorizing the city. It's a massive creature, but you realize it’s too weak to challenge you.",
        choices: [
            { text: "Defeat it with one punch", next: 20 },
            { text: "Ignore it and go back to training", next: 2 },
            { text: "Challenge the monster to a battle", next: 21 }
        ]
    },
    {
        text: "You decide to try a new form of training, practicing your moves with various weights. After hours of training, you feel a sense of improvement, though it's still too easy for you.",
        choices: [
            { text: "Increase the difficulty", next: 22 },
            { text: "Go look for a challenge", next: 7 }
        ]
    },
    {
        text: "You take on another mission to eliminate a group of mutants. The mission is completed swiftly, and you return to the Association, feeling as if you need a real challenge.",
        choices: [
            { text: "Request a higher-level mission", next: 23 },
            { text: "Go home and relax", next: 9 }
        ]
    },
    {
        text: "You take a nap and wake up feeling refreshed. As you step outside, a massive monster is approaching the city. The time to act has arrived.",
        choices: [
            { text: "Fight the monster head-on", next: 24 },
            { text: "Wait for a team to handle it", next: 25 }
        ]
    }
];

let currentScene = 0;

function updateStory() {
    const storyTextElement = document.getElementById("story-text");
    const choicesElement = document.getElementById("choices");

    // Set the current story text
    storyTextElement.textContent = storyData[currentScene].text;

    // Clear previous choices
    choicesElement.innerHTML = '';

    // Add new choices
    storyData[currentScene].choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.next;
            updateStory();
        };
        choicesElement.appendChild(button);
    });
}

// Start the story
updateStory();
