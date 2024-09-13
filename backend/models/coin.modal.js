import mongoose from "mongoose";
const { Schema } = mongoose;
const CoinSchema = new Schema({
  userId: { type: String, required: true },
  coins: { type: Number, default: 0 },
  currentDay: { type: Number, default: 1 },
  lastClaimDate: { type: Date, default: null },
  rewardCycleCompleted: { type: Boolean, default: false },
});

// create modal
const Coin = mongoose.model("Coin", CoinSchema);
export default Coin;
