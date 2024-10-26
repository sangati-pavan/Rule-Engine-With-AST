// backend/controllers/ruleController.js
const Rule = require('./models/Rule');

// Parse a rule string into AST
function parseToAST(ruleString) {
    // Basic example function to transform the rule into a hardcoded AST structure.
    // You would replace this with a real parser in production.
    return {
        type: 'operator',
        left: {
            type: 'operand',
            value: 'age > 30'
        },
        right: {
            type: 'operand',
            value: 'salary > 50000'
        }
    };
}

// Controller functions
exports.createRule = async (req, res) => {
    try {
        const { ruleString } = req.body;
        const ast = parseToAST(ruleString);
        const rule = new Rule({ ruleString, ast });
        await rule.save();
        res.status(201).json(rule);
    } catch (error) {
        res.status(500).json({ message: 'Error creating rule' });
    }
};

exports.evaluateRule = async (req, res) => {
    const { ast, data } = req.body;
    // Basic evaluation, replace with real AST traversal logic
    const isEligible = data.age > 30 && data.salary > 50000;
    res.json({ result: isEligible });
};
