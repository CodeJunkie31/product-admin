System Architecture

This project follows a simplified frontend layered architecture:

Presentation Layer → React Components (UI)
Logic Layer → Hooks & Services
Data Layer → Mock/API services (expandable to backend)

This aligns with the principle of separating concerns to improve maintainability and scalability in software systems.

“Well-structured software is easier to test, maintain, and extend over time.”
— Martin Fowler (Refactoring, 2018)

src/
 ├── components/        # Reusable UI components
 ├── pages/             # Route-level pages (Dashboard, etc.)
 ├── models/            # TypeScript interfaces (Product model)
 ├── services/          # Business logic & API handling
 ├── hooks/             # Custom React hooks (if applicable)
 ├── App.tsx            # Root application component
 └── main.tsx           # Entry point

References (Harvard Style)

Fowler, M. (2018) Refactoring: Improving the Design of Existing Code. 2nd edn. Boston: Addison-Wesley.

Martin, R.C. (2017) Clean Architecture: A Craftsman’s Guide to Software Structure and Design. Boston: Pearson.

MDN Web Docs (2025) React Documentation. Available at: https://react.dev
 (Accessed: 24 April 2026).

MDN Web Docs (2025) TypeScript Guide. Available at: https://www.typescriptlang.org/docs/
 (Accessed: 23 April 2026).

Vite (2025) Vite Build Tool Documentation. Available at: https://vitejs.dev/guide/
 (Accessed: 27 April 2026).
