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
import drugRoutes from './routes/drugchart.routes.js'; 
import consentRoutes from './routes/consent.routes.js'
import anaesthesiaRoutes from './routes/anaesthesia.routes.js';
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
app.use('/api/v1/drug-charts', drugRoutes); 
app.use('/api/v1/consent/', consentRoutes);
app.use('/api/v1/anaesthesia/', anaesthesiaRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);1

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});