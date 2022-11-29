import Pusher from "pusher";
import ClientPusher from "pusher-js";


export const serverPusher = new Pusher({
    appId: "1513801",
    key: "d066dc21a867b9f88286",
    secret: "d7703f0db9ea20a1b917",
    cluster: "eu",
    useTLS: true
});

export const clientPusher = 
new ClientPusher('d066dc21a867b9f88286',{
     cluster: 'eu',
     forceTLS: true,
});