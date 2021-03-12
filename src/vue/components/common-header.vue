<template>

<header class="header">
        <div class="header-content">
            <div class="logo">
                <a href="./"><img src="https://static.moelist.top/nyatea/event201902/img/biglogo.png" height="54px" alt="logo"></a>
            </div>
            <div class="nav">
                <ul class="nav-ul">
                    <li><a class="nav-a" href="#/"><span id="this-page"> - 喵茶 - We Are Family </span></a></li>
                    
                    <li><a title="交流簿回收站" class="nav-a" href="https://mbs.mewtea.org/"><span>交流簿回收站</span></a></li>

                     <!-- Vue-router-link path: /macro -->
                     <li> <router-link title="macro" class="nav-a" to="/macro"><span>常用宏</span></router-link></li>
                     <li> <router-link title="macro" class="nav-a" to="/guide"><span>折纸系列</span></router-link></li>

                    <li><a title="开发中" class="nav-a" href="#./voice"><span>萌音</span></a></li>

                    <li><a title="开发中" class="nav-a" href="#"><span>喵云储</span></a></li>

                    <li><a title="Mewtea API" class="nav-a" href="https://api.mewtea.org/api/" target="_blank"><span>API</span></a></li>

                    <li><a title="连载中" class="nav-a" href="#"><span>喵茶四格</span></a></li>

                    <li><a title="检疫证明" class="nav-a" href="#"><span>关于波奇</span></a></li>

                    <li><a title="喵茶活动" class="nav-a" href="https://event.mewtea.org/" target="_blank"><span>喵茶活动</span></a></li>
                </ul>
            </div>
        </div>
    </header>

</template>

<script>
export default {
}
</script>

<style>
*{
  margin: 0;
}
header{
    height: 57px;
}
.header-content {
    height: 54px;
    width: 100%;
    position: fixed;
    background: #FFF;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
    z-index: 99;
    border-top: 3px solid #fda7c0;
}

.logo {
    margin-top: 5px;
}
.nav {
    margin: 10px 0 0 0;
}
.nav-ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.header-content li {
    display: inline;
    /* font-size: 20px; */
}
.header-content a {
    float: left;
    padding: 0 0 0 4px;
}
.nav-a {
    color: #ffa6c0;
}
#this-page {
    color: #72BDE4;
}
.header-content a span {
    display: block;
    padding: 5px 15px 4px 6px;
    line-height: 15px;
}
</style>