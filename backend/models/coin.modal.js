import mongoose from "mongoose";
const { Schema } = mongoose;
const CoinSchema = new Schema({
  userId: { type: String, required: true },
  coins: { type: Number, default: 0 },
});

// create modal
const Coin = mongoose.model("Coin", CoinSchema);
export default Coin;
