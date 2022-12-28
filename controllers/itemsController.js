const createItem = (req, res)=>{
    return res.send("creating item")
}

const getAllItems = (req, res) => {
return res.send("get all items")
}

const deleteItem = (req, res)=>{
    return res.send ("delete items")
}

const getSingleItem = (req , res ) => {
    return res.send("this is my single item")
}

const updateItem = (req, res) => {
    return res.send("update the item")
}






module.exports = {
    createItem,
    getAllItems,
    deleteItem,
    getSingleItem,
    updateItem,
}