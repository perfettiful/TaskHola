<h1 align="center" style="font-size: 3em;">
    <img src="./taskhola-mobile/src/assets/images/Logo.png" alt="TaskHola Logo" width="250" >
</h1>

<span align="center">

![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)
![Docker](https://img.shields.io/badge/docker-ready-blue)

</span>

## Description

TaskHola is a simple task manager mobile application built with the Django REST Framework and Expo React Native framework. It allows users to create, retrieve, update, and delete tasks. The application is built using the following technologies:
- ![Docker](https://img.shields.io/badge/docker-0db7ed?logo=docker&logoColor=white) **Docker** for containerization
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white) **PostgreSQL** as the database
- ![Django](https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white) **Django REST Framework** for the backend RESTful API
- ![Expo](https://img.shields.io/badge/Expo-1B1F23?logo=expo&logoColor=white) **Expo** with React Native for a cross-platform mobile app
- ![Grafana](https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=white) **Grafana** for monitoring and database management


## Installation

### Prerequisites
- Docker and Docker Compose
- Node.js and npm
- Expo CLI
- EAS CLI
- iOS Simulator or Android Emulator

### React Native App Setup

0. **Clone the repository:**
   ```bash
   git clone https://github.com/perfettiful/TaskHola.git
   ```
   ```bash
   cd TaskHola/taskhola-mobile
   ```

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install EAS CLI:**
   ```bash
   npm install -g eas-cli
   ```

3. **Configure EAS:**
   ```bash
   eas build:configure
   ```

4. **Run the app:**
   ```bash
   npm run start:dev
   ```
5. **Run tests:**
   ```bash
   npm run test
   ```
6. **Create a Production Build:**
   ```bash
   npm run build
   ```

### Django Backend Setup with Docker

0. **Navigate to the backend directory:**
   ```bash
   cd TaskHola/taskhola-backend
   ```

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```
2. **Fill in Desired Credentials for .ENV Variables:**
   ```bash
      PROJECT_NAME=

      GRAFANA_CONTAINER_NAME=
      GRAFANA_PORT=3000
      GF_SECURITY_ADMIN_USER=
      GF_SECURITY_ADMIN_PASSWORD=

      POSTGRES_CONTAINER_NAME=
      POSTGRES_PORT=5432
      POSTGRES_USER=
      POSTGRES_PASSWORD=
      POSTGRES_DB=tasks_db
   ```

3. **Build and run the Docker container:**
   ```bash
   docker-compose up --build
   ```

4. **Access the Django API:**
   - The Django Admin panel will be available at `http://localhost:8000/admin`
      - Username: <i>set in .env file</i>
      - Password: <i>set in .env file</i>
   - The REST API docs will be available at `http://localhost:8000/api/tasks`

### Accessing Grafana Locally

0. To access Grafana locally, open your web browser and navigate to: `http://localhost:3000`

1. The default login credentials are:
   - **Username:** <i>set in .env file</i>
   - **Password:** <i>set in .env file</i>

## React Native App Production Setup

0. **Login and Configure Expo Account on [Expo](https://expo.dev/)**

1. **Generaate a Production Build:**
- Run `npm run build` to create a production build

2. **Ensure you have your environment variables set for production.**
   - `deploy-exp.yml` workflow uses SSH for deployment, ensure you have the following secrests set in your Github repository:
   - `EXPO_TOKEN`

3. **Deploy the Production Build:**
   - Deploy on trigger using `deploy-exp.yml` workflow

4. **Access the Production Build in Expo Dashboard:**
   - [Expo Dashboard](https://expo.dev/)

## Backend Production Setup

0. Provision your choice of Virtual Private Server (VPS)
   - I recommend Ubuntu on [AWS EC2](https://aws.amazon.com/ec2/)

1. Configure Firewall and Security Groups for SSH and HTTP/HTTPS
   - See [AWS EC2 Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)

2. **Ensure you have your environment variables set for production.**
   - `deploy-api.yml` workflow uses SSH for deployment, ensure you have the following secrests set in your Github repository:
   - `SERVER_HOST`
   - `SERVER_USER`
   - `SERVER_PASS`

3. **Use a reverse proxy (like Caddy or Nginx) to serve your application.**
   - See example Caddyfile in [`./caddy`](https://github.com/perfettiful/TaskHola/blob/main/backend/caddy/Caddyfile)
   ```bash
      monitor.taskhola.app {
         reverse_proxy grafana:3000
      }

      api.taskhola.app {
         reverse_proxy web:8000
      }
   ```
4. **Build the Docker images for production on Github Actiuon Trigger:**
   `deploy-api.yml`

5. **Configure DNS recordss for your domain/ subdomains:**
   - See the Live TaskHola API Docs: [https://api.taskhola.app/api/tasks](https://api.taskhola.app/api/tasks)
   - See the Live Grafana Dashboard: [https://monitor.taskhola.app](https://monitor.taskhola.app)
      - Username: <i>taskholatest</i>
      - Password: <i>taskholatest</i>

## Contact & Connect

<div style="display: flex;felx-direction:row; align-items: center;">
   <div style="display: flex;flex-direction: column; justify-contents: flex-start; align-items: start;">
      <a href="https://www.linkedin.com/in/nathanperfetti/">
         <img src="./assets/profile-pic.png" alt="Nathan Perfetti" width="100" height="100" style="display: block; border-radius: 50%; margin-right: 40px;margin-bottom: 20px;">
         <strong>Nathan Perfetti, <br  /> Full Stack Developer</strong>  
      </a>
  </div>

  <div>
    <ul style="padding-left: 50px">
      <li>Find me online: <a href="https://nathanperfetti.dev">https://nathanperfetti.dev</a></li>
      <li>Find me on Github: <a href="https://github.com/perfettiful">@perfettiful</a></li>
      <li>Find me on LinkedIn: <a href="https://www.linkedin.com/in/nathanperfetti/">@nathanperfetti</a></li>
      <li>Find me on Youtube: <a href="https://www.youtube.com/@nathan_codes/videos">@nathan_codes</a></li>
    </ul>
  </div>
</div>
