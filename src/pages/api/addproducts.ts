import Product from "../../../models/Product";
import connectdb from "../../../middleware/mongoose";

const handler: any = async (req: any, res: any) => {
  try {
    connectdb(handler);

    if (req.method === 'POST') {
      for (let i = 0; i < req.body.length; i++) {
        let p = new Product({
          title: req.body[i].title,
          slug: req.body[i].slug,
          desc: req.body[i].desc,
          img: req.body[i].img,
          category: req.body[i].category,
          size: req.body[i].size,
          color: req.body[i].color,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty, // Corrected the spelling here
        });

        await p.save();
      }

      let products: any = await Product.find();
      res.status(200).json({ success: 'Success', products });
    } else {
      res.status(400).json({ error: 'Bad Request' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
