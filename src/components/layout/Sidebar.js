import React from 'react';

const Sidebar = () =>{
    return(
        <SideNav onSelect={(selected) => {
        // Add your code here
    }}>

    <SideNav.Toggle />

        </SideNav>
    );
}

export default Sidebar;