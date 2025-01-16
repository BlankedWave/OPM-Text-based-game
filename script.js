let storyText = document.getElementById("story");
let choicesDiv = document.getElementById("choices");
let nextButton = document.getElementById("next-button");

let storyIndex = 0;

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
        text: "You find an old enemy, Boros, resurfacing with plans for revenge. The fight will be legendary.",
        choices: [
            { text: "Fight Boros", next: 26 },
            { text: "Team up with Genos to fight Boros", next: 27 }
        ]
    },
  {
        text: "You receive a mysterious phone call. It's from an unknown person who claims to know about your weakness. Do you listen?",
        choices: [
            { text: "Listen to the call and see what they know", next: 28 },
            { text: "Hang up immediately", next: 29 }
        ]
    },
    {
        text: "The person on the other line claims to know your greatest weakness: boredom. They suggest that you take on a new challenge or your boredom will consume you. How do you respond?",
        choices: [
            { text: "Challenge the mysterious person to a duel", next: 30 },
            { text: "Ignore their warning and continue as you are", next: 31 },
            { text: "Ask them who they are", next: 32 }
        ]
    },
    {
        text: "You find yourself in a new city where a hero association branch is located. Upon arrival, you're greeted by a new hero named Fubuki. She challenges you to a battle to test your skills.",
        choices: [
            { text: "Accept Fubuki's challenge", next: 33 },
            { text: "Refuse and continue your journey", next: 34 },
            { text: "Offer to team up with Fubuki", next: 35 }
        ]
    },
    {
        text: "While walking down the street, a giant robot appears and starts attacking the city. People are screaming, and it seems like the situation is getting out of hand. What do you do?",
        choices: [
            { text: "Fight the robot head-on", next: 36 },
            { text: "Try to outsmart the robot", next: 37 },
            { text: "Help evacuate civilians first", next: 38 }
        ]
    },
    {
        text: "You decide to visit a new hero who recently joined the Hero Association: Tatsumaki, the Tornado of Terror. She seems powerful, but she's also known for her short temper. What will you do?",
        choices: [
            { text: "Try to make friends with Tatsumaki", next: 39 },
            { text: "Challenge her to a duel", next: 40 },
            { text: "Leave her be, avoiding confrontation", next: 41 }
        ]
    },
    {
        text: "A new organization called the Monster Association is causing havoc across the city. The S-Class heroes have been struggling to handle the threat. You have the opportunity to intervene.",
        choices: [
            { text: "Join the fight against the Monster Association", next: 42 },
            { text: "Report the issue to the Hero Association and wait for orders", next: 43 },
            { text: "Ignore the battle and go on your own mission", next: 44 }
        ]
    },
    {
        text: "You encounter a powerful alien invader who challenges you to a fight. He believes that only the strongest heroes should live. How do you respond?",
        choices: [
            { text: "Accept his challenge and fight him", next: 45 },
            { text: "Try to talk to him and convince him to leave Earth", next: 46 },
            { text: "Use one punch to immediately defeat him", next: 47 }
        ]
    },
    {
        text: "After a long day of hero work, you’re invited by your fellow heroes to a celebration dinner. The atmosphere is casual, but there’s talk of a new hero that’s gaining fame. You’re curious.",
        choices: [
            { text: "Go to the dinner and meet the new hero", next: 48 },
            { text: "Skip the dinner and head home", next: 49 },
            { text: "Challenge the new hero to a friendly competition", next: 50 }
        ]
    },
    {
        text: "As you’re walking through the city, you notice a mysterious figure watching you from the shadows. They seem to be following you. What will you do?",
        choices: [
            { text: "Confront the figure", next: 51 },
            { text: "Ignore them and keep walking", next: 52 },
            { text: "Set a trap to catch them", next: 53 }
        ]
    },
    {
        text: "A new villain named Dr. Kusuo has appeared in the city. He claims to be able to reverse time and change fate. Do you believe him?",
        choices: [
            { text: "Challenge Dr. Kusuo to a battle", next: 54 },
            { text: "Investigate his powers further before making a decision", next: 55 },
            { text: "Stay away from Dr. Kusuo and avoid confrontation", next: 56 }
        ]
    },
    {
        text: "You’ve been asked to join a team of heroes for a large-scale mission to take down a giant monster terrorizing an island. Will you accept the mission?",
        choices: [
            { text: "Join the team and accept the mission", next: 57 },
            { text: "Refuse and go on your own mission", next: 58 },
            { text: "Suggest a different approach to handling the monster", next: 59 }
        ]
    },
    {
        text: "You find yourself in a town where rumors of a legendary monster abound. This creature is said to be so strong that no one has been able to defeat it. Will you face this legendary monster?",
        choices: [
            { text: "Accept the challenge and hunt the monster", next: 60 },
            { text: "Gather information about the monster before proceeding", next: 61 },
            { text: "Leave the town and head elsewhere", next: 62 }
        ]
    },
    {
        text: "You encounter an unusual hero who claims to have mastered a technique that can match your strength. They challenge you to a battle to prove their abilities. What will you do?",
        choices: [
            { text: "Accept their challenge", next: 63 },
            { text: "Refuse and walk away", next: 64 },
            { text: "Ask for a demonstration before committing", next: 65 }
        ]
    },
          {
        text: "The Hero Association has requested your presence for a special mission. A mysterious organization known as the 'Dark Fist' is making waves. They have a leader who claims to be as powerful as you. What do you do?",
        choices: [
            { text: "Accept the mission and investigate Dark Fist", next: 66 },
            { text: "Refuse and go home", next: 67 },
            { text: "Challenge the leader of Dark Fist directly", next: 68 }
        ]
    },
    {
        text: "You meet a mysterious figure who offers to train you in an ancient martial art. They claim this technique will make you even stronger. Do you accept the offer?",
        choices: [
            { text: "Agree to train with them", next: 69 },
            { text: "Refuse and continue as you are", next: 70 },
            { text: "Ask them for proof of the technique's power", next: 71 }
        ]
    },
    {
        text: "You’ve been sent to a remote village to investigate a series of strange disappearances. The villagers suspect it’s the work of a monster. Do you believe them?",
        choices: [
            { text: "Investigate the village and search for the monster", next: 72 },
            { text: "Speak to the villagers and try to understand the situation", next: 73 },
            { text: "Leave the village and report to the Hero Association", next: 74 }
        ]
    },
    {
        text: "An old rival, Boros, has returned. He is more powerful than before and is bent on revenge. What do you do?",
        choices: [
            { text: "Prepare for battle with Boros", next: 75 },
            { text: "Try to reason with Boros and avoid a fight", next: 76 },
            { text: "Seek help from other heroes before confronting Boros", next: 77 }
        ]
    },
    {
        text: "You’re invited to a prestigious hero tournament, where only the strongest heroes compete. Do you enter the tournament?",
        choices: [
            { text: "Enter the tournament to test your strength", next: 78 },
            { text: "Decline and leave the tournament", next: 79 },
            { text: "Secretly sabotage the tournament to ensure your victory", next: 80 }
        ]
    },
    {
        text: "While out on a mission, you encounter an enigmatic monster who claims to be from another dimension. They challenge you to a duel to determine who is the strongest across dimensions. Do you accept?",
        choices: [
            { text: "Accept the challenge and fight the monster", next: 81 },
            { text: "Refuse the duel and try to reason with the monster", next: 82 },
            { text: "Attempt to send the monster back to its dimension", next: 83 }
        ]
    },
    {
        text: "You are faced with a monster that is completely immune to your punches. The only way to defeat it is to outwit it. How do you proceed?",
        choices: [
            { text: "Use your intelligence to figure out its weakness", next: 84 },
            { text: "Try to trap the monster and disable it", next: 85 },
            { text: "Fight it with all your might despite its immunity", next: 86 }
        ]
    },
    {
        text: "A rumor has spread that a group of heroes is planning to overthrow the Hero Association. Do you investigate or ignore it?",
        choices: [
            { text: "Investigate the rumor and uncover the truth", next: 87 },
            { text: "Ignore the rumor and focus on your own missions", next: 88 },
            { text: "Report the rumor to the Hero Association and wait for orders", next: 89 }
        ]
    },
    {
        text: "You encounter a powerful, yet arrogant, hero who claims they are better than you. They challenge you to a duel in front of the public. How do you respond?",
        choices: [
            { text: "Accept their challenge and prove your strength", next: 90 },
            { text: "Refuse and walk away", next: 91 },
            { text: "Challenge them to a test of strength without using your punches", next: 92 }
        ]
    },
    {
        text: "You find a strange device while on a mission. It's a time-traveling device, and it appears to be broken. Would you try to fix it or leave it alone?",
        choices: [
            { text: "Fix the device and explore the past or future", next: 93 },
            { text: "Leave it alone and focus on your mission", next: 94 },
            { text: "Report it to the Hero Association for further investigation", next: 95 }
        ]
    },
    {
        text: "A villain named 'The Shapeshifter' has been causing chaos, impersonating heroes to sow distrust in the Hero Association. Do you take on the challenge to find and stop them?",
        choices: [
            { text: "Track down the Shapeshifter and expose them", next: 96 },
            { text: "Alert other heroes to be on the lookout for the Shapeshifter", next: 97 },
            { text: "Ignore the situation and continue your own mission", next: 98 }
        ]
    },
    {
        text: "You are approached by a villain who claims to have knowledge of your past. They suggest that you’ve been living a lie. Will you confront them?",
        choices: [
            { text: "Confront the villain and find out the truth", next: 99 },
            { text: "Ignore them and walk away", next: 100 },
            { text: "Ask them how they know about your past", next: 101 }
        ]
    },
    {
        text: "You come across a group of heroes who are struggling to defeat a monster. They beg you for help. Do you lend a hand?",
        choices: [
            { text: "Help them defeat the monster", next: 102 },
            { text: "Refuse and leave them to handle it themselves", next: 103 },
            { text: "Offer advice, but don’t get involved in the fight", next: 104 }
        ]
    },
    {
        text: "A mysterious organization offers to make you an even stronger hero by enhancing your powers. However, you’re unsure if you should trust them. What do you do?",
        choices: [
            { text: "Accept their offer and enhance your powers", next: 105 },
            { text: "Refuse and remain true to your current abilities", next: 106 },
            { text: "Investigate the organization first before making a decision", next: 107 }
        ]
    },
    {
        text: "You’ve been invited to a special event hosted by the Hero Association, where you’ll meet other powerful heroes and be rewarded for your contributions. Do you attend?",
        choices: [
            { text: "Attend the event and meet other heroes", next: 108 },
            { text: "Decline and focus on your own missions", next: 109 },
            { text: "Attend, but secretly look for a way to outshine everyone", next: 110 }
        ]
    }    // Add more scenarios as needed
    
];

function displayStory() {
    storyText.innerHTML = storyData[storyIndex].text;
    choicesDiv.innerHTML = "";

    storyData[storyIndex].choices.forEach(choice => {
        let button = document.createElement("button");
        button.innerHTML = choice.text;
        button.onclick = () => {
            storyIndex = choice.next;
            displayStory();
        };
        choicesDiv.appendChild(button);
    });
}

function nextStory() {
    storyIndex++;
    if (storyIndex < storyData.length) {
        displayStory();
    } else {
        storyText.innerHTML = "The adventure has ended! Thank you for playing.";
        choicesDiv.innerHTML = "";
        nextButton.style.display = 'none';
    }
}

displayStory();
