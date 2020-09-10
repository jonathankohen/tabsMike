import React, { useState } from 'react';

function App() {
    const [tabs, setTabs] = useState([
        {
            index: 0,
            text: 'hello from tab 0',
            selected: true,
        },
        {
            index: 1,
            text: 'hello from tab 1',
            selected: false,
        },
        {
            index: 2,
            text: 'hello from tab 2',
            selected: false,
        },
        {
            index: 3,
            text: 'NEW TAB BBBBBBB',
            selected: false,
        },
    ]);

    const clickHandler = (clickedIndex) => {
        console.log(`You've clicked tab number ${clickedIndex}`);
        tabs.map((tab, i) => {
            let t = tab;
            if (clickedIndex === i) {
                t.selected = true;
            } else {
                t.selected = false;
            }
            setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
        });
    };

    return (
        <div className="App">
            {tabs.map((tab, i) => {
                <TabHeader
                    index={i}
                    key={i}
                    selected={tab.selected}
                    onclick={clickHandler}
                />;
            })}

            {tabs.map((tab, i) => {
                return tab.selected ? <h1 key={i}>{tab.text}</h1> : '';
            })}
        </div>
    );
}
