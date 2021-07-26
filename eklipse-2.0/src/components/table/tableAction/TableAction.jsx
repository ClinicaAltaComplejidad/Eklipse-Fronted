import React from 'react';

import './tableAction.css';

function TableAction({actionTitle, actionBody, actions}) {
    return (
        <div className="table_action">
            <h2 className="action_title">
                {actionTitle}
            </h2>
            <div className="body_action">
                {actionBody}
            </div>
            <div className="actions">
                {actions}
            </div>
        </div>
    )
}

export default TableAction;
