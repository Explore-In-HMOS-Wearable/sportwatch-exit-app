import app from '@system.app'
import router from '@ohos.router'

export default {
    data: { exitAnim: 'none' },

    onSwipe(e) {
        if (e.direction == "left") {
            this.exitAnim = 'shrinkCenter'
            setTimeout(() => app.terminate(), 200);
        }
    },

    returnIndex() {
        router.replace({
            uri: 'pages/index/index'
        });

    }

}