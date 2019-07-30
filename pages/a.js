import { withRouter} from 'next/router'
const a = ({router, name}) => {
    console.log(router)
    return (<div>{router.query.id + name}</div>)
}
a.getInitialProps = async() => {
    return {name: 'zhaikui'}
}
export default withRouter(a)