import Document, {Html, Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

function withLog (Component) {
    return (props) => {
        console.log(props)
        return <Component {...props} />
    }
}
class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const props = await Document.getInitialProps(ctx)
        const originalRenderPage = ctx.renderPage
        const sheet = new ServerStyleSheet()
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />),
                    enhanceComponent: Component => withLog(Component)
                })
            return { 
                ...props,
                styles: (
                    <>
                        {props.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
        
        
    }
    render () {
        return (<Html>
            <Head>
                <style>{`.text{color: red;}`}</style>
            </Head>
            <body className="text">
                <Main />
                <NextScript />
            </body>
        </Html>)
    }
}

export default MyDocument