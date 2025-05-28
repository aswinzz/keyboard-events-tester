# 🎹 Keyboard Event Tester

A free, open-source web application for testing JavaScript keyboard events in real-time. Perfect for developers debugging keyboard interactions, building keyboard shortcuts, and understanding browser event handling.

🔗 **Live Demo**: [key-events.aswinvb.com](https://key-events.aswinvb.com)

## ✨ Features

### Core Functionality
- **Real-time Event Display** - See keyboard event properties instantly as you type
- **Complete Event Data** - Shows `event.key`, `event.code`, `event.keyCode`, `event.which`
- **Modifier Key Detection** - Track Alt, Ctrl, Shift, and Meta key states
- **Key Combination Display** - Visual representation of complex key combinations
- **Raw JSON Output** - Complete event object for debugging

### Developer Tools
- **Console Logging** - All events logged to browser console for programmatic access
- **Event History** - Track the last 10 key presses with timestamps
- **Deprecation Warnings** - Clear indicators for deprecated properties
- **Cross-platform Support** - Works on Windows, Mac, and Linux

### User Experience
- **Clean, Modern UI** - Intuitive interface built with Tailwind CSS
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Accessibility Focused** - Proper semantic HTML and ARIA labels
- **No Installation Required** - Runs entirely in the browser

## 🚀 Quick Start

### Online Usage
Simply visit [key-events.aswinvb.com](https://key-events.aswinvb.com) and start pressing keys!

### Local Development
```bash
# Clone the repository
git clone https://github.com/aswinzz/keyboard-events-tester.git
cd keyboard-events-tester

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📖 Use Cases

### For Web Developers
- **Keyboard Shortcut Development** - Test key combinations for web applications
- **Event Debugging** - Understand how different keys trigger events
- **Cross-browser Testing** - Verify keyboard behavior across browsers
- **Accessibility Testing** - Ensure keyboard navigation works properly

### For Students & Educators
- **Learning JavaScript Events** - Visual way to understand keyboard events
- **Browser API Education** - See how modern vs deprecated APIs work
- **Interactive Demonstrations** - Show event handling in real-time

### For QA Testers
- **Input Validation** - Test how applications handle various key inputs
- **Edge Case Discovery** - Find unusual key combinations and behaviors
- **Documentation** - Record exact key codes for bug reports

## 🎯 Key Event Properties Explained

| Property | Description | Status | Example |
|----------|-------------|--------|---------|
| `event.key` | The key value (what you see) | ✅ Modern | `"a"`, `"Enter"`, `"ArrowUp"` |
| `event.code` | Physical key location | ✅ Modern | `"KeyA"`, `"Enter"`, `"ArrowUp"` |
| `event.keyCode` | Numeric key code | ⚠️ Deprecated | `65`, `13`, `38` |
| `event.which` | Legacy key code | ⚠️ Deprecated | `65`, `13`, `38` |

### Modifier Keys
- **Alt Key** - `event.altKey` (boolean)
- **Ctrl Key** - `event.ctrlKey` (boolean)  
- **Shift Key** - `event.shiftKey` (boolean)
- **Meta Key** - `event.metaKey` (boolean) - Cmd on Mac, Windows key on PC

## 🔍 SEO & Discoverability

This tool is optimized for search engines with:
- **Semantic HTML** structure
- **Rich meta tags** and Open Graph data
- **Structured data** (JSON-LD)
- **Sitemap** and robots.txt
- **Performance optimized** for Core Web Vitals

### Target Keywords
- Keyboard event tester
- JavaScript keycode finder
- Event.key tester
- Event.code finder
- Keyboard event inspector
- Web developer tools

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow TypeScript best practices
2. Maintain responsive design
3. Add appropriate tests
4. Update documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aswin VB**
- Website: [aswinvb.com](https://aswinvb.com)
- GitHub: [@aswinzz](https://github.com/aswinvb)
- Twitter: [@aswinvb1](https://twitter.com/aswinvb1)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**⭐ If this tool helped you, please consider giving it a star on GitHub!**
