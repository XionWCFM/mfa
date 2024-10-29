import "systemjs";

import { useEffect } from "react";
import { CONFIG_BASE } from "./base";

export type MicroFe = {
  mount: (containerId: string) => void;
  unmount: (containerId: string) => void;
};

// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
let microFrontendPromise: Promise<void | System.Module> | null = null;

const loadMicroFrontend = async (): Promise<MicroFe | undefined> => {
  if (!microFrontendPromise) {
    microFrontendPromise = System.import(`${CONFIG_BASE}/vendor/mf-header.min.js`)
      .then((module: System.Module) => {
        return { ...module };
      })
      .catch((err): void => {
        microFrontendPromise = null;
        throw err;
      });
  }

  return microFrontendPromise as Promise<MicroFe>;
};

type MicroFrontendProps = {
  containerId: string;
};

export function MicroFrontend({ containerId }: MicroFrontendProps) {
  useEffect(() => {
    let microFe: MicroFe | undefined;
    const loader = async () => {
      microFe = await loadMicroFrontend();
      if (microFe) {
        microFe.mount(containerId);
      }
    };
    loader();

    return () => microFe?.unmount(containerId);
  }, [containerId]);

  return <div id={containerId} />;
}
