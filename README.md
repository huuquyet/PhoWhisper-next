# PhoWhisper Web

ML-powered speech recognition for Vietnamese directly in your browser! Built with [🤗 Transformers.js](https://github.com/xenova/transformers.js) + Next.js.

Using [🤗 PhoWhisper](https://github.com/VinAIResearch/PhoWhisper) models:
- [PhoWhisper-tiny](https://hf.co/vinai/PhoWhisper-tiny/) converted to [ONNX model](https://hf.co/huuquyet/PhoWhisper-tiny)
- [PhoWhisper-base](https://hf.co/vinai/PhoWhisper-base/) converted to [ONNX model](https://hf.co/huuquyet/PhoWhisper-base)
- [PhoWhisper-small](https://hf.co/vinai/PhoWhisper-small/) converted to [ONNX model](https://hf.co/huuquyet/PhoWhisper-small)
- [PhoWhisper-medium](https://hf.co/vinai/PhoWhisper-medium/) converted to [ONNX model](https://hf.co/huuquyet/PhoWhisper-medium)
- [PhoWhisper-large](https://hf.co/vinai/PhoWhisper-large/) converted to [ONNX model](https://hf.co/huuquyet/PhoWhisper-large)

Check out the demo sites:
[![Open in Spaces](https://huggingface.co/datasets/huggingface/badges/resolve/main/open-in-hf-spaces-sm-dark.svg)](https://huggingface.co/spaces/huuquyet/PhoWhisper-next)
 or [Vercel app](https://pho-whisper-next.vercel.app/). 

https://github.com/xenova/whisper-web/assets/26504141/fb170d84-9678-41b5-9248-a112ecc74c27

## Running locally

1. Clone the repo and install dependencies:

    ```bash
    git clone https://github.com/huuquyet/PhoWhisper-next.git
    cd PhoWhisper-next
    yarn install
    ```

2. Run the development server:

    ```bash
    yarn dev
    ```
    > Firefox users need to change the `dom.workers.modules.enabled` setting in `about:config` to `true` to enable Web Workers.
    > Check out [this issue](https://github.com/xenova/whisper-web/issues/8) for more details.

3. Open the link (e.g., [http://localhost:3000/](http://localhost:3000/)) in your browser.
