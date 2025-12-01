import 'dotenv/config';
import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (request, response) => {
    try {
        return response.status(200).json({
            message: 'Connected sucessfully',
            success: true
        });
    } catch (error) {
        return response.status(500).json({
            error: `Fatal Error: ${error instanceof Error ? error.message : error}`,
            success: false,
        });
    }
});
app.listen(process.env.PORT, () => console.log(`Your localhost: http://localhost:${process.env.PORT}`));