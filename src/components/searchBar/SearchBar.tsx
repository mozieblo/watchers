import React, {ChangeEvent, FC, useState} from 'react';

const SearchBar: FC = () => {
    const [value, setValue] = useState('');

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const {value} = e.target;
        setValue(value);
    }

    return (
        <div>
            <p>test</p>
            <input type="text" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)} />
        </div>
    );
};

export default SearchBar;