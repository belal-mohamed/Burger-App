import React from 'react';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends React.Component {
        state = {
            error: false
        };

        componentDidMount() {
            this.request = axios.interceptors.request.use(req => {
                this.setState({
                    error:false
                });
                return req
            });

            this.response = axios.interceptors.response.use(res => res, err => {
                this.setState({
                    error: true
                });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.request);
            axios.interceptors.response.eject(this.response);
        }

        render() {
            return (
                !this.state.error ? <WrapperComponent {...this.props} /> : <ErrorMessage />
            )
        }
    }
}

export default withErrorHandler;