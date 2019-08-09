import React from 'react';

class DataDisp extends React.Component {
  render(){
    return(
      <div>
      {this.props.list.map(data=>{
        return(
          <div>
            <h3>{data.name}</h3>
            <h4>{data.course}</h4>
            <h5>{data.technique}</h5>
            {data.ingredients.map(ing=>{
              return(
                <p>{ing}</p>
              );
            })}
          </div>
        );
      })}
      </div>
    );
  }
}

export default DataDisp;