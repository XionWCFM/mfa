import "systemjs";

const UserConfigBase = "";
// biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
const microFrontendPromise: Promise<void | System.Module> | null = null;
export type MicroFe = {
  mount: (containerId: string) => void;
  unmount: (containerId: string) => void;
};
