import React, {Component} from 'react';
import Title from './Title/Title';
import SelectBox from './form/SelectBox/SelectBox';

export class App extends Component {
    action(key) {
        console.log(key);
    }

    render() {
        return (
            <div>
                <Title title="WOW"/>
                <SelectBox items={['Apple', 'Pear']} action={this.action} placeholder='Select your fruit'/>
            </div>
        );
    }
}
;

export default App;