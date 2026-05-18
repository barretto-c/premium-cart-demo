# Premium Cart Demo

A modern Angular 21 e-commerce dashboard showcasing advanced features including authentication, reactive state management with signals, API integration, and a beautiful Tailwind CSS UI.

## Features

✨ **Authentication System**
- Login/logout with Angular signals for state management
- Route guards protecting the dashboard
- Automatic redirect to login for unauthorized access

🛒 **Shopping Experience**
- Browse 4 products from FakeStore API (live external data)
- Click product titles to view details in a modal popup
- Add items to cart with reactive signal updates
- Empty cart button to clear all items
- Cart counter displays in real-time

💳 **Customer Dashboard**
- Personalized customer profile with name, tier, state, and total spent
- Reactive cart counter showing items in memory state
- Professional bento-box layout with Tailwind CSS
- Real-time updates with Angular signals

🎨 **Modern Tech Stack**
- Angular 21 with standalone components
- Angular Signals for reactive state management
- Tailwind CSS v3 for styling
- RxJS for async operations
- HttpClient for API calls

## Getting Started

### Prerequisites
- Node.js v20+ installed

### Installation

```bash
npm install
```

### Development Server

**Option 1: npm script (recommended)**
```bash
npm start
```

**Option 2: Angular CLI directly**
```bash
ng serve
```

Both commands do the same thing. `npm start` is a convenience script defined in `package.json` that runs `ng serve`. Either works, but `npm start` is simpler to remember.

Once running, open your browser to **http://localhost:4200/**

### Using the App

1. **Login Page** - Click "Access Dashboard"
2. **Dashboard** - See your profile, cart counter, and 4 products
3. **View Product** - Click any product title to open a modal
4. **Add to Cart** - Click "Add to Cart" in the modal (closes and updates counter)
5. **Empty Cart** - Clear all items with the red button
6. **Logout** - Exit and return to login (clears cart automatically)

## Project Structure

```
src/app/
├── core/
│   ├── services/
│   │   ├── auth.service.ts       # Login/logout with signals
│   │   └── api.service.ts        # API calls & cart management
│   └── guards/
│       └── auth.guard.ts         # Route protection
├── features/
│   ├── login/                    # Login page component
│   └── dashboard/                # Main dashboard with modal
├── app.config.ts                 # HTTP client setup
├── app.routes.ts                 # Route definitions
└── app.html                      # Router outlet
```

## Key Technologies

| Technology | Purpose |
|---|---|
| Angular 21 | Frontend framework |
| Signals | Reactive state management |
| RxJS | Async operations |
| HttpClient | API requests |
| Tailwind CSS | Styling |
| TypeScript | Type-safe code |

## Building

```bash
npm run build
```

Creates optimized production build in `dist/` directory.

## Testing

```bash
npm test
```

Runs unit tests with Vitest.

## Architecture Highlights

- **Standalone Components** - No NgModule required
- **Reactive Signals** - Real-time UI updates without RxJS subscriptions
- **Route Guards** - Protect dashboard from unauthorized access
- **Modal Pattern** - Product details display without page navigation
- **Separation of Concerns** - Services handle business logic

---


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
