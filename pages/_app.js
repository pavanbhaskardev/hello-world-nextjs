import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("👋 hello there")
  console.log(`Env: NEXT_PUBLIC_TEXT=${NEXT_PUBLIC_TEXT}`)

  return <Component {...pageProps} />
}

export default MyApp
