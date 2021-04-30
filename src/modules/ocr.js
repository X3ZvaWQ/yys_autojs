export class Ocr {
    constructor(ws) {
        this.ws = ws;
    }

    recognize(image, options) {
        return this.ws.request('ocr', {
            img: 'data:image/png;base64,' + images.toBase64(image),
            options: options
        })
    }
}