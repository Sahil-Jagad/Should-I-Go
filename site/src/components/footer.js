import React from 'react';
import './footer.css'

const {useState, useEffect} = React;
const users = ["Irvine", "Long Beach", "Fremont", "Cupertino"];
var key_stroke = { 'heart': Array('\u2665') };

function Footer(){
    const [selected, setSelected] = useState(0);

    const handleAssigneeOnClick = () => {
    setSelected(prev => {
        if (prev === users.length - 1) {
            return 0;
        } else {
            return prev + 1;
        }
        });
    };

    return (
        <div className="footerbar" onClick={handleAssigneeOnClick}>
            <div>
                <footer className="footerText"> Made with {key_stroke.heart} {users[selected]}, CA</footer>
            </div>
        </div>
    )
}

export default Footer