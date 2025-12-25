# Portfolio Dashboard

A modern, responsive financial portfolio dashboard built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This application visualizes investment data including cashflow analysis, bond ratings, maturity profiles, and allocation distributions using **Recharts**.

## 🚀 Features

-   **Key Metrics Overview**: Instant view of total invested amount, average yield, portfolio maturity, and bond count.
-   **Cashflow Analysis**: Interactive bar chart tracking principal and interest payments over 1, 2, and 5-year periods.
-   **Investment Distribution**: Pie chart visualizing investments by bond type (Government, PSU, Corporate, etc.).
-   **Credit Rating Breakdown**: Bar chart displaying portfolio distribution across credit ratings (AAA, AA, etc.).
-   **Allocation Details**: Visual breakdown of investment per company/entity.
-   **Maturity Profile**: Chart showing value distribution across different maturity timelines.
-   **Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **UI Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **Charts**: [Recharts](https://recharts.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```
├── app/
│   ├── page.tsx          # Main dashboard layout and component assembly
│   ├── layout.tsx        # Global root layout
│   └── globals.css       # Global styles and Tailwind imports
├── components/
│   ├── charts/           # Reusable chart components (Cashflow, Allocation, etc.)
│   └── ui/               # Shared UI components (MetricCard, etc.)
├── data/
│   └── dashboard-data.ts # Mock data used to power the dashboard
└── public/               # Static assets
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd task-my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open the dashboard:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

To update the dashboard with your own data:
1.  Navigate to `data/dashboard-data.ts`.
2.  Modify the `mockDashboardData` object to reflect your portfolio's metrics, cashflow, and holdings.
3.   The types are defined in `types/dashboard.ts` (if applicable) to ensure type safety.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
