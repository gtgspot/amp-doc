class AmpDocService {
    constructor(win, isSingleDoc, initParams) {
        this.win = win;
        this.isSingleDoc = isSingleDoc;
        this.initParams = initParams;
        this.ready_ = false;
        this.readyPromise_ = new Promise((resolve) => {
            this.readyResolver_ = resolve;
        });
    }

    isReady() {
        return this.ready_;
    }

    whenReady() {
        return this.readyPromise_;
    }

    setReady() {
        if (this.ready_) {
            throw new Error('Duplicate ready state');
        }
        this.ready_ = true;
        this.readyResolver_();
    }
}


const ampDoc = new AmpDocService(window, true, {});


document.getElementById('readyButton').addEventListener('click', () => {
    ampDoc.setReady();
    document.getElementById('status').innerText = 'Document is ready!';
});
