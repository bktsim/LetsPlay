import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: "Only POST requests are allowed" });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
    }
    console.log(req.body);
    res.status(200).json({ message: "Login successful" });
}
