import router from '@ohos.router';

export default {

    routeBack() {
        router.replace({
            uri: 'pages/Survey/survey'
        });

    },

    lastRouteToIndex() {

        router.replace({
            uri: 'pages/AnimationTestPage/testAnimation'
        });

    }

}