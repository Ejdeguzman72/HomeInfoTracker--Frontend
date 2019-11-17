import React from 'react';
import { thisExpression } from '@babel/types';
import { any } from 'prop-types';

export class ToDoListComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    handleUpdate(key: any, value: any) {
        this.setState({
            [key]: value
        });
    }

    addItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        })

    }
    deleteItem(id: any) {
        const list = [...this.state.list];
    
        const updatedList = list.filter(item => item.id != id);

        this.setState({list: updatedList})
    }

    render() {
        return (
            <div>
                <div id="hero-to-do-list-component-background">
                    <div id="to-do-list-container">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12 offset-6">
                                    <h1>Add an Item...</h1>
                                    <input 
                                    type="text" 
                                    placeholder="Type item here..."
                                    value={this.state.newItem} 
                                    onChange={e => this.handleUpdate("newItem", e.target.value)}
                                     />
                                    <br></br><br></br>
                                    <button className="btn-dark" onClick={() => this.addItem()}>Add an Item</button>
                                    <br></br>
                                    <ul>
                                        {this.state.list.map((item: { id: string | number | undefined; value: React.ReactNode; }) => {
                                            return(
                                                <li key={item.id} id="to-do-list-item">
                                                    {item.value}
                                                    <button className="btn-dark" onClick={() => this.deleteItem(item.id)}>X</button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}