import type { NextApiRequest, NextApiResponse } from 'next'
import { createNewUser, findUser } from '../../controller/models/user';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: "Only POST requests are allowed" });
        return;
    }
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
        return;
    }
    return findUser(email, password).then((user) => {
        if (user) {
            return res.status(200).json(user);
        } else {
            return createNewUser(email, password).then((user) => {
                if (user) {
                    return res.status(200).json(user);
                } else {
                    return res.status(400).json({ message: "User already exists" });
                }
            });
        }
    });
}

