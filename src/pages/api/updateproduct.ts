
import Product from "../../../models/Product";
import connectdb from "../../../middleware/mongoose";

const handler: any = async (req: any, res: any) => {
    if (req.method == 'POST') {
        console.log(req.body);
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
        //   await p.save();
        }
        res.status(200).json({ success: "Success" });
    }
    else {
        res.status(400).json({ error: "Bad Request" });
    }
    let products: any = await Product.find();
    res.status(200).json({ products });
}

export default connectdb(handler);