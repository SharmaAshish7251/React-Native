# 🚀 React Native Learning Repository

<div align="center">

![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![React Native](https://img.shields.io/badge/React%20Native-Expo-green?style=for-the-badge&logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

**Master React & React Native Development from Fundamentals to Mobile Apps**

[📚 Overview](#overview) • [🗂️ Projects](#projects) • [🎯 Learning Path](#learning-path) • [🚀 Getting Started](#getting-started)

</div>

---

## 📚 Overview

Welcome to the **React Native Learning Repository**! This collection contains structured projects that take you from React fundamentals all the way to building professional mobile applications with React Native.

### 🎓 What This Repository Contains

- 📖 React refresher courses for web development
- 📱 React Native mobile development with Expo
- 🔧 Modern tooling (Vite, TypeScript, Expo Router)
- 💪 Progressive difficulty from basics to advanced
- 📝 Practical assignments and challenges

---

## 🗂️ Projects

### 📁 **Chaicode/** — Main Learning Curriculum

#### 🔵 Day 01: React Refresher - Fundamentals
Start here to refresh your React knowledge or learn from scratch.
- Basic components and JSX
- Props and component composition
- Simple interactive examples

```bash
cd Chaicode/"Day 01 react-refresher"
npm install && npm run dev
```

#### 🟢 Day 02: React Refresher - Advanced
Build advanced React skills with practical patterns.
- State management with hooks
- Form handling and validation
- API integration
- Event handling
- Dark mode and advanced patterns

```bash
cd Chaicode/"Day 02 react-refresher"
npm install && npm run dev
```

#### 🟣 Day 03: React Native - Core Components
Transition to mobile development with React Native and Expo.
- Core mobile components (View, Text, Image, ScrollView)
- Navigation with Expo Router
- Mobile-specific patterns
- TypeScript for type safety

```bash
cd Chaicode/"Day-03-React-Native-Init-Core-Components"
npm install && npx expo start
```

#### 🟡 Day 04: React Native - Core Components Continuation
Deepen your understanding of React Native components.
- Advanced component patterns
- Styling and layout
- Component lifecycle

```bash
cd Chaicode/"Day-04-React-Native-Init-Core-Components-Continuation"
npm install && npx expo start
```

#### 🟠 Day 05: React Navigation MasterClass
Master navigation patterns in React Native.
- Stack Navigator
- Tab Navigator
- Drawer Navigator
- Static & dynamic routing

```bash
cd Chaicode/"Day-05-React-Navigation-MasterClass"
npm install && npx expo start
```

#### 🔴 Day 06: Expo Router 101
File-based routing with Expo Router.
- File-based navigation
- Auth flows `(auth)/`
- Tab, Drawer, and Custom tabs
- Dynamic routes (user, profile, username)

```bash
cd Chaicode/"Day-06-React-Expo-Router-101"
npm install && npx expo start
```

#### 🟤 Day 07: Networking & Backend Integration
Connect your app to a real backend.
- REST API integration
- Express.js backend server
- Environment variables (`.env`)
- TypeScript types for API responses

```bash
# Start the backend
cd Chaicode/"Day-07-Networking-Backend-Integration"/backend
npm install && node index.js

# Start the mobile app
cd Chaicode/"Day-07-Networking-Backend-Integration"
npm install && npx expo start
```

#### ⚫ Day 08: Data Storage & Offline Support
Persist data and support offline usage.
- AsyncStorage
- Local file system access
- Offline-first patterns

```bash
cd Chaicode/"Day-08-Data-Storage-Offline-Support"
npm install && npx expo start
```

#### 🌟 Day 09: Sensors & Motions
Access native device sensors.
- Accelerometer
- Gyroscope
- Light Sensor

```bash
# Each sensor is its own Expo project:
cd Chaicode/"Day-09-Sensors-and-Motions"/accelerometer
npm install && npx expo start
```

---

### 📁 **Practice/** — Assignments & Side Projects

#### 🏋️ Day-05-Assignment
Three navigation practice apps:
- **Food-Delivery-App** — Full food delivery UI with navigation
- **Instagram_Clone** — Instagram UI clone (design notes)
- **Notes-App-UI-Assignment** — Notes app with CRUD UI

#### 💾 Storage-File-System
- **Dev-Snippets-AI–Offline** — Offline-capable AI code snippets app using file system storage

---

## 🎯 Learning Path

```
START HERE
    ↓
[Day 01] React Basics
    • Components & JSX
    • Props & State
    ↓
[Day 02] React Advanced
    • Hooks (useState, useEffect)
    • Forms & Validation
    • API Calls
    ↓
[Day 03] React Native Core
    • Mobile Components
    • Expo Setup
    • TypeScript
    ↓
[Day 04] Components Deep Dive
    • Advanced Layouts
    • Styling Patterns
    ↓
[Day 05] Navigation
    • Stack / Tab / Drawer
    • React Navigation
    ↓
[Day 06] Expo Router
    • File-based Routing
    • Auth Flows
    • Dynamic Routes
    ↓
[Day 07] Networking
    • REST APIs
    • Express Backend
    • TypeScript Types
    ↓
[Day 08] Data Storage
    • AsyncStorage
    • File System
    • Offline Support
    ↓
[Day 09] Sensors & Motions
    • Accelerometer
    • Gyroscope
    • Light Sensor
    ↓
[Practice] Build Real Apps
    • Food Delivery App
    • Notes App
    • Offline AI Snippets
```

---

## 🚀 Quick Start

### Prerequisites

```bash
# Node.js (v16+)
node --version

# Install Expo CLI globally
npm install -g expo-cli
```

### Start Learning

**Option 1: Begin with React (Recommended for beginners)**
```bash
cd Chaicode/"Day 01 react-refresher"
npm install
npm run dev
# Open http://localhost:5173
```

**Option 2: Jump to React Advanced**
```bash
cd Chaicode/"Day 02 react-refresher"
npm install
npm run dev
```

**Option 3: Go Mobile with React Native**
```bash
cd Chaicode/"Day-03-React-Native-Init-Core-Components"
npm install
npx expo start
# Scan QR code with Expo Go app
```

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Library | 19.2+ |
| **React Native** | Mobile Framework | Latest |
| **Expo** | React Native Platform | 56+ |
| **Vite** | Build Tool (Web) | Latest |
| **TypeScript** | Type Safety | 5.0+ |
| **Expo Router** | Navigation | 56+ |
| **ESLint** | Code Quality | 10+ |

---

## 📚 Available Scripts

### Web Projects (Day 01 & 02)
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Check code quality
npm run preview  # Preview production build
```

### Mobile Project (Day 03)
```bash
npx expo start   # Start dev server
npx expo build   # Build for iOS/Android
npx expo prebuild # Prebuild native code
```

---

## 📖 Directory Structure

```
React-Native/
├── 📁 Chaicode/                                          # Main learning projects
│   │
│   ├── 📁 Day 01 react-refresher/                        # React Basics (Vite + JSX)
│   │   ├── src/
│   │   │   ├── App.jsx
│   │   │   ├── H1.jsx
│   │   │   └── main.jsx
│   │   ├── public/
│   │   ├── index.html
│   │   └── package.json
│   │
│   ├── 📁 Day 02 react-refresher/                        # React Advanced (Hooks, Forms, API)
│   │   ├── src/
│   │   ├── public/
│   │   ├── Recat Refresher Notes.txt
│   │   └── package.json
│   │
│   ├── 📁 Day-03-React-Native-Init-Core-Components/      # RN Core Components & Expo
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── _layout.tsx
│   │   │       ├── index.tsx
│   │   │       ├── Basic_components.tsx
│   │   │       ├── Colors.tsx
│   │   │       └── assignments/
│   │   ├── assets/
│   │   ├── app.json
│   │   └── package.json
│   │
│   ├── 📁 Day-04-React-Native-Init-Core-Components-Continuation/   # RN Components Cont.
│   │   ├── src/
│   │   │   └── app/
│   │   ├── assets/
│   │   ├── app.json
│   │   └── package.json
│   │
│   ├── 📁 Day-05-React-Navigation-MasterClass/           # React Navigation
│   │   ├── src/
│   │   │   └── screens/
│   │   ├── StaticRouter.tsx
│   │   ├── React-Navigation-MasterClass.txt
│   │   └── package.json
│   │
│   ├── 📁 Day-06-React-Expo-Router-101/                  # Expo Router & File-based Routing
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── _layout.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── about.tsx
│   │   │   │   ├── (auth)/
│   │   │   │   ├── (tabs)/
│   │   │   │   ├── (drawer)/
│   │   │   │   ├── (customtabs)/
│   │   │   │   ├── (nativetabs)/
│   │   │   │   ├── profile/
│   │   │   │   ├── user/
│   │   │   │   └── username/
│   │   │   └── components/
│   │   ├── assets/
│   │   ├── React Expo Router.txt
│   │   ├── app.json
│   │   └── package.json
│   │
│   ├── 📁 Day-07-Networking-Backend-Integration/         # API & Backend Integration
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── app/
│   │   │   │   ├── _layout.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── api/
│   │   │   ├── assets/
│   │   │   ├── lib/
│   │   │   └── types.d.ts
│   │   ├── backend/                                      # Express.js backend server
│   │   │   ├── index.js
│   │   │   └── package.json
│   │   ├── .env
│   │   ├── Networking & Backend Integration.txt
│   │   ├── app.json
│   │   └── package.json
│   │
│   ├── 📁 Day-08-Data-Storage-Offline-Support/           # AsyncStorage & Offline
│   │   ├── src/
│   │   │   └── app/
│   │   ├── assets/
│   │   ├── Data-Storage-Offline-Support.txt
│   │   ├── File System.txt
│   │   ├── app.json
│   │   └── package.json
│   │
│   └── 📁 Day-09-Sensors-and-Motions/                   # Device Sensors
│       ├── accelerometer/                                # Accelerometer project
│       │   ├── src/
│       │   ├── assets/
│       │   ├── SensorAndMotionsAccelerometer.txt
│       │   └── package.json
│       ├── gyroscope/                                    # Gyroscope project
│       │   ├── src/
│       │   ├── assets/
│       │   ├── SensorAndMotionsGyroscope.txt
│       │   └── package.json
│       └── light-sensor/                                 # Light Sensor project
│           ├── src/
│           ├── assets/
│           ├── SensorAndMotionsLightSensor.txt
│           └── package.json
│
├── 📁 Practice/                                          # Assignments & Side Projects
│   ├── 📁 Day-05-Assignment/                             # Navigation Practice Apps
│   │   ├── 📁 Food-Delivery-App/                         # Food Delivery UI clone
│   │   │   ├── src/
│   │   │   ├── assets/
│   │   │   └── package.json
│   │   ├── 📁 Instagram_Clone/                           # Instagram Clone (notes)
│   │   │   └── Instagram Clone.txt
│   │   └── 📁 Notes-App-UI-Assignment/                   # Notes App UI
│   │       ├── src/
│   │       ├── assets/
│   │       └── package.json
│   │
│   └── 📁 Storage-File-Sytem/                            # File System Practice
│       └── 📁 Dev-Snippets-AI–Offline/                   # Offline AI Snippets App
│           ├── src/
│           ├── assets/
│           └── package.json
│
└── README.md                                             # This file
```

---

## 💡 Learning Tips

✅ **Follow the sequence** - Complete each day in order
✅ **Code along** - Don't just read, type out the code
✅ **Modify examples** - Change props, add features
✅ **Read assignments** - Each day has challenges
✅ **Check the console** - Understand errors and logs
✅ **Reference docs** - Use official React/React Native docs
✅ **Build projects** - Create your own apps after each phase

---

## 🎯 Learning Objectives

### After Day 01
- ✅ Understand React components and JSX
- ✅ Use props for component communication
- ✅ Create simple interactive components

### After Day 02
- ✅ Master React hooks (useState, useEffect)
- ✅ Handle forms and user input
- ✅ Fetch and display API data
- ✅ Manage component state effectively

### After Day 03
- ✅ Build mobile apps with React Native
- ✅ Use native mobile components
- ✅ Implement navigation patterns
- ✅ Deploy apps to mobile devices

---

## 📚 Resources

### Official Documentation
- 🔗 [React Documentation](https://react.dev)
- 🔗 [React Native Docs](https://reactnative.dev)
- 🔗 [Expo Documentation](https://docs.expo.dev)
- 🔗 [Vite Guide](https://vitejs.dev)

### Learning Guides
- 📖 [React Tutorial](https://react.dev/learn)
- 📖 [React Hooks](https://react.dev/reference/react/hooks)
- 📖 [React Native Components](https://reactnative.dev/docs/components-and-apis)

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port 5173
lsof -i :5173
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Expo Issues
```bash
# Clear Expo cache
npx expo start --clear
```

---

## 📞 Support

Having issues? Try:
1. Check the error message in console/terminal
2. Review the official documentation links above
3. Verify you're in the correct directory
4. Ensure Node.js and npm are up to date
5. Clear cache and reinstall dependencies

---

## 🎉 Ready to Start?

Pick a starting point and begin your journey:

```bash
# Beginner? Start here
cd Chaicode/"Day 01 react-refresher" && npm install && npm run dev

# Intermediate? Jump here
cd Chaicode/"Day 02 react-refresher" && npm install && npm run dev

# Ready for mobile? Go here
cd Chaicode/"Day-03-React-Native-Init-Core-Components" && npm install && npx expo start
```

---

<div align="center">

**Build Amazing Things with React & React Native! 🚀**

*Happy Coding!*

---

*Last Updated: July 2026*
*Repository: React-Native Learning Path*

</div>
