import React from 'react';
import './Container.css';
import NewTransaction from '../NewTransaction/NewTransaction';
import Extract from '../Extract/Extract';

const Container = props => {
    return (
        <div className="grid-container">
            <div className="grid-row">
                <div className="grid-col-5 ">
                    <NewTransaction param={props} />
                </div>
                <div className="grid-col-7">
                    <Extract param={props} />
                </div>
            </div>
        </div>
    );
}

export default Container;