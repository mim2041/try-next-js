"use client";

const template = ({children}) => {
    console.log("from template")
    return (
        <div>
            <button>WOW</button>
            {children}
        </div>
    );
};

export default template;