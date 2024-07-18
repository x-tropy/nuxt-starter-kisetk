export default defineNuxtPlugin(() => ({
    provide: {
        hello: (msg: string) => '✔ hello ' + msg
    }
}))