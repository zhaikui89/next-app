import { withRouter } from 'next/router'
import styled from 'styled-components'

const Title = styled.h1`
  color: black;
  font-size: 20px;
`;
const a = ({ router, name }) => {
    console.log(router)
    return (
        <>
            <Title>123</Title>
            {router.query.id + name}
        </>
        )
}
a.getInitialProps = async (ctx) => {
    return { name: 'zhaikui' }
}
export default withRouter(a)