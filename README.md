Thank you for sharing your **`package.json`**. Based on your dependencies and the tools you're using (Next.js, Tailwind, Storybook, Jest, Prisma, etc.), I'll adapt the **README** for your project, making sure to match your setup with the appropriate scripts and configuration.

---

# **Si Ratu - Hospital Quality Indicator, Safety, and Risk Management System**

**Si Ratu** is a web-based application designed to **monitor and manage quality indicators, safety incidents, and risk management** at **RSUD Oto Iskandar Dinata Soreang**. This application aims to enhance healthcare service quality by simplifying the monitoring and validation of hospital performance data.

---

## **Key Features**

- **Quality Indicators**: Displays hospital performance indicators such as response time and patient transfer times.
- **Safety Incidents**: Tracks the number and types of safety incidents as well as the results of safety culture surveys.
- **Risk Management**: Monitors the status of risks and the mitigation actions that have been implemented to reduce these risks.

---

## **Features**

1. **Main Dashboard**:
   - Summary of daily/monthly quality indicators.
   - Safety status (incidents, safety culture survey results).
   - Summary of risk management status.

2. **Data Recording and Verification**:
   - **PIC Mutu** can input data for quality indicators.
   - Verification by **Ketua Instalasi** (Room Manager) and **Komite Mutu**.

3. **Reports and Analysis**:
   - Generate reports based on verified quality indicators.
   - Enables data analysis for evaluation and improvement.

4. **User Management**:
   - Roles such as **PIC Mutu**, **Ketua Instalasi**, and **Komite Mutu**, each with different access levels.

---

## **Prerequisites**

To run this project, make sure you have the following installed:

- **Node.js** (version 16.x or above)
- **npm** (version 8.x or above)
- **Next.js** (for frontend)
- **JSON Server** (for mock API)

---

## **Installation**

1. **Clone this repository** to your local directory:

   ```bash
   git clone https://github.com/username/si-ratu.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd si-ratu
   ```

3. **Install dependencies** using npm:

   ```bash
   npm install
   ```

4. **Run JSON Server** (for mock data):

   ```bash
   npx json-server db.json --port 3000
   ```

5. **Start the Next.js application**:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## **Folder Structure**

- **`components/`**: Contains all UI components used in the app (following Atomic Design principles).
  - **atoms/**: Basic components like buttons, inputs, etc.
  - **molecules/**: More complex components such as forms, cards, etc.
  - **organisms/**: Larger components consisting of multiple atoms and molecules, such as navbar, breadcrumb, etc.

- **`pages/`**: Application pages, such as the dashboard, reports, etc.

- **`lib/`**: Files related to API services and configurations.

- **`utils/`**: Utility functions, such as date formatting and data validation.

---

## **Running Storybook**

For UI component documentation, we use **Storybook**. To view the components in **Storybook**:

1. **Start Storybook**:

   ```bash
   npm run storybook
   ```

2. **Access Storybook** in your browser at [http://localhost:6006](http://localhost:6006).

---

## **Testing**

This project uses **Jest** and **React Testing Library** for unit and integration testing. To run the tests:

1. **Install testing dependencies**:

   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom jest
   ```

2. **Run the tests**:

   ```bash
   npm run test
   ```

3. **Run Playwright tests** (for end-to-end testing):

   ```bash
   npm run e2e
   ```

---

## **Linting and Code Formatting**

This project uses **ESLint** and **Prettier** for code linting and formatting.

1. **Run the linting**:

   ```bash
   npm run lint
   ```

2. **Automatically format code with Prettier**:

   ```bash
   npm run prepare
   ```

---

## **Scripts**

Here are the scripts available in the project:

- **`npm run dev`**: Starts the Next.js development server.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run storybook`**: Starts Storybook for UI component documentation.
- **`npm run build-storybook`**: Builds the static Storybook files.
- **`npm run test`**: Runs Jest tests.
- **`npm run e2e`**: Runs Playwright end-to-end tests.
- **`npm run prepare`**: Configures `husky` and runs `lint-staged`.

---

## **Contributing**

Contributions are welcome! If you have any ideas, suggestions, or improvements, please feel free to create a **pull request** or **issue**.

1. Fork this repository.
2. Create a new branch for the feature or fix you're working on.
3. Make your changes, then submit a pull request for review and merge into the main branch.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Contact**

If you have any questions, issues, or want to discuss further, feel free to contact us at:

- **Email**: [support@sim.rs](mailto:support@sim.rs)
- **GitHub**: [https://github.com/username/si-ratu](https://github.com/username/si-ratu)

---

### **Notes**:

- Replace **`GitHub URL`** and **`Email`** with the relevant information.
- If using another API or backend, ensure that the **JSON Server** or your API documentation is updated.

---

This **README** reflects your **dependencies** and **scripts** as defined in your `package.json`. Let me know if you'd like further adjustments or additions!
