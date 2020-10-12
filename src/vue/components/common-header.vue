<template>

<header class="header">
        <div class="header-content">
            <div class="logo">
                <a href="http://mewtea.org/"><img src="https://static.moelist.top/nyatea/event201902/img/biglogo.png" height="54px" alt="logo"></a>
            </div>
            <div class="nav">
                <ul class="nav-ul">
                    <li><a class="nav-a" href="#"><span id="this-page"> - 喵茶 - We Are Family </span></a></li>
                    
                    <li><a title="交流簿回收站" class="nav-a" href="https://mbs.mewtea.org/"><span>交流簿回收站</span></a></li>

                    <li><a title="开发中" class="nav-a" href="#"><span>萌音</span></a></li>

                    <li><a title="开发中" class="nav-a" href="#"><span>喵云储</span></a></li>
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
    text-decoration: none;
}
.nav-a {
    text-decoration: none;
    color: #ffa6c0;
}
#this-page {
    color: #72BDE4;
}
.header-content a span {
    display: block;
    padding: 5px 15px 4px 6px;
}
</style>