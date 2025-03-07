# Scanning App

Welcome to the **Scanning App**! This is a full-stack web application that allows users to scan websites and retrieve essential metadata using **HTTPX**. The project consists of a **server (Node.js)** and a **React frontend UI**.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Setup the Server](#step-2-setup-the-server)
  - [Step 3: Install HTTPX CLI](#step-3-install-httpx-cli)
  - [Step 4: Setup the React UI](#step-4-setup-the-react-ui)
  - [Step 5: Run the Server and the UI](#step-5-run-the-server-and-the-ui)
- [Logs](#logs)
- [Notes](#notes)
- [Troubleshooting](#troubleshooting)
- [Summary of Commands](#summary-of-the-commands-to-run-the-app)

---

## Prerequisites

Ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (version 14 or later)
2. [Git](https://git-scm.com/)
3. [HTTPX CLI](https://github.com/projectdiscovery/httpx)

---

## Installation and Setup

### Step 1: Clone the Repository

Clone the project from GitHub:

```bash
 git clone https://github.com/YarinBenZimra/Scanning-App.git
```

Navigate into the project folder:

```bash
 cd Scanning-App
```

Inside the **Scanning-App** folder, you'll find two subfolders:

- `server` (backend)
- `scanning-app` (frontend UI)

---

### Step 2: Setup the Server

Navigate to the `server` folder:

```bash
 cd server
```

Install the required dependencies:

```bash
 npm install
```

#### Create a `.env` file:

1. In the `server` directory, create a `.env` file.
2. Add the following environment variables:

```bash
 PORT=5000
 NODE_ENV=development
```

---

### Step 3: Install HTTPX CLI

The **HTTPX CLI** is used to scan websites. Follow these steps to install it:

1. **Install Go**:
   HTTPX requires the latest version of _Go_ here you can find the [Installation Instructions](https://go.dev/doc/install)

2. **Installing httpx**:
   Once Go is installed, run the following command:

```bash
go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest
```

3. **Configure PATH (If Needed)**

- **Linux/macOS Users**: Add the Go binary path to your PATH:

```bash
echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc
source ~/.bashrc
```

- **Windows Users**: The binary is located at:

```bash
C:\Users\YourUsername\go\bin\httpx.exe
```

- Add this path to the system environment variables (PATH). [Follow this guide](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/).

4. **Installation Notes**

- httpx requires the latest version of Go
- To verify the installation, run:

```bash
httpx -version
```

---

### Step 4: Setup the React UI

Navigate back to the main project folder:

```bash
 cd ../scanning-app
```

Install dependencies:

```bash
 npm install
```

---

### Step 5: Run the Server and the UI

#### **Start the server:**

In the **server** folder, run:

```bash
 npm start
```

The server will start at: **[http://localhost:5000](http://localhost:5000)**

#### **Start the client:**

In a **new terminal window**, navigate to the `scanning-app` folder and run:

```bash
 npm start
```

The React UI will start at: **[http://localhost:3000](http://localhost:3000)**

---

## Logs

- **All server logs** (requests, errors) are saved in the `server/logs/` directory.
- You can check `logs.log` for general logs and `error.log` for errors.

---

## Notes

### Running Server and UI Simultaneously

Since the **server** and **client** are separate applications, you need two terminal windows:

- One for the **server**.
- One for the **client**.

### Environmental Variables

Ensure the `.env` file is correctly set up in the `server` folder.

---

## Troubleshooting

If the app doesn't start, check the following:

- **Ensure Node.js and npm are installed.** Run `node -v` and `npm -v` to verify.
- **Verify HTTPX is installed and in the PATH.** Run `httpx -version` to check.
- **Check logs for errors.** Navigate to `server/logs/` and review `error.log`.

---

## Summary of the Commands to Run the App

```bash
# Clone the repository
git clone https://github.com/YarinBenZimra/Scanning-App.git
cd Scanning-App

# Setup and run the server
cd server
npm install
echo "PORT=5000" > .env
echo "NODE_ENV=development" >> .env
npm start

# Open a new terminal - Navigate to the project folder and setup/run the frontend
cd ../scanning-app
npm install
npm start
```

---

**Enjoy scanning websites! 🚀**
