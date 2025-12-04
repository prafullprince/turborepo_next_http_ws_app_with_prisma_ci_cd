import express, { Request, Response } from "express";
import { client } from "@repo/db/client"

const app = express();
app.use(express.json());

app.get("/", (req:Request,res:Response)=>{
    res.send("hello world");
})

app.post("/signup", async (req:Request,res:Response)=>{
    try {
        const { username, password } = req.body;

        const user = await client.user.create({
            data: {
                username,
                password
            }
        })

        return res.status(200).json({
            success:true,
            message:"signup succeed",
            id: user.id
        })
    } catch (error) {
        console.log("error in signup", error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
})

app.listen(3002);
