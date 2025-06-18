const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectTitle: String,
  description: String,
  department: String,
  studentName: String,
  coordinatorName: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  innovative: Boolean,
});

module.exports = mongoose.model('Project', projectSchema);
