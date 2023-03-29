const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// Connect to database
// connectDB();

const app = express();

// Body parser
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "Well Done!"
    })
})

app.listen(PORT, () => {
    console.log('server running!')
})