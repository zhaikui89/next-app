import App, { Container} from 'next/app'
import 'antd/dist/antd.css'
import Header from '../layout/header'
class MyApp extends App {
    static async getInitialProps ({Component}) {
        console.log('123')
        let pageProps
        if (Component.getInitialProps) pageProps = await Component.getInitialProps()
        return {
            pageProps
        }
    }
    render () {
        const { Component, pageProps} = this.props
        return (
            <Container>
                <Header />
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp