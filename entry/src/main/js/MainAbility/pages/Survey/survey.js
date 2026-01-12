import router from '@ohos.router';

export default {
    data: {

        text: 'text',
        value: 0,
        startValue: 0,
        currentValue: 0,
        endValue: 0

    },

    sliderVal: Number = 0,
    inputVal: String = '',

    routeBack() {
        router.replace({
            uri: 'pages/index/index'
        });
    },

    routeSubmit() {
        router.replace({
            uri: 'pages/Result/result',
            params: {
                submittedSlider: this.sliderVal,
                submittedInput: this.inputVal
            }
        })
    },

    sliderValue(slider) {
        this.sliderVal = slider.value
    },

    textValue(text) {
        this.inputVal = text
    },

    setValue(e) {
        if (e.mode === 'start') {
            this.value = e.value;
            this.startValue = e.value;

        } else if (e.mode === 'move') {
            this.value = e.value;
            this.currentValue = e.value;

        } else if (e.mode === 'end') {
            this.value = e.value;
            this.endValue = e.value;
        }
    }

}