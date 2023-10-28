# Dynamic Work Allocation Algorithm

## Table of Contents
- [Team Members](#Team-Members)
- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Planned Future Improvements](#planned-future-improvements)
- [Demo Video](#demo-video)
- [Microtasks and Progress Bars](#microtasks-and-progress-bars)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating Tasks](#creating-tasks)
  - [Task Assignment](#task-assignment)
- [License](#license)

## Team Members
- [Adithya Ajay](https://github.com/adithyanajay)
- [Harigovind M G](https://github.com/HarigovindM-G)
- [Treesa George](https://github.com/tresanotfound)


## Introduction
This project is a web-based application aimed at solving the problem of optimizing task assignment within a software development team. It employs a dynamic work allocation algorithm that considers various factors, including team members' skills, availability, and workload. The application is built using React.js and provides a dashboard for managers to create and manage tasks efficiently.

## Features
- Dashboard for task management and assignment.
- Task creation with due dates and other relevant details.
- Automatic suggestion of suitable team members based on tags.
- Consideration of team members' current workloads.
- Color Indication for works (Red for hard ones , blue for medium level difficulties ,green for simple works )
- Microtasks and Progress Bars for detailed task tracking. (Not fully developed as it is a prototype version)

## Planned Future Improvements
The project is in its prototype stage, and there are several areas for improvement:
- Improvements to enhance task assignment accuracy (Now we are using tags, we are planning to use a better algorithm to find the best person suited for the job).
- We are also planning to create a User Login for the final product so that user can access user dashboard and view all the works assigned to them and complete microtasks from there, inturn resulting in the completion of the work 
- Custom User creation , now we are working on a sample data of users which are stored in the file ' src/constants/index.js'


## Screenshots
<img width="1431" alt="Screenshot 2023-10-27 at 9 53 39 PM" src="https://github.com/adithyanajay/Work-allocator/assets/71365202/c11d7aef-7be2-40b1-8c93-e6879f20be67">
<img width="1440" alt="Screenshot 2023-10-27 at 9 52 32 PM" src="https://github.com/adithyanajay/Work-allocator/assets/71365202/a483dc6c-2abf-4651-84bb-0807a59a34c9">
<img width="1439" alt="Screenshot 2023-10-28 at 9 22 22 PM" src="https://github.com/adithyanajay/Work-allocator/assets/71365202/5f924910-6fe1-4534-9aec-adfdb8519dbd">


## Demo Video
https://youtu.be/uU02We54-fo

## Microtasks and Progress Bars
The project includes a feature for breaking down tasks into microtasks, allowing for better tracking and management. The progress of a task is displayed through a progress bar that reflects the completion of microtasks. For example, if a work has 10 microtasks and 6 are done, the progress bar will be filled to 60%.

### Using Microtasks
1. Log in as a manager or admin.
2. Navigate to the dashboard.
3. Click on a task to view its details.
4. In the task detail page, you can create, edit, and delete microtasks associated with the task.
5. Mark microtasks as completed as they are finished.

### Progress Bars
- The progress bar on the task detail page dynamically updates as you complete microtasks, providing a visual representation of the task's completion status.

## Getting Started
To run this project locally or deploy it on your server, follow these instructions.

### Prerequisites
- npm installed on your system.
- Basic understanding of React.js.

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/adithyanajay/Work-allocator
    ```
2. Navigate to the project directory:
    ```bash
   cd Work-allocator
   ```
3. Install project dependencies:
    ```bash
   npm install
   ```
3. Start Development server:
    ```bash
   npm run dev
   ```
4. Open your web browser and go to http://localhost:3000 to access the application.

## Usage
### Creating Tasks
- Navigate to the dashboard.
- Click on the "Add" button.
- Fill in the task details, including the task name, due date.
- Click "Submit" to create the task.

## Task Assignment
- After creating a task, the system will automatically suggest suitable team members based on tags.
- The manager can manually assign the task to a team member based on the suggestion or other criteria.
- The system considers the team member's current workload to ensure a fair distribution of tasks.


Feel free to ask if you have any questions or need further clarification on any part of the documentation.





