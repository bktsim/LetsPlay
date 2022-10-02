import type { NextApiRequest, NextApiResponse } from 'next'
import { addInterests } from '../../controller/models/interest';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method === 'GET') {
        res.status(200).json({ interest: req.body })
    } else if (req.method === 'POST') {
        const requestObj = req.body;
        if (requestObj instanceof String) {
            return addInterests(requestObj).then((interest) => {
                if (interest) {
                    res.status(200).json(interest);
                } else {
                    res.status(400).json({ message: "Event already exists" });
                }
            });
        }
    } else {
        res.status(405).json({ message: "Only GET and POST requests are allowed" });
    }

}
