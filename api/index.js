import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Shaffer:Bulqy2020@shaffer-estate.6aprdww.mongodb.net/?retryWrites=true&w=majority&appName=shaffer-estate")

const app = express();

app.listen(3000, () => {console.log('Server is running on port 3000')
}
);