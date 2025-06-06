import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { JWT_Password } from "./config";

export const userMiddleware = (req: Request , res : Response , next : NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string , JWT_Password) 
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next()
    }
    else{
        res.status(403).json({
            message : "You're not logged in"
        })
    }
}

//override the types of the express request object