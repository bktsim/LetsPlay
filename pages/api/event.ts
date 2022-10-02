import type { NextApiRequest, NextApiResponse } from 'next'
import { createNewEvent, getAllEvents, isEvent, updateEvent } from '../../controller/models/events';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method === 'GET') {
        return getAllEvents().then((events => {
            res.status(200).json({ events: events })
        }));
    } else if (req.method === 'POST') {
        const requestObj = req.body;
        console.log("requestObj", requestObj);
        if (isEvent(requestObj)) {
            console.log("IS EVENT")
            return createNewEvent(requestObj).then((event) => {
                if (event) {
                    res.status(200).json(event);
                } else {
                    res.status(400).json({ message: "Event already exists" });
                }
            });
        } else {
            res.status(402).json({ message: "invalid event" })
        }
    } else if (req.method === 'PUT') {
        const requestObj = req.body;
        if (isEvent(requestObj)) {
            return updateEvent(requestObj).then((event) => {
                if (event) {
                    res.status(200).json(event);
                } else {
                    res.status(400).json({ message: "The event does not exist" });
                }
            });
        } else {
            res.status(402).json({ message: "invalid event" })
        }
    } else {
        res.status(405).json({ message: "Only GET, POST, and PUT requests are allowed" });
    }

}
