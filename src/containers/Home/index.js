import React from 'react';

class Home extends React.Component{
    render() {
        console.log('location', this.props);
        
        return(
            <div>HomePage</div>
        )
    }
}

export default Home;