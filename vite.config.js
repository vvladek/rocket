import { VitePWA } from "vite-plugin-pwa"



export default {
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,mp3,ogg}'],
                runtimeCaching: [{
                    urlPattern: /^https:\/\/[a-zA-Z0-9]+\.subdomain\.domain\.app/,
                    handler: 'NetworkFirst',
                    options: {
                        rangeRequests: true
                    }
                }]
            }
        })
    ],
}