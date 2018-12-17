import React, { Component } from 'react';

class Bike extends Component {
    state = {
        bikes: [{ id: 1, name: "gold bike" },
        { id: 2, name: "red bike " },
        { id: 3, name: "blue bike " },
        ]
    }

    render() {
        
        const { id } = this.props.match.params;
        console.log(this.props.match.params.id);

        const bike = this.state.bikes.find(bike => {
            console.log('bike.id',': ',  bike.id);
            console.log('id',': ',  id);
            
            return (bike.id == { id })
        })

        return (bike)?  (
            <div>
                <h2>
                    {bike.id}: {bike.name}
                </h2>
            </div>
        ): <h1> That bike does not exist </h1>;
    }
}

export default Bike;
