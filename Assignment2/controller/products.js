const { Product } = require("../db");

exports.getAllProducts = async (req, res, next) => {
    try {
        let name= req.query.name
        console.log(name)
        if(name===undefined){
            const items = await Product.find();
            res.status(200).json({
                code: 200,
                msg: "success",
                data: items,
            });
        }else{
            const items = await Product.find({"name":{ $regex:`${name}`}});
            res.status(200).json({
                code: 200,
                msg: "success",
                data: items,
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        let id = req.params.id;
        const item = await Product.findById(id);

        res.status(200).json({
            code: 200,
            msg: "success",
            data: item,
        });
    } catch (error) {
        next(error);
    }
};



exports.addProduct = async (req, res, next) => {
    try {
        const items = await Product.find();
        const p = new Product(req.body);
        p.id = items.length + 1
        console.log(req.body)
        await p.save();
        res.status(200).json({
            code: 200,
            msg: "success",
        })
    } catch (error) {
        next(error);
    }
};

exports.updateProductById = async (req, res, next) => {
    let id = req.params.id;
    let str = { $set: req.body };
    console.log(str)

    await Product.updateOne({ _id: id }, str)
    res.status(200).json({
        code: 200,
        msg: "success",
    });
};


exports.deleteProductById = async (req, res, next) => {
    let id = req.params.id;
    const model = await Product.findByIdAndDelete(id);
    res.status(200).json({
      code: 200,
      msg: "success",
    });
};


exports.deleteProduct = async (req, res, next) => {
    let id = req.params.id;
    const model = await Product.deleteMany()
    res.status(200).json({
      code: 200,
      msg: "success",
    });
};





