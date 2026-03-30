This is a high-performance, responsive Frontend Food Delivery Application built as a Single Page Application (SPA). It serves as the customer-facing interface for a digital restaurant or food marketplace, focusing on speed, clean UI, and intuitive navigation.

1. Key Features & Functionalities
Dynamic Category Filtering: An "Explore Menu" component that allows users to filter food items by category (e.g., Rolls, Sandwiches, Deserts). Selecting a category updates the display instantly without refreshing the page.

Persistent Shopping Cart: * Individual Item Tracking: Users can increment or decrement item counts directly from the food card.

Live Total Calculation: The cart automatically calculates the subtotal, adds a fixed delivery fee, and provides the final checkout amount.

Authentication Flow: A LoginPopup modal system that toggles between "Login" and "Create Account" states, providing a smooth user entry point.

Responsive Multi-Page Routing: Seamless transitions between the Home page, Cart page, and the "Place Order" screen using client-side routing.

Order Information Management: A structured checkout form to collect user delivery details (Address, City, Zip Code) before finalizing an order.

2. Tools & Technologies Used
React.js: The primary framework for building the component-based architecture.

Vite: Used as the modern build tool and development server, offering significantly faster HMR (Hot Module Replacement) than traditional tools.

Tailwind CSS: Used for all styling. This utility-first framework allows for highly responsive designs and custom UI components without writing separate CSS files.

JavaScript (ES6+): Utilized for all logic, including state management and array mapping for the menu data.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
