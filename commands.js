import 'dotenv/config';
import {getRPSChoices} from './game.js';
import {capitalize, InstallGlobalCommands} from './utils.js';

// Get the game choices from game.js
function createCommandChoices() {
    const choices = getRPSChoices();
    const commandChoices = [];

    for (let choice of choices) {
        commandChoices.push({
            name: capitalize(choice),
            value: choice.toLowerCase(),
        });
    }

    return commandChoices;
}

const enableCommand = {
    name: 'enable',
    description: 'Enable the Minecraft server.',
    type: 1,
};

const disableCommand = {
    name: 'disable',
    description: 'Disable the Minecraft server.',
    type: 1,
};

const statusCommand = {
    name: 'status',
    description: 'Check the Minecraft server\'s status.',
    type: 1,
};

const ALL_COMMANDS = [
    enableCommand,
    disableCommand,
    statusCommand,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);