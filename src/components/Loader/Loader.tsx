import * as React from 'react';

import './Loader.scss';

const Loader: React.FC = () => {

    return (
        <div className="loader__container">
            <div className="loader"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;
