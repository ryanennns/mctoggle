import {InteractionResponseType} from "discord-interactions";

export const enable = () => {

    // hit the enable lambda function

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'Booting the Minecraft Server...',
        },
    }
}

export const disable = () => {

    // hit the disable lambda function

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'Shutting down the Minecraft Server...',
        },
    }
}

export const status = () => {

    // hit the status lambda function

    return {
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: 'Status placeholder',
        },
    }
}
