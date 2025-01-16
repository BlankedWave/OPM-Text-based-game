

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
    {
    "text": "You continue training Mumen Rider, helping him improve his form and techniques. After several days of training, he starts to make significant progress.",
    "choices": [
        { "text": "Encourage Mumen Rider to keep improving", "next": 17 },
        { "text": "Leave him to train alone", "next": 9 }
    ]
},
{
    "text": "Mumen Rider thanks you for the help and tells you he feels stronger. He expresses a desire to take on tougher challenges. What do you say?",
    "choices": [
        { "text": "Support his decision to fight stronger foes", "next": 18 },
        { "text": "Encourage him to stick to his current path", "next": 19 },
        { "text": "Tell him to focus on his training first", "next": 20 }
    ]
},
{
    "text": "You support Mumen Rider's decision to face tougher enemies. He smiles, determined to prove that even without powers, he can be a hero.",
    "choices": [
        { "text": "Visit the Hero Association for a new mission", "next": 1 },
        { "text": "Go to a training spot to help Mumen Rider prepare", "next": 8 }
    ]
},
{
    "text": "Mumen Rider decides to focus on improving his skills and asks you for more training tips. You decide to train him on advanced combat techniques.",
    "choices": [
        { "text": "Teach Mumen Rider your most advanced move", "next": 21 },
        { "text": "Give him general advice on stamina and endurance", "next": 22 }
    ]
},
{
    "text": "You teach Mumen Rider your most advanced move. He struggles but starts to get the hang of it. After training for hours, he seems more confident.",
    "choices": [
        { "text": "Send him to fight some small-time villains to practice", "next": 23 },
        { "text": "Take a break and relax together", "next": 9 }
    ]
},
{
    "text": "You send Mumen Rider to fight small-time villains to put his new skills to the test. He successfully defeats them and reports back to you with pride.",
    "choices": [
        { "text": "Encourage him to keep pushing forward", "next": 24 },
        { "text": "Rest and regroup before the next challenge", "next": 9 }
    ]
},
{
    "text": "Mumen Rider thanks you for your help and prepares to take on bigger threats. You feel proud of how far he’s come.",
    "choices": [
        { "text": "Send Mumen Rider on a tougher mission", "next": 25 },
        { "text": "Relax and go on a mission yourself", "next": 1 }
    ]
},
{
    "text": "You decide to take on a mission yourself and head to the Hero Association. There’s a new assignment for you that requires a high level of skill.",
    "choices": [
        { "text": "Accept the mission", "next": 26 },
        { "text": "Decline and go home", "next": 9 }
    ]
},
{
    "text": "You accept the mission and set off to defeat the latest threat. It’s a high-level monster causing havoc in the city, but you're ready for the challenge.",
    "choices": [
        { "text": "Defeat the monster with a single punch", "next": 27 },
        { "text": "Take your time and enjoy the battle", "next": 28 }
    ]
},
{
    "text": "You defeat the monster with a single punch. The Hero Association congratulates you on another successful mission, but you can’t shake the feeling of emptiness.",
    "choices": [
        { "text": "Request a mission that actually challenges you", "next": 29 },
        { "text": "Go home and relax", "next": 9 }
    ]
},
{
    "text": "You request a higher-level mission, but the Hero Association suggests you take a break first. You can sense they're concerned about your mental state.",
    "choices": [
        { "text": "Take a break and relax", "next": 9 },
        { "text": "Push for a more challenging mission", "next": 30 }
    ]
},
{
    "text": "You push for a more challenging mission, and the Hero Association reluctantly agrees. You prepare for an intense fight that might finally provide the challenge you seek.",
    "choices": [
        { "text": "Accept the challenge and head out", "next": 31 },
        { "text": "Wait for the mission to come to you", "next": 9 }
    ]
},
{
    "text": "You accept the challenge and head out. The mission turns out to be the hardest one you've faced in a while, but it’s exactly what you needed.",
    "choices": [
        { "text": "Defeat the foe with your usual strength", "next": 32 },
        { "text": "Try out a new technique you've been practicing", "next": 33 }
    ]
},
{
    "text": "After defeating the tough foe, you return to the Hero Association, having found the challenge you were looking for. The mission has ended, and you finally feel fulfilled.",
    "choices": [
        { "text": "Reflect on your journey", "next": 34 },
        { "text": "Take some time off to rest", "next": 9 }
    ]
},
{
    "text": "You reflect on your journey. Despite all your overwhelming strength, it’s not just the battles that make a hero, but the bonds you create along the way.",
    "choices": [
        { "text": "Continue helping others in your own way", "next": 35 },
        { "text": "Return to your training to perfect yourself further", "next": 36 }
    ]
},
{
    "text": "You decide to continue helping others in your own way, realizing that being a hero isn’t always about fighting monsters. Your journey as Saitama has reached a new understanding of what it means to be truly strong.",
    "choices": [
        { "text": "Live a peaceful life as a hero", "next": 37 }
    ]
},
{
    "text": "You return to your training, seeking even greater perfection. The hero's path is never truly finished, and you are determined to always become the best version of yourself.",
    "choices": [
        { "text": "Continue your endless training", "next": 38 }
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
