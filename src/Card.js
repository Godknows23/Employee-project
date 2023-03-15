import React from 'react'

function Card() {
  return (
    <div>

        <div class="card">  
            <img src={require('./img/empty.png')}/>
            <p class='card-text'>You have no employees</p>
            
        </div>
    </div>
  )
}

export default Card