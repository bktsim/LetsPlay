import type { NextApiRequest, NextApiResponse } from 'next'
import { addInterests, getAllInterests } from '../../controller/models/interest';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method === 'GET') {
        return getAllInterests().then((interests) => 
            res.status(200).json({ interests: interests }));
    } else if (req.method === 'POST') {
        const requestObj = req.body;
        if (requestObj instanceof Array) {
            return addInterests(requestObj).then((interest) => 
                res.status(200).json(interest));
        } else {
            res.status(402).json({ message: "invalid interest" })
        }
    } else {
        res.status(405).json({ message: "Only GET and POST requests are allowed" });
    }

}
