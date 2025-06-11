import express, { json, urlencoded, } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from './routes/auth.route.js';
import patientRoutes from './routes/patient.routes.js';
import continuationRoutes from './routes/continuation.routes.js';
import ipdRoutes from './routes/ipd.routes.js';
import nursingRoutes from './routes/nursing.routes.js';
import drugRoutes from './routes/drugchart.routes.js'; // Assuming drug chart routes are in drugchart.routes.js
import { fileURLToPath } from 'url';

const app = express();

app.use(helmet());

dotenv.config();

app.use(cors({
    origin: '*',
    credentials: true,                
}));

app.use(morgan('combined'));
app.use(json({ limit: '10mb' }));
app.use(urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Welcome to the API',
//   });
// });

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/continuation', continuationRoutes);
app.use('/api/v1/ipd', ipdRoutes)
app.use('/api/v1/nursing', nursingRoutes);
app.use('/api/v1/drug-charts', drugRoutes); // Assuming drug chart routes are in continuation.routes.js

// serve React’s build
// __dirname is not defined in ES6 modules, so use import.meta.url to get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from React's build directory
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback to client for any route not handled above
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});