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

### 📁 **Chaicode/**
The main learning project with three progressive phases:

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

#### 🟣 Day 03: React Native - Mobile Development
Transition to mobile development with React Native and Expo.
- Core mobile components
- Navigation with Expo Router
- Mobile-specific patterns
- TypeScript for type safety

```bash
cd Chaicode/"Day-03-React-Native-Init-Core-Components"
npm install && npx expo start
```

---

## 🎯 Learning Path

```
START HERE
    ↓
[Day 01] React Basics
    • Components
    • JSX & Props
    • Simple state
    ↓
[Day 02] React Advanced
    • Hooks (useState, useEffect)
    • Forms & Validation
    • API Calls
    • Event Handling
    ↓
[Day 03] React Native
    • Mobile Components
    • Navigation
    • Native Features
    • Production Ready Apps
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
React Native/
├── 📁 Chaicode/                           # Main learning project
│   ├── 📁 Day 01 react-refresher/
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   ├── 📁 Day 02 react-refresher/
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   ├── 📁 Day-03-React-Native-Init-Core-Components/
│   │   ├── src/
│   │   ├── app/
│   │   └── package.json
│   └── README.md                          # Detailed Chaicode guide
│
└── README.md                              # This file
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

*Last Updated: May 2026*
*Repository: React-Native Learning Path*

</div>
