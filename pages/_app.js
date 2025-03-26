import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("👋 hello there")
  return <Component {...pageProps} />
}

export default MyApp
