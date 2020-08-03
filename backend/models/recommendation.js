const mongoose = require('mongoose');

const recommendationSchema = mongoose.Schema({
  displayName: { type: String, required: true },
  photoURL: { type: String, required: true },
  recommendationText: { type: String, required: true },
  relation: { type: String, required: true },
  company: { type: String, required: true }
});

const Recommendation = mongoose.model('Recommendation',recommendationSchema);
module.exports = Recommendation;
