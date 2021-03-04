<template>
    <div class="right-content">
        <div class="right-content-menber">
            <div class="content-menber-list">
                <ul>
                    <li>123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </div>
        </div>
        <div class="right-content-chat">
            <div class="right-content-chat">11122</div>
            <div class="right-content-chat"></div>

            <div id="app">
                <h1>Bitcoin Price Index</h1>
                <div v-for= "currency in info" key="currency" class="currency" >
                    {{ currency.description }}:
                    <span class="lighten">
                        <span v-html="currency.symbol"></span
                        >{{ currency.rate_float | currencydecimal }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    filters: {
        currencydecimal(value) {
            return value.toFixed(2);
        },
    },
};
</script>

<style>
.right-content {
    margin: 0 280px 0 0;
    padding: 0;
    height: 100%;
    animation: contentLight-running 5s infinite linear;
}

.right-content-chat {
    height: 100%;
    margin: 0 280px 0 0;
    background: #313130;
    padding: 20px;
}
.right-content-menber {
    float: right;
    width: 280px;
    height: 100%;
    background: #121212;
}
.right-content-menber {
    float: right;
    width: 280px;
    height: 100%;
    background: #121212;
}
@keyframes contentLight-running {
    0% {
        box-shadow: 5px -2px 8px #49e02d;
    }
    33% {
        box-shadow: 5px -2px 8px #397b16;
    }
    66% {
        box-shadow: 5px -2px 8px #2196f3;
    }
    100% {
        box-shadow: 5px -2px 8px #49e02d;
    }
}

@keyframes contentLight-stop {
    0% {
        box-shadow: 5px -2px 8px #ff5722;
    }
    33% {
        box-shadow: 5px -2px 8px #9e9e9e;
    }
    66% {
        box-shadow: 5px -2px 8px #ff9800;
    }
    100% {
        box-shadow: 5px -2px 8px #ff5722;
    }
}
</style>