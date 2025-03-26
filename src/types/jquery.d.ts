
// Global jQuery type declaration
interface JQuery {
  (selector: string): JQuery;
  (element: Element): JQuery;
  (object: {}): JQuery;
  (elementArray: Element[]): JQuery;
  (object: JQuery): JQuery;
  (callback: Function): JQuery;
  (readyCallback: () => void): JQuery;
  length: number;
  [index: number]: Element;
  offset(): { top: number; left: number };
  animate(properties: any, duration?: number, easing?: string, complete?: Function): JQuery;
  on(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
  attr(attributeName: string): string;
  trigger(eventType: string): JQuery;
  data(key: string): any;
  data(key: string, value: any): JQuery;
  each(func: (index: number, element: Element) => any): JQuery;
  delay(duration: number): JQuery;
}

interface JQueryEventObject {
  preventDefault(): void;
}

declare const $: JQuery;
