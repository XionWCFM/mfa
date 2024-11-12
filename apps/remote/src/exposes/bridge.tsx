import { linkBridge } from "@webview-bridge/web";
import { useState } from "react";

import type { AppBridge } from "@mf-xion/mobile";

const bridge = linkBridge<AppBridge>({
  throwOnError: true,
});

export default function Bridge() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button
        onClick={async () => {
          await bridge.sum(1, 2).then((result) => setNumber(result));
        }}
      >
        RN sum 함수 호출
      </button>
      <br />
      <p> 호출 값 {number}</p>
      <button onClick={() => setNumber(0)}>초기화</button>
    </div>
  );
}
