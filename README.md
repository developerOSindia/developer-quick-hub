# DeveloperOS Quick Hub — Chrome Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Ecosystem: DeveloperOS](https://img.shields.io/badge/Ecosystem-DeveloperOS-6366f1.svg)](https://developeros.in)
[![Tools Directory](https://img.shields.io/badge/Tools%20Directory-Online-10b981.svg)](https://tools.developeros.in)
[![Privacy: Client--Side](https://img.shields.io/badge/Privacy-Zero--Storage-10b981.svg)](https://developeros.in/privacy)
[![CI](https://github.com/developerOSindia/developer-quick-hub/actions/workflows/ci.yml/badge.svg)](https://github.com/developerOSindia/developer-quick-hub/actions)

Lightweight, zero-telemetry Chrome extension providing offline JWT decoders, Base64 converters, and UUID generators.

---

## 🖥️ Interface Preview

```
┌──────────────────────────────────────────────┐
│ ⚡ DeveloperOS Quick Hub (Popup 400x500)     │
│ [JWT Decoder]  [Base64]  [UUIDv4]  [Hasher] │
│ Input: eyJhbGciOiJIUzI1Ni...                 │
│ Output: Decoded claims (client-side offline) │
└──────────────────────────────────────────────┘
```

---

## 🌟 Application Overview & Features

- **Client-Side & Offline-First**: All data is processed in-memory. Zero server logging or third-party telemetry.
- **Decoupled Business Logic**: Pure algorithm implementations isolated from the user interface.
- **DeveloperOS Design System**: Official styling, dark theme, and accessible contrast compliance.
- **Single-Click Exports**: Copy outputs directly to clipboard or download formatted artifacts.

---

## 🚀 Local Setup & Installation

### 1. Prerequisites
- Python 3.12+ (or modern browser/node runtime for web frontends)
- Standard development tools (`git`, `pip`)

### 2. Quickstart
```bash
# Clone the repository
git clone https://github.com/developerOSindia/developer-quick-hub.git
cd developer-quick-hub

# Install dependencies (if applicable)
pip install -r requirements.txt

# Run the local application
Load unpacked via chrome://extensions
```

---

## 🧪 Automated Testing

Run the automated test suite locally:
```bash
python3 -m unittest discover -s tests
```
Continuous integration runs on every push and pull request via GitHub Actions.

---

## 🚢 Deployment Guidelines

This project is configured for standalone deployment to:
**Chrome Web Store / GitHub Release Zip**

For containerized environments, standard Dockerfiles and Compose configurations are supported.

---

## 🔒 Security & Privacy

This application processes all user input **strictly in-memory** with zero persistence:
- Read our full [Security Policy](SECURITY.md)
- For vulnerability reports, contact: **`security@developeros.in`**

---

## 🤝 Contributing

Contributions are warmly welcomed! Please read our [Contributing Guidelines](CONTRIBUTING.md) and check out open issues.

---

## 🏷️ Recommended GitHub Topics

When configuring this repository on GitHub, apply these topics:
`chrome-extension` `manifest-v3` `offline-tools` `developer-utilities` `zero-telemetry` `developeros`

---

## 📜 License & Ecosystem

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

- **Main Website**: [https://developeros.in](https://developeros.in)
- **Tools Portal**: [https://tools.developeros.in](https://tools.developeros.in)
- **GitHub Organization**: [https://github.com/developerOSindia](https://github.com/developerOSindia)
