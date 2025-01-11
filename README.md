# Mini message board

A simple message board created with Node.js, Express and EJS. It's using PostgreSQL to store data.

## Features

- View all messages
- Add new messages
- View message details by ID

### Installation

To run the Mini message board app locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SilviuHg/message-board.git
   cd message-board
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up the Database**:

   - Create a PostgreSQL database.
   - Update the `.env` file with your database connection details:
     ```env
     PG_USER=your_postgresql_username
     ```

4. **Run Database Script to Seed Data**:

   ```bash
   node populatedb <local-db-url>
   ```

5. **Start the Application**:

   - By default, the application runs on port `3000`. If you want to specify a different port, set the `PORT` variable in your `.env` file:
     ```env
     PG_PORT=your_custom_port
     ```
   - To start the application, run:
     ```bash
     node app.js
     ```

6. **Visit the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser (replace `3000` with your custom port if applicable).
