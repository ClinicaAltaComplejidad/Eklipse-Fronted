import React from 'react';

import './tableFooter.css';

function TableFooter({footerTitle, pagination}) {
    return (
        <footer className="footer_table table_footer">
            <div className="footer_title">
                {footerTitle}
            </div>
            <section className="footer_pagination">
                {pagination}
            </section>
        </footer>
    )
}

export default TableFooter;
