import { data } from "../model/data.js"

export const getPosts = (req, res) => {
    res.send(data)
}

export const createPosts = (req, res) => {

    const invoices = req.body
    
    console.log(invoices)
}