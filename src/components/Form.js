import React from 'react';
import styles from './Form.module.css'
import useSelect from "../hooks/useSelect";

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: "general", label: "General"},
        {value: "business", label: "Business"},
        {value: "entertainment", label: "entertainment"},
        {value: "health", label: "health"},
        {value: "sports", label: "sports"},
        {value: "science", label: "science"},
        {value: "technology", label: "technology"},

    ];


    const [state, SelectComponent] = useSelect("general", OPTIONS);

    const searchNews = (e) => {
        e.preventDefault();
        setCategory(state);
    };


    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={searchNews} action="">
                    <h2 className={styles.heading}>Find news selecting a category</h2>
                    <SelectComponent/>
                    <div className="input-field col s12">
                        <input type="submit" value="search" className={`${styles.btn_block} btn-large amber darken-2`}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
