# KGL Backend API Server Assignment


**Author:** Dawa Edina Hillary  
**Date:** Feb 16 
**Points:** 10  


## KGL Backend API Server

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-v4.18-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-green)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)


## Project Overview

This project implements a backend API server for KGL using **Express.js** and **MongoDB**. The server supports procurement, sales, and user management with authentication. The API is documented with **Swagger**, providing a clear reference for endpoints, request bodies, parameters, and response codes.

The project is structured using **modular routing** with three main routers:

1. **procurementRoutes** – Handles produce purchases from dealers/farms.  
2. **salesRoutes** – Handles cash and credit/deferred sales.  
3. **userRoutes** – Manages staff accounts and authentication.

---

## Architecture & Routing

### Router 1: Procurement (`/procurement`)
Used by **Managers** to record produce bought by KGL.  

**Required Fields:**

| Field | Type | Validation |
|-------|------|------------|
| Name of Produce | Alphanumeric | Cannot be empty |
| Type of Produce | Alphabetic | Min 2 chars, cannot be empty |
| Date | Date | Cannot be empty |
| Time | Time | Required |
| Tonnage (kg) | Numeric | Minimum 3 digits, cannot be empty |
| Cost (UgX) | Numeric | Minimum 5 digits, cannot be empty |
| Dealer Name | Alphanumeric | Min 2 chars, cannot be empty |
| Branch | Enum | Maganjo or Matugga |
| Contact | Phone Number | Valid format |
| Selling Price | Numeric | Optional |

---

### Router 2: Sales (`/sales`)
Handles **two types of transactions**:

1. **Cash Sales**  
   Fields: Produce name, Tonnage, Amount Paid (UgX, min 5 digits), Buyer’s Name (Alphanumeric, min 2 chars), Sales Agent Name (Alphanumeric, min 2 chars), Date, Time.

2. **Credit/Deferred Sales** (Trusted buyers only)  
   Fields: Buyer Name (Alphanumeric, min 2 chars), National ID (NIN, valid format), Location (Alphanumeric, min 2 chars), Contact (Valid phone format), Amount Due (UgX, min 5 digits), Sales Agent Name, Due Date, Produce Name, Produce Type, Tonnage, Dispatch Date.

---

### Router 3: Users & Authentication (`/users`)

#### Login Endpoint (`/login`)
- Accepts **username/email** and **password**.
- Logic: Checks the database for the user.
- **Status Codes:**
  - `200 OK` – User exists and credentials are valid.
  - `401 Unauthorized` – User does not exist or credentials are invalid.

#### User Management
- Create users with roles: **Manager** or **Sales Agent**.  
- **Role Restrictions:**
  - Managers: Record procurement.
  - Sales Agents: Record sales.

---

## API Documentation

API endpoints are documented using **Swagger** and accessible at: http://localhost:3000/api-docs/#/

