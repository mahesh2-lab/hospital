import express, { json, urlencoded, } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';


import authRoutes from './routes/auth.route.js';
import patientRoutes from './routes/patient.routes.js';
<<<<<<< HEAD
import continuationRoutes from './routes/continuation.routes.js';
import ipdRoutes from './routes/ipd.routes.js';
import nursingRoutes from './routes/nursing.routes.js';
=======
import doctorRouters from './routes/doctor.routes.js'
import appointmentRoutes from './routes/appointment.routes.js';
>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc


const app = express();

<<<<<<< HEAD
=======

>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc
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

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/patients', patientRoutes);
<<<<<<< HEAD
app.use('/api/v1/continuation', continuationRoutes);
app.use('/api/v1/ipd', ipdRoutes)
app.use('/api/v1/nursing', nursingRoutes);
=======
app.use('/api/v1/doctor', doctorRouters);
app.use('/api/v1/appointments', appointmentRoutes);





>>>>>>> c00a5f06db257c64e0c99d1f392f8cf2bb00b1fc

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});