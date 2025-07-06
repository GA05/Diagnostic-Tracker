# Diagnostic Ticketing Tracker

This project is a modern, AI-powered web application for logging and managing support tickets. It's designed to streamline the process of creating and tracking issues by using natural language processing to automatically categorize and prioritize tasks.

The application features two main views: a **Tracker** for managing individual tickets and a **Dashboard** for visualizing key performance metrics.

---

## Key Features

- **🤖 AI-Powered Ticket Creation**: Simply describe an issue in plain English (e.g., "The main login page is down, this is critical!"). The integrated Google Gemini API will analyze the text to automatically:
  - Extract the issue's description.
  - Assign a priority level (`Low`, `Medium`, `High`, `Critical`).
  - Route it to the appropriate team (`Frontend`, `Backend`, `DevOps`, etc.).

- **📋 Interactive Ticket Table**:
  - View all tickets in a clean, organized table.
  - Update ticket **status** and **priority** on the fly using interactive dropdowns.
  - Delete tickets with a single click.
  - See how long ago each ticket was created with a relative timestamp.

- **📊 Analytics Dashboard**:
  - Get a high-level overview of support operations.
  - **Metric Cards** display key stats: New tickets this week, resolved tickets this week, average resolution time, and total open tickets.
  - A **Weekly Activity Chart** visualizes the number of tickets created versus resolved each day over the past week.

- **✨ Modern & Responsive UI**:
  - Built with **React** and styled with **Tailwind CSS** for a sleek, responsive, and dark-themed interface that looks great on any device.
  - Uses vector icons for a sharp and clean appearance.

---

## How to Use

1.  **Navigate the App**: Use the **Tracker** and **Dashboard** buttons in the header to switch between views.

2.  **Create a Ticket (Tracker View)**:
    - In the input field at the top, type a description of the problem.
    - Click the **"Create with AI"** button. The app will send your text to the Gemini API, and a new, fully categorized ticket will appear at the top of the table.

3.  **Manage Tickets (Tracker View)**:
    - Click the dropdowns in the **Status** or **Priority** columns to update a ticket. Changes are saved instantly.
    - Click the trash can icon to delete a ticket.

4.  **View Analytics (Dashboard View)**:
    - Switch to the dashboard to see real-time metrics and charts that provide insight into your team's workload and performance.

---

## Technology Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **AI / Natural Language Processing**: Google Gemini API (`@google/genai`)
- **Charting**: Recharts
- **Icons**: Custom SVG icons
