// GitBook风格静态网站主要脚本 - 简洁版本

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化移动端菜单
    initMobileMenu();
    
    // 设置页面标题
    setPageTitle();
    
    // 添加平滑滚动
    addSmoothScrolling();
    
    // 初始化导航展开/收起功能
    initNavigationToggle();
});

/**
 * 初始化移动端菜单
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        
        // 点击主内容区域时关闭菜单
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('click', function() {
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            });
        }
    }
}

/**
 * 设置页面标题
 */
function setPageTitle() {
    const currentPage = window.location.pathname;
    let title = '我的文档';
    
    if (currentPage.includes('chapter1')) {
        title = '第一章：项目介绍 - 我的文档';
    } else if (currentPage.includes('chapter2')) {
        title = '第二章：技术栈 - 我的文档';
    } else if (currentPage.includes('chapter3')) {
        title = '第三章：部署指南 - 我的文档';
    }
    
    document.title = title;
}

/**
 * 高亮当前页面
 */
function highlightCurrentPage() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// 页面加载时高亮当前页面
highlightCurrentPage();

/**
 * 添加平滑滚动功能
 */
function addSmoothScrolling() {
    // 为所有内部链接添加平滑滚动
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 初始化导航展开/收起功能
 */
function initNavigationToggle() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const navLink = item.querySelector('.nav-link');
        const subList = item.querySelector('.nav-sub-list');
        
        // 只有包含子导航的项目才添加点击事件
        if (subList) {
            navLink.addEventListener('click', function(e) {
                // 检查是否点击的是展开图标或链接内容区域
                const isExpandIcon = e.target.classList.contains('nav-expand-icon');
                const isLinkContent = e.target.closest('.nav-link-content');
                
                // 如果点击的是展开图标或链接内容区域，阻止默认行为并展开/收起
                if (isExpandIcon || isLinkContent) {
                    e.preventDefault();
                    
                    // 切换展开状态
                    item.classList.toggle('expanded');
                    
                    // 关闭其他展开的导航项
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('expanded');
                        }
                    });
                }
                // 如果直接点击链接，允许正常跳转
            });
        }
    });
} 