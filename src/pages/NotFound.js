import styled from 'styled-components'

const NotFound = () => {
    return (
        <ErrorNotFound>
            <h1>Error 404:</h1>  
            <h3>Page not Found</h3>
        </ErrorNotFound>
    )
}

const ErrorNotFound = styled.div`
    display: block;
    padding: 10rem 10rem;
    text-align: center;
    height: 90vh;
    h1{
        font-weight: bolder;
        font-size: 10rem;
    }
    h3{
        line-height: 200%;
        font-weight: bold;
        font-size: 5rem;
        color: white;
    }
`;

export default NotFound