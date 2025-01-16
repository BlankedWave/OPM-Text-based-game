# One Punch Man Text Based-Game

## Overview
This is a text-based adventure game where you play as Saitama, the one-punch hero from "One Punch Man." Navigate through various scenarios, make decisions, and explore a world where your overwhelming strength leads to interesting challenges. Will you train, fight monsters, or mentor fellow heroes? The choice is yours!

## Features
- Interactive story with multiple branching paths.
- Decisions that impact the progression of the game.
- A rich narrative inspired by the "One Punch Man" universe.

## How to Play

1. Follow the on-screen prompts and enjoy the adventure!

## Game Structure
The game is structured as an array of scenarios, each containing:
- **Text**: The narrative for the current scenario.
- **Choices**: An array of options, each leading to a new scenario.

Example:
```json
{
    "text": "You are Saitama, the hero who can defeat anyone with a single punch. You're feeling bored. What do you want to do today?",
    "choices": [
        { "text": "Go to the Hero Association", "next": 1 },
        { "text": "Train some more", "next": 2 },
        { "text": "Visit Mumen Rider", "next": 5 }
    ]
}
```


## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments
- Inspired by "One Punch Man" by ONE and Yusuke Murata.
- Thanks to all contributors and players for making this project possible.
