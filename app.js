const express = require('express');
const app = express();

const cors = require('cors');
require('./config');


app.use(cors());
const userRoutes = require('./routes/userRoutes');
const imageRoute = require('./routes/imageRoute');

app.use(express.json()); // For parsing application/json

// Use routes
app.use('/api/user', userRoutes);
app.use('/api/image', imageRoute);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
