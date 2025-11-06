import app from '@system.app'
import router from '@ohos.router'

export default {
    data: { exitAnim: 'none' },

    onSwipe(e) {
        if (e.direction == "right") {
            this.exitAnim = 'shrinkCenter'
            setTimeout(() => app.terminate(), 200);
        }
    },

    setRoute() {
        router.replace({
            uri: 'pages/Survey/survey'
        });

    }
}