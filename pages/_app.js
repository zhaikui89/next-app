import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import Header from '../layout/header'
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        console.log('123')
        let pageProps
        if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
        return {
            pageProps
        }
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Container>
                    <Header />
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}

export default MyApp