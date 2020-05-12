import * as React from 'react';

import './NotFound.scss';

const NotFound: React.FC = () => {

    return (
        <div className="main">
            <div className="container">
                <div className="not-found">
                    <h1 className="main__title">Page Not Found</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
