import {withRouter} from 'next/router'


const b = (props) => {
    console.log(props.router)
    return <div>{props.router.pathname}</div>
}
export default withRouter(b)