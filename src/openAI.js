const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ apiKey: "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" });
const openai = new OpenAIApi(configuration);

export async function openAI(message) {
    try {
        const res = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        return res.data.choices[0].text;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            // If a 429 error is encountered, wait for a short period before retrying
            console.log('Rate limit exceeded. Retrying after a delay...');
            await delay(5000); // Adjust the delay as needed (e.g., 1000 milliseconds = 1 second)
            return openAI(message); // Retry the request
        } else {
            // Handle other errors
            console.error('Error:', error.message);
            throw error;
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
