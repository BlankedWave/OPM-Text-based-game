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
        text: "You receive a message from an unknown source claiming to know your secret weakness. Intrigued, you investigate further.",
        choices: [
            { text: "Meet with the mysterious source", next: 29 },
            { text: "Ignore the threat", next: 30 }
        ]
    },
    {
        text: "The mysterious figure introduces themselves as a villain who has been observing you. They challenge you to a fight to test your true strength.",
        choices: [
            { text: "Accept the challenge", next: 31 },
            { text: "Refuse and walk away", next: 32 }
        ]
    },
    {
        text: "You decide to ignore the villain and continue your normal day. After some time, you realize that they may not have been bluffing.",
        choices: [
            { text: "Prepare for the possible showdown", next: 33 },
            { text: "Forget about it and relax", next: 9 }
        ]
    },
    {
        text: "After defeating the mysterious villain, you return to your quiet life, realizing that even heroes need some rest. However, there may always be a new challenge just around the corner.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You prepare for the showdown with the villain and after a fierce battle, you emerge victorious. However, the villain had a final trick up their sleeve.",
        choices: [
            { text: "Fight again", next: 31 },
            { text: "Give up and walk away", next: 32 }
        ]
    },
    {
        text: "The fight is exhausting, but you ultimately win. The villain disappears, but you feel like there's more to come. Your adventure continues.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You go back to your apartment and rest. The next day, you are contacted by the Hero Association for an urgent mission.",
        choices: [
            { text: "Accept the mission", next: 34 },
            { text: "Decline and rest more", next: 35 }
        ]
    },
    {
        text: "A massive robot is wreaking havoc in the city. You are called to stop it. The Hero Association is already fighting, but they need your help.",
        choices: [
            { text: "Join the fight", next: 36 },
            { text: "Observe from a distance", next: 37 }
        ]
    },
    {
        text: "You join the fight against the robot and defeat it with ease. However, a strange figure approaches you afterward and offers you a deal.",
        choices: [
            { text: "Accept the offer", next: 38 },
            { text: "Refuse and leave", next: 39 }
        ]
    },
    {
        text: "The figure reveals themselves as an old foe who wants to challenge you once more. You feel the tension rising as you prepare for battle.",
        choices: [
            { text: "Fight them", next: 40 },
            { text: "Decline and walk away", next: 41 }
        ]
    },
    {
        text: "You fight your old foe, and after a hard battle, you emerge victorious once again. However, something feels off. The world feels quieter.",
        choices: [
            { text: "Investigate the strange feeling", next: 42 },
            { text: "Relax and enjoy your victory", next: 9 }
        ]
    },
    {
        text: "You investigate the strange feeling and find a portal opening in the sky. A new enemy has arrived, stronger than anyone you've faced before.",
        choices: [
            { text: "Charge at the portal", next: 43 },
            { text: "Gather information before acting", next: 44 }
        ]
    },
    {
        text: "You charge at the portal without hesitation, ready to face whatever awaits you. What emerges is a powerful creature with unimaginable strength.",
        choices: [
            { text: "Fight the creature", next: 45 },
            { text: "Retreat and gather help", next: 46 }
        ]
    },
    {
        text: "The creature attacks relentlessly. Despite your power, you're beginning to realize this fight is going to be harder than you thought.",
        choices: [
            { text: "Push through and keep fighting", next: 47 },
            { text: "Retreat and regroup", next: 48 }
        ]
    },
    {
        text: "You push through the battle and finally land the perfect punch. The creature crumbles, but you sense more danger ahead.",
        choices: [
            { text: "Prepare for what's next", next: 49 },
            { text: "Rest for now", next: 9 }
        ]
    },
    {
        text: "You rest for now and feel the weight of your victories. The world may be safe again for now, but who knows what will happen next?",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "A new hero appears on the scene. They challenge you, claiming to be more powerful. You decide to test their strength.",
        choices: [
            { text: "Accept the challenge", next: 50 },
            { text: "Refuse and leave", next: 51 }
        ]
    },
    {
        text: "You accept the challenge and engage in a fierce battle. The hero is strong, but not strong enough to defeat you.",
        choices: [
            { text: "End the fight with one punch", next: 52 },
            { text: "Test their abilities further", next: 53 }
        ]
    },
    {
        text: "You end the fight quickly with one punch. The new hero accepts your superiority, and you both share a moment of respect.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You decide to test their abilities further. They reveal a new power that challenges you, but it’s still not enough.",
        choices: [
            { text: "Finish the fight", next: 54 },
            { text: "Let them retreat", next: 55 }
        ]
    },
    {
        text: "You finish the fight. The new hero walks away, admitting defeat. They vow to return stronger.",
        choices: [
            { text: "Wait for their return", next: 56 },
            { text: "Move on to other adventures", next: 9 }
        ]
    },
    {
        text: "A villain named Boros arrives on Earth. He’s looking for a worthy opponent, and you’re the one he’s targeting.",
        choices: [
            { text: "Fight Boros immediately", next: 57 },
            { text: "Gather information about Boros", next: 58 }
        ]
    },
    {
        text: "You fight Boros, but he reveals an ability that regenerates his wounds quickly. It’s going to be a long battle.",
        choices: [
            { text: "Keep fighting", next: 59 },
            { text: "Look for his weak spot", next: 60 }
        ]
    },
    {
        text: "You find Boros's weak spot and defeat him. However, as he dies, he warns you of even more dangerous foes coming.",
        choices: [
            { text: "Prepare for the next challenge", next: 61 },
            { text: "Relax and enjoy the victory", next: 9 }
        ]
    },
    {
        text: "You relax, but soon after, another enemy appears, more powerful than Boros. Your journey continues.",
        choices: [
            { text: "Face this new enemy", next: 62 },
            { text: "Rest and recuperate", next: 9 }
        ]
    },
    {
        text: "You face the new enemy, who reveals themselves to be an alien warlord with unmatched strength. They challenge you to a battle.",
        choices: [
            { text: "Accept the challenge", next: 63 },
            { text: "Try to negotiate with the warlord", next: 64 }
        ]
    },
    {
        text: "You accept the challenge, and the battle begins. The warlord’s power is incredible, but you’re determined to win.",
        choices: [
            { text: "Use your full strength", next: 65 },
            { text: "Wait for an opening", next: 66 }
        ]
    },
    {
        text: "You use your full strength and land a powerful punch. The warlord stumbles but remains standing, revealing their hidden abilities.",
        choices: [
            { text: "Push even harder", next: 67 },
            { text: "Find another strategy", next: 68 }
        ]
    },
    {
        text: "The warlord retaliates, unleashing a devastating attack. You dodge but realize you need to act quickly to end the fight.",
        choices: [
            { text: "Use your signature punch", next: 69 },
            { text: "Try to outlast the warlord", next: 70 }
        ]
    },
    {
        text: "You successfully land your signature punch, and the warlord falls to the ground defeated. However, they laugh and reveal a hidden backup plan.",
        choices: [
            { text: "Prepare for the next phase of battle", next: 71 },
            { text: "Retreat and regroup", next: 72 }
        ]
    },
    {
        text: "The warlord summons reinforcements, and you are now facing multiple enemies at once. This fight is far from over.",
        choices: [
            { text: "Fight them all at once", next: 73 },
            { text: "Focus on taking them down one by one", next: 74 }
        ]
    },
    {
        text: "You decide to take on all the enemies at once. With overwhelming speed and strength, you defeat them in a matter of moments.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You decide to focus on taking down the enemies one by one. It's a longer process, but you eventually win.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "The battle with the warlord is over. You’re tired, but you’ve earned a much-needed rest. However, a new threat appears.",
        choices: [
            { text: "Investigate the new threat", next: 75 },
            { text: "Rest first, then investigate", next: 76 }
        ]
    },
    {
        text: "A new villain, Orochi, appears in front of you. He’s a ruthless figure with incredible power, and he’s challenging you to a battle.",
        choices: [
            { text: "Fight Orochi immediately", next: 77 },
            { text: "Try to outsmart Orochi", next: 78 }
        ]
    },
    {
        text: "You decide to fight Orochi immediately. The battle is intense, and his attacks are powerful, but you hold your ground.",
        choices: [
            { text: "Use your full strength", next: 79 },
            { text: "Try to bait him into a trap", next: 80 }
        ]
    },
    {
        text: "You use your full strength and land a blow that seems to defeat Orochi. However, he suddenly regenerates.",
        choices: [
            { text: "Attack again", next: 81 },
            { text: "Try a different strategy", next: 82 }
        ]
    },
    {
        text: "Orochi regenerates faster than you anticipated. You need to find a way to stop his regeneration before it's too late.",
        choices: [
            { text: "Use a specific technique to block his healing", next: 83 },
            { text: "Disrupt the environment to weaken him", next: 84 }
        ]
    },
    {
        text: "You use a technique that cuts off Orochi's regeneration, rendering him vulnerable to your attacks. You defeat him once and for all.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You disrupt the environment and use the destruction to weaken Orochi’s abilities. He falters, and you defeat him.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "With Orochi defeated, you return to the Hero Association, where you're honored for your victory. However, you sense something is wrong.",
        choices: [
            { text: "Investigate the disturbance", next: 85 },
            { text: "Rest and take a break", next: 9 }
        ]
    },
    {
        text: "The disturbance is the appearance of a new organization, the Dark Syndicate, bent on taking over the world. They target you as their first target.",
        choices: [
            { text: "Fight the Dark Syndicate", next: 86 },
            { text: "Gather allies first", next: 87 }
        ]
    },
    {
        text: "You decide to fight the Dark Syndicate immediately. Their leader, a powerful figure named Leviathan, is ready to test your limits.",
        choices: [
            { text: "Fight Leviathan directly", next: 88 },
            { text: "Weaken their forces first", next: 89 }
        ]
    },
    {
        text: "You fight Leviathan directly, and the battle escalates quickly. They possess strange powers that challenge you in ways you’ve never experienced.",
        choices: [
            { text: "Use everything you've got", next: 90 },
            { text: "Look for weaknesses in Leviathan's attacks", next: 91 }
        ]
    },
    {
        text: "You find a weakness in Leviathan’s attacks and exploit it. Finally, you land a decisive blow that defeats him.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You use everything you’ve got and barely manage to defeat Leviathan. The Dark Syndicate is in disarray, but you’re not sure what’s next.",
        choices: [
            { text: "Rest and regroup", next: 9 },
            { text: "Prepare for their revenge", next: 92 }
        ]
    },
    {
        text: "You rest for a while, but the Dark Syndicate plans their revenge. Another battle looms on the horizon.",
        choices: [
            { text: "Prepare for the final confrontation", next: 93 },
            { text: "Move on and find a new challenge", next: 7 }
        ]
    },
    {
        text: "The final confrontation with the Dark Syndicate’s remaining forces begins. This is the moment to end the war once and for all.",
        choices: [
            { text: "Fight to the bitter end", next: 94 },
            { text: "Let the Hero Association handle it", next: 95 }
        ]
    },
    {
        text: "You fight the Dark Syndicate’s remaining forces with everything you have, and after a fierce battle, you bring them to their knees.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You let the Hero Association handle it, and they defeat the remaining members. The world is safe again for now.",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "Another new villain emerges, this time stronger and more dangerous. You must prepare for yet another battle.",
        choices: [
            { text: "Prepare for battle", next: 96 },
            { text: "Seek help from other heroes", next: 97 }
        ]
    },
    {
        text: "You prepare for the battle alone. The villain arrives, and you face a dangerous opponent who seems nearly invincible.",
        choices: [
            { text: "Fight with all your might", next: 98 },
            { text: "Look for a strategy to weaken them", next: 99 }
        ]
    },
    {
        text: "You fight with all your might and barely manage to land a decisive blow, but the villain has one last trick up their sleeve.",
        choices: [
            { text: "Finish the fight", next: 100 },
            { text: "Try to negotiate", next: 101 }
        ]
    },
    {
        text: "You finish the fight and defeat the villain once and for all. The world is safe once again, but who knows what the future holds?",
        choices: [
            { text: "The End", next: null }
        ]
    },
    {
        text: "You try to negotiate, but the villain refuses and attacks relentlessly. It’s time to end this battle.",
        choices: [
            { text: "Finish the fight", next: 100 },
            { text: "Retreat and regroup", next: 9 }
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
