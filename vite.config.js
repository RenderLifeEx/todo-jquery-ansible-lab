export default {
    server: {
      port: 3000,
      proxy: {
        '/api': {
            target: 'http://localhost:3002',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''), // Удаляем `/api` из пути
        }
      }
    }
}