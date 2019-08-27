import styled from 'styled-components'

export default styled.section`
    display: flex;
    flex-direction: column;
    .field {
        display: flex;
        align-items: center;
        .title {
            font-size: 2rem;
        }
        .value {
            display: flex;
            .type {
                display: flex;
                flex-direction: column;
                justify-content: center;
                span {
                    text-align: center;
                    font-size: 1.6rem;
                }
            }
        }
    }
`