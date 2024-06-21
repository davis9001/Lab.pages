// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

/** Svelte page has this:
   -> https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/
      interface Platform {
      +       env: {
      +           COUNTER: DurableObjectNamespace;
      +       };
      +       context: {
      +           waitUntil(promise: Promise<any>): void;
      +       };
      +       caches: CacheStorage & { default: Cache }
      +   }
*/
export {};
