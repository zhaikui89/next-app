import Link from 'next/link'
import { Divider } from 'antd';
import {Button} from 'antd'

const header = () => {
    return (<div>
        <Link href="/a?id=123"><Button>a</Button></Link>
        <Link href="/b"><Button>b</Button></Link>
    </div>)
}
export default header