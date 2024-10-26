// frontend/src/components/RuleForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RuleForm() {
    const [ruleString, setRuleString] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/rules/create', { ruleString });
            setResult(response.data);
        } catch (error) {
            console.error('Error creating rule', error);
        }
    };

    return (
        <div>
            <h3>Create Rule</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    placeholder="Enter rule"
                />
                <button type="submit">Create</button>
            </form>
            {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
}

export default RuleForm;
