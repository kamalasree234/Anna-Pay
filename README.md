<div align="center">

<h1>💸 AnnaPay</h1>
<h3>Payroll Notification System — Full-Stack Application</h3>

<p>
  <img src="https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-20 LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/RabbitMQ-3.12+-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"/>
</p>

<p>
  <img src="https://img.shields.io/badge/Domain-Higher%20Education-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/Client-Anna%20University%20Campus-red?style=flat-square"/>
  <img src="https://img.shields.io/badge/Process-Agile%20Scrum%20Sprint%20Zero-green?style=flat-square"/>
</p>

</div>

---

## 📋 Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Project Overview & Scope](#2-project-overview--scope)
3. [Key Features](#3-key-features)
4. [User Stories & Acceptance Criteria](#4-user-stories--acceptance-criteria)
5. [System Architecture](#5-system-architecture)
6. [Notification System — Core Engine](#6-notification-system--core-engine)
7. [Database Design](#7-database-design)
8. [Data Management — Excel Integration](#8-data-management--excel-integration)
9. [Payment Gateway Integration](#9-payment-gateway-integration)
10. [Administrator UI — Full Specification](#10-administrator-ui--full-specification)
11. [Employee UI — Full Specification](#11-employee-ui--full-specification)
12. [Technology Stack — Complete Justification](#12-technology-stack--complete-justification)
13. [API Design](#13-api-design)
14. [Security](#14-security)
15. [Deployment](#15-deployment)
16. [QA / Test Strategy](#16-qa--test-strategy)
17. [Edge Cases & Error Handling](#17-edge-cases--error-handling)
18. [Business Analysis — Stakeholders, Requirements & Bridge](#18-business-analysis--stakeholders-requirements--bridge)
19. [Current Limitations (Sprint Zero Scope)](#19-current-limitations-sprint-zero-scope)
20. [Future Scope](#20-future-scope)
21. [Overall System Flow](#21-overall-system-flow)
22. [Team Roles](#22-team-roles)
23. [Glossary](#23-glossary)

---

## 1. Problem Statement

Anna University Campus manages a large and diverse workforce — including full-time professors, visiting faculty, administrative staff, and blue-collar employees — each with different pay scales, tax rules, experience-based increments, and leave policies.

Staff members are not automatically informed when their salary is credited, when deductions are made, or when their payslip is ready. This creates significant operational friction:

- Staff manually check bank accounts repeatedly to verify salary credits
- Confusion arises regarding salary deductions and discrepancies
- Delayed awareness of payslip availability leads to frustration
- HR receives repeated queries from staff about payment status
- No centralized, role-based payroll dashboard integrating data from multiple departments
- When employees leave, records are often lost or inaccessible, creating compliance and legal risks

**AnnaPay** solves this by building a notification-first payroll platform tailored for colleges, with separate secure portals for administrators and employees, automated scheduled notifications, and full payroll transparency.

---

## 2. Project Overview & Scope

AnnaPay is a web-based payroll management system specifically designed for college institutions. The application is built on two primary pillars:

- **Payroll Processing** — automated, data-driven salary calculation from uploaded Excel sheets, linked bank accounts, and a chosen payment gateway
- **Notification System** — the crown feature of AnnaPay, delivering timely, priority-based, bilingual (English and Tamil) notifications for every meaningful payroll event

### 2.1 What is IN Scope

- Payroll processing for all employee categories (professors, admin staff, blue-collar workers)
- Automated salary disbursement via payment gateway integration (Razorpay)
- Complete notification lifecycle: scheduling, delivery, retry, history, and reminders
- Role-based portals: Administrator and Employee
- Excel data ingestion, cleaning, and real-time sync with the database
- Employee and departed staff record management
- Annual salary and tax report generation
- AI-based salary insights (Phase 2)

### 2.2 What is OUT of Scope (Current Sprint)

- WhatsApp or third-party chat platform notifications
- Two-way notification reply system
- Analytics dashboard for notification delivery reports
- Tamil language support (deferred to future sprint — English only for now)
- Real-time two-way communication between staff and HR

---

## 3. Key Features

### 3.1 Excel-Driven Data Ingestion

AnnaPay does not require manual data entry. The administrator uploads structured Excel files — one per department — and the system automatically parses, validates, and loads them into the database. Separate files are maintained for professors, administrative staff, and blue-collar workers. Each file contains built-in logic to compute experience-based increments (e.g., every 2 years of service triggers a salary step-up).

### 3.2 Role-Based Payroll Engine

Salary calculation is not one-size-fits-all. AnnaPay supports multiple pay scales:

| Employee Type | Salary Structure |
|---|---|
| **Professors** | Grade Pay + Basic Pay + DA + HRA + TA, with increment logic tied to years of service |
| **Admin Staff** | Fixed CTC structure with variable allowances |
| **Blue-collar** | Daily-wage or monthly wage, with attendance-based computation |
| **Bonus Triggers** | Automatically calculated when experience milestones are reached |

### 3.3 Notification System (Primary Feature — Core Engine)

This is the central feature of AnnaPay. Every significant payroll event generates a notification. Notifications are:

| Property | Detail |
|---|---|
| **Priority-based** | CRITICAL (salary credit, tax deduction) > HIGH (leave deduction, increment) > NORMAL (reminders, reports) |
| **Bilingual** | Delivered in English and Tamil based on employee preference |
| **Scheduled** | Salary notifications sent at the start of every month at a configurable time (e.g., 9:00 AM on 1st) |
| **Formatted** | Every notification contains Employee Name, Employee ID, and the core message |
| **Fault-tolerant** | If delivery fails, a fallback mechanism (retry queue + SMS) is triggered automatically |
| **Reminder-capable** | If a notification remains unread, a follow-up reminder is sent after 48 hours |

### 3.4 Payment Gateway Integration

AnnaPay integrates with **Razorpay** (with PayU and Cashfree as alternatives) to disburse salaries directly to linked employee bank accounts. After disbursement, the system automatically updates the database record and sends the salary-credited notification.

### 3.5 Administrator Portal

A dedicated secured portal for payroll administrators allowing full management of employees, payments, notifications, tax rules, Excel uploads, and database oversight. The administrator has exclusive rights to fields that employees cannot self-edit.

### 3.6 Employee Portal

A personalized dashboard for each employee showing salary breakdown with visualization, attendance and leave records, notification history, reminders, annual tax report, and a partially editable profile. Employees can view but not alter payroll-sensitive information.

### 3.7 Departed Employee Record Retention

When a professor or staff member leaves the college, their full payroll history — including salary records, tax deductions, and notifications — is archived and remains accessible to administrators. This satisfies audit and compliance requirements.

### 3.8 AI-Based Salary Insights (Phase 2)

In a future phase, AnnaPay will surface AI-generated insights on the employee dashboard — projected annual tax liability, salary growth trends, comparison of gross vs. net pay over months, and flagging anomalies in deductions.

---

## 4. User Stories & Acceptance Criteria

User stories are ordered by descending priority. Higher story points indicate higher complexity and priority for the sprint backlog.

| ID | Role | User Story Summary | Priority | Pts |
|---|---|---|---|---|
| US-01 | Admin | Upload department-wise Excel files | Critical | 13 |
| US-02 | System | Auto-send salary-credited notifications | Critical | 13 |
| US-03 | Admin | Link bank accounts, disburse salary | Critical | 13 |
| US-04 | Admin | Manage employee profiles | High | 8 |
| US-05 | Employee | View salary breakdown with charts | High | 8 |
| US-06 | System | Notify on leave deduction | High | 8 |
| US-07 | System | Notify on tax policy update | High | 8 |
| US-08 | System | Notify on salary increment | High | 8 |
| US-09 | Admin | Manage departed staff, retain history | High | 8 |
| US-10 | System | Retry failed notifications | Medium | 5 |
| US-11 | System | Send reminder after 48hr unread | Medium | 5 |
| US-12 | Employee | View attendance and leave | Medium | 5 |
| US-13 | Employee | View notification history | Medium | 5 |
| US-14 | Admin | Manage all notifications | Medium | 5 |
| US-15 | System | Generate and send annual reports | Medium | 5 |
| US-16 | Employee | Edit personal information | Low | 3 |
| US-17 | Admin | Manage tax deductions | Low | 3 |
| US-18 | System | Standard notification format | Low | 3 |
| US-19 | System | Bilingual notifications (EN + TA) | Low | 3 |
| US-20 | Employee | AI-based salary insights (Phase 2) | Future | 3 |

### 4.1 Detailed User Stories with Acceptance Criteria

<details>
<summary><strong>US-01 (Critical) — Salary Credited Notification</strong></summary>

> As a staff member, I want to receive a notification when my salary is credited, so that I can verify the payment immediately without manually checking my bank account.

**Acceptance Criteria:**
- Notification must be sent within 5 minutes of salary processing completion
- Notification must include net salary amount and credit date
- Notification must be delivered via Email, In-App, and Mobile Push
- Notification must be sent only to the correct staff member (strict EID validation)
- If notification fails, system must retry at least 3 times before triggering SMS fallback
- Each notification attempt must be logged in the notifications table
</details>

<details>
<summary><strong>US-02 (High) — Payslip Available Alert</strong></summary>

> As a staff member, I want to receive a notification when my payslip is available, so that I can download and review my detailed salary breakdown.

**Acceptance Criteria:**
- Notification must be sent as soon as payslip is generated
- Notification must include a direct reference/link to the payslip
- Link must be accessible and open the correct payslip for the correct employee only
- Notification must be delivered via Email and In-App
</details>

<details>
<summary><strong>US-03 (High) — Deduction Notification</strong></summary>

> As a staff member, I want to receive a notification about any deductions made in my salary, so that I am clearly aware of tax, PF, or other deductions.

**Acceptance Criteria:**
- Notification must include a summary of all deductions
- Deduction details must match actual payroll data in the database
- Notification must specify deduction type (Tax, PF, Leave Deduction, etc.)
- Notification must be sent along with or before the salary credit alert
</details>

<details>
<summary><strong>US-04 (High) — Admin Bulk Notification Trigger</strong></summary>

> As an HR/Admin, I want to trigger notifications to all staff after payroll is processed, so that every staff member is informed at the same time without manual effort.

**Acceptance Criteria:**
- Admin must have a trigger button/interface in the admin panel
- All active staff members must receive the notification — no one missed
- Admin must see a confirmation message once bulk notification is sent
- System must handle 2000+ staff records without failure or timeout
- Duplicate trigger protection must be in place (idempotency check)
</details>

<details>
<summary><strong>US-05 (Medium) — Notification History</strong></summary>

> As a staff member, I want to view my past notification history, so that I can refer to previous salary alerts and payment records.

**Acceptance Criteria:**
- Staff must be able to view all past notifications in their portal
- History must be ordered by latest date first
- Each record must show notification type, message, and date/time
- Only the logged-in staff member can see their own notification history
</details>

<details>
<summary><strong>US-06 (Low) — Language Preference</strong></summary>

> As a staff member, I want to receive notifications in English, so that I can understand the message clearly.

**Acceptance Criteria:**
- All notifications must be delivered in English in the current sprint
- Message content must be clear and accurate
- Tamil and other language support is deferred to a future sprint
</details>

---

## 5. System Architecture

AnnaPay follows a three-tier architecture: a client-facing frontend (Angular), a RESTful backend API (Node.js/Express), and a relational database (MySQL). The notification engine runs as a background service within the Node.js layer, orchestrated by a job scheduler (node-cron) and a RabbitMQ message broker.

### 5.1 Architecture Layers

| Layer | Technology | Responsibility |
|---|---|---|
| Presentation | Angular 17+ (SPA) | Admin UI, Employee UI, routing, state management |
| API Layer | Node.js + Express.js | REST APIs, business logic, auth middleware, scheduling |
| Notification Engine | Node-cron + RabbitMQ + Nodemailer/FCM | Scheduled jobs, message queuing, dispatch, retry |
| Database | MySQL 8.0 + Sequelize ORM | Employee records, salary history, notification logs |
| File Storage | Local / AWS S3 | Excel files, PDF reports |
| Payment Gateway | Razorpay Payouts API | Bank transfer, webhooks |
| Message Broker | RabbitMQ 3.12+ | Priority-based async delivery, ACK/NACK |
| Caching (optional) | Redis | Session, rate limiting |

### 5.2 Data Flow — Salary Disbursement

```
Step 1  → Administrator uploads Excel file with employee data
Step 2  → Backend parses and validates the file; data stored in MySQL
Step 3  → At month start, node-cron triggers salary computation
Step 4  → Salary calculated per employee (grade + experience + attendance)
Step 5  → Razorpay Payouts API called to transfer net salary to bank account
Step 6  → On payment success webhook, salary record updated; Excel updated
Step 7  → Notification dispatched to employee via RabbitMQ
```

### 5.3 Data Flow — Notification System

```
Step 1  → A payroll event occurs (salary credited, leave taken, increment, tax update)
Step 2  → Event triggers a notification row written to MySQL (status=pending)
Step 3  → Publisher sends message to RabbitMQ topic exchange with routing key encoding priority and type
Step 4  → Appropriate consumer worker picks up the message from priority queue
Step 5  → Worker performs idempotency check, renders template, applies language preference
Step 6  → Worker attempts FCM push and email delivery via Nodemailer
Step 7  → On success — status=sent; ACK sent to RabbitMQ
Step 8  → On failure — NACK sent; message routed to retry queue with TTL
Step 9  → After 3 failed retries — SMS fallback triggered; admin alerted
Step 10 → If notification remains unread after 48 hours, a reminder is created
Step 11 → Angular frontend displays notification to staff on dashboard
```

---

## 6. Notification System — Core Engine

The notification system is the **primary feature** of AnnaPay. Every design decision must prioritize reliable, timely, and clear delivery of payroll events to the right employee.

### 6.1 Notification Types & Priority Matrix

| Type | Priority | Trigger | Channel |
|---|---|---|---|
| Salary Credited | 🔴 CRITICAL | Payment gateway confirms successful disbursement | In-App + Email + SMS |
| Tax Policy Update | 🔴 CRITICAL | Admin updates tax slabs | In-App + Email + SMS |
| Leave Deduction | 🟠 HIGH | Leave approved & deducted | In-App + Email |
| Salary Increment | 🟠 HIGH | Experience milestone reached; increment applied | In-App + Email |
| Employee Departure Confirmation | 🟠 HIGH | Employee marked departed by admin | In-App + Email |
| Payslip Available | 🟠 HIGH | Payslip generated and ready to view | In-App + Email |
| Annual Report Available | 🟡 NORMAL | Generated at FY end (April 1) | In-App + Email |
| Unread Reminder | 🟡 NORMAL | Original notification unread after 48 hours | Same as original |
| Scheduled Salary Reminder | 🟡 NORMAL | Month start — salary processing initiated | In-App + Email |

### 6.2 Standard Notification Message Format

Every notification — regardless of type — must follow this exact format:

```
"Dear [Employee Name] (EID: [Employee ID]), [Core Message].
 [Optional: Amount/Date details].
 For queries, contact your payroll administrator."
```

**Example — Salary Credited:**
```
"Dear Priya Ramesh (EID: COL-2041), Your salary of Rs. 68,500 for the month of
January 2026 has been credited to your registered bank account.
For queries, contact your payroll administrator."
```

**Example — Leave Deduction:**
```
"Dear Arjun Kumar (EID: COL-1087), A salary deduction of Rs. 2,650 has been
applied for 2 leave days taken in January 2026.
For queries, contact your payroll administrator."
```

**Example — Tax Policy Update:**
```
"Dear Meena Suresh (EID: COL-0345), The government has updated tax slabs effective
01 April 2026. Your new tax deduction rate is 10%.
For queries, contact your payroll administrator."
```

### 6.3 Detailed Notification Scenarios

<details>
<summary><strong>NS-01 — Salary Credited Notification (CRITICAL)</strong></summary>

**Trigger:** Razorpay payment gateway sends a success webhook confirming salary transfer. Webhook handler verifies HMAC-SHA256 signature, updates `salary_records.payment_status = 'success'`, then publishes a message to `annapay.critical` queue with routing key `notification.critical.salary_credited`.

**Message:**
```
"Dear [Name] (EID: [EID]), Your salary of Rs. [NetPay] for the month of [Month Year]
has been credited to your registered bank account.
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Sent within 5 minutes of payment webhook receipt
- Net salary amount and credit date match MySQL salary_records
- Delivered via In-App + Email
- Retry 3 times if failed, then SMS fallback
- Entry logged in notifications table with sent_at timestamp
</details>

<details>
<summary><strong>NS-02 — Payslip Available Alert (HIGH)</strong></summary>

**Trigger:** Node.js payslip generation service finishes creating the PDF. An event is emitted internally and a notification message is published to `annapay.high` queue with routing key `notification.high.payslip_available`.

**Message:**
```
"Dear [Name] (EID: [EID]), Your payslip for [Month Year] is now available.
Please log in to your employee portal to view and download.
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Notification sent immediately after payslip is generated
- Notification includes portal reference or secure deep link
- Link accessible only by the correct employee
- Delivered via In-App + Email
</details>

<details>
<summary><strong>NS-03 — Salary Deduction Due to Leave (HIGH)</strong></summary>

**Trigger:** Admin approves leave. Leave record saved in `leave_records`. Payroll engine calculates deduction (Basic Pay / 26 × leave days). Published to `annapay.high` with routing key `notification.high.leave_deduction`.

**Message:**
```
"Dear [Name] (EID: [EID]), A salary deduction of Rs. [DeductedAmount] has been applied
for [LeaveDays] leave day(s) taken in [Month Year].
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Deduction amount must exactly match leave_records and salary_records
- Deduction type clearly labeled
- Notification sent the same day leave is approved
- Not sent if employee has 0 leave days deducted
</details>

<details>
<summary><strong>NS-04 — Salary Increment Notification (HIGH)</strong></summary>

**Trigger:** Experience increment check runs at data ingestion or monthly check. When employee crosses a service milestone (2 yrs, 5 yrs), `increment_triggered` flag is set. Entry created in `experience_increments`, `salary_grade` updated, published to `annapay.high` with routing key `notification.high.salary_increment`.

**Message:**
```
"Dear [Name] (EID: [EID]), Congratulations! Your salary has been incremented by
Rs. [IncrementAmount] effective [EffectiveDate] due to [X] years of service.
Your new basic pay is Rs. [NewBasicPay].
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Increment amount must match experience_increments.increment_amount
- Notification sent same day increment is applied
- Salary record updated before notification dispatch
- Delivered via In-App + Email
</details>

<details>
<summary><strong>NS-05 — Tax Policy Update Notification (CRITICAL)</strong></summary>

**Trigger:** Admin updates tax slab configurations in `tax_policies` table. After saving, admin triggers 'Notify All Employees'. System publishes one notification per active employee to `annapay.critical` with routing key `notification.critical.tax_update`.

**Message:**
```
"Dear [Name] (EID: [EID]), The government has updated income tax slabs effective
[EffectiveDate]. Your applicable tax rate is now [TaxPercent]%.
This will reflect in your salary from [Month Year].
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- All active employees must receive this notification
- Effective date and rate must match tax_policies table values
- Delivered via In-App + Email + SMS fallback (CRITICAL priority)
- Admin must see bulk send confirmation
</details>

<details>
<summary><strong>NS-06 — Employee Departure Confirmation (HIGH)</strong></summary>

**Trigger:** Admin marks employee as departed. System sets `status='inactive'`, creates `departed_employees` record, revokes portal access, and publishes to `annapay.high` with routing key `notification.high.employee_departure`.

**Message:**
```
"Dear [Name] (EID: [EID]), We confirm that your employment record has been updated
effective [DepartureDate]. Your final salary settlement of Rs. [FinalAmount] has
been processed. Your payroll history remains archived.
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Notification sent immediately after departure is marked
- Final salary settlement amount included if processed
- Employee receives notification before portal access is revoked
- Full payroll history archived and accessible to admin
</details>

<details>
<summary><strong>NS-07 — Unread Notification Reminder (NORMAL)</strong></summary>

**Trigger:** Daily node-cron runs at 10:00 AM (`cron: 0 10 * * *`). Queries notifications table for `status='sent'` AND `sent_at` older than 48 hours. For each unread, a new reminder is published to `annapay.normal` with routing key `notification.normal.reminder`.

**Message:**
```
"Dear [Name] (EID: [EID]), This is a reminder that you have an unread payroll
notification from [OriginalDate] regarding [OriginalType].
Please log in to your employee portal to view it.
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Only ONE reminder per original notification (no repeat reminders)
- Reminder linked to original notif_id in notification_reminders table
- Delivered via same channel as original notification
</details>

<details>
<summary><strong>NS-08 — Annual Report Available (NORMAL)</strong></summary>

**Trigger:** Annual report cron runs at 8:00 AM on April 1st (`cron: 0 8 1 4 *`). System generates PDF for each active employee. Upon successful generation, published to `annapay.normal` with routing key `notification.normal.annual_report`.

**Message:**
```
"Dear [Name] (EID: [EID]), Your Annual Salary and Tax Report for FY [YYYY-YY]
is now available. Please log in to your employee portal to view and download.
For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- Report includes month-wise salary, total gross, deductions, tax, net
- PDF available in employee portal
- Notification sent only after successful PDF generation
- If generation fails for one employee, others proceed normally
</details>

<details>
<summary><strong>NS-09 — Scheduled Monthly Salary Processing Reminder (NORMAL)</strong></summary>

**Trigger:** Monthly salary cron runs at 9:00 AM on the 1st of every month (`cron: 0 9 1 * *`). Before triggering the actual salary run, system publishes a reminder to `annapay.normal` informing employees that salary processing has been initiated.

**Message:**
```
"Dear [Name] (EID: [EID]), Salary processing for [Month Year] has been initiated.
Your salary will be credited shortly. You will receive a confirmation notification
once credited. For queries, contact your payroll administrator."
```

**Acceptance Criteria:**
- All active employees receive this notification at 9:00 AM on the 1st
- Notification sent before actual payment gateway call
- Must not be sent again if cron restarts (idempotency by emp_id + month + type)
</details>

### 6.4 Notification Channels

| Channel | Technology | When Used | Config Key |
|---|---|---|---|
| In-App | Firebase Cloud Messaging (FCM) | Always sent for all notification types | `FCM_SERVER_KEY` |
| Email | Nodemailer + SMTP | Sent alongside In-App for all types | `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` |
| SMS (Fallback) | MSG91 / Twilio | ONLY when In-App + Email both fail after 3 retries | `MSG91_API_KEY`; DLT compliant; Tamil Unicode |

### 6.5 Scheduler Design (node-cron)

| Cron Job | Expression | Description |
|---|---|---|
| Monthly Salary Notification | `0 9 1 * *` | 9:00 AM on 1st of every month |
| Unread Reminder Check | `0 10 * * *` | 10:00 AM daily — checks for unread notifications older than 48 hours |
| Annual Report Generation | `0 8 1 4 *` | 8:00 AM on April 1st |

**Environment Variables:**
- `CRON_MONTHLY_TIME` — Controls the monthly salary cron time
- `CRON_REMINDER_DELAY_HOURS` — Reminder threshold in hours (default: 48)

### 6.6 RabbitMQ Message Queue Architecture

AnnaPay uses RabbitMQ as its message broker to decouple notification creation from notification delivery. Without a message queue, every payroll event would attempt to send emails and push notifications synchronously — a slow SMTP server could abort a salary run, and a 300-employee tax update would block the API for minutes.

**Exchange & Queue Topology**

Single topic exchange: `annapay.notifications`
Messages routed to queues based on routing key: `notification.{priority}.{type}`

| Queue | Routing Key Pattern | TTL / Purpose |
|---|---|---|
| `annapay.critical` | `notification.critical.*` (prefetch: 5) | Salary credited, tax update — highest priority |
| `annapay.high` | `notification.high.*` (prefetch: 3) | Leave deduction, increment, departure, payslip |
| `annapay.normal` | `notification.normal.*` (prefetch: 2) | Annual report, reminder, custom notifications |
| `annapay.retry.critical` | Dead-letter from critical | TTL: 15 minutes → re-queues to annapay.critical |
| `annapay.retry.high` | Dead-letter from high | TTL: 1 hour → re-queues to annapay.high |
| `annapay.retry.normal` | Dead-letter from normal | TTL: 3 hours → re-queues to annapay.normal |
| `annapay.sms_fallback` | Published after max retries exhausted | SMS worker dispatches via MSG91/Twilio |
| `annapay.dead` | Permanently failed | Admin Portal polls count; alert banner when count > 0 |

**How Publishing Works**

When a payroll event fires, the API handler performs two actions:
1. Writes the notification row to MySQL with `status = pending`
2. Calls the publisher with routing key `notification.{priority}.{type}`

Messages are published as persistent (`delivery_mode=2`) so they survive a RabbitMQ broker restart.

Message payload includes: `notif_id`, `emp_id`, `employee_code`, `name`, `email`, `phone`, `fcm_token`, `language_preference`, `type`, `priority`, `message_en`, `message_ta`, `retry_count`, `related_record_id`.

**How Consumer Workers Process Messages**

Three separate Node.js worker processes run — one per priority level. Each worker follows this exact sequence:

```
Step 1 → Parse the JSON payload from the message body
Step 2 → Idempotency check — if notification status is already sent, read, or cancelled → ACK immediately and stop
Step 3 → Render message template — replace all placeholders with real values
Step 4 → Apply language preference — Tamil if available; else English; log language_fallback=true if fallback occurs
Step 5 → Attempt FCM push to employee's fcm_token
Step 6 → Attempt email delivery via Nodemailer
Step 7 → Both succeed → status=sent, sent_at=now, ACK to RabbitMQ
Step 8 → Either fails → NACK with requeue=false → routed to retry queue → if retry_count = max_retries → publish to annapay.sms_fallback
```

**Why RabbitMQ Over Redis or In-Process Queuing**

- **Durability** — Messages persisted to disk; RabbitMQ restart does not lose pending notifications
- **Acknowledgement** — Messages only removed after explicit ACK; if worker crashes, message is redelivered
- **TTL-based Retry** — Dead-letter exchange enables precise per-priority retry delays without polling (15min / 1hr / 3hr)
- **Priority Isolation** — Normal notification backlog cannot delay a CRITICAL salary notification (separate queues)

### 6.7 Retry & Fallback Logic

```
Step 1 → Notification created — status=pending, retry_count=0
Step 2 → Worker attempts delivery (FCM push + Email)
Step 3 → Success → status=sent, sent_at recorded, channel logged, ACK. Done.
Step 4 → Failure → NACK; routed to priority-specific retry queue with TTL
         (Critical: 15 min | High: 1 hr | Normal: 3 hr)
Step 5 → retry_count incremented each time message is re-consumed
Step 6 → After 3 failures → published to annapay.sms_fallback; SMS sent via MSG91/Twilio; admin alert created
Step 7 → All attempts logged in notifications table with timestamps
Step 8 → Permanently failed → annapay.dead queue; Admin Portal alert banner
```

### 6.8 Bilingual Support

Every notification template is stored in two columns:
- `message_en` — English message
- `message_ta` — Tamil message

The employee's `language_preference` field (set in their profile) determines which message is delivered. If Tamil is selected but `message_ta` is empty, the system falls back to English automatically and logs `language_fallback=true`. The employee can change their language preference from the Employee Portal profile section.

### 6.9 Unread Reminder Flow

```
Step 1 → Notification dispatched and logged with status=sent
Step 2 → Employee opens notification in portal → status updated to 'read'
Step 3 → Daily scheduler runs at 10:00 AM — queries for notifications with
         status=sent AND sent_at older than 48 hours
Step 4 → For each found — a new reminder notification created (type=reminder,
         linked to original notif_id in notification_reminders table)
Step 5 → Reminder sent via same channel as original. Only ONE reminder per
         original notification — no repeat reminders.
```

---

## 7. Database Design

The MySQL database is organized into the following core tables. All tables use auto-incremented integer primary keys and include `created_at` / `updated_at` timestamps. Sequelize ORM is used for all database interactions (prevents SQL injection via parameterized queries).

### 7.1 Core Tables

<details>
<summary><strong>View all table schemas</strong></summary>

```
employees
  emp_id, name, email, phone, department_id, role_id, status (active/inactive),
  joined_date, bank_account_no (AES-256 encrypted), bank_ifsc (AES-256 encrypted),
  language_preference

departments
  dept_id, dept_name, dept_type (academic / admin / blue_collar)

roles
  role_id, role_name, dept_id

salary_grades
  grade_id, role_id, basic_pay, grade_pay, da_percent, hra_percent,
  ta_fixed, effective_from

salary_records
  record_id, emp_id, month, year, gross_pay, deductions, tax_amount,
  net_pay, leave_days, payment_status, payment_date, gateway_ref

experience_increments
  increment_id, emp_id, triggered_at, previous_grade, new_grade, increment_amount

leave_records
  leave_id, emp_id, leave_date, leave_type, approved_by, deducted_amount

notifications
  notif_id, emp_id, type, subject, message_en, message_ta, priority,
  status (pending/sent/failed/read), scheduled_at, sent_at, retry_count,
  channel, language_fallback

notification_reminders
  reminder_id, notif_id, sent_at, status

tax_policies
  policy_id, slab_min, slab_max, tax_percent, effective_from, is_current

departed_employees
  record_id, emp_id, departure_date, reason,
  last_salary_record_id (FK → salary_records retained)

audit_log
  log_id, action, table_name, record_id, changed_by, changed_at,
  old_value, new_value — Read-only; retained 7 years for compliance

admin_users
  admin_id, username, password_hash, role (superadmin/payroll_admin), last_login
```
</details>

### 7.2 Notification Table — Status Values

| Status | Meaning |
|---|---|
| `pending` | Notification created but not yet dispatched by worker |
| `sent` | Successfully delivered via In-App and/or Email |
| `failed` | All delivery attempts exhausted; SMS fallback triggered |
| `read` | Employee has opened and viewed the notification in the portal |
| `cancelled` | Notification voided before dispatch (e.g., duplicate detected) |

---

## 8. Data Management — Excel Integration

### 8.1 Excel File Structure

Each department maintains its own Excel file. The system accepts `.xlsx` format only. Separate files exist for each academic department (e.g., `CSE_Professors.xlsx`, `MECH_Professors.xlsx`), administrative staff (`Admin_Staff.xlsx`), and blue-collar workers (`BlueCollar_Workers.xlsx`).

**Mandatory columns in every file:**
```
Employee ID | Full Name | Email | Phone | Department | Role/Designation |
Date of Joining | Bank Account Number | IFSC Code | Salary Grade | Current Basic Pay
```

### 8.2 Data Ingestion Steps

```
Step 1 → Administrator logs in to Admin Portal and navigates to Data Management
Step 2 → Selects the department and uploads the corresponding Excel file
Step 3 → Backend validates file format, required columns, and data types.
         Rows with errors are flagged and returned in an error report.
Step 4 → Valid rows are upserted into the employees table
         (new = insert; existing EID = update)
Step 5 → Salary grade mapping applied from salary_grades table based on role and joining date
Step 6 → Experience-based increment check runs — if employee crosses a milestone, increment_triggered flag is set
```

### 8.3 Data Cleaning Rules

| Rule | Behaviour |
|---|---|
| Empty mandatory fields | Row rejected with reason |
| Duplicate Employee IDs | Existing record updated, not duplicated |
| Invalid bank account/IFSC | Row held in review queue for admin action |
| Date format normalization | All dates converted to YYYY-MM-DD |
| Name normalization | Trimmed and title-cased |

### 8.4 Post-Payment Excel Update

After each salary disbursement cycle, the system writes back to the source Excel file: payment status, payment date, and gateway reference number are appended as new columns. This ensures the Excel file remains in sync with the database at all times.

### 8.5 Departed Employee Handling

```
Step 1 → Employee status set to 'inactive' in the employees table
Step 2 → A record is created in departed_employees table with departure date and reason
Step 3 → All salary_records for that employee are preserved and linked via FK
Step 4 → Employee portal access is revoked immediately
Step 5 → Excel file is updated to mark the employee as departed
Step 6 → Final salary settlement notification is sent to the employee (NS-06)
```

---

## 9. Payment Gateway Integration

### 9.1 Recommended Gateway

Razorpay is recommended for AnnaPay due to its strong support for bulk payouts (Razorpay Payouts API), sandbox environment for testing, detailed webhook support, and wide adoption in Indian financial institutions. PayU or Cashfree are viable alternatives if Razorpay is unavailable.

### 9.2 Integration Flow

```
Step 1 → Administrator initiates salary run for a given month
Step 2 → Backend computes net payable amount for each employee using
         salary_grades, leave_records, and tax_policies
Step 3 → Razorpay Payout API called with employee bank account, IFSC, amount, and reference ID
Step 4 → Razorpay processes the transfer and calls AnnaPay's webhook endpoint
Step 5 → Webhook handler verifies HMAC-SHA256 signature, updates
         salary_records.payment_status = success/failure
Step 6 → On success — NS-01 salary notification dispatched via RabbitMQ
Step 7 → On failure — Admin notified; retry scheduled or manual intervention
```

### 9.3 Security for Payment

- Razorpay API keys stored in environment variables, never in source code
- Webhook signature verified using HMAC-SHA256 before processing any event
- Bank account and IFSC stored encrypted at rest (AES-256 via Node.js crypto)
- All payment API calls made over HTTPS only
- Payment logs retained for 7 years for compliance
- Duplicate webhook protection — duplicate processing skipped with `200 OK`

---

## 10. Administrator UI — Full Specification

### 10.1 Login & Access Control

The Admin Portal is completely separate from the Employee Portal — different URL, different authentication flow, and different JWT token scope. Two admin roles: **Superadmin** (full access) and **Payroll Admin** (restricted to payroll and notifications only).

### 10.2 Dashboard

- **Summary cards** — Total employees, active/inactive count, pending payments, failed notifications
- **Quick actions** — Upload Excel, Trigger Salary Run, View Notification Log
- **Activity feed** — Last 10 admin actions
- **Alert banner** — Shown when `annapay.dead` queue count > 0

### 10.3 Employee Management Module

- View all employees filterable by department, role, status
- Edit admin-only fields: salary grade, bank details, department, role
- Mark employee as departed: triggers archival and NS-06 notification
- View departed employee history including full salary and notification archive

### 10.4 Data Management Module

- Upload Excel files per department
- View upload history with status (success / partial / failed) and error report download
- Manually trigger experience increment check
- Download updated Excel post-payment

### 10.5 Payment Management Module

- Initiate salary run for a selected month
- View per-employee payment status for current and past months
- Retry failed payments individually or in bulk
- View gateway transaction logs

### 10.6 Notification Management Module

- View full notification log with filters: type, status, date range, employee
- Manually trigger any notification type for specific employees or all
- Configure scheduled notification times (month start time, reminder delay)
- View retry history and fallback trigger log
- Send custom notifications (message composed by admin)
- View RabbitMQ queue status via Management API (pending, processing, dead letter counts)

### 10.7 Tax & Deductions Module

- View and update tax slab configurations
- Trigger tax update notification (NS-05) to all employees after any change
- Configure leave deduction rules (e.g., salary per day = basic pay / 26 working days)

---

## 11. Employee UI — Full Specification

### 11.1 Login

Employees log in via Employee ID and password. On first login, they are prompted to set a password and confirm their language preference (English / Tamil).

### 11.2 Dashboard Overview

- **Salary summary card** — Current month gross, deductions, net pay
- **Leave balance** — Total leaves, taken, remaining
- **Notification bell** — Unread count badge
- **Quick links** — Salary History, Attendance, Annual Report

### 11.3 Salary Details & Visualisation

- **Monthly breakdown** — Basic Pay, DA, HRA, TA, Gross Pay, Tax, Leave Deduction, Net Pay
- **Bar chart** — Month-over-month net pay for last 6 months
- **Pie chart** — Current month gross pay components breakdown
- **Deduction display** — Salary deducted due to leave clearly shown with number of days and amount
- **Net pay** — Remaining salary after all deductions prominently displayed

### 11.4 Attendance & Leave

- **Monthly calendar** — Present (green), Absent (red), Leave (yellow), Holiday (grey)
- **Leave types** — Casual Leave, Medical Leave, Earned Leave, Loss of Pay
- **Leave balance** — Per type shown

### 11.5 Notification History

- Full list of all notifications with date, type, and read/unread status
- Mark as read on open; bulk mark all as read option
- Filter by type and date
- Reminder notifications linked back to original notification

### 11.6 Profile

| Field | Access |
|---|---|
| Phone number, Personal email, Home address, Language preference | Editable by employee |
| Employee ID, Department, Role, Bank Account, Salary Grade | View-only (admin-managed) |

### 11.7 Annual Report

- Downloadable PDF with month-wise salary, total gross, deductions, tax, net earnings
- Tax summary for the financial year
- Sent automatically at year end; also available on-demand

### 11.8 AI Insights Panel (Phase 2)

- Predicted annual tax based on current salary trend
- Salary growth trend over past 12 months
- Anomaly alert if current month deduction is unusually high (>20% above 3-month average)
- Displayed as `'Coming Soon'` placeholder in current sprint

---

## 12. Technology Stack — Complete Justification

### 12.1 Frontend Technologies

| Technology | Version/Detail | Purpose & Justification |
|---|---|---|
| Angular | 17+ (Non-Standalone) | Component-based SPA; TypeScript support; Angular Material UI |
| TypeScript | Latest stable | Strongly typed; catches errors at compile time |
| HTML5 + CSS3 | Standard | Markup and styling for all screens |
| Bootstrap | 5.x | Responsive UI layout |
| Angular Router | Built-in | Navigation between portals/modules |
| Angular FormsModule | Built-in | Template-driven forms (login, profile, upload, triggers) |
| HttpClientModule | Built-in | REST API communication |

### 12.2 Backend Technologies

| Technology | Version/Detail | Purpose & Justification |
|---|---|---|
| Node.js | LTS (20.x) | Non-blocking I/O; ideal for concurrent API calls and scheduling |
| Express.js | 4.x | Minimal web framework with rich middleware ecosystem |
| node-cron | Latest | Lightweight in-process cron scheduler; no external dependency |
| Nodemailer | Latest | Industry-standard email for Node.js; HTML template support |
| Firebase Cloud Messaging (FCM) | Admin SDK | Free, reliable push notifications; supports web push for Angular PWA |
| Multer | Latest | Stream-based file upload for Excel |
| SheetJS (xlsx) | Latest | Comprehensive Excel parsing and write-back for Node.js |
| Sequelize ORM | 6.x | MySQL modeling, migrations, parameterized queries |
| JWT + bcrypt | Latest | Stateless auth; bcrypt hashing (salt rounds: 12) |
| express-validator | Latest | Input validation middleware |
| Helmet.js | Latest | Security headers (CSP, HSTS, X-Frame-Options) |
| express-rate-limit | Latest | 100 requests / 15 min / IP |

### 12.3 Message Queue — RabbitMQ

| Component | Detail |
|---|---|
| RabbitMQ Version | 3.12+ |
| Exchange | `annapay.notifications` (topic exchange) |
| Queues | `annapay.critical`, `annapay.high`, `annapay.normal`, `annapay.retry.*`, `annapay.sms_fallback`, `annapay.dead` |
| Message Persistence | `delivery_mode=2` (persisted to disk, survives restart) |
| Retry TTLs | Critical: 15 min \| High: 1 hr \| Normal: 3 hrs |
| Dead-Letter Exchange | Auto-routes expired retry messages back to queue |
| Client Library | `amqplib` (Node.js AMQP client) |

### 12.4 Database Technologies

| Technology | Detail | Purpose |
|---|---|---|
| MySQL | 8.0 | Relational model for structured payroll data; strong ACID guarantees for financial records |
| Sequelize ORM | 6.x | Modeling, migrations, parameterized queries |
| Excel (.xlsx) | SheetJS | Source of truth for employee records; written back after payment |

### 12.5 SMS Fallback

| | Detail |
|---|---|
| Primary SMS | MSG91 — preferred for India, lower cost, Tamil Unicode, DLT compliant |
| Fallback SMS | Twilio — global fallback if MSG91 unavailable |
| When Triggered | Only after 3 failed In-App + Email attempts |

### 12.6 Payment Gateway

| | Detail |
|---|---|
| Primary Gateway | Razorpay Payouts API |
| Alternatives | PayU, Cashfree |
| Webhook Security | HMAC-SHA256 signature verification |
| Bank Data Encryption | AES-256 via Node.js crypto module |
| Compliance | Payment logs retained 7 years; all calls over HTTPS |

### 12.7 DevOps & Deployment Tools

| Technology | Purpose |
|---|---|
| Docker | Containerization of Node.js backend and RabbitMQ |
| Docker Hub | Docker image repository |
| Git & GitHub | Version control and CI/CD pipeline |
| VS Code | Primary development IDE |
| Postman | API testing for all REST endpoints |
| PM2 | Node.js production process manager; clustering |
| AWS EC2 / Railway | EC2 (t3.medium) for production; Railway for fast deploy |
| AWS RDS MySQL 8.0 | Managed MySQL with automated backups (7-day retention) |
| AWS S3 + CloudFront | Static Angular hosting; Excel and PDF file storage |
| GitHub Actions | CI/CD: lint → tests → build → staging → production |

### 12.8 Security & Authentication

| Technology / Practice | Detail |
|---|---|
| JWT | Access token: 1hr \| Refresh token: 7 days. Separate scopes for admin and employee |
| bcrypt | Password hashing; salt rounds: 12 |
| RBAC | Admin vs Employee scopes; Superadmin vs Payroll Admin roles |
| HTTPS | TLS 1.2+; HTTP redirected to HTTPS |
| AES-256 Encryption | Bank account numbers and IFSC codes at rest |
| Brute Force Protection | Account locked after 5 failed logins (15 min) |
| SQL Injection Prevention | Sequelize ORM parameterized queries |
| XSS Prevention | Angular built-in sanitization |
| API Token Validation | All endpoints except /auth require Bearer JWT |

---

## 13. API Design

All APIs follow REST conventions. Base URL: `/api/v1/`
All endpoints except `/auth` require a valid JWT in `Authorization: Bearer` header.
Admin-only endpoints validate `token scope=admin`. Cross-scope access → `403`.

### 13.1 Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/admin/login` | Admin login. Returns JWT with admin scope. |
| POST | `/auth/employee/login` | Employee login. Returns JWT with employee scope. |
| POST | `/auth/logout` | Invalidates token (token blocklist). |
| PUT | `/auth/change-password` | Employee changes their own password. |

### 13.2 Employee APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/employees` | [Admin] List all employees with filters. |
| GET | `/employees/:id` | Get single employee profile. |
| PUT | `/employees/:id` | [Admin] Update admin-only fields (grade, bank, dept, role). |
| PUT | `/employees/:id/profile` | [Employee] Update own editable fields (phone, address, language pref). |
| POST | `/employees/:id/depart` | [Admin] Mark as departed; triggers archival and NS-06. |
| GET | `/employees/:id/history` | [Admin] Get departed employee salary history. |

### 13.3 Salary & Payment APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/salary/run` | [Admin] Trigger salary run for a month. |
| GET | `/salary/:empId/:month/:year` | Get salary record for specific month. |
| GET | `/salary/:empId/history` | Get 12-month salary history. |
| GET | `/salary/:empId/annual-report` | Get annual salary and tax report. |
| POST | `/payments/webhook` | Razorpay webhook — verified by HMAC-SHA256 signature. |

### 13.4 Notification APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notifications/:empId` | Get all notifications for employee (ordered by date desc). |
| PUT | `/notifications/:id/read` | Mark a notification as read. |
| POST | `/notifications/send` | [Admin] Manually trigger notification. |
| GET | `/notifications/log` | [Admin] Full notification log with filters. |
| GET | `/notifications/:id/retry-log` | [Admin] View retry history for a specific notification. |
| GET | `/notifications/queue-status` | [Admin] View RabbitMQ queue counts. |

---

## 14. Security

### 14.1 Authentication & Authorization

- JWT tokens: access token 1 hour, refresh token 7 days
- Separate token scopes for admin and employee — cross-scope returns 403
- Passwords hashed with bcrypt (salt rounds: 12)
- Brute force protection: account locked after 5 failed logins for 15 minutes
- Two admin roles: Superadmin (full access) and Payroll Admin (restricted)

### 14.2 Data Security

- Bank account numbers and IFSC codes encrypted at rest (AES-256)
- All API communication over HTTPS (TLS 1.2+); HTTP redirected to HTTPS
- Environment variables for all secrets — never hardcoded in source code
- MySQL connection uses SSL if hosted on cloud

### 14.3 Input Validation & Injection Prevention

- All API inputs validated using express-validator before processing
- Sequelize ORM prevents SQL injection via parameterized queries
- Excel file upload: MIME type validated (`application/vnd.openxmlformats` only), max file size 10MB enforced
- Angular templates use built-in sanitization

### 14.4 API Security

- Rate limiting: 100 requests per 15 minutes per IP (express-rate-limit)
- CORS configured to allow only the Angular frontend origin
- Helmet.js for security headers (X-Frame-Options, CSP, HSTS)
- Razorpay webhook verifies HMAC-SHA256 signature before any processing

### 14.5 Audit Trail

Every data modification — salary update, employee departure, tax change, notification trigger — is logged to the `audit_log` table with the action, table affected, record ID, who performed it, timestamp, old value, and new value. This log is read-only for all portal users and retained for 7 years.

- One staff must never see another staff's notification (JWT + EID validation)
- Payslip links must be secure and user-specific
- No full bank account details exposed in any notification or API response

---

## 15. Deployment

### 15.1 Recommended Architecture

| Component | Technology |
|---|---|
| Frontend (Angular) | AWS S3 + CloudFront CDN or Vercel — `ng build --configuration production` |
| Backend (Node.js) | AWS EC2 (t3.medium) or Railway — managed with PM2: `pm2 start server.js --name annapay` |
| RabbitMQ | Docker container on EC2 or CloudAMQP managed service |
| Database (MySQL) | AWS RDS MySQL 8.0; automated backups (7-day retention) |
| File Storage | AWS S3 bucket; private, accessed via signed URLs |

### 15.2 Environment Configuration

All environments (dev, staging, prod) use `.env` files loaded by dotenv. Never commit `.env` to version control.

| Variable | Description |
|---|---|
| `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` | MySQL database connection |
| `JWT_SECRET` | Secret key for JWT token signing |
| `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` | Razorpay API credentials |
| `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` | Email SMTP configuration |
| `FCM_SERVER_KEY` | Firebase Cloud Messaging server key |
| `MSG91_API_KEY` | MSG91 SMS gateway API key |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` | Twilio SMS fallback credentials |
| `RABBITMQ_URL` | RabbitMQ connection URL |
| `CRON_MONTHLY_TIME` | Monthly salary cron (default: `0 9 1 * *`) |
| `CRON_REMINDER_DELAY_HOURS` | Hours before unread reminder (default: 48) |
| `MAX_NOTIFICATION_RETRIES` | Max retries before SMS fallback (default: 3) |
| `ENCRYPTION_KEY` | AES-256 key for encrypting bank account data |

### 15.3 CI/CD Pipeline (GitHub Actions)

| Stage | Action |
|---|---|
| Stage 1 — Lint | ESLint for TypeScript code quality |
| Stage 2 — Unit Tests | Jest for all service modules |
| Stage 3 — Integration Tests | Supertest for API endpoints |
| Stage 4 — Build | `ng build` (Angular) + `tsc` compile (Node.js) |
| Stage 5 — Deploy to Staging | Automatic on PR merge to develop branch |
| Stage 6 — Manual Approval | Human gate before production deploy |
| Stage 7 — Deploy to Prod | On approval; Sequelize migrations run automatically |

### 15.4 Monitoring

- PM2 dashboard for process health on EC2
- AWS CloudWatch for EC2 and RDS metrics
- Winston logging — info, warn, error levels — shipped to CloudWatch/Logtail
- Notification failure rate monitored; alert if failure rate exceeds 5%/hour
- RabbitMQ Management API polled for dead-letter queue count; Admin Portal shows alert banner

---

## 16. QA / Test Strategy

Since payroll information is highly sensitive financial data, the notification system must be tested for functionality, accuracy, privacy, performance, and failure handling. Testing follows a **Risk-Based** approach focusing on:

- Accuracy of salary and deduction data
- Correct recipient delivery
- Prevention of duplicate notifications
- Performance during bulk payroll processing
- Security and data privacy compliance
- Failure handling and retry mechanisms

### 16.1 Unit Tests

| TC-ID | Test Case | Module |
|---|---|---|
| UT-01 | Salary calc — professor with 5yr experience → correct grade pay and increment applied | Salary Engine |
| UT-02 | Salary calc — blue-collar worker with 3 leave days → 3 days deducted at daily rate; correct net pay returned | Salary Engine |
| UT-03 | Notification formatted with name, EID, message → output matches defined format exactly | Notification |
| UT-04 | language_preference=Tamil → message_ta used; English not sent | Notification |
| UT-05 | Failed delivery → retry_count incremented; status remains failed | Notification |
| UT-06 | retry_count reaches 3 → SMS fallback triggered; admin alert created | Notification |
| UT-07 | bcrypt password hash validated → valid returns true; wrong returns false | Auth |
| UT-08 | JWT with employee scope on admin endpoint → 403 Forbidden returned | Auth |
| UT-09 | Excel row missing bank account → row rejected; error in report | Data Ingestion |
| UT-10 | Experience milestone 5yr detected → increment record created; notification triggered | Increment Logic |
| UT-11 | Notification with status=sent reprocessed → worker ACKs immediately without resending (idempotency) | RabbitMQ Worker |
| UT-12 | NACK on delivery failure → message appears in annapay.retry.{priority} | RabbitMQ Worker |
| UT-13 | Stale FCM token (registration-not-found) → token cleared; notification not failed | Notification |
| UT-14 | Tamil template missing → fallback to English; language_fallback=true logged | Notification |
| UT-15 | Unread reminder → only ONE entry in notification_reminders per notif_id | Reminder Scheduler |

### 16.2 Integration Tests

| IT-ID | Test Case | Validation Points |
|---|---|---|
| IT-01 | Upload Excel → employees created/updated with correct salary grade | DB records match Excel rows; salary_grade correctly mapped |
| IT-02 | Trigger salary run → Razorpay API called with correct amount | Called with correct account, IFSC, net_pay per employee |
| IT-03 | Razorpay webhook success → salary record updated and notification created in DB | payment_status=success; notification status=pending created |
| IT-04 | Mark employee departed → archival, portal revoked, notification sent | departed_employees record; status=inactive; NS-06 sent |
| IT-05 | Tax policy updated → all active employees receive NS-05 | One NS-05 per active employee; all to annapay.critical |
| IT-06 | Cron fires on 1st → salary notifications created for all | NS-01 per active employee; idempotency prevents double-send |
| IT-07 | End-to-end RabbitMQ: event published → worker consumes → email sent → DB updated | No data loss; status=sent; sent_at populated; channel=in_app+email |
| IT-08 | Failed notification retried 3 times → SMS fallback → admin alert | retry_count=3; annapay.sms_fallback consumed; alert in portal |

### 16.3 End-to-End Tests

| E2E-ID | Scenario |
|---|---|
| E2E-01 | Admin logs in → uploads Excel → triggers salary run → confirms notification sent to all employees |
| E2E-02 | Employee logs in → views salary breakdown chart → reads salary-credited notification → marks as read |
| E2E-03 | Admin marks professor as departed → system archives data → final NS-06 notification sent → portal access revoked |
| E2E-04 | Notification fails → retried 3 times via RabbitMQ retry queues → SMS fallback sent → admin sees alert in portal |
| E2E-05 | Employee sets language to Tamil → receives next salary notification in Tamil (message_ta used) |
| E2E-06 | Employee does not open notification for 48 hours → daily cron detects → reminder NS-07 sent once |
| E2E-07 | Admin triggers bulk notification for 2000 staff → all receive notification → no duplicates → no server crash |

### 16.4 Performance & Scalability Testing

**Critical Scenario: Payroll Day (Peak Load)**

- Simulate 2000+ staff records with bulk notification trigger
- Measure: response time, memory usage, API throughput, delivery time
- Expected: No server crash, no delayed notifications beyond 5 minutes, no duplicate messages, system remains responsive
- QA Recommendation: Use RabbitMQ's priority-isolated queues and worker prefetch settings to prevent overload. Consider horizontal scaling of worker processes on peak days.

### 16.5 Security & Privacy Testing

- No full bank account details exposed in any notification or API response
- Authentication required for viewing notification history
- RBAC validated: Admin vs Staff access enforced at API level (JWT scope)
- SQL injection attempts on all API inputs — verify Sequelize blocks them
- CORS — requests from non-Angular origin rejected
- One staff must never see another staff's notification (EID filtering)
- Payslip links must be user-specific — unauthorized access returns 403

### 16.6 Negative & Failure Testing

| Scenario | Expected Behaviour |
|---|---|
| Invalid email for employee | Email marked failed; retry; SMS fallback after 3 fails |
| SMS gateway failure | Failure logged; admin notified; no system crash |
| Duplicate payroll trigger | Idempotency prevents duplicate notification (emp_id + month + type) |
| Network timeout during send | NACK to RabbitMQ; retried from retry queue after TTL delay |
| DB connection failure during dispatch | Worker logs error; message stays in queue; re-attempted after recovery |
| Cron restarts and fires again on 1st | Idempotency skips already-sent notifications for current month |
| Excel with wrong column names | Full file rejected with detailed error report; no partial ingestion |
| Employee has no bank account linked | Salary record created; payment skipped; admin notified; status=payment_pending |
| Bulk trigger pressed twice | Duplicate protection prevents double send; admin warned |
| RabbitMQ broker restart mid-send | Persistent messages survive; workers re-consume and process |

### 16.7 Risk Identification (QA Perspective)

| Risk | Impact | Mitigation |
|---|---|---|
| Incorrect salary amount in notification | High | DB cross-verification before publish; automated validation scripts |
| Notification sent to wrong employee | Critical | Strict EID validation; unique mapping verification in worker idempotency |
| Duplicate notifications | Medium | Idempotency check by notif_id before send; event uniqueness validation |
| Gateway failure during bulk send | Medium | RabbitMQ retry queues; fallback SMS; admin alert |
| RabbitMQ broker crash | High | Persistent queues (delivery_mode=2); durable declarations; ACK/NACK |
| Tamil template missing | Low | Auto fallback to English; language_fallback flag logged |

### 16.8 Logging & Audit Validation

All notifications must log the following in the notifications table:

- Staff ID (emp_id)
- Notification Type
- Channel (In-App / Email / SMS)
- Timestamps (created_at, sent_at)
- Delivery Status (pending / sent / failed / read)
- retry_count
- Error message (if any)
- language_fallback flag

Audit logs in `audit_log` must not be editable by staff. Retained 7 years.

### 16.9 Requirement Traceability Matrix (RTM)

| User Story | Test Case IDs | Status |
|---|---|---|
| US-01 Salary Credited Notif | UT-03, UT-05, UT-06, IT-03, E2E-01, E2E-04 | Planned |
| US-02 Payslip Available Alert | UT-03, IT-07, E2E-02 | Planned |
| US-03 Deduction Notification | UT-02, UT-03, IT-05 | Planned |
| US-04 Admin Bulk Trigger | IT-05, IT-06, E2E-07, Perf Test | Planned |
| US-05 Notification History | E2E-02, Security Test | Planned |
| US-06 Language Preference | UT-04, UT-14, E2E-05 | Planned |
| US-09 Departed Employee | IT-04, E2E-03 | Planned |
| US-10 Retry & Fallback | UT-05, UT-06, UT-11, UT-12, IT-08, E2E-04 | Planned |
| US-11 Unread Reminder | UT-15, E2E-06 | Planned |
| US-19 Bilingual Support | UT-04, UT-14, E2E-05 | Planned |

### 16.10 Sprint Zero QA Success Criteria

Sprint Zero will be considered QA-ready when:

- All critical user stories (US-01 to US-04) validated with no open High-Severity defects
- Bulk notification tested successfully for 2000+ staff records
- Security validation completed (RBAC, encryption, injection prevention)
- Retry and SMS fallback scenarios validated end-to-end via RabbitMQ
- Audit logging confirmed for all notification events
- Requirement Traceability Matrix prepared and signed off
- Idempotency tested: no duplicate notifications in any scenario

---

## 17. Edge Cases & Error Handling

| Edge Case / Error Scenario | Handling Strategy |
|---|---|
| Employee has no bank account linked at salary run time | Salary record created but payment skipped; admin notified; status = payment_pending |
| Same Employee ID in two department Excel files | Second upload rejected for that row; admin shown conflict warning with existing department |
| Salary run triggered for an already processed month | System detects existing salary_records for that month; admin warned; re-run requires explicit confirmation |
| Employee email bounces | Email marked failed; retry via RabbitMQ; SMS fallback after 3 attempts; admin notified |
| Cron restarts and fires again on 1st | Idempotency: notifications already sent for current month are skipped (emp_id + month + type) |
| Tamil notification template missing | System falls back to English; logs language_fallback=true; admin alerted |
| Razorpay webhook received more than once for same payment | Handler checks for existing processed record; duplicate skipped with 200 OK |
| Employee has 0 leave days deducted | Leave deduction notification NOT sent (no event to notify about) |
| Excel uploaded with wrong column names or format | Full file rejected with detailed error report; no partial ingestion |
| Employee account locked after 5 failed logins | Account locked for 15 minutes; unlock requires wait or admin reset |
| Annual report generation fails for one employee | Report for that employee marked failed; rest generated normally; admin shows partial failure list |
| Salary grade for a role not found in salary_grades table | Ingestion proceeds; salary_grade=NULL; admin alerted to configure before run |
| RabbitMQ broker unavailable when notification needs publishing | API returns error; notification row created status=pending in DB; manual re-trigger available in admin panel |
| FCM token is stale (registration-not-found) | Stale token cleared from employees table; notification continues via email |
| Bulk send trigger pressed twice within seconds | Second trigger detects active bulk send in progress; rejected with conflict error; admin warned |

---

## 18. Business Analysis — Stakeholders, Requirements & Bridge

### 18.1 Stakeholders Identified

- **University Admin / HR / Finance** — trigger payroll, manage staff records, send bulk notifications
- **Staff Members (Professors, Non-Teaching Staff)** — receive salary, deduction, and payslip notifications
- **IT/Tech Team** — maintain the system, manage infrastructure

### 18.2 Key Requirements Gathered

- Staff must be notified when salary is credited
- Staff must be notified when payslip is available
- Staff must be notified about any deductions in salary
- HR/Admin must be able to trigger bulk notifications after payroll
- Staff must be able to view their past notification history
- Notifications should support English (Tamil in future sprint)

### 18.3 Requirement Feasibility & Priority

| Requirement | Feasibility | Priority |
|---|---|---|
| Salary credited notification | High | Critical |
| Payslip available alert | High | High |
| Deduction/tax details notification | High | High |
| Admin bulk notification trigger | High | High |
| Notification history for staff | Medium | Medium |
| Multi-language support (Tamil) | Low | Future Sprint |

### 18.4 Business Need ↔ Tech Solution Bridge

<details>
<summary><strong>US-01 — Staff notified moment salary is credited</strong></summary>

- **BA Need** — Staff should know the moment salary is credited to their bank without manually checking
- **Developer** — Node.js consumes Razorpay webhook, publishes to RabbitMQ `annapay.critical`; worker dispatches via FCM + Nodemailer; Angular shows real-time notification
- **Tester** — Verify notification received within 5 minutes after credit trigger; net amount matches DB
</details>

<details>
<summary><strong>US-02 — Staff knows when payslip is ready</strong></summary>

- **BA Need** — Staff should be immediately informed when payslip is available
- **Developer** — Node.js sends notification with payslip reference when generated; Angular renders link in notification panel
- **Tester** — Check if reference works and notification reaches correct staff only
</details>

<details>
<summary><strong>US-03 — Staff aware of any salary deductions</strong></summary>

- **BA Need** — Staff should be clearly informed about deductions with type and amount
- **Developer** — Node.js fetches deduction data from MySQL, includes in notification payload via RabbitMQ; Angular displays summary
- **Tester** — Verify deduction details in notification match actual payroll data in MySQL
</details>

<details>
<summary><strong>US-04 — HR notifies all staff at once after payroll</strong></summary>

- **BA Need** — HR should be able to send notifications to all 2000+ staff in one action with no manual effort
- **Developer** — Angular admin panel has trigger button; Node.js publishes one message per employee to RabbitMQ; workers handle bulk
- **Tester** — Test bulk send with 2000+ user accounts; check no one missed; verify idempotency
</details>

<details>
<summary><strong>US-05 — Staff views past notifications</strong></summary>

- **BA Need** — Staff should have a record of all payroll notifications received for reference
- **Developer** — Node.js stores every notification in MySQL notifications table; Angular fetches and displays history ordered by date
- **Tester** — Verify history accurate, ordered by date, loads correctly
</details>

<details>
<summary><strong>US-06 — All notifications in English for current sprint</strong></summary>

- **BA Need** — All staff should be able to read and understand notifications
- **Developer** — All notification templates authored in English (message_en); Tamil support deferred
- **Tester** — Verify all notifications delivered in English correctly
</details>

---

## 19. Current Limitations (Sprint Zero Scope)

As we are following Agile process, the current sprint has the following limitations:

> **Tamil Language Not Supported** — Current sprint supports English only. Tamil and other regional languages deferred to future sprint.

> **Notification Channels Limited** — Currently supporting In-App, Email, and SMS fallback only. WhatsApp or other platforms not included.

> **No Real-time Two-way Communication** — Staff can only receive notifications, not reply or raise queries through the notification system.

> **No Analytics Dashboard** — Admin cannot currently view notification delivery reports or success/failure rates.

> **Manual Payroll Trigger Dependency** — Any delay in payroll processing will delay notifications.

> **AI Insights** — Phase 2 only; displayed as `'Coming Soon'` placeholder in current sprint.

---

## 20. Future Scope

In future sprints, the following features can be added:

- **WhatsApp Notification Support** — Integrate WhatsApp Business API for salary alerts directly to staff WhatsApp numbers
- **More Language Support** — Tamil, Hindi, and other regional languages based on staff requirements
- **Analytics Dashboard for Admin** — View notifications sent, delivered, failed, and opened with detailed reports
- **Two-way Notification (Query System)** — Staff can reply to a notification to raise a query directly to HR
- **Scheduled Notification Reminders** — Reminders if staff has not viewed payslip within a configurable number of days
- **Smart Notification Preferences** — Staff choose which notifications they want to receive and through which channel
- **Integration with More Payroll Systems** — Extend support to other university payroll or ERP systems
- **Notification Templates Management** — Admin can create and manage custom notification message templates without developer help
- **AI-Based Salary Insights (Phase 2)** — Predicted annual tax, salary growth trends, anomaly detection via OpenAI API or Python microservice
- **RabbitMQ Priority Queues** — Use native RabbitMQ priority queues instead of separate topic-based queues

---

## 21. Overall System Flow

| Step | Who / What | Action |
|---|---|---|
| 1 | HR/Admin | Logs into Admin Portal; uploads department Excel file |
| 2 | Node.js Backend | Parses, validates, and upserts employee data into MySQL |
| 3 | HR/Admin | Initiates salary run for the month |
| 4 | Node.js Payroll Engine | Computes net salary for each employee using salary_grades, leave_records, tax_policies |
| 5 | Razorpay Payouts API | Transfers net salary to employee's linked bank account |
| 6 | Razorpay Webhook | Sends payment success/failure event to AnnaPay webhook endpoint |
| 7 | Node.js Webhook Handler | Verifies HMAC-SHA256 signature; updates salary_records; creates notification row in DB (status=pending) |
| 8 | RabbitMQ Publisher | Publishes notification message to `annapay.notifications` exchange with routing key `notification.critical.salary_credited` |
| 9 | RabbitMQ Worker | Consumes message; performs idempotency check; renders template; applies language preference |
| 10 | FCM + Nodemailer | Dispatches In-App push and Email notification to employee |
| 11 | MySQL | Updates notification status=sent; logs sent_at and channel |
| 12 | Angular Employee Portal | Displays notification in employee's notification bell and history |
| 13 | Employee | Views notification; status updated to 'read' |
| 14 | node-cron (Daily) | Checks for unread notifications older than 48 hours; creates reminder notifications (NS-07) |
| 15 | Tester | Validates each step above per the RTM and test case IDs |

---

## 22. Team Roles

| Role | Name | GitHub |
|------|------|--------|
| Business Analyst | Sukesh M R | [@Sukesh1103](https://github.com/Sukesh1103) |
| Scrum Master | Kamalasree S | [@kamalasree234](https://github.com/kamalasree234) |
| Developer | Harish Subramanian | [@hari1763sky](https://github.com/hari1763sky) |
| Tester | Ramya S | [@Ramya0888](https://github.com/Ramya0888) |

---

## 23. Glossary

| Term | Definition |
|---|---|
| EID | Employee ID — unique identifier assigned to each employee (e.g., COL-2041) |
| DA | Dearness Allowance — percentage of basic pay added to compensate for cost of living |
| HRA | House Rent Allowance — allowance based on city and pay grade |
| TA | Travel Allowance — fixed monthly amount for commuting |
| Grade Pay | Additional pay component based on the employee's pay grade level |
| Net Pay | Gross Pay minus all deductions (tax, leave deduction, etc.) |
| CTC | Cost to Company — total annual salary package including all components |
| DLT | Distributed Ledger Technology — TRAI's system for SMS template registration in India. Required for transactional SMS. |
| FCM | Firebase Cloud Messaging — Google's service for delivering push notifications |
| HMAC-SHA256 | Hash-based Message Authentication Code using SHA-256. Used to verify Razorpay webhook authenticity. |
| JWT | JSON Web Token — compact, self-contained token for secure API authentication |
| ORM | Object-Relational Mapper — library (e.g., Sequelize) that maps database tables to code objects |
| PM2 | Process Manager 2 — Node.js production process manager for keeping the server alive |
| Webhook | HTTP callback — Razorpay calls AnnaPay's webhook URL when a payment event occurs |
| Idempotency | The property of an operation that produces the same result whether executed once or multiple times — critical for payment and notification deduplication |
| RBAC | Role-Based Access Control — restricts system access based on user roles (Superadmin, Payroll Admin, Employee) |
| ACK / NACK | RabbitMQ Acknowledgement / Negative Acknowledgement — ACK removes message from queue; NACK routes it to retry queue |
| Dead-Letter Exchange (DLX) | RabbitMQ mechanism that routes messages to a dead-letter queue when they expire or are NACKed |
| TTL | Time-To-Live — duration a message waits in the retry queue before being re-routed to the processing queue |
| AES-256 | Advanced Encryption Standard with 256-bit key — used to encrypt bank account details at rest |

---

<div align="center">
  <sub>Built with ❤️ for Anna University Campus — AnnaPay Sprint Zero</sub>
</div>
