import type { NextApiRequest, NextApiResponse } from 'next'
import { User, getAllUsers, updateUser } from '../../controller/models/user';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method === 'GET') {
        return getAllUsers().then((users) => 
            res.status(200).json({ users: users }));
    } else if (req.method === 'PUT') {
        const requestObj = req.body;
        if (isUser(requestObj)) {
            return updateUser(requestObj).then((user) => {
                if (user) res.status(200).json(user);
                else res.status(400).json({ message: "user not updated" })});
        } else {
            res.status(400).json({ message: "invalid interest" })
        }
    } else {
        res.status(405).json({ message: "Only GET and PUT requests are allowed" });
    }

}

function isUser(obj: any): Boolean {
    return 'email' in obj && 'password' in obj;
}