# Ken App

一个基于 Expo 的 React Native 应用程序，展示了数据获取、搜索功能和状态管理的最佳实践。
---

## 📱 预览

| iOS | Android |
|-----|--------|
| ![iOS Screenshot](./screenshots/ios.png) | ![Android Screenshot](./screenshots/android.png) |

> 💡 截图建议放在 `/screenshots` 目录下，并替换上方链接。

---

## 🚀 快速开始

### 前置要求

- Node.js ≥ 18.x
- npm ≥ 9.x 或 yarn ≥ 1.22.x
- Xcode（仅 iOS 开发，macOS 必需）
- Android Studio（仅 Android 开发）

### 安装依赖

```bash
# 克隆项目（如果是首次设置）
git clone https://github.com/your-username/ken-app.git
cd ken-app

# 安装依赖
npm install
# 或
yarn install

## 功能特性

- 🔍 **搜索功能**：支持关键词搜索
- 📊 **数据展示**：从 API 获取并展示数据
- ⏳ **加载状态**：优雅的加载指示器
- ❌ **错误处理**：网络错误时的友好提示
- 🔄 **数据刷新**：支持手动重新加载数据
- 📱 **跨平台**：支持 iOS、Android 和 Web 平台
- 🎨 **现代化 UI**：简洁美观的用户界面

## 技术栈

- **React Native** - 0.81.5
- **Expo** - ~54.0.30
- **React** - 19.1.0
- **自定义 Hooks** - 用于数据获取和状态管理
- **Context API** - 用于状态共享
- **urlcat** - 用于构建 URL

## 安装和运行
# 启动 Metro Bundler
npx expo start
### 前置条件

- Node.js >= 18.x
- npm 或 yarn
- Expo CLI (推荐全局安装)

### 安装步骤

1. **克隆或下载项目**

2. **安装依赖**
   ```bash
   yarn install
   ```
   或
   ```bash
   npm install
   ```

3. **运行应用**
   - 在开发模式下启动：
     ```bash
     yarn start
     ```
   - 在 iOS 模拟器上运行：
     ```bash
     yarn ios
     ```
   - 在 Android 模拟器上运行：
     ```bash
     yarn android
     ```
   - 在 Web 浏览器上运行：
     ```bash
     yarn web
     ```

## 项目结构

```
ken-app/
├── assets/              # 静态资源文件
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── components/          # 组件目录
│   └── shared/         # 共享组件
│       ├── Loading.js
│       └── NetworkError.js
├── hooks/               # 自定义 Hooks
│   ├── useFetchData.js
│   └── useReduceFetchData.js
├── utils/               # 工具函数
│   └── request.js
├── .env                 # 环境变量
├── .gitignore
├── App.js               # 应用入口组件
├── app.json             # Expo 配置文件
├── index.js             # JavaScript 入口文件
├── package.json         # 项目依赖配置
└── yarn.lock
```

## 主要组件和 Hook 说明

### 组件

#### Loading
- 位置：`components/shared/Loading.js`
- 功能：显示加载状态指示器

#### NetworkError
- 位置：`components/shared/NetworkError.js`
- 功能：网络请求失败时显示错误信息和重新加载按钮

### Hooks

#### useFetchData
- 位置：`hooks/useFetchData.js`
- 功能：基础的数据获取 Hook，处理加载、错误和数据状态

#### useReduceFetchData
- 位置：`hooks/useReduceFetchData.js`
- 功能：基于 useFetchData 的增强版本，使用 reducer 管理状态
- 参数：
  - `url`：API 接口地址
  - `options`：请求配置（method, params 等）
- 返回值：
  - `data`：获取的数据
  - `loading`：加载状态
  - `error`：错误信息
  - `onReload`：重新加载数据的函数

### 工具函数

#### request
- 位置：`utils/request.js`
- 功能：封装网络请求，处理请求和响应

## 配置信息

### app.json
- 应用名称：ken-app
- 版本：1.0.0
- 支持的平台：iOS、Android、Web
- 界面方向：竖屏
- 主题：浅色

### API 配置
- API 地址在 `App.js` 中定义
- 支持 GET 请求和参数传递

## 使用说明

1. **搜索功能**：
   - 在输入框中输入关键词
   - 应用会根据关键词获取相关数据

2. **数据展示**：
   - 数据加载完成后，会以列表形式展示
   - 每条数据显示名称信息

3. **重新加载**：
   - 点击"获取数据"按钮可以手动重新加载数据
   - 网络错误时，点击"重新加载"按钮可以重试请求

## 开发说明

### 添加新功能

1. **创建新组件**：在 `components/` 目录下创建新组件
2. **创建自定义 Hook**：在 `hooks/` 目录下创建新的 Hook
3. **添加工具函数**：在 `utils/` 目录下添加新的工具函数
4. **更新 API 配置**：修改 `App.js` 中的 API 地址和参数

### 调试

- 使用 Expo DevTools 进行调试
- 使用 React Native Debugger 进行更详细的调试
- 运行 `yarn start` 后，可以通过扫码在真实设备上测试

## 构建和发布

### 构建

- **iOS**：`yarn ios --configuration Release`
- **Android**：`yarn android --mode release`
- **Web**：`yarn web-build`（需要先安装 `expo-cli`）

### 发布

- 使用 `expo publish` 发布到 Expo Go
- 按照 Expo 文档进行 App Store 和 Google Play 的发布

## 许可证

MIT License

## 作者

Ken

## 更新日志

### v1.0.0 (2026-01-06)
- 初始版本发布
- 实现基本的数据获取和展示功能
- 添加搜索功能和错误处理
- 支持跨平台运行