import React, { useEffect, useState } from 'react';
import Item from './Item';

const InventoryList = () => {

    const [items, setItems] = useState();
    let url = "http://localhost:8080/items"

    useEffect(() => { 
        fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setItems(result);
        })
    }, []);   
    if(!items) return null;
    return (
        <React.Fragment>
            <ul>
                {items.map(item => {
                    <Item item={item}></Item>
                })}
            </ul>
        </React.Fragment>
    );
};

export default InventoryList;