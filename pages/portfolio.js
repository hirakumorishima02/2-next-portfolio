import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class Portfolio extends React.Component{
    render() {
        return (
            <BaseLayout>
                <h1>This is a Portfolio page.</h1>
                <h1>{this.props.router.query.title}</h1>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);