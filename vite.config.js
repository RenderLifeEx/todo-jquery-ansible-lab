export default {
    server: {
      port: 3000,
      proxy: {
        '/todos': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            rewrite: path => path, // не переписываем путь
        }
      }
    }
}