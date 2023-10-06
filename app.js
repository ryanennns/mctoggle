import 'dotenv/config';
import express from 'express';
import {InteractionResponseType, InteractionType,} from 'discord-interactions';
import {VerifyDiscordRequest} from './utils.js';
import {disable, enable, status} from "./handlers.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({verify: VerifyDiscordRequest(process.env.PUBLIC_KEY)}));

app.post('/interactions', async function (req, res) {
    // Interaction type and data
    const {type, id, data} = req.body;

    if (type === InteractionType.PING) {
        return res.send({type: InteractionResponseType.PONG});
    }

    if (type === InteractionType.APPLICATION_COMMAND) {
        const {name} = data;

        switch (name) {
            case 'enable':
                return res.send(enable())
            case 'disable':
                return res.send(disable())
            case 'status':
                return res.send(status())
        }
    }
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
