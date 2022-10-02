import type { NextApiRequest, NextApiResponse } from 'next'
import { createNewEvent, isEvent, updateEvent } from '../../controller/models/events';
import { createNewUser } from '../../controller/models/user';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method === 'GET') {
        res.status(200).json({ name: 'John Doe' })
    } else if (req.method === 'POST') {
        const requestObj = req.body;
        if (isEvent(requestObj)) {
            return createNewEvent(requestObj).then((event) => {
                if (event) {
                    res.status(200).json(event);
                } else {
                    res.status(400).json({ message: "Event already exists" });
                }
            });
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
        }
    } else {
        res.status(405).json({ message: "Only GET, POST, and PUT requests are allowed" });
    }

}
