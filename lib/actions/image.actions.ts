"use client"

import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../database/mongoose"
import { handleError } from "../utils"

export async function addImage({image,userId,path}:AddImageParams){
    try {
        await connectToDatabase()
        revalidatePath
        const imageModel = new ImageModel({
            image,
            userId,
            path
        })
        
    } catch (error) {
        handleError(error)
    }
}