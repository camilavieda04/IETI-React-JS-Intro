import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component{
    render(){
        const numbers = this.props.numbers;
        const listNumbers = numbers.map((number) => 
            <Todo text={number.text} priority={number.priority} dueDate={number.dueDate} />   
        );
    return (
       <ul>{listNumbers}</ul>
    );
}
}
