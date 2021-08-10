import React from 'react';

const lazyLoading = ( importedComponent ) =>  {
    return class extends React.Component {
        state = {
            comp: null
        };

        componentDidMount() {
            importedComponent()
                .then( cmp => {
                    this.setState({
                        comp: cmp.default
                    })
                })
        }

        render() {
            const C = this.state.comp;
            return (
                C ? <C {...this.props}/> : null
            );
        }
    }
}

export default lazyLoading;