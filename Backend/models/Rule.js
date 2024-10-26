// backend/models/Rule.js
const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
    type: String,
    left: { type: mongoose.Schema.Types.Mixed, default: null },
    right: { type: mongoose.Schema.Types.Mixed, default: null },
    value: String
});

const RuleSchema = new mongoose.Schema({
    ruleString: String,
    ast: NodeSchema
});

module.exports = mongoose.model('Rule', RuleSchema);
