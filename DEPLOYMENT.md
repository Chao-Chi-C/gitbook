# 🚀 快速部署指南

这个文件将指导你如何将这个GitBook风格的静态网站部署到GitHub Pages上。

## 📋 前置要求

1. **GitHub账户** - 如果没有，请先注册一个
2. **Git客户端** - 确保已安装Git
3. **本地项目** - 确保你的项目文件完整

## 🔧 部署步骤

### 第一步：准备GitHub仓库

1. 登录GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: 输入一个名称，比如 `my-docs`
   - **Description**: 可选，描述你的项目
   - **Visibility**: 选择 "Public"（免费账户只能使用公开仓库）
   - **不要勾选** "Add a README file"
4. 点击 "Create repository"

### 第二步：上传代码到GitHub

在本地项目目录中打开命令行，执行以下命令：

```bash
# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "Initial commit: GitBook style static website"

# 重命名主分支为main（GitHub默认使用main）
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到GitHub
git push -u origin main
```

### 第三步：启用GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - 在 "Branch" 下拉菜单中选择 "main"
   - 保持 "/(root)" 文件夹不变
4. 点击 "Save"

### 第四步：等待部署完成

- GitHub会在几分钟内自动部署你的网站
- 部署完成后，你会看到一个绿色的勾号
- 你的网站地址将是：`https://你的用户名.github.io/仓库名`

## 🌐 访问你的网站

部署成功后，你可以通过以下地址访问你的网站：

```
https://你的用户名.github.io/仓库名
```

例如，如果你的GitHub用户名是 `john`，仓库名是 `my-docs`，那么你的网站地址就是：
```
https://john.github.io/my-docs
```

## 🔄 更新网站内容

当你修改了网站内容后，需要重新推送到GitHub：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "Update website content"

# 推送到GitHub
git push
```

GitHub会自动重新部署你的网站，通常需要几分钟时间。

## 🛠️ 故障排除

### 问题1：网站无法访问
- 检查GitHub Pages是否已启用
- 确认仓库是公开的
- 等待几分钟让部署完成
- 检查地址拼写是否正确

### 问题2：样式显示异常
- 检查CSS文件路径是否正确
- 确认CDN链接是否可访问
- 清除浏览器缓存
- 检查文件编码是否为UTF-8

### 问题3：移动端显示问题
- 检查viewport meta标签
- 测试响应式CSS是否生效
- 使用浏览器开发者工具测试

## 📱 测试你的网站

部署完成后，建议在不同设备上测试：

1. **桌面浏览器** - Chrome、Firefox、Safari、Edge
2. **移动设备** - 手机和平板
3. **不同屏幕尺寸** - 使用浏览器开发者工具测试

## 🎯 下一步

部署成功后，你可以考虑：

1. **自定义域名** - 绑定自己的域名
2. **SEO优化** - 添加meta标签和结构化数据
3. **性能监控** - 使用Google Analytics等工具
4. **内容更新** - 定期更新网站内容

## 📞 获取帮助

如果遇到问题，可以：

1. 查看GitHub Pages的官方文档
2. 在GitHub Issues中搜索类似问题
3. 检查浏览器控制台是否有错误信息
4. 确认所有文件都已正确上传

---

**恭喜！** 🎉 你的GitBook风格网站现在已经成功部署到互联网上了！ 