# GitBook风格静态网站

这是一个类似GitBook的静态网站项目，提供简洁美观的文档展示界面。

## 项目特点

- 📚 **简洁美观** - 类似GitBook的界面设计
- 📱 **响应式布局** - 支持手机、平板、电脑等各种设备
- 🚀 **快速加载** - 纯静态页面，加载速度快
- 📝 **易于维护** - 简单的HTML结构，方便更新内容
- 🎨 **现代化设计** - 使用Bootstrap框架，界面美观

## 项目结构

```
gitbook/
├── index.html              # 首页
├── pages/                  # 内容页面目录
│   ├── chapter1.html       # 第一章
│   ├── chapter2.html       # 第二章
│   └── chapter3.html       # 第三章
├── css/                    # 样式文件
│   └── style.css          # 自定义样式
├── js/                     # JavaScript文件
│   └── main.js            # 主要脚本
├── images/                 # 图片资源
└── README.md              # 项目说明文档
```

## 使用方法

### 1. 本地预览
直接在浏览器中打开 `index.html` 文件即可预览网站。

### 2. 更新内容
- **修改页面内容**：编辑 `pages/` 目录下的HTML文件
- **添加新章节**：在 `pages/` 目录下创建新的HTML文件，并在 `index.html` 中添加导航链接
- **修改样式**：编辑 `css/style.css` 文件
- **添加功能**：编辑 `js/main.js` 文件

### 3. 托管到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择 `main` 分支作为源
4. 网站将在 `https://你的用户名.github.io/仓库名` 上线

### 4. 自定义配置

#### 修改网站标题
编辑 `index.html` 文件中的 `<title>` 标签

#### 修改导航菜单
编辑 `index.html` 文件中的导航部分

#### 修改样式
编辑 `css/style.css` 文件来自定义颜色、字体等样式

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计
- **JavaScript** - 交互功能
- **Bootstrap 5** - 响应式框架
- **Font Awesome** - 图标库

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 更新日志

### v1.0.0 (2024-01-01)
- 初始版本发布
- 基础页面结构
- 响应式设计
- 导航功能

## 贡献指南

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

如有问题或建议，请通过以下方式联系：
- 创建 Issue
- 发送邮件

---

**注意**：这是一个静态网站项目，所有内容都在前端展示，无需后端服务器。

## 🎉 项目完成总结

### ✅ 已完成的功能

1. **完整的网站结构**
   - 响应式首页设计
   - 三个详细的章节页面
   - 统一的导航和页脚

2. **现代化技术栈**
   - HTML5语义化标签
   - CSS3响应式设计
   - JavaScript交互功能
   - Bootstrap 5框架
   - Font Awesome图标

3. **用户体验优化**
   - 移动端友好的设计
   - 平滑的动画效果
   - 搜索功能（Ctrl+K快捷键）
   - 代码高亮和复制功能
   - 返回顶部按钮

4. **部署就绪**
   - 完整的部署指南
   - GitHub Pages支持
   - 详细的故障排除说明

### 🚀 快速开始

1. **本地预览**：直接在浏览器中打开 `index.html`
2. **部署到GitHub Pages**：按照 `DEPLOYMENT.md` 中的步骤操作
3. **自定义内容**：编辑HTML文件中的内容
4. **更新样式**：修改 `css/style.css` 文件

### 📝 后续维护

- **添加新页面**：在 `pages/` 目录下创建新的HTML文件
- **更新导航**：修改所有页面的导航菜单
- **自定义样式**：编辑 `css/style.css` 文件
- **添加功能**：在 `js/main.js` 中添加新的JavaScript功能

### 🎯 项目特色

- **简单易用**：无需复杂的技术栈，适合初学者
- **美观现代**：类似GitBook的界面设计
- **完全免费**：可以免费部署到GitHub Pages
- **易于维护**：清晰的文件结构和详细的注释
- **响应式设计**：完美适配各种设备

这个项目为你提供了一个完整的GitBook风格静态网站解决方案，你可以在此基础上继续扩展和完善功能。