// import React from 'react';
// import Card from './Card';
// import { rob } from './robots';
// const ArrofCard = () =>
// {
//     const cardcomp = rob.map((user,i)=> {
//         return <Card key={i} name={rob[i].name} id={rob[i].id} user={rob[i].username} email={rob[i].email}/>
//     })
//     return(
//         <div className='bg-light-blue'>
//             { cardcomp }
//         </div>
//     );
// }
// export default ArrofCard;

import React from 'react';
import Card from './Card';
const ArrofCard = (props) =>
{
    const arrs=[];
    let i=0;
    props.rob.forEach(function(elem)
    {
        arrs[i]=<Card key={i} named={ elem.name } usern={ elem.username }  em={ elem.email }/>
        i=i+1;
    })
    return(
        <div>
            { arrs }
        </div>
    )
    
};
export default ArrofCard;
