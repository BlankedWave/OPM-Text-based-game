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
    },
    {
        text: "You accept the challenge of defeating the monster head-on. You defeat it with ease. A mysterious figure appears from the shadows and applauds you.",
        choices: [
            { text: "Ask the mysterious figure about their identity", next: 26 },
            { text: "Ignore them and leave", next: 27 }
        ]
    },
    {
        text: "You choose to wait for a team to handle it. The Hero Association sends a squad, and the monster is defeated without any need for your intervention. You feel a bit useless.",
        choices: [
            { text: "Go back to training", next: 8 },
            { text: "Join the Hero Association team", next: 28 },
            { text: "Go home and sleep", next: 9 }
        ]
    },
    {
        text: "You investigate the strange message and find a challenge from a new enemy. It turns out to be a trap, and you find yourself in a dangerous situation. You defeat the enemies with ease, but now you're facing an even greater challenge.",
        choices: [
            { text: "Prepare for the next battle", next: 29 },
            { text: "Call Genos for backup", next: 3 }
        ]
    },
    {
        text: "You ignore the message and take a nap, but you wake up to find your apartment has been attacked by a powerful monster! You quickly defeat it, but you're left wondering who sent it.",
        choices: [
            { text: "Investigate further", next: 12 },
            { text: "Go to the Hero Association", next: 1 }
        ]
    },
    {
        text: "You encourage Mumen Rider to keep going, and he expresses gratitude. You share a peaceful moment, knowing that despite your overwhelming strength, it's the heart that makes a true hero.",
        choices: [
            { text: "Continue to train", next: 2 },
            { text: "Relax with Mumen Rider", next: 5 }
        ]
    },
    {
        text: "You tell Mumen Rider to stop being a hero, and he looks downcast but thanks you for your honesty. He decides to give up his dream of being a hero.",
        choices: [
            { text: "Regret your decision", next: 30 },
            { text: "Move on", next: 9 }
        ]
    },
    {
        text: "You show Mumen Rider some of your moves, and he tries to replicate them, but struggles. You help him improve his form, and he thanks you for the tips.",
        choices: [
            { text: "Continue training him", next: 31 },
            { text: "Leave him to train alone", next: 9 }
        ]
    },
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
