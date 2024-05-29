const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


const getReply = async (req, res) => {
    const message = req.body.message

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `${message}`
    const result = await model.generateContent(prompt);
    const response = result.response;
    const messageReply = response.text();

    return res.status(200).json({
        message: message,
        reply: messageReply
    })
}


module.exports = { getReply }