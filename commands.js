import 'dotenv/config';
import {InstallGlobalCommands} from './utils.js';

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