import React from 'react';

const CustomFunction = React.forwardRef(({ className, children, title }, ref) => {
    return (
        <section className={className} ref={ref} id={title}>
            <h2>{title}</h2>
            {children}
        </section>
    );
});

export default CustomFunction;