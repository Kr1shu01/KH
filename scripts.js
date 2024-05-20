<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>領域展開！</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="images/logo.png" type="image/png"> 
</head>
<body>
    <header>
        <div class="nav-container">
            <div class="button-container">
                <div id="controls">
                    <button class="play-pause-button">流音</button>
                    <button class="next-button">迭曲</button>
                </div>
                <button class="ac-button" onclick="openAC()">风吟</button>
                <button class="theme-button" onclick="toggleTheme()">易彩</button>
                <button class="empty-button" onclick="">空按钮</button>
                <button class="tv-button" onclick="openTV()">雅幕</button>
                <button class="relax-button" onclick="startRelax()">寻秘</button>
                <button class="dropdown-button" onclick="toggleDropdown()">鸣辞</button>
                <div id="dropdown-menu" class="dropdown-menu">
                    <a href="#" onclick="navigateToLink('https://www.bilibili.com/video/BV1xa411e7SC/?share_source=copy_web&vd_source=2fb33c4bf969e78e1d2f94a3f11bee75')">五月的花海</a>
                    <a href="#" onclick="navigateToLink('https://mp.weixin.qq.com/s/VkcuAT4JkAW3a8F90HUiyQ')">启航未来</a>
                    <a href="#" onclick="navigateToLink('https://v.qq.com/x/cover/mzc002002kqssyu/q4100vjztwh.html?j_vid=y41007hixcp&j_cut_vid=x4100fe2yzq&j_is_win_vid=1&j_start=0')">融媒体之歌</a>
                </div>
                <button class="console-button" onclick="openConsole()">颂境</button>
            </div>
            <div class="header-content">
                <img src="images/Evelynn2.png" alt="头像">
                <div>
                    <h1>KRISHU</h1>
                    <p>身不由己去打野</p>
                </div>
            </div>
            <nav>
                <a href="#about">个人简介</a>
                <a href="#experience">工作经历</a>
                <a href="#projects">项目展示</a>
                <a href="#skills">专业技能</a>
                <a href="#education">教育背景</a>
                <a href="#hobbies">个人爱好</a>
                <a href="#blog">博客文章</a>
                <a href="#book-notes">读书摘录</a>
                <a href="#music-festival">音乐盛典</a>
                <a href="#civilization">晓以文明</a>
            </nav>
        </div>
    </header>
    <main>
        <div class="content">
            <div class="row">
                <section id="about" class="about"><h2>个人简介</h2><p>在写作之路上踌躇前行，但是会一直热爱写作，哪怕山崩地裂，海枯石烂。</p></section>
                <section id="experience" class="experience"><h2>工作经历</h2><p>研究生读得死去活来，但是乐在其中，只因深信学无止境。</p></section>
            </div>
            <div class="row">
                <section id="projects" class="projects"><h2>项目展示</h2><p>上海市第一伊芙琳，第二莉莉娅，第三：想去哪儿就去哪儿。</p></section>
                <section id="skills" class="skills"><h2>专业技能</h2><p>想学编曲，还想学滑雪，还有最关键的游泳。</p></section>
            </div>
            <div class="row">
                <section id="education" class="education"><h2>教育背景</h2><p>再教育中，接受新知识的洗礼，争做新时代好青年。</p></section>
                <section id="hobbies" class="hobbies"><h2>个人爱好</h2><p>如果李志不牛逼，那你猜背景音乐是谁喝醉唱的歌。</p></section>
            </div>
            <div class="row">
                <section id="blog" class="blog"><h2>博客文章</h2><p>时间不留人，客官勿留步，游离在时间之门外，无法抬头，听从调遣。</p></section>
                <section id="book-notes" class="book-notes"><h2>读书摘录</h2><p>余华别笑，你也有心事，总有一天你可以光明正大地说出来的。</p></section>
            </div>
            <div class="row">
                <section id="music-festival" class="music-festival"><h2>音乐盛典</h2><p>啦啦啦哩啦，啦啦啦哩，啦啦啦哩啦啦。</p></section>
                <section id="civilization" class="civilization"><h2>晓以文明</h2><p>科幻，晓以文明，晓之以文明，晓之以人类文明！</p></section>
            </div>
        </div>
    </main>
    <footer>
        <p>联系方式：15979595635</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
