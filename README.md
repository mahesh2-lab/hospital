
## 🏥 Hospital Management System - API Documentation

### 🔐 Authentication & Authorization

| Method | Endpoint              | Description                         |
|--------|-----------------------|-------------------------------------|
| POST   | `/api/auth/register`  | Register a new user (patient/staff) |
| POST   | `/api/auth/login`     | Login with credentials, returns JWT |
| GET    | `/api/auth/me`        | Get currently logged-in user data   |
| POST   | `/api/auth/logout`    | Logout the current user             |

---

## 🧍‍♂️ Patient Management

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | `/api/patients`       | Get list of all registered patients  |
| POST   | `/api/patients`       | Register a new patient               |
| GET    | `/api/patients/:id`   | Get specific patient details by ID   |
| PUT    | `/api/patients/:id`   | Update a patient’s information       |
| DELETE | `/api/patients/:id`   | Delete a patient record              |

---

## 🩺 Doctor Management

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/doctors`        | Get list of all doctors            |
| POST   | `/api/doctors`        | Add a new doctor                   |
| GET    | `/api/doctors/:id`    | Get doctor details by ID           |
| PUT    | `/api/doctors/:id`    | Update doctor details              |
| DELETE | `/api/doctors/:id`    | Remove doctor from the system      |

---

## 📅 Appointment Management

| Method | Endpoint                     | Description                               |
|--------|------------------------------|-------------------------------------------|
| GET    | `/api/appointments`          | Get list of appointments (with filters)   |
| POST   | `/api/appointments`          | Book a new appointment                    |
| GET    | `/api/appointments/:id`      | Get details of a specific appointment     |
| PUT    | `/api/appointments/:id`      | Update or reschedule an appointment       |
| DELETE | `/api/appointments/:id`      | Cancel an appointment                     |

---

## 🏥 OPD Module

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/api/opd`         | Get list of OPD visit records |
| POST   | `/api/opd`         | Create a new OPD visit         |
| GET    | `/api/opd/:id`     | View OPD visit details by ID   |
| PUT    | `/api/opd/:id`     | Update an OPD visit            |
| DELETE | `/api/opd/:id`     | Delete an OPD visit            |

---

## 🛏️ IPD Module

| Method | Endpoint                 | Description                         |
|--------|--------------------------|-------------------------------------|
| GET    | `/api/ipd`               | Get list of all admitted patients   |
| POST   | `/api/ipd/admit`         | Admit a patient to IPD              |
| GET    | `/api/ipd/:id`           | Get IPD admission details by ID     |
| PUT    | `/api/ipd/discharge/:id` | Discharge an admitted patient       |
| DELETE | `/api/ipd/:id`           | Cancel or remove admission record   |

---

## 🛌 Room & Bed Management

| Method | Endpoint                  | Description                             |
|--------|---------------------------|-----------------------------------------|
| GET    | `/api/rooms`              | Get list of all rooms and their status  |
| POST   | `/api/rooms`              | Add a new room                          |
| PUT    | `/api/rooms/:id/status`   | Update room status (occupied/vacant)    |

---

## 💊 Pharmacy Management

| Method | Endpoint                  | Description                            |
|--------|---------------------------|----------------------------------------|
| GET    | `/api/medicines`          | List all available medicines           |
| POST   | `/api/medicines`          | Add a new medicine                     |
| PUT    | `/api/medicines/:id`      | Update medicine details or stock       |
| POST   | `/api/medicines/issue`    | Issue medicine to a patient            |

---

## 🔬 Lab & Diagnostics

| Method | Endpoint               | Description                           |
|--------|------------------------|---------------------------------------|
| GET    | `/api/lab/tests`       | List all lab test requests            |
| POST   | `/api/lab/tests`       | Request a new lab test                |
| GET    | `/api/lab/tests/:id`   | Get lab test result by ID             |
| PUT    | `/api/lab/tests/:id`   | Update lab test result                |

---

## 📦 Inventory Management

| Method | Endpoint               | Description                           |
|--------|------------------------|---------------------------------------|
| GET    | `/api/inventory`       | List all inventory items              |
| POST   | `/api/inventory`       | Add a new inventory item              |
| PUT    | `/api/inventory/:id`   | Update inventory quantity or expiry   |
| DELETE | `/api/inventory/:id`   | Remove an inventory item              |

---

## 💳 Billing & Payments

| Method | Endpoint              | Description                             |
|--------|-----------------------|-----------------------------------------|
| GET    | `/api/billing`        | Get all bills or filter by patient      |
| POST   | `/api/billing`        | Generate a new bill                     |
| GET    | `/api/billing/:id`    | Get specific bill details               |
| PUT    | `/api/billing/:id`    | Update payment status or bill details   |

---

## 📈 Reports & Analytics

| Method | Endpoint                | Description                              |
|--------|-------------------------|------------------------------------------|
| GET    | `/api/reports/daily`    | Get daily patient statistics              |
| GET    | `/api/reports/opd-ipd`  | Analyze trends in OPD/IPD visits          |
| GET    | `/api/reports/pharmacy` | Report on medicine usage                  |
| GET    | `/api/reports/revenue`  | Revenue and financial summary             |

---

## 👥 User & Staff Management

| Method | Endpoint              | Description                        |
|--------|-----------------------|------------------------------------|
| GET    | `/api/users`          | List all users and staff members   |
| POST   | `/api/users`          | Add a new user or staff            |
| PUT    | `/api/users/:id`      | Update user details                |
| DELETE | `/api/users/:id`      | Delete a user or staff account     |
